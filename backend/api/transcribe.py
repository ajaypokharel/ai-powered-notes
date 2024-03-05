import whisper
import os

def transcribe_lecture(audio):
    model = whisper.load_model("base")
    result = model.transcribe(audio)

    # Delete the temporary audio file
    os.remove(audio)
    
    return result["text"]