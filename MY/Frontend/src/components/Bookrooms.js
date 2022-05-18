import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';


export default class Bookrooms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            from_date: "",
            to_date: "",
            full_name: "",
            phone_number: "",
            nic: "",
            address: "",
            email: "",
            from_dateError: "",
            to_dateError: "",
            full_nameError: "",
            phone_numberError: "",
            nicError: "",
            addressError: "",
            emailError: ""
        }
    }


    validate = () => {

        let from_dateError = "";
        let to_dateError = "";
        let full_nameError = "";
        let phone_numberError = "";
        let nicError = "";
        let addressError = "";
        let emailError = "";

        if (!this.state.from_date) {
            from_dateError = "Date cannot be blank"
        }
        if (!this.state.to_date) {
            to_dateError = "Date cannot be blank"
        }
        if (!this.state.full_name) {
            full_nameError = "Name cannot be blank"
        }
        if (!this.state.phone_number) {
            phone_numberError = "Phone Number cannot be blank"
        }
        if (!this.state.nic) {
            nicError = "NIC cannot be blank"
        }
        if (!this.state.address) {
            addressError = "Address cannot be blank"
        }
        if (!this.state.email ) {
            emailError = "Email cannot be blank"
        }


        if (from_dateError || to_dateError || full_nameError || nicError || addressError || emailError) {
            this.setState({ from_dateError, to_dateError, full_nameError, phone_numberError, nicError, addressError, emailError });
            return false;
        }

        return true;
    };


    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            const { from_date, to_date, full_name, phone_number, nic, address, email } = this.state;

            const data = {
                from_date: from_date,
                to_date: to_date,
                full_name: full_name,
                phone_number: phone_number,
                nic: nic,
                address: address,
                email: email
            }

            console.log(data)


            axios.post("http://localhost:8020/api/book/bookrooms", data).then((res) => {
                if (res.data.success) {
                    this.setState({
                        from_date: "",
                        to_date: "",
                        full_name: "",
                        phone_number: "",
                        nic: "",
                        address: "",
                        email: "",
                        from_dateError: "",
                        to_dateError: "",
                        full_nameError: "",
                        phone_numberError: "",
                        nicError: "",
                        addressError: "",
                        emailError: ""
                    })
                }
            })
        }
    }

    render() {
        return (

            <>

                <div className="container">
                    <NavBar />

                </div>
           
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Book Room</h1>
                    <form className="needs-validation" novalidate>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>From Date</label>
                            <input type="date"
                                className="form-control"
                                name="from_date"
                                placeholder="From Date"
                                value={this.state.from_date}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.from_dateError}
                            </div>

                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>To Date</label>
                            <input type="date"
                                className="form-control"
                                name="to_date"
                                placeholder="Enter to date"
                                value={this.state.to_date}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.to_dateError}
                            </div>
                        </div>


                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Type</label>
                            <select type="text" className="form-control" name="Income_Type" placeholder="Select a type" onChange={this.handleInputChange}>
                                <option disabled selected="true">--Select Room Type--</option>
                                <option type="text" className="form-control" value="raw materials"  >Luxary</option>
                                <option type="text" className="form-control" value="contract" >Delux </option>
                                <option type="text" className="form-control" value="transport" >Standard</option>
                                <option type="text" className="form-control" value="other"   >Single</option>
                            </select>
                            <div style={{ color: "red" }}>
                                {this.state.TypeError}
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Full Name</label>
                            <input type="text"
                                className="form-control"
                                name="full_name"
                                placeholder="Enter full name"
                                value={this.state.full_name}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.full_nameError}
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Phone Number</label>
                            <input type="number"
                                className="form-control"
                                name="phone_number"
                                placeholder="Enterphone number"
                                value={this.state.tophone_number_date}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.phone_numberError}
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>NIC</label>
                            <input type="text"
                                className="form-control"
                                name="nic"
                                placeholder="Enter NIC"
                                value={this.state.nic}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.nicError}
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Address</label>
                            <input type="text"
                                className="form-control"
                                name="address"
                                placeholder="Enter Address"
                                value={this.state.address}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.addressError}
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>E mail</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.emailError}
                            </div>
                        </div>

                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Submit
                        </button>
                        <br></br>
                        <button className="btn btn-success"><a href="/payment" style={{ textDecoration: 'none', color: 'white' }}>Payment</a></button>
                        <br></br>
                        <button className="btn btn-success"><a href="/Taxi" style={{ textDecoration: 'none', color: 'white' }}>Taxi</a></button>
                    </form>

                </div></>
        )
    }
}



