/*
/!*
async function getDetail(country){
    const res = await fetch('https://restcountries.com/v2/name/bharat');
    console.log(res);
}

getDetail("bharat");*!/

/!*
async function add(a, b){
    return a + b;
}

console.log("1")
add(10, 20).then(console.log);
console.log("2")*!/

const tick = Date.now();
const log = (x) => console.log(`${x} \n \t Elapsed: ${(Date.now() - tick) / 1000}`);

/!*function codeBlocker(){
/!*    return new Promise(function (resolve, reject){
        let i = 0;
        while(i < 1_000_000_000){i++;}
        resolve("Code Blocker");
    });*!/
    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000){i++;}
        return "Code Blocker";
    });
}*!/

const getFruit = async () => {
    return "Apple";
};


log("1");
// codeBlocker().then(log);
getFruit().then(res => {
    let i = 0;
    while (i < 1_000_000_000) {
        i++;
    }
    log(res)
});
log("2");

try {
    let x = 1;
    const y = 2;
    y = x;
} catch (error) {
    console.error(error.message);
}

console.log("Still running");
*/

/*const tick = Date.now();
const log = (x) => console.log(`${x} \n \t Elapsed: ${(Date.now() - tick) / 1000}`);

async function add(a, b) {
    return a + b;
}

log(1);
add(10, 2).then(log);
log(2)*/
;


const tick = Date.now();
const log = (x) => console.log(`${x} \n \t Elapsed: ${(Date.now() - tick) / 1000}`);

function getJson(url, errorMsg = "Something Went Wrong") {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`${errorMsg} (${response.status})`);
        }
        return response.json();
    });
}

const get3Country = async function (c1, c2, c3) {
    try {
        const a = getJson(`https://restcountries.com/v2/name/${c1}`);
        const b = getJson(`https://restcountries.com/v2/name/${c2}`);
        const c = getJson(`https://restcountries.com/v2/name/${c3}`);
        const pro = Promise.race([b, c, a]);
        console.log(pro);
    } catch (error) {
        console.log(error);
    }
}


log("First");
get3Country("bharat", "usa", "china");
log("Last");


(async function () {
    const something = await Promise.any([
        Promise.reject("Success"),
        Promise.reject("Bigger Success"),
        Promise.resolve("Opps."),
    ])
    console.log(something);
})();