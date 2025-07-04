// // File: ContinueTranslation.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ContinueTranslation.css';

// const scheduledLanguages = [
//   { label: 'Assamese', code: 'as' }, { label: 'Bengali', code: 'bn' },
//   { label: 'Bodo', code: 'brx' }, { label: 'Dogri', code: 'doi' },
//   { label: 'Gujarati', code: 'gu' }, { label: 'Hindi', code: 'hi' },
//   { label: 'Kannada', code: 'kn' }, { label: 'Kashmiri', code: 'ks' },
//   { label: 'Konkani', code: 'kok' }, { label: 'Maithili', code: 'mai' },
//   { label: 'Malayalam', code: 'ml' }, { label: 'Manipuri', code: 'mni' },
//   { label: 'Marathi', code: 'mr' }, { label: 'Nepali', code: 'ne' },
//   { label: 'Odia', code: 'or' }, { label: 'Punjabi', code: 'pa' },
//   { label: 'Sanskrit', code: 'sa' }, { label: 'Santali', code: 'sat' },
//   { label: 'Sindhi', code: 'sd' }, { label: 'Tamil', code: 'ta' },
//   { label: 'Telugu', code: 'te' }, { label: 'Urdu', code: 'ur' }
// ];

// export default function ContinueTranslation() {
//   const navigate = useNavigate();
//   const [sourceText, setSourceText] = useState('');
//   const [translatedText, setTranslatedText] = useState('');
//   const [selectedLanguage, setSelectedLanguage] = useState('hi');
//   const [downloadFormat, setDownloadFormat] = useState('usfm');
//   const [availableVerses, setAvailableVerses] = useState([
//     'Genesis 1:1', 'Genesis 1:2', 'Genesis 1:3'
//   ]);
//   const [selectedVerse, setSelectedVerse] = useState('Genesis 1:1');
//   const [menuVisible, setMenuVisible] = useState(false);

//   useEffect(() => {
//     if (selectedVerse === 'Genesis 1:1') setSourceText('In the beginning God created the heavens and the earth.');
//     if (selectedVerse === 'Genesis 1:2') setSourceText('Now the earth was formless and empty.');
//     if (selectedVerse === 'Genesis 1:3') setSourceText('And God said, Let there be light.');
//   }, [selectedVerse]);

//   const getLanguageLabel = (code) => {
//     const lang = scheduledLanguages.find(l => l.code === code);
//     return lang ? lang.label : '';
//   };

//   const handleDownload = () => {
//     const blob = new Blob([
//       `Verse: ${selectedVerse}\nLanguage: ${getLanguageLabel(selectedLanguage)}\n\nOriginal: ${sourceText}\nTranslation: ${translatedText}`
//     ], { type: downloadFormat === 'pdf' ? 'application/pdf' : 'text/plain' });

//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = `translation.${downloadFormat}`;
//     link.click();
//   };

//   const handleAISuggestion = () => {
//     setTranslatedText(`AI suggestion for "${sourceText}" in ${getLanguageLabel(selectedLanguage)}`);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className="translator-wrapper">
//       <div className="translator-header">
//         <div className="header-left">
//           <span className="logo">📘</span>
//           <span className="title">AI Bible Translator</span>
//         </div>
//         <div className="header-center">
//           <select
//             className="language-select"
//             value={selectedLanguage}
//             onChange={(e) => setSelectedLanguage(e.target.value)}
//           >
//             {scheduledLanguages.map(lang => (
//               <option key={lang.code} value={lang.code}>{lang.label}</option>
//             ))}
//           </select>
         
//         </div>
//         <div
//           className="header-right"
//           onMouseEnter={() => setMenuVisible(true)}
//           onMouseLeave={() => setMenuVisible(false)}
//         >
//           <span>Welcome, Translator User</span>
//           <div className="profile-icon">T</div>
//           {menuVisible && (
//             <div className="dropdown-menu">
//               <div onClick={handleLogout}>🚪 Logout</div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="verse-selector">
//         <label>Select Verse:</label>
//         <select value={selectedVerse} onChange={(e) => setSelectedVerse(e.target.value)}>
//           {availableVerses.map((verse, idx) => (
//             <option key={idx} value={verse}>{verse}</option>
//           ))}
//         </select>
//       </div>

//       <div className="translation-content">
//         <div className="source-box">
//           <h3>📘 Source Text</h3>
//           <p>{sourceText}</p>
//         </div>

//         <div className="translation-box">
//           <h3>🎯 Your Translation ({getLanguageLabel(selectedLanguage)})</h3>
//           <textarea
//             placeholder="Enter translated text here..."
//             rows={5}
//             value={translatedText}
//             onChange={(e) => setTranslatedText(e.target.value)}
//           ></textarea>
//           <div className="action-buttons">
//             <button onClick={handleAISuggestion}>💡 Get AI Suggestion</button>
//           </div>
//         </div>
//       </div>

//       <div className="nav-footer">
//         <div>
//           <label>Download as:</label>
//           <select value={downloadFormat} onChange={(e) => setDownloadFormat(e.target.value)}>
//             <option value="usfm">USFM</option>
//             <option value="pdf">PDF</option>
//           </select>
//         </div>
//         <button className="download-btn" onClick={handleDownload}>⬇️ Download Translation</button>
//       </div>
//     </div>
//   );
// }



