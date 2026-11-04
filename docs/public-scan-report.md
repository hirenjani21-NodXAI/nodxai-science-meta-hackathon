# Public-package review and secret scan

Review date: 2026-11-04. Scope: every file in this package, including hidden files, synthetic JSON and PNG assets. The final ZIP is checked against the exact same file bytes and allowlist, with archive metadata stripped. No network publishing is performed.

Result: PASS. No embedded credentials, customer records, real contact details, private infrastructure addresses, production configuration, private application code or archived production material found. This is a scope-limited package review, not a guarantee about future owner edits.

## Pattern coverage

Case-insensitive searches: API_KEY, SECRET, PASSWORD, TOKEN, PRIVATE_KEY, STRIPE, LLM_, Authorization:, Bearer, postgres, DB_HOST, DB_USER, DB_PASSWORD, 198.23., .env. Additional checks cover credential assignments, common credential prefixes, credential-bearing URLs, email addresses, numeric network addresses, private filesystem paths, certificate/key blocks, symbolic links and excluded/generated file types.

Reviewed non-secret matches: .env exclusion patterns in .gitignore; password property used to reject credential-bearing URLs; usage count field names containing tokens; a literal authorization-header scheme joined to a credential entered privately at runtime; and these scan descriptions. None contains an actual credential value. Hidden input and failure messages never disclose the credential. Provider redirects are refused. No provider call was executed during preparation.

## Manual review

All source, documentation, JSON values and inclusion paths reviewed file by file. Both screenshots inspected visually; only newly invented records and the standalone public interface appear. PNG chunks contain image data/standard image metadata only. No screenshots or files were copied from a signed-in production session, private project, original demo export, backend configuration or rollback package.

## Validation

- Nine dependency-free unit tests pass: scoped project access, cross-tenant denial, unassigned-user denial, caller authority rejection, general-context exclusion, current-information web routing, link validation, failed-response rejection and question limits.
- Thirty-two browser/HTTP checks pass: offline request, draft retention, access-denial/static-file restrictions and eight viewport widths (320, 390, 430, 768, 820, 1024, 1440, 1920), plus no page errors/external requests.
- Client JavaScript syntax checked. No model calls, production changes, database access, Git initialization, GitHub connection or publication.
- The package is an isolated public demonstration. No production restart, deployment or Support update applies. The private application's operational release validator is separate from this package review.

## Remaining owner steps

Fill live-demo/video URL placeholders, confirm copyright and event licensing requirements (the included license reserves rights), and verify the current Meta API contract/account access before optional live use. Public sample capabilities and private-product capabilities are explicitly distinguished in README. Re-scan all bytes after edits before public upload.

## Included-file checksums

The scan report itself is included in the final full-package/ZIP scan; its own hash is omitted here to avoid a self-referential checksum.

- `.gitignore`: `64bf30fb21c9c1272a9fa6f150d5c3135ce9f0d9269d3ca9a83439ca140c6392`
- `LICENSE`: `36b148de1db3cae1428fef9a08380ca3fbdbe8cf3d46106fdb5185e8949fe04b`
- `README.md`: `dee4d7d26232c21d4cd1af9f9185e8bfa03153dab6b1a24016c2ccbb5dd98257`
- `demo/screenshots/nod-mobile.png`: `1f168ff78e79599cbbbfb7be19646e456d4ba71604559750d81a8ec03080e6ee`
- `demo/screenshots/overview-desktop.png`: `139e342edf08d7908203bd82d913721e2934482af99bcd9c596a3f73a7cebcf2`
- `demo/synthetic-data/projects.json`: `14f7b3cc180488678be7e83cb2aa68c9c4f6fa5998c4aa4859ba5a25a23e2344`
- `docs/architecture.md`: `aa5f75a2ca91f23886ed5bd51251bcfd75811cf69f339144837845040a536214`
- `docs/demo-workflow.md`: `a607633a22e669ddc463a090aa62deeb3dd04259574e69488dc21476120cbe33`
- `docs/meta-integration.md`: `89233acd48fdf62fbb693012426da69bdb2a8ae13eee856e542caf28cf02e765`
- `docs/security-and-privacy.md`: `4be3fd89b25458c65a45dc75ab896edf23e752564b7945a33daac7d0bf9c8f38`
- `src/app.js`: `830eb707e655771a22f3c7d56f38494780f9a3d104c2145f96aee3920b9197ef`
- `src/index.html`: `3c0afdfed867e37a398d55df0ca7206ccad986edf67d368416b07a407afe11cb`
- `src/server.py`: `6b1f46a43242b2bea934447021e85041e9a89674c04f0c5609d120a32c268f0c`
- `src/styles.css`: `75f9134f4fd34758c27e2029d9de54ecc9d2b7d091df13c3df3b7e468889d475`
- `src/test_demo.py`: `1e2c85ffd15062e3585ad068b1d08a0ddd3a40281255c16eb7439868afcf99ef`
