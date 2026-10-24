---
name: Index Count
url: https://rules.sudoku-sleuth.com/index-count.md
kind: index-count
alias_of: lookup
---

# Index Count

Index Count has moved to [Lookup](lookup.md). Migrate existing declarations with the [migration guide](https://rules.sudoku-sleuth.com/migration.md); count mode uses `mode "count"` and explicit source cells.

## Example

````markdown
---
format: open-rules
title: Lookup example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
index-count r1c2-r1c3 cell "r1c1" target 4
```
````

Satisfies the rule: r1c1=2, r1c2=3, r1c3=4. Position two in the list contains 4.

Breaks the rule: r1c1=3. The list has only two positions.
