import React from 'react';
import './assets/css/bootstrap.css';
import './assets/css/global.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import I from "./pages/I";
import II from './pages/II';
import III from './pages/III';
import End from './pages/End';
import IV from "./pages/IV";
import V from './pages/V';
import VI from './pages/VI';
import VII from './pages/VII';

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/I" exact component={I} />
            <Route path="/II" exact component={II} />
            <Route path="/III" exact component={III} />
            <Route path="/End" exact component={End} />
            <Route path="/IV" exact component={IV} />
            <Route path="/V" exact component={V} />
            <Route path="/VI" exact component={VI} />
            <Route path="/VII" exact component={VII} />
        </Switch>
    </BrowserRouter>
    );
};

export default App;
