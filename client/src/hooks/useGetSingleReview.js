import { useState, useEffect } from "react";
import axios from "axios";

const useGetSingleReview = (reviewId) => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/reviews/${reviewId}`);
        setReview(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchReview();
  }, [reviewId]);

  return { review, loading, error };
};

export default useGetSingleReview;
