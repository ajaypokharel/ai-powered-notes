from flask import Flask, request, jsonify

from generate_audio import generate_audio
from summarization_model import call_summarization_model
from transcribe import transcribe_lecture

app = Flask(__name__)

@app.route('/summarize', methods=['POST'])
def summarize():
    """Summarizes a YouTube lecture given a link.
    Parameters:
        - youtube_link (str): Link to the YouTube lecture.
    Returns:
        - summary (str): Summary of the lecture.
    Processing Logic:
        - Generate audio from the link.
        - Transcribe the audio.
        - Summarize the transcribed text.
        - Return the summary as a JSON response."""
    
    youtube_link = request.json.get('youtube_link')

    # Generate audio from the YouTube link
    audio_data = generate_audio(youtube_link)

    # Transcribe the audio
    transcribed_text = transcribe_lecture(audio_data)

    # Summarize the transcribed text using the fine-tuned BART model
    summary = call_summarization_model(transcribed_text)

    # Return the summary as a JSON response
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)
