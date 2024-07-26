import Application from "./application";
import { render,screen } from "@testing-library/react";
describe("Application",()=>{
    test("renders correctly",()=>{
        render(<Application/>)

        const paragraphText=screen.getByText("All Fields Are Mandatory")
        expect(paragraphText).toBeInTheDocument()

        const jobHeading=screen.getByRole('heading',{
            level:1
        })
        expect(jobHeading).toBeInTheDocument()

        const sectionHeading=screen.getByRole('heading',{
            level:2
        })
        expect(sectionHeading).toBeInTheDocument()

        const titleElement=screen.getByTitle('close')
        expect(titleElement).toBeInTheDocument()

        const customElement=screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()
        //check element by role
        const textBoxElement=screen.getByRole('textbox',{
            name:"Name"
        })
        expect(textBoxElement).toBeInTheDocument()
        //ckeck element by label text
        const textBoxElement1=screen.getByLabelText("Name")
        expect(textBoxElement1).toBeInTheDocument()
        //check element by label text and selector
        const textBoxElement2=screen.getByLabelText("Name",{
          selector:"input"
        })
        expect(textBoxElement2).toBeInTheDocument()
        //check checkbox element by label text
        const textBoxElement3=screen.getByLabelText("I agree to the terms & conditions")
        expect(textBoxElement3).toBeInTheDocument()
        //check by value   
        const textBoxElement4=screen.getByDisplayValue("viswas")
        expect(textBoxElement4).toBeInTheDocument()
       //Check images by alt 
       const imageElement=screen.getByAltText("image")
       expect(imageElement).toBeInTheDocument()

        const bioElement=screen.getByRole("textbox",{
            name:"Bio"
        })
        expect(bioElement).toBeInTheDocument()

        const comboBoxElement=screen.getByRole('combobox')
        expect(comboBoxElement).toBeInTheDocument()

        const checkBoxElement=screen.getByRole("checkbox")
        expect(checkBoxElement).toBeInTheDocument()

        const submitButton=screen.getByRole("button")
        expect(submitButton).toBeInTheDocument()
    })
})