import { useState } from 'react';
import axios from 'axios';

const useAddReservation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addReservation = async (reservationData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/reservations', reservationData);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { addReservation, loading, error };
};

export default useAddReservation;