import React, {useState} from "react";
import UpperHoc from "../../CommonFunctions/CustomHoc";
import {useDispatch, useSelector} from "react-redux";
import {selectDetail, selectList} from "../../features/Records/RecordSlicer";
import {DetailThunk} from "../../features/Records/Detail";

export default function Detail()
{
    const [a,setA]=useState(0)
    const dispatch = useDispatch();
    const List_state = useSelector(selectDetail);

    if(a === 0)
    {
        setA(1)
        let q=window.location.href.split("/")

        dispatch(DetailThunk(q[q.length-1]))

    }
    console.log(List_state)




    return <>
        <UpperHoc redirect="/auth/profile/" Re={false}>\

            <section className="inner-log">
                <h2 className="inner-log-heading">Log</h2>

                <p className="question">I tend to have negative perspective on things</p>
                <p className="answer">Not very often</p>

            </section>
        </UpperHoc>



    </>
}
