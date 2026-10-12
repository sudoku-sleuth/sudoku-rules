---
format: open-rules
title: Abstract Art
setter: Marty Sears
source: https://sudokupad.app/s7221r2i0r
case: https://sudoku-sleuth.com/cases/abstract-art
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 8
  cols: 8
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
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
kropki r3c7-r4c7 colour "black"
palindrome r8c5-r8c6-r8c7-r7c7-r6c7
parity r8c5-r7c5-r6c5-r6c6-r6c7 loop false
whispers r2c8-r3c8-r4c8-r4c7-r5c7-r5c6-r4c6-r3c6-r3c7-r2c7 loop true gap 5
nabner r1c5-r2c5-r2c6-r1c6 distinct true
renban r1c1-r2c1-r3c1-r4c2-r3c2-r2c2
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.2,7.8],[8.2,8.2],[-0.2,8.2],[-0.2,-0.2],[8.2,-0.2],[8.2,7.8]],"color":"#dbd9baff","thickness":24.32,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8,8.333],[8.333,8.333],[8.333,-0.333],[-0.333,-0.333],[-0.333,8.333],[8,8.333]],"color":"#eae8d5ff","thickness":17.92,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7,6],[7,8],[8,8],[8,7],[7,7]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7,7],[6,7],[6,8],[7,8]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8,7],[8,6],[6,6],[6,7],[5,7],[5,8],[6,8]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7,6],[7,5],[8,5],[8,6]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5,8],[4,8],[4,7],[5,7],[5,6],[6,6],[6,5],[7,5],[7,4],[8,4],[8,5]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4,8],[3,8],[3,7],[4,7],[4,6],[5,6],[5,5],[6,5],[6,4],[7,4],[7,3],[8,3],[8,4]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3,8],[2,8],[2,7],[3,7],[3,6],[4,6],[4,5],[5,5],[5,4],[6,4],[6,3],[7,3],[7,2],[8,2],[8,3]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2,8],[1,8],[1,7],[2,7],[2,6],[3,6],[3,5],[4,5],[4,4],[3,4],[3,5]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8,2],[8,1],[7,1],[7,2],[6,2],[6,3],[5,3],[5,4],[4,4],[4,3],[5,3]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1,8],[0,8],[0,7],[1,7],[1,6],[2,6],[2,5],[3,5]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5,3],[5,2],[6,2],[6,1],[7,1],[7,0],[8,0],[8,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1],[5,1],[5,2],[4,2],[4,3],[3,3],[3,4],[2,4],[2,5],[1,5],[1,6],[0,6],[0,7]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5],[1,4],[2,4],[2,3],[3,3],[3,2],[4,2],[4,1],[5,1],[5,0],[6,0]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,4],[0,4],[0,5]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3],[1,2],[2,2],[2,1],[3,1],[3,0],[4,0]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,3]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,2]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7,6],[7,8],[8,8],[8,7],[7,7]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7,7],[6,7],[6,8],[7,8]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8,7],[8,6],[6,6],[6,7],[5,7],[5,8],[6,8]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[7,6],[7,5],[8,5],[8,6]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[5,8],[4,8],[4,7],[5,7],[5,6],[6,6],[6,5],[7,5],[7,4],[8,4],[8,5]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4,8],[3,8],[3,7],[4,7],[4,6],[5,6],[5,5],[6,5],[6,4],[7,4],[7,3],[8,3],[8,4]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3,8],[2,8],[2,7],[3,7],[3,6],[4,6],[4,5],[5,5],[5,4],[6,4],[6,3],[7,3],[7,2],[8,2],[8,3]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[2,8],[1,8],[1,7],[2,7],[2,6],[3,6],[3,5],[4,5],[4,4],[3,4],[3,5]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[8,2],[8,1],[7,1],[7,2],[6,2],[6,3],[5,3],[5,4],[4,4],[4,3],[5,3]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[1,8],[0,8],[0,7],[1,7],[1,6],[2,6],[2,5],[3,5]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[5,3],[5,2],[6,2],[6,1],[7,1],[7,0],[8,0],[8,1]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1],[5,1],[5,2],[4,2],[4,3],[3,3],[3,4],[2,4],[2,5],[1,5],[1,6],[0,6],[0,7]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5],[1,4],[2,4],[2,3],[3,3],[3,2],[4,2],[4,1],[5,1],[5,0],[6,0]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,4],[0,4],[0,5]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3],[1,2],[2,2],[2,1],[3,1],[3,0],[4,0]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,3]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,2]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#00000007","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[0.5,2.1],[0.5,1.5],[1.1,1.5]],"color":"#9af8edff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[1.5,1.9],[1.5,2.5],[0.9,2.5]],"color":"#9af8edff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,1.5],[6.5,3.5],[4.5,3.5],[4.5,1.5],[5.5,1.5]],"color":"#9af8edff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5],[4.5,4.5],[2.5,4.5],[2.5,3.5],[3.5,2.5]],"color":"#59bffeff","thickness":12.16,"rounded":true,"layer":"over"}}
```

• Divide the grid into eight non-overlapping 2x4 regions, which can each be placed either horizontally or vertically.
• It must be determined which one of the digits 1-9 is missing from the grid. The other eight digits should each appear once in every row, column and region.

• RENBAN (pink) - digits along the pink line form a consecutive set, which can appear in any order.
• NABNER (yellow) - no two digits on the yellow line may be consecutive (or the same.)
• REGION SUM ( darker blue) - on the blue line, digits in each region have the same total.
• GERMAN WHISPER (green) - adjacent digits on the green line must have a difference of at least 5.
• PARITY (red) - digits on the red line must alternate between odd and even.
• PALINDROME (grey) - the string of digits on the grey line reads the same in either direction.
• SAME DIFFERENCE (turquoise) - each pair of adjacent digits on a turquoise line has the same difference. This difference value can be different for different turquoise lines.
• KROPKI - two digits connected by a black dot have a 2:1 ratio (one is double the other.)
