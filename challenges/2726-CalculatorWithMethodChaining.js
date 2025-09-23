class Calculator {
    constructor(value) {
        this.value = value;
    }
    
    add(value){
        this.value += value;
        return this;
    }
    
    subtract(value){
        this.value -= value;
        return this;
    }
    
    multiply(value) {
        this.value *= value;
        return this;
    }
    
    divide(value) {
        this.value /= value;
        return this;
    }
    
    power(value) {
        this.value **= value;
        return this;
    }
    
    getResult() {
        return this.value;
    }
}
