/* eslint-disable import/no-unresolved */
// eslint rules started from root project, where we don't have firebase

import { onRequest } from 'firebase-functions/v2/https';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { initializeApp } from 'firebase-admin/app';
import * as logger from 'firebase-functions/logger';

const SCHEMA = {
  COLLECTION_NAME: 'csn-journal',
};

initializeApp();

const db = getFirestore();

// const storage = getStorage().bucket();

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
    const { abstract, title } = req.body;
    if (!title || !abstract) {
      res.status(400).json({ error: 'Title and content are required.' });
      return;
    }

    const newArticle = {
      abstract,
      createdAt: FieldValue.serverTimestamp(),
      title,
    };

    const docRef = await db.collection(SCHEMA.COLLECTION_NAME).add(newArticle);

    res.status(201).json({ id: docRef.id, ...newArticle });
  } catch (error) {
    logger.error('Error adding article: ', error);
    res.status(500).json({ error: 'Failed to add article' });
  }
});
