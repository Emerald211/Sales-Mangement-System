import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  collection,
  getFirestore,
  query,
  setDoc,
  getDocs,
  doc,
  writeBatch,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
// import data from "../../data";

const firebaseConfig = {
  apiKey: "AIzaSyAMvP1nyoun5FudZ7RPrar_QEUrqVzuShI",
  authDomain: "store-management-system-514bc.firebaseapp.com",
  projectId: "store-management-system-514bc",
  storageBucket: "store-management-system-514bc.appspot.com",
  messagingSenderId: "867188267129",
  appId: "1:867188267129:web:46c656ed578ff4ad731ca8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

export const customSignOut = async () => {
  await signOut();
};

export const customSignInWIthEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const customOnAUthStateChange = (callback) =>
  onAuthStateChanged(auth, callback);

const dataId = `dhdd${Math.floor(Math.random() * 1263434343)}ggdhn`;

const dataSet = [
  {
    name: "Lenovo Probook 2022",
    color: "Ash",
    category: "Laptop",
    price: 1099,
    id: dataId,
  },
];

export const addCollectionandDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  dataSet.forEach((object) => {
    const docRef = doc(collectionRef, dataId);
    batch.set(docRef, object);
  });

  await batch.commit();

  console.log("done");
};

export const getDocumentsFromCollection = async () => {
  const collectionRef = collection(db, "inventory");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const orders = querySnapShot.docs.map((docSnapshot) => docSnapshot.data());

  return orders;
};

export const deleteocumentsFroomCollections = async (id) => {
  const productDoc = doc(db, "inventory", id);
  try {
    await deleteDoc(productDoc);

    console.log("done");
  } catch (error) {
    console.log(error);
  }
};

export const updateDocumentsFromCollection = async (id) => {
  const productDoc = doc(db, "inventory", id);

  try {
    await updateDoc(productDoc, {
      approved: true,
    });

    console.log("done");
  } catch (error) {
    console.log(error);
  }
};

export const addDocumentToCollection = async (productToAdd) => {
  const collectionRef = collection(db, "inventory");

  try {
    const docRef = await addDoc(collectionRef, productToAdd);
    const documentId = docRef.id;

    const documentToUpdateRef = doc(collectionRef, documentId);
    await setDoc(documentToUpdateRef, { ...productToAdd, id: documentId });

    console.log("Document added and updated successfully");
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

const userDataSet = [
  {
    name: "Fredick Osas",
    email: "fredickosas@gmail.com",
    age: "19th April 2000",
  },
  {
    name: "Godswill Frank",
    email: "godswillfrank@gmail.com",
    age: "19th March 2001",
  },
  {
    name: "Williams Uche",
    email: "williamsuche@gmail.com",
    age: "4th March 2001",
  },
];

export const addUserCollectionandDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);

  userDataSet.forEach(async (object) => {
    await addDoc(collectionRef, object);
  });

  console.log("done");
};

export const getUserCollectionandDocuments = async () => {
  const collectionRef = collection(db, "users");
  const snapshot = await getDocs(collectionRef);

  const userList = snapshot.docs.map((doc) => doc.data());

  return userList;
};

const productDataSet = [
  {
    name: "Lenovo Probook 2022",
    color: "Ash",
    category: "Laptop",
    price: 1099,
  },
  {
    name: "Apple iPhone 13",
    color: "Black",
    category: "Phone",
    price: 999,
  },
  {
    name: "Samsung Galaxy Watch 4",
    color: "Silver",
    category: "Smartwatch",
    price: 299,
  },
  {
    name: "Sony PlayStation 5",
    color: "White",
    category: "Gaming Console",
    price: 499,
  },
  {
    name: "Microsoft Surface Pro 8",
    color: "Platinum",
    category: "Tablet",
    price: 899,
  },
  {
    name: "Amazon Echo Dot",
    color: "Charcoal",
    category: "Smart Speaker",
    price: 49,
  },
  {
    name: "DJI Mavic Air 2",
    color: "Arctic White",
    category: "Drone",
    price: 799,
  },
  {
    name: "Canon EOS R6",
    color: "Black",
    category: "Camera",
    price: 2499,
  },
  {
    name: "Nintendo Switch",
    color: "Neon Blue/Red",
    category: "Gaming Console",
    price: 299,
  },
  {
    name: "Fitbit Charge 4",
    color: "Rosewood",
    category: "Fitness Tracker",
    price: 149,
  },
];

export const addProductsCollectionandDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);

  productDataSet.forEach(async (object) => {
    const docRef = await addDoc(collectionRef, object);
    const docId = docRef.id;
    const updatedObject = { ...object, id: docId };
    await setDoc(docRef, updatedObject);
  });

  console.log("done");
};

export const addProductDocumentToCollection = async (productToAdd) => {
  const collectionRef = collection(db, "products");

  try {
    const docRef = await addDoc(collectionRef, productToAdd);
    const documentId = docRef.id;

    const documentToUpdateRef = doc(collectionRef, documentId);
    await setDoc(documentToUpdateRef, { ...productToAdd, id: documentId });

    console.log("Document added and updated successfully");
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

export const getProductsCollectionandDocuments = async () => {
  const collectionRef = collection(db, "products");
  const snapshot = await getDocs(collectionRef);

  const productList = snapshot.docs.map((doc) => doc.data());

  return productList;
};
