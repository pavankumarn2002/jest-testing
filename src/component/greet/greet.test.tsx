import { render, screen } from '@testing-library/react';
import Greet from './greet';
describe("Greet",()=>{
    test("Greet renders Correctly",()=>{
        render(<Greet/>)
        const item=screen.getByText(/Greet/i)
        expect(item).toBeInTheDocument()
    })
    test("Greet renders name",()=>{
        render(<Greet name='viswas'/>)
        const item=screen.getByText(/Greet Viswas/i)
        expect(item).toBeInTheDocument()
    })
})
