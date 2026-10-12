# Types and checks

`cell` is a board cell, not a sequence position. `position` is an integer sequence index; bounds need proof. `digit` and `value` are numeric face/effective channels. Both widen to `number`, an exact rational. `boolean` contains true/false. Collections are `path<T>` (ordered occurrences), `list<T>` and `set<T>` (membership). `optional<T>` requires `present` before `unwrap`. `fn(T)->R`, records, enums and named aliases carry explicit signatures. Enums use quoted literals in formulas.

The core accepts source strings with a file name and an optional offset into a full Markdown document. Diagnostics use stable codes, UTF-16 byte-independent offsets, and one-based Unicode code-point columns; end positions are exclusive. CRLF and non-BMP symbols retain their original offsets. Limits bound source length, nesting, numeric literals and constant powers.

`parseFormula` returns a syntax tree or diagnostics. `checkFormula` resolves names, annotates every expression and requires a Boolean result. `compilePrelude` parses all declarations through the same grammar, rejects name collisions and recursion, and checks every body against its signature. `compileLibrary` returns no usable library when any page fails. Read-only audit does not infer missing parameter types or silently drop rejected blocks.

Guard checking proves simple affine range conditions without rounding rational inequalities and uses checked Boolean term definitions. It protects indexed and optional reads, division, remainder and powers. An index must be an integer as well as within bounds; `digit`, `position`, integer constants, `⌊x⌋=x`, or membership in a collection of integers establish integrality. The domain's declared element type matters; its name grants no special meaning. Unproved operations return `E_OPERATION_UNGUARDED`. This is a static check, not the later grid/example evaluator.

Each constant is a reduced BigInt fraction. Decimals, sums, products, comparisons and powers preserve exact values above JavaScript's safe-integer range. Division produces rationals; integer-division requirements belong in the rule's definition. Normalised remainder requires integer operands and a positive modulus. Later evaluation must use this same arithmetic contract.


`collection<T>` is a read-only group accepted by aggregate terms: a set, list or path. A path is also a list, but a general list is not a connected path. A face digit is a whole number and can be used as a position; an effective value or general number needs a proved whole-number condition. `expression` is an authored arithmetic tree, whose letter binding and exact evaluation contracts are in [the public prelude](../rules/predicates.md).

Mapped comprehensions `{f(x):x∈S}` produce sets; `⟨f(i):i∈[a,b),P(i)⟩` produces an ordered list, filtered by the Boolean condition P. Names in the body/filter bind only within that comprehension. Indexing still requires a whole-number position proved within the list's bounds.

Guard proofs may unfold checked definitions, combine exact inequalities, and tighten a strict integer bound by one. Rational bounds are never rounded. Splitting an “or” fact requires the goal to hold in every branch. Numeric remainder bounds follow its defined integer arithmetic; division still needs a proved nonzero divisor. Proof searches are bounded and conservatively reject an unproved condition.
