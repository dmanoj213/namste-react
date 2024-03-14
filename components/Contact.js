const Contact = () =>
{
    return (<div>
        <h1 className="font-bold text-3xl text-center p-4 m-4">Contact us</h1>
        <form>
            <input className="font-bold border border-black m-2 p-2 " type="text" placeholder="Name"/>
            <input className="font-bold border border-black m-2 p-2 " type="email" placeholder="Email"/>
            <input className="font-bold border border-black m-2 p-2 " type="text" placeholder="Mobile No"/>
            <button className="font-bold border border-black bg-green-400 rounded-lg p-2 m-2 cursor-pointer hover:bg-slate-500 ">Submit</button>
        </form>
    </div>)
    
}

export default Contact;
