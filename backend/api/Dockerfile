FROM python:3.11

COPY requirements.txt /tmp/
RUN pip3 install -r /tmp/requirements.txt

COPY . app/
WORKDIR /app

ENV PORT 8080
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 app:app
