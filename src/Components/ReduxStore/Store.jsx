
// import{configureStore} from '@reduxjs/toolkit'
// import colorReducer from './Color/ColorSlice'

// export default configureStore({
//     reducer:{
//         color:colorReducer
//     }
// })




// import { createStore } from 'redux';

// // Initial state
// const initialState = {
//   count: 0,
// };

// // Reducer function
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     case 'RESET':
//       return { ...state, count: 0 };
//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(counterReducer);

// export default store;

// import { createStore } from 'redux';

// const initialState={
//   value:0
// }

// reducer function
// function appreducer(prev=initialState,action){
//                                                 //  previous statil onum illenkil initial state edkkum,first kodkunna state
//   switch(action.type){
//     case "increament":
//       return{
//         ...prev,
//         value:prev.value+1
//       }
//       case "decreament":
//       return{
//         ...prev,
//         value:prev.value-1
//       }
//       default:
//         return prev
//   }

// }

// const store=createStore(appreducer)
// export default store;



// import React from 'react'
// import {createStore} from 'redux'

// const initialState={
//   value:0
  
// }
// function appreducer(prev=initialState,action){
//   switch(action.type){
//     case"increament":
//       return {
//         ...prev,
//         value:prev.value+1
//       }
//       case"decremeant":
//       return {
//         ...prev,
//         value:prev.value-1
//       }
//       default:
//        return prev
//    }
// }
// const store= createStore(appreducer)
// export default store





// combine reducer

// src/store.js
// import { combineReducers, createStore } from 'redux';
// import counterReducer from '../Count/Count';
// import themeReducer from '../Color/ColorSlice';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   theme: themeReducer,
// });

// const store = createStore(rootReducer);

// export default store;




// middlewear

// import { createStore, applyMiddleware } from 'redux';
// import counterReducer from '../Count/Count';
// import loggerMiddleware from '../Midleware/Customemiddlewear';

// const store = createStore(counterReducer, applyMiddleware(loggerMiddleware));

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from '../Count/Count'

// const store=configureStore({
//     reducer:{
//         counter:counterSlice,
//     },
// })
// export default store

// import { configureStore } from "@reduxjs/toolkit";
// import ColorSlice from '../Color/ColorSlice'

// const store=configureStore({
//     reducer:{
//     changeColor:ColorSlice
// }
// })
// export default store

import { configureStore } from "@reduxjs/toolkit";
import changeColor  from '../Color/ColorSlice'
const store=configureStore({
    reducer:{
      newClr:changeColor
    }
})
export default store