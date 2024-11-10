// Name.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useDispatch } from 'react-redux';
import { setAmount, setDevices } from '../../redux/energySlice';
const Setup = () => {
  const [show, setShow] = useState(false);
  const [connection, setConnection] = useState([]);
  const [amount,setTargetAmount]=useState(0);
  const navigate = useNavigate();
  const n = 2;
  const dispatch=useDispatch();
  const handleChange = (index, value) => {
    setConnection(item => ([...item,{id:index,device:value}]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFinalSubmit = () => {
    localStorage.setItem('targetAmount',amount);
    navigate('/home');
  };
  function appear() {
    setShow(true);
  }
  function handleDevice(e){
    e.preventDefault();
    let devices=[]
    connection.map((item,ind)=>{
      devices[item.id-1]=item.device;
    })
    localStorage.setItem("devices",JSON.stringify(devices))
    console.log(JSON.parse(localStorage.getItem('devices')))
    appear();
  }

  return (
    <div className='w-100 setup-home'>
      <div className="setup w-50 mt-4 ">
        <h2 className='text-center'>Let's Do the small setup</h2>
        <form onSubmit={handleSubmit} className={show ? 'd-none' : 'form-input'}>
          {[...Array(n)].map((_, index) => (
            <div key={index} className='form-main'>
              <label htmlFor={`input-${index + 1}`} className="form-label">
                Port {index + 1}
              </label>
              <select id="device" name="device" onClick={(e)=>handleChange(index+1,e.target.value)}>
                {
                  devices.map(item=><option value={item}>{item}</option>)
                }
              </select>
            </div>
          ))}
          <center>
            <button type="submit" className="btn-setup" onClick={handleDevice}>
              Submit
            </button>
          </center>
        </form>

        {show && <div className="mt-4 target">
          <label htmlFor="targetAmount" className="form-label">
            Target Amount
          </label>
          <p>Specify your electricity bill goal amount. We offer a comprehensive and concise plan to help you achieve this target.</p>
          <input
            type="number"
            className="form-controls w-100"
            id="targetAmount"
            onChange={(e)=>setTargetAmount(e.target.value)}
          />
          <center>
            <button
              type="button"
              className="btn-setup"
              onClick={handleFinalSubmit}
            >
              Save
            </button>
          </center>
        </div>}
      </div>
    </div>
  );
};
export default Setup;



const devices=['Bulb','Fan','AirConditioner','Television','WashingMachine']