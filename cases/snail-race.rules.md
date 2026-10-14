---
format: open-rules
title: Snail Race
setter: Blobz
source: https://sudokupad.app/5w2d3akedg
case: https://sudoku-sleuth.com/cases/snail-race
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
givens: .29..716.............................81.9..36.............................27398..
exported: 8c35dac72e57993c66c6bbd414435064
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 connected true
cage-2: cage r1c4-r1c5-r1c6 total 20 connected true
cage-3: cage r1c7-r1c8-r1c9 connected true
cage-4: cage r9c3-r9c4-r9c5-r9c6-r9c7 connected true
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,1.5],[6.5,0.5],[6.5,1.5],[5.5,0.5],[4.5,1.5],[3.5,0.5],[2.5,1.5],[1.5,2.5],[0.5,1.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,3.5],[6.5,2.5],[6.5,3.5],[5.5,3.5],[4.5,2.5],[3.5,3.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,4.5],[1.5,5.5],[0.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,5.5],[6.5,4.5],[5.5,4.5],[4.5,4.5],[3.5,5.5],[2.5,6.5],[1.5,7.5],[0.5,7.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,6.5],[6.5,6.5],[5.5,7.5],[4.5,7.5],[3.5,6.5],[2.5,5.5],[1.5,4.5],[1.5,3.5],[0.5,2.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,7.5],[6.5,7.5],[5.5,8.5],[4.5,8.5],[3.5,7.5],[2.5,7.5],[1.5,6.5],[0.5,5.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
```

Five snails line up on the starting grid -- the starter's pistol goes off... and... after a bit of a slow start, they head towards the finish line. It's a close (but slow) race. Eventually, even the stragglers make it across the line.

Each snail leaves a different type of trail: German Whisper, Renban, Region Sum, Entropic, and Modular. Which snail leaves which trail must be deduced by the solver.

German Whisper: Adjacent digits along the line differ by at least 5.

Renban: The line contains a set of (non-repeating) consecutive digits in any order.

Region Sum: Digits along the line have an equal sum N within each box it passes through; If the line passes through the same box more than once, each individual segment of the path within that box sums to N separately. 

Entropic: Every three adjacent digits along the line must contain a low (1-3) digit, a middly (4-6) digit, and a high (7-9) digit.

Modular: Every three adjacent digits along the line must be drawn one from each modulo group: {1,4,7}, {2,5,8}, {3,6,9}.

Digits in cages sum to the clue in the top left corner, if given.
