import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage().bucket();

// Check if the app is running in the emulator
if (process.env.FUNCTIONS_EMULATOR) {
  db.settings({
    host: 'localhost:8080',
    ssl: false,
  });
  // You might want to mock storage interactions here or skip them
  console.log('Running in emulator - consider mocking storage or handle it carefully.');
}

export const getArticles = functions.https.onRequest(async (req, res) => {
  try {
    const { journalId = '' } = req.query; // Assuming journalId is passed as a query parameter

    // @ts-expect-error
    const snapshot = await db.collection('csn-journal').doc(journalId).collection('articles').get();
    const articles = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve articles' });
  }
});

export const addArticle = functions.https.onRequest(async (req, res) => {
  try {
    const {
      journalId, title, author, content, pdfBase64,
    } = req.body;

    // Generate a unique filename for the PDF
    const pdfFilename = `${title.replace(/\s+/g, '_')}_${Date.now()}.pdf`;

    // Decode the base64 file and upload it to Firebase Storage
    const buffer = Buffer.from(pdfBase64, 'base64');
    const file = storage.file(pdfFilename);
    await file.save(buffer, {
      metadata: {
        contentType: 'application/pdf',
      },
    });

    // Get the URL of the uploaded PDF
    const pdfUrl = await file.getSignedUrl({
      action: 'read',
      expires: '03-01-2500',
    });

    // Add article metadata to Firestore under the specific journal's articles subcollection
    const newArticle = {
      author,
      content,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      pdfUrl: pdfUrl[0], // Store the URL in Firestore
      title,
    };

    const docRef = await db.collection('csn-journal').doc(journalId).collection('articles').add(newArticle);

    res.status(200).json({ id: docRef.id, ...newArticle });
  } catch (error) {
    console.error('Error adding article:', error);
    res.status(500).json({ error: 'Failed to add article' });
  }
});

// export const deleteArticle = functions.https.onRequest(async (req, res) => {
//   try {
//     const { journalId, articleId } = req.body;
//
//     // Reference to the article document in Firestore
//     const articleDocRef = db.collection('csn-journal').doc(journalId).collection('articles').doc(articleId);
//     const doc = await articleDocRef.get();
//
//     if (!doc.exists) {
//       return res.status(404).json({ error: 'Article not found' });
//     }
//
//     const article = doc.data();
//
//     // Optionally delete the associated PDF file from Firebase Storage
//     if (article?.pdfUrl) {
//       const fileName = article.pdfUrl.split('/').pop(); // Extract the file name from the URL
//       const file = storage.file(fileName);
//       await file.delete();
//     }
//
//     // Delete the article document from Firestore
//     await articleDocRef.delete();
//
//     res.status(200).json({ message: 'Article deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting article:', error);
//     res.status(500).json({ error: 'Failed to delete article' });
//   }
// });
//
// export const updateArticle = functions.https.onRequest(async (req, res) => {
//   try {
//     const {
//       journalId, articleId, title, author, content, pdfBase64,
//     } = req.body;
//
//     // Reference to the article document in Firestore
//     const articleDocRef = db.collection('csn-journal').doc(journalId).collection('articles').doc(articleId);
//     const doc = await articleDocRef.get();
//
//     if (!doc.exists) {
//       return res.status(404).json({ error: 'Article not found' });
//     }
//
//     const article = doc.data();
//     let updatedPdfUrl = article?.pdfUrl;
//
//     // If a new PDF is provided, upload it and update the PDF URL
//     if (pdfBase64) {
//       // Generate a new filename for the updated PDF
//       const pdfFilename = `${title.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
//
//       // Decode the base64 file and upload it to Firebase Storage
//       const buffer = Buffer.from(pdfBase64, 'base64');
//       const file = storage.file(pdfFilename);
//       await file.save(buffer, {
//         metadata: {
//           contentType: 'application/pdf',
//         },
//       });
//
//       // Get the URL of the uploaded PDF
//       // eslint-disable-next-line prefer-destructuring
//       updatedPdfUrl = (await file.getSignedUrl({
//         action: 'read',
//         expires: '03-01-2500',
//       }))[0];
//
//       // Optionally delete the old PDF file from Storage
//       if (article?.pdfUrl) {
//         const oldFileName = article.pdfUrl.split('/').pop(); // Extract the old file name from the URL
//         const oldFile = storage.file(oldFileName);
//         await oldFile.delete();
//       }
//     }
//
//     // Update the article metadata in Firestore
//     const updatedArticle = {
//       author: author || article?.author || '',
//       content: content || article?.content || '',
//       pdfUrl: updatedPdfUrl,
//       title: title || article?.title || '',
//       updatedAt: admin.firestore.FieldValue.serverTimestamp(),
//     };
//
//     await articleDocRef.update(updatedArticle);
//
//     res.status(200).json({ id: articleId, ...updatedArticle });
//   } catch (error) {
//     console.error('Error updating article:', error);
//     res.status(500).json({ error: 'Failed to update article' });
//   }
// });
