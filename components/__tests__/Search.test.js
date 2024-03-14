import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resCardListMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";


global.fetch= jest.fn(()=>
{
   return Promise.resolve({
        json: ()=>
        {
            return Promise.resolve(MOCK_DATA);
        }
    })
});



it("should filter restaurant cards when search input is given tiffins",async ()=>
{
    await act(async()=>
    {
        render(<BrowserRouter><Body/></BrowserRouter>)
    });

    const searchbtn = screen.getByRole("button",{name:"Search"})

    expect(searchbtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "tiffins"} })

    fireEvent.click(searchbtn)

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);

})


// it("to check top rated restaurant button functionality",async ()=>
// {
//     await act(async()=>
//     {
//         render(<BrowserRouter><Body/></BrowserRouter>)
//     });

//     const cardsBeforeFilter = screen.getAllByTestId("resCard")

//     expect(cardsBeforeFilter.length).toBe(9);

//     const filterbtn = screen.getByRole("button",{name: "Top Rated Restaurant"})

//     fireEvent.click(filterbtn);

//     const cardsAfterFilter = screen.getAllByTestId("resCard");

//     expect(cardsAfterFilter.length).toBe(2);

    
// })


