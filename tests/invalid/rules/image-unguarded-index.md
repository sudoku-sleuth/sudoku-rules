---
name: Grammar fixture
kind: grammar-fixture
url: https://fixtures.example/grammar-fixture.md
parameters:
  line:
    type: path<cell>
---
Class: **with aggregates**.
```text
|⟨line[i]:i∈[0,|line|+1)⟩|=2
```
