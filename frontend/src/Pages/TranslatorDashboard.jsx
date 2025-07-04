// // import './TranslatorDashboard.css';
// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // export default function TranslatorDashboard() {
// //   const navigate = useNavigate();
// //   const [showDropdown, setShowDropdown] = useState(false);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (!token) {
// //       navigate('/login');
// //     }
// //   }, [navigate]);

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate('/login');
// //   };

// //   const toggleDropdown = () => {
// //     setShowDropdown(prev => !prev);
// //   };

// //   return (
// //     <div className="translator-dashboard">
// //       {/* Header */}
// //       <header className="translator-header">
// //         <div className="logo">📘 AI Bible Translator</div>
// //         <div className="user-section" onClick={toggleDropdown}>
// //           <span>Welcome, Translator User</span>
// //           <div className="avatar">T</div>
// //           {showDropdown && (
// //             <div className="dropdown-menu">
// //               <button onClick={handleLogout}>🚪 Logout</button>
// //             </div>
// //           )}
// //         </div>
// //       </header>

// //       {/* Content */}
// //       <main className="dashboard-content">
// //         <h2>My Translation Projects</h2>
// //         <div className="stats">
// //           <div className="stat-card">Active Projects: <strong>2</strong></div>
// //           <div className="stat-card">Completed Projects: <strong>1</strong></div>
// //           <div className="stat-card">Total Tokens Translated: <strong>3,090</strong></div>
// //           <div className="stat-card">Average Progress: <strong>74%</strong></div>
// //         </div>

// //         <section className="projects">
// //           <h3>Assigned Projects</h3>

// //           {/* Project Card 1 */}
// //           <div className="project-card">
// //             <h4>Genesis Translation</h4>
// //             <p>English → Swahili</p>
// //             <div className="progress-bar"><div className="fill" style={{ width: '45%' }} /></div>
// //             <p>Tokens: 562 / 1250 | Remaining: 688</p>
// //             <p>📅 Due: 15/12/2024 | 🕒 Last worked: 15/01/2024</p>
// //             <button className="continue-btn">⏩ Continue Translation</button>
// //           </div>

// //           {/* Project Card 2 */}
// //           <div className="project-card">
// //             <h4>Psalms Translation</h4>
// //             <p>English → Swahili</p>
// //             <div className="progress-bar"><div className="fill" style={{ width: '78%' }} /></div>
// //             <p>Tokens: 1638 / 2100 | Remaining: 462</p>
// //             <p>📅 Due: 30/11/2024 | 🕒 Last worked: 12/01/2024</p>
// //             <button className="continue-btn">⏩ Continue Translation</button>
// //           </div>

// //           {/* Project Card 3 */}
// //           <div className="project-card completed">
// //             <h4>Matthew Translation</h4>
// //             <p>French → Yoruba</p>
// //             <div className="progress-bar"><div className="fill" style={{ width: '100%' }} /></div>
// //             <p>Tokens: 890 / 890 | Remaining: 0</p>
// //             <p>📅 Due: 30/10/2024 | 🕒 Last worked: 10/01/2024</p>
// //             <button className="complete-btn">✅ Completed</button>
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }


// import './TranslatorDashboard.css';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function TranslatorDashboard() {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(prev => !prev);
//   };

//   const handleContinue = () => {
//     navigate('/translator/continue');
//   };

//   return (
//     <div className="translator-dashboard">
//       {/* Header */}
//       <header className="translator-header">
//         <div className="logo">📘 AI Bible Translator</div>
//         <div className="user-section" onClick={toggleDropdown}>
//           <span>Welcome, Translator User</span>
//           <div className="avatar">T</div>
//           {showDropdown && (
//             <div className="dropdown-menu">
//               <button onClick={handleLogout}>🚪 Logout</button>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Content */}
//       <main className="dashboard-content">
//         <h2>My Translation Projects</h2>
//         <div className="stats">
//           <div className="stat-card">Active Projects: <strong>2</strong></div>
//           <div className="stat-card">Completed Projects: <strong>1</strong></div>
//           <div className="stat-card">Total Tokens Translated: <strong>3,090</strong></div>
//           <div className="stat-card">Average Progress: <strong>74%</strong></div>
//         </div>

//         <section className="projects">
//           <h3>Assigned Projects</h3>

