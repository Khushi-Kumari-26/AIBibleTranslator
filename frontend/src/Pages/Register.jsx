import { useState } from 'react';
// import './Login.css'; // Reuse same styles
import { useNavigate } from 'react-router-dom';
import './Register.css';


export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('✅ Registration successful! Please login.');
        navigate('/login');
      } else {
        alert(`❌ Registration failed: ${data.detail}`);
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('❌ Error connecting to server.');
    }
  };
  

    return (
      <div className="login-container">
        <form className="login-box" onSubmit={handleRegister}>
          <div className="logo">📖</div>
          <h1>Register Account</h1>
          <p className="subtitle">Create a new Bible Translator account</p>

          <label>Email</label>
          <input type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)} />

          <label>Register as:</label>
          <div className="role-buttons">
            <button
              type="button"
              className={`role-btn ${role === 'user' ? 'selected' : ''}`}
              onClick={() => setRole('user')}
            >
              👤 User
            </button>
          </div>

          <button type="submit" className="submit-btn">Register</button>

          <div className="back-link">
            <a href="/login">← Back to Login</a>
          </div>
        </form>
      </div>
    );
  }
