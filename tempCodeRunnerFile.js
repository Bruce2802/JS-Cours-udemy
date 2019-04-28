var money = prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');
    var finans1 = prompt('Введите обязательную статью расходов в этом месяце', '')
    var houMuch1 = prompt('Во сколько обойдется?', '');
    var finans2 = prompt('Введите обязательную статью расходов в этом месяце', '')
    var houMuch2 = prompt('Во сколько обойдется?', '');
var appData = {
    бюджет: money,
    timeData: time,
    xpenses: {
        finans1: houMuch1,
        finans2: houMuch2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
alert (+money/30);