import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchCallSFK} from "../../CommonFunctions/FetchCall";

export const ListThunk = createAsyncThunk(
    'Record/list',

    async (body_sent) =>
    {


        const response= await  FetchCallSFK(
            "/api/Record/Record/",  "GET",
            body_sent,false,false,
            ["results"], ["Detail"],
        )

        return response

    }

);