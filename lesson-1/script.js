// Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
// градусах по Фаренгейту. Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32 , где Tf —
// температура по Фаренгейту, Tc — по Цельсию.

var temperatureCelsius = prompt('Введите температуру в градусах по Цельсию')
var temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32
alert('По Фаренгейту это будет '+temperatureFahrenheit)


// Объявить две переменные: admin и name . Записать в name строку "Василий"; 
// Скопировать значение из name в admin . Вывести admin (должно вывестись «Василий»).

var admin
var name
name = "Василий"
admin = name
alert(admin)

// Чему будет равно JS-выражение 1000 + "108"?

var a = 1000 + "108"
alert(a)