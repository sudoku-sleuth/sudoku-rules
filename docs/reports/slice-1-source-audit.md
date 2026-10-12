# Slice 1 source audit

Historical snapshot before the public library migration; see [the integration report](library-integration.md) for the current repository checks.

Read-only audit of the supplied specification and generated library. Paths below are source labels, not copied public content. Exact content hashes, every fenced formula block and the full ordered diagnostics (including end spans) are in the [JSON report](slice-1-source-audit.json).

91 pages; 121 formula blocks; 51 blocks parse; 2 pages fully compile; 305 diagnostics.

The source specification's seven shape pages are prose contracts without executable formula fences or typed front matter. Its predicates.md and logic.md are absent. Library parameter descriptions/defaults need explicit types. Its existing prelude equations need signatures and executable bindings. Unsupported prose, implicit domains and indexed-family notation are rejected with source locations; no meaning is inferred from English.

## Failures

| Source page | Diagnostics (code @ line:column) |
| --- | --- |
| library/rules/absent-digits.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:1 |
| library/rules/allowed-digits.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/arrow.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @34:20 |
| library/rules/between.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/bremban.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:1 |
| library/rules/cage-expressions.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @32:5 |
| library/rules/cage-pair.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:1 |
| library/rules/cage-shapes.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @36:2 |
| library/rules/cage.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_NAME_UNDEFINED @36:3 |
| library/rules/clone.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:8 |
| library/rules/close-whispers.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:10 |
| library/rules/constructed-regions.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @36:4 |
| library/rules/coordinate-arrows.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:10 |
| library/rules/counting-circles.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:17 |
| library/rules/diagonal-lines.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @34:46 |
| library/rules/diagonal.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:10 |
| library/rules/doll-sum.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/double-arrow.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:7 |
| library/rules/entropic.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @33:46 |
| library/rules/equal-sums.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:8 |
| library/rules/equality-cage.md | E_SIGNATURE_REQUIRED @6:3; E_FORMULA_SYNTAX @31:12 |
| library/rules/extremum.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @37:13 |
| library/rules/flat-mates.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_NAME_UNDEFINED @36:14 |
| library/rules/greek-carpet.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:2 |
| library/rules/hidden-modular.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @33:39 |
| library/rules/index-line.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:10 |
| library/rules/index.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_NAME_UNDEFINED @36:6 |
| library/rules/killer.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_NAME_UNDEFINED @36:3 |
| library/rules/kropki.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @32:14 |
| library/rules/layered-cage.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:8 |
| library/rules/limited-digits.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:13 |
| library/rules/line-choice.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_SIGNATURE_REQUIRED @15:3; E_SIGNATURE_REQUIRED @18:3; E_FORMULA_SYNTAX @47:61 |
| library/rules/little-killer.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:7 |
| library/rules/lockout.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_NAME_UNDEFINED @36:4 |
| library/rules/look-and-say.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/magic-square.md | E_SIGNATURE_REQUIRED @6:3; E_FORMULA_SYNTAX @28:52 |
| library/rules/mean-lines.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:8 |
| library/rules/modular.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @36:13 |
| library/rules/molecules.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @36:6 |
| library/rules/n-mate.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_NAME_UNDEFINED @36:1 |
| library/rules/nabner.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:12 |
| library/rules/negative.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_SIGNATURE_REQUIRED @15:3; E_FORMULA_SYNTAX @41:1 |
| library/rules/numbered-room.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:1 |
| library/rules/ordered-block.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:9 |
| library/rules/outside.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/pair.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:1 |
| library/rules/palindrome.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:10 |
| library/rules/parity-cells.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/parity.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @32:18 |
| library/rules/pointing-arrow.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_SIGNATURE_REQUIRED @15:3; E_NAME_UNDEFINED @40:1 |
| library/rules/pointing-thermo.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @33:41 |
| library/rules/predicates.md | E_FORMULA_SYNTAX @25:1; E_FORMULA_SYNTAX @34:1; E_FORMULA_SYNTAX @40:1; E_FORMULA_SYNTAX @49:1; E_FORMULA_SYNTAX @55:1; E_FORMULA_SYNTAX @62:1; E_FORMULA_SYNTAX @69:1; E_FORMULA_SYNTAX @78:1; E_FORMULA_SYNTAX @85:1; E_FORMULA_SYNTAX @91:1; E_FORMULA_SYNTAX @97:1; E_FORMULA_SYNTAX @103:1; E_FORMULA_SYNTAX @109:1; E_FORMULA_SYNTAX @116:1; E_FORMULA_SYNTAX @124:1; E_FORMULA_SYNTAX @130:1; E_FORMULA_SYNTAX @136:1; E_FORMULA_SYNTAX @143:1; E_FORMULA_SYNTAX @150:1; E_FORMULA_SYNTAX @157:1; E_FORMULA_SYNTAX @164:1; E_FORMULA_SYNTAX @171:1; E_FORMULA_SYNTAX @177:1; E_FORMULA_SYNTAX @185:24; E_FORMULA_SYNTAX @194:1; E_FORMULA_SYNTAX @201:1; E_FORMULA_SYNTAX @209:1; E_FORMULA_SYNTAX @217:1; E_FORMULA_SYNTAX @224:1; E_FORMULA_SYNTAX @239:34; E_FORMULA_SYNTAX @247:1; E_FORMULA_SYNTAX @255:1; E_FORMULA_SYNTAX @264:1; E_FORMULA_SYNTAX @270:1; E_FORMULA_SYNTAX @277:1; E_FORMULA_SYNTAX @283:1 |
| library/rules/pressure-gauge.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_NAME_UNDEFINED @36:2 |
| library/rules/primality.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @33:20 |
| library/rules/product-cage.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_NAME_UNDEFINED @36:11 |
| library/rules/quadruple.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/region-sum.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:8 |
| library/rules/remainder-cage.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_SIGNATURE_REQUIRED @15:3; E_NAME_UNDEFINED @40:11 |
| library/rules/renban.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:1 |
| library/rules/rotational-sums.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:16 |
| library/rules/run-sum.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @32:12 |
| library/rules/same-class.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/sandwich.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_SIGNATURE_REQUIRED @15:3; E_FORMULA_SYNTAX @40:8 |
| library/rules/scoped-move.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @38:1 |
| library/rules/shifter-line.md | E_SIGNATURE_REQUIRED @6:3; E_FORMULA_SYNTAX @29:1 |
| library/rules/skyscraper.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:10 |
| library/rules/slow-thermo.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:10 |
| library/rules/sudoku.md | E_SIGNATURE_REQUIRED @5:3; E_FORMULA_SYNTAX @24:20 |
| library/rules/sum-free-cage.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:10 |
| library/rules/summit.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_FORMULA_SYNTAX @32:18 |
| library/rules/syntax.md | E_FORMULA_SYNTAX @12:16; E_FORMULA_SYNTAX @35:1; E_FORMULA_SYNTAX @82:21 |
| library/rules/tardis.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_NAME_UNDEFINED @32:6 |
| library/rules/thermo.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:10 |
| library/rules/unique.md | E_SIGNATURE_REQUIRED @6:3; E_NAME_UNDEFINED @28:10 |
| library/rules/value-modifier.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_SIGNATURE_REQUIRED @15:3; E_SIGNATURE_REQUIRED @18:3; E_SIGNATURE_REQUIRED @21:3; E_SIGNATURE_REQUIRED @24:3; E_FORMULA_SYNTAX @52:4 |
| library/rules/vault.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @36:13 |
| library/rules/whisper.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @36:18 |
| library/rules/whispers.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @36:18 |
| library/rules/window-classes.md | E_SIGNATURE_REQUIRED @6:3; E_FORMULA_SYNTAX @28:17 |
| library/rules/x-sum.md | E_SIGNATURE_REQUIRED @6:3; E_SIGNATURE_REQUIRED @9:3; E_SIGNATURE_REQUIRED @12:3; E_FORMULA_SYNTAX @36:9 |
| library/rules/yin-yang.md | E_FORMULA_SYNTAX @24:18 |
| library/rules/zipper.md | E_SIGNATURE_REQUIRED @6:3; E_FORMULA_SYNTAX @28:36 |
| source-spec/cages.md | E_FORMULA_REQUIRED @1:1; E_SIGNATURE_REQUIRED @1:1 |
| source-spec/cells.md | E_FORMULA_REQUIRED @1:1; E_SIGNATURE_REQUIRED @1:1 |
| source-spec/edges.md | E_FORMULA_REQUIRED @1:1; E_SIGNATURE_REQUIRED @1:1 |
| source-spec/global.md | E_FORMULA_REQUIRED @1:1; E_SIGNATURE_REQUIRED @1:1 |
| source-spec/lines.md | E_FORMULA_REQUIRED @1:1; E_SIGNATURE_REQUIRED @1:1 |
| source-spec/outside.md | E_FORMULA_REQUIRED @1:1; E_SIGNATURE_REQUIRED @1:1 |
| source-spec/regions.md | E_FORMULA_REQUIRED @1:1; E_SIGNATURE_REQUIRED @1:1 |

The audit is a migration report, not an acceptance waiver. Publishable rule pages must pass the formula checker. Case syntax, URL resolution and example verdicts belong to later slices and were not checked here.
