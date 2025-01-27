import { useState } from 'react'

import './App.css'
import Header from './components/HeaderComponent'
import Content from './components/ContentComponent'
import Footer from './components/FooterComponent'
import User from './components/User'

function App() {
    const users = ['Danya', 'Sveta', 'Vika']
//     const [count]
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
            {
                <div className='container min_width_container'>
                    Это тело
                    </div>
            }
    <Footer/>
    </>
  )
}

export default App
