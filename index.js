function receivesAFunction(cb) {
    return cb();
}
receivesAFunction("I love my Ganes table statue");


function returnsANamedFunction(test) {
    return function insider() {
        console.log("blah bleeh bloop");
    }
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log("testing123");
    }
}