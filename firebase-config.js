/* ============================================================
   FIREBASE CONFIG · ColCámaras
   ============================================================
   1. Crea tu proyecto en https://console.firebase.google.com
   2. Habilita Authentication → Email/Password
   3. Crea Firestore Database (modo producción)
   4. Habilita Storage
   5. En la configuración del proyecto → "Tus apps" → ícono web (</>),
      copia el objeto firebaseConfig que te da y reemplaza el de abajo
   6. Sube las Security Rules de FIREBASE_SETUP.md
   7. Crea las cuentas iniciales (admin y asesor) en Authentication
   8. Crea documentos en la colección "usuarios" para asignar roles
   ============================================================ */

// SDK Firebase v10 - cargado desde CDN oficial (no requiere npm)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
  writeBatch
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import {
  getStorage,
  ref as storageRef,
  uploadString,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

/* ============================================================
   ⚠️ REEMPLAZA ESTO con la config de TU proyecto Firebase.
   Lo obtienes en: Console Firebase → ⚙️ → Configuración del proyecto
   → Sección "Tus apps" → Web (</>)→ Configuración → objeto firebaseConfig
   ============================================================ */
const firebaseConfig = {
  apiKey: "AIzaSyCKNU0StgaXKJKsaIZ8uy7Uc6zdw1by6gA",
  authDomain: "colcamaras-app.firebaseapp.com",
  projectId: "colcamaras-app",
  storageBucket: "colcamaras-app.firebasestorage.app",
  messagingSenderId: "381385390181",
  appId: "1:381385390181:web:0116a2deffc389f3ec2e8c"
};

// Detectar si Firebase está configurado
const FIREBASE_CONFIGURADO = !firebaseConfig.apiKey.startsWith('REEMPLAZAR');

let app, auth, db, storage;

if (FIREBASE_CONFIGURADO) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  console.log('✓ Firebase inicializado:', firebaseConfig.projectId);
} else {
  console.warn('⚠️ Firebase NO configurado. Edita firebase-config.js con tus credenciales.');
  // Mostrar mensaje en la pantalla de login si existe
  document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('firebase-status');
    if (status) status.classList.remove('hidden');
  });
}

// Exportar todo lo que script.js va a usar
export {
  FIREBASE_CONFIGURADO,
  firebaseConfig,
  initializeApp,
  getAuth,
  app, auth, db, storage,
  // Auth
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail,
  // Firestore
  collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, where, orderBy, serverTimestamp, Timestamp, writeBatch,
  // Storage
  storageRef, uploadString, getDownloadURL, deleteObject
};
