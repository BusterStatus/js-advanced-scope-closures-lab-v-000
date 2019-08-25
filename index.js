function produceDrivingRange(value) {
    return function(block1, block2) {
        let number1 = parseInt(block1, 10);
        let number2 = parseInt(block2, 10);
        let difference = number2 - number1;
        if (difference > value) {
            return (difference - value) + " blocks out of range";
        }
        else
            return "within range by " + (value - difference);
    }
}

function produceTipCalculator(value) {
    return function(fare) {
        return value * fare;
    }
}

function createDriver() {
    let DriverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    }
}