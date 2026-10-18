# Declaration migration regression

`legacy-readings.json` captures 274 complete case inputs and embedded case examples
from `tests/`, `rules/` and `plugins/`, read by the previous semantic reader before
its tokenizer and per-kind decoding were removed. It stores the input and full
reading, including parameter values, cell order, negation, conditions and source
spans. Keep this baseline fixed.

`regression.test.ts` compares successful old readings with the shared AST reader
and verifies that previously rejected inputs remain rejected.
`contract-rejections.json` fixes the diagnostics for 40 previously accepted inputs
that violate the declaration grammar or shared board and parameter contracts.
These include invalid instance IDs, missing required parameters, invalid types,
off-board cells and malformed keyword forms. The original baseline stays fixed;
current examples use valid IDs and semantic tests supply the required inputs. The existing
language manifests continue to assert exact diagnostic codes, messages and spans.

Every declaration returned from the captured corpus also passes a canonical
write/parse/write comparison. `front-end.test.ts` covers token types, nested spans,
comments, CRLF and Unicode locations, grammar metadata and portable contract drift.
The existing rule-line tests cover renamed kinds, new enum choices and renamed
record fields without parser changes.

`review.test.ts` covers each declaration review finding with its reported input,
including checker/reader parity, extra keyword parameters, named dimensions,
reserved names, decoded IDs, separators, overflow and value spans. It checks
AST meaning across parse/write/parse for fixture declarations and deterministic
generated declarations; source locations and notation are input-specific.
