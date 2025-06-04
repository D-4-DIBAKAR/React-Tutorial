import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import axios from 'axios';



const initialState = {
     loading: true,
     error: '',
     users: []
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {//Action Creator
     return {//Action
          type: FETCH_USERS_REQUEST
     }
}
const fetchUsersSuccess = (users) => {
     return {
          type: FETCH_USERS_SUCCESS,
          payload: users
     }
}
const fetchUsersFailure = (error) => {
     return {
          type: FETCH_USERS_SUCCESS,
          payload: error
     }
}

const reducer = (state = initialState, action) => {
     switch (action.type) {
          case FETCH_USERS_REQUEST: return {
               ...state,
               loading: true,
          }
          case FETCH_USERS_SUCCESS: return {
               ...state,
               loading: false,
               users: action.payload,
               error: ''
          }
          case FETCH_USERS_FAILURE: return {
               ...state,
               loading: false,
               users: [],
               error: action.payload
          }
          default: state
     }
}
const fetchUsers = () => {
     return function (dispatch) {
          dispatch(fetchUsersRequest())
          axios.get('https://jsonplaceholder.typicode.com/users')
               .then(response => {
                    const users = response.data.map(user => user.id);
                    dispatch(fetchUsersSuccess(users))
               }).catch(error => {
                    dispatch(fetchUsersFailure(error.message))
               })
     }
}

// Create store with thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

// Subscribe and dispatch
store.subscribe(() => {
     console.log(store.getState());
});

store.dispatch(fetchUsers());