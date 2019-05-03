// 5. * Нарисовать пирамиду с 20 рядами с помощью console.log , как показано на рисунке:
// x
// xx
// xxx
// xxxx
// xxxxx


for (var i = 0; i < 20; i++) {
    var string = '';
    for (j=0; j < i + 1; j++) {
        string = string + 'x';
    }
    console.log(string);
}