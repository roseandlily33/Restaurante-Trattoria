import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/users/login', credentials);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;