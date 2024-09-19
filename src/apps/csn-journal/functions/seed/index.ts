import * as logger from 'firebase-functions/logger';
// eslint-disable-next-line import/extensions
import { Bucket } from '@google-cloud/storage';
// eslint-disable-next-line import/extensions
import { checkAndSeedFirestore } from './firestore/seed.js';
// eslint-disable-next-line import/extensions
import { checkAndSeedStorage } from './storage/seed.js';

const initializeEmulatorSeeding = async (
  db: FirebaseFirestore.Firestore,
  storage: Bucket,
  collectionName: string,
) => {
  try {
    // Check and seed Firestore
    logger.info('Checking Firestore seeding...');
    await checkAndSeedFirestore(db, collectionName);

    // Check and seed Firebase Storage
    logger.info('Checking Firebase Storage seeding...');
    await checkAndSeedStorage(storage, db, collectionName);
  } catch (error) {
    logger.error('Error during seeding process:', error);
  }
};

export default initializeEmulatorSeeding;
