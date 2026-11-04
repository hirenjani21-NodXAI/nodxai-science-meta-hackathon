# Security and privacy

Everything in demo/synthetic-data is fictional and newly authored. No production database, source export, customer email, identity, session, private infrastructure address or deployment setting is included. Screenshots are rendered from this standalone sample and contain only its fixtures. No original production screenshots, PDFs, archives, manifests or executable dependencies are copied.

This local-only sample has a fixed demonstration principal; it does not authenticate real people. Tenant and membership checks occur server-side. A caller-supplied project id never changes that principal. General intelligence excludes project records. This illustrates a boundary; it is not a substitute for production identity, access control, CSRF protection, durable idempotency, audit, rate limits, upload scanning and operational review.

The HTTP handler serves an explicit allowlist, accepts same-origin bounded JSON, and suppresses access/error logging. Private provider access exists only in optional live mode; the credential comes from hidden terminal input. There is no local configuration file, client-side credential, telemetry, database connection, credential fallback or paid automatic retry. Do not expose this demonstration to a network or use real research/customer data.

The usage display is an in-memory record of completed requests, not complete financial accounting. Ambiguous network failures are not retried; this sample cannot recover provider usage after interruption. The private production accounting and billing systems are excluded.

A whole-package pattern scan and file-by-file review are documented in public-scan-report.md. Identifier names and exclusion rules can contain security-related words without containing a credential. Re-scan after any owner edits or URL additions before public upload.
