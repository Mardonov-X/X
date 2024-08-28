import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './style.css'
import Left from './Components/Left'
import Right from './Components/Right'


function App() {
  // const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Left />} >
        
    //     <Route path="/" element={<Right />} />
    //     </Route>

        
    //   </Routes>
    // </BrowserRouter>
    <main>
      <Left/>
      <Right/>

</main>
  )
}

export default App
