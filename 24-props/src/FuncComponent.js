import PropTypes from 'prop-types';

// function FuncComponent(props) {
//   const { name } = props;
//   return (
//     <div>
//       <p>
//         좋아하는 음식은 <b>{name}</b>
//       </p>
//     </div>
//   );
// }

function FuncComponent(props) {
  const { title, author, price, type } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>저자: {author}</p>
      <p>판매가: {price}</p>
      <p>구분: {type}</p>
    </div>
  );
}

FuncComponent.defaultProps = {
  name: 'food',
};

// FuncComponent.PropTypes = {
//   name: PropTypes.string,
// };

export default FuncComponent;
