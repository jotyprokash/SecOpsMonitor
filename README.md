<p align="center">
  <img src="ui-monitor/public/logo.png" width="96" alt="SecOpsMonitor Logo" />
</p>

<h1 align="center">SecOpsMonitor</h1>

<p align="center">
  <strong>Passive ICS/SCADA Network Discovery & Security Assessment Platform</strong><br/>
  🟢 v1.0.0-beta &nbsp;|&nbsp; 🐳 Dockerized &nbsp;|&nbsp; 🛡️ MITRE ICS &nbsp;|&nbsp; 🏗️ 6 Protocol Parsers
</p>

---

## Technical Overview

**SecOpsMonitor** is a passive security intelligence platform designed for critical infrastructure (ICS/SCADA) environments. It leverages deep packet inspection (DPI) to identify industrial assets, classify network topology via the Purdue model, and identify threat indicators—all without transmitting a single packet to the operational network.

Unlike prototypical dashboards, SecOpsMonitor includes a high-performance backend (FastAPI/Scapy) that processes real-world PCAP captures through a multi-stage ingestion pipeline.

---

## 🚀 Quick Start

The fastest way to deploy the stack is via Docker. Ensure `docker-compose` is installed.

```bash
# Clone and launch
git clone https://github.com/jotyprokash/SecOpsMonitor.git
cd SecOpsMonitor
docker compose up --build
```
- **Frontend UI**: [http://localhost:3000](http://localhost:3000)
- **API Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Demo Access**: Use the "Demo Login" button on the login screen.

---

## 🧩 Core Capabilities

- **Passive Asset Inventory**: Automated discovery of PLC, HMI, and Historians using 38+ OUI vendor prefixes.
- **DPI Protocol Analysis**: Native support for **Modbus TCP, S7comm, EtherNet/IP, DNP3, BACnet, and IEC 104**.
- **Threat Intelligence Feed**: Real-time advisory aggregation from 7 OT-specific sources (CISA, Siemens, Rockwell, etc.).
- **Security Assessment**: MITRE ATT&CK for ICS mapping, Purdue zone violation detection, and C2/Beaconing identification.
- **Reporting Engine**: Professional PDF assessment reports covering executive summaries and technical logic.

---

## 🏗 Architecture

```text
┌──────────────────────────────┐     ┌───────────────────────────────────┐
│     Discovery Dashboard      │ ─── │        React 19 SPA (Vite)        │
└──────────────────────────────┘     └───────────────────────────────────┘
               │                                      │
               ▼                                      ▼
┌──────────────────────────────┐     ┌───────────────────────────────────┐
│       Monitor API v1         │ ─── │      FastAPI (Async Pipeline)     │
└──────────────────────────────┘     └───────────────────────────────────┘
               │                                      │ (DPI / PCAP)
               ▼                                      ▼
┌──────────────────────────────┐     ┌───────────────────────────────────┐
│      Processing Engine       │ ─── │      Scapy + SQLAlchemy (17t)     │
└──────────────────────────────┘     └───────────────────────────────────┘
```

---

## 🛠 Technology Stack

- **Backend**: Python 3.12, FastAPI, Scapy, SQLAlchemy, Pydantic v2.
- **Frontend**: React 19, TypeScript, Vite, Zustand, Tailwind CSS 4.
- **Database**: SQLite (Async) / PostgreSQL support for production.
- **Deployment**: Docker, Docker Compose, Nginx.

---

## 📄 Documentation

Detailed guides and reference material can be found in the [reference/](reference/) directory:

- [Feature Deep-Dive](reference/FEATURES.md)
- [Deployment Guide](reference/INSTALLATION.md)
- [Usage Quickstart](reference/QUICKSTART.md)

---

## License
MIT License. Built for the OT security community.
