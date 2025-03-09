import { useState } from "react";
import axios from "axios";

const useDeleteReview = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteReview = async (reviewId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`/api/reviews/${reviewId}`);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { deleteReview, loading, error };
};

export default useDeleteReview;
