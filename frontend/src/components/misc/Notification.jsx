import { useEffect, useState } from "react";
import "./style.css";

const Notification=({message,setAlert})=>{
    const[visible,setVisible]=useState(setAlert);
    useEffect(()=>{
        if(setAlert) setVisible(true);
        const timer=setTimeout(()=>{
            setVisible(false)
        },2000);
        return ()=>clearTimeout(timer);
    },[setAlert])
    if(!visible) return null;
    return(
        <>
            <div>
                {message}
            </div>
        </>
    )
}
export default Notification;