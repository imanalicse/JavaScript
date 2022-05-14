/**
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 */

 let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if (a === 2) { resolve("success p promise") }
    else { reject("failed") }
 });

p
.then(message => { console.log(message); })
.catch(error => { console.log(error); })

/** Chaining after a catch */

new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
})
.then(() => {
    throw new Error('Something failed');
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});

/** Promise.all */

const func1 = () => {
    console.log("In func1")
    return new Promise((resolve, reject) => {
        if (1) { return  resolve("func1 success"); }
        else { return reject("func1 error"); }
    });
}

const func2 = () => {
    console.log("In func2")
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (1) { return  resolve("func2 success"); }
            else { return reject("func2 error"); }
        }, 2000);
    });
}

const func3 = () => {
    console.log("In func3")
    return new Promise((resolve, reject) => {
        if (1) { return  resolve("func3 success"); }
        else { return reject("func3 error"); }
    });
}

Promise.all([func1(), func2(), func3()])
    .then(([result1, result2, result3]) => {
        console.log('result1', result1);
        console.log('result2', result2);
        console.log('result3', result3);
    });
// func3().then(res => console.log(res));