// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   let products;

//   useEffect (() => {
//     axios.get('https://dummyjson.com/products')
//       .then((data) => {
//         products = data.data.products;

//         console.log(products);
//       })
//   }, []);

//   useEffect(() => {
//     console.log('form data update', formData);
//   }, [formData]);

//   function handleSubmit (e) {
//     e.preventDefault();

//     console.log(formData);

//     console.log('Registration successfull');

//     setFormData({
//       name: "",
//       email: "",
//       password: ""
//     });
//   }

//   function handleChange (e) {
//     const {name, value} = e.target;
//     setFormData({
//       ...formData, 
//       [e.target.name]: e.target.value
//     });
//   }

//   return (
//     <div>
//       <div className="productsList">
//         {products.map((product) => (
//         <p key={product.id}>{product.title}</p>
//       ))}
//       </div>

//       <form action="">
//         <input type="text" name="name" placeholder="enter name" value={formData.name} onChange={handleChange} />
//         <br/>
//         <input type="text" name="email" placeholder="enter email" value={formData.email} onChange={handleChange} />
//         <br/>
//         <input type="text" name="password" placeholder="enter password" value={formData.password} onChange={handleChange} />
//         <br/>
//         <button onClick={handleSubmit} >Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import { useRef, useState } from "react";

function App () {
  const box = useRef(0);
  // const [val, setVal] = useState(0);
  const update = () => {
    box.current = 1000;
    // setVal(1000);
    console.log("update: ", box.current);
    console.log(box);
  }

  return (
    <div>
      <button onClick={update}> Update ! </button>
      <p>{box.current}</p>

    </div>
  );
}


export default App;