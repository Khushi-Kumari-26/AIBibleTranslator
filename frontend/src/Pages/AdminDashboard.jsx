// // import './AdminDashboard.css';
// // import { useState, useEffect, useRef } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // export default function AdminDashboard() {
// //   const [menuVisible, setMenuVisible] = useState(false);
// //   const [usfmContent, setUsfmContent] = useState('');
// //   const [uploadedFiles, setUploadedFiles] = useState([]);
// //   const [selectedFileContent, setSelectedFileContent] = useState('');
// //   const menuTimeout = useRef(null);
// //   const navigate = useNavigate();

// //   const token = localStorage.getItem('token');

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (!token) {
// //       navigate('/login');
// //     } else {
// //       fetchUploadedFiles();
// //     }
// //   }, [navigate]);

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     navigate('/login');
// //   };

// //   const showMenu = () => {
// //     clearTimeout(menuTimeout.current);
// //     setMenuVisible(true);
// //   };

// //   const hideMenu = () => {
// //     menuTimeout.current = setTimeout(() => {
// //       setMenuVisible(false);
// //     }, 200);
// //   };

// //   const handleFileChange = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;
// //     const text = await file.text();
// //     setUsfmContent(text);
// //   };

// //   const handleUpload = () => {
// //     fetch('http://localhost:8000/upload-usfm', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: JSON.stringify({ content: usfmContent }),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         alert(data.message || 'Upload successful!');
// //         fetchUploadedFiles(); // Refresh file list after upload
// //       })
// //       .catch((err) => {
// //         console.error('Upload failed:', err);
// //         alert('Upload failed');
// //       });
// //   };

// //   const fetchUploadedFiles = () => {
// //     fetch('http://localhost:8000/usfm-files', {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setUploadedFiles(data.files || []);
// //       })
// //       .catch((err) => console.error('Failed to fetch files:', err));
// //   };

// //   const handleFileSelect = (filename) => {
// //     fetch(`http://localhost:8000/usfm-files/${filename}`, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     })
// //       .then((res) => res.text())
// //       .then((text) => {
// //         setSelectedFileContent(text);
// //       })
// //       .catch((err) => {
// //         console.error('Failed to load file:', err);
// //         alert('Failed to load file');
// //       });
// //   };

// //   return (
// //     <div className="admin-wrapper">
// //       {/* Top Header */}
// //       <div className="top-header">
// //         <div className="logo-title">
// //           <span className="logo">📘</span>
// //           <h1>AI Bible Translator</h1>
// //         </div>

// //         <div className="header-right" onMouseEnter={showMenu} onMouseLeave={hideMenu}>
// //           <span className="admin-welcome">Welcome, Administrator</span>
// //           <div className="profile-icon">A</div>
// //           {menuVisible && (
// //             <div className="dropdown-menu">
// //               <div onClick={() => alert('👤 Profile Clicked')}>👤 Profile</div>
// //               <div onClick={() => alert('⚙️ Settings Clicked')}>⚙️ Settings</div>
// //               <div onClick={handleLogout}>🚪 Logout</div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Header Bar */}
// //       <div className="admin-header-bar">
// //         <h2>Admin Dashboard</h2>
// //         <button className="create-project-btn" onClick={() => alert("Create Project clicked")}>
// //           + Create Project
// //         </button>
// //       </div>

// //       {/* Upload USFM File */}
// //       <div className="upload-usfm-section">
// //         <h3>📁 Upload USFM File</h3>
// //         <input type="file" accept=".usfm,.txt" onChange={handleFileChange} />
// //         <button onClick={handleUpload}>Upload to Server</button>
// //       </div>

// //       {/* Uploaded Files List */}
// //       <div className="uploaded-files-section">
// //         <h3>📚 Uploaded Files</h3>
// //         {uploadedFiles.length === 0 ? (
// //           <p>No files uploaded yet.</p>
// //         ) : (
// //           <ul>
// //             {uploadedFiles.map((file, idx) => (
// //               <li key={idx}>
// //                 <button onClick={() => handleFileSelect(file)}>{file}</button>
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>

// //       {/* File Content Viewer */}
// //       {selectedFileContent && (
// //         <div className="usfm-viewer">
// //           <h3>📖 File Content</h3>
// //           <pre>{selectedFileContent}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import './AdminDashboard.css';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AdminDashboard() {
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [selectedFileContent, setSelectedFileContent] = useState('');
//   const menuTimeout = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       fetchUploadedFiles();
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const showMenu = () => {
//     clearTimeout(menuTimeout.current);
//     setMenuVisible(true);
//   };

//   const hideMenu = () => {
//     menuTimeout.current = setTimeout(() => {
//       setMenuVisible(false);
//     }, 200);
//   };

//   const handleUpload = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Login required');
//       navigate('/login');
//       return;
//     }

//     const fileInput = document.querySelector('input[type="file"]');
//     const file = fileInput.files[0];
//     if (!file) {
//       alert("Please select a USFM file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("language", "en");
//     formData.append("version", "default");

//     try {
//       const res = await fetch("http://localhost:8000/upload-usfm/", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       const data = await res.json();
//       if (res.status !== 200) throw new Error(data.detail || "Upload failed");

//       alert(data.message || "Upload successful");
//       fetchUploadedFiles();
//     } catch (err) {
//       console.error("Upload failed:", err);
//       alert("Upload failed: " + err.message);
//     }
//   };

//   const fetchUploadedFiles = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert("Login required");
//       navigate('/login');
//       return;
//     }

//     fetch('http://localhost:8000/usfm-files', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => {
//         if (res.status === 401) throw new Error("Unauthorized");
//         return res.json();
//       })
//       .then((data) => {
//         setUploadedFiles(data.files || []);
//       })
//       .catch((err) => {
//         console.error('Failed to fetch files:', err);
//         alert('Failed to load files: ' + err.message);
//       });
//   };

//   const handleFileSelect = (filename) => {
//     const token = localStorage.getItem('token');
//     fetch(`http://localhost:8000/usfm-files/${filename}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.text())
//       .then((text) => {
//         setSelectedFileContent(text);
//       })
//       .catch((err) => {
//         console.error('Failed to load file:', err);
//         alert('Failed to load file');
//       });
//   };

//   return (
//     <div className="admin-wrapper">
//       <div className="top-header">
//         <div className="logo-title">
//           <span className="logo">📘</span>
//           <h1>AI Bible Translator</h1>
//         </div>

//         <div className="header-right" onMouseEnter={showMenu} onMouseLeave={hideMenu}>
//           <span className="admin-welcome">Welcome, Administrator</span>
//           <div className="profile-icon">A</div>
//           {menuVisible && (
//             <div className="dropdown-menu">
//               <div onClick={() => alert('👤 Profile Clicked')}>👤 Profile</div>
//               <div onClick={() => alert('⚙️ Settings Clicked')}>⚙️ Settings</div>
//               <div onClick={handleLogout}>🚪 Logout</div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="admin-header-bar">
//         <h2>Admin Dashboard</h2>
//         <button className="create-project-btn" onClick={() => alert("Create Project clicked")}>
//           + Create Project
//         </button>
//       </div>

//       <div className="upload-usfm-section">
//         <h3>📁 Upload USFM File</h3>
//         <input type="file" accept=".usfm,.txt" />
//         <button onClick={handleUpload}>Upload to Server</button>
//       </div>

//       <div className="uploaded-files-section">
//         <h3>📚 Uploaded Files</h3>
//         {uploadedFiles.length === 0 ? (
//           <p>No files uploaded yet.</p>
//         ) : (
//           <ul>
//             {uploadedFiles.map((file, idx) => (
//               <li key={idx}>
//                 <button onClick={() => handleFileSelect(file)}>{file}</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {selectedFileContent && (
//         <div className="usfm-viewer">
//           <h3>📖 File Content</h3>
//           <pre>{selectedFileContent}</pre>
//         </div>
//       )}
//     </div>
//   );
// }


// import './AdminDashboard.css';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AdminDashboard() {
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [selectedFile, setSelectedFile] = useState('');
//   const [translators, setTranslators] = useState([]);
//   const [selectedTranslator, setSelectedTranslator] = useState('');
//   const menuTimeout = useRef(null);
//   const navigate = useNavigate();

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!token) {
//       navigate('/login');
//     } else {
//       fetchUploadedFiles();
//       fetchTranslators();
//     }
//   }, [navigate]);

//   const fetchUploadedFiles = () => {
//     fetch('http://localhost:8000/usfm-files', {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => setUploadedFiles(data.files || []))
//       .catch((err) => alert('Error loading files'));
//   };

//   const fetchTranslators = () => {
//     fetch('http://localhost:8000/users?role=user', {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => setTranslators(data))
//       .catch((err) => alert('Error loading users'));
//   };

//   const handleAssign = () => {
//     if (!selectedFile || !selectedTranslator) {
//       alert('Select both file and user');
//       return;
//     }

//     fetch('http://localhost:8000/projects/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         file_name: selectedFile,
//         assigned_user_id: selectedTranslator,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => alert(data.message || 'Assigned'))
//       .catch((err) => alert('Error assigning project'));
//   };

//   const showMenu = () => {
//     clearTimeout(menuTimeout.current);
//     setMenuVisible(true);
//   };

//   const hideMenu = () => {
//     menuTimeout.current = setTimeout(() => {
//       setMenuVisible(false);
//     }, 200);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div className="admin-wrapper">
//       <div className="top-header">
//         <div className="logo-title">
//           <span className="logo">📘</span>
//           <h1>AI Bible Translator</h1>
//         </div>
//         <div className="header-right" onMouseEnter={showMenu} onMouseLeave={hideMenu}>
//           <span className="admin-welcome">Welcome, Administrator</span>
//           <div className="profile-icon">A</div>
//           {menuVisible && (
//             <div className="dropdown-menu">
//               <div onClick={handleLogout}>🚪 Logout</div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="admin-header-bar">
//         <h2>Admin Dashboard</h2>
//       </div>

//       <div className="upload-usfm-section">
//         <h3>📚 Assign Project</h3>

//         <label>USFM File:</label>
//         <select onChange={(e) => setSelectedFile(e.target.value)} value={selectedFile}>
//           <option value="">-- Select File --</option>
//           {uploadedFiles.map((f, idx) => (
//             <option key={idx} value={f}>{f}</option>
//           ))}
//         </select>

//         <label>Assign To:</label>
//         <select onChange={(e) => setSelectedTranslator(e.target.value)} value={selectedTranslator}>
//           <option value="">-- Select Translator --</option>
//           {translators.map((t) => (
//             <option key={t.id} value={t.id}>{t.email}</option>
//           ))}
//         </select>

//         <button onClick={handleAssign}>✅ Assign Project</button>
//       </div>
//     </div>
//   );
// }

import './AdminDashboard.css';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [translators, setTranslators] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedUserEmail, setSelectedUserEmail] = useState('');
  const [usfmContent, setUsfmContent] = useState('');
  const menuTimeout = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) navigate('/login');
    else {
      fetchUploadedFiles();
      fetchTranslators();
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const showMenu = () => {
    clearTimeout(menuTimeout.current);
    setMenuVisible(true);
  };

  const hideMenu = () => {
    menuTimeout.current = setTimeout(() => {
      setMenuVisible(false);
    }, 200);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    setUsfmContent(text);
  };

  const handleUpload = () => {
    fetch('http://localhost:8000/upload-usfm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: usfmContent }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || 'Upload successful');
        fetchUploadedFiles();
      })
      .catch((err) => {
        console.error(err);
        alert('Upload failed');
      });
  };

  const fetchUploadedFiles = () => {
    fetch('http://localhost:8000/usfm-files', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUploadedFiles(data.files || []))
      .catch((err) => console.error('Failed to fetch files:', err));
  };

  const fetchTranslators = () => {
    fetch('http://localhost:8000/users/all', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const usersOnly = data.filter((u) => u.role === 'user');
        setTranslators(usersOnly);
      })
      .catch((err) => console.error('Failed to fetch users:', err));
  };

  const handleAssign = () => {
    if (!selectedFile || !selectedUserEmail) {
      alert('Please select a file and a user');
      return;
    }

    fetch('http://localhost:8000/projects/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        file_name: selectedFile,
        user_email: selectedUserEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message || 'Project assigned'))
      .catch((err) => alert('Failed to assign project'));
  };

  return (
    <div className="admin-wrapper">
      {/* Top Header */}
      <div className="top-header">
        <div className="logo-title">
          <span className="logo">📘</span>
          <h1>AI Bible Translator</h1>
        </div>
        <div className="header-right" onMouseEnter={showMenu} onMouseLeave={hideMenu}>
          <span className="admin-welcome">Welcome, Administrator</span>
          <div className="profile-icon">A</div>
          {menuVisible && (
            <div className="dropdown-menu">
              <div onClick={handleLogout}>🚪 Logout</div>
            </div>
          )}
        </div>
      </div>

      {/* Header */}
      <div className="admin-header-bar">
        <h2>Admin Dashboard</h2>
      </div>

      {/* Upload Section */}
      <div className="upload-usfm-section">
        <h3>📁 Upload USFM File</h3>
        <input type="file" accept=".usfm,.txt" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload to Server</button>
      </div>

      {/* Assign Project */}
      <div className="assign-project-section">
        <h3>🛠 Assign Project</h3>
        <label>Choose USFM File:</label>
        <select value={selectedFile} onChange={(e) => setSelectedFile(e.target.value)}>
          <option value="">-- Select File --</option>
          {uploadedFiles.map((file, idx) => (
            <option key={idx} value={file}>{file}</option>
          ))}
        </select>

        <label>Assign To (User Email):</label>
        <select value={selectedUserEmail} onChange={(e) => setSelectedUserEmail(e.target.value)}>
          <option value="">-- Select User --</option>
          {translators.map((user) => (
            <option key={user.id} value={user.email}>{user.email}</option>
          ))}
        </select>

        <button onClick={handleAssign}>✅ Assign Project</button>
      </div>
    </div>
  );
}
