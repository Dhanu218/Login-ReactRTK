import React,{useState} from 'react';
import './App.css'
import { FormState, useForm, useFormState} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { FaStar,FaRegStar } from "react-icons/fa"; 
import { userAdded } from './counterSlice';

const sleep = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));
type formValues={
  firstName:string,
  lastName:string,
  mail:string|number,
  password:string|number,
  referred:string,
  referralCode:string
}

function AddForm() {
  const dispatch = useDispatch()
  const [data,setData]=useState([''])
  const {
    watch,
    register,
    handleSubmit,
    getValues,
    formState:  { errors,isDirty,isValid }} =  useForm<formValues>({      
      defaultValues: {
        firstName:'',lastName:'',mail:'',password:'',referred:'No',referralCode:''
      },
      mode: "onChange"
    });
    const watchChecked = watch("referred");

  const onSubmit = async (data:any) => {
    await sleep(2000);
    if (data.firstName && data.lastName) {
      alert(JSON.stringify(data));
      dispatch(
        userAdded({
        id:nanoid(),
        firstName:data.firstName,
        lastName:data.lastName,
        mail:data.mail,
        password:data.password,
        referred:data.referred,
        referralCode:data.referralCode
        })
      )
      console.log(data);
    } else {  
      alert("There is an error");
    }
  };

  console.log(errors);

  register("firstName",{required:{value:true,message:'FirstName is Required'}});
  register("lastName",{required:{value:true,message:'LastName is Required'}})
  

  return (
    <div className="App">
      <>
    <div className="split left">
    <div className="start">
        <span>Currencies <br/><span style={{paddingInlineEnd:'50%'}}>Direct</span></span>
    </div>
    <div >
      <div style={{justifyContent:'block center', fontFamily:'Arial',fontSize:'35px',padding:'0% 50% 0% 5%',textAlign: 'justify'}}>
        <strong>Get great rates in less than five Minutes</strong>
      </div>
      <div style={{paddingRight:'65%',paddingLeft:'2%'}}>
      <ul style={{justifyContent:'flex-start'}}>
        <li>Free expert advice</li>
        <li>it's Safe and Secure</li>
        <li>Free expert advice</li>
      </ul>
      </div>
      <div style={{padding:'20% 30% 0% 20%'}}>
        <span style={{justifyContent:'flex-start',display:'flex'}}>
        <FaStar/> TrustPilot &nbsp;&nbsp;&nbsp;&nbsp;<span><strong>Excellent</strong><br/> </span>
        
        </span>
        <span><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>&nbsp; Based on over 5000 reviews</span>
        <div>
            <span>We're authorised by the Financial Conduct Authority </span>
        </div>
      </div>
    </div>
    </div>
    <div className="split right">
      <div className="end">
        <span >Already have an account? <a href="#">Log in</a></span>

      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Counter/> */}
      <h3>Create your login</h3>
      {/* <label htmlFor="firstName">First Name</label> */}
      <input placeholder="First name" {...register("firstName", { required: true,pattern:/^[a-zA-Z\u00C0-\u00FF]*$/i ,minLength: 3, maxLength: 50 })} />
      {/* {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>} */}
      {errors.firstName && <p role="alert">First Name is not Correct</p>}
      {/* <label htmlFor="lastName">Last Name</label> */}
      <input placeholder="Last Name" {...register("lastName", { required: true ,pattern:/^[a-zA-Z\u00C0-\u00FF]*$/i,minLength: 3, maxLength: 50})} />
      {/* {errors.lastName?.type === 'required' && <p role="alert">Last name is required</p>} */}
      {errors.lastName && <p role="alert">LastName is not Correct</p>}
      {/* <label htmlFor="email">Email</label> */}
      <input
        placeholder="Email Address"
        {...register("mail", { required: true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}         
      />
       {errors.mail && <p role="alert">Email id is not Correct</p>}

      {/* <label htmlFor="password">Password</label> */}
      <input
        placeholder="Enter password"
        type="password"
        {...register("password", { required: true,minLength:8,maxLength:20,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}
      />
      {errors.password && <p role="alert">Password id is not Correct</p>}
    
      
      {/* <label htmlFor="radio">Where you referred to us?</label> */}
      <div className='controls' >
      Where you referred to us?
      <label className='radio'><input  type="radio" value="No" {...register("referred")}  />No</label>
      <label className='radio'><input  type="radio" value="Yes" {...register("referred")}  />Yes</label>
      </div>
      
      

    {/* IF YES then add input field */}
    {watchChecked ?
    <div  style={{display:getValues("referred")=='No'?'none':''}}>
        
      {/* <label  htmlFor="referralCode">Referral code</label> */}
      <input placeholder="Referral code" {...register("referralCode", { maxLength: 20 })} />
      {errors.referralCode && <p role="alert">Referral Code have only max 20 Characters</p>}
      {/* {errors.referralCode?.type === 'required' && <p role="alert">Referral code is required</p>} */}
    </div>
:''}
      {/* <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div> */}
      
      <input type="submit" disabled={!isValid || !isDirty}/>
      {/* <pre>{JSON.stringify(<form action="" method="post"></form>, null, 2)}</pre> */}
    </form>

    <div style={{padding:'10% 20% 0% 10%'}}>
        <span style={{justifyContent:'flex-start',display:'flex'}}>
        <div id="centerDiv">
            <ul className="centerUL">
                <li><a href="#">Terms & Conditions</a>&nbsp;&nbsp;</li>
                <li><a href="#">Privacy Policy</a>&nbsp;&nbsp;</li>
                <li><a href="#">Reg Information </a>&nbsp;&nbsp;</li>
                <li><a href="#">v2.16</a></li>
            </ul>
        </div>
      </span>
    </div>
    </div>
    </>
    </div>
  );
}

export default AddForm;



