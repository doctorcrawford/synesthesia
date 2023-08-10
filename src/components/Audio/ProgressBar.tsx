const ProgressBar = () => {
  return (
    <div className="progress">
      <span className="time current">00:00</span>
      <input type="range" />
      <span className="time">4:14</span>
    </div>
  );
}

export default ProgressBar;