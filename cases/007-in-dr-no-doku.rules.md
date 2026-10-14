---
format: open-rules
title: 007 in Dr. No-Doku
setter: The Bard
source: https://sudokupad.app/dugxp6hsn6
case: https://sudoku-sleuth.com/cases/007-in-dr-no-doku
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
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
exported: d599e3395298b363135a45bb1e31a2a5
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
kropki-1: kropki r5c4-r5c5 white
kropki-2: kropki r5c3-r5c4 white
kropki-3: kropki r5c2-r5c3 white
kropki-4: kropki r6c7-r6c8 white
kropki-5: kropki r8c3-r9c3 white
kropki-6: kropki r5c6-r5c7 black
kropki-7: kropki r5c1-r5c2 black
kropki-8: kropki r1c5-r2c5 black
whispers-1: whispers r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 loop false gap 5
whispers-2: whispers r9c9-r8c8-r7c7-r6c6-r5c5-r4c4-r3c3-r2c2-r1c1 loop false gap 5
whispers-3: whispers r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 loop false gap 5
whispers-4: whispers r1c3-r1c4 loop false gap 5
whispers-5: whispers r1c5-r1c4 loop false gap 5
whispers-6: whispers r9c4-r9c3 loop false gap 5
whispers-7: whispers r1c7-r1c6 loop false gap 5
whispers-8: whispers r4c3-r5c3-r6c3-r7c4-r7c5-r7c6-r6c7 loop false gap 5
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,5.5],[6.5,4.5],[6.5,3.5],[5.5,2.5],[4.5,2.5]],"color":"#FF9A00","thickness":6,"rounded":true}}
```

MI6 - TOP SECRET - YOUR EYES ONLY
TO: Agent 007
FROM: MI6 Headquarters, London
OPERATION: CRAB KEY
THREAT LEVEL: CRITICAL
007,
Intelligence has confirmed that Dr. No-Doku is plotting against global interests. Access codes have been concealed behind a numerical cipher designed to prevent unauthorized access.
Your task is to penetrate the cipher and recover the codes.
Your objective is to enter the digits 0 through 9 so that they appear in every row, column, and 3×3 section without repeats, however a digit will be omitted in each. 
The green lines are German Whispers which means adjacent digits must have a difference of at least 5 and the orange lines are Dutch Whispers which are the same except the difference is 4.
Mind the bullet holes which act as Kropki dots meaning digits separated by a black dot must be in a 2:1 ratio, and digits separated by a white dot must be consecutive.
Moneypenny reminds you, “Keep your head on task, James, no time for distractions.” 
No gadgets. No backup. Just logic, nerve, and a license to solve.
