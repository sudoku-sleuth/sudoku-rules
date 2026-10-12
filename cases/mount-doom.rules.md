---
format: open-rules
title: Mount Doom
setter: Blobz
source: https://sudokupad.app/blobz/mount-doom
case: https://sudoku-sleuth.com/cases/mount-doom
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r6c1-r7c1 colour "black"
kropki-2: kropki r3c3-r4c3 colour "black"
kropki-3: kropki r4c4-r4c5 colour "black"
kropki-4: kropki r1c5-r1c6 colour "black"
kropki-5: kropki r2c7-r2c8 colour "black"
kropki-6: kropki r3c6-r3c7 colour "black"
kropki-7: kropki r5c5-r5c6 colour "black"
kropki-8: kropki r5c8-r5c9 colour "black"
palindrome-1: palindrome r9c2-r8c3-r7c4
palindrome-2: palindrome r8c7-r7c6-r6c6
slow-thermo-1: slow-thermo r8c1-r8c2-r7c3-r6c4-r5c5-r4c5
slow-thermo-2: slow-thermo r7c5-r6c5-r5c6-r4c6
slow-thermo-3: slow-thermo r8c9-r7c8-r6c7-r5c7-r4c7
slow-thermo-4: slow-thermo r9c9-r8c8-r7c7
slow-thermo-5: slow-thermo r9c8-r9c7-r8c6
slow-thermo-6: slow-thermo r9c3-r9c4-r8c5
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.53,"height":0.53,"rounded":false,"stroke":"#000000","thickness":2,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.53,"height":0.53,"rounded":false,"stroke":"#000000","thickness":2,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.53,"height":0.53,"rounded":false,"stroke":"#000000","thickness":2,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe300","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,0.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe300","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe300","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe300","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
```

The Mountain crept up ever nearer, until, if they lifted their heavy heads, it filled all their sight, looming vast before them: a huge mass of ash and slag and burned stone, out of which a sheer-sided cone was raised into the clouds.

Normal sudoku rules apply.

The diamonds indicate where Frodo, Sam, and Gollum are on the mountainside. Fill these cells with the digits that were discovered in the Elven boats in 'The Great River'.

Along SLOW thermometers digits stay the same or increase as they move away from the bulb.

Lava flows (orange lines) are palindromes and read the same in both directions.

Red fireballs (dots) separate two digits where one is double the other. Yellow fireballs separate consecutive digits.
