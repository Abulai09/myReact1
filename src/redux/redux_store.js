import {applyMiddleware, combineReducers, createStore} from 'redux'
import authReducer from './Auth'
import addPostReducer from './reducer2'
import addMessageReducer from './reducer3'
import usersReducer from './usersReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './app-reducer'

let reducers = combineReducers({
    ProfilePage: addPostReducer,
    DialogPage:addMessageReducer,
    UsersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:AppReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store=store
export default store    