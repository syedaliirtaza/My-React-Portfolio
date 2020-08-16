import React from 'react';
import ReactDom from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import './index.css';
import Jokes from './components/Jokes';


const history = createBrowserHistory();
ReactDom.render(
<Router history={history}>  
    <Switch>
        <Route exact path='/' component={App}></Route>
        <Route path='/jokes' component={Jokes}></Route>
    </Switch>
</Router>, document.getElementById('root')
);


// promise exp 

// new Promise(( resolve, reject) => {

//     return reject(new Error('no bear'));
//     setTimeout(() => {
//         // console.log('bares');
//         resolve('bares, beets, battlestar Galatica');
//     }, 2000);
// })
// .then((quote)=> {
//     console.log(quote);
// })
// .catch(error => console.log('error occured'));


