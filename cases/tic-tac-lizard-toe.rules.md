---
format: open-rules
title: Tic Tac Lizard Toe
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1m0m628h4g
case: https://sudoku-sleuth.com/cases/tic-tac-lizard-toe
library: https://rules.sudoku-sleuth.com/
status: read
exported: 654dad211dab738cc12331c77d6d1b26
---

```rules
sudoku 9x9
cage-1: cage r4c2-r5c2-r5c3 total 7 connected true
cage-2: cage r1c8-r2c8-r2c9 total 7 connected true
cage-3: cage r7c5-r8c5-r8c6 total 7 connected true
cage-4: cage r7c2-r8c1-r8c2 total 13 connected true
cage-5: cage r4c8-r5c7-r5c8 total 13 connected true
cage-6: cage r1c5-r2c4-r2c5 total 13 connected true
cage-7: cage r6c7-r7c7 total 5 connected true
cage-8: cage r7c3-r7c4 total 16 connected true
cage-9: cage r3c3-r4c3 total 5 connected true
cage-10: cage r3c6-r3c7 total 15 connected true
cage-11: cage r3c5-r4c5 total 7 connected true
whispers-1: whispers r1c1-r2c2-r3c3 gap 5
whispers-2: whispers r1c3-r2c2-r3c1 gap 5
whispers-3: whispers r4c4-r5c5-r6c6 gap 5
whispers-4: whispers r4c6-r5c5-r6c4 gap 5
whispers-5: whispers r7c7-r8c8-r9c9 gap 5
whispers-6: whispers r7c9-r8c8-r9c7 gap 5
entropic-1: entropic r4c2-r5c1-r6c2-r5c3
entropic-2: entropic r1c8-r2c7-r3c8-r2c9
entropic-3: entropic r7c5-r8c4-r9c5-r8c6
modular-1: modular r1c5-r2c6-r3c5-r2c4
modular-2: modular r4c8-r5c9-r6c8-r5c7
modular-3: modular r7c2-r8c3-r9c2-r8c1
```

Normal sudoku rules apply.

Digits in cages cannot repeat and must sum to the number shown in the upper left corner of the cage.

Every set of three adjacent digits along a peach entropic line must contain one low (123), one middle (456), and one high (789) digit.

Every set of three adjacent digits along a teal modular line must contain digits with three different remainders when divided by 3, so one digit from (147), one digits from (258), and one digit from (369). 

Adjacent digits on green German whisper lines must differ by at least 5.
