const week = document.getElementById('week');

document.addEventListener('DOMContentLoaded', () => {
    fetchDays()
})

function fetchDays() {
    fetch('http://localhost:3000/days')
    .then(resp => resp.json())
    .then(json => makeDays(json))
}

function makeDays(json) {
    let list = document.createElement('ul');
    json.forEach(element => {
        let li = document.createElement('li')
        let h2 = document.createElement('h2')
        h2.innerText = element.name
        li.appendChild(h2)
        list.appendChild(li)
    });
    week.appendChild(list)
}