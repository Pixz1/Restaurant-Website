// imports
import { Form, Button, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Reservation()
{
    // Date and time states
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const today = new Date();
    
    // Form field states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [diners, setDiners] = useState('1');

    // Submit & Alert
    const [showAlert, setShowAlert] = useState(false);
    const [showDtAlert, setShowDtAlert] = useState(false);
    const handleSubmit = (event) =>
    {
        event.preventDefault();

        if (startDate && startTime)
        {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
            setName('');
            setEmail('');
            setDiners('1');
            setStartDate(null);
            setStartTime(null);
        }
        else
        {
            setShowDtAlert(true);
            setTimeout(() => setShowDtAlert(false), 2000);
        }
    };

    return (
        <section className="reservation-section">
            <div className="reservation">
                <div className="form">
                    <div className="form-content">
                        <h1>Reservation Details</h1>
                        <hr className="form-divider"/>
                        <Form 
                            className='forms'
                            onSubmit={handleSubmit}
                        >
                            <Form.Group className='mb-3' controlId='formName'>
                                <Form.Control 
                                    required
                                    type='text' 
                                    placeholder='Name for the reservation'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ width: '420px' }}
                                    className='text-center'
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formEmail'>
                                <Form.Control 
                                    required
                                    type='email' 
                                    placeholder='Email address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ width: '420px' }}
                                    className='text-center'
                                />
                            </Form.Group>
                            <Form.Group className='mb-3 d-flex align-items-center' controlId='formDiners'>
                                <Form.Label className='label me-2'>Number of Diners:</Form.Label>
                                <Form.Select 
                                    aria-label='Default select example'
                                    className='select-diners'
                                    value={diners}
                                    onChange={(e) => setDiners(e.target.value)}
                                >
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                </Form.Select>
                            </Form.Group>
                            <div className='date-time-row'>
                                <Form.Group className='mb-3' controlId='formDate'>
                                    <Form.Label>Date:</Form.Label>
                                    <DatePicker className='date'
                                        selected={startDate}
                                        minDate={today}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat='dd/MM/yyyy'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='formTime'>
                                    <Form.Label>Time:</Form.Label>
                                    <DatePicker className='time'
                                        selected={startTime}
                                        onChange={(date) => setStartTime(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={30}
                                        timeCaption='Time'
                                        dateFormat='h:mm aa'
                                    />
                                </Form.Group>
                            </div>
                            {showDtAlert && (
                                <Alert variant='danger' onClose={() => setShowDtAlert(false)} dismissible>
                                    You need to select both date and time
                                </Alert>
                            )}
                            <Button 
                                type='submit'
                                className='book-btn m-3'
                            >
                                Confirm Booking
                            </Button>
                            {showAlert && (
                                <Alert variant='success' onClose={() => setShowAlert(false)} dismissible>
                                    Your booking was successful!
                                </Alert>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}