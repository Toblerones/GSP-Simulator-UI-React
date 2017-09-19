import {GET_SHORT_FORM_LINK} from '../action/UserShortFormAction'

export default function updateLink(state = 0, action){
    console.log(action.type);
    switch(action.type){
        case GET_SHORT_FORM_LINK:
            state = "asdf"
            return state
        default:
            state = "defalut"
            return state
    }
}