import whisper
import os

def transcribe_lecture(audio):
    """Transcribes an audio file into text.
    Parameters:
        - audio (str): Path to the audio file.
    Returns:
        - str: Transcribed text from the audio file.
    Processing Logic:
        - Load base model from whisper.
        - Transcribe audio file using model.
        - Delete temporary audio file."""
    model = whisper.load_model("base")
    result = model.transcribe(audio)

    # Delete the temporary audio file
    os.remove(audio)
    
    return result["text"]