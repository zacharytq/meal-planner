const week = document.getElementById('week');
const mealDiv = document.getElementById('form');
const newMealForm = document.getElementById('new-meal-form');
const addMealButton = document.getElementById('show-meal-form');
let days = [];
const mealTimes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

document.addEventListener('DOMContentLoaded', () => {
    fetchDays()
    showForm()
})

function showForm(){
    addMealButton.addEventListener('click', () => {
        newMealForm.style.display = 'block'
        addMealButton.style.display = 'none'
    })
}

function makeForm() {
    let select = document.getElementById('day-select');
    let selectMealTime = document.getElementById('meal-time-select');

    days.forEach(day => {
        let dayOption = new Option(day.name, day.day_id);
        select.add(dayOption)
    })

    mealTimes.forEach(mealTime => {
        let mealOption = new Option(mealTime, mealTime);
        selectMealTime.add(mealOption)
    })

    
}

function hideForm(){
    newMealForm.style.display = 'none'
    addMealButton.style.display = 'block'
}

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
        days.push(day)
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
    makeForm()
}

class Day {
    constructor(info) {
        this.name = info.name
        this._meals = info.meals.map(meal => new Meal(meal))
        this.day_id = info.id
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
        if (this.meal_time == 'Breakfast') {
            return 4;
        } else if (this.meal_time == 'Lunch') {
            return 3;
        } else if (this.meal_time == 'Dinner') {
            return 2;
        } else {
            return 0;
        }
    }
}