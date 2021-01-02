import { useLocation } from 'react-router-dom';

const useAccessTokenInfo = () => {
  const { hash } = useLocation();
  const values = decodeURIComponent(hash).replace('#', '').split('&');

  return values.reduce((prev, current) => {
    const [key, value] = current.split('=');
    return { ...prev, [key]: value };
  }, {});
};

export default useAccessTokenInfo;
