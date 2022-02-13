import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchCallSFK} from "../../CommonFunctions/FetchCall";




export const Signup = createAsyncThunk(
    'Auth/Signup',
    async (body_sent) => {

        const response= await  FetchCallSFK(
            "/api/User/CUser/",  "Post",
            body_sent,false,false,
            ["success"], ["error"],
        )
        console.log(response,"ssssssssaaaaaaaaaaaaaaddddddddddwwwwwwwwqqqqqq")
        return response;
    }
);