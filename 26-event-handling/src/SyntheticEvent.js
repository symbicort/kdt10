function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log('Synthetic Event!');
    console.log(e);
  }

  return (
    <div>
      <button onClick={syntheticEvent}>SyntheticEvent 콘솔에 찍기</button>
    </div>
  );
}

export default SyntheticEvent;
