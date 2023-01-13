import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function MyForm() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
        console.log(`Form submitted with value: ${value1}`)
    }

    return (
    <Container className='roomcenter'>
        <form className="iconadder" onSubmit={handleSubmit}>
            <div className='fromto'>
                    <div className="input-icons">
                        <i className="fa fa-paper-plane icon"></i>
                        <input className="form-control input-field mb-3" 
                            type="text" 
                            placeholder='From'
                            value={value1}
                            onChange={e => setValue1(e.target.value)}
                        />
                    </div> 
                    <a>
                        <i className='fa fa-exchange rotate90 icon'></i>
                    </a>
                    <div className="input-icons">
                            <i className="fa fa-map-marker icon"></i>
                            <input className="input-field form-control mb-3" 
                            type="text" 
                            placeholder='To'
                            value={value2}
                            onChange={e => setValue2(e.target.value)}/>
                    </div>
            </div>
            <div className='fromto'> 
                    <div className='datetoselect'>
                            <input  className="input-field form-control mb-3" 
                                type="date" 
                                value={date} 
                                onChange={e => setDate(e.target.value)} 
                                min="1970-01-01"
                                max="2099-12-31"
                                placeholder="Select a date"/>
                    </div>
                    <div className='datetoselect'>
                            <Form.Select className="mb-3"aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                    </div>
            </div>
            <div className='text-center'>
                <button className="input-field btn btn-primary bnsize mb-3"  type="submit">Submit</button>
            </div>
        </form>
    </Container>
    )
}
export default MyForm;