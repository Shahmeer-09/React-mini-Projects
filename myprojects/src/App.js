// import "./App.css";

// import React, { useEffect, useState } from "react";

// advice app ///////////////

// function App() {
//   const [state, setState] = useState("");

//   const handleadvice = async () => {
//     setState("loading...");
//     const button = document.querySelector("button");
//     button.classList.add("btn");
//     button.style.display = "none";
//     const responce = await fetch("https://api.adviceslip.com/advice");
//     const adviceQ = await responce.json();
//     const advicee = adviceQ.slip.advice;
//     button.style.display = "inline";
//     setTimeout(() => {
//       button.classList.remove("btn");
//     }, 3000);
//     setState(advicee);
//   };

//   useEffect(() => {
//     handleadvice();
//   }, []);
//   console.log(state);
//   return (
//     <div className="App">
//       <div className="container">
//         <div className="card">
//           <h1>{state}</h1>
//           <button onClick={handleadvice}>
//             <span>Give ME Advice</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import Container from "./components/styles/Container";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { ThemeProvider } from "styled-components";
// import Card from "./components/Card";
// import GlobalStyles from "./components/styles/GlobalStyle";
// import content from "./content";
// const theme = {
//   color: {
//     header: "#ebfbff",
//     body: "#fff",
//     footer: "#003333",
//   },
//   mobile: "768px",
// };

// export default function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <>
//         <GlobalStyles />
//         <Header />
//         <Container>
//           {content.map((item, index) => (
//             <Card key={index} item={item} />
//           ))}
//         </Container>
//         <Footer />
//       </>
//     </ThemeProvider>
//   );
// }

// import React from "react";
// import Feed from "./MUI/Feed";
// import Sidebar from "./MUI/Sidebar";
// import Rightbar from "./MUI/Rightbar";
// import { Box } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import NAvbar from "./MUI/NAvbar";
// export default function App() {
//   return (
//     <Box>
//       <NAvbar />
//       <Stack direction="row" spacing={2}>
//         <Sidebar />
//         <Feed />
//         <Rightbar />
//       </Stack>
//     </Box>
//   );
// }

// import React , {useState} from 'react'
// import Square from './ColorChanger/Square'
// import Input from './ColorChanger/Input'
// import "./ColorChanger/index.css"
// const App = () => {
//   const [myColor, setmyColor]= useState("")
//   const [hexValue, setHeaxvalue]= useState("")
//   const [isdark ,setisdark]= useState(true)
//   return (
//     <main className='colorChanger'>
//          <Square
//           myColor={myColor}
//           hexValue={hexValue}
//           isdark={isdark}
//          />
//          <Input
//           myColor={myColor}
//           setmyColor={setmyColor}
//           setHeaxvalue ={setHeaxvalue}
//           isdark={isdark}
//           setisdark ={setisdark}
//          />
//     </main>
//   )
// }

// export default App

// import React , {useState, useEffect}from 'react'
// import './DataFetch/datafetch.css'
//  import Form from './DataFetch/Form';
//  import List from './DataFetch/List';
// import Table from './DataFetch/Table';
// const App = () => {
//   const API_URL = 'https://jsonplaceholder.typicode.com/';
//   const [reqType, setReqtype] = useState('users')
//   const [data, setData ]= useState([])
//     useEffect(()=>{
//      const fetchData = async ()=>{
//       try{
//         const response = await fetch( `${API_URL}${reqType}`);

//         if(!response.ok) throw Error ('expected data is not  recieved')
//         const items = await response.json()
//         console.log(items)
//         setData(items)
//       }
//       catch(err){
//         console.log(err)
//       }
//      }
//      fetchData();
//     }, [reqType])
//   return (
//     <main>
//        <Form  reqType={reqType} setReqtype={setReqtype}  />
//        {/* <List data={data}/> */}
//        <Table data={data}/>
//     </main>
//   )
// }

// export default App

import React from "react";
import Layout from "./React-router/Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
