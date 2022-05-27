import React from 'react'
const payment = () => {
return (
<div className="container contact">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Make Payment</h1>
                <div className="form-group my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="Name" required />
                        </div>
                        
                        <div className="col-md-6 col-12 mx-auto my-2">
                           <select type="text" className="form-control-lg" name="Taxi Type" placeholder="Select a type">
                               <option disabled selected = "true">--Select a Card type--</option>
                               <option type="text" className="form-control-lg"value= "Visa"  >Visa</option>
                               <option type="text" className="form-control-lg" value="Master Card" >Master Card </option>
                               <option type="text" className="form-control-lg" value="American Express" >American Express</option>
                               
                               </select></div>

                    </div></div>

                <div className="form-group my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="Card Holder's Name" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="number" className="form-control-lg" placeholder="Card Number" required />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="number" className="form-control-lg" placeholder="CVC" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="date" className="form-control-lg" placeholder="Expire Date" required />
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
                    <button className="btn btn-outline-dark btn-lg btn-block" href="https://www.paypal.com/examplecode/ExampleButtonID">Pay Via pay Pal</button>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post"> 
                {/* <!-- Identify your business so that you can collect the payments. -->  */}
                <input type="hidden" name="business" value="herschelgomez@xyzzyu.com"/> 
                {/* <!-- Specify a Buy Now button. -->  */}
                <input type="hidden" name="cmd" value="_xclick"/> 
                {/* <!-- Specify details about the item that buyers will purchase. --> */}
                 <input type="hidden" name="item_name" value="Hot Sauce-12oz. Bottle"/>
                 <input type="hidden" name="amount" value="5.95"/>
                 <input type="hidden" name="currency_code" value="USD"/> 
                 {/* <!-- Display the payment button. --> */}
                  <input type="image" name="submit" border="0" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" alt="Buy Now"/> 
                  <img alt="" border="0" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" /> 
                 </form>
                </div>
               
            </div>
        </div>
    </div>
    
</div>

)
}
export default payment