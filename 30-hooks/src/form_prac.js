import { useForm } from 'react-hook-form';
import { useState } from 'react';

function FormPrac() {
  const [data, setData] = useState([]);

  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 이벤트 시 호출
    formState: { errors }, // 폼 상태 객체 (그 안에 에러 객체)
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  const onValid = (data) => {
    console.log(data);
    return <h3>{data}</h3>;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="username"
          // 원래 name="username"
          {...register('username', {
            required: '이름은 필수 항목입니다.',
          })}
        />
        {/* 에러 메시지 */}
        {errors.username?.message}
        <br />

        <input
          type="number"
          placeholder="나이"
          {...register('age', {
            required: '필수 입력 값입니다.',
            validate: {
              useAge: (value) => {
                return value >= 0 || '0 이상의 숫자만 입력 가능합니다';
              },
            },
          })}
        />
        {errors.age?.message}
        <br />

        <button type="submit">Submit</button>
      </form>

      <div>{data}</div>
    </>
  );
}

export default FormPrac;
