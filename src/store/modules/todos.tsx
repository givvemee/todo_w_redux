// 필요한 것 - 리스트 추가, 리스트 제거, 리스트 토글, 리스트 입력

// 액션 생성
const ADDONE = 'todos/ADDONE' as const;
const REMOVE = 'todos/REMOVE' as const;
const TOGGLE = 'todos/TOGGLE' as const;
const INPUTS = 'todos/INPUTS' as const;

// 액션 함수 내보내기
export const addone = (text: string ) => ({type: ADDONE, text})
export const remove = (id : number ) => ({type: REMOVE, id: id})
export const toggle = (id : number ) => ({type: TOGGLE, id})
export const inputs = (text: string) => ({type: INPUTS, text})

// 초깃값 설정
let no = 4;
const initialState: CounterState = {
    text: '',
    todos: 
    [
        {id: 1, text: 'study react', isChecked: false},
        {id: 2, text: 'study redux', isChecked: true},
        {id: 3, text: 'study typescript', isChecked: false}
    ]
}
type CounterAction = 
    | ReturnType<typeof addone>
    | ReturnType<typeof remove>
    | ReturnType<typeof toggle>
    | ReturnType<typeof inputs>;

export interface CounterState {
    text: string,
    todos: {id: number, text: string, isChecked: boolean}[]
}
// 리듀서 생성
const reducer = (state : CounterState = initialState, action: CounterAction) : CounterState => {
    switch (action.type) {
        case ADDONE: 
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: no++,
                        text: action.text,
                        isChecked: false
                    }
                ]
            }
        case REMOVE: 
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE: 
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? {
                    ...todo,
                    isChecked: !todo.isChecked
                } : todo)
            }
        case INPUTS: 
            return {
                ...state,
                text: action.text
            }
        default:
            return state;
    }
}

export default reducer;