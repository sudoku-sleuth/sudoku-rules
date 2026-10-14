---
format: open-rules
title: Murder Mystery 8
setter: The Bard
source: https://sudokupad.app/ve95qtbwui
case: https://sudoku-sleuth.com/cases/murder-mystery-8
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 0
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
exported: 454dc8bba43003ce4e335c8e3f5f02c0
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
cage r8c9-r9c9 repeats false total 13 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r2c2-r2c3 white
kropki-2: kropki r2c1-r2c2 black
kropki-3: kropki r1c1-r1c2 black
kropki-4: kropki r2c3-r3c3 black
arrow-1: arrow r5c6-r6c6-r6c5-r6c4 bulb ["r5c5"]
arrow-2: arrow r4c5-r4c6 bulb ["r5c4"]
whispers-1: whispers r1c7-r2c8-r3c9-r2c9-r1c9 loop false gap 5
whispers-2: whispers r3c7-r3c8-r3c9 loop false gap 5
whispers-3: whispers r1c8-r1c9 loop false gap 5
whispers-4: whispers r2c7-r3c7 loop false gap 5
pair-1: pair r7c3-r8c3 sum 10
pair-2: pair r8c1-r8c2 sum 10
pair-3: pair r9c1-r9c2 sum 10
pair-4: pair r7c1-r7c2 sum 10
pair-5: pair r7c2-r8c2 sum 5
quadruple-1: quadruple r5c7-r5c8-r6c7-r6c8 digits [5]
quadruple-2: quadruple r2c5-r2c6-r3c5-r3c6 digits [9]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[70,79],"label":"__5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[60,69],"label":"__9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,2.5],[3.5,2.5],[3.5,1.5],[3.5,0.5]],"color":"#00EEFF","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[3.5,7.5],[3.5,6.5],[4.5,6.5],[5.5,6.5]],"color":"#00EEFF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,3.5],[7.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#00EEFF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[2.5,3.5]],"color":"#00EEFF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,4.5],[1.5,3.5]],"color":"#00EEFF","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

Sherdoku Holmes you legacy continues. Once more all the digits went to a party but there was a murderer among them. We need your help to with the clues solve who the killer is. 
Place all the digits 0-9 in each row, column, box, and marked diagonals but one digit in each was murdered and will not fit. The victims vary and can even be the same value as the killer. 
Box 1: Wine Room - Kropki: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
Box 3: Observatory - German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Box 5: Vestibule - Digits on an arrow must sum to the number placed in that arrow's circle. 
Box 7: Office - XV: Digits with an X add to 10, Digits with a V add to 5.
Box 9: Craft Room - Killer cages: All digits in their cage sum to the value in the corner.
Box 2,4,6,8: Hallways – Even / Odd Lines: Each individual light blue line consists only of even or odd digits, the solver must determine which. For this puzzle 0 is considered even. Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
You must identify the killer as they hide their last victim. You will place/identify the killer after all else has been eliminated. We found a manifest that reads, “I look into the void and all I see is myself, and the nothingness compels me to act.”
