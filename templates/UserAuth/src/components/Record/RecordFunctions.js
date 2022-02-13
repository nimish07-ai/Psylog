import {NewSubmitLink} from "../../features/Records/newSubmit";
import {FetchCallSFK} from "../../CommonFunctions/FetchCall";

export function StartTimeStamp(setState, state)
{
    let a=new Date()
    setState({...state,StartTimeStamp:a,latestTimeStamp:a})
}
export function StopTimeStamp(setState, state)
{
    window.ss.stop();
    setState({...state,StopTimeStamp:new Date()})
}

export function UpdateonRestartTimeStamp(setState, state)
{
    let a = new Date()
    let b= state.StopTimeStamp -state.StartTimeStamp
    a.setTime(a.getTime()-b)
    setState({...state,StartTimeStamp:a,latestTimeStamp:a})
    window.ss.start()
}


export function pushnewcue(setState, state, v, q_no)
{

    let a=new Date()


    v.add(
        Math.floor((state.latestTimeStamp.getTime()- state.StartTimeStamp.getTime())/60/60), Math.floor((a.getTime()-state.StartTimeStamp.getTime())/60/60)
        ,String(q_no));
    setState({...state,latestTimeStamp:a})
    console.log(
        Math.floor((state.latestTimeStamp.getTime()- state.StartTimeStamp.getTime())/60/60), Math.floor((a.getTime()-state.StartTimeStamp.getTime())/60/60),vv.toString()
    )
}

export function handleSuccess (stream,state,setState) {
    const options = {mimeType: 'audio/webm'};
    const recordedChunks = [];
    const mediaRecorder = new MediaRecorder(stream, options);
    window.ss=mediaRecorder

    mediaRecorder.addEventListener('dataavailable', function(e) {
        if (e.data.size > 0) recordedChunks.push(e.data);
    });

    mediaRecorder.addEventListener('stop', function() {

        let a=new Blob(recordedChunks,{type :"audio/mpeg"})

        var au  = document.createElement('audio');
        au.src=URL.createObjectURL(a)
        sub.Audio=
        console.log()
        sub.user=uid
        sub.Json=JSON.stringify(sub.Json)
        dis(NewSubmitLink(sub))


    });


    mediaRecorder.start();
};



