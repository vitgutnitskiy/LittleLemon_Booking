import { render,screen } from '@testing-library/react';import { MemoryRouter } from 'react-router-dom';import Booking from './Booking';
test('shows booking heading and form',()=>{render(<MemoryRouter><Booking/></MemoryRouter>);expect(screen.getByRole('heading',{name:'Book a table'})).toBeInTheDocument();expect(screen.getByRole('form',{name:'Table reservation form'})).toBeInTheDocument()});
