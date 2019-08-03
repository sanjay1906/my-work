import React from 'react'
import "../App.css";

const Userdetails = (props) => {
    return (
<div>
    {props.gitUser ?
<div className="col s12 m4">
    <h2 className="header">{props.gitUser.login}</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img src={props.gitUser.avatar_url} alt={props.gitUser.name} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h5>Name :-{props.gitUser.name}</h5>
          <h5>Biodata :-  {props.gitUser.bio}</h5>
          <h5>Repositories :-{props.gitUser.public_repos}</h5>
          <h5>Followers :-{props.gitUser.followers}</h5>
          <h5>Location :-{props.gitUser.location}</h5>
        </div>
        <div className="card-action">
          <a href={props.gitUser.html_url}>{props.gitUser.html_url}</a>
        </div>
      </div>
    </div>
  </div>
  :
   <h4>please enter your username.</h4> }
  </div>
        )
    }
export default Userdetails;
