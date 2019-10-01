import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Home from './Components/Home/Home'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
    </Switch>
)