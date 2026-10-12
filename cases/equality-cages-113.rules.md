---
format: open-rules
title: "Equality Cages 113: What line is it anyway?"
setter: gUBBLOR
source: https://sudokupad.app/s3jadglfik
case: https://sudoku-sleuth.com/cases/equality-cages-113
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r7c5-r8c5
equality-cage-2: equality-cage r8c3-r9c3
equality-cage-3: equality-cage r4c4-r5c3-r5c4-r6c4
equality-cage-4: equality-cage r3c4-r3c5
equality-cage-5: equality-cage r6c2-r6c3
equality-cage-6: equality-cage r3c8-r3c9
equality-cage-7: equality-cage r6c7-r6c8
kropki-1: kropki r8c4-r8c5 colour "black"
kropki-2: kropki r8c4-r9c4 colour "black"
kropki-3: kropki r8c1-r8c2 colour "black"
kropki-4: kropki r4c7-r4c8 colour "white"
pair-1: pair r8c1-r9c1 relation {"op":"sum","value":10}
pair-2: pair r6c8-r7c8 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,4.5],[6.5,4.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5],[1.5,2.5],[0.5,3.5],[0.5,2.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,7.5],[6.5,7.5],[7.5,8.5],[8.5,8.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,3.5],[6.5,2.5],[7.5,2.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,6.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[2.5,4.5],[3.5,5.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[5.5,5.5],[4.5,5.5],[3.5,6.5],[2.5,6.5],[2.5,8.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[7.5,1.5],[6.5,1.5],[5.5,2.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,1.5],[2.5,0.5]],"color":"#aaa","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,7.5],[6.5,7.5],[7.5,8.5],[8.5,8.5]],"color":"#aaa","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Various lines: There are different types of lines in the puzzle. It's up to the solver to deduce the identity of each line, which could be any of these four;
1. German Whispers - Adjacent digits along each German Whisper line must have a difference of at least 5. Digits may repeat on the line.
2. Renban - Digits along each renban line must be a set of consecutive digits in any order, and must not repeat.
3. Palindrome - Digits along a palindrome line read the same forwards or backwards.
4. Region Sum Lines - Digits along region sum lines have the same sum within each box the line passes through. Every visit to a box counts to a new total. Lines must enter more than one box. Digits may repeat on the line.
