const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (url, method, data) => {
    method = method ? method : "GET";
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
        if (!response.ok) {
            return response.json().then(errResData => {
                const error = new Error('Something went wrong');
                error.data = errResData;
                throw error;
            });
        }
        return response.json();
    })
}

const getData = () => {
     sendHttpRequest('https://reqres.in/api/users')
     .then(responseData => {
        console.log(responseData);
     })
};

const postData = () => {
    sendHttpRequest('https://reqres.in/api/register', 'POST', {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    })
    .then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    })
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);