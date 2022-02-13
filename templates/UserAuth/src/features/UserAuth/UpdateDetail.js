import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchCallSFK} from "../../CommonFunctions/FetchCall";

export const UpdateDetail = createAsyncThunk(
    'Auth/UpdateDetail',

    async (body_sent,id) =>
    {


        const response= await  FetchCallSFK(
            `/api/User/User/${id}/`,  "Put",
            body_sent,false,false,
            ["id"], ["Detail"],
        )


        return response

    }

);