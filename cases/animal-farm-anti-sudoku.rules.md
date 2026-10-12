---
format: open-rules
title: Animal Farm Anti-Sudoku
setter: Will Power
source: https://sudokupad.app/5javykjbsc
case: https://sudoku-sleuth.com/cases/animal-farm-anti-sudoku
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
givens: "279293136516624787433829529747181653695752841183456972364928715851367294927514368"
---

```rules
sudoku 9x9
```

The Sudoku grid has been divided into 16 pentominoes, with one extra cell remaining.  Each animal type has a different pentomino shape, and there is one of each animal, except the pigs.  The sum of the digits in each pentomino is the same.  There is a region that the pigs only allow pigs to enter.  This region is 16 orthogonally continuous cells.  Inside this region, sudoku rules do not apply.  In other words, if the numbers in these 16 cells are removed, normal Sudoku rules would apply to the rest of the puzzle.  Find the pigs.
