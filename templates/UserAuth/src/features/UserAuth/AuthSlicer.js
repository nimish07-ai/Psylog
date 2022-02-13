import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {LoginThunk} from "./Login";
import {Signup} from "./Signup";
import {Logout} from "./Logout";
import {BasicUserDetail} from "./BasicUserDetail";
import {UpdateDetail} from "./UpdateDetail";
// import { fetchCount } from './counterAPI';

const initialState = {
    Login:false,
    Signup:false,
    Success:false,
    SuccessMsg:"Succesfully Done",
    error_msg:"",
    error:false,
    status:"idle",
    First_name:"",
    Last_name:"",
    email:"",
    phone:"",
    id:0
};



export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // SwitchSuccess: (state) => {
        //    if (state.Success === true)
        //    {
        //        state.Success =false
        //    }
        //    else if (state.Success === false)
        //    {
        //        state.Success =true
        //    }
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            //login
            .addCase(LoginThunk.pending, (state) => {
                {
                    state.status = 'loading';
                    state.error=false
                    state.Success=false
                }
            })
            .addCase(LoginThunk.fulfilled, (state, action) => {
                // console.log(action,action.payload.type)
                if (action.payload.type === true)
                {
                    // console.log("true")
                    state.Login= true
                    state.error=false
                    state.Success=true
                    state.SuccessMsg="User LoggedIn succesfully"
                    state.status="idle"
                }else
                    {
                        // console.log("not true")
                        state.status="idle"
                        state.Login= false
                        state.error=true
                        state.Success=false
                        state.error_msg=action.payload.response["error"]
                }

            })
            //signup
            .addCase(Signup.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(Signup.fulfilled, (state, action) => {
                // console.log(action,"dddddddxxdddd")
                if (action.payload.type === true)
                {
                    state.Login= true
                    state.error=false
                    state.Signup=true
                    state.Success=true
                    state.SuccessMsg="User SignedUp succesfully"
                    state.status="idle"
                }else
                {
                    // console.log("not true")
                    state.status="idle"
                    state.Login= false
                    state.error=true
                    state.Success=false
                    state.Signup=false
                    state.error_msg=action.payload.response["error"]
                }

            })
            //logout
            .addCase(Logout.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(Logout.fulfilled, (state, action) => {
                if (action.payload.type === true)
                {
                    state.Login= false
                    state.error=false
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg="logout succesfully"
                }else
                {
                    // console.log("not true")
                    state.status="idle"
                    state.Login= true
                    state.error=true
                    state.Success=false
                    state.error_msg=action.payload.response["error"]
                }

            })
            .addCase(BasicUserDetail.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(BasicUserDetail.fulfilled, (state, action) => {

                if (action.payload.type === true)
                {
                    state.Login= false
                    state.error=false


                    state.id=action.payload.response["id"]
                    state.email=action.payload.response["email"]
                    state.First_name=action.payload.response["First_name"]
                    state.Last_name=action.payload.response["Last_name"]
                    state.country=action.payload.response["country"]
                    state.gender=action.payload.response["gender"]
                    state.image=action.payload.response["image"]
                    state.phone_number=action.payload.response["phone_number"]

                    state.status="idle"
                }else
                {

                    state.status="idle"
                    state.Login= true
                    state.error=true
                    state.error_msg=action.payload.response["error"]
                }

            })
            .addCase(UpdateDetail.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(UpdateDetail.fulfilled, (state, action) => {

                if (action.payload.type === true)
                {
                    state.Login= false
                    state.error=false


                    state.id=action.payload.response["id"]
                    state.email=action.payload.response["email"]
                    state.First_name=action.payload.response["First_name"]
                    state.Last_name=action.payload.response["Last_name"]
                    state.country=action.payload.response["country"]
                    state.gender=action.payload.response["gender"]
                    state.image=action.payload.response["image"]
                    state.phone_number=action.payload.response["phone_number"]

                    state.status="idle"
                }else
                {

                    state.status="idle"
                    state.Login= true
                    state.error=true
                    state.error_msg=action.payload.response["error"]
                }

            })
        ;

    },
});

export const selectLogin = (state) => state.Auth.Login;
export const SuccessSelector = (state) => {

    return {Success: state.Auth.Success, Success_msg: state.Auth.SuccessMsg}
};

export const BasicDetailsU = (state) => {

    return{
        id:state.Auth.id,
        email: state.Auth.email,
        First_name:state.Auth.First_name,
        Last_name:state.Auth.Last_name,
        country:state.Auth.country,
        gender:state.Auth.gender,
        image:state.Auth.image,
        phone_number:state.Auth.phone_number

    }

};
export const selectStatus = (state) => state.Auth.status;
export const selectError = (state) => {
    return {error: state.Auth.error, error_msg: state.Auth.error_msg}
};


export default AuthSlice.reducer;