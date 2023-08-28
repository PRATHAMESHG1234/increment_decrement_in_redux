const initialState=0

const changeNumber = (state = initialState, action) =>{
    console.log(action.payload);
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload
        case "DECREMENT":
            return state -action.payload
    
        default: return state
    }
}
export default changeNumber