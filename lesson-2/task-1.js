// 1. Почему код дает именно такие результаты?

var a = 1 , b = 1 , c, d;
c = ++a; alert(c);              // 2    Прибавили к а единицу получли а=2, значение присвоили с
d = b++; alert(d);              // 1    Переменной d присвоили значение b=1, потом инкременировали b (b=2)
c = ( 2 + ++a); alert(c);       // 5    Инкременировали а (а=3), далее с=2+3=5
d = ( 2 + b++); alert(d);       // 4    d=2+b=2+2=4, далее инкременировали b (b=3)
alert(a);                       // 3    Вывод а
alert(b);                       // 3    Вывод b