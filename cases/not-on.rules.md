---
format: open-rules
title: NOT ON
setter: Marty Sears
source: https://sudokupad.app/8nvwqeq6od
case: https://sudoku-sleuth.com/cases/not-on
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9 total 43 connected true
cage-2: cage r7c5-r7c6-r8c6 total 15 connected true
cage-3: cage r7c3-r8c3-r9c3 total 19 connected true
cage-4: cage r5c3-r5c4-r5c5-r5c6-r6c3-r6c4-r6c5-r6c6 total 41 connected true
cage-5: cage r4c4-r4c5-r4c6 total 8 connected true
cage-6: cage r1c3-r2c3-r3c2-r3c3 total 22 connected true
cage-7: cage r3c5-r3c6-r3c7 total 13 connected true
cage-8: cage r1c6-r2c6 total 8 connected true
cage-9: cage r1c7-r1c8 total 6 connected true
cage-10: cage r5c1-r6c1 total 8 connected true
cage-11: cage r5c2-r6c2-r7c2 total 4 connected true
cage-12: cage r8c8-r8c9-r9c8 total 12 connected true
cage-13: cage r9c1-r9c2 total 11 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7,6],[9,6],[9,9],[6,9],[6,6],[7,6]],"color":"#c9c9c9ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[9,6],[9,3],[6,3],[6,6],[3,6],[3,3],[6,3]],"color":"#c9c9c9ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6,9],[0,9],[0,6],[3,6],[3,9]],"color":"#c9c9c9ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[9,3],[9,0],[6,0],[6,3]],"color":"#c9c9c9ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,3],[0,3],[0,6]],"color":"#c9c9c9ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,3]],"color":"#c9c9c9ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[9.083,8.75],[9.083,9.083],[-0.083,9.083],[-0.083,-0.083],[9.083,-0.083],[9.083,8.75]],"color":"#78cfa4ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.8,9.2],[9.2,9.2],[9.2,-0.2],[-0.2,-0.2],[-0.2,9.2],[6.8,9.2]],"color":"#78cfa494","thickness":14.08,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[9.25,8.75],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,8.75]],"color":"#78cfa448","thickness":21.76,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,4.175],[6.5,4.825]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,5.175],[6.5,5.825]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,2.175],[6.5,2.825]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,2.175],[7.5,2.825]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.175,2.5],[3.825,2.5]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.175,1.5],[0.825,1.5]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,7.825],[6.5,7.175]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,8.825],[6.5,8.175]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.5,6.825],[0.5,6.175]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.175,0.5],[0.825,0.5]],"color":"#b7d8fbff","thickness":7.04,"headLength":0.36,"rounded":true}}
```

Normal sudoku rules apply.

Draw a single snaking line connecting two particular cells (to be discovered) which forms a palindrome, ie; its sequence of digits reads the same in either direction. The palindrome line should pass through the centres of cells, and may move both orthogonally and diagonally, but may not branch or cross itself.

ARROWS: An arrow's digit indicates how many cells it points towards that are NOT ON the palindrome. The arrow cell itself is not included in the count.

CAGES: Digits in a cage do not repeat, and the clue in the top left corner indicates the total of any digits in the cage that are NOT ON the palindrome.
