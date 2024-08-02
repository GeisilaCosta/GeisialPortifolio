import { db, doc, setDoc } from './firebase';

const initializeViewCounter = async () => {
  const counterRef = doc(db, 'pageViews', 'home');
  await setDoc(counterRef, { views: 0 });
};

initializeViewCounter();
