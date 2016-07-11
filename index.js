import { createStore } from 'redux'
import React from 'react'
import { render as renderDom } from 'react-dom'

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

const Counter = ({value, onPlus, onMinus}) => {
  return (
    <div style={{fontSize: "100px", textAlign: 'center'}}>
      {value}
      <br/>
      <button onClick={onPlus} ><pre> + </pre></button>
      <button onClick={onMinus} ><pre> - </pre></button>
    </div>
  )
}

const store = createStore(counter, window.devToolsExtension && window.devToolsExtension()) // points to the counter fn on line 3

const updatePage = () => {
  renderDom (
    <Counter 
      value={store.getState()} 
      onPlus={() => {store.dispatch({ type: 'INCREMENT' })}} 
      onMinus={() => {store.dispatch({ type: 'DECREMENT' })}}
    />, document.getElementById('root'))
}

store.subscribe(updatePage) // run this function every time the state changes
updatePage()

// console.log(store.getState()) //grabbed the initial state = 0 declared in parameter

// store.dispatch({ type: 'INCREMENT'})

// console.log(store.getState()) // increment by 1