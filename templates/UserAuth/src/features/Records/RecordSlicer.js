import {  createSlice } from '@reduxjs/toolkit';

import {ListThunk} from "./list";
import {DetailThunk} from "./Detail";
import {NewSubmitLink} from "./newSubmit";
const initialState = {
    Success:false,
    SuccessMsg:"",
    error_msg:"",
    error:false,
    List:[],
    status:"idle",

    detail:[]
};



export const RecordSlice = createSlice({
    name: 'Record',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(ListThunk.pending, (state) => {
                {
                    state.status = 'loading';
                    state.error = false
                    state.Success = false
                }
            })
            .addCase(ListThunk.fulfilled, (state, action) => {
                if (action.payload.type === true) {
                    state.Login = true
                    state.error = false
                    state.Success = true
                    state.SuccessMsg = "Record Submitted Succesfully succesfully"
                    state.status = "idle"
                    state.List=action.payload.response["results"]
                } else {
                    state.status = "idle"
                    state.Login = false
                    state.error = true
                    state.Success = false
                    state.error_msg = "some internal error"
                }

            })
            .addCase(DetailThunk.pending, (state) => {
                {
                    state.status = 'loading';
                    state.error = false
                    state.Success = false
                }
            })
            .addCase(DetailThunk.fulfilled, (state, action) => {
                if (action.payload.type === true) {
                    state.Login = true
                    state.error = false
                    state.Success = true
                    state.SuccessMsg = "Record Submitted Succesfully succesfully"
                    state.status = "idle"
                    state.detail=action.payload.response
                } else {
                    state.status = "idle"
                    state.Login = false
                    state.error = true
                    state.Success = false
                    state.error_msg ="some internal error"
                }
            })
            .addCase(NewSubmitLink.pending, (state) => {
                {
                    state.status = 'loading';
                    state.error = false
                    state.Success = false
                }
            })
            .addCase(NewSubmitLink.fulfilled, (state, action) => {
                if (action.payload.type === true) {
                    state.Login = true
                    state.error = false
                    state.Success = true
                    state.SuccessMsg = "Record Submitted Succesfully "
                    state.status = "idle"

                } else {
                    state.status = "idle"
                    state.Login = false
                    state.error = true
                    state.Success = false
                    state.error_msg ="some internal error"
                }
            })
    }});


export const selectList = (state) => state.Record.List;
export const selectDetail = (state) => state.Record;

export const selectStatusRecord = (state) => state.Record.status;
export const selectErrorRecord = (state) => {
    return {error: state.Record.error, error_msg: state.Record.error_msg}
};
export const SuccessSelectorRecord = (state) => {

    return {Success: state.Record.Success, Success_msg: state.Record.SuccessMsg}
};


export default RecordSlice.reducer;
