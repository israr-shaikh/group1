import React, { useState ,useEffect} from "react";
//import data from "./data";
import axios from "axios";
import Header from "./header";






function ProductList(props) {
  const [user, setUser] = useState([]);
  


  
  useEffect(() => {
    axios
      .get("https://api.hnrretail.com/products?tags=homepage")
      .then((result) => setUser(result.data.items))
      .catch((err) => console.log(err));
      
     
  },[]);
  
 
//console.log(user)
  return (
    
    <div>
    <Header/>
    <div class="row">
      
    {user.map((items ,index) => (
       
        <div key={index} >
        
        <table> 
          <tr>
         <td> <img className="column" src={"//"+items.images[0].url} height="300" width="300"  ></img>
          <br></br>
          <br></br>
          <div class="productname">{items.name.en}></div>
          <br></br>
          <br></br>
          </td>
          </tr>
          </table>
        </div>
      ))}
    </div>
    </div>
   
  );
  
}

export default ProductList;