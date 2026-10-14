---
fog:
  initiallyLit:
    - r1c4
    - r2c4
    - r3c4
    - r4c1
    - r4c2
    - r4c3
    - r4c4
    - r5c5
    - r6c6
    - r6c7
    - r6c8
    - r6c9
    - r7c6
    - r8c6
    - r9c6
format: open-rules
title: 150 (Pairdoku with blackjackfitz)
setter: sujoyku
source: https://sudokupad.app/kcq8r288cr
case: https://sudoku-sleuth.com/cases/150-pairdoku-with-blackjackfitz
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r5c5=1
exported: ceae4eb655a51bae4e7ea25532d32e82
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[1.5,1.5],[1.5,0.5],[3.5,0.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[7.5,7.5],[8.5,7.5],[7.5,6.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[4.5,8.5],[3.5,7.5],[0.5,7.5],[0.5,6.5],[1.5,6.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[5.5,0.5],[4.5,0.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Fog of War: The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required. (It might be necessary to rely on making progress in your partner's grid.)

- 150 lines: Each line in the grid is split by box borders into segments such that the product of its segment sums equals exactly 150. Lines may not branch or intersect other lines, but possibly overlap lines in your partner's grid.

Example: A valid line could be 78-1-415 since (7+8)x1x(4+1+5)=15x1x10=150.
