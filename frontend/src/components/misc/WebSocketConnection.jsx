import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEnergyValue } from "../../redux/energySlice";

const WebSocketConnection=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const socket=new WebSocket('ws://localhost:4000');
        socket.onopen=()=>{
            console.log("Client connected");
        }
        socket.onmessage=(event)=>{
            dispatch(setEnergyValue(event.data));
        }
        socket.onerror=(err)=>{
            console.log(err);
        }
        socket.onclose=()=>{
            console.log("Disconnected");
        }
        return ()=>{
            socket.close();
        }
    },[]);
    return;
}
export default WebSocketConnection;