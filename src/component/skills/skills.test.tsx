import { render,screen } from "@testing-library/react";
import Skills from "./skills";
describe('Skills',()=>{
    const skills=['HTML','CSS','JAVA SCRIPT']

    test('renders correctly',()=>{
        render(<Skills skills={skills}/>)
        const listElement=screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })
    test('renders a list of skills',()=>{
        render(<Skills skills={skills}/>)
        const listElements=screen.getAllByRole('listitem') 
        expect(listElements).toHaveLength(skills.length)
    })
    test('renders login button',()=>{
        render(<Skills skills={skills}/>)
        const buttonElement=screen.getByRole('button',{
            name:'Login'
        })
        expect(buttonElement).toBeInTheDocument()
    })
    test('Start learning button is not rendered',()=>{
        render(<Skills skills={skills}/>)
        const startButtonElement=screen.queryByRole('button',{
            name:'Start Learning'
        })
        expect(startButtonElement).not.toBeInTheDocument()
    })
    test('Start learning button is not rendered',async()=>{
        render(<Skills skills={skills}/>)
        const startButtonElement=await screen.findByRole('button',{
            name:'Start Learning'
        })
        expect(startButtonElement).toBeInTheDocument()
    })
})