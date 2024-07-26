import { React,useState,useEffect} from 'react'
import {ServiceAndRatings} from "./ServiceAndRatings"
import {AppoimentBooking} from "./AppoimentBooking"
import {PrevoiusHistory} from "./PrevoiusHistory"
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import instance from '../AxiosInstance/axiosinstance'
import {jwtDecode} from 'jwt-decode';
import "./homepage.css"


export const HomePage = () => {
  
  const {token}=useParams()
  const allServiceDetails=useSelector((state)=>state.serviceDetailsReducer);
  const dispatch=useDispatch();

  // console.log(allServiceDetails)
  
// async function verifyToken(){
//   await instance.post("Users/verifyToken",token).then((res)=>{
//     console.log("jh");
//   })
// }

  // useEffect(()=>{
  //   const decoded = jwtDecode(token);
  //   if(decoded){
  //     console.log(decoded.email)
  //   }
  // },[])

  const [pages,setPages]=useState("Home");

  function handelPages(page){
    if(page==="Home"){
      setPages("Home");
    }else if(page==="Appointment"){
      setPages("Appointment")
    }else if(page==="PreviousHistory"){
      setPages("PreviousHistory")
    }
  }
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark '>
          <div className='container-fluid'>
            <Link className='navbar-brand mb-1'>Vevicare</Link>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navitemlink">
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id="navitemlink">
              <ul className='navbar-nav me-auto'>
                <li className='navbar-item'>
                  {pages==="Home"?<Link className='nav-link active' onClick={()=>handelPages("Home")}>Home</Link>:<Link className='nav-link' onClick={()=>handelPages("Home")}>Home</Link>}
                </li>
                <li className='navbar-item'>
                {pages==="Appointment"?<Link className='nav-link active' onClick={()=>handelPages("Appointment")}>Appointment Booking</Link>:<Link className='nav-link' onClick={()=>handelPages("Appointment")}>Appointment Booking</Link>}
                </li>
                <li className='navbar-item'>
                  {pages==="PreviousHistory"?<Link className='nav-link active' onClick={()=>handelPages("PreviousHistory")}>Previous Service History</Link>:<Link className='nav-link' onClick={()=>handelPages("PreviousHistory")}>Previous Service History</Link>}
                </li>
              </ul>
              <span className="navbar-text me-2">
                Nithish kumar
              </span>
              <img className="rounded-circle navbar-text" alt="avatar1" src="../images/profile.png" height={50} width={40} />
            </div>
          </div>
        </nav>
      </header>

      {pages==="Home"&&<ServiceAndRatings allServiceDetails={allServiceDetails}/>}
      {/* Appoiment Booking */}
      {pages==="Appointment"&&<AppoimentBooking/>}
      {/* Previous History */}
      {pages==="PreviousHistory"&&<PrevoiusHistory/>}
      
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}
