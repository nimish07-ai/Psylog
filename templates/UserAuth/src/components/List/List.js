import play from "../../assets/images/play.svg"
import UpperHoc from "../../CommonFunctions/CustomHoc";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectList} from "../../features/Records/RecordSlicer";
import {ListThunk} from "../../features/Records/list";
import Listcss from "./List.module.css"
export default function List()
{
    const [call,setCall]=useState(0)
    const dispatch = useDispatch();
    const List_state = useSelector(selectList);
    console.log(List_state)
    if (call === 0)
    {
        setCall(1);
        dispatch(ListThunk());

    }
    return<>
        <UpperHoc redirect="/auth/profile/" Re={false}>
            <section className={Listcss["logs-section"]}>
                <h1 className={Listcss["logs-head"]}>Your mood log</h1>
                <div className={Listcss["logs-container"]}>
                    {
                        List_state.map(ev=>{
                            return <div className={Listcss["log"]}
                                        onClick={ev2=>{window.location.href=`/record/detail/${ev.id}/`
                                        }}>

                                {console.log(ev.id)}
                                <h2>{ev.Date}</h2>
                                {/*<p>*/}
                                {/*    Lorem ipsum dolor sit, amet consectetur adipisicing elit.*/}
                                {/*    Necessitatibus, qui.*/}
                                {/*</p>*/}
                                <div className={Listcss["play-container"]}>
                                    <img src={play} alt="" />
                                </div>

                            </div>
                        })
                    }
                </div>
            </section>
        </UpperHoc>

    </>
}