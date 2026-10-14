---
format: open-rules
title: London Underground
setter: Blobz
source: https://sudokupad.app/r5d90aiglu
case: https://sudoku-sleuth.com/cases/london-underground
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
exported: 1e3fa00b6b7ac67d892bab503dc7b16f
---

```rules
sudoku 9x9
kropki r7c3-r7c4 black
whispers-1: whispers r8c1-r8c2-r8c3 gap 5
whispers-2: whispers r8c4-r7c4-r6c4-r5c4-r4c4-r3c4 gap 5
whispers-3: whispers r2c5-r3c4 gap 5
whispers-4: whispers r8c3-r8c4-r8c5-r8c6-r8c7-r9c8 gap 5
whispers-5: whispers r5c1-r6c2-r6c3-r6c4-r5c5-r5c6-r5c7-r5c8-r4c9 gap 5
region-sum-1: region-sum r1c5-r2c6-r3c6-r4c6-r5c6-r6c6-r7c7-r8c8-r9c8 segments [["r1c5","r2c6","r3c6"],["r4c6","r5c6","r6c6"],["r7c7","r8c8","r9c8"]]
region-sum-2: region-sum r9c5-r8c5-r7c4-r6c5-r5c5-r4c5-r3c6-r3c7-r2c8 segments [["r9c5","r8c5","r7c4"],["r6c5","r5c5","r4c5"],["r3c6"],["r3c7","r2c8"]]
renban r2c7-r3c6-r2c5-r2c4-r3c3-r4c2-r5c2-r6c1-r7c1
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,3.5],[6.5,4.5]],"color":"#F5EB64","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,4.5]],"color":"#F5EB64","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[5.5,6.5]],"color":"#F5EB64","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5],[6.5,2.5]],"color":"#F5EB64","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,4.5],[2.5,3.5]],"color":"#EEEE66","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,2.5],[3.5,2.5],[4.5,2.5]],"color":"#EEEE66","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[4.5,7.5],[5.5,7.5],[5.5,6.5]],"color":"#EEEE66","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,6.5]],"color":"#EEEE66","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Digits along the grey (Northern) and blue (Victoria) lines have an equal sum N within each box they pass through (Region Sum). N may be different on each line.

Digits along the green (District) line must differ by at least 5 (German Whisper).

Digits along the red (Central) line must be 5 or greater.

Any set of three sequential cells along the yellow (Circle) line must contain a low (1-3) digit, a middly (4-6) digit, and a high (7-9) digit (Entropic).

The pink (Hammersmith & City) line contains a set of the digits 1-9 in any order (Renban).

The digits separated by Victoria Station (black dot) have a 2:1 ratio (Kropki).
