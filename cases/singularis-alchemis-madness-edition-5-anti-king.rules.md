---
fog:
  initiallyLit:
    - 3
    - 4
    - 5
format: open-rules
title: Singularis alchemis.. madness edition 5- anti-king
setter: Chip Sounder
source: https://sudokupad.app/hpesr3z6x0
case: https://sudoku-sleuth.com/cases/singularis-alchemis-madness-edition-5-anti-king
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-king stated true
thermo r4c4-r4c3-r4c2-r3c2-r2c2
kropki-1: kropki r1c6-r2c6 colour "black"
kropki-2: kropki r1c4-r2c4 colour "white"
arrow r6c8-r6c9-r5c9 bulb ["r7c8"]
whispers r5c1-r5c2-r5c3-r5c4-r5c5-r5c6 gap 5
parity r9c2-r9c3-r8c3
renban r1c3-r2c3-r3c3-r3c4-r3c5-r3c6-r3c7-r2c7-r1c7
region-sum r2c9-r1c8-r2c8-r3c8-r4c8-r4c7 segments [["r2c9","r1c8","r2c8","r3c8"],["r4c8","r4c7"]]
pair-1: pair r6c7-r6c8 relation {"op":"sum","value":10}
pair-2: pair r1c5-r1c6 relation {"op":"sum","value":5}
quadruple r1c2-r1c3-r2c2-r2c3 digits [2]
parity-cells-1: parity-cells r3c3 parity "odd"
parity-cells-2: parity-cells r5c2 parity "even"
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,0.5],[7.5,0.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[3,4,5],"label":"8"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[32,33,42,43,51,60,69,78,79],"label":"2325"}}
```

Any clue type can only appear once.
-Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
-The grid is covered in fog. Placing a correct digit will clear the fog from the surrounding cells of that digit. No bifurcation is necessary.
-Cells separated by a king's move (in chess) cannot contain the same digit.
-Killer cages: Digits in a dotted cage cannot repeat and sum to the total given in the top left corner of the cage.
-Cells separated by a black dot are a 1:2 ratio. -Cells separated by a white dot are consecutive.
-Cells separated by an X sum to 10. -Cells separated by a V sum to 5. No negative constraints.
-Digits on a purple renban must be a set of consecutive digits in any order without repeating a digit.
-Digits in a highlighted grey circle are odd.
-Digits inside a circle clue must be in the 2x2 of cells touching the quad circle.
-Digits on a thermometer must rise from the bulb end.
-.Box borders divide blue lines into segments with the same sum.
-Digits on a green German whispers line must differ by at least 5.
-Digits in a highlighted grey square are even.
-Adjacent digits on an orange line must alternate between low (123), medium (456) and high (789). Any 3 in a row on a line must contain 1 of each entropy.
-Digits on an arrowed line sum to the digits in the connected circle.
-Look-and-Say Cages: Digits can repeat in cages. The number in the top left corner should be read as a look-and-say number and says which digits are in that cage. For example, if a cage has the clue "12" then it means there is one 2 in the cage. If it has the clue "3314" then it means there are three 3s and one 4 in the cage.
-Adjacent cells along a red line must alternate between odd and even.
