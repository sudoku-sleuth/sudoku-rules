---
format: open-rules
title: Zeroville
setter: Marty Sears
source: https://sudokupad.app/1qwycm0uh0
case: https://sudoku-sleuth.com/cases/zeroville
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
exported: 7436f68ba2a3114077e0b4783abe8d06
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
palindrome-1: palindrome r6c4-r7c4-r7c5
palindrome-2: palindrome r6c5-r5c5-r5c6
whispers r2c4-r3c3-r4c4-r3c4 gap 5
parity-1: parity r1c1-r1c2-r1c3
parity-2: parity r3c8-r3c7-r2c7
slow-thermo-1: slow-thermo r7c3-r8c4-r9c5
slow-thermo-2: slow-thermo r9c3-r9c2-r9c1-r8c1-r7c1-r6c1-r6c2-r5c3-r4c3
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[8.5,4.5]],"color":"#FFFFFF","thickness":21,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,0.5],[5.5,0.5],[5.5,1.5],[4.5,2.5],[3.5,2.5]],"color":"#FFFFFF","thickness":21,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[3.5,0.5],[3.5,1.5],[1.5,1.5]],"color":"#FFFFFF","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5],[1.5,5.5],[0.5,6.5],[0.5,7.5]],"color":"#FFFFFF","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,8.5],[0.5,8.5]],"color":"#FFFFFF","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,8.5]],"color":"#FFFFFF","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,7.5],[7.5,6.5]],"color":"#FFFFFF","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,7.5],[4.5,8.5]],"color":"#FFFFFF","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[3.5,8.5],[3.5,5.5]],"color":"#d1a7daff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,7.5],[7.5,6.5]],"color":"#d1a7daff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[3.5,0.5],[3.5,1.5],[1.5,1.5]],"color":"#3cacffff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,6.5],[1.5,5.5],[0.5,4.5],[0.5,3.5]],"color":"#8cf2f1ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,8.5]],"color":"#8cf2f1ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,7.5],[4.5,8.5]],"color":"#8cf2f1ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#d1a7daff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#d1a7daff","thickness":0,"angle":0}}
```

Place six 3x2 boxes into the grid. They can be placed either horizontally or vertically, but cannot overlap.

Place the digits 1-6 in each box so that these digits do not repeat in a row, column or box. Any cell outside a box contains a zero.

The following line rules apply to all digits along a line, (even the zeroes!)

𝗔𝗟𝗧𝗘𝗥𝗡𝗔𝗧𝗜𝗡𝗚 𝗣𝗔𝗥𝗜𝗧𝗬 (RED): Adjacent digits on a red line contain one even digit and one odd digit.
𝗦𝗔𝗠𝗘 𝗗𝗜𝗙𝗙𝗘𝗥𝗘𝗡𝗖𝗘 (TURQUOISE): Adjacent digits on a turquoise line have the same difference, to be determined.
𝗣𝗔𝗟𝗜𝗡𝗗𝗥𝗢𝗠𝗘 (YELLOW): A yellow line reads the same in either direction.
𝗚𝗘𝗥𝗠𝗔𝗡 𝗪𝗛𝗜𝗦𝗣𝗘𝗥 (GREEN): Adjacent digits on a green line have a difference of at least FIVE.
𝗥𝗘𝗚𝗜𝗢𝗡 𝗦𝗨𝗠 (DARKER BLUE): Box borders divide the darker blue line into segments. The digits on each segment have the same sum.
𝗭𝗜𝗣𝗣𝗘𝗥 (LAVENDER): Two digits that are an equal distance from the central spot on a lavender line sum to the digit on that central spot.
𝗦𝗟𝗢𝗪 𝗧𝗛𝗘𝗥𝗠𝗢 (GREY): Starting at the end with the bulb and moving along it, digits on a slow thermo always increase or stay the same (but never decrease.)
