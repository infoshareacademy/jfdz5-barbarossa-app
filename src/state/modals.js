const TOGGLE_USER_REMOVE_MODAL = 'modals/TOGGLE_USER_REMOVE_MODAL'
export const toggleUserRemoveModal = boolean => ({
    type: TOGGLE_USER_REMOVE_MODAL,
    boolean
})

const TOGGLE_RESET_PASSWORD_MODAL = 'modals/TOGGLE_RESET_PASSWORD_MODAL'
export const toggleResetPasswordModal = boolean => ({
    type: TOGGLE_RESET_PASSWORD_MODAL,
    boolean
})

const initialState = {
    showRemoveModal: false,
    showResetPasswordModal: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RESET_PASSWORD_MODAL:
            return {
                ...state,
                showResetPasswordModal: action.boolean
            };
        case TOGGLE_USER_REMOVE_MODAL:
            return {
                ...state,
                showRemoveModal: action.boolean,
            };
        default:
            return state
    }
}