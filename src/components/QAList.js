import React from 'react'
import { Accordion, Row } from 'react-bootstrap'
import { questions } from '../data';

function QAList({delOneItem}) {
    const dataLocal = JSON.parse(localStorage.getItem('item'));

    const delItem = (ID) => {
        if(localStorage.getItem('item') != null) {
            const index =questions.findIndex((item) => item.id === ID);
            questions.splice(index,1);
            delOneItem(questions);
        }
    }

  return (
    <Row>
      {
        localStorage.getItem('item') !=null ? (
            dataLocal.map((item,index) => {
                return (
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={item.id} key={index}>
                      <Accordion.Header>
                        <div className='mx-4'>{item.q}</div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className='d-flex justify-content-between'>
                          <div className='px-3 py-1 '>{item.a}</div>
                          <button onClick={() =>delItem(item.id)} className='btn-color'>Del</button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                )
            })
        )
         : <h2 className='text-center'>not found questions</h2>
      }
    </Row>
  )
}

export default QAList
