import { useNavigate } from 'react-router-dom';
import './Unauthorized.css';

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-container">
      <h1 className="unauthorized-heading">🚫 Unauthorized</h1>
      <p className="unauthorized-message">
        You do not have permission to access this page.
      </p>
      <button
        className="unauthorized-button"
        onClick={() => navigate('/login')}
      >
        Go to Login
      </button>
    </div>
  );
}
