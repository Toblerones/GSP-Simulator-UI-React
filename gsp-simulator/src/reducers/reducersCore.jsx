import { combineReducers } from 'redux'
import updateLink from './UserShortFormReducer.jsx'
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    updateLink
})
export default rootReducer