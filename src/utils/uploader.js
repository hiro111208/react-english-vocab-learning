var admin = require("firebase-admin");
const fs = require("fs");
var serviceAccount = require("./service_key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Read JSON file
const data = JSON.parse(fs.readFileSync("eng-ja-5.json", "utf8"));

// Function to upload data to Firestore
async function uploadData() {
    const batch = db.batch();
    data.forEach((item, index) => {
        const docRef = db.collection("decks").doc(`word${index + 1}`);
        batch.set(docRef, item);
    });

    await batch.commit();
    console.log("Data uploaded successfully.");
}

uploadData().catch(console.error);
