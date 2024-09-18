import * as logger from 'firebase-functions/logger';

import articlesMock from './articlesMock.json' assert { type: 'json' };

// Function to seed data in Firestore
const seedFirestore = async (db: FirebaseFirestore.Firestore, collectionName: string) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const article of articlesMock) {
    const docRef = db.collection(collectionName).doc(article.id);
    // eslint-disable-next-line no-await-in-loop
    await docRef.set(article);
    logger.info(`Seeded article: ${article.title}`);
  }
  logger.info('Firestore seeding completed.');
};

// Function to check and seed Firestore if running in emulator
export const checkAndSeedFirestore = async (
  db: FirebaseFirestore.Firestore,
  collectionName: string,
) => {
  try {
    const snapshot = await db.collection(collectionName).get();
    if (snapshot.empty) {
      logger.info('No articles found, seeding data...');
      await seedFirestore(db, collectionName);
    } else {
      logger.info('Articles already exist. Skipping seeding.');
    }
  } catch (error) {
    logger.error('Error checking articles:', error);
  }
};

export default checkAndSeedFirestore;
