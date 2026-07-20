'use client'
import '../globals.css'
import Link from 'next/link';
import React, { useState } from 'react'
import axios from 'axios';
import {z} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
const studentSchema=z.object({
  Name:z.string().min(3,"Name should be atleast 3 characters").max(20,"Name should be at max 20 characters"),
  Class:z.string().min(1,"Class should be atleas 1").max(13,"Class Should be at max 13"),
  Phone:z.string().max(10000000000,"Phone no should be at least 10 digits"),
  School:z.string().max(100,"School should be at max 100 characters"),
  Address:z.string().max(200,"Address must be at max 200 Characters")
})
function Register() {
const [isSubmit,setIsSubmit]=useState(false);
const [isRegistered,setisRegistered]=useState(false);
const [isErrorWhileSubmitting,setisErrorWhileSubmitting]=useState(false);
const {register,handleSubmit,reset ,formState:{errors}}=useForm({resolver:zodResolver(studentSchema)});
  const submitForm=async (data)=>{
    try{
      const res=await axios.post('/api/students',data);
      if(res.data && res.data.status==false){
        setisRegistered(true);
        setIsSubmit(false);
      }
      else{
         setisRegistered(false);
         setIsSubmit(true)
      }
      
    }
    catch(err){
      if(err.response && err.response.status===400){
        setisRegistered(true);
        setIsSubmit(false);

      }else {
        setisErrorWhileSubmitting(true);
        console.log("Error while submitting", err.message);
      }
    }
  }
  const inputStyle = "w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 text-zinc-900 placeholder:text-zinc-400 transition-all";
    if (isRegistered && !isSubmit) {
      return (
        <div className="min-h-screen bg-zinc-50 font-sans flex items-center justify-center p-6 selection:bg-amber-200 selection:text-amber-900 relative overflow-hidden">
          {/* Decorative Background Glow */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
            <div className="w-[500px] h-[500px] bg-amber-100 rounded-full blur-[120px] opacity-50 translate-y-12"></div>
          </div>

          <div className="relative max-w-md w-full bg-white border border-zinc-200/80 p-8 md:p-10 rounded-3xl shadow-xl shadow-zinc-200/40 text-center space-y-6 backdrop-blur-sm">
            {/* Warning Badge Icon */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 animate-bounce">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            {/* Messaging */}
            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tight text-zinc-900">
                Already Registered
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                A profile with this mobile number is already active in our records. Dual registration for the same student session is restricted.
              </p>
            </div>

            {/* Informative Row Metadata */}
            <div className="bg-zinc-50/80 border border-zinc-100 rounded-2xl p-4 text-xs font-medium text-zinc-400">
              Need to make structural profile changes? Please get in touch with the RFC Coaching administration office directly.
            </div>

            {/* Action Call to Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/students"
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-xl transition-all duration-300 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.98]"
              >
                View Student Directory
              </Link>
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-zinc-600 bg-zinc-100 hover:bg-zinc-200/80 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                Back to Home Page
              </Link>
            </div>
          </div>
        </div>
      );
    }
   if (isSubmit) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-sm bg-white p-8 rounded-3xl border border-zinc-100 shadow-2xl shadow-amber-500/10 text-center">
          {/* Decorative background blur */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
          
          {/* Icon Circle */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 mb-6 rotate-3">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-2xl font-black text-zinc-900 mb-2">You're All Set!</h2>
          <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
            Your registration has been successfully received. We look forward to seeing you in class.
          </p>

          <button 
            onClick={() => {
              reset();
              setIsSubmit(false);
            }
            }
            className="w-full py-3.5 rounded-xl text-zinc-900 text-sm font-bold bg-zinc-100 hover:bg-zinc-200 transition-all active:scale-[0.98]"
          >
            Register Another
          </button>
        </div>
      </div>
    );
  }
  if (isErrorWhileSubmitting) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white p-8 rounded-3xl border border-zinc-200 text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center font-bold text-xl">!</div>
          <h3 className="text-lg font-bold text-zinc-900">Submission Failed</h3>
          <p className="text-sm text-zinc-500">Something went wrong while communicating with the Supabase servers.</p>
          <button 
            onClick={() => setisErrorWhileSubmitting(false)} 
            className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-xl text-sm transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-amber-500/10 border border-zinc-200">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-zinc-900">Register</h2>
          <p className="text-xs text-zinc-500 mt-1">Join the coaching classes</p>
        </div>

       <form onSubmit={handleSubmit(submitForm)} className="space-y-3">
            {/* Name */}
            <div>
              <input {...register("Name")} placeholder="Full Name" className={inputStyle} />
              {errors.Name && <p className="text-red-500 text-[10px] font-bold px-1">{errors.Name.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Class */}
              <div>
                <input {...register("Class")} placeholder="Class (e.g. 12)" className={inputStyle} />
                {errors.Class && <p className="text-red-500 text-[10px] font-bold px-1">{errors.Class.message}</p>}
              </div>
              {/* Phone */}
              <div>
                <input {...register("Phone")} type="tel" placeholder="Phone" className={inputStyle} />
                {errors.Phone && <p className="text-red-500 text-[10px] font-bold px-1">{errors.Phone.message}</p>}
              </div>
            </div>

            {/* School */}
            <div>
              <input {...register("School")} placeholder="School Name" className={inputStyle} />
              {errors.School && <p className="text-red-500 text-[10px] font-bold px-1">{errors.School.message}</p>}
            </div>

            {/* Address */}
            <div>
              <input {...register("Address")} placeholder="Full Address" className={inputStyle} />
              {errors.Address && <p className="text-red-500 text-[10px] font-bold px-1">{errors.Address.message}</p>}
            </div>

            <button type="submit" className="w-full mt-2 py-3 rounded-xl text-white text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 transition-all">
              Submit Details
            </button>
        </form>
      </div>
      </div>
  )
}

export default Register;
