import os
from flask import Flask, request, render_template
from flask_restful import Resource, Api
from flask_cors import CORS

from generate_audio import generate_audio
from summarization_model import call_summarization_model
from transcribe import transcribe_lecture

app = Flask(__name__)
CORS(app)
api = Api(app)


class Index(Resource):
    def get(self):
        return render_template('index.html')


class LinkSummary(Resource):
    def post(self):
        """Summarizes a YouTube lecture given a link."""
        youtube_link = request.json.get('link')

        # Generate audio from the YouTube link
        audio_data = generate_audio(youtube_link)

        # Transcribe the audio
        transcribed_text = transcribe_lecture(audio_data)

        # Summarize the transcribed text using the fine-tuned BART model
        summary = call_summarization_model(transcribed_text)

        # Return the summary as a JSON response
        return {'summary': summary}
    
    def get(self):
        return {'msg': "Welcome to YouTube Summary Page"}


class RecordSummary(Resource):
    def post(self):
        """Transcribes an audio file and summarizes the transcribed text using a fine-tuned BART model."""
        transcribed_text = request.json.get('finalTranscript')

        # Summarize the transcribed text using the fine-tuned BART model
        summary = call_summarization_model(transcribed_text)

        # Return the summary as a JSON response
        return {'summary': summary}

    def get(self):
        return {'msg': "Welcome to Live Audio Summary Page"}

api.add_resource(Index, '/')
api.add_resource(LinkSummary, '/api/link-summary')
api.add_resource(RecordSummary, '/api/record-summary')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
