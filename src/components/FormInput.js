import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { questions } from './../data';

function FormInput({onAdd,notify}) {
    const [qu,setQu] = useState('');
    const [an,setAn] = useState('');

    const addData = () => {
        if(qu === '' || an === '') {
            notify('Please fill all the fields','Error');
            return;
        }
        questions.push({id:Math.random(),q:qu,a:an});
        setQu('');
        setAn('');
        onAdd();
    }
  return (
    <Row className='my-3'>
      <Col sm='5'>
        <Form.Control value={qu} onChange={(e) =>setQu(e.target.value)} placeholder='enter question'/>
      </Col>
      <Col sm='5'>
      <Form.Control value={an} onChange={(e) => setAn(e.target.value)} placeholder='enter answer'/>
      </Col>
      <Col sm='2'>
        <button onClick={addData} className='btn-color w-100' type='submit'>
          Add
        </button>
      </Col>
    </Row>
  )
}

export default FormInput
