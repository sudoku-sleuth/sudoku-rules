---
format: open-rules
title: Modulate the Thermostat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z455w311pe
case: https://sudoku-sleuth.com/cases/modulate-the-thermostat
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
modular-1: modular r5c1-r4c2-r3c2
modular-2: modular r6c2-r5c3-r4c3-r3c3-r2c3
modular-3: modular r6c2-r7c1-r8c1-r9c1
modular-4: modular r9c3-r8c2-r7c2
modular-5: modular r5c5-r6c4-r7c4-r8c4-r9c4
modular-6: modular r5c5-r6c6
modular-7: modular r5c5-r4c4-r3c4-r2c4
modular-8: modular r5c5-r4c6-r3c6-r2c6-r1c6
modular-9: modular r4c8-r5c9-r6c9-r7c9-r8c9
modular-10: modular r8c8-r7c8-r6c8
modular-11: modular r9c6-r8c7-r7c7-r6c7
modular-12: modular r4c8-r3c7-r2c7-r1c7
modular-13: modular r3c9-r2c8-r1c8
thermo-1: thermo r5c1-r4c2-r3c2
thermo-2: thermo r6c2-r5c3-r4c3-r3c3-r2c3
thermo-3: thermo r6c2-r7c1-r8c1-r9c1
thermo-4: thermo r9c3-r8c2-r7c2
thermo-5: thermo r5c5-r6c4-r7c4-r8c4-r9c4
thermo-6: thermo r5c5-r6c6
thermo-7: thermo r5c5-r4c4-r3c4-r2c4
thermo-8: thermo r5c5-r4c6-r3c6-r2c6-r1c6
thermo-9: thermo r4c8-r5c9-r6c9-r7c9-r8c9
thermo-10: thermo r8c8-r7c8-r6c8
thermo-11: thermo r9c6-r8c7-r7c7-r6c7
thermo-12: thermo r4c8-r3c7-r2c7-r1c7
thermo-13: thermo r3c9-r2c8-r1c8
```

- Normal Sudoku rules apply.
- Along Thermos digits must strictly increase from the bulb to the tip.
- Any set of three sequential cells along a teal Modular Line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits may repeat on a line if allowed by other rules.
- Each thermometer is also a modular line running from bulb to tip. Thermometers extending from the same bulb are distinct modular lines; that is, modular lines do not necessarily cross over bulbs from one thermometer to the next.
