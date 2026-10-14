# Logical classes

The class belongs to the checked formula, including the bodies of called shared terms. It is independent of whether a particular answer is available. Rule pages record the strongest class across their formula blocks as `Class: **…**`.

- **first-order**: scalar/cell quantification, fixed supplied collection membership, comparisons and arithmetic. Choosing a member of `Regions` remains first-order; it does not choose an unknown region.
- **with aggregates**: finite sums/products/counts or cardinality of a derived set. Lengths of supplied paths and size of fixed supplied groups are input records. Set filtering alone does not count its members. Local aliases retain the class of their definitions.
- **existential**: choosing an unknown set, list/path or record containing that structure, followed by checking its witness. Use an explicitly typed existential binder without an already supplied domain. Scalar existential choices remain first-order.

The strongest requirement wins: existential, then aggregates, then first-order. Unbounded function quantification and universal quantification over unknown structures are outside these classes and return `E_LOGIC_CLASS`; fixed supplied collections can still be quantified over. A wrong or absent page class receives the same code at its declaration (or the start of the document).

Pages also declare a domain. A rule page is solution-domain. A setup feature page with `domain: play-state` in its front matter may also use the player's entries; the site prints a generated `Domain: play-state.` line under its class. The class measures the formula and is independent of the domain. See [play-state.md](play-state.md).

No kind-name table determines these classes. The grammar and type checker inspect the formula and parsed declarations. Evaluation of grids, witnesses and example verdicts is a later phase.
