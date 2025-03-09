import { useState } from "react";
import CustomerReviews from "./CustomerReview";

const CustomerReviewSection = () => {
  //For ADD_REVIEW
  const [reviewText, setReviewText] = useState("");

  return (
    <>
      <form>
        <label>Leave a review:</label>
        <textarea
          name="reviewText"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows="4"
          cols="50"
        />
        <button className="button">Submit</button>
      </form>
      <CustomerReviews />
    </>
  );
};

export default CustomerReviewSection;
