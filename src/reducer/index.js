import {combineReducers} from 'redux'
import submitReducer from './submitter'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form: formReducer
})