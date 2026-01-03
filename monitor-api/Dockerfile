FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libpcap-dev \
    && rm -rf /var/lib/apt/lists/*

COPY pyproject.toml .
RUN pip install --no-cache-dir -e .

COPY . .

RUN mkdir -p /data

EXPOSE 8000

ENV SECOPS_DATABASE_URL=sqlite+aiosqlite:///./data/secopsmonitor.db
ENV SECOPS_SECRET_KEY=secopsmonitor-local-dev-key

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
