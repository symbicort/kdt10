import react, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends react.Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h2>{text}</h2>
        <button onClick={() => console.log('콘솔 띄우기 성공')}>
          콘솔 메시지
        </button>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  text: '이건 기본 text props입니다',
  valid: false,
};

export default ClassComponent;
