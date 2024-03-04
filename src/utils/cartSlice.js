import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        addItem:(state,action)=>{state.items.push(action.payload)}, //mutating the state over here
/* in vanilla redux mutating state was prohibited and returning was mandatory
   const newstate=[...state]
   newstate.item.push(action.payload);
   return newstate;

   in RTK "immer" library BTS does takes care of the state mutation in a conviennent way and does the same thing behind the scene 
   the older way of  mutating the state (orginal state-newstate=current state)
*/
        removeItem:(state)=>{state.items.pop()},
        clearCart:(state)=>{
            /*console.log(state) ----returns proxy object
            console.log(current(state))-----returns value present in state
            state=[]----it will change the local state variable  but not the actual state
            console.log(state)
            console.log(current(state))
            RTK says either mutate the existing state or return a new state (state.items.length=0 or return {items:[]} )*/
        
            state.items.length=0; //return {items:[]} 
        }   //We can't use state=[] or state=["abc"] in place of state.items.length=0 or use return {items:[]}
        //in this we are not mutating the state we are just adding a reference
    

    }
})
export default cartSlice.reducer;
export const{addItem,removeItem,clearCart}=cartSlice.actions;