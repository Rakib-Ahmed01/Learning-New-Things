import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axios';

export default function Home() {
  const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance('/protected');
        setContent(res.data?.data);
      } catch (error) {
        // console.log(error);
      }
    })();
  }, []);

  return <div>Home - {content && <span>{content}</span>}</div>;
}
