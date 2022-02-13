import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/FetchCall";


export const  BasicUserDetail = createAsyncThunk(
    'Auth/BasicUserDetail',

    async () =>
    {


        const response= await  FetchCallSFK(
            "/api/User/User/BasicInfoOfAuthenticatedUser/",  "Post",
            {},false,false,
            ["id"], ["detail"],
        )
        console.log(response,"ddddddddddddddddd")


        return response

    }

);