---
fog:
  initiallyLit:
    - r6c2
    - r7c5
    - r8c3
    - r8c5
    - r8c6
    - r9c3
format: open-rules
title: First Advent Sunday Lake Tour
setter: Sandra & Nala
source: https://sudokupad.app/5ujlr17cce
case: https://sudoku-sleuth.com/cases/first-advent-sunday-lake-tour
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: 9847b03e86ef74e900e44601db41c69a
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r7c5-r8c5-r8c6 total 8 connected true
cage-2: cage r8c3-r9c3 total 17 connected true
cage-3: cage r9c7-r9c8 total 7 connected true
cage-4: cage r6c1-r6c2 total 6 connected true
cage-5: cage r2c3-r2c4-r3c3-r4c3 total 10 connected true
cage-6: cage r1c4-r1c5 total 10 connected true
cage-7: cage r2c7-r3c7 total 13 connected true
cage-8: cage r5c9-r6c9 total 14 connected true
kropki-1: kropki r3c5-r3c6 white
kropki-2: kropki r3c1-r4c1 white
kropki-3: kropki r2c1-r3c1 white
kropki-4: kropki r5c3-r6c3 black
kropki-5: kropki r3c7-r4c7 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.45,4.75],[3.15,4.15],[3.1,4.1],[3.1,4],[3.35,4.15],[3.75,4.65],[3.75,6.35],[3.8,6.1],[4.05,5.55],[4.5,4.8],[5.35,3.95],[5.4,3.6],[5.5,3.3],[5.55,3.25],[5.55,3.35],[5.45,3.45],[5.55,3.15],[5.55,3.25]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,3.3],[5.4,3.4],[5.45,3.25],[5.45,3.05],[5.5,3],[5.6,3],[5.6,3.2],[5.55,3.25]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.6,3.2],[5.6,3.4]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.55,3.15],[5.3,3.5],[4.85,3.85],[4.55,3.95],[3.95,4.05],[3.95,4.55]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.6,3.1],[5.65,3.05],[5.65,4.05],[5.95,3.45],[6,3.1],[6,2.8],[5.9,2.8],[5.95,2.95],[5.95,3.45]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.65,3.05],[5.65,2.95]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.95,3.45],[5.95,3.55],[5.85,3.75],[5.8,3.8],[5.8,3.7],[5.85,3.65],[5.85,2.85],[5.8,2.8],[5.6,2.8],[5.5,2.9],[5.3,3.3],[5.2,3.6],[5.4,3.4],[5.4,3.6],[5.25,3.85],[5.35,3.85],[5.4,3.7],[5.4,3.8],[5.35,3.85]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.15,4.65],[4.05,4.15],[4,4],[3.95,4.05],[3.55,4.05],[3.8,4.3],[4,5.1]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.25,4.95],[4.2,4.8],[3.8,4.3],[3.6,4.1],[3.55,4.45],[3.55,4.55]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.6,4.1],[3.5,4],[3.5,4.3],[3.55,4.45],[3.5,4.7],[3.5,4.9],[3.65,5.05],[3.85,5.15],[4.25,5.55],[4.25,5.85],[4.6,5.2],[5,4.3],[5,4.5],[4.95,5.35],[4.25,5.45],[4.1,5.3],[4.8,4.5],[5,4.2],[5.15,3.95],[5.4,3.7],[5.4,3.5],[5.45,3.45],[5.2,3.8],[5.2,3.6],[5.05,3.65],[4.9,4],[4.8,4.3],[5.05,3.95],[5.25,3.55],[5.6,3],[5.55,3.05],[5.35,3.45],[5.05,3.85],[4.5,4.7],[4.45,4.85],[4.45,4.95],[4.65,4.75],[4.85,4.45],[5.05,4.05],[5.2,3.8]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.45,3.45],[5.4,4.2]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.2,3.8],[5.15,3.95],[5.25,3.85],[5.15,4.15],[5.15,3.95]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.3,5.8],[4.25,5.95],[4.25,5.85],[4.15,6.05],[4.15,5.85],[4.2,5.7],[4.7,4.5],[4.85,4.05],[4.95,3.55],[5.05,3.45],[5,3.8],[4.65,5.05],[4.35,5.55],[4.45,5.35],[4.8,4.3],[4.5,4.4],[4.4,4.4],[4,4],[4.25,4.05],[4.8,4.1],[5.15,4.15],[5.15,4.55]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.15,3.95],[4.85,3.95],[4.15,3.85],[3.75,3.75],[3.5,3.6],[3.35,3.65],[3.4,3.8],[3.5,4],[3.55,4.15],[4.05,6.15],[4.1,6.4],[4.25,5.95],[4.3,6.1],[4.3,6.2],[4.45,6.05],[4.45,5.95],[4.5,5.9],[4.6,5.6],[4.7,5.5],[5.1,5.5],[5.1,5.6],[4.7,6.2],[4.6,6.4],[4.55,6.45],[4.45,6.75],[4.4,6.8],[4.35,6.95],[4.35,7.25],[4.2,7.4],[3.75,7.55],[3.35,7.55],[3.35,7.45],[3.4,7.1],[3.5,6.8],[3.6,6.3],[3.7,5.9],[3.75,5.25],[3.75,5.15],[3.85,5.15],[3.85,5.05],[4,5],[4.1,5],[4.1,5.6],[4,5.8],[4,6.2],[4.1,6.3],[4.4,6.3],[4.5,6.2],[4.65,5.95],[4.9,5.7],[5,5.7],[5.05,5.75],[5.25,5.75],[5.3,5.6],[5.3,4.7],[5.45,4.35],[5.7,4.1],[5.8,3.8],[5.8,3.1],[5.75,2.95],[5.75,2.75],[5.45,2.75],[5.3,2.9],[5.15,3.15],[5.05,3.25],[5,3.4],[4.8,3.6],[4.1,3.6],[4.25,3.65],[4.4,3.8],[4.5,3.8],[4.7,4],[4.9,4.1],[5.05,4.15],[5.15,4.15]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.45,6.05],[4.3,6.4],[4.1,6.7],[3.95,6.85],[3.8,6.9],[3.6,6.9],[3.5,6.7],[3.45,6.65],[3.45,5.75],[3.45,6.25],[3.55,6.85],[3.65,6.95],[4.2,6.9],[4.1,6.1]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,4.2],[5.6,3.6],[5.6,3.7],[5.5,4.5],[5,5.3],[4.9,5.7],[4.9,5.6],[5.2,5.2]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.9,5.6],[4.9,5.3],[4.55,5.35],[4.35,5.35],[4.5,4.8],[4.6,4.7],[4.7,4.7],[4.75,4.65],[4.95,4.35],[5.35,3.65],[5.4,3.6],[5.4,3.5],[5.5,3.5],[5.5,3.8],[5.35,3.95],[4.95,4.85],[4.7,5.7],[4.85,5.55]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.35,5.95],[4.35,6.35],[4.3,6.7],[4.25,6.95],[4.15,7.15],[3.9,7.3],[3.8,7.3],[4.1,6.8],[4.1,6.4],[4.1,6.6]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.1,6.6],[4,6.3]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.1,6.8],[4,7.1],[4,6.9]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.5,3.9],[3.5,4],[3.55,4.25],[3.6,4.3],[3.8,5.1],[3.85,5.25],[3.9,5.6],[4.1,5.3],[3.95,4.95],[3.85,4.65],[3.4,3.8],[3.45,3.95],[3.5,4]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3.4,3.8],[3.35,3.75],[3.75,3.85],[4.1,4.1],[5.05,4.15],[4.3,4],[3.95,3.85],[3.55,3.55],[3.4,3.4],[4,4],[3.65,3.95],[3.75,3.95],[4,4.1],[4.75,4.95],[4.85,5.15],[4.9,5.3],[4.9,5.1],[4.95,4.65]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.35,3.75],[3.45,3.75],[3.5,3.8],[4.2,4.7]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3.6,6.6],[3.6,7.2],[3.7,7.3],[3.8,7.3],[3.75,7.35],[3.75,7.15],[3.85,6.55],[3.85,6.05],[3.75,5.15],[3.7,5],[3.6,4.4],[3.55,4.25],[3.5,4.2],[3.4,4],[3.4,5.2],[3.45,5.75],[3.45,5.55],[3.4,5.3],[3.35,5.25],[3.3,5.1],[3.25,4.85],[3.1,4.5],[3.15,4.65],[3.3,4.8],[3.5,4.9],[3.55,5.05],[3.65,5.15],[3.75,5.15]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.75,5.15],[3.25,4.35],[3.2,4.4],[3.4,4.7]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3.15,4.65],[3,4.4],[3.25,4.55],[3.45,4.55],[3.6,4.6]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3.3,4.8],[3.4,4.9],[3.6,5.2],[3.45,5.05],[3.3,5],[2.95,4.65],[2.9,4.5],[2.8,4.4],[2.75,4.15],[2.75,3.85],[2.8,3.6],[3.15,3.45],[3.6,3.5],[3.7,3.5],[4.15,3.65],[4.45,3.85],[4.55,3.95],[4.45,3.95],[3.95,3.45],[4.1,3.6],[4,3.6]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4,3.6],[3.85,3.55],[3.5,3.5],[3.25,3.45],[3.15,3.45],[3.1,3.5],[3.8,4.1],[4.1,4.9],[4.15,5.25],[4.15,5.65],[4.2,5.9],[4.25,5.95],[4.2,5.8]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[5.25,4.45],[4.9,5.2],[4.75,5.35]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0.45,7.35],[0.45,8.05],[0.5,8.1],[0.6,8.3],[0.8,8.3],[0.85,8.35],[1.25,8.35],[1.3,8.3],[1.55,8.35],[1.55,8.25],[1.15,8.25],[1.1,8.3],[0.7,8.3]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0.45,7.65],[0.65,7.95],[0.8,8],[0.85,8.05],[1.25,8.05],[1.3,8.1],[1.3,8.3],[0.8,7.8],[0.6,7.4],[0.5,7.3],[0.5,6.9],[0.6,7],[0.6,7.1],[0.5,6.9]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[1.05,8.35],[0.85,8.25],[0.65,8.05],[0.5,7.7],[0.45,7.55],[0.35,7.35],[0.35,6.75],[0.4,6.8],[0.4,6.9],[0.45,7.15],[0.45,7.55]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[1.25,8.35],[1.55,8.35],[1.5,8.4],[1.1,8.4],[0.95,8.35],[0.65,8.05],[0.6,7.7],[0.6,7.1],[0.7,7.4],[0.8,7.5],[0.85,7.65],[0.95,7.75],[1.05,7.95],[1.3,8.1],[1.4,8.1]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[0.45,6.95],[0.5,6.9],[0.5,6.8]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[8.4,4.3],[8.4,3.6],[8.4,4.1]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[8.4,4.2],[8.3,4],[8.1,3.8],[8,3.8],[7.75,3.55]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[8.4,4],[8.35,3.85],[8.3,3.6],[8.05,3.45],[8.3,3.4],[8.4,3.5],[8.4,3.6],[8.3,3.5],[8.15,3.45],[8.05,3.45]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[8.05,3.45],[7.85,3.45]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[3.55,4.05],[3.45,3.95],[3.4,4],[3.15,3.75],[3.05,3.55],[3.1,3.5],[2.95,3.45],[3.05,3.55]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[3.55,4.05],[2.95,3.45],[2.95,3.65],[3.2,3.4],[3.8,3.4],[3.85,3.45],[3.95,3.45],[3.75,3.25],[3.35,3.25],[3.1,3.3],[2.9,3.3],[2.8,3.4],[2.8,3.5],[2.9,4.1],[3.1,4.5],[3,4.2],[2.95,4.15],[2.95,3.65]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[3.05,3.55],[2.9,3.8],[2.9,4],[2.95,4.15],[3,4.4],[2.85,4.25],[2.85,3.85],[2.95,3.65]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[3.9,5.6],[3.95,6.45],[3.95,6.55],[3.85,6.45],[3.8,6.3],[3.8,5.9],[3.9,5.6]],"color":"#c0defb","thickness":24,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[3.1,4.4],[3.3,4.4],[3.45,4.45],[3.7,4.7],[3.8,5],[3.9,5.5],[3.95,6.15],[3.95,5.85],[3.85,5.25]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[2.95,3.65],[3,3.8],[4.05,4.85],[4.15,5.15],[4.15,5.85],[4.1,5.9],[4.1,6],[4.05,6.15],[4,6.2],[4,6.1],[4,6.3],[3.95,6.45],[3.7,6.8],[3.9,6.5],[4.15,6.25],[4.15,6.65],[4,7],[3.75,7.25],[3.8,7]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[4,6.1],[4,5.9],[3.65,5.05],[3.3,4.5],[2.95,4.15],[3.25,4.55],[3.8,5.4],[3.95,6.25],[3.9,6.3],[3.8,6.1],[3.65,5.55],[3.45,5.05],[3.55,5.15],[3.65,5.65],[3.65,6.85],[3.7,6.8],[3.6,7],[3.6,7.2],[3.75,7.45],[3.95,7.35],[4.05,7.15],[4.15,7.05],[4.25,6.75],[4.35,6.55],[4.5,6.4],[4.8,5.8],[4.85,5.55],[5.15,4.55],[5.25,4.45],[5.6,3.5],[5.7,3.4],[5.75,3.05],[5.75,3.45],[5.6,3.9],[5.5,4.1],[5.25,4.45]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[4,5.9],[4,5.4],[3.85,4.65],[3.55,4.05],[3.3,3.8],[3.25,3.65],[3.65,4.45],[3.65,4.85],[3.75,4.85],[3.8,4.8],[3.8,4.7],[3.75,4.35],[3.8,4.2],[3.9,4.1],[4,4.1],[4.2,4.2],[4.3,4.2],[4.8,4],[4.85,3.95],[5.1,3.6],[5.45,2.95],[5.5,2.9]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[5.25,4.45],[5.1,4.7],[5.1,5.2],[5.15,4.75],[5.15,4.45]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[5.15,4.55],[5.05,4.65],[4.95,4.85],[5.1,4.7],[5.1,4.6]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[5.45,2.95],[5.4,3.1],[5.35,3.15],[5.3,3.3],[5.2,3.4],[5,3.7],[4.9,3.8],[4.6,4],[4.7,4],[4.95,3.85],[4.8,4],[5,3.9],[5,4],[4.85,4.15],[4.9,4],[4.7,4]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[5.1,4.9],[5,5.2],[4.7,5.8],[4.5,6.1],[4.45,6.25],[4.3,6.4],[4.25,6.55],[4.1,6.8],[4.35,6.55],[4.4,6.4],[4.55,5.55],[4.55,5.35],[4.85,4.85],[5,4.3],[5.15,3.85],[5.15,3.95],[5.1,4.4],[5,4.7],[4.5,5.5],[4.3,5.9],[3.95,6.75],[3.9,7.1],[3.9,7.2],[4.1,6.9],[4.4,6.2],[4.5,5.9],[4.55,5.65],[4.6,5.3],[4.55,4.65],[4.55,4.75],[4.65,5.05],[4.65,5.95],[4.45,6.65],[4.25,7.05],[4.15,7.15],[4.25,6.85],[4.6,6.3],[4.85,5.95],[5.1,5.2],[5.05,5.15],[4.7,4.1],[4.7,4],[4.65,4.05],[4.35,4.05],[3.75,3.85],[3.4,3.5],[3.6,3.7],[3.7,4],[3.75,4.35],[3.85,4.85],[4,4.9],[4.15,4.85],[4.55,4.45],[4.75,4.15],[4.7,4.1]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[4.6,4],[4.5,4],[4.8,4],[4.8,4.3],[4.85,4.15],[4.9,4.1],[4.9,4],[5,3.9],[4.75,4.15],[4.9,4]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[4.8,4],[4.7,4.1],[4.7,4.5],[4.85,4.45],[4.85,4.55],[4.7,5],[4.3,4.9],[4,4.7],[3.85,4.55],[3.6,4.1],[3.6,4.5],[4,4.9],[4.1,4.9],[4.35,4.85],[4.7,4.5]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[4.8,4.1],[4.5,4.1],[4.1,4],[3.95,3.95],[3.5,3.6],[3.6,3.6],[3.45,3.65],[3.3,3.9],[3.4,4.1],[3.6,4.7],[3.6,4.5],[3.4,3.8],[3.25,3.65],[3.1,3.6],[3.15,3.65],[3.3,3.9]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[4.5,5.9],[4.3,6.1],[4.15,6.35]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[3.4,3.5],[3.3,3.5],[3.35,3.45],[3.15,3.65],[3.15,3.75],[3.05,4.55],[3.05,4.75],[3.35,5.05],[3.65,5.15],[3.75,5.15]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[3.6,3.7],[4.15,4.45],[4.2,4.5],[4.35,4.55],[4.55,4.65],[4.55,4.95],[4.2,5.6],[4.15,5.55],[4.2,5.4],[4.25,5.15]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[3.95,3.95],[3.7,3.9],[3.75,3.95],[3.9,4],[4,4.1],[4.7,4.1],[4.5,4.9],[4.3,5.5],[4.3,5.6],[4.55,5.35],[4.4,5.7]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[4.1,4],[4.5,4],[4.45,3.95],[4.45,3.85]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[3.6,4.7],[3.6,4.8]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[4.2,4],[3.95,3.85],[3.65,3.75],[3.5,3.6],[3.3,3.5],[3.1,3.5],[3.15,3.55],[3.15,3.65],[3.1,4],[3.1,4.3],[3.15,4.45],[3.25,4.65],[3.6,5],[3.5,5],[3.3,4.8],[3.25,4.55],[3.25,4.35],[3.3,3.9]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[3.3,3.5],[3.05,4.15],[3.1,4.3],[3.9,5],[3.8,5],[3.35,4.85],[3.25,4.65],[3.05,4.35],[2.9,4.1],[2.9,3.8],[3,3.6],[3.1,3.6],[3.25,3.55],[3.45,3.55],[3.5,3.6],[3.1,4.1],[3.15,4.45],[3.3,4.7],[3.8,5.2],[3.65,5.15],[3.4,4.9],[3.3,4.7]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[3.45,3.55],[3.1,4.2],[3.3,4.7]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[3.65,5.15],[3.25,4.75],[3.35,4.85],[3.45,5.05],[3.45,5.15],[3.6,5.6],[3.6,6.9]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[3.6,5.8],[3.6,6.8]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[5.6,3.2],[5.6,3.5],[5.3,4.5],[5.15,4.75],[5.15,5.05],[5.15,4.95],[5.2,4.1],[5.2,3.8],[5.15,3.75],[4.95,4.45],[4.95,4.65],[5.05,4.95],[5.05,5.05],[5.1,5.1],[5.1,5.2],[4.8,5.7],[4.55,6.05],[4.3,6.3],[4.1,6.6],[3.95,6.85],[3.95,6.95],[4.1,6.8],[3.95,6.95]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[5.6,3.5],[5.5,3.8],[5.2,4.2],[5.1,4.3],[4.85,4.45],[4.85,4.35],[4.95,4.25],[5.35,3.65],[5.5,3.2],[5.5,3],[5.45,3.05],[5.45,3.15],[5.15,3.65],[5.05,3.85],[4.9,4],[4.95,3.85],[4.85,4.05],[4.65,4.25],[4.75,4.25],[4.85,4.15],[4.8,4.2],[4.5,4.3],[4.1,4.3],[3.9,4.2],[3.8,4.1],[4,4.2],[4.25,4.25],[4.65,4.25]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[4.9,4],[4.5,4.5],[4,4.5],[3.9,4.4],[4.2,4.4],[4.45,4.35],[4.85,4.35],[4.7,4.5],[4.8,4.3],[4.7,4.8],[4.6,5],[4.35,5.25],[4.25,4.95],[4.65,4.25]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[4.7,4.5],[4.75,4.65],[4.8,4.7],[4.8,4.8],[5,5.1]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[3.95,6.85],[3.85,6.95],[3.95,6.95]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[3.9,4.4],[3.8,4.3],[3.75,4.15],[3.8,4.1],[3.75,4.05],[3.6,4],[3.7,4.2],[3.8,4.3]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[1.4,8.1],[1.15,8.05],[1.5,8.1],[1.15,8.15],[0.95,8.15],[0.65,7.85],[1.1,8.1],[1.4,8.2],[1.6,8.2]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[8.35,4.15],[8.25,4.15],[8.4,4.1],[8.4,4]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[8.1,3.6],[8.2,3.7],[8.4,3.8],[8.4,3.6],[8.35,3.55]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[3.1,3.6],[3,3.5],[3.1,3.5],[2.9,3.6],[2.9,3.9],[3,4.4],[3.25,4.75],[3.15,4.65],[2.95,4.35],[2.9,4],[2.9,3.7],[3.1,3.6]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[1.15,8.05],[0.85,7.85],[0.75,7.65],[0.7,7.6],[0.7,7.5],[0.85,7.75],[1.15,8.05]],"color":"#b9d9f2","thickness":19,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[3.8,4.6],[3.8,5],[3.9,5.5],[3.95,5.65],[4.1,5.9],[4.1,5.6],[3.8,5]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[3.8,5],[3.65,4.65],[3.5,4.2],[3.6,4.2],[3.75,4.35],[3.85,4.65],[3.95,4.85],[4,5],[4,5.2],[4.1,5.6],[4.15,5.75],[4.2,5.8],[4.3,5.7],[4.35,5.55],[4.5,5.3],[4.55,5.15],[4.55,5.05],[4.6,4.9],[4.65,4.65],[4.65,4.35],[4.7,4.5],[4.7,4.6],[4.65,4.85],[4.3,5.4],[4.45,4.85],[4.5,4.8],[4.55,4.55],[4.65,4.35]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[3.95,4.85],[3.85,4.55],[3.8,4.5],[3.65,4.15],[3.75,4.15],[3.8,4.2],[4,4.5],[4.05,4.55],[4.2,4.6],[4.45,4.55],[4.55,4.55],[4.55,4.65],[4.5,5],[4.45,5.15],[4.3,5.7],[4.3,5.8],[4.25,5.95],[4.25,5.75],[4.3,5.4],[4.25,5.65],[4.15,5.95],[4.15,6.05],[4.1,6.2],[4.05,6.25],[4.05,5.15],[4,5]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[3.8,4.5],[3.5,4.2],[3.6,4.3],[3.6,4.4],[4.15,4.65],[4.7,4.2],[4.65,4.25],[4.65,4.35]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[3.85,4.55],[3.95,4.55],[4.2,4.7],[4.35,4.55],[4.45,4.55]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[4.3,5.7],[4.1,6.1],[4,6.4],[4,6.5]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[4.35,5.55],[4.35,5.45],[4.2,4.8],[4.2,4.7],[4.35,4.95],[4.35,5.45]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[4.55,4.55],[4.65,4.45],[4.5,4.8],[4.1,4.8],[4,4.7],[3.85,4.65],[3.95,4.95],[4,5.7],[4,6.4]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[4.35,5.45],[4.45,5.35],[4.55,5.05],[4.65,4.95],[4.7,4.8],[4.7,4.7],[4.8,4.6],[4.8,4.2],[4.75,4.35],[4.75,4.65]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[4.75,4.65],[4.75,4.95],[4.6,5.4],[4.4,5.9],[4.2,6.2],[4.1,6.3]],"color":"#bfd3ec","thickness":19,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[5.3,6.5],[5.25,6.55],[5.05,6.65],[5.1,6.6],[5.15,6.65]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[4.9,7],[4.75,6.85],[4.8,6.8],[4.9,6.8],[4.9,6.7],[4.75,6.85]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[4.85,6.75],[4.8,6.8],[4.95,6.55],[4.95,6.45],[5.05,6.45],[5.05,6.55],[4.9,6.7],[4.95,6.65],[5.05,6.65],[5.1,6.7],[5.05,6.75],[5.05,6.65]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[5.05,6.65],[5.05,6.55],[5.1,6.4],[5.15,6.35],[5.1,6.3],[5,6.3],[4.95,6.35],[4.95,6.45],[4.9,6.5],[4.9,6.6],[4.85,6.55],[4.85,6.65],[4.75,6.65],[4.75,6.75],[4.8,6.6],[4.85,6.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[4.8,6.8],[4.8,6.6]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[5,6.6],[4.85,6.85],[4.75,6.95],[4.8,7.1],[4.7,7.1],[4.75,7.05]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[4.95,6.45],[4.85,6.45],[4.9,6.4],[4.9,6.5]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[5.1,6.4],[5.1,6],[5.15,6.05],[5.25,5.95],[5.25,6.05],[5.3,6.2],[5.1,6.2],[5.15,6.15],[5.15,6.05]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[5.1,6.3],[5.05,6.25],[5.1,6.2],[5.1,6.1],[5.25,5.95]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[5,6.3],[4.9,6.4],[4.95,6.35],[4.95,6.25],[5.05,6.25],[5.1,6],[5.15,5.95]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[4.85,6.55],[4.85,6.45]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[4.75,6.75],[4.55,6.95],[4.55,7.05],[4.5,7],[4.45,7.05],[4.45,7.15],[4.6,7],[4.65,6.85],[4.7,6.8]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[5.2,6],[5.05,6.15],[5.05,6.25]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[5.1,6.1],[4.9,6.3]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[4.45,7.15],[4.4,7.3],[4.45,7.35],[4.35,7.35],[4.35,7.45]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[4.7,6.9],[4.75,6.85],[4.65,6.95]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[4.7,7],[4.75,6.95],[4.85,7.05],[4.95,6.95],[4.95,6.85],[5,6.9],[5.1,6.8],[5.1,6.6],[5.15,6.55],[5.2,6.6],[5.35,6.55],[5.35,6.45],[5.45,6.45],[5.45,6.35],[5.4,6.2],[5.35,6.25],[5.35,6.45]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[5.1,6.6],[5.1,6.5],[5.15,6.45],[5.25,6.45],[5.2,6.5],[5.2,6.3],[5.25,6.25],[5.35,6.25],[5.3,6.3],[5.35,6.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[5.75,5.45],[5.75,5.25],[5.8,5.2],[5.9,5.2],[5.85,5.25],[5.8,5.2]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[5.8,5.2],[5.8,5],[5.85,5.05],[5.85,5.35],[5.7,5.6],[5.65,5.55],[5.7,5.5],[5.75,5.55],[5.75,5.65],[5.65,5.75]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[5.8,5],[5.8,4.9],[5.85,5.05]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[5.85,4.55],[5.85,4.85],[5.8,4.9],[5.85,4.95],[5.85,4.85]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[5.85,4.95],[5.75,4.95],[5.8,4.9],[5.8,4.8],[5.9,4.7],[5.9,4.8],[5.85,4.65]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[2.8,5.4],[2.8,5.5],[2.75,5.55],[2.8,5.6],[3,5.6],[3.05,5.55],[3.05,5.65],[2.95,5.65],[2.95,5.55],[2.9,5.5],[2.95,5.45],[3.05,5.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[2.95,5.45],[2.75,5.45]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[3,5.5],[3,5.6],[3,5.3],[3.05,5.25],[3.1,5.3],[3.1,5.6],[3.05,5.45],[3,5.1],[3.05,5.15],[3.2,5.6],[3.15,5.45],[3.05,5.25]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[3.05,5.25],[3,5.1],[2.95,5.05],[3.05,5.35],[3.15,5.55],[3.15,5.75],[3.1,5.5]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[3.15,5.45],[3.15,5.25],[3.1,5.1],[3.15,5.15],[3.25,5.45],[3.25,5.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[3.1,5.4],[3,5],[2.95,4.95],[2.95,5.05],[2.85,4.95],[2.95,5.05]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[3.1,5.1],[3.05,5.05]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[2.95,4.95],[2.95,4.85],[2.9,4.8],[2.85,4.65],[2.7,4.4],[2.75,4.65],[2.85,4.75],[2.75,4.65]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[2.75,4.65],[2.7,4.5],[2.7,4.4],[2.65,4.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[2.9,3.2],[2.7,3.3],[2.65,3.75],[2.65,3.85],[2.75,3.85],[2.75,3.45],[2.6,3.6],[2.65,3.75]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[0.85,8.55],[1.15,8.65],[1.25,8.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[1.3,8.5],[1.4,8.6],[1.5,8.6],[1.55,8.55],[1.7,8.5],[1.65,8.55],[1.35,8.65],[1.3,8.6],[1.35,8.55],[1.15,8.65],[1.15,8.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"line","points":[[1.15,8.65],[0.85,8.65],[0.9,8.6],[0.95,8.65]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"line","points":[[1.35,8.55],[1.45,8.75],[1.4,8.8],[1.3,8.8],[1.2,8.7],[1.15,8.75],[1.05,8.75],[1.1,8.7],[1.05,8.65],[1.05,8.75]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"line","points":[[0.85,8.65],[0.8,8.7],[0.85,8.75],[1.05,8.75]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"line","points":[[0.7,6.7],[0.65,6.65],[0.7,6.6],[0.8,6.6],[0.75,6.65],[0.65,6.55],[0.7,6.5],[0.65,6.45],[0.65,6.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"line","points":[[0.65,6.55],[0.55,6.45],[0.6,6.5],[0.75,6.75],[0.75,6.95],[0.65,6.95],[0.65,6.85],[0.75,6.85],[0.8,7],[0.8,7.1]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"line","points":[[0.55,6.35],[0.55,6.45],[0.45,6.45],[0.45,6.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"line","points":[[0.55,6.45],[0.5,6.5],[0.4,6.4],[0.45,6.25]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"line","points":[[0.4,6.3],[0.4,6.2],[0.35,6.15],[0.35,6.35],[0.4,6.4],[0.35,6.45],[0.25,6.45],[0.3,6.4],[0.3,6.5],[0.25,6.55],[0.25,6.45]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"line","points":[[0.4,6.4],[0.3,6.4]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"line","points":[[8.5,4.6],[8.45,4.55],[8.55,4.45],[8.55,4.55],[8.5,4.5]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"line","points":[[8.55,4.45],[8.6,4.4],[8.65,4.45]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"line","points":[[8.6,4.4],[8.65,4.25],[8.7,4.3],[8.65,4.35],[8.6,4.3],[8.6,4.2],[8.65,4.15],[8.65,4.25]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"line","points":[[8.65,4.25],[8.55,4.25],[8.55,4.15],[8.6,4.1],[8.55,4.05],[8.55,4.15]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"line","points":[[8.4,3.2],[8.25,3.25],[8.2,3.3],[8.1,3.2],[8.1,3.3],[8,3.2],[8,3.3],[7.95,3.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"line","points":[[7.75,3.25],[7.75,3.45],[7.65,3.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"line","points":[[0.35,6.55],[0.4,6.6],[0.6,6.6]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"line","points":[[4.7,6.7],[4.75,6.55],[4.85,6.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"line","points":[[5.6,5.5],[5.6,5.2],[5.6,5.4],[5.65,5.35],[5.65,4.95],[5.65,5.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"line","points":[[5.6,5.4],[5.6,4.9],[5.65,4.65],[5.65,4.95],[5.6,5.1],[5.6,5.2],[5.55,5.05],[5.55,5.45],[5.5,5.5],[5.5,5.6]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"line","points":[[5.55,5.05],[5.55,4.95],[5.65,4.65],[5.7,4.6],[5.75,4.45],[5.75,4.65],[5.75,4.45]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"line","points":[[5.75,4.45],[5.75,4.35],[5.75,4.75],[5.75,4.65],[5.75,4.85],[5.75,4.75]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"line","points":[[5.75,4.25],[5.75,4.35],[5.7,4.3],[5.7,4.4],[5.6,4.7],[5.6,4.6],[5.55,4.65],[5.55,4.95],[5.5,5.2],[5.5,5.5],[5.5,5.2]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"line","points":[[5.5,5.2],[5.5,4.9],[5.55,4.85],[5.5,4.8],[5.5,4.9]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"line","points":[[5.5,5.3],[5.55,5.15],[5.55,5.35],[5.5,5.4]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"line","points":[[4.6,3.2],[4.7,3.3],[4.7,3.1],[4.8,3.1],[4.8,3.2],[4.7,3.4],[4.75,3.35],[4.85,3.15],[4.85,3.25],[4.75,3.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"line","points":[[4.65,3.25],[4.6,3.3],[4.6,3.4],[4.65,3.45],[5.4,2.7],[5.35,2.65],[5.3,2.7],[4.8,3.3]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"line","points":[[5.35,2.65],[5.2,2.8],[5,3.1],[5.25,2.75],[5.2,2.8]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"line","points":[[4.6,3.3],[4.4,3.3],[4.4,3.5],[4.5,3.5],[4.6,3.4],[4.4,3.4]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"line","points":[[5.25,2.75],[5.3,2.7],[5.15,2.85],[5.2,2.7],[5.4,2.5],[5.5,2.5],[5.35,2.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"line","points":[[5.3,2.7],[5.25,2.85],[4.75,3.25],[4.95,3.05],[5.05,2.85]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"line","points":[[5.25,2.65],[5.25,2.55],[5.35,2.45],[5.4,2.5],[5.55,2.35],[5.55,2.45],[5.6,2.5],[5.5,2.5],[5.4,2.6],[5.3,2.6],[5.35,2.55]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"line","points":[[5.05,3.05],[5.1,2.9],[5.15,2.85],[5,3],[5.15,2.85]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"line","points":[[2.8,5.5],[2.75,5.65],[2.65,5.55],[2.7,5.5],[2.8,5.5]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"line","points":[[3.2,5.6],[3.2,5.8],[3.15,5.75],[3.2,5.9],[3.2,5.8]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"line","points":[[3.2,5.6],[3.2,5.8]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"line","points":[[4.4,3.3],[4.35,3.25],[4.4,3.2],[4.4,3.3]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"line","points":[[4.35,3.25],[4.3,3.3],[4.25,3.45],[4.2,3.5],[4.1,3.4],[4.15,3.35],[4.2,3.4],[4.4,3.4],[4.35,3.35],[4.1,3.3],[4.15,3.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"line","points":[[5.6,2.5],[5.7,2.6],[5.8,2.6],[5.85,2.55],[6.05,2.75],[6.05,2.65],[6,2.5],[5.8,2.4],[5.85,2.35],[5.8,2.3],[5.75,2.35],[5.8,2.4]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"line","points":[[5.6,2.5],[5.7,2.5],[5.7,2.4],[5.8,2.4],[5.75,2.45],[5.7,2.4]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"line","points":[[5.8,2.3],[5.75,2.25],[5.75,2.35]],"color":"#b3d2a5","thickness":10,"rounded":true}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"line","points":[[4.1,3.3],[4.05,3.25],[3.95,3.25],[3.9,3.2],[4,3.2],[4,3.3],[4.1,3.3]],"color":"#b3d2a5","thickness":10,"rounded":true}}
```

It’s the first advent Sunday and we want to go for a walk. Nala doesn’t know where we planned to go, yet, so it’s a surprise for her and she loves to explore her surroundings!

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each.   

Digits in a dashed cage must sum to the value in the top left corner of the cage. Digits may not repeat within their own cage.  

Lake Tour Path: Help Nala find the path around the lake by following these rules: The path must be orthogonally connected and visit all cells of all cages. The path forms a loop (ie it has no start or end points). The path can touch itself diagonally, however it is not allowed to touch orthogonally (ie no cell on the path can share edges with more than two other cells on the path). Digits along the path differ by AT MOST 2.

Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)  

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
