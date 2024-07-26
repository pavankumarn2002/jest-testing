import { render, screen } from '@testing-library/react';
import Counter from './counter';
describe("counter",()=>{
    test("Counter renders Correctly",()=>{
        render(<Counter/>)
        const headingElement=screen.getByRole('heading',{
            name:'Counter'
        })
        expect(headingElement).toBeInTheDocument()
        const incrementElement=screen.getByRole('button',{
            name:'Increment'
        })
        expect(incrementElement).toBeInTheDocument()
    })
    test('counter renders a count of 0',()=>{
        render(<Counter/>)
        const headingElement=screen.getByRole('heading',{
            name:'0'
        })
        expect(headingElement).toHaveTextContent('0')
    })
})