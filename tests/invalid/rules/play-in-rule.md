---
name: Play in rule
kind: play-in-rule
url: https://fixtures.example/play-in-rule.md
parameters:
  line:
    type: set<cell>
    description: The marked cells.
    default: Required.
---
Class: **first-order**.
```text
∀c∈line: placed(c)
```
