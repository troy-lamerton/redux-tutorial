var test = require('tape')
var expect = require('expect')
var deepFreeze = require('deep-freeze')

const toggleTodo = (todo) => {
    return 1
}

const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    }
    const todoAfter = {
        id: 1,
        text: 'Learn Redux',
        completed: true
    }

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter)
}


testToggleTodo()
console.log('All tests pass')