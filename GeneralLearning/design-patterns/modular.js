var modularFunc = (function () {
    function privateFunc(a) {
        console.log("privateFunc and argument value=", a)
        anotherPrivateFunc();
    }
    function anotherPrivateFunc() {
       console.log('anotherPrivateFunc called')
    }
    return {
        publicFunc: function (a) {
            return privateFunc(a);
        }
    }
})();

modularFunc.publicFunc('Hello world');
