import { render,screen,fireEvent } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Header from "../Header";
import "@testing-library/jest-dom";

it("Check whether Header component has login button",()=>
{
    //rendering
    render(<BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
       </BrowserRouter>);
    

    //querying
    const loginbutton = screen.getByRole("button",{name: "Login"});

    //assertion

    expect(loginbutton).toBeInTheDocument();


    
    
})

it("Check whether Header component has cart-(0) items",()=>
{
    //rendering
    render(<BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
       </BrowserRouter>);
    

    //querying
    const cart = screen.getByText("Cart- (0)");

    //assertion

    expect(cart).toBeInTheDocument();


    
    
})

it("Check whether when I click login button it has to change to logout",()=>
{
    //rendering
    render(<BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
       </BrowserRouter>);
    

    //querying
    const loginbutton = screen.getByRole("button",{name: "Login"});

    fireEvent.click(loginbutton); 

    const logoutbutton = screen.getByRole("button",{name: "Logout"});

    //assertion

    expect(logoutbutton).toBeInTheDocument();


    
    
})


