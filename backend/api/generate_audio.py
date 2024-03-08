import numpy as np
from pytube import YouTube


def generate_audio(video_url):
    """Download audio from given video URL.
    Parameters:
        - video_url (str): URL of the video to download audio from.
    Returns:
        - temp_audio_file (str): Path to the downloaded audio file.
    Processing Logic:
        - Download audio from video URL.
        - Save audio to temporary file.
        - Return path to temporary audio file."""
    output_path = "audio_download"
    yt = YouTube(video_url)
    audio_stream = yt.streams.filter(only_audio=True).first()

    # Download the audio stream as a temporary file
    temp_audio_file = audio_stream.download(output_path)

    return temp_audio_file