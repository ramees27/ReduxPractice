// src/components/Counter.js
// src/components/Counter.js


// combine reducers
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const Counter = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;




// middlewear
// reducers/counterReducer.js
// components/Counter.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const Counter = () => {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addfive, decreament, increament } from './Count'

// const Counter = () => {
//   const dispatch=useDispatch()
//   const num=useSelector((state)=>state.counter.count)
//   return (
//     <div><p>{num}</p>
//     <button onClick={()=>dispatch(increament())}>Increament</button>
//     <button onClick={()=>dispatch(decreament())}>Increament</button>
//     <button onClick={()=>dispatch(addfive(5))}>Add 5</button>
    
//     </div>
//   )
// }

// export default Counter





