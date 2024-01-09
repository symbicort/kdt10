import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">홈으로 이동하기</Link>
    </div>
  );
}

export default NotFound;
