---
format: open-rules
title: Looking for Clues in All the Wrong Places
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2c8uu5j1ni
case: https://sudoku-sleuth.com/cases/looking-for-clues-in-all-the-wrong-places
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers r5c6-r5c7-r5c8-r4c9-r3c9-r2c9-r1c8-r1c7-r1c6-r2c5-r3c5-r4c5 gap 4 loop true
renban-1: renban r4c5-r3c5-r2c5-r1c6-r1c7-r1c8-r2c9-r3c9
renban-2: renban r2c1-r1c2-r2c3-r3c2-r4c2
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":0,"text":"🕵️","textColor":"#0009","fontSize":20.8,"textStroke":"#ffffff99","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":0,"text":"🕵️","textColor":"#0009","fontSize":20.8,"textStroke":"#ffffff99","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":0,"text":"🕵️","textColor":"#0009","fontSize":20.8,"textStroke":"#ffffff99","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":0,"text":"🕵️","textColor":"#0009","fontSize":20.8,"textStroke":"#ffffff99","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.75,4.75],[4.25,4.25],[4.75,3.75],[5.25,3.25],[5.75,2.75],[6.25,2.25],[6.75,1.75],[7.25,1.25],[7.75,0.75],[8.25,0.25],[8.75,0.75]],"color":"#ffa60099","thickness":5.12,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.25,5.25],[4.75,4.75],[5.25,4.25],[5.75,3.75],[6.25,3.25],[6.75,2.75],[7.25,2.25],[7.75,1.75],[8.25,1.25],[8.75,0.75]],"color":"#ffa60099","thickness":5.12,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":0,"text":"🕵️","textColor":"#0009","fontSize":20.8,"textStroke":"#ffffff99","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"👣","textColor":"#0009","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"👣","textColor":"#0009","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"👣","textColor":"#0009","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
```

**Sudoku, Whisper-4, Renban, Sleuths, Footprints**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 Line (the magnifying glass and handle in this puzzle) differ by at least 4
- Renban Lines: Digits along a Renban line (the question mark and the shadow of the magnifying glass in this puzzle) must form a set of non-repeating consecutive digits in any order.
- Sleuths: All of the cells with a sleuth contain the same digit.
- Footprints: Digits in cells separated by a pair of footprints are in a 1:2 ratio.
