# Shared terms

Read [Shared predicates](https://rules.sudoku-sleuth.com/predicates.md) before writing a formula. The page defines the common vocabulary; refer to it rather than introducing a second meaning for a shared term.

- `C`: the finite board; `𝔄`: its ordered symbol set.
- `D(c)`: the face digit in cell c.
- `V(c)`: its effective value after declared modifiers; without modifiers V=D.
- `L`: an ordered line or ray; `S`: a supplied cell group.
- `present(x)`: a parameter was supplied. An omitted boolean is false unless its parameter table states another default.
- `∀x ∈ S`: for every member. `∃x ∈ S`: for at least one member.
- `→`, `∧`, `∨`, `¬`, `↔`: implies, and, or, not, and exactly when.
- `|x|`: absolute value for a number, size for a group. `Σ` adds; `Π` multiplies.
- `[a,b)`: includes a and excludes b. `𝒫(C)`: all subsets of the board.
- `rem`, `distinct`, `window`, and `start`: use their definitions on the shared page, including loop and repeated-position behaviour.

Case coordinates start at 1; formula row, column, and sequence positions start at 0. For `line = cells`, `line[0]` is the first listed cell. Bind every variable to a parameter, a board term, or a quantifier. A formula must say which cells it covers and whether it reads D or V.

For a strict thermometer:

```text
line = cells
∀i ∈ [0,|line|−1): V(line[i]) < V(line[i+1])
```

Reading: each value is smaller than the next value along the supplied path.

Keep the library's classes: `first-order`, `with aggregates`, or `existential`. Fixed supplied cells and paths can use first-order quantification. Sums, products, and counts use `with aggregates`. Answer-chosen sets or structures use `existential` when their meaning requires them. Follow the shared definitions and comparable published pages when selecting a class; ask for clarification if the proposed rule does not determine it.
