import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemLists from './ItemLists';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    //const store=useSelector((store)=>store);   const cartItems=store.cart.items; -----huge performace loss{subscribing to whole store but we just have to use one slice of the store}
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
  return (
    <div className='text-center m-2 p-4  '>
        
      <h1 className='font-bold text-3xl '>Cart</h1>
      
    
    <div className='w-6/12 m-auto'>
        
        <ItemLists items={cartItems}/>
        
        </div>
        {cartItems.length===0?<h1 className='m-16 text-4xl '>Your cart is empty!!!!!! Add some items...</h1>:
        <button  className='bg-black text-white m-2 p-1 rounded-md  float-none' onClick={handleClearCart}>Clear Cart</button>}
        </div>
  )
} 

export default Cart
