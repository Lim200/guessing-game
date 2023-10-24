class GuessingGame {
    constructor() { // начальные значения минимума и максимума
        this.min = null;
        this.max = null;
    }

    setRange(min, max) { // Заданный диапазон чисел
        this.min = min;
        this.max = max;
    }

    guess() {
        // return Math.floor((this.min + this.max) / 2);
        return Math.ceil((this.min + this.max) / 2);  // среднее значение текущего диапазона
    }

    lower() {
        this.max = this.guess();  // уменьшаем максимальное значение
    }

    greater() {
        this.min = this.guess();  //увеличиваем минимальное значение
    }
}


module.exports = GuessingGame;
