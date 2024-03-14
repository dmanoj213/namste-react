import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ItemList from "../ItemList";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn(()=>
{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should load my Restaurant menu component",async()=>
{
    await act(async ()=>
    {
        render(
    <BrowserRouter>
      <Provider store={appStore}>
         <Header/>
         <RestaurantMenu/>
         <Cart/>
         
      </Provider>
    </BrowserRouter>)
        
    })

    const accordianHeader = screen.getByText("Recommended (17)");
    
    fireEvent.click(accordianHeader);

    const fooditems = screen.getAllByTestId("fooditems");

    expect(fooditems.length).toBe(17);

    const addbtns = screen.getAllByRole("button",{name: "Add +"})

    fireEvent.click(addbtns[0]);

    const cartheading = screen.getByText("Cart- (1)");

    expect(cartheading).toBeInTheDocument();

    fireEvent.click(addbtns[1]);

    const cartheading2 = screen.getByText("Cart- (2)");

    expect(cartheading2).toBeInTheDocument();

    const cartitems = screen.getAllByTestId("fooditems");

    expect(cartitems.length).toBe(19);

    const clearcartbtn = screen.getByRole("button",{name: "Clear Cart"})

    fireEvent.click(clearcartbtn);

    const clearcartitems = screen.getAllByTestId("fooditems");

    expect(clearcartitems.length).toBe(17);

})
