---
fog:
  initiallyLit:
    - 1
    - 10
    - 19
    - 20
format: open-rules
title: Nala‘s Dilemma
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala-/nalas-dilemma
case: https://sudoku-sleuth.com/cases/nala-s-dilemma
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 colour "black"
kropki-2: kropki r6c3-r6c4 colour "black"
kropki-3: kropki r4c7-r4c8 colour "black"
kropki-4: kropki r2c2-r3c2 colour "white"
kropki-5: kropki r6c1-r7c1 colour "white"
palindrome r1c3-r2c4-r2c5-r3c5-r4c6-r3c7-r4c8-r5c9-r6c9-r7c8-r8c7-r7c6-r8c5-r8c4-r8c3-r7c2-r6c2-r5c1
whispers-1: whispers r2c2-r2c1-r1c1-r1c2-r2c3-r3c3-r4c4-r4c3-r4c2-r3c1-r3c2 gap 5
whispers-2: whispers r3c6-r2c7-r2c6-r1c6-r1c5 gap 5
whispers-3: whispers r9c9-r9c8-r8c8-r7c7-r6c8-r5c7-r6c7-r6c6 gap 5
region-sum-1: region-sum r6c3-r6c4-r5c5-r4c5-r3c4 segments [["r6c3"],["r6c4","r5c5","r4c5"],["r3c4"]]
region-sum-2: region-sum r1c3-r2c4-r2c5-r3c5-r4c6-r3c7-r4c8-r5c9-r6c9-r7c8-r8c7-r7c6-r8c5-r8c4-r8c3-r7c2-r6c2-r5c1 segments [["r1c3"],["r2c4","r2c5","r3c5"],["r4c6"],["r3c7"],["r4c8","r5c9","r6c9"],["r7c8","r8c7"],["r7c6","r8c5","r8c4"],["r8c3","r7c2"],["r6c2","r5c1"]]
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,5.5],[1.5,6.5],[2.5,5.5]],"color":"#efc3dbff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,4.5],[4.5,4.5],[5.5,3.5],[5.5,2.5]],"color":"#fd5eaaff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,0.5],[0.5,0.5],[0.5,1.5],[1.5,2.5],[2.5,2.5],[3.5,3.5],[3.5,2.5],[3.5,1.5],[2.5,0.5],[2.5,1.5]],"color":"#ffaf7cff","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.8,8],"width":0,"height":1.066,"rounded":true,"thickness":0,"angle":0,"text":"🥏","textColor":"#000000","fontSize":40.6,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Wait? It seems like Nala gets to choose between 2 different toys today that are hidden in the fog of not 1, but 2 sudoku! Can you help her find them? And which one will she end up picking to play with? 

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Mystery Lines: Hidden under the fog are non-branching mystery lines. Each line has its own color. Lines of the same color are connected. Each line has one of the following values that need to be determined by the solver: 

Palindrome: The sequence of digits along a palindrome line read the same from both directions.
German Whisper: Digits that are connected by a whisper line must have a difference of at least 5.
or 
Region Sum Line: Digits along a Region Sum Line sum to the same digit N for each Box the line passes through.

Kropki Pairs: Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Grey dots are ambiguous and can turn out to be either functioning as white or black dot for the digits they separate. 

Not all possible dots are given. (There is no negative constraint.)
