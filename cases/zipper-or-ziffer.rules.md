---
format: open-rules
title: Zipper or Ziffer?
setter: Marty Sears
source: https://tinyurl.com/4n8ay4e9
case: https://sudoku-sleuth.com/cases/zipper-or-ziffer
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r2c1-r2c2-r3c2-r3c3 gap 5
whispers-2: whispers r6c7-r5c7-r4c7 gap 5
whispers-3: whispers r7c4-r8c5-r7c6 gap 5
pair-1: pair r6c2-r7c2 sum 10
pair-2: pair r2c6-r2c7 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#6115b7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[1.5,1.5],[1.5,2.5],[2.5,2.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,8.5],[2.5,6.5],[0.5,6.5],[0.5,8.5],[1.5,8.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,2.5],[6.5,2.5],[6.5,0.5],[8.5,0.5],[8.5,1.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[1.5,5.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,7.5],[6.5,8.5],[6.5,6.5],[8.5,6.5],[8.5,8.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,3.5],[0.5,4.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[3.5,4.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,7.5],[3.5,8.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[4.5,8.5],[5.5,8.5]],"color":"#b08adb","thickness":10,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#b08adb","thickness":10,"rounded":true}}
```

• Normal sudoku rules apply.
• GERMAN WHISPER LINES: Adjacent digits along a green line must have a difference of at least 5. 
• Digits separated by an X sum to 10.
• For each purple line it must be determined whether it's a Zipper line or a Ziffer line. 
• ZIPPER LINES: Each pair of digits an equal distance from the central spot on a Zipper line have the same SUM, which appears on that central spot.
• ZIFFER LINES: Each pair of digits an equal distance from the central spot on a Ziffer line have the same DIFFERENCE, which appears on that central spot.
