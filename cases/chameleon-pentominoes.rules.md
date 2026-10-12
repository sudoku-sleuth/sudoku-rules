---
format: open-rules
title: Chameleon Pentominoes
setter: Will Power
source: https://sudokupad.app/imj3le5nse
case: https://sudoku-sleuth.com/cases/chameleon-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1-r2c2 total 25 connected true
cage-2: cage r3c1-r3c2-r4c1-r5c1-r6c1 total 25 connected true
cage-3: cage r1c4-r1c5-r2c3-r2c4-r3c3 total 25 connected true
cage-4: cage r1c6-r2c5-r2c6-r3c6-r3c7 total 25 connected true
cage-5: cage r1c7-r1c8-r1c9-r2c7-r2c9 total 25 connected true
cage-6: cage r3c5-r4c5-r4c6-r4c7-r5c7 total 25 connected true
cage-7: cage r3c4-r4c2-r4c3-r4c4-r5c4 total 25 connected true
cage-8: cage r2c8-r3c8-r3c9-r4c9-r5c9 total 25 connected true
cage-9: cage r4c8-r5c8-r6c6-r6c7-r6c8 total 25 connected true
cage-10: cage r7c6-r7c7-r8c6-r8c7-r8c8 total 25 connected true
cage-11: cage r9c4-r9c5-r9c6-r9c7-r9c8 total 25 connected true
cage-12: cage r5c5-r5c6-r6c5-r7c5-r8c5 connected true
cage-13: cage r5c3-r6c3-r6c4-r7c4-r8c4 total 25 connected true
cage-14: cage r5c2-r6c2-r7c1-r7c2-r8c1 total 25 connected true
cage-15: cage r7c3-r8c2-r8c3-r9c1-r9c2 total 25 connected true
cage-16: cage r6c9-r7c8-r7c9-r8c9-r9c9 total 25 connected true
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r1c4-r2c4 colour "white"
kropki-3: kropki r4c8-r5c8 colour "white"
kropki-4: kropki r6c5-r7c5 colour "white"
kropki-5: kropki r3c4-r4c4 colour "white"
kropki-6: kropki r4c2-r4c3 colour "white"
kropki-7: kropki r3c1-r3c2 colour "white"
kropki-8: kropki r6c2-r7c2 colour "white"
kropki-9: kropki r9c1-r9c2 colour "white"
kropki-10: kropki r7c6-r7c7 colour "white"
kropki-11: kropki r4c5-r4c6 colour "white"
kropki-12: kropki r1c1-r2c1 colour "black"
kropki-13: kropki r2c3-r3c3 colour "black"
kropki-14: kropki r2c6-r3c6 colour "black"
kropki-15: kropki r1c8-r1c9 colour "black"
kropki-16: kropki r4c1-r5c1 colour "black"
kropki-17: kropki r7c1-r7c2 colour "black"
kropki-18: kropki r7c6-r8c6 colour "black"
little-killer-1: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-2: little-killer r1c6-r2c7-r3c8-r4c9 sum 15
little-killer-3: little-killer r1c8-r2c9 sum 17
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
```

PENTOMINO CONJECTURE- After three years of trying, it is my conjecture that a Sudoku grid cannot be filled with 16 pentomino killer cages, all of value 25 (plus one single cell of value 5), where duplicate pentomino shapes (including reflections and rotations) always have the same numbers, and numbers do not repeat in cages. I encourage any setters to try to complete my quest. 
I have created the next best thing: Normal Sudoku rules apply. CHAMELEON KILLER CAGES(+)- Numbers in cages sum to 25. Numbers do not repeat in cages. Killer cages highlighted the same color have the same set of numbers in them (regardless of shape).
LITTLE KILLER SUMS- Numbers outside the grid are the sum of the indicated diagonal.
KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Where there is a conflict, black dots are shown. All possible dots are given BETWEEN DIGITS WITHIN THE SAME CAGE as one another. No negative restriction between cells of different cages.
