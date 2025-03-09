import { useState, useEffect } from "react";
import axios from "axios";

const useGetReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/reviews");
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
};

export default useGetReviews;
