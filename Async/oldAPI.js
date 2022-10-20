/**
 * AJAX
 * @type {XMLHttpRequest}
 */
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/bharat');
request.send();
// request.send(data)
// request.setRequestHeader(a, b);
request.addEventListener('load',
    function () {
        // Response Arrived
        console.log(JSON.parse(this.responseText)[0]);
    });
