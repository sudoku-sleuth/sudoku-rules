---
format: open-rules
title: Eureka!
setter: Jobo
source: https://sudokupad.app/hnsu91dwlo
case: https://sudoku-sleuth.com/cases/eureka
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=6
---

```rules
sudoku 9x9
anti-knight
pair-1: pair r4c6-r5c6 difference 2
pair-2: pair r4c4-r5c4 difference 2
whispers-1: whispers r7c4-r8c4-r9c5-r8c6-r7c6 gap 5
whispers-2: whispers r7c4-r7c5-r7c6 gap 5
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[5.5,3.5],[4.5,2.5],[3.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[3.5,6.5],[4.5,6.5],[5.5,5.5],[6.5,5.5]],"color":"#701fe642","thickness":9.6,"rounded":true,"path":"M224 416L224 384Q224 352 192 320Q160 288 160 256Q160 224 192 192Q224 160 256 160L320 160Q352 160 384 192Q416 224 416 256Q416 288 384 320Q352 352 352 384L352 416","bounds":[2.5,2.5,6.5,6.5]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,4.5],[4.5,3.5]],"color":"#ebe8e2ff","thickness":3.2,"rounded":true,"path":"M275 410L275 384Q275 352 265 320L256 294Q250 275 230 256","bounds":[4,3.59375,6.40625,4.296875]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,4.5],[4.5,5.5]],"color":"#ebe8e2ff","thickness":3.2,"rounded":true,"path":"M301 410L301 384Q301 352 311 320L320 294Q326 275 346 256","bounds":[4,4.703125,6.40625,5.40625]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5]],"color":"#f8f1b2ff","thickness":7.68,"rounded":true,"path":"M32 288L96 288","bounds":[4.5,0.5,4.5,1.5]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5]],"color":"#f8f1b2ff","thickness":7.68,"rounded":true,"path":"M105 105L151 151","bounds":[1.640625,1.640625,2.359375,2.359375]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5]],"color":"#f8f1b2ff","thickness":7.68,"rounded":true,"path":"M288 32L288 96","bounds":[0.5,4.5,1.5,4.5]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,7.5]],"color":"#f8f1b2ff","thickness":7.68,"rounded":true,"path":"M425 151L471 105","bounds":[1.640625,6.640625,2.359375,7.359375]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[4.5,8.5]],"color":"#f8f1b2ff","thickness":7.68,"rounded":true,"path":"M480 288L544 288","bounds":[4.5,7.5,4.5,8.5]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,7.5]],"color":"#f8f1b2ff","thickness":7.68,"rounded":true,"path":"M425 425L471 471","bounds":[6.640625,6.640625,7.359375,7.359375]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,2.5]],"color":"#f8f1b2ff","thickness":7.68,"rounded":true,"path":"M105 471L151 425","bounds":[6.640625,1.640625,7.359375,2.359375]}}
```

Normal sudoku rules apply.

Cells separated by a knight's move cannot contain the same digit.

Digits an equal distance from the center of a lavender line must sum to the digit on the center of that line.

Adjacent digits along a green line must differ by at least 5.

All yellow lines contain 1 odd and 1 even digit, and these digits may not be consecutive.

Digits separated by a yellow dot must differ by exactly 2.
