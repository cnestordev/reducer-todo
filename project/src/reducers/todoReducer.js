import { v4 as uuid } from 'uuid'

export const initialState = [{
    item: 'First Todo Item',
    completed: false,
    id: uuid()
}]

export function todoReducer(initialState, action) {
    switch (action.type) {
        case 'ADD':
            const newItem = {
                item: action.payload,
                completed: false,
                id: uuid()
            }
            const newTodo = [...initialState, newItem]
            return newTodo
        default:
            return initialState
    }
}