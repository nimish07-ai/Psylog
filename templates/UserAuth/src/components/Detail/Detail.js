import React, {useState} from "react";
import UpperHoc from "../../CommonFunctions/CustomHoc";
import {useDispatch, useSelector} from "react-redux";
import {selectDetail, selectList} from "../../features/Records/RecordSlicer";
import css from "./Detail.module.css"

import getCookie from "../../CommonFunctions/getCookie";
import {CircularProgress} from "@material-ui/core";

export default  function Detail()
{
    const [a,setA]=useState(0)
    const [b,setB]=useState([])
    const dispatch = useDispatch();
    const List_state = useSelector(selectDetail);

    async function  all()
    {
        setA(1)
        let q=window.location.href.split("/")
        // q[q.length-2]
        // dispatch(DetailThunk())


        let req = new Request(`/api/Record/Record/${q[q.length-2]}/`, {

            mode: 'cors', //just a safe-guard indicating our intentions of what to allow
            credentials: 'include', //when will the cookies and authorization header be sent
            cache: 'force-cache',
            headers: {

                'X-CSRFToken': getCookie('csrftoken')
            },

        });



        let response = await fetch(req)
            // .then(manageError)
            .then(
                ev => ev.json()
            )
        setB({a:Object.keys( JSON.parse(response.Json))})
        setA(JSON.parse(response.Json))


        console.log(JSON.parse(response.Json))
    }

    if(a === 0)
    {
        setA(1)
        all()

    }
    console.log(a,b)
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



    return <>
        {
            a ===0 || a=== 1?<>


                <div style={{"display":"flex","align-items":"center",justifyContent:"center"}}>
                    <CircularProgress color="success" />
                </div>
            </>:<>
                <section className={css["inner-log"]}>
                    <h2 className={css["inner-log-heading"]}>Log</h2>

                    {
                        b.a.map(ev=>{
                            return<><p className={css["question"]}>{questions[ev].question}</p>
                                <p className={css["answer"]}>{a[ev]}</p>
                            </>


                        })

                    }

                </section>
            </>


        }

    </>
}
