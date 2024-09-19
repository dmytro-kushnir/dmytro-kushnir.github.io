/* eslint-disable import/no-unresolved */
// eslint rules started from root project, where we don't have firebase

import { onRequest } from 'firebase-functions/v2/https';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { initializeApp } from 'firebase-admin/app';
import * as logger from 'firebase-functions/logger';

// eslint-disable-next-line import/extensions
import initEmulatorSeeding from './seed/index.js';

const SCHEMA = {
  BUCKET_NAME: 'dmytro-kushnir-apps.appspot.com',
  COLLECTION_NAME: 'csn-journal',
  STORAGE_URL: 'https://storage.googleapis.com',
};

initializeApp();

const db = getFirestore();

const storage = getStorage().bucket();

let storageURL = SCHEMA.STORAGE_URL;
// Check if the app is running in the emulator for both Firestore and Storage
if (process.env.FIREBASE_STORAGE_EMULATOR_HOST) {
  logger.info('Running in Firebase Storage Emulator...');
  storageURL = `http://${process.env.FIREBASE_STORAGE_EMULATOR_HOST}/v0/b/${SCHEMA.BUCKET_NAME}/o`;
}

// Check if the emulator is running and seed data
if (process.env.FIREBASE_EMULATOR_HUB) {
  logger.info('Running Emulator. Checking for data...');
  await initEmulatorSeeding(db, storage, SCHEMA.COLLECTION_NAME);
}

export const getArticles = onRequest(async (_req, res) => {
  try {
    const articlesRef = db.collection(SCHEMA.COLLECTION_NAME);
    const snapshot = await articlesRef.get();

    if (snapshot.empty) {
      res.status(200).json({ message: 'No articles found.' });
      return;
    }

    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(articles);
  } catch (error) {
    logger.error('Error retrieving articles: ', error);
    res.status(500).json({ error: 'Failed to retrieve articles' });
  }
});

export const addArticle = onRequest(async (req, res) => {
  try {
    const {
      abstract, title, authors, fileName, fileContent,
    } = req.body;

    if (!title || !abstract || !authors || !fileName || !fileContent) {
      res.status(400).json({ error: 'All fields including fileName and fileContent are required.' });
      return;
    }

    // Save the file to Firebase Storage
    const file = storage.file(fileName);
    const buffer = Buffer.from(fileContent, 'base64'); // Assuming fileContent is base64 encoded
    await file.save(buffer, {
      contentType: fileName.endsWith('.pdf') ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      public: true,
    });

    const fileURL = `${storageURL}/${encodeURIComponent(fileName)}?alt=media`;

    // Add article to Firestore
    const newArticle = {
      abstract,
      authors,
      createdAt: FieldValue.serverTimestamp(),
      fileURL,
      title,
    };

    const docRef = await db.collection('csn-journal').add(newArticle);

    res.status(201).json({ id: docRef.id, ...newArticle });
  } catch (error) {
    logger.error('Error adding article: ', error);
    res.status(500).json({ error: 'Failed to add article' });
  }
});
