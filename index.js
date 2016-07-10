import { createStore } from 'redux'
import React from 'react'
import { render } from 'react-dom'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}



const store = createStore(counter) // points to the counter fn on line 3


const show = () => {
    render(<Counter value={store.getState()}/>, document.getElementById('root'))
}

store.subscribe(show)

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
})

// console.log(store.getState()) //grabbed the initial state = 0 declared in parameter

// store.dispatch({ type: 'INCREMENT'})

// console.log(store.getState()) // increment by 1