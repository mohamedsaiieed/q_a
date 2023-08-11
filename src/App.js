import React, { useState } from 'react'
import {Col, Container,Row} from 'react-bootstrap'
import FormInput from './components/FormInput'
import QAList from './components/QAList'
import { questions } from './data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data,setData] = useState(questions)

  const onAdd = () => {
    localStorage.setItem("item",JSON.stringify([...questions]));
    setData([...questions]);
    notify('question added' , 'Success')
  }

  const delAll = () => {
    localStorage.removeItem("item");
    questions.splice(0,questions.length);
    setData([]);
    notify('All questions deleted' , 'Success')

  }

  const delOneItem=(item) => {
    localStorage.setItem('item',JSON.stringify([...item]));
    setData([...item]);
    notify('question deleted' , 'Success')
    if(item.length <= 0) 
      delAll();
  }

  const notify = (message,type) => {
    if (type === 'Error') 
      toast.error(message)
      else if (type === 'Success')
      toast.success(message)
  }

  return (
    <div className='font color-body'>
      <Container className='p-5'>
        <Row className='justify-content-center'>
          <Col sm='4'>
            <div className='fs-3' text-center>
              questions & answer
            </div>
          </Col>
          <Col sm='8'>
            <FormInput notify={notify} onAdd={onAdd}/>
            <QAList delOneItem={delOneItem}/>
            {
              localStorage.getItem('item') != null ? 
            <button onClick={delAll} className='btn-color w-100 my-3'>Delete All</button> : null
            }
          </Col>
        </Row>
        <ToastContainer/>
      </Container>
    </div>
  )
}

export default App
