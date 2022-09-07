// admin and admin username and pass
// events -> onblur etc
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';
import AuthToken from '../Components/AuthToken';
import {useDispatch} from 'react-redux';
// import { add } from "../store/nameSlice";
import {login,logout} from '../store/userSlice';
function LoginPage(){

    const dispatch = useDispatch();
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [checkEmail,setCheckEmail] = useState('');
    const [checkName,setCheckName] = useState('');
    const [checkPass,setCheckPass] = useState('');
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        if(email&&name&&pass){
            setFlag(true);
        }
    },[email,name,pass])
    console.log("flag",flag);
    const WarningEmail = ()=>{
        console.log("required");
        if(email)
        setCheckEmail("")
        else
        setCheckEmail("Enter valid email address")
    }
    const WarningName = ()=>{
        console.log("required");
        if(name)
        setCheckName('')
        else
        setCheckName("Enter valid Name")
    }
    const WarningPass = ()=>{
        // console.log("required");
        if(pass)
        setCheckPass('');
        else
        setCheckPass("Enter valid Password")
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submit clicked");
      const user = {
        'name':name,
        'email':email,
        'password':pass
    }
      axios.post('http://localhost:9000/login',{user})
      .then(res=>{
          console.log("data ",res.data);
          console.log("success");
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userId',res.data.userId);
          localStorage.setItem('name',name)
          AuthToken(res.data.token);
          
          const data = {
            admin:true,
            status:true,
            name:name
        }
        dispatch(login(data))
      })
      .catch(res=>{
        dispatch(logout())
          console.log("res fail = ",res);
      });
    }

    return(
        <div> 
        <h1 className="text-primary d-flex justify-content-center m-4">LoginPage</h1>

        <form className="d-grid justify-content-center g-2 align-items-center">
            <div className="form-group m-1">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input onBlur={WarningName} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"></input>
                <p className="text-danger" >{checkName}</p>
            </div>
           
            <div className="form-group m-1">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input onBlur={WarningEmail} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="validationServer03" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <p className="text-danger">{checkEmail}</p>
            <div className="form-group m-1">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input onBlur={WarningPass} onChange={(e)=>setPass(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p className="text-danger">
                {checkPass}
            </p>
            
            <Link onClick={(e)=>handleSubmit(e)} className={flag?'btn btn-primary':'btn btn-primary disabled'} to= '/movies'> Submit</Link>
        </form>



        </div>
    )
}
export default LoginPage;