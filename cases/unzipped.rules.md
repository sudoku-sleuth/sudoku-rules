---
format: open-rules
title: Unzipped
setter: Marty Sears
source: https://tinyurl.com/yfx8rv6m
case: https://sudoku-sleuth.com/cases/unzipped
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: fbffe358653f547930f2dc354c6292ac
---

```rules
sudoku 9x9
kropki-1: kropki r4c3-r5c3 white
kropki-2: kropki r5c7-r6c7 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[4.5,6.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,6.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,2.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,2.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,3.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,5.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,4.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,4.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,3.5],[4.5,4.5],[5.5,5.5],[6.5,6.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,2.5],[2.5,1.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,6.5],[8.5,5.5]],"color":"#696969","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,3.5],[2.5,2.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,2.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,5.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,6.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,6.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,1.5],[3.5,0.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5],[5.5,0.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,1.5],[5.5,0.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,2.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[7.5,2.5]],"color":"#B08ADB","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5],[3.5,8.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5],[5.5,8.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,6.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,6.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,5.5],[6.5,6.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,2.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,2.5]],"color":"#6EFFF2","thickness":8,"rounded":true}}
```

RULES:

Normal Sudoku rules apply.

• Kropki: White dots separate two consecutive digits; Black dots separate two digits where one is double the other [ratio of 1:2] (not all dots are given).

• Palindrome (slate): Digits along a Palindrome line read the same from both directions (e.g. 153747351).
• Same Difference (turquoise): Every pair of adjacent digits on a Same Difference line has the same difference (this value may be different for different lines).
• Zipper (lavender): Digits an equal distance from the center of a Zipper line must sum to the digit in the middle of that line.

MODIFIERS:

• Shenanigans!: Each line is one of the above constraint line-types but some are lying to you (i.e. they must satisfy one of the other line-types and not the presented colour). The wrong-coloured lines are exactly those lines which have the digit 'D' on them ('D' must be determined by the solver).
