// Name.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
const Setup = () => {
  const [show, setShow] = useState(false);
  const [connection, setConnection] = useState([]);
  const navigate = useNavigate();
  const n = 2;
  const handleChange = (index, value) => {
    console.log(connection);
    setConnection(item => [...item, value]);
  };

  const handleTargetChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFinalSubmit = async () => {
    console.log()
    navigate('/home');
  };
  function appear() {
    setShow(true);
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
            <input
              type="text"
              className="form-controls"
              id={`input-${index + 1}`}
              placeholder={`Enter the switch ${index + 1} connected appliance`}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
        <center>
          <button type="submit" className="btn-setup" onClick={appear}>
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
          onChange={handleTargetChange}
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
