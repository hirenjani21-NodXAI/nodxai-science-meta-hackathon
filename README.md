# NodXAI Science
## Adaptive Organizational Intelligence

Powered by Meta Muse Spark through Meta Model API.

Target repository: `nodxai-science-meta-hackathon`.
Live demo URL: **OWNER_TO_ADD_LIVE_DEMO_URL**
Demo video URL: **OWNER_TO_ADD_DEMO_VIDEO_URL**

### Problem
Research teams lose time connecting project records, documents, experiments, decisions and external evidence. A useful assistant must distinguish saved project facts from public research and its own suggestions.

### Solution
NodXAI Science brings project workflow and NoD into one research workspace. NoD supports project intelligence, general intelligence, and mixed project plus external questions, with web search / citations and usage tracking. The private application supports multiple users and tenant isolation; this package demonstrates a deliberately smaller boundary with fictional tenant records and a fixed demonstration principal.

### What is included
This is a standalone, sanitized judging demonstration, newly written for public distribution. It is not the private production application or an export of its database. All synthetic demo data was created for this package. Screenshots show this package's interface, not production. No scientific or clinical conclusions should be drawn from invented numbers.

### Reproduce the workflow
Requires Python 3.10+ and a modern browser; no dependencies need installing.

```sh
python3 -B src/server.py
```

Open `http://localhost:8765`. Review the synthetic project, choose project/general/mixed intelligence, ask NoD a question, minimize/reopen the panel, and inspect the request's usage record. Offline responses are clearly marked as local demonstrations, with zero model usage. They are not fabricated Meta responses.

```sh
python3 -B -m unittest discover -s src -p 'test_*.py'
```

Optional live Meta Model API requests:

```sh
python3 -B src/server.py --live --model muse-spark-1.3
```

Enter your own credential at the hidden terminal prompt. Never place it in browser code or commit it. Only an explicit Send invokes the provider. The adapter uses the public Responses interface at `https://api.meta.ai/v1/responses`; model availability, account access and request compatibility must be verified with your approved Meta documentation/account before enabling it. No live provider request was made while preparing this package. Live calls may incur usage. See [Meta integration](docs/meta-integration.md).

### Project workflow
Create/import research materials in the private product, review project health and findings, ask NoD about authorized records, review cited external research, and approve proposed next steps separately. The public sample focuses on overview, contextual questions, a persistent floating conversation, tenant-bound project reads, and in-memory usage records. It does not implement production login, imports/uploads, approvals, durable conversations, billing, or production streaming; those are described as private-product capabilities rather than simulated as completed public features.

### Security statement
This package contains no production credentials, customer records, real contact information, deployment configuration or private Business Automation code. The server restricts project access to its fixed fictional principal. This is not an authentication system and must not be exposed as a production service. General-mode questions exclude project context; shared answers are never written back into project records. Usage records are local, in memory, and not invoices. See [security and privacy](docs/security-and-privacy.md).

### Submission and license
Before public upload, the owner must fill the two URL placeholders, review the submission, confirm rights and the hackathon's licensing requirements, and verify the current Meta contract if live mode will be used. No partnership, endorsement, sponsorship or official Meta product status is claimed. See LICENSE; no open-source license grant is implied by public visibility.
