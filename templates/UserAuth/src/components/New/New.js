import Record from "../Record/record";
import Vtt from "vtt-creator";
import React, {useEffect, useState} from "react";
import {handleSuccess, pushnewcue, StartTimeStamp, StopTimeStamp} from "../Record/RecordFunctions";
import assesementcss from "./../CommonCss/assesement.module.css"
import mic from "../../assets/images/mic.svg"
import {useDispatch, useSelector} from "react-redux";
import UpperHoc from "../../CommonFunctions/CustomHoc";
import {selectErrorRecord, selectStatusRecord, SuccessSelectorRecord} from "../../features/Records/RecordSlicer";
import {NewSubmitLink} from "../../features/Records/newSubmit";
import {BasicUserDetail} from "../../features/UserAuth/BasicUserDetail";
import {BasicDetailsU} from "../../features/UserAuth/AuthSlicer";


export default function New()
{
    const status = useSelector(selectStatusRecord);
    const success = useSelector(SuccessSelectorRecord);
    const Error = useSelector(selectErrorRecord);
    console.log(status,success,Error,"ddddddddddddddddddddddd")
    const v = new Vtt();
    const dispatch = useDispatch();
    window.vv=v
    const [hel ,setHel]=useState(0)
    const [hel2 ,setHel2]=useState(0)

    const BasicDetails = useSelector(BasicDetailsU);
    const [state,setState]=useState({
        // mode:-1,
        mode:-1,
        Recording:true,
        RecordingState:"",
        downloadBtn: React.createRef(),

        //    pause recording
        StartTimeStamp:0,
        latestTimeStamp:0,
        StopTimeStamp:0,
        Blob:"",
        q_no:0
    })



let questions={
        0:{type:0,options:["Happy","Sad","Angry"],question:"How is your mood today"},
    100:{type:0,options:["I've been sleeping more than usual\n","I've been sleeping less than usual","I haven’t noticed any changes"],question:"Tell us about your sleep over the last few weeks"},
    200:{type:0,options:["I have a larger appetite than usual\n","I have a smaller appetite than usual\n","I haven’t noticed any changes\n"],question:"How has your appetite been over the last few weeks?"},
    300:{type:0,options:["Not really","Maybe a little","Somewhat","Quite a bit","A lot"],question:"Have you been less active than usual?\n"},
    400:{type:0,options:[
            "Not at all",
            "Not very often",
            "Maybe, sometimes",
            "Most of the time",
            "All the time"
        ],question:"I find it difficult to unwind or relax"},
    500:{type:0,options:["Completely untrue",
            "Somewhat untrue",
            "I am unsure",
            "Somewhat true",
        "Completely true"
        ],question:"I find it difficult to communicate my opinions or needs to others\n"},
    600:{type:0,options:["Not at all","Not very often","Maybe, sometimes","Most of the time","All the time"],question:"I tend to have negative perspective on things\n"},
    700:{type:0,options:[
            "Strongly disagree",
            "disagree",
            "Neutral",
            "Agree",
            "Strongly agree"
        ],question:"I feel that i am not good enough\n"},
    800:{type:0,options:[
            "Not at all",
            "Hardly ever",
            "Maybe sometimes",
            "Most of the time",
            "Always"
        ],question:"I find it hard to concentrate on activities such as reading or watching TV\n"},
    900:{type:0,options:["Strongly disagree",
            "disagree",
            "Neutral",
            "Agree",
            "Strongly agree"
        ],question:"I am not interested in doing things i used to enjoy before"},
    1000:{type:0,options:["Completely untrue\n","Somewhat untrue",
            "I am unsure","Somewhat true","Completely true"
        ],question:"I find it hard to be mindful"},
    1100:{type:0,options:[
            "Not at all",
            "Hardly ever",
            "Maybe sometimes",
            "Most of the time",
            "Always"


        ],question:"I am unable to calm myself down when I get angry\n"},
    1200:{type:0,options:[
            "Never",
            "Rarely",
            "Sometimes",
            "Always",
            "Often"
        ],question:"I feel nervous and on edge"},
}

    if(state.q_no >= 1200 && state.mode === 0) {
        setState({...state,mode: 1,q_no:-1})
    }

    if(  hel ===0 )
    {
        dispatch(BasicUserDetail())
        setHel(1)
    }
    if (state.mode ===1 &&  hel2 ===0)
    {
        sub.user=BasicDetails.id
        sub.Json=JSON.stringify(sub.Json)
        dispatch(NewSubmitLink(sub))
        setHel2(1)
    }




    return <>
        <UpperHoc redirect="/record/list" Re={true}>
        <section className={assesementcss["assessment"]}>

            {state.mode === -1 &&<>
                <section className={assesementcss["assessment-intro" ]}>
                    <h1 className={assesementcss["assessment-intro-head"]}>Mood Assessment</h1>
                    <h2 className={assesementcss["assessment-intro-caption"]}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                        dolore.
                    </h2>
                    <a href="" className={assesementcss["assessment-start-btn"]} onClick={ev=>{ev.preventDefault();
                        setState({...state,mode: 0,q_no:0})
                    }}
                    >Start</a
                    >
                </section>
            </>
            }

            {state.mode === 0 &&<>
                <section className={assesementcss["assessment-mcq"]} >
                    <h2 className={assesementcss["question"]}>
                        {questions[state.q_no].question}
                    </h2>
                    <ul className={assesementcss["answer-list"]}>
                        {
                            questions[state.q_no].options.map(ev=>{
                                return<li className={assesementcss["answer"]}
                                          value={ev}
                                          onClick={ev2=>{
                                              sub.Json[state.q_no]=ev;
                                              setState({...state,q_no: state.q_no+100,})
                                          }}
                                >{ev}</li>
                            })
                        }
                    </ul>

                </section>
            </>
            }







        </section>
        </UpperHoc>


    </>
}


