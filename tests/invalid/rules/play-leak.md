```openrules
primitive present<T>(x: optional<T>): boolean;
play primitive entry(c: cell): optional<digit>;
term shown(c: cell): boolean = present(entry(c));
```
