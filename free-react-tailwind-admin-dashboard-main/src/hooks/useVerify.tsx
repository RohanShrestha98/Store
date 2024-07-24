import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast';

const useVerify = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const handleVerify = async () => {
    try {
      // const response = await axios.post("auth/v1/token/access/", {
      //   refresh: decryptedData(cookies.get("refreshToken")),
      // });
      const result = await axios.post('api/v3/auth/create-access-token/', {
        refresh: user.refresh,
      });
      return result;
    } catch (error) {
      let errorMessage = error?.response?.data?.error
        ? error?.response?.data?.message?.toString()
        : error?.message?.toString();
      // toast.error(errorMessage);
      logout();
      navigate('/signin', { replace: true });
    }
  };
  return handleVerify;
};

export default useVerify;
