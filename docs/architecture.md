# Public demonstration architecture

Browser → local Python HTTP handler → scoped synthetic project → optional Meta Responses request → validated answer/citations → in-memory usage record.

The browser provides a project id and question, never a tenant authority. The server's fixed fictional principal is established independently of the request. The project lookup checks its tenant and membership before reading data. A second fictional tenant exists to exercise denial. There are no real accounts or contact details.

General intelligence sends only the question. Project intelligence adds the authorized project. Mixed intelligence adds that project and requests public web research. One conversation panel retains browser-memory messages and drafts when minimized. Opening it performs no model request. Responses use plain text rendering and validated public citation URLs.

This intentionally small local example has no production infrastructure, persistent storage or authentication. It does not reproduce production streaming, upload processing, billing, full chat history or the complete workspace architecture. The private product maintains those behind authenticated server-side controls; none of that private code is shipped here.

Public package inventory: README.md; LICENSE; .gitignore; four feature documents plus public-scan-report.md; demo/synthetic-data/projects.json; two screenshot PNGs; src/index.html; src/app.js; src/styles.css; src/server.py; src/test_demo.py. No production Support article update is required for this offline package.
