import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [
        {
            name: "Bulb1",
            current: 0,
            outputPin: 0,
            voltage: 219.08,
            power: 0,
            price: 0,
            id: 1,
            inputPin: 0,
            status: false,
            label: 'Bulb1',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4B8DF8', // Line color
            backgroundColor: '#4B8DF8', // Point color
            borderWidth: 2,
            pointRadius: 2, // Point size
            tension: 0,
        },
        {
            name: "Bulb2",
            current: 0,
            outputPin: 0,
            voltage: 0,
            power: 0,
            price: 0,
            id: 2,
            inputPin: 0,
            status: false,
            label: 'Bulb2',
            data: [30, 40, 45, 35, 30, 20, 10],
            fill: false,
            borderColor: '#8A2BE2', // Line color
            backgroundColor: '#8A2BE2', // Point color
            borderWidth: 2,
            pointRadius: 2, // Point size
            tension: 0,
        }
    ],
    devices:[],
    amount:0,
}

const handleEnergyValue = (name, value, ind, status) => {
    if (status != "Bulb1") return 0;
    var current = ((value * 5 / 1023) - 2.85) / 0.185;
    if (current < 0) current = current * -1;

    if (name == "current") {
        return current.toFixed(3);
    }
    else if (name == "power") {
        var power = 219.08 * current;
        return power.toFixed(3);
    }
    console.log(initialState.data[ind]);
}

export const energySlice = createSlice({
    name: 'energy',
    initialState,
    reducers: {
        setEnergyValue: (i, payload) => {
            let value = JSON.parse(payload.payload).Devices;
            if (value) {
                i.data = value.map((item, i) => ({
                    ...item,
                    current: handleEnergyValue("current", item.current, i, item.name),
                    voltage: 219.08,
                    power: handleEnergyValue("power", item.current, i, item.name),
                    price: 0,
                    id: i + 1
                }));
            }
        },
        setDevices:(i,payload)=>{
            i.devices=payload.payload;
            console.log(i.devices)
        },
        setAmount:(i,payload)=>{
            console.log(payload)
            i.amount=Number(payload.payload);
        }
    }

});

export const { setEnergyValue , setDevices ,setAmount } = energySlice.actions;
export default energySlice.reducer; 