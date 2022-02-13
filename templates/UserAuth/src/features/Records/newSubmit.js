import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchCallSFK} from "../../CommonFunctions/FetchCall";

export const NewSubmitLink = createAsyncThunk(
    'Record/NewSubmition',

    async (body_sent) =>
    {


        const response= await  FetchCallSFK(
            "/api/Record/Record/",  "Post",
            body_sent,false,false,
            ["Audio"], ["Detail"],
        )
        return response

    }

);