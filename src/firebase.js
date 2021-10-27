import firebase from "firebase";
// import { functions } from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBxowBwsC6KeV6LHeQTxkeG8H2TMchF_W4",
  authDomain: "club-app-a2207.firebaseapp.com",
  projectId: "club-app-a2207",
  storageBucket: "club-app-a2207.appspot.com",
  messagingSenderId: "891883139542",
  appId: "1:891883139542:web:bb6c34cff9af2878c0b477",
  measurementId: "G-7R0XQZY16X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};


export const generateSchoolDocument = async(school, additionalData) => {
  if (!school) return;

  const schoolRef = firestore.doc(`Schools/${school.uid}`);
  const snapshot1 = await schoolRef.get();

  if (!snapshot1.exists) {
    const { clubs, displayName, photoURL } = school; // change
    try {
      await schoolRef.set({
        clubs,
        displayName,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating school document", error);
    }
  }
  return getSchoolDocument(school.uid);
}

export const getSchoolDocument = async uid => {
  if (!uid) return null;
  try {
    const schoolDocument = await firestore.doc(`Schools/${uid}`).get();

    return {
      uid,
      ...schoolDocument.data()
    };
  } catch (error) {
    console.error("Error fetching school", error);
  }
};
