let form = document.querySelector('form'),
    inputs = form.querySelectorAll('input'),
    userName = form.querySelector('.userName'),
    userLastName = form.querySelector('.userLastName'),
    userAge = form.querySelector('.userAge'),
    select = form.querySelector('select');
let output = document.querySelector('.output-tbody');
let selVal = select.value;
select.addEventListener('change', (e) => {
    selVal = e.target.value
})
let object = [
    { id: 1, userName: 'Samandar', lastName: 'Usmanov', age: 17, hobby: 'Java Script' }
]
let list;

if (localStorage.getItem("data")) {
    list =  JSON.parse(localStorage.getItem("data"));
} else {
    list = [];
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '') {
        alert('Ma\'lumotlarni kiriting !!')
    } else {
        let newObj = {
            id: list.length + 1,
            userName: userName.value,
            lastName: userLastName.value,
            age: userAge.value,
            hobby: selVal
        };
        list.push(newObj)
        render(list);

        localStorage.setItem("data", JSON.stringify(list));
        inputs.forEach(i => i.value = '')
    }

})

function render(arr) {

    output.innerHTML = '';
    arr.map((item) => {
        let th = `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.userName}</td>
            <td>${item.lastName}</td>
            <td>${item.age}</td>
            <td>${item.hobby}</td>
        </tr>`;
        output.innerHTML += th;
    })
}

render(list);
