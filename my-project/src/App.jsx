// import React, { useEffect, useState } from "react";

// function App() {
//   const [page, setPage] = useState("home");

//   const products = [
//     { id: 1, name: "BAT", img: "https://media.gettyimages.com/id/1943379961/photo/adelaide-australia-a-bat-is-pictured-leaning-on-the-stumps-before-start-of-play-during-day.jpg?s=612x612&w=0&k=20&c=Yq4azYYJSOWGTMkTH2lWVPOIHl1TOD6iLlvtXESt1nQ=" },
//     { id: 2, name: "BALL", img: "https://images.stockcake.com/public/2/7/9/279e6f7a-dde6-4eb3-87e0-76b672b43072_large/cricket-ball-impact-stockcake.jpg" },
//     { id: 3, name: "STUMPS", img: "https://www.shutterstock.com/image-photo/cinematic-ultradetailed-closeup-dramatic-cricket-600nw-2615867903.jpg" },
//     { id: 4, name: "GLOVES", img: "https://media.istockphoto.com/id/1469972662/photo/cricket-gloves.jpg?s=612x612&w=0&k=20&c=4gN8dmWnCOrihIqTTb5M5KoKk_Tnj9P6pJ104jgR7H4=" }
//   ];

//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   const addToCart = (p) => {
//     if (!cart.find((x) => x.id === p.id)) {
//       setCart([...cart, p]);
//     }
//   };

//   const addToWishlist = (p) => {
//     if (!wishlist.find((x) => x.id === p.id)) {
//       setWishlist([...wishlist, p]);
//     }
//   };

//   return (
//     <div style={{ padding: "30px" }}>

//       {}
//       <div style={{ marginBottom: "20px" }}>
//         <button onClick={() => setPage("home")}>Home</button>
//         <button onClick={() => setPage("cart")} style={{ marginLeft: "10px" }}>
//           Cart ({cart.length})
//         </button>
//         <button onClick={() => setPage("wishlist")} style={{ marginLeft: "10px" }}>
//           Wishlist ({wishlist.length})
//         </button>
//       </div>

//       {}
//       {page === "home" && (
//         <div
//           style={{
//             display: "flex",
//             gap: "30px",
//             overflowX: "auto",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {products.map((p) => (
//             <div
//               key={p.id}
//               style={{
//                 width: "150px",
//                 padding: "10px",
//                 background: "white",
//                 boxShadow: "0px 0px 8px #ccc",
//                 borderRadius: "10px",
//                 textAlign: "center",
//               }}
//             >
//               <img src={p.img} alt={p.name} width="120" height="120" />
//               <h4>{p.name}</h4>
//               <button onClick={() => addToCart(p)}>Add to Cart</button>
//               <br /><br />
//               <button onClick={() => addToWishlist(p)}>Wishlist</button>
//             </div>
//           ))}
//         </div>
//       )}

//       {}
//       {page === "cart" && (
//         <div>
//           <h2>Cart Items</h2>
//           {cart.length === 0 ? (
//             <p>No items added</p>
//           ) : (
//             cart.map((c) => (
//               <div
//                 key={c.id}
//                 style={{
//                   margin: "10px 0",
//                   padding: "10px",
//                   display: "flex",
//                   gap: "20px",
//                   alignItems: "center",
//                   border: "1px solid gray",
//                   borderRadius: "8px",
//                 }}
//               >
//                 <img src={c.img} alt="" width="80" />
//                 <strong>{c.name}</strong>
//               </div>
//             ))
//           )}
//         </div>
//       )}

//       {}
//       {page === "wishlist" && (
//         <div>
//           <h2>Wishlist Items</h2>
//           {wishlist.length === 0 ? (
//             <p>No wishlist items</p>
//           ) : (
//             wishlist.map((w) => (
//               <div
//                 key={w.id}
//                 style={{
//                   margin: "10px 0",
//                   padding: "10px",
//                   display: "flex",
//                   gap: "20px",
//                   alignItems: "center",
//                   border: "1px solid gray",
//                   borderRadius: "8px",
//                 }}
//               >
//                 <img src={w.img} alt="" width="80" />
//                 <strong>{w.name}</strong>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function Home() {
//   return <h2>Hello from Home Component!</h2>;
// }

// function App() {
//   const [count, setCount] = useState(true);

//   useEffect(() => {
//     console.log("from useEffect in home");

//     return () => {
//       console.log("removed Home");
//     };
//   }, [count]);

//   return (
//     <div>
//       {count ? <Home /> : "removed"}
//       <button onClick={() => setCount(false)}>Remove</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function Home() {
//   return <h2>Hello from Home Component!</h2>;
// }

// function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [running, setRunning] = useState(true);

//   // Format seconds into hh:mm:ss
//   const format = (s) => {
//     let b = Math.floor(s / 3600);
//     let g = Math.floor((s % 3600) / 60);
//     let h = Math.floor((s % 3600) % 60);
//     return `${b}:${g}:${h}`;
//   };

