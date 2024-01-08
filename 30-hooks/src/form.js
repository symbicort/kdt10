import { useForm } from 'react-hook-form';

function Form() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 이벤트 시 호출
    formState: { errors }, // 폼 상태 객체 (그 안에 에러 객체)
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  console.log('errors', errors);
  console.log('watch username', watch('username'));

  const onValid = (data) => {
    console.log('onValid', data);
  };

  const onInValid = (err) => {
    console.log('onInValid', err);
  };
  return (
    <>
      <h1>react-hook-form 라이브러리 데모</h1>
      {/* handleSubmit(func A [, func B]) : 두개의 함수를 받을 수 있음
      - func A: 필수, 유효할 때 실행
      - func B: 선택, 유효하지 않을 때 실행
       */}
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="username"
          // 원래 name="username"
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요',
              value: 2,
            },
          })}
        />
        {/* 에러 메시지 */}
        {errors.username?.message}
        <br />

        <input
          type="email"
          placeholder="email (gmail)"
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: {
              useGmail: (value) => {
                return (
                  value.includes('gmail.com') || 'gmail로만 가입 가능합니다'
                );
              },
            },
          })}
        />
        {errors.email?.message}
        <br />

        <input type="text" placeholder="paassword" {...register('password')} />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
