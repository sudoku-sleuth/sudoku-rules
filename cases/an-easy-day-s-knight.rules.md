---
format: open-rules
title: An Easy Day's Knight
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/an-easy-day-s-knight
library: https://rules.sudoku-sleuth.com/
status: read
givens: 16..2...3........8..9.6.7...........4.2.5.8.6...........3.4.1..2........7...8..49
---

```rules
sudoku 9x9
anti-knight
```

Normal sudoku rules apply: every row, column and box must contain a complete set of the digits 1-9.

Normal antiknight rules apply: cells that see each other by a chess knight's move must contain different digits. 
 
Imported from f-puzzles.com.