// File: ContinueTranslation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContinueTranslation.css';
const parseReference = (ref) => {
  const [bookName, verseRef] = ref.split(' ');
  const [chapter, verse] = verseRef.split(':');
  return {
    book: bookName.substring(0, 3).toUpperCase(),  // "Genesis" → "GEN"
    chapter: parseInt(chapter),
    verse: parseInt(verse)
  };
};


const scheduledLanguages = [
  { label: 'Assamese', code: 'as' }, { label: 'Bengali', code: 'bn' },
  { label: 'Bodo', code: 'brx' }, { label: 'Dogri', code: 'doi' },
  { label: 'Gujarati', code: 'gu' }, { label: 'Hindi', code: 'hi' },
  { label: 'Kannada', code: 'kn' }, { label: 'Kashmiri', code: 'ks' },
  { label: 'Konkani', code: 'kok' }, { label: 'Maithili', code: 'mai' },
  { label: 'Malayalam', code: 'ml' }, { label: 'Manipuri', code: 'mni' },
  { label: 'Marathi', code: 'mr' }, { label: 'Nepali', code: 'ne' },
  { label: 'Odia', code: 'or' }, { label: 'Punjabi', code: 'pa' },
  { label: 'Sanskrit', code: 'sa' }, { label: 'Santali', code: 'sat' },
  { label: 'Sindhi', code: 'sd' }, { label: 'Tamil', code: 'ta' },
  { label: 'Telugu', code: 'te' }, { label: 'Urdu', code: 'ur' }
];

export default function ContinueTranslation() {
  const navigate = useNavigate();
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('hi');
  const [downloadFormat, setDownloadFormat] = useState('usfm');
  const [availableVerses, setAvailableVerses] = useState([
    'Genesis 1:1', 'Genesis 1:2', 'Genesis 1:3'
  ]);
  const [selectedVerse, setSelectedVerse] = useState('Genesis 1:1');
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const fetchVerseFromVachan = async () => {
      const token = localStorage.getItem('token');
      const { book, chapter, verse } = parseReference(selectedVerse);
  
      try {
        const response = await fetch(`http://localhost:8000/api/vachan/verse?book=${book}&chapter=${chapter}&verse=${verse}&lang_code=ENG`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        const data = await response.json();
        setSourceText(data.content || "Verse not found"); // Adjust this based on Vachan API response
      } catch (err) {
        console.error('Error fetching verse:', err);
        setSourceText("Failed to fetch verse.");
      }
    };
  
    fetchVerseFromVachan();
  }, [selectedVerse]);
  

  const getLanguageLabel = (code) => {
    const lang = scheduledLanguages.find(l => l.code === code);
    return lang ? lang.label : '';
  };

  const handleDownload = () => {
    const blob = new Blob([
      `Verse: ${selectedVerse}\nLanguage: ${getLanguageLabel(selectedLanguage)}\n\nOriginal: ${sourceText}\nTranslation: ${translatedText}`
    ], { type: downloadFormat === 'pdf' ? 'application/pdf' : 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `translation.${downloadFormat}`;
    link.click();
  };

  // const handleAISuggestion = () => {
  //   setTranslatedText(`AI suggestion for "${sourceText}" in ${getLanguageLabel(selectedLanguage)}`);
  // };
  const handleAISuggestion = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8000/translations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          original_text: sourceText,
          translated_text: `AI suggested: ${sourceText}`, // dummy AI output for now
          language: selectedLanguage
        }),
      });
  
      const data = await response.json();
      setTranslatedText(data.translation.translated);
    } catch (error) {
      console.error('AI suggestion failed:', error);
      alert('Failed to fetch suggestion');
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMenu = () => setMenuVisible(prev => !prev);

  return (
    <div className="translator-wrapper">
      <div className="translator-header">
        <div className="header-left">
          <span className="logo">📘</span>
          <span className="title">AI Bible Translator</span>
        </div>

        <div className="header-center">
          <select
            className="language-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {scheduledLanguages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
        </div>

        <div className="header-right" onClick={toggleMenu}>
          <span>Welcome, Translator User</span>
          <div className="profile-icon">T</div>
          {menuVisible && (
            <div className="dropdown-menu">
              <div onClick={handleLogout}>🚪 Logout</div>
            </div>
          )}
        </div>
      </div>

      <div className="verse-selector">
        <label>Select Verse:</label>
        <select value={selectedVerse} onChange={(e) => setSelectedVerse(e.target.value)}>
          {availableVerses.map((verse, idx) => (
            <option key={idx} value={verse}>{verse}</option>
          ))}
        </select>
      </div>

      <div className="translation-content">
        <div className="source-box">
          <h3>📘 Source Text</h3>
          <p>{sourceText}</p>
        </div>

        <div className="translation-box">
          <h3>🎯 Your Translation ({getLanguageLabel(selectedLanguage)})</h3>
          <textarea
            placeholder="Enter translated text here..."
            rows={5}
            value={translatedText}
            onChange={(e) => setTranslatedText(e.target.value)}
          />
          <div className="action-buttons">
            <button onClick={handleAISuggestion}>💡 Get AI Suggestion</button>
          </div>
        </div>
      </div>

      <div className="nav-footer">
        <div>
          <label>Download as:</label>
          <select value={downloadFormat} onChange={(e) => setDownloadFormat(e.target.value)}>
            <option value="usfm">USFM</option>
            <option value="pdf">PDF</option>
          </select>
        </div>
        <button className="download-btn" onClick={handleDownload}>⬇️ Download Translation</button>
      </div>
    </div>
  );
}
