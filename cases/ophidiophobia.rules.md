---
format: open-rules
title: Ophidiophobia
setter: Marty Sears
source: https://sudokupad.app/zmckmtohx1
case: https://sudoku-sleuth.com/cases/ophidiophobia
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: efd564a45dc3442f82f97b9aa92a8b4d
---

```rules
sudoku 9x9
cage-1: cage r9c2-r9c3 total 15 connected true
cage-2: cage r1c1-r1c2 total 15 connected true
cage-3: cage r3c8-r4c8 total 13 connected true
cage-4: cage r9c4-r9c5 total 12 connected true
cage-5: cage r5c3-r6c3 total 13 connected true
kropki-1: kropki r7c5-r7c6 black
kropki-2: kropki r5c1-r5c2 black
pair r6c7-r6c8 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,0],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,1],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,2],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,3],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,4],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,6],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,7],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,8],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,9],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,1],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,2],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,3],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,4],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,6],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,7],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,8],"width":0.8,"height":0.8,"rounded":true,"fill":"#cef8c8ff","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[-0.125,1.875],[-0.125,9.125],[9.125,9.125],[9.125,-0.125],[-0.125,-0.125],[-0.125,1.875]],"color":"#cef8c8ff","thickness":11,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"cage","cells":[5,6]}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.73,"height":0.73,"rounded":true,"fill":"#FFFFFF","stroke":"#9a81ddff","thickness":4,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.73,"height":0.73,"rounded":true,"fill":"#FFFFFF","stroke":"#9a81ddff","thickness":4,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.73,"height":0.73,"rounded":true,"fill":"#FFFFFF","stroke":"#9a81ddff","thickness":4,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.73,"height":0.73,"rounded":true,"fill":"#FFFFFF","stroke":"#9a81ddff","thickness":4,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.73,"height":0.73,"rounded":true,"fill":"#FFFFFF","stroke":"#9a81ddff","thickness":4,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.73,"height":0.73,"rounded":true,"fill":"#FFFFFF","stroke":"#9a81ddff","thickness":4,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.73,"height":0.73,"rounded":true,"fill":"#FFFFFF","stroke":"#9a81ddff","thickness":4,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.73,"height":0.73,"rounded":true,"fill":"#FFFFFF","stroke":"#9a81ddff","thickness":4,"angle":0}}
```

Normal sudoku rules apply. Draw 4 snakes, moving orthogonally through the grid. Snakes may not move diagonally, branch, enter cages, cross themselves, or share cells with each other. But they may touch themselves and each other in any way they like.

Each circled digit lies at one end of a snake, and indicates how many marked 3x3 boxes that snake visits.

Digits in a cage sum to the clue in the corner (if one is given.)

Digits separated by an X sum to 10.

Digits separated by a black dot are in a 1:2 ratio (one is double the other.)

Each snake follows ONE AND ONLY ONE of the four rules below (breaking all the other rules at least once.) Each snake follows a different rule.

• ALTERNATING PARITY: Digits along the snake alternate between odd and even.
• GERMAN WHISPER: Adjacent digits have a difference of at least 5.
• PALINDROME: The snake reads the same in either direction.
• NON-VENOMOUS: No pair of adjacent digits anywhere along the snake sum to exactly the 'venom value'.

The venom value (which is the same for any snake) is to be deduced.
