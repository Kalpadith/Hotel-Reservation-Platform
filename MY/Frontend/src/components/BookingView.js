import React, { Component } from 'react';
import axios from 'axios';
//import {BrowserRouter,Route} from 'react-router-dom';
export default class BookingView extends Component{
  constructor(props){
    super(props);

    this.state={
      bookrooms:([])
    };
  }

  componentDidMount(){
    this.retrivebookrooms();
  }

  retrivebookrooms(){
    axios.get("http://localhost:8020/bookroom/getbookrooms").then(res =>{
      if(res.data.success){
        this.setState({
          bookrooms:res.data.existingbookrooms
        });

        console.log(this.state.bookrooms)

      }
    })
  }


//   onDelete =(id) =>{
//     axios.delete(`http://localhost:8020/bookrooms/delete/${id}`).then((res) =>{
//       alert("bookrooms deleted Successfully");
//       this.retrivebookrooms();
//     })
//   }

//   filterData(bookrooms,searchKey) {

//     const result = bookrooms.filter((bookrooms) =>
//     bookrooms.bookrooms_name.toLowerCase().includes(searchKey) ||
//     bookrooms.requested_supervisor.toLowerCase().includes(searchKey)
//         //bookrooms.Address.toLowerCase().includes(searchkey) ||
//         //.Gender.toLowerCase().includes(searchkey)
//     )

//     this.setState({bookrooms:result})
// }

handleSearchArea = (e) => {

  //console.log(e.currentTarget.value);

    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8020/bookrooms").then(res => {
        if (res.data.success) {

            this.filterData(res.data.existingbookrooms,searchKey)

        }
    });

}


  render(){
    return(
      <div className="container">
       
              <div className="row">
                        <div className="col-lg-9 mt-2 mb-2">
                            <h4>Hotel Bookings</h4>
                        </div>
                    </div>
        



       <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">From Date</th>
             <th scope="col">To Date</th>
             <th scope="col">Full Name</th>
             <th scope="col">Phone Number</th>
             <th scope="col">NIC</th>
             <th scope="col">Address</th>
             <th scope="col">Email</th>
            
           </tr>
         </thead>
         <tbody>
           {this.state.bookrooms.map((bookrooms,index) => (
             <tr key={index}>
               <th scope="row">{index+1}</th>
               <td>{bookrooms.from_date}</td>
               <td>{bookrooms.to_date}</td>
               <td>{bookrooms.full_name}</td>
               <td>{bookrooms.phone_number}</td>
               <td>{bookrooms.nic}</td>
               <td>{bookrooms.address}</td>
               <td>{bookrooms.email}</td>
              
             </tr>
           ))}
         </tbody>
       </table>
       

      </div>
    )
  }
}