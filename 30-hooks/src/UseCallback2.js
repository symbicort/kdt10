import { useState, useCallback } from 'react';
import axios from 'axios';

function UseCallback2() {
  const [post, setPost] = useState({});

  const getPost = async () => {
    console.log('data fetching');

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  });

  return (
    <>
      <h1>useÇallback ex2</h1>
      {post.id ? post.title : '로딩중.'}
    </>
  );
}

export default UseCallback2;
