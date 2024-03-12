
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Usercontextprovider from './context/UserConteextProvider'

function App() {
  
  return (
    <Usercontextprovider>
      <h1>Context Api</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
