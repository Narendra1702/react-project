import {createStore} from 'redux';

const initialState = {
    balance : 5000,
    withdraw : 1000,
    name : 'Narendra',
    mobile :7526852845,
}
const appreducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case "balance" :
            return {...state, balance:state.balance + + payload}
            case "withdraw":
                return {...state, withdraw:state.balance - +payload}
                case "name" :
                    return {...state, name:payload}
                    case "mobile" :
                        return {...state,mobile:payload}
                        case "reset":
                            return initialState
                             default :
                                 return state
    }
    
}

    const datastore = createStore(appreducer);


export default datastore;