import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HyperLinks from '../HyperLinks';

test('hyperlink Home is displayed', ()=>{
    render(<BrowserRouter><HyperLinks/></BrowserRouter>);
    expect(screen.getByText('Home')).toBeInTheDocument();
});