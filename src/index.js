const subscribeWidget = document.querySelector('.subscribe');
console.log(subscribeWidget)
const subscribeForm = document.querySelector('[data-id=subscribe-form]');
const neme = document.querySelector('[data-id=name]');
const lastName = document.querySelector('[data-id=phone]');
let ul = document.createElement('ul');
document.body.append(ul);


const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:7070/sub');
xhr.send();
xhr.onload = () => {
    let responseObj = xhr.response;
    JSON.parse(responseObj).map(item => {
        let li = document.createElement('li')
        li.textContent = item.name + " " + item.lastName
        ul.append(li)
    })
}

subscribeForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const params = new URLSearchParams();

    Array.from(subscribeForm.elements)
        .filter(({ name }) => name)
        .forEach(({ name, value }) => params.append(name, value));
    let li = document.createElement('li')
    li.textContent = subscribeForm.elements.name.value + " " + subscribeForm.elements.lastName.value
    ul.append(li)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:7070');
    xhr.send(params);
    
});
