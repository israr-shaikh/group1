import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

function ProductList(props) {
  const [user, setUser] = useState([])
  let history = useHistory()
  useEffect(() => {
    axios
      .get("https://api.hnrretail.com/products?tags=homepage")
      .then(result => setUser(result.data.items))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
      <div class="row">
        {user.map((items, index) => (
          <div
            key={index}
            onClick={() => history.push(`/productDetail/${items.id}`)}
          >
            <table>
              <tr>
                <td>
                  {" "}
                  <img role
                    className="column"
                    src={"//" + items.images[0].url}
                   
                    height="300"
                    width="300"
                  ></img>
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
  )
}

export default ProductList
