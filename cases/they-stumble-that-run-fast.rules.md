---
format: open-rules
title: “They Stumble that Run Fast”
setter: The Bard
source: https://sudokupad.app/z3ig5qjxoc
case: https://sudoku-sleuth.com/cases/they-stumble-that-run-fast
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4-r2c4-r3c1-r3c4-r4c1-r4c2-r4c3-r4c4 connected true
cage-2: cage r1c6-r1c7-r2c6-r3c6-r3c9-r4c6-r4c7-r4c8-r4c9 connected true
anti-knight
palindrome-1: palindrome r2c3-r3c4
palindrome-2: palindrome r6c1-r7c2
palindrome-3: palindrome r6c4-r7c5
palindrome-4: palindrome r6c5-r7c6
palindrome-5: palindrome r6c9-r7c8
palindrome-6: palindrome r8c6-r9c7
palindrome-7: palindrome r6c3-r7c4
palindrome-8: palindrome r6c2-r7c3-r8c4
palindrome-9: palindrome r3c5-r4c6
palindrome-10: palindrome r3c6-r4c5-r5c4
palindrome-11: palindrome r3c8-r4c7
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"<","textColor":"#000000","fontSize":20}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":">","textColor":"#000000","fontSize":20}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"<","textColor":"#000000","fontSize":20}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"<","textColor":"#000000","fontSize":20}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"<","textColor":"#000000","fontSize":20}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":">","textColor":"#000000","fontSize":20}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"<","textColor":"#000000","fontSize":20}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":">","textColor":"#000000","fontSize":20}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"KM","textColor":"#000000","fontSize":15}}
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
Cages: Digits may not repeat within a cage.
Palindrome: Digits on the grey line must read the same forward or backwards. The palindromes touching box 2 and 5 cross each other traveling straight.
Inequality: digits with an inequality symbol, <>, point to which digit is smaller.
