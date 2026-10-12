---
format: open-rules
title: Zippery When Wet
setter: Marty Sears
source: https://tinyurl.com/3wnfcunx
case: https://sudoku-sleuth.com/cases/zippery-when-wet
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[1.5,0.5]],"color":"#ED88FF","thickness":11,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[2.5,1.5]],"color":"#3FBCFF","thickness":11,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,4.5],[2.5,4.5]],"color":"#FFE63F","thickness":11,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5],[2.5,2.5],[3.5,2.5],[3.5,1.5]],"color":"#6BD950","thickness":11,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,5.5],[3.5,4.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,8.5],[3.5,8.5]],"color":"#FFB23F","thickness":11,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5],[3.5,7.5]],"color":"#96FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,2.5],[3.5,3.5],[4.5,4.5],[5.5,4.5]],"color":"#3FBCFF","thickness":11,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[5.5,5.5]],"color":"#ED88FF","thickness":11,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,2.5],[6.5,3.5],[8.5,3.5]],"color":"#F13F3F","thickness":11,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,8.5]],"color":"#F13F3F","thickness":11,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[7.5,2.5]],"color":"#96FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,4.5],[7.5,4.5]],"color":"#96FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5],[6.5,6.5]],"color":"#FFB23F","thickness":11,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,5.5],[8.5,6.5]],"color":"#6BD950","thickness":11,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,6.5],[7.5,7.5]],"color":"#FFE63F","thickness":11,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,8.5],[8.5,7.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
```

• Normal sudoku rules apply.

YIN-YANG:
• Each cell is either land or water.
• All cells of the same type must be orthogonally connected.
• No 2x2 area may be entirely land or entirely water.

LINE TYPES:
• Renban (pink) - Digits on a pink line don't repeat, and form a consecutive sequence, but these can be arranged in any order along the line.
• Nabner (yellow) - A digit on a yellow line cannot be consecutive with (or the same as) any other digit anywhere on the line.
• German Whisper (green) - Adjacent digits on a green line must have a difference of at least 5.
• Region Sum (blue) - Digits along a blue line must have the same total within each 3x3 box.
• Parity (red) - Digits along a red line must alternate between odd and even.
• Entropic (orange) - Any group of 3 adjacent digits on an orange line must contain a low digit (1, 2 or 3), a medium digit (4, 5 or 6), and a high digit (7, 8 or 9).
• Palindrome (grey) - A grey line must read the same in either direction.
• Same Difference (turquoise) - Each pair of adjacent digits along a turquoise line must have the same difference.

ZIPPERY WHEN WET:
• Any line that is completely wet (only enters water cells) loses the property of its presenting colour, and instead becomes a zipper line. Along a zipper line, each pair of digits that are the same distance from the line's central cell, sum to the digit in that centre cell.
• Any line that is completely dry (only enters land cells) behaves normally, as described in the list above. It does not behave like a zipper line.
• If a line is partly dry and partly wet, it retains its presenting property, but it is ALSO a zipper line as well.
