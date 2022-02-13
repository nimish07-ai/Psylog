import React, {Component, useEffect, useState} from "react";
import UserDetailCss from "./UserDetailPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {BasicDetailsU, selectError, selectLogin, selectStatus} from "../../features/UserAuth/AuthSlicer";
import {BasicUserDetail} from "../../features/UserAuth/BasicUserDetail";
import UpperHoc from "../../CommonFunctions/CustomHoc";
import flower from "../../assets/images/flower profile.png"
import edit from "../../assets/images/edit.svg"


export default function  UserDetail ()  {

    const [state,setState]=useState({})
    const [Open,setOpen]=useState(false)
    const [set,setSet]=useState(false)
    const [call,setCall]=useState(0)
    const dispatch = useDispatch();
    const BasicDetails = useSelector(BasicDetailsU);

    if (call === 0)
    {
        setCall(1);
        dispatch(BasicUserDetail());
    }
    if (Open && set === false)
    {
        setState(true)
        setState({First_name:BasicDetails.First_name,Last_name:BasicDetails.Last_name,email:BasicDetails.email,phone_number:BasicDetails.phone_number,gender:BasicDetails.gender})
    }
    //Login_state,status,Error,state,BasicDetails,
    console.log(UserDetailCss)

        return (
            <>
                <UpperHoc redirect="/auth/profile/" Re={true}>
                    <section className={UserDetailCss["profile-section"]}>
                        <span>
                                <h1 className={UserDetailCss["profile-section"]}>Profile</h1>

                        </span>
                        <div className={UserDetailCss["profile-detail-container"]}>
                            <div className={UserDetailCss["profile-details"]}>
                                <form >
                                    <div className={UserDetailCss["input-div"]}>
                                        <label htmlFor="first-name">First Name</label>

                                        <input type="text" className="first-name" value= {BasicDetails.First_name} id="first-name"/>
                                    </div>
                                    <div className={UserDetailCss["input-div"]}>
                                        <label htmlFor="last-name">Last Name</label>
                                        <input type="text" className="last-name"  value= {BasicDetails.Last_name} id="last-name"/>
                                    </div>
                                    <div className={UserDetailCss["input-div"]}>
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="email" id="email"  value={BasicDetails.email}/>
                                    </div>

                                    <div className={UserDetailCss["input-div"]}>
                                        <label htmlFor="email">Country</label>
                                        <input type="text" value= {BasicDetails.country}/>
                                    </div>
                                    <div className={UserDetailCss["input-div"]}>
                                        <label htmlFor="gender">Gender</label>
                                    <input type="text" value={BasicDetails.gender} />
                                    </div>
                                    <div className={UserDetailCss["input-div"]}>
                                        <label htmlFor="gender">phone_number</label>
                                        <input type="text" value={BasicDetails.phone_number} />
                                    </div>
                                </form>
                            </div>
                            <div className={UserDetailCss["profile-pic-container"]}>
                                <div className={UserDetailCss["pic-container"]}>
                                    <img src={BasicDetails.image ===""?flower : BasicDetails.image} alt="" />
                                </div>
                            </div>

                        </div>

                    </section>

                </UpperHoc>

            </>

        );

}
