// import './FirstPage.css';
// import { useNavigate } from 'react-router-dom';

// export default function FirstPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="first-container">
//       <div className="first-box">
//         <div className="first-icon">📖</div>
//         <h1 className="first-title">Welcome to
//         Bible AI Translator</h1>
//         <p className="first-subtitle">Empowering biblical translation using artificial intelligence</p>
        
//         <button className="first-btn" onClick={() => navigate('/login')}>
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }


import './FirstPage.css';
import { useNavigate } from 'react-router-dom';

export default function FirstPage() {
  const navigate = useNavigate();

  return (
    <div className="first-container">
      <div className="first-box">
        <div className="first-icon">📖</div>
        <h1 className="first-title">Welcome to
        Bible AI Translator</h1>
        <p className="first-subtitle">Empowering biblical translation using artificial intelligence</p>
        
        <button className="first-btn" onClick={() => navigate('/login')}>
          Get Started
        </button>
      </div>
    </div>
  );
}
