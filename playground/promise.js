var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }else{
                reject('Not a number');
            }
        }, 2000);
    });
} 

asyncAdd(2,4).then((res) => {
    return asyncAdd(res, 3);
}).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});

// var somePromise = new Promise((accept, deny) => {
//     setTimeout(() => {
//         deny({result: 'Fehmi'});
//     }, 2000);
// });

// somePromise.then((acceptMsg) => {
//     console.log(acceptMsg.result);
// }, (denyMsg) => {
//     console.log(denyMsg.result);
// });