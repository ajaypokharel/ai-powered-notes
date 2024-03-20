import React, { useState } from 'react';
import axios from 'axios';
import { ClockLoader } from 'react-spinners';
import './index.css';

const Summarization = () => {
  const [link, setLink] = useState('');
  const [summarization, setSummarization] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://127.0.0.1:5000/api/link-summary', {link});
      setSummarization(response.data.summary);
      setCopied(false)
    } catch (error) {
      console.error('Error summarzing audio:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summarization)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error('Error copying transcription:', error);
      });
  };

  return (
    <div className="container">
      <h1 className="header-link">YouTube <span className="blue-text">AI</span> Summary</h1>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Enter YouTube Link"
          value={link}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="transcribe-button"
        onClick={handleSubmit}
        disabled={!link || loading}
      >
      {loading ? (
          <ClockLoader loading={true} size={15} color={'#ffffff'} className="loading-spinner" />
        ) : (
          'Summarize'
        )}
      </button>
      { summarization && (
        <div className="transcription-container">
          <div className="transcription-box">
            <h2>Summary:</h2>
            <p className="transcription-text">{summarization}</p>
          </div>
          {!copied && (
            <button
              className="copy-button"
              onClick={handleCopy}
              disabled={!summarization}
            >
              📋
            </button>
          )}
          {copied && (
            <span className="copied-text">✅</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Summarization;
