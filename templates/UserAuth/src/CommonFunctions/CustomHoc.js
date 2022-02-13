import {useSelector} from "react-redux";
import {selectError, selectStatus, SuccessSelector} from "../features/UserAuth/AuthSlicer";

import Alert from '@material-ui/lab/Alert';
import React from "react";
import {Button, CircularProgress, Snackbar} from "@material-ui/core";

 function CustomizedSnackbars(props) {

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}  key={"bottom" + "center"}>
                <Alert variant="filled" onClose={handleClose}  sx={{ width: '100%' }} severity={props.severity}>
                    {`${props.message}`}
                </Alert>
            </Snackbar>
        </>
    );
}


export default function UpperHoc (props)
{



    const status = useSelector(selectStatus);
    const Error = useSelector(selectError);
    const Success = useSelector(SuccessSelector);
    // console.log(props)
    console.log(props.redirect,Error,Success,"dd    ")

    if (status ==="loading")
    {
        return<>
            <div style={{"display":"flex","align-items":"center",justifyContent:"center"}}>
            <CircularProgress color="success" />
            </div>
        </>
    }
    else{
        return <>
            {Success.Success === false && Error.error === false &&<></>}
            {Success.Success === false && Error.error === true &&<><CustomizedSnackbars message={`${Error.error_msg}`}  severity="error" /></>}
            {Success.Success === true && Error.error === false &&<><CustomizedSnackbars message={`${Success.Success_msg}`}  severity="success" /></>}
            {props.children}
            {
                props.Re === true && Success.Success === true && (window.location.href.search("next") === -1) === false && <>
                    {console.log(setTimeout(ev=>{window.location.href=props.redirect},2000))}
                </>}
        </>


    }
}