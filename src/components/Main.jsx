import React from "react";

const Main= () =>{
    return(
      <div><center>
      <label for="name">Email Id: &emsp;</label>
              <input  id="name" type="box" placeholder="Email ID"></input>
           <br>
           </br>
               <label for="na">Password: &emsp;</label>
             <input id="na" type="box" placeholder="Password"></input>
           <br>
           </br>
               <label for="n">Submit: &emsp;</label>
            <input id="n" type="box" placeholder="click"></input>
            <br>
            </br>
        <button>

          Submit
        </button>
      </center>
        </div>
    );
};

export default Main;