import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/FetchCall";


export const DetailThunk = createAsyncThunk(
    "Record/Detail",
    async (id) =>
    {


        const response= await  FetchCallSFK(
            `/api/Record/Record/${id}/`,  "GET",
            {},false,false,
            ["results"], ["error"],
        )

            console.log(response,"ssssssssssssssssssssss")
        return response

    }

);