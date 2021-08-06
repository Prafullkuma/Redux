import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import congifStore from './store/congifStore'
import {Provider} from 'react-redux'
 
const store=congifStore()

console.log("Before Update",store.getState())

store.subscribe(()=>{
    console.log("After update",store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'))