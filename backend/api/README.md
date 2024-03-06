**Flask App README**

---

## SmartNotes Flask Backend

API handling for SmartNotes

---

### Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

---

### Installation

Outline the steps required to install the Flask app, including any dependencies. For example:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd backend/api`
3. Create a virtual environment: `python3 -m venv venv`
4. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On Unix or MacOS: `source venv/bin/activate`
5. Install dependencies: `pip install -r requirements.txt`
   - `pip install -U openai-whisper`
   - ```
        # on Ubuntu or Debian
        sudo apt update && sudo apt install ffmpeg

        # on Arch Linux
        sudo pacman -S ffmpeg

        # on MacOS using Homebrew (https://brew.sh/)
        brew install ffmpeg

        # on Windows using Chocolatey (https://chocolatey.org/)
        choco install ffmpeg

        # on Windows using Scoop (https://scoop.sh/)
        scoop install ffmpeg
    ```
---

### Usage

Explain how to run and use the Flask app. Provide any necessary configuration steps. For instance:

1. Set environment variables:
   ```
   export FLASK_APP=app.py
   export FLASK_ENV=development
   ```
2. Run the Flask app: `flask run`
3. Access the app in your web browser at `http://localhost:5000`

