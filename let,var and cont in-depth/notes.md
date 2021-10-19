(1) "let" is used for declaring variabe, If the variable id defined, same variable cannot be reassign with "let". By default value for "let" is "undefined".
(2) Temprary Dead Zone: You can't access the varable before their decalration.
(3) CONST:" const" is also same as "let" but you can't reassign and redeclared them.
BLOCK:
(4) In every block the "let" and "const" will be different.
(5) If "let" is defined and we are printing that value inside nested block then let variable access taht varible and use that but if in nested block "let" is declared and not initialized then it will throw an error.
(6) SHADOWING: When same type of variable is defined outside the nested block and inside too then parser hode the outside on vsriable and give the priority for local-one, that's called shadoing.