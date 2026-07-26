import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "dummy-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dummy-auth-domain",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "http://127.0.0.1:9000?ns=imposter-real-default-rtdb",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "imposter-real",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dummy-storage-bucket",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "dummy-messaging-sender-id",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "dummy-app-id",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);
const auth = getAuth(app);

// Connect to Emulator if running locally
if (typeof window !== "undefined") {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    connectDatabaseEmulator(database, "127.0.0.1", 9000);
  }
  (window as any).firebaseDb = database;
  (window as any).firebaseAuth = auth;
  signInAnonymously(auth).catch((error) => {
    console.error("Firebase Anonymous Auth Failed:", error);
  });
}

export { app, database, auth };
