import React, { Component } from 'react';
import Compnents from "./Compnents/Componets";
import Newcomp from "./Compnents/Newcomp";


import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
// import  "materialize-css/dist/c/ss/materialize.min.css";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e =>{
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e =>{
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
      
    const updatedItems = [...this.state.items, newItem];
      
      this.setState({
        items:updatedItems,
        item: "",
        id: uuid(),
        editItem: false
    });
};
clearList = ()=> {
  this.setState({
    items :[]
  })
}
handleDelete = id =>{
  const filteredItems = this.state.items.filter(item => item.id !== id);
  this.setState({
    items:filteredItems
  });
};
handleEdit = id =>{
  const filteredItems = this.state.items.filter(item => item.id !== id);
  const selectedItems = this.state.items.find(item => item.id ===id);
  console.log(selectedItems); 
  this.setState({
    items:filteredItems,
    item:selectedItems.title,
    editItem: true,
    id:id
  });
};
  render() {
    return (  
      <div className="container">
       <div className="row">
       <div className="col-10 mx-auto col-md-8 mt-4">
       <h3 className="text-capitalize text-center">todo input</h3>
       <Compnents item={this.state.item}
                             handleChange={this.handleChange}
                             handleSubmit={this.handleSubmit}
                             editItem={this.state.editItem} />

        <Newcomp items={this.state.items}
                            clearList ={this.clearList}
                            handleDelete = {this.handleDelete}
                            handleEdit = {this.handleEdit} />
      
       </div>
      </div>
       
      </div>
    );
  }
}
export default App;




// import React from 'react';
// import './App.css';
// import Newcomp = from "./Newcomp";

// function App() {
//   return (
//     <div>
//       <h1>chal bhag yaha se</h1>
//     </div>
//   );
// }

