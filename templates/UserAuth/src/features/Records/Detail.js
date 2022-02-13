import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/FetchCall";


export const DetailThunk = createAsyncThunk(
    "Record/Detail",
    async (id) =>
    {




            console.log(response,"ssssssssssssssssssssss")
        return response

    }

);