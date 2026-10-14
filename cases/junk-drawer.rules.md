---
format: open-rules
title: Junk Drawer
setter: The Bard
source: https://sudokupad.app/vqzt23utm7
case: https://sudoku-sleuth.com/cases/junk-drawer
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: fd2453e97ec101d59cfb8bf993f0ab88
---

```rules
sudoku 9x9
cage r8c9-r9c9 total 4 connected true
arrow r8c7-r7c7 bulb ["r9c7"]
little-killer r7c9-r8c8-r9c7 sum 23
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,2.5],[2.5,1.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,3.5],[5.5,2.5],[6.5,1.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,7.5],[7.5,8.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,3.5],[4.5,4.5],[5.5,5.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,0.5],[2.5,0.5]],"color":"#FF9A00","thickness":6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[7.5,2.5],[6.5,3.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,2.5],[5.5,3.5]],"color":"#FFCCAA","thickness":5,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,5.5],[2.5,4.5]],"color":"#33BBBB","thickness":5,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,8.5],[4.5,7.5]],"color":"#cdb1ec","thickness":5,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#000000","thickness":2}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"X","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,0.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0.8,"height":0.8,"rounded":false,"text":"3","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0.8,"height":0.8,"rounded":false,"text":"37","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#ccc","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4.06,2.4],[4.11,2.5],[4.06,2.6]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4.6,2.94],[4.5,2.89],[4.4,2.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.94,2.6],[4.89,2.5],[4.94,2.4]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.4,2.06],[4.5,2.11],[4.6,2.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#ccc","thickness":0,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4.11,7.4],[4.06,7.5],[4.11,7.6]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.6,7.89],[4.5,7.94],[4.4,7.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[4.89,7.6],[4.94,7.5],[4.89,7.4]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[4.4,7.11],[4.5,7.06],[4.6,7.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"◯","textColor":"#000000","fontSize":42}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"37","textColor":"#000000","fontSize":26}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"▯","textColor":"#000000","fontSize":42}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":26}}
```

All my leftover sudoku clues got shoved into a drawer and now they are jumbled into a single puzzle. Can you help me sort them out?

Below are the items you will find in this puzzle, for a full description of the rules go to this puzzle on Logic Master’s Germany:

Normal Sudoku rules apply
Arrow
Clone (Shaded areas, box 3 and 8)
Dutch Whisper (Orange line, box 1 and 4)
Entropic Lines (Beige line, box 5 and 7)
German Whispers (Green line, box 1 and 5)
Killer
Kropki Pairs
Little Killer
Maximum, Minimum
Modular line (Teal line, box 2, 5, and 6)
Odd/Even
Palindromes (Grey line, box 4,5, and 7)
Renban (Purple line, box 6 and 9)
Sandwich 
Skyscraper (In a box)
Sum Line (Blue line, box 7 and 8)
Thermo (Box 1 and 2)
X-Sums (In a circle)
XV Pairs
Zipper Lines (Lavender line, box 3 and 6)
