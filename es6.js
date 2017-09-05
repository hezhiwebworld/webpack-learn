class foo {
    constructor() {
        console.log(new.target)
        return new.target;
    }
};

class bar extends foo {
    constructor() {
        super();
    }
};

var result =  new foo()
console.log("==============" + result)
console.log(111111111111111111)


let it  = 10
console.log(10)