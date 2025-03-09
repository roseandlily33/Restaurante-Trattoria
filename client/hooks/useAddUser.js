import { useState } from "react";
import axios from "axios";

const useAddUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addUser = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users", userData);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { addUser, loading, error };
};

export default useAddUser;
