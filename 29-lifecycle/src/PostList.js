import { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setDataList(response.data);
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <>
      {console.log(dataList)}
      <h4 className="post-list-title">PostList</h4>
      {loading ? (
        <h4 className="loading-box">Loading</h4>
      ) : (
        <>
          {dataList.map((data) => (
            <div key={data.id} className="item-box">
              <div className="item-header">
                No {data.id}. {data.title}
              </div>
              <div className="item-body">{data.body}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default PostList;
