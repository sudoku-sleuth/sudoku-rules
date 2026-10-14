---
format: open-rules
title: Piggy Bank
setter: Blobz
source: https://sudokupad.app/blobz/piggy-bank
case: https://sudoku-sleuth.com/cases/piggy-bank
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
exported: 8fdeaeba8c059bb4f5664cc0383956b1
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
vault-1: vault r3c3-r3c4-r3c5-r4c2-r4c3-r4c5-r5c1-r5c2-r5c5-r6c1 neighbours ["r2c3","r2c4","r2c5","r3c2","r3c6","r4c1","r4c4","r4c6","r5c3","r5c4","r5c6","r6c2","r6c5"]
vault-2: vault r2c1-r3c1-r4c1 sum 11 neighbours ["r1c1","r2c2","r3c2","r4c2","r5c1"]
vault-3: vault r1c4-r1c5-r2c5 sum 13 neighbours ["r1c3","r1c6","r2c4","r2c6","r3c5"]
vault-4: vault r2c6-r3c6 neighbours ["r1c6","r2c5","r3c5","r4c6"]
vault-5: vault r5c6-r6c5-r6c6 neighbours ["r4c6","r5c5","r6c4"]
vault-6: vault r5c4-r6c3-r6c4 sum 11 neighbours ["r4c4","r5c3","r5c5","r6c2","r6c5"]
vault-7: vault r1c1-r1c2-r2c2-r3c2 neighbours ["r1c3","r2c1","r2c3","r3c1","r3c3","r4c2"]
vault-8: vault r2c3-r2c4 sum 9 neighbours ["r1c3","r1c4","r2c2","r2c5","r3c3","r3c4"]
```

Normal 6x6 sudoku rules apply.

Cages mark "vaults". Digits in a vault MAY repeat. Digits orthogonally adjacent to a vault may NOT be included within that vault. 

Digits in a vault sum to the small clue, if given.