//   // Effect for the clock
//   useEffect(() => {
//     if (!running) return; // pause if not running

//     const timer = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     console.log("from useEffect in home");

//     return () => {
//       clearInterval(timer);
//       console.log("removed Home");
//     };
//   }, [running]);

//   return (
//     <div>
//       <div>{format(seconds)}</div>
//       <Home />
//       <button onClick={() => setRunning(!running)}>
//         {running ? "Pause Clock" : "Resume Clock"}
//       </button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

function App() {
  
  const [showLogin, setShowLogin] = useState(false);


  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      alert("Please Fill All Register Fields First");
      return;
    }
    alert("Registered Successfully!");
    setShowLogin(true); 
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      loginEmail.trim() === regEmail.trim() &&
      loginPassword === regPassword
    ) {
      alert("Login Success!");
    } else {
      alert("Login Failed: Wrong Email or Password Try Again");
    }
  };  

  const inputStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    marginBottom: "10px",
    outline: "none",
  };

  const buttonStyle = {
    padding: "8px",
    marginTop: "10px",
    color: "skyblue",
    backgroundColor: "Black",
    border: "none",
    cursor: "pointer",
  };

  if (!showLogin) {
    return (
      <div style={{ maxWidth: "300px", margin: "20px auto" }}>
        <h3>Register</h3>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column" }}>
          <label>Name:</label>
          <input
            type="text"
            style={inputStyle}
            value={regName}
            onChange={(e) => setRegName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            style={inputStyle}
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            style={inputStyle}
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
          />

          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          Already have account?{" "}
          <button type="button" onClick={() => setShowLogin(true)}>
            Go to Login
          </button>
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h3>Login</h3>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
        <label>Email:</label>
        <input
          type="email"
          style={inputStyle}
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          style={inputStyle}
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        New user?{" "}
        <button type="button" onClick={() => setShowLogin(false)}>
          Go to Register
        </button>
      </p>
    </div>
  );
}

export default App;
















// import React, { useState } from "react";

// function SimpleForm() {
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");

//   const isMobileValid = mobile.length === 10;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const isEmailValid = emailRegex.test(email);

//   const inputStyle = (valid) => ({
//     border: "2px solid",
//     borderColor: valid ? "green" : "red",
//     padding: "8px",
//     marginBottom: "10px",
//     outline: "none",
//   });

//   return (
//     <div style={{ maxWidth: "300px", margin: "20px auto", display: "flex", flexDirection: "column" }}>
//       <label>Mobile (10 digits):</label>
//       <input
//         type="text"
//         value={mobile}
//         onChange={(e) => setMobile(e.target.value)}
//         style={inputStyle(isMobileValid || mobile === "")}
//         placeholder="Enter mobile"
//       />

//       <label>Email:</label>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         style={inputStyle(isEmailValid || email === "")}
//         placeholder="Enter email"
//       />
//     </div>
//   );
// }

// export default SimpleForm;

















// import React, { useEffect, useState } from 'react'

// function App() {
//   const [seconds,setSeconds]=useState(0)
//   const [Pause,setPause]=useState(false)
//   const [timeStamp,setTimeStamp]=useState([])
//   const [in_s,setIn_s]=useState('')
//   const [t_s,setT_s]=useState(0)
//   const format=(s)=>{
//     let h=String(Math.floor(s/3600)).padStart(2,"0")
//     let m=String(Math.floor((s%3600)/60)).padStart(2,"0")
//     let sec=String(Math.floor((s%3600)%60)).padStart(2,"0")
//     return `${h}:${m}:${sec}`;
//   }

  
//   useEffect(()=>{
//     let interval;
//     if(!Pause){
//       interval=setInterval(()=>{
//       setSeconds(prev=>prev+1)
      
//     },1000)

    
//     }

//     return ()=> clearInterval(interval)
   
//   },[Pause])

//   const save=(s)=>{
//    let s_t= format(s)
//    setTimeStamp(prev=>[...prev,s_t])
//   }

//   const target=(e)=>{
//     setIn_s(e.target.value)
    
//   }
//   useEffect(()=>{
//     let t=in_s.split(":")
//     let [hr,mi,se]=t
//     hr=Number(hr)*3600
//     mi=Number(mi)*60
//     se=Number(se)
//     setT_s(hr+mi+se)
//     console.log(t_s)
//   },[in_s])
  
//   useEffect(()=>{
//     if(seconds==t_s){
//       setPause(true)
//       }
//   },[seconds])
  
//   return (
//     <div>{format(seconds)}
//       <button onClick={()=>setPause(!Pause)}>Pause</button>
//       <button onClick={()=>save(seconds)}>Save</button>
//       {/* input from user ---target time */}

//       <input value={in_s} 
//       onChange={(e)=>target(e)}
//       />
//       <div>
//         {timeStamp.map((t)=>(
//           <h3 key={t}>{t}</h3>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App

// let inter=setInterval(()=>{
//   console.log("hi")
// },1000)
// setTimeout(()=>{
//   clearInterval(inter)
// },2000)







// import React, { useState, useEffect } from "react";

// function Home() {
//   return <h2>Hello from Home Component!</h2>;
// }

// function App() {
//   const [count, setCount] = useState(true);
//   const [seconds, setSeconds] = useState(0);

//   // Format seconds into hh:mm:ss
//   const format = (s) => {
//     let b = Math.floor(s / 3600);
//     let g = Math.floor((s % 3600) / 60);
//     let h = Math.floor((s % 3600) % 60);
//     return `${b}:${g}:${h}`;
//   };

//   // Example effect: increment seconds every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     console.log("from useEffect in home");

//     return () => {
//       clearInterval(timer);
//       console.log("removed Home");
//     };
//   }, []);

//   return (
//     <div>
//       <div>{format(seconds)}</div>
//       {count ? <Home /> : "removed"}
//       <button onClick={() => setCount(false)}>Remove</button>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from "react";

// function Home() {
//   return <h2>Hello from Home Component!</h2>;
// }

// function App() {
//   const [count, setCount] = useState(true);
//   const [seconds, setSeconds] = useState(0);

//   // Format seconds into hh:mm:ss
//   const format = (s) => {
//     let b = Math.floor(s / 3600);
//     let g = Math.floor((s % 3600) / 60);
//     let h = Math.floor((s % 3600) % 60);
//     return ${b}:${g}:${h};
//   };

//   // Example effect: increment seconds every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     console.log("from useEffect in home");

//     return () => {
//       clearInterval(timer);
//       console.log("removed Home");
//     };
//   }, []);

//   return (
//     <div>
//       <div>{format(seconds)}</div>
//       {count ? <Home /> : "removed"}
//       <button onClick={() => setCount(false)}>Remove</button>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";

// function App() {
//   const [form, setForm] = useState({ name: "", roll: "" });
//   const [users, setUsers] = useState([]);
//   const [editingRoll, setEditingRoll] = useState(null);

//   const change = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (editingRoll) {
//       setUsers(
//         users.map((user) =>
//           user.roll === editingRoll ? { ...form } : user
//         )
//       );
//       setEditingRoll(null);
//     } else {
     
//       setUsers([...users, form]);
//     }

//     setForm({ name: "", roll: "" });
//   };
    
//   const onDelete = (roll) => {
//     setUsers(users.filter((user) => user.roll !== roll));
//   };

//   const onEdit = (user) => {
//     setForm(user);
//     setEditingRoll(user.roll);
//   };

//   return (
//     <div className="p-6">
//       <form onSubmit={onSubmit} className="space-y-4">
//         <input
//           name="name"
//           value={form.name}
//           onChange={change}
//           placeholder="Enter name"
//           className="border p-2 rounded w-full"
//         />
//         <input
//           name="roll"
//           value={form.roll}
//           onChange={change}
//           placeholder="Enter roll"
//           className="border p-2 rounded w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           {editingRoll ? "Update User" : "Add User"}
//         </button>
//       </form>

//       {/* table */}
//       <div className="mt-6 border rounded-lg p-4 bg-gray-50">
//         <h3 className="text-lg font-bold mb-4">User List</h3>
//         <table className="table-auto border-collapse border border-gray-400 w-full">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-400 px-4 py-2">NAME</th>
//               <th className="border border-gray-400 px-4 py-2">ROLL</th>
//               <th className="border border-gray-400 px-4 py-2">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.roll}>
//                 <td className="border border-gray-400 px-4 py-2">{user.name}</td>
//                 <td className="border border-gray-400 px-4 py-2">{user.roll}</td>
//                 <td className="border border-gray-400 px-4 py-2 space-x-2">
//                   <button
//                     onClick={() => onEdit(user)}
//                     className="bg-yellow-400 px-2 py-1 rounded"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => onDelete(user.roll)}
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Delete
//             </button>
//              </td>
//             </tr>
//             ))}
//        </tbody>
//      </table>
//       </div>
//     </div>
//   );
// }

// export default App;






  /*
  const [username, setusername]=useState("hii");
   const [setpass]=useState("");  
  const handlechange=(e)=>{
    console.log(e.target.value)
    setusername(e.target.value);
  }
    const handlesubmit=(e)=>{
      e.preventDefault()
      alert(username);
    }

  return (
    <div>
      <form onSubmit={handlesubmit}>
      <input value={username} onChange={handlechange}/>
      <input type="submit" />
      </form>
    </div>
  );
}
 export default App;
 
*/
 /*
  return (
    <div>
      <ul>
        {num.map((e,i)=>{
        return (
          <li key={i}>{e}</li>
        )
        })}
      </ul>
    </div>
  );
}

export default App; */