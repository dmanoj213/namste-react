import React from "react";

export class UserClass extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            Count : 0,
            
        }
        console.log("Child Constructor")
    }

    componentDidMount()
    {
        console.log("child ComponentDidMount()")
    }
     render()
     {
        const {name,place,Designation} = this.props;
        
        const {Count} = this.state;
        console.log("Child Render")
        return (
            <div className="user-container">
            <h1>Count: {Count}</h1>
            <button onClick={
                ()=>
                {
                    this.setState({
                        Count : this.state.Count +1,
                        
                    })
                }
            }>Increase Count</button>
            <h2>Name : {name}</h2>
            <h3>Location: {place}</h3>
            <h4>Designation: {Designation}</h4>

        </div> 
        )
     }
    }



