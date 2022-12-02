var admin = require("firebase-admin");

var serviceAccount = require("../api-raspberry-private-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };