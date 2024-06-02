import './ProgressBar.css';
function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span className="progress-bar-text">{progress}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;