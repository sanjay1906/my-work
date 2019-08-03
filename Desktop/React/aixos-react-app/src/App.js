import React,{Component} from 'react';
import './App.css';
import Formpage from "./components/formpage";
import Userdetails from "./components/uderdetails";
import Axios from 'axios';
import "../node_modules/materialize-css/dist/css/materialize.min.css";

class App extends Component  {

  state = {
    gitUser:null
  }

  getUser = (e)=> {
   e.preventDefault();
   const user = e.target.elements.username.value;
   if (user) {
    Axios.get(`https://api.github.com/users/${user}`)
    .then((data)=>{
      const gitUser = data.data;
     this.setState({ gitUser });
     console.log(gitUser);
    })
   }else return;
  }
render (){
  return (
    <div className="App">
      <header className="App-header">
          <p>Git User</p>
      </header>
      <Formpage getUser={this.getUser}/>
      <Userdetails gitUser={this.state.gitUser} />
    </div>
  );
}
}

export default App;


