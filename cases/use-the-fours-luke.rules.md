---
format: open-rules
title: Use The Fours, Luke
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zoerh84paq
case: https://sudoku-sleuth.com/cases/use-the-fours-luke
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: e248412b9ae230e2598e75d17a1d2935
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r2c1 white
kropki-2: kropki r1c3-r1c4 white
kropki-3: kropki r3c4-r3c5 white
kropki-4: kropki r2c9-r3c9 white
kropki-5: kropki r6c8-r6c9 white
kropki-6: kropki r7c9-r8c9 white
kropki-7: kropki r7c7-r7c8 white
kropki-8: kropki r5c5-r5c6 white
kropki-9: kropki r6c3-r6c4 white
kropki-10: kropki r7c5-r8c5 white
kropki-11: kropki r9c3-r9c4 white
whispers-1: whispers r6c1-r6c2 gap 4
whispers-2: whispers r6c2-r6c3 gap 4
whispers-3: whispers r6c2-r7c1-r8c1 gap 4
whispers-4: whispers r6c2-r7c3 gap 4
whispers-5: whispers r6c2-r5c3 gap 4
whispers-6: whispers r3c6-r3c7 gap 4
whispers-7: whispers r3c8-r3c7 gap 4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.4],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.6],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.4,1.4],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.4,1.6],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.4,1.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.6,1.4],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.6,1.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.6,1.6],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.4,6.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.4,6.4],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.4],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.6,6.4],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.6,6.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.4,6.6],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.6],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.6,6.6],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.2,2.5]],"color":"#ffa60099","thickness":6.4,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.8,2.5],[4.5,2.5]],"color":"#ffa60099","thickness":6.4,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[5.4,1.4],[4.5,0.5],[3.8,0.5]],"color":"#ffa60099","thickness":6.4,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[2.4,6.6],[1.5,7.5],[0.8,7.5]],"color":"#ffa60099","thickness":6.4,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[2.4,6.4],[1.5,5.5],[0.8,5.5]],"color":"#ffa60099","thickness":6.4,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2.6,6.4],[3.5,5.5],[4.2,5.5]],"color":"#ffa60099","thickness":6.4,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[2.6,6.6],[3.5,7.5],[4.2,7.5]],"color":"#ffa60099","thickness":6.4,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.45,7.45]],"color":"#ffa60099","thickness":6.4,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[7.8,1.8],[6.95,2.65],[7.05,2.55],[7.25,2.45],[7.85,1.85],[7.85,1.05],[7.45,0.65],[7.65,0.95],[7.85,1.15]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[6.95,2.65],[6.8,2.8],[7.1,2.6],[7.25,2.45]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.3,2.4],[7.45,2.25]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[7.5,2.2],[7.75,1.95]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[7.45,0.65],[7.05,0.25],[6.9,0.2],[6.95,0.15],[7.05,0.25]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[7.65,0.95],[7.2,0.5],[7.3,0.5],[7.15,0.45],[7.2,0.5]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[7.1,2.6],[6.85,2.85],[6.8,2.8],[6.75,2.85],[6.85,2.85]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[6.95,0.15],[6.75,0.15],[6.9,0.2],[7.15,0.45]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[6.75,2.85],[4.15,2.85],[3.15,1.85],[3.15,1.25],[4.25,0.15],[6.75,0.15]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[4.25,2.85],[3.2,1.8]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[3.15,1.25],[3.15,1.15],[4.15,0.15],[4.25,0.15]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[4.8,6.8],[3.75,7.85],[3.85,7.85],[4.85,6.85],[4.85,6.15],[3.85,5.15],[1.15,5.15],[1,5.3],[1.15,5.25],[1.2,5.2]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[3.75,7.85],[1.25,7.85],[0.7,7.3],[0.7,7.4],[1.15,7.85],[1.25,7.85]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[4.85,6.25],[4.5,5.9]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[1,5.3],[0.15,6.15],[0.15,6.85],[0.35,7.05],[0.65,7.25],[0.7,7.3]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[1.15,5.25],[0.2,6.2]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[0.7,7.4],[0.45,7.15],[0.2,6.8],[0.15,6.75]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[0.2,6.8],[0.65,7.25]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[0.25,6.95],[0.45,7.15]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[0.65,7.35],[0.55,7.15]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[3.8,5.2],[4.45,5.85]],"color":"#3ba9","thickness":6.4,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[5.25,3.15],[5.45,3.15],[5.85,3.55],[5.85,4.35],[5.35,4.85],[3.55,4.85],[3.15,4.45],[3.15,3.55],[3.55,3.15],[5.25,3.15]],"color":"#78787899","thickness":6.4,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.2,0.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.2,2.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.8],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.8,2.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.8,0.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","stroke":"#ffa600ff","thickness":1.28,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.2],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.8],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.2,7.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.2,5.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.8,5.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.8,7.5],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.2],"width":0.12,"height":0.12,"rounded":false,"fill":"#ffa60099","thickness":0,"angle":0}}
```

**Sudoku, Modular Lines, Dutch Whispers, Parity Lines Consecutive Dots, Fours Choke**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular Lines: Any set of three adjacent digits along a teal modular line has three different remainders when divided by 3.
- Parity Lines: Digits along grey parity lines alternate odd/even.
- Dutch Whispers: Adjacent digits along orange Dutch Whispers line must differ by at least four.
- Consecutive pairs: Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- Fours Choke: Cells appearing on a modular line, Dutch whisper, parity line, or consecutive dot cannot contain the digit 4.
