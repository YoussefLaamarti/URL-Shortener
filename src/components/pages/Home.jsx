import React , {useState , useEffect} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL= 'https://gotiny.cc/api'
const RESULT_URL = 'https://gotiny.cc/'

function home() {
  const[searchTerm, setSearchTerm] = useState("");
  const[ttt, setCode] = useState("");

useEffect(() =>{
  if(ttt !== ""){
    setSearchTerm(RESULT_URL+ttt) ;
    toast.success('Link Shortned !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  },[ttt])
  //shrinking the url
    function searching(searchTerm){
      axios.post(BASE_URL, {
      input: searchTerm
     }) .then( function (response) {
       setCode(response.data[0].code); 
    })
    .catch(function (error) {
      toast.error('Link Invalid !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      ;
    }); 
   }
   //the result url
   
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (<div>
   
      
    <section  className='Container-home-header'>
    <h1>Shortner . GG</h1>     
    <h2>Paste the URL to be <br/>shortened</h2>     
    <div className='header-container'>
    <input type='text' placeholder='   Enter the link here'   value={searchTerm} onChange={handleChange}></input>
   <button onClick={() => searching(searchTerm)} ><div className='little-img'></div></button>
    </div>
    </section>
   

    <section className='Container-products' id='x'>
      
      <div className='product'>
        <div className='img'></div>
        <h1 className='Title'>Simple and fast URL shortener!</h1> 
        <h1 className='Name'>ShortURL allows to reduce long links from Instagram, Facebook, YouTube, Twitter, Linked In and top sites on the Internet, just paste the long URL and click the Shorten URL button. On the next screen, copy the shortened URL and share it on websites, chat and e-mail. </h1> 
       
      </div >
      <div className='product'>
        <div className='img'></div>
        <h1 className='Title'>Shorten, share , get clicks, enjoy </h1> 
        <h1 className='Name'>Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations.</h1> 
       
      </div>
  
    </section>
    
    <section className='Container-products'>
      <div className='box-flex'>
    <div className='box'> <div className='icon'> </div> <div  className='box-title'> Easy</div> </div>
    <div className='box'><div className='icon' id="icon2"> </div> <div  className='box-title'> Devices</div> </div>
    <div className='box'><div className='icon' id="icon3" > </div> <div  className='box-title'> Secure</div> </div>
    <div className='box'><div className='icon' id="icon4" > </div> <div  className='box-title'> Statistics</div> </div>
    <div className='box'><div className='icon' id="icon5" > </div> <div  className='box-title'> Reliable</div> </div>
    <div className='box'><div className='icon' id="icon6" > </div> <div  className='box-title'> Shortned</div> </div>
    
    </div>
  
    </section>
      
    <section className='Container-products'>
      <div className='footer'> 
      <span id='footer1'> © 2022 Shortner. GG - Tool to shorten a long link.</span>
     
      <span  id='footer2' > By Youssef Laamarti </span>
    
      <span  id='footer3' > yousseflaamarti2018@gmail.com</span></div>
  
    </section>
    <ToastContainer/>
    </div>
  )
}

export default home