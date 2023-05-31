// script.js

const order1 = document.querySelector('[data-key="order1"]')
const biscuits1 = document.querySelector('[data-biscuits="10"]')
const donuts1 = document.querySelector('[data-donuts="13"]')
const pancakes1 = document.querySelector('[data-pancakes="0"]')
const status1 = document.querySelector('[status]')

const order2 = document.querySelector('[data-key="order2"]')
const biscuits2 = document.querySelector('[data-biscuits="5"]')
const donuts2 = document.querySelector('[data-donuts="0"]')
const pancakes2 = document.querySelector('[data-pancakes="2"]')
const status2 = document.querySelector('[status]')

const order3 = document.querySelector('[data-key="order3]')
const biscuits3 = document.querySelector('[data-biscuits="12"]')
const donuts3 = document.querySelector('[data-donuts="11"]')
const pancakes3 = document.querySelector('[data-pancakes="15"]')
const status3 = document.querySelector('[status]')

biscuits1 = order1.biscuits,
donuts1 = order1.donuts,
pancakes1 = order1.pancakes,
status1 = order1.status ? Delivered : Pending

biscuits2= order2.biscuits,
donuts2 = order2.donuts,
pancakes2 = order2.pancakes,
status2 = order2.status ? Delivered : Pending

biscuits3 = order3.biscuits,
donuts3 = order3.donuts,
pancakes3 = order3.pancakes,
status3 = order3.status ? Delivered : Pending
