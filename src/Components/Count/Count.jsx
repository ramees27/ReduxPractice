// import React from 'react'
// import {useSelector}from 'react-redux'

// const Count = () => {
//     const color=useSelector(state=>state.color.value)
//   return (
//     <div>
//         <h2 style={{color}}>Aside</h2>
//         <button onClick={}>Change color</button>
//         </div>
//   )
// }

// export default Count



// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const Counter = () => {
//   const count = useSelector(state => state.count); // Access state
//   const dispatch = useDispatch(); // Dispatch actions

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Redux Counter</h1>
//       <h2>{count}</h2>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//     </div>
//   );
// };

// export default Counter;

// import React from 'react'
// import { useSelector } from 'react-redux'

// const Count = () => {
//   const value=useSelector((state)=>{
//     return state
//   })
//  
//     <div>
//       <button>Increament</button>
//       <button>Decreament</button>
//     </div>
//   )
// }

// export default Count


// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// const Count = () => {
//   const value=useSelector((state)=>{
//     return state.value
    
//   })

// const dispatch=useDispatch();
//  return (
//    <div>
//      <label htmlFor="">{value}</label><br />
//        <button onClick={()=>{
//         dispatch({
//           type:"increament"
//         })
//        }}>Increament</button>
//         <button onClick={()=>{
//           dispatch({
//             type:"decreament"
//           })
//         }}>Decreament</button>
//     </div>
//   )
// }

// export default Count

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const Count = () => {
//     const value=useSelector((state)=>{
//       return state.value
//     })

//     const dispatch=useDispatch()
//   return (

//     <div>
//       <label >{value}</label>
//       <button onClick={()=>{
//         dispatch({
//           type:"increament"
//         })
//       }}>increament</button>
//       <button onClick={()=>{
//         dispatch({
//           type:"decremeant"
//         })
//       }}>decreament</button>
    
//     </div>
//   )
// }

// export default Count





// combine reducer

// src/reducers/counterReducer.js


// import React from "react";

// const initialState = {
//   count: 0,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// export default counterReducer;

// counterReducer.js
// const initialState = {
//   count: 0,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// export default counterReducer;


// middlewear
// const initialState = {
//   count: 0,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// export default counterReducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialStateofcount={
//   count:0,
// }
// const countSlice=createSlice({
//   name:"Counter",
//   initialState: initialStateofcount,
//   reducers:{
//     increament:(state)=>{
//       state.count+=1

//     },
//     decreament:(state)=>{
//       state.count-=1
//     },
//     addfive:(state,action)=>{
//       state.count+=action.payload

//     }
//   }
// })
// export const{increament,decreament,addfive}=countSlice.actions
// export default countSlice.reducer


