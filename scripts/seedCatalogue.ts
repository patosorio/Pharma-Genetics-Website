// Use require instead of import so ts-node doesn't complain
// run: npx ts-node scripts/seedCatalogue.ts

const { readFileSync } = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function seed() {
  try {
    const raw = readFileSync("./scripts/data.json", "utf8");
    const catalogue = JSON.parse(raw);

    console.log(`🚀 Starting upload of ${catalogue.length} items to Firestore...`);

    const colRef = db.collection("catalogue");

    for (const item of catalogue) {
      // Let Firestore autogenerate ID
      await colRef.add(item);
      console.log(`✅ Uploaded: ${item.name}`);
    }

    console.log("🎉 All catalogue items uploaded successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Failed seeding:", err);
    process.exit(1);
  }
}

seed();