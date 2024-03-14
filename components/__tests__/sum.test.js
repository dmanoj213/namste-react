import { sum } from "../sum";


test("carry out sum of two number",()=>
{
    const result = sum(2,3);

    //Assertion statement

    expect(result).toBe(5);
    
})
 