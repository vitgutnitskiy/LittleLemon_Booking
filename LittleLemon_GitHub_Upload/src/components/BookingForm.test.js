import { render,screen,fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm,{validateBooking} from './BookingForm';
import { fetchAPI } from '../api';
const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
test('renders labeled booking controls',()=>{render(<MemoryRouter><BookingForm/></MemoryRouter>);expect(screen.getByLabelText('Choose a date')).toBeInTheDocument();expect(screen.getByLabelText('Email address')).toBeInTheDocument();expect(screen.getByRole('button',{name:'Confirm reservation'})).toBeInTheDocument()});
test('displays required-field errors',()=>{render(<MemoryRouter><BookingForm/></MemoryRouter>);fireEvent.click(screen.getByRole('button',{name:'Confirm reservation'}));expect(screen.getByText('Enter your name.')).toBeInTheDocument();expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument()});
test('accepts valid booking values',()=>{const date=today();const time=fetchAPI(date)[0];expect(validateBooking({date,time,guests:'2',name:'Alex',email:'alex@example.com'},fetchAPI(date))).toEqual({})});
test('rejects invalid guest counts and unavailable times',()=>{const date=today();const errors=validateBooking({date,time:'12:00',guests:'12',name:'Alex',email:'alex@example.com'},fetchAPI(date));expect(errors.time).toBeTruthy();expect(errors.guests).toBeTruthy()});
