import { useState } from "react";
import axios from "axios";

const useDeleteReservation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteReservation = async (reservationId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`/api/reservations/${reservationId}`);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { deleteReservation, loading, error };
};

export default useDeleteReservation;
