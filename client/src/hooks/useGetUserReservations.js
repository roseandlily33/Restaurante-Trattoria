import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetUserReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/reservations');
        setReservations(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  return { reservations, loading, error };
};

export default useGetUserReservations;