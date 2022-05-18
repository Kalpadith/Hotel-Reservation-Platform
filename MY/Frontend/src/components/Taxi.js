import React from 'react'
const Taxi = () => {
return (
<div className="container contact">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Get Taxi</h1>
                <div className="form-group my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="Name" required />
                        </div>
                        
                        <div className="col-md-6 col-12 mx-auto my-2">
                           <select type="text" className="form-control-lg" name="Taxi Type" placeholder="Select a type">
                               <option disabled selected = "true">--Select a Taxi type--</option>
                               <option type="text" className="form-control-lg"value= "Tuk"  >Tuk</option>
                               <option type="text" className="form-control-lg" value="Nano" >Nano </option>
                               <option type="text" className="form-control-lg" value="Mini" >Mini</option>
                               <option type="text" className="form-control-lg"value= "City"  >City</option>
                               <option type="text" className="form-control-lg" value="Sedan" >Sedan </option>
                               <option type="text" className="form-control-lg" value="Mini Van" >Mini Van</option>
                               <option type="text" className="form-control-lg" value="Van Non A/c"   >Van Non A/c</option>
                               <option type="text" className="form-control-lg"value= "Van Dual A/c"  >Van Dual A/c</option>
                               <option type="text" className="form-control-lg" value="Batta Lorry" >Batta Lorry </option>
                               <option type="text" className="form-control-lg" value="Lorry" >Lorry</option>
                               <option type="text" className="form-control-lg" value="Movers"   >Movers</option>
                               </select></div>

                    </div></div>

                <div className="form-group my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="Pick Up" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="Drop" required />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="date" className="form-control-lg" placeholder="date" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="time" className="form-control-lg" placeholder="time" required />
                        </div>
                        
                    </div>
                </div>

                <div className="form-group mb-5"><div className="row">
                <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="number" className="form-control-lg" placeholder="Phone no." required />
                        </div></div>
                </div>
        
                <div className="mt-5 col-md-6 col-12 mx-auto">
                    <button className="btn btn-outline-dark btn-lg btn-block">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Taxi