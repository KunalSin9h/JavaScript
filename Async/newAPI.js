/*
function getJson(url, errorMsg = "Something Went Wrong") {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`${errorMsg} (${response.status})`);
        }
        return response.json();
    });
}
console.time("Fetch API");
const country = "bharat";
getJson(`https://restcountries.com/v2/name/${country}`, "Country Not Found")
    .then(response => {console.log(response);console.timeEnd("Fetch API")}, error => console.log(error));*/


/*
console.time("a");
console.log("Test Start");
setTimeout(() => {
    console.log("0 sec");
    console.timeEnd("a");
}, 0);
Promise.resolve("Promise 1").then(res => console.log(res));
Promise.resolve("Promise 2").then(res => console.log(res));
Promise.resolve("Promise 3").then(res => console.log(res));
Promise.resolve("Promise 4").then(res => console.log(res));
Promise.resolve("Promise 5").then(res => console.log(res));
Promise.resolve("Promise 6").then(res => console.log(res));
Promise.resolve("Promise 7").then(res => {
    for(let i =0; i < 1000000000; i++){}
    console.log(res)
});
let i = 0;
while(i < 1000000000) {i++}
console.log("Test End");
*/

/* Building Promise */

const pro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve("You have won the lottery");
        } else {
            reject(new Error("You have lost the lottery"));
        }
    }, 2000);
});

pro.then(res => console.log(res))
    .catch(err => console.log(err));

function wait (sec) {
    return new Promise(function(resolve){
        setTimeout(resolve, sec * 1000);
    });
}

console.log("1");
wait(3).then(() => console.log("2"));
console.log("3");

const a = Promise.resolve("Resolved");
console.log(a);
