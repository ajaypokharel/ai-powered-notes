import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { faPlay, faStop, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClockLoader } from 'react-spinners';
import './index.css'


const Record = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [summarization, setSummarization] = useState("");

    const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition();

  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording logic
      SpeechRecognition.stopListening();
    } else {
      // Start recording logic
      SpeechRecognition.startListening({
        continuous: true,
        language: 'en-GB',
      });
    }
    setIsRecording(!isRecording);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://127.0.0.1:5000/api/record-summary', {finalTranscript});
      setSummarization(response.data.summary);
      setCopied(false)
    } catch (error) {
      console.error('Error summaring audio:', error);
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
      <h1 className="title"><span className="blue-text">AI</span> Transcription Summary</h1>
      <div className="controls">
        <span className="listening-indicator">Listening: {isRecording ? 'On' : 'Off'}</span>
        <div>
          <button className="control-btn" onClick={toggleRecording}>
            <FontAwesomeIcon icon={isRecording ? faStop : faPlay} />
          </button>
          <button className="control-btn" onClick={resetTranscript}><FontAwesomeIcon icon={faUndo} /></button>
        </div>
      </div>
      <div className="transcript-box">
        {transcript}
      </div>
      <button
        className="transcribe-button"
        onClick={handleSubmit}
        disabled={isRecording || loading}
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

export default Record;
