const initialState = {
    editState: false,
    arrID: '',
    userInput : '',
    fid: '',
};

export const editDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_DATA_NEW_STATE':
            return {
                ...state,
                ...action.newState
            }
        default :
            return state;
    }
};  