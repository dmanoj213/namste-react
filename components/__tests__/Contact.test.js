import { render } from "@testing-library/react";
import Contact from "../Contact";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test cases of Contact us page", ()=>
{
    it("Check whether contact page is loaded successfully",()=>
    {
        //rendering 
        render(<Contact/>)
    
        //querying
    
        const heading = screen.getByRole("heading");
    
        //assertion
    
        expect(heading).toBeInTheDocument();
        
    })
    
    it("check whether the butoon submit is loaded", ()=>
    {
         //rendering
         render(<Contact/>)
    
         //querying
    
         const button = screen.getByRole("button");
    
         //assertion
    
         expect(button).toBeInTheDocument();
    })
    
    it("to check all input boxes is loaded", () =>
    {
        //redndering
    
        render(<Contact/>)
    
        //querying
    
        const inputboxes = screen.getAllByRole("textbox");
    
        console.log(inputboxes.length);
    
        //assertion
    
        expect(inputboxes.length).toBe(3);
    
    }
    )
    
})
