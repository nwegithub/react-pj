import React from "react"
import { View,Text} from 'react-native'
import MainNavigator from "./src/Route/Navigator"
import rootRecuder from "./src/store/recuder"
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const Store = createStore(rootRecuder)

const App = () =>{
  return(
   <Provider store={Store}>
    <MainNavigator/>
    </Provider>
   
  )
}
export default App