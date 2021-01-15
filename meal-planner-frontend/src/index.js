const week = document.getElementById('week');

document.addEventListener('DOMContentLoaded', () => {
    fetchDays()
})

function fetchDays() {
    fetch('http://localhost:3000/days')
    .then(resp => resp.json())
    /*.then(json => console.log(json))*/
    .then(json => makeDays(json))
}

function fetchMeals() {
    fetch('http://localhost:3000/meals')
    .then(resp => resp.json())
    .then(json => console.log(json))
}

function makeDays(json) {
    let list = document.createElement('ul');
    json.forEach(element => {
        let day = new Day(element)
        let mealList = document.createElement('ul')
        let li = document.createElement('li')
        let h2 = document.createElement('h2')
        h2.innerText = day.name
        li.appendChild(h2)
        list.appendChild(li)

        day.meals.forEach(meal => {
            let liMeal = document.createElement('li')
            liMeal.innerText = `${meal.meal_time}: ${meal.name}`
            mealList.appendChild(liMeal)
        })

        li.appendChild(mealList)
    });
    week.appendChild(list)
}

class Day {
    constructor(info) {
        this.name = info.name
        this._meals = info.meals.map(meal => new Meal(meal))
    }

    get meals() {
        return this._meals.sort((a, b) => a.mealNum - b.mealNum)
    }
}

class Meal {
    constructor(info) {
        this.name = info.name
        this.meal_time = info.meal_time
    }

    get mealNum() {
        if (this.meal_time == 'breakfast') {
            return 4;
        } else if (this.meal_time == 'lunch') {
            return 3;
        } else if (this.meal_time == 'dinner') {
            return 2;
        } else {
            return 0;
        }
    }
}