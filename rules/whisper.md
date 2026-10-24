---
name: Whisper
url: https://rules.sudoku-sleuth.com/whisper.md
kind: whisper
alias_of: whispers
---

# Whisper

Whisper uses the parameters and meaning of [Whispers](whispers.md).

## Example

````markdown
---
format: open-rules
title: Whisper example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whisper r1c1-r1c2 gap 5
```
````

Satisfies the rule: r1c1=1, r1c2=6. 1 and 6 differ by 5.

Breaks the rule: r1c1=1, r1c2=5. 1 and 5 differ by only 4.
