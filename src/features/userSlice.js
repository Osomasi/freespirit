//this is the user slice, it will be used to store the user data, and will be used to check if the user is logged in or not.
//extra reducers are used to handle the response from the api, and store the data in the state.



import {createSlice} from '@reduxjs/toolkit';
//apApi
import {appApi} from '../services/appApi';

const initialState = {
    user: '',
    email: '',
    password: '',
};


export const userSlice = createSlice({

    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.signup.matchFulfilled, (_, {payload}) =>payload);
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, {payload}) =>payload);
    }
});

export default userSlice.reducer;
