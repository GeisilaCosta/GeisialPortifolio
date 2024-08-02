import React, { useEffect, useState } from 'react';
import { db, doc, getDoc, setDoc, increment } from '../firebase';

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const updateViewCount = async () => {
      const counterRef = doc(db, 'pageViews', 'home');
      const docSnap = await getDoc(counterRef);

      if (docSnap.exists()) {
        // Increment the view count
        await setDoc(counterRef, { views: increment(1) }, { merge: true });
        setViews(docSnap.data().views + 1);
      } else {
        console.error('No such document!');
      }
    };

    updateViewCount();
  }, []);

  return (
    <div>
      <h2>Visualizações: {views}</h2>
    </div>
  );
};

export default ViewCounter;
