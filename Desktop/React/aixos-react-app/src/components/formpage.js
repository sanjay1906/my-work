import React from 'react'

  const Formpage= (props) => {
        return (
            <div>
                <form onSubmit={props.getUser}>
                    <input type="text" style={{margin:"20px auto",width: "20vh",display:"block"}} name="username"/>
                    <button className="btn">submit</button>
                </form>
            </div>
        )
    }

export default Formpage;