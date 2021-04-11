import React, { useState } from 'react';
import './advice-form.scss'
import Creatable from 'react-select/creatable';
import {FaAngleRight} from "react-icons/fa";


const questions = [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
    { label: 'Third', value: 3 },
    { label: 'Forth', value: 4 }
]

const customStyles = {
    select:{
        height: '40'
        
    }
   /* option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20
    })*/
}

const AdviceForm = () => {
                        const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [roleValue, setRoleValue] = useState('');

    const handleChange = (field, value) => {
        switch (field) {
            case 'questions':
                setRoleValue(value)
                break;

            default:
                break;
        }
    }

    return (
      <form className='form'>
          <div className='form-left'>
              <label>E-mail:</label>
              <input
                      type='email'
                      placeholder='E-mail'
                      value={email}
                      onChange={event => setEmail(event.target.value)}
              />

              <label>Phone Number:</label>
              <input
                      type='phone'
                      placeholder='Your number'
                      value={phone}
                      onChange={event => setPhone(event.target.value)}
              />

              <label>Your Name:</label>
              <input
                      type='name'
                      placeholder='Your Name'
                      value={name}
                      onChange={event => setName(event.target.value)}
              />

              <label>Team the question:</label>
              <Creatable
                /*isClearable*/
                onChange={(value) => handleChange('questions', value)}
                options={questions}
                value={roleValue}
                placeholder='Team the question'
                style={customStyles.select}
              />
          </div>


          <div className='form-right'>
              <label>Message:</label>
                  <textarea
                      type='textarea'
                      placeholder='Message'
                  />
              <div className='buttons'>
                  <button
                      className='form-button'
                      type='submit'
                  >
                      Get consultation
                      <FaAngleRight />
                  </button>
              </div>
          </div>
      </form>
    );
};

export default AdviceForm;