//           {/* Project Card 1 */}
//           <div className="project-card">
//             <h4>Genesis Translation</h4>
//             <p>English → Swahili</p>
//             <div className="progress-bar"><div className="fill" style={{ width: '45%' }} /></div>
//             <p>Tokens: 562 / 1250 | Remaining: 688</p>
//             <p>📅 Due: 15/12/2024 | 🕒 Last worked: 15/01/2024</p>
//             <button className="continue-btn" onClick={handleContinue}>⏩ Continue Translation</button>
//           </div>

//           {/* Project Card 2 */}
//           <div className="project-card">
//             <h4>Psalms Translation</h4>
//             <p>English → Swahili</p>
//             <div className="progress-bar"><div className="fill" style={{ width: '78%' }} /></div>
//             <p>Tokens: 1638 / 2100 | Remaining: 462</p>
//             <p>📅 Due: 30/11/2024 | 🕒 Last worked: 12/01/2024</p>
//             <button className="continue-btn" onClick={handleContinue}>⏩ Continue Translation</button>
//           </div>

//           {/* Project Card 3 */}
//           <div className="project-card completed">
//             <h4>Matthew Translation</h4>
//             <p>French → Yoruba</p>
//             <div className="progress-bar"><div className="fill" style={{ width: '100%' }} /></div>
//             <p>Tokens: 890 / 890 | Remaining: 0</p>
//             <p>📅 Due: 30/10/2024 | 🕒 Last worked: 10/01/2024</p>
//             <button className="complete-btn">✅ Completed</button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
// import './TranslatorDashboard.css';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// export default function TranslatorDashboard() {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [selectedFile, setSelectedFile] = useState('');
//   const [translation, setTranslation] = useState('');
//   const [showEditor, setShowEditor] = useState(false);
//   const [parsedUsfm, setParsedUsfm] = useState(null);
// const [currentChapter, setCurrentChapter] = useState(null);

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     fetch('http://localhost:8000/my-projects', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(res => res.json())
//       .then(data => {
//         // ✅ Normalize to list of strings
//         const projectFiles = (data.projects || []).map(p =>
//           typeof p === 'string' ? p : p.file_name
//         );
//         setFiles(projectFiles);
//       })
//       .catch(err => {
//         console.error('Failed to load assigned projects', err);
//         alert('Error loading assigned projects');
//       });
//   }, [navigate, token]);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(prev => !prev);
//   };

//   const handleContinueTranslation = (filename) => {
//     fetch(`http://localhost:8000/usfm-files/${filename}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(res => res.json())
//     .then(data => {
   
//       setSelectedFile(filename);
//       setShowEditor(true);
//     })
//     .catch(err => {
//       console.error("Failed to parse USFM", err);
//       alert("Parsing failed");
//     });
//   };
//   const handleSaveTranslation = () => {
//     fetch(`http://localhost:8000/save-translation/${selectedFile}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ content: translation }),
//     })
//       .then(res => res.json())
//       .then(data => {
//         alert(data.message || 'Translation saved!');
//       })
//       .catch(err => {
//         console.error('Failed to save translation:', err);
//         alert('Error saving translation');
//       });
//   };

//   return (
//     <div className="translator-dashboard">
//       {/* Header */}
//       <header className="translator-header">
//         <div className="logo">📘 AI Bible Translator</div>
//         <div className="user-section" onClick={toggleDropdown}>
//           <span>Welcome, Translator User</span>
//           <div className="avatar">T</div>
//           {showDropdown && (
//             <div className="dropdown-menu">
//               <button onClick={handleLogout}>🚪 Logout</button>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Main Dashboard Content */}
//       {!showEditor ? (
//         <main className="dashboard-content">
//           <h2>My Translation Projects</h2>
//           <div className="stats">
//             <div className="stat-card">Active Projects: <strong>{files.length}</strong></div>
//             <div className="stat-card">Completed Projects: <strong>0</strong></div>
//             <div className="stat-card">Total Tokens Translated: <strong>0</strong></div>
//             <div className="stat-card">Average Progress: <strong>0%</strong></div>
//           </div>

//           <section className="projects">
//             <h3>Assigned Projects</h3>

//             {files.length === 0 ? (
//               <p>No assigned USFM files.</p>
//             ) : (
//               files.map((file, idx) => {
//                 const fileName = typeof file === 'string' ? file : '';
//                 const displayName = fileName.replace('.usfm', '');
//                 return (
//                   <div className="project-card" key={idx}>
//                     <h4>{displayName}</h4>
//                     {/* <p>English → Swahili</p> */}
//                     <div className="progress-bar">
//                       <div className="fill" style={{ width: `${50 + idx * 20}%` }} />
//                     </div>
//                     <p>📄 File: {fileName}</p>
//                     {/* <p>📅 Due: 15/12/2024 | 🕒 Last worked: 15/01/2024</p> */}
//                     <button className="continue-btn" onClick={() => handleContinueTranslation(fileName)}>
//                       ⏩ Continue Translation
//                     </button>
//                   </div>
//                 );
//               })
//             )}
//           </section>
//         </main>
//       ) : (
//         <main className="translation-editor">
//   <h2>📝 Translating: {selectedFile}</h2>

//   {parsedUsfm?.chapters && Object.entries(parsedUsfm.chapters).map(([chapNum, chapData]) => (
//   <div key={chapNum}>
//     <h3>📖 Chapter {chapNum}</h3>
//     {Object.entries(chapData.verses).map(([verseNum, verseText]) => (
//       <div key={verseNum} style={{ marginBottom: '1rem' }}>
//         <label><strong>{verseNum}</strong></label>
//         <input
//           type="text"
//           value={verseText}
//           onChange={(e) => {
//             const updated = { ...parsedUsfm };
//             updated.chapters[chapNum].verses[verseNum] = e.target.value;
//             setParsedUsfm(updated);
//           }}
//           style={{ width: '90%' }}
//         />
//       </div>
//     ))}
//   </div>
// ))}

//   <button onClick={handleSaveTranslation}>💾 Save Translation</button>
// </main>
//       )}
//     </div>
//   );
// };

import './TranslatorDashboard.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TranslatorDashboard() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [translation, setTranslation] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    fetch('http://localhost:8000/my-projects', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        const projectFiles = (data.projects || []).map(p =>
          typeof p === 'string' ? p : p.file_name
        );
        setFiles(projectFiles);
      })
      .catch(err => {
        console.error('Failed to load assigned projects', err);
        alert('Error loading assigned projects');
      });
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleContinueTranslation = (filename) => {
    fetch(`http://localhost:8000/usfm-files/${filename}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.text())
      .then(text => {
        setSelectedFile(filename);
        setTranslation(text);
        setShowEditor(true);
      })
      .catch(err => {
        console.error('Failed to load file:', err);
        alert('Error loading file');
      });
  };

  const handleSaveTranslation = () => {
    fetch(`http://localhost:8000/save-translation/${selectedFile}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: translation }),
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message || 'Translation saved!');
      })
      .catch(err => {
        console.error('Failed to save translation:', err);
        alert('Error saving translation');
      });
  };

  return (
    <div className="translator-dashboard">
      {/* Header */}
      <header className="translator-header">
        <div className="logo">📘 AI Bible Translator</div>
        <div className="user-section" onClick={toggleDropdown}>
          <span>Welcome, Translator User</span>
          <div className="avatar">T</div>
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>🚪 Logout</button>
            </div>
          )}
        </div>
      </header>

      {/* Main Dashboard Content */}
      {!showEditor ? (
        <main className="dashboard-content">
          <h2>My Translation Projects</h2>
          <div className="stats">
            <div className="stat-card">Active Projects: <strong>{files.length}</strong></div>
            <div className="stat-card">Completed Projects: <strong>0</strong></div>
            <div className="stat-card">Total Tokens Translated: <strong>0</strong></div>
            <div className="stat-card">Average Progress: <strong>0%</strong></div>
          </div>

          <section className="projects">
            <h3>Assigned Projects</h3>

            {files.length === 0 ? (
              <p>No assigned USFM files.</p>
            ) : (
              files.map((file, idx) => {
                const fileName = typeof file === 'string' ? file : '';
                const displayName = fileName.replace('.usfm', '');
                return (
                  <div className="project-card" key={idx}>
                    <h4>{displayName}</h4>
                    <div className="progress-bar">
                      <div className="fill" style={{ width: `${50 + idx * 20}%` }} />
                    </div>
                    <p>📄 File: {fileName}</p>
                    <button className="continue-btn" onClick={() => handleContinueTranslation(fileName)}>
                      ⏩ Continue Translation
                    </button>
                  </div>
                );
              })
            )}
          </section>
        </main>
      ) : (
        <main className="translation-editor">
          <h2>📝 Translating: {selectedFile}</h2>
          <textarea
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            rows="20"
            cols="80"
          />
          <br />
          <button onClick={handleSaveTranslation}>💾 Save Translation</button>
          <button onClick={() => setShowEditor(false)}>🔙 Back to Projects</button>
        </main>
      )}
    </div>
  );
}
