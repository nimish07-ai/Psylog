import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/FetchCall";


export const LoginThunk = createAsyncThunk(
    'Auth/Login',

      async (body_sent) =>
     {


         const response= await  FetchCallSFK(
             "/api/User/CUser/login/",  "Post",
             body_sent,false,false,
             ["success"], ["error"],
         )

         // console.log(response,"ddddddddddsssacksqqqqqqqqqqqqwwwwwwwwwwwwwww")

        return response

     }

);