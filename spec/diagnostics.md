# Formula diagnostics

Every diagnostic contains `code`, `check` (the stable check ID), `message` and `span`, with optional `detail`. Messages use plain language and the setter’s parameter, variable and term names. Internal model paths belong only in `detail`; parser details belong there too. This contract applies to every later slice. Spans carry the source file and start/end `{offset,line,column}`. Offsets count UTF-16 code units; lines and Unicode code-point columns start at one; ends are exclusive. Markdown formulas retain their original offsets, including CRLF. Compilation returns no usable page/library if any diagnostic occurs.

| Code/check | Rejects | Primary raw fixture |
| --- | --- | --- |
| E_FORMULA_SYNTAX | Invalid notation, trailing prose, broken fences or malformed metadata | bad-formula.md |
| E_FORMULA_REQUIRED | Rule page without a formula | no-formula.md |
| E_SIGNATURE_REQUIRED | Missing parameter/binder types or declaration/domain block | no-parameter-type.md |
| E_NAME_UNDEFINED | Name with no binding, parameter, context input or term | undefined-partial.md |
| E_NAME_UNBOUND | Unbound index | unbound-position.md |
| E_CALL_ARITY | Wrong number of arguments | wrong-arity.md |
| E_TYPE | Wrong argument/result, domain or operation types | wrong-type.md |
| E_NAME_SHADOW | Duplicate or shadowed declarations/bindings | shadow-term.md |
| E_RECURSION | Recursive term or type dependencies | recursive-term.md |
| E_OPERATION_UNGUARDED | Unproved index/optional/division/remainder/power condition | unguarded-index.md |
| E_LOGIC_CLASS | Wrong page class or unsupported higher-order quantification | wrong-class.md |
| E_ARITHMETIC | Undefined constant arithmetic, including zero division | zero-denominator.md |
| E_LANGUAGE_LIMIT | Source/tree/type/dependency or exact arithmetic work limits | language-limit.md |

The raw-file corpus at `tests/invalid/rules/` also covers individual branches, with one repaired file under `tests/valid/rules/` for each rejection. `tests/invalid/expected.json` fixes the complete ordered diagnostic list, messages, check IDs and full spans. Tests reject missing/unregistered fixture coverage and extra diagnostics. Expectations are reviewed data, never generated during a test run.

Within a formula, parsing and checking stop at the first error. Separate formula blocks and parameter declarations continue producing diagnostics. Repair and rerun to expose subsequent errors. CLI statuses are 0 (no formula diagnostics), 1 (rejected source), 2 (usage/I/O failure). The CLI separates checked formula pages from case header/reference counts and deferred URLs. Full rule-line parameters, custom definitions, fetching and example verdicts are named as pending phases.

Limits: 100,000 source code units per block; 128 parser/type/AST/dependency levels; 20,000 AST nodes; 4,096 literal digits; 16,384 intermediate numerator/denominator digits; constant exponent at most 4,096, additionally limited by result size. Exact arithmetic never falls back to floating point. Metadata keys must be unique and YAML aliases are rejected at their source spans.


Reading diagnostics use E_READING_FIELD, E_READING_PLACEHOLDER, E_READING_PARAMETER and E_READING_EXAMPLE, with the same message and span contract; [readings.md](readings.md) lists what each rejects. Their rejecting pages are in `tests/invalid/readings/`, the repairs in `tests/valid/readings/`, and the exact ordered diagnostics in `tests/invalid/reading-expected.json`.

Case/library integration diagnostics use E_HEADER_REQUIRED, E_HEADER_TYPE, E_LIBRARY_URL, E_RULES_REQUIRED, E_KIND_UNKNOWN and E_ALIAS_TARGET, with the same setter-facing message/span/detail contract. Their rejecting files, accepting repairs and full expectations live in tests/{invalid,valid}/integration/ and tests/invalid/integration-expected.json. Full URLs inside the configured library must name known definitions; other URLs remain explicitly deferred until the resolver slice.
