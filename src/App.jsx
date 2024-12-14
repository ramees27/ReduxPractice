import './App.css'
import ColoUi from './Components/Color/ColoUi'
// import Color from './Components/Color/ColorSlice'
// import Count from './Components/Count/Count'
import Store from './Components/ReduxStore/Store'
// import Store from './Components/ReduxStore/Store.jsx'
import {Provider} from 'react-redux'
// import Theme from './Components/Color/ColoUi'
// import Counter from './Components/Count/CountUi'

function App() {
  

  return (
    <Provider store={Store}>
    <ColoUi/>
    {/* <Counter/> */}
    {/* <Theme/> */}
    </Provider>
  )
}

export default App
