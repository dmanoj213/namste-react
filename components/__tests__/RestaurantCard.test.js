import RestaurantCard, { withLabelOpen } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should load my RestaurantCard Component with props data",()=>
{
    //rendering

    render(<RestaurantCard resData={MOCK_DATA}/>)

    //querying

    const name = screen.getByText("Asha Tiffins");

    //assertion

    expect(name).toBeInTheDocument();
})



