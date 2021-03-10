const ADD = 'ADD'
const CHANGE_INPUT = 'CHANGE-INPUT'
const CHANGE_CHECK = 'CHANGE-CHECK'
const REMOVE = 'REMOVE'

let defaultState = {
    list: [
        {id: 1, completed: true, name: 'Купить хлеб'},
        {id: 2, completed: false, name: 'Выучить react'},
        {id: 3, completed: false, name: 'помыть посуду'},
        {id: 4, completed: true, name: 'забрать ребенка из сада'},
    ],
    inputValue: ''
}


const reducerList = (state = defaultState, action) => {
    switch (action.type){
        case ADD:{
            let newItem = {
                id:state.list.length + 1,
                completed: false,
                name: action.value
            }
            let stateCopy = {...state}
            stateCopy.list = [...state.list]
            stateCopy.list.push(newItem)
            stateCopy.inputValue = ''
            
            return stateCopy
        }
        case CHANGE_INPUT: {
            let stateCopy = {...state}
            stateCopy.inputValue = action.value
            return stateCopy
        }

        case REMOVE: {
            let stateCopy = {...state}
            stateCopy.list = [...state.list]

            stateCopy.list = stateCopy.list.filter(item => item.id !== action.id)
            return stateCopy
        }
        case CHANGE_CHECK: {
            
            let stateCopy = {...state}
            
            stateCopy.list = [...state.list]
            
            stateCopy.list = stateCopy.list.map(item => {
               
                if (item.id === action.id){
                    item.completed = action.checked
                    return item
                }
                return item
            })
            
            return stateCopy
        }

        default:
            return state
    }

}

export const addListItemCA = (value) =>{
    return {
        type: ADD,
        value
    }
}

export const changeInputCA = (value) =>{
    return {
        type: CHANGE_INPUT,
        value
    }
}

export const changeCheckCA = (id, checked) =>{
    return {
        type: CHANGE_CHECK,
        id,
        checked
    }
}

export const removeItemCA = (id) => {
    return {
        type: REMOVE,
        id
    }
} 



export default reducerList