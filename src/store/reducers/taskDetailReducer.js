import initialState from '../initialState'

const taskDetailReducer = (state = initialState.taskDetail, action) => {
    switch(action.type){
        case "TASK_DETAIL":
            return action.taskDetail
        default:
            return state
    }
}

export default taskDetailReducer;