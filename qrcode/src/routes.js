import React from "react";

import {BrowserRouter as Router ,Switch ,Route, Link } from 'react-router-dom';

import Qrcodeho from './Qrcodeho';

function Rotas() {
    return (        
        <Router>
            <div className='App'>                
                <Link to='/'></Link>                
            </div>
            <Switch>                
                <Route exact path="/" component={Qrcodeho}/>
                
            </Switch>

        </Router>
    )
}

export default Rotas;
