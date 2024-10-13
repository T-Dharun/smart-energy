import { toast } from "react-toastify";
import { ToastCofigInfo } from "../misc/EnergyData";

export const sendData2Esp32 = (message) => {
    const socket = new WebSocket("ws://localhost:4000");
    socket.onopen = () => {
        socket.send(message.name)
    }

    toast(`You ${!message.status?"Turned OFF":"Turned ON"} the device ${message.name} `,ToastCofigInfo);
}