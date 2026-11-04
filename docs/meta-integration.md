# Meta integration

Powered by Meta Muse Spark through Meta Model API.

The sample adapter implements an explicit server-side Responses request for the owner-specified Muse Spark model. Offline mode is the default. A hidden terminal prompt supplies the credential only when --live is chosen; it remains in process memory and is never sent to the browser or written to a file. There is no automatic provider call, retry or background processing.

The supplied public endpoint/model are an integration example based on the submission's selected API contract, not a guarantee that every account has access. Confirm current provider documentation, model availability and pricing with your approved Meta account. Package preparation did not test live connectivity. The code fails closed on provider/network errors, invalid model/status, missing answer, or requested web research that has no completed search result.

Requests use store=false, bounded output, and the question plus authorized project context when applicable. Current-information questions and mixed mode request web_search with at most one tool call. The parser reads output_text and URL citations and displays only ordinary public HTTP(S) source links. It does not treat a generated link as verified evidence. Usage is shown only when the provider returns valid input/output/total counts; unavailable counts remain unknown. The sample uses buffered JSON, not the private product's streaming implementation.

No project approval, record mutation, billing action or external booking is performed by an answer. Optional live mode must receive only the fictional material included in this package. Do not paste confidential research into a public judging demo.
