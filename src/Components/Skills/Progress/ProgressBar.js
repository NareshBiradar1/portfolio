import './ProgressBar.css';
function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container">
        <div className="progress-bar"  style={{'--progress': `${progress}%`}}>
            <span className="progress-bar-text">{progress}</span>
        </div>
    </div>

  );
}

export default ProgressBar;