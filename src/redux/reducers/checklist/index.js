import * as a from 'redux/actions/action_types'

const checklist=(state, action)=>{
    if (state === undefined) {
        state = null;
    }
    switch (action.type) {
        case a.UPDATE_DATA:
            return action.payload
        default:
            return state;
    }
}
export default checklist;