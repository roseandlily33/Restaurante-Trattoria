import { useState } from "react";
import axios from "axios";

const useAddReview = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addReview = async (reviewText) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/reviews", { reviewText });
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { addReview, loading, error };
};

export default useAddReview;
