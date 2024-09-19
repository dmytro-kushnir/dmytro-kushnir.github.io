import * as logger from 'firebase-functions/logger';
import { Bucket } from '@google-cloud/storage';
import articlesMock from '../mock.json' assert { type: 'json' };

// Function to seed data in Firebase Storage
const seedStorage = async (
  storageBucket: Bucket,
  db: FirebaseFirestore.Firestore,
  collectionName: string,
) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const article of articlesMock) {
    if (article.fileName && article.fileContent) {
      const file = storageBucket.file(article.fileName);
      const buffer = Buffer.from(article.fileContent, 'base64'); // Assuming fileContent is base64 encoded
      // eslint-disable-next-line no-await-in-loop
      await file.save(buffer, {
        contentType: article.fileName.endsWith('.pdf') ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        public: true,
      });

      const fileURL = `https://storage.googleapis.com/${storageBucket.name}/${encodeURIComponent(article.fileName)}`;
      logger.info(`Seeded file for article: ${article.title} -> ${article.fileName}`);

      // Update Firestore with the fileURL
      const docRef = db.collection(collectionName).doc(article.id);
      // eslint-disable-next-line no-await-in-loop
      await docRef.update({ fileURL });
      logger.info(`Updated Firestore with fileURL for article: ${article.title}`);
    }
  }
  logger.info('Firebase Storage seeding completed.');
};

// Function to check and seed Firebase Storage if running in emulator
export const checkAndSeedStorage = async (
  storageBucket: Bucket,
  db: FirebaseFirestore.Firestore,
  collectionName: string,
) => {
  try {
    // Here you could add some logic to check if files already exist, if needed.
    // For simplicity, we're directly seeding the storage without checking.
    logger.info('Seeding files to Firebase Storage...');
    await seedStorage(storageBucket, db, collectionName);
  } catch (error) {
    logger.error('Error seeding files to Firebase Storage:', error);
  }
};

export default checkAndSeedStorage;
