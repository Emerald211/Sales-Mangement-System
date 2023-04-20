import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  collection,
  getFirestore,
  query,
  getDocs,
  doc,
  writeBatch,
  updateDoc,
  deleteDoc,
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

export const customSignInWIthEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const customOnAUthStateChange = (callback) =>
  onAuthStateChanged(auth, callback);

  const dataId = `dhdd${Math.floor(Math.random() * 1263434343)}ggdhn`

const dataSet = [
  {
    name: "Lenovo Probook 2022",
    color: "Ash",
    category: "Laptop",
    price: 1099,
    id: dataId ,
  },
];


export const addCollectionandDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);



  dataSet.forEach((object) => {
    const docRef = doc(collectionRef, dataId );
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
  const productDoc = doc(db, 'inventory', id)

  try {
    await updateDoc(productDoc, {
      approved: true
    });

    console.log("done");
  }
  catch (error) {
    console.log(error);
  }
}