import update from '../../helpers/update';
import MalyshkiService from './malyshkiService';

export const CREATE_POST_STARTED = "malyshki/CREATE_POST_STARTED";
export const CREATE_POST_SUCCESS = "malyshki/CREATE_POST_SUCCESS";
export const CREATE_POST_FAILED = "malyshki/CREATE_POST_FAILED";
export const GET_LIST_DATA_STARTED = "malyshki/GET_LIST_DATA_STARTED";
export const GET_LIST_DATA_SUCCESS = "malyshki/GET_LIST_DATA_SUCCESS";
export const GET_LIST_DATA_FAILED = "malyshki/GET_LIST_DATA_FAILED";

const initialState = {
    post: {
        error: false,
        loading: false,
        isValid: false
    },
    list: {
        data: [],
        error: false,
        loading: false,
        success: false
    },
}

export const malyshkiReducer = (state = initialState, action) => {
    let newState = state;

    switch (action.type) {

        case CREATE_POST_STARTED: {
            newState = update.set(state, 'post.loading', true);
            break;
        }

        case CREATE_POST_SUCCESS: {
            newState = update.set(state, 'post.loading', false);
            newState = update.set(newState, 'post.form', null);
            newState = update(newState, {
                list: {
                    data: {
                        $unshift: [action.payload.data]
                    }
                }
            });
            break;
        }

        case CREATE_POST_FAILED: {
            newState = update.set(state, 'post.loading', false);
            newState = update.set(newState, 'post.error', true);
            break;
        }


        case GET_LIST_DATA_STARTED: {
            newState = update.set(state, 'list.loading', true);
            break;
        }

        case GET_LIST_DATA_SUCCESS: {
            newState = update.set(state, 'list.loading', false);
            newState = update.set(newState, 'list.data', action.payload.data);
            break;
        }

        case GET_LIST_DATA_FAILED: {
            newState = update.set(state, 'list.loading', false);
            newState = update.set(newState, 'list.error', true);
            break;
        }

        default: {
            return newState;
        }
    }

    return newState;
}

export const getListData = () => {
    return (dispatch) => {
        dispatch(getListActions.started());

        MalyshkiService.getListData()
            .then((response) => {
                dispatch(getListActions.success(response));
            })
            .catch(() => {
                dispatch(getListActions.failed());
            });
    }
}

export const createPostActions = {
    started: () => {
        return {
            type: CREATE_POST_STARTED
        }
    },

    success: (data) => {
        return {
            type: CREATE_POST_SUCCESS,
            payload: data
        }
    },

    failed: (error) => {
        return {
            type: CREATE_POST_FAILED
        }
    }
}


export const getListActions = {
    started: () => {
        return {
            type: GET_LIST_DATA_STARTED
        }
    },

    success: (data) => {
        return {
            type: GET_LIST_DATA_SUCCESS,
            payload: data
        }
    },

    failed: (error) => {
        return {
            type: GET_LIST_DATA_FAILED
        }
    }
}