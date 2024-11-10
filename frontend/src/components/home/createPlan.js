import { useSelector } from "react-redux";
let power=0;

function calculateUnits(totalAmount) {
  let unitsConsumed = 0;

  if (totalAmount === 0) {
    return 0; // No consumption if amount is zero
  }

  // Less than 500 units
  if (totalAmount <= 1900) { // 1900 is the maximum amount for 500 units
    if (totalAmount <= 235) {
      unitsConsumed = 100 + (totalAmount / 2.35);
    } else if (totalAmount <= 1175) {
      unitsConsumed = 200 + ((totalAmount - 235) / 4.7);
    } else if (totalAmount <= 1900) {
      unitsConsumed = 400 + ((totalAmount - 1175) / 6.3);
    }
  } else { // More than 500 units
    totalAmount -= 1900; // Remove cost for the first 500 units

    if (totalAmount <= 840) {
      unitsConsumed = 500 + (totalAmount / 8.4);
    } else if (totalAmount <= 2730) {
      unitsConsumed = 600 + ((totalAmount - 840) / 9.45);
    } else if (totalAmount <= 4830) {
      unitsConsumed = 800 + ((totalAmount - 2730) / 10.5);
    } else {
      unitsConsumed = 1000 + ((totalAmount - 4830) / 11.55);
    }
  }

  return Math.floor(unitsConsumed);
}



function givePower(device) {
  let data={name:device,unit:0,priority:0,day:0};
  switch (device) {
    case 'Bulb':
      data.unit = 50;
      data.priority=1;
      break;
    case 'Fan':
      data.unit = 75;
      data.priority=2;
      break;
    case 'Television':
      data.unit = 100;
      data.priority=3
      break;
    case 'WashingMachine':
      data.unit = 500;
      data.priority=4;
      break;
    case 'AirConditioner':
      data.unit = 1500;
      data.priority=5;
      break;
  }
  return data;
}
function perdayUsage(targetAmount,item){
  let i=0;
  while(targetAmount>item.unit*i && i<24){
    i++;
  }
  return i;
}
function calculateOptimizedUsage(targetAmount, devices) {



  power = calculateUnits(targetAmount)*1000/30;
  const plan=[];
  const Devices = JSON.parse(devices)
  Devices.map((item,ind)=>plan[ind]=givePower(item))
  let n=plan.length;
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      if(plan[i].priority>plan[j].priority){
        let temp=plan[i];
        plan[i]=plan[j];
        plan[j]=temp;
      }
    }
  }
  for(let i=0;i<n;i++){
    let day=perdayUsage(power,plan[i]);
    power-=(day*plan[i].unit);
    plan[i].day=day;
    if(power<0) break;
  }
  return plan;
}



export const createPlans = () => {
  const devices = localStorage.getItem('devices');
  const targetAmount = localStorage.getItem('targetAmount');
  const optimizedUsage = calculateOptimizedUsage(targetAmount, devices);
  console.log(optimizedUsage);
  return optimizedUsage;
}