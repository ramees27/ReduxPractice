// import React from 'react'
// import { connect } from 'react-redux'
// import {createSlice} from '@reduxjs/toolkit'
 

// export const ColorSlice = createSlice({
//     name:"color",
//     initialState:{
//       value:"blue"
//     },
//     reducers:{
//       change_color:(state,action)=>{
//         state.value=action.payload.color
//       }
//     }
// }) 



// export const {change_color}=ColorSlice.actions

// export default ColorSlice.reducer


// import React from 'react'

// const ColorSlice = () => {
//   return (
//     <div></div>
//   )
// }

// export default ColorSlice


// comibe example


// const initialState = {
//   color: 'blue',
// };

// const themeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'CHANGE_COLOR':
//       return { ...state, color: action.payload };
//     default:
//       return state;
//   }
// };

// export default themeReducer;


// import { createSlice} from '@reduxjs/toolkit'

//  const initialState={
//     color:"white",
//  }

//  const ColorSlice=createSlice({
//     name:"changecolor",
//     initialState,
//     reducers:{
//         blue:(state)=>{
//             state.color="blue"
//         },
//         red:(state)=>{
//             state.color="red"
//         },
//         yellow:(state)=>{
//             state.color="yellow"
//         }

        
//     }
//  })
//  export const{blue,yellow,red}=ColorSlice.actions
//  export default ColorSlice.reducer


// changecolor with one button

import {createSlice} from "@reduxjs/toolkit"


const initialState={
    color:"red",
    colors:["yellow","green","blue"],
    currentIndex:0
}
 const changeColor=createSlice({
    name:"oneButton",
    initialState,
    reducers:{
        colorChange:(state)=>{
            state.currentIndex=(state.currentIndex+=1)%state.colors.length
            state.color=state.colors[state.currentIndex]
        }
    }
 })
 export const {colorChange}=changeColor.actions
 export default changeColor.reducer