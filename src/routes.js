import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Home from './Components/Home/Home'
import Admin from './Components/Auth/Admin'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/admin' component={Admin}/>
    </Switch>
)