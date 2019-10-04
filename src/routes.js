import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Home from './Components/Home/Home'
import Admin from './Components/Auth/Admin'
import About from './Components/Home/About'
import Kaitlyn from './Components/Kaitlyn/Kaitlyn'
import Kelsey from './Components/Kelsey/Kelsey'
import Contact from './Components/Contact/Contact'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/about' component={About}/>
        <Route path='/kaitlyn-harris-photo' component={Kaitlyn}/>
        <Route path='/k-riddle-films' component={Kelsey}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)