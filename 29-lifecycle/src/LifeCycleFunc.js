function LifeCycleFunc() {
  const { nunmber, setNumber } = useState(0);
  const { visible, setvisible } = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setvisible(!visible);
  };
}

export default LifeCycleFunc;
