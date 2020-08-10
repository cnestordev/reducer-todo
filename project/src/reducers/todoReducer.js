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
        case 'TOGGLE':
            const updatedList = initialState.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item

            })
            return updatedList
        case 'CLEAR':
            const clearedList = initialState.filter(item => !item.completed)
            return clearedList

        default:
            return initialState
    }
}