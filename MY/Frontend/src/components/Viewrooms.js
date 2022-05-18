import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';



export default class Viewrooms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Room: ([])

        };
    }

    componentDidMount() {
        this.retrieveRoom();
    }


    retrieveRoom() {
        axios.get("http://localhost:8020/api/rooms").then(res => {
            if (res.data.success) {
                this.setState({
                    Room: res.data.data
                });

                console.log(this.state.Room)
            }


        });
    }

    
    // onDelete = (id) => {

    //     axios.delete(`http://localhost:8070/Income/idelete/${id}`).then((res) => {
    //         alert("Deleted Successfully");
    //         this.retrieveIncome();
    //     })

    // }

    filterData(Room, searchkey) {

        const result = Room.filter((Room) =>

        Room.hotel_name.includes(searchkey) ||
        Room.room_type.toLowerCase().includes(searchkey) 
        )

        this.setState({ Room: result })
    }

    handleSearchArea = (e) => {

        const searchkey = e.currentTarget.value;

        axios.get("http://localhost:8020/api/rooms").then(res => {
            if (res.data.success) {

                this.filterData(res.data.existingrooms, searchkey)

            }
        });

    }

    render() {
        return (
         <> 
            
            <div className="container">
                <NavBar/>
                
            </div>
    
            
             
            <header class="site-header sticky-top py-1">

            </header><div className="container">
                    <div className="row">
                        <div className="col-lg-9 mt-2 mb-2">
                            <h4>All Rooms</h4>
                        </div>
                        <div className="col-lg-3 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="search"
                                name="searchQuery"
                                aria-label="Search"
                                onChange={this.handleSearchArea}>

                            </input>
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Hotel Name</th>
                                <th scope="col">Room name</th>
                                <th scope="col">Room Type</th>
                                <th scope="col">No of guests can have</th>
                                <th scope="col">Price</th>
                                <th scope="col">Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Room.map((Room, index) => (
                                <tr key={index}>
                                    <th scope="row"> {index + 1}</th>
                                    <td>
                                        <a href={`/get/${Room._id}`} style={{ textDecoration: 'none' }}>


                                            {Room.hotel_name}
                                        </a>
                                    </td>
                                    <td>{Room.room_name}</td>
                                    <td>{Room.room_type}</td>
                                    <td>{Room.guests}</td>
                                    <td>Rs.{Room.price}.00</td>
                                    <td>{Room.size}</td>
                                   
                                    <td>
                                        <a className="btn btn-warning" href="/Bookrooms">
                                            <i className="fas fa-edit"></i>&nbsp;Book Now
                                        </a>
                                        
                   

                                    </td>
                                </tr>
                                
                            ))}
                        </tbody>
                    </table>
                    
                </div></>
        )
    }
}