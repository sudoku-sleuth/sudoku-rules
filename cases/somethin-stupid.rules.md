---
format: open-rules
title: Somethin' Stupid
setter: sujoyku
source: https://sudokupad.app/eox3eq8xka
case: https://sudoku-sleuth.com/cases/somethin-stupid
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 9bd0aff224262b0dfc623b94293ba68c
---

```rules
sudoku 9x9
cage r7c1-r8c1-r9c1 total 7 connected true
arrow r4c9-r3c8-r2c7-r1c6 bulb ["r4c8"]
palindrome r3c4-r4c5-r5c4-r6c3-r5c2
whispers r5c3-r4c3-r4c2-r4c1-r5c1-r6c1-r6c2 gap 5
region-sum r4c4-r3c3-r2c4-r1c5-r2c6 segments [["r4c4"],["r3c3"],["r2c4","r1c5","r2c6"]]
renban r3c2-r3c1-r2c1-r1c1-r1c2-r1c3-r2c3
parity-cells r9c9 parity "odd"
index-line r8c5-r7c5-r6c6-r5c6-r4c7-r3c6
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,0.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"Ren","textColor":"#888787ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.25,0.7],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"GW","textColor":"#888787ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,7.5],[7.5,7.5],[7.5,8.5],[5.5,8.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,7.5],[7.5,7.5],[7.5,8.5],[5.5,8.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.8,3.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"RSL","textColor":"#888787ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.8,4.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"Pal","textColor":"#888787ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.8,6.3],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"Ind","textColor":"#888787ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Read the rules or don't. I won't blame you if you skip them. :)

---

 - Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Renban: The pink line (Ren) must contain a set of consecutive non-repeating digits in any order. 

- German Whisper: Adjacent digits on the green line (GW) must have a difference of at least 5. 

- Region Sum Line: Box borders divide the blue line (RSL) into segments with the same sum.

- Palindrome: The digits on the grey line (Pal) form a palindrome, i.e. they read the same forward and backward.

- Index Line: The turquoise line (Ind) is an Index Line, i.e. the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears.

- Arrow: Digits on the arrow sum to the digit in the circle from which the arrow emerges.

- Double Arrow: The digits on the line between two circles must sum to the same total as the digits in the two circles.

- Killer cage: Digits in the cage must sum to 7.

- Odd: A cell with a grey circle must contain an odd digit.
