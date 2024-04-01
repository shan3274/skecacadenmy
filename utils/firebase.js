import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useMemo, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const getElement = (url) => {
  const [data, setData] = useState();
  useMemo(async () => {
    await getDoc(doc(db, url)).then((response) => {
      setData(response.data());
    });
  }, []);
  return data;
};

export const getElements = (url) => {
  const [data, setData] = useState();
  useMemo(async () => {
    await getDocs(collection(db, url)).then((response) => {
      setData(
        response.docs.map((res) => {
          return { ...res.data(), id: res.id };
        })
      );
    });
  }, []);
  return data;
};
