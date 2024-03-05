import numpy as np
from pytube import YouTube


def generate_audio(video_url):
    output_path = "audio_download"
    yt = YouTube(video_url)
    audio_stream = yt.streams.filter(only_audio=True).first()

    # Download the audio stream as a temporary file
    temp_audio_file = audio_stream.download(output_path)

    return temp_audio_file