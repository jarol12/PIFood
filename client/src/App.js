
import{Switch, Route, BrowserRouter} from 'react-router-dom'
import LogoInicial from './components/views/logoInicial/LogoInicial'
import HomePage from './components/views/HomePage/homePage'
import Details from './components/views/Detail/details'
import AddRecipe from './components/views/AddRecipe/addRecipe'
import NavBar from './components/views/NavBar/navBar'
import './components/main.scss'
const App = () => {
  return (
    <div>
    <BrowserRouter>
     < Route path='/food' render={() =><NavBar/>}/>
     < Route path='/addRecipes' render={() =><NavBar/>}/>
    <Switch>
       <Route path='/' render={ () => < LogoInicial/>} exact/>
       <Route path='/food' render={ () => < HomePage/>} exact/>
       <Route path='/food/:id' render={ () => <Details/>} exact/>
       <Route path='/addRecipes' render={ () => <AddRecipe/>} exact/>
    </Switch>
    </BrowserRouter>
    </div>
    
  )
}

export default App

