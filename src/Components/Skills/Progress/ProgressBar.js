import './ProgressBar.css';
function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container">
        <div className="progress-bar">
            <span className="progress-bar-text">0%</span>
        </div>
    </div>

  );
}

export default ProgressBar;