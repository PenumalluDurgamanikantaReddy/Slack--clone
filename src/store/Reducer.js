


export const initialState = {user:null}

export const actionTypes = {SET__USER:"SET__USER    "}

const reducer=(state,action)=>{

switch(action.type){
case actionTypes.SET__USER:
    return{
      ...state,
        user:action.user
    }
        default:
   return state
}
}

export default reducer;