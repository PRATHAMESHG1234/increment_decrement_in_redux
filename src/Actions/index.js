export const incNumber = (num) =>{
    return {
        type:"INCREMENT",
        payload:num
    }
} 
export const DecNumber = (num) =>{
    return {
        type:"DECREMENT",
        payload:num
    }
} 