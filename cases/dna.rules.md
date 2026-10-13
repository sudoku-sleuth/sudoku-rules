---
format: open-rules
title: DNA
setter: Jobo
source: https://sudokupad.app/fcavd27gin
case: https://sudoku-sleuth.com/cases/dna
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r5c4-r5c5 colour "white"
kropki-3: kropki r5c5-r5c6 colour "white"
kropki-4: kropki r5c6-r5c7 colour "white"
whispers-1: whispers r1c3-r2c2-r3c3-r4c4-r5c3-r6c2-r7c3 gap 4
whispers-2: whispers r3c7-r4c8-r5c7-r6c6-r7c7-r8c8-r9c7 gap 4
parity-1: parity r1c3-r2c4-r3c3-r4c2-r5c3
parity-2: parity r5c3-r6c4-r7c3
parity-3: parity r3c7-r4c6-r5c7-r6c8-r7c7
parity-4: parity r7c7-r8c6-r9c7
pair r9c3-r9c4 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"path","layer":"lines","d":"M144 16L176 48","bounds":[0.25,2.25,0.75,2.75],"color":"#fda9a9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"path","layer":"lines","d":"M144 272L176 304","bounds":[4.25,2.25,4.75,2.75],"color":"#fda9a9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"path","layer":"lines","d":"M432 144L400 176","bounds":[2.25,6.25,2.75,6.75],"color":"#fda9a9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"path","layer":"lines","d":"M432 400L400 432","bounds":[6.25,6.25,6.75,6.75],"color":"#fda9a9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"path","layer":"lines","d":"M117 96L203 96","bounds":[1.5,1.828125,1.5,3.171875],"color":"#f69cf6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"path","layer":"lines","d":"M117 224L203 224","bounds":[3.5,1.828125,3.5,3.171875],"color":"#f69cf6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"path","layer":"lines","d":"M117 352L203 352","bounds":[5.5,1.828125,5.5,3.171875],"color":"#f69cf6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"path","layer":"lines","d":"M373 224L459 224","bounds":[3.5,5.828125,3.5,7.171875],"color":"#f69cf6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"path","layer":"lines","d":"M373 352L459 352","bounds":[5.5,5.828125,5.5,7.171875],"color":"#f69cf6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"path","layer":"lines","d":"M373 480L459 480","bounds":[7.5,5.828125,7.5,7.171875],"color":"#f69cf6ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Cells separated by a king's move cannot contain the same digit.

Digits along a purple line are a set of consecutive, non-repeating digits in any order.

Adjacent digits along an orange line must differ by at least 4.

Adjacent digits along the red line must alternate in parity (odd/even).

Digits separated by a white dot must be consecutive.
Digits separated by a V must sum to 5.
Not all dots and V are given.
