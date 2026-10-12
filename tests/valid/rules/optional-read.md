





















```openrules
input x:optional<number>; primitive present<T>(p:optional<T>):boolean; primitive unwrap<T>(p:optional<T>):T requires(present(p)); term
a():boolean=present(x) implies unwrap(x)>0;
```
