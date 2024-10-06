import { useState } from 'react'
import UserList from './components/UserList'
import AxiosUserList from './components/AxiosUserList'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import AxiosUserDetail from './components/AxiosUserDetail'
import AxiosProduct from './components/AxiosProductList'
import AxiosProductDetail from './components/AxiosProductDetail'

function App() {
  const [users, setUsers] = useState(["Jake", "Sally", "Sarah"])


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<UserList users={users} />} />
        <Route path='/axios-users' element={<AxiosUserList />} />
        <Route path='/axios-users/:id' element={<AxiosUserDetail/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/products' element={<AxiosProduct/>} />
        <Route path='/products/:id' element={<AxiosProduct/>} />
        <Route path='*' element={<NotFound/>} />
        
      </Routes>
    </>
  )
}



export default App
