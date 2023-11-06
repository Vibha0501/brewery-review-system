import { db } from "@/firebase/firebase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

const loadReviews = async (breweryId) => {
  try {
    const reviewsRef = collection(db, `reviews/${breweryId}/reviews`);
    const snapshot = await getDocs(reviewsRef);
    const reviews = [];
    snapshot.forEach((doc) => {
      reviews.push({ id: doc.id, ...doc.data() });
    });
    return reviews;
  } catch (error) {
    console.error("Error loading reviews:", error);
    return [];
  }
};

const addReview = async (breweryId, review) => {
  try {
    const reviewsRef = collection(db, `reviews/${breweryId}/reviews`);
    await addDoc(reviewsRef, review);
    console.log("Review added successfully!");
  } catch (error) {
    console.error("Error adding review:", error);
  }
};

export { loadReviews, addReview };
