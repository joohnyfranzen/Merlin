export default (state = { userId: localStorage.getItem('userId') }, action ) => {

    switch (action.type) {
        case 'SET_ID':
            return state = { userId : action.userId };
        case 'SET_ID_OUT':
            return state = {userId : ''}
        default: 
            return state
    }

}