import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   alert(`Logging in as ${role}`);

  //   // ✅ Set token in localStorage
  //   localStorage.setItem('token', 'admin-token');

  //   // ✅ Navigate based on role
  //   if (role === 'admin') navigate('/admin');
  //   else navigate('/translator-dashboard'); // ✅ correct route
  //   ; // if you have a translator route
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: email,
          password: password,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        alert('Invalid credentials');
        return;
      }
      
      // ✅ Save token
      localStorage.setItem('token', data.access_token);
      
      // ✅ Fetch current user info
      fetch('http://localhost:8000/users/me', {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then(res => res.json())
        .then(user => {
          localStorage.setItem('user', JSON.stringify(user));
      
          if (user.role === 'admin') {
            navigate('/admin-dashboard');
          } else if (user.role === 'user' || user.role === 'translator') {
            navigate('/translator-dashboard');
          } else {
            navigate('/unauthorized');
          }
        })
        .catch(err => {
          console.error("Failed to fetch user info:", err);
          navigate('/unauthorized');
        });
      
      
  
  //     if (role === 'admin') navigate('/admin');
  //     else navigate('/translator-dashboard');
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     alert('Login failed');
  //   }
  // };
  const userInfoResponse = await fetch('http://localhost:8000/users/me', {
    headers: {
      Authorization: `Bearer ${data.access_token}`,
    },
  });

  const user = await userInfoResponse.json();

  if (user.role === 'admin') {
    navigate('/admin');
  } else {
    navigate('/translator-dashboard');
  }

} catch (error) {
  console.error('Login failed:', error);
  alert('Login failed');
}
};
  

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <div className="logo">📖</div>
        <h1>Bible AI Translator</h1>
        <p className="subtitle">Sign in to access your translation projects or create a new account</p>

        <div className="tab-buttons">
          <button type="button" className="tab active">Login</button>
          <button
            type="button"
            className="tab"
            onClick={() => navigate('/register')}
          >
            Register
          </button>

        </div>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />

        <label>Login as:</label>
        <div className="role-buttons">
          <button
            type="button"
            className={`role-btn ${role === 'admin' ? 'selected' : ''}`}
            onClick={() => setRole('admin')}
          >
            🛡 Admin
          </button>
          <button
            type="button"
            className={`role-btn ${role === 'user' ? 'selected' : ''}`}
            onClick={() => setRole('user')}
          >
            👤 User
          </button>
        </div>

        <button type="submit" className="submit-btn">Sign In</button>

        <div className="demo-box">
          <strong>Demo Credentials:</strong><br />
          Admin: admin@test.com / password<br />
          User: user@test.com / password
        </div>

        <div className="back-link">
          <a href="/">← Back to Home</a>
        </div>
      </form>
    </div>
  );
}
