'use client'
import '../globals.css'
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
const {register,handleSubmit,reset ,formState:{errors}}=useForm({resolver:zodResolver(studentSchema)});
  const submitForm=async (data)=>{
    try{
      const res=await axios.post('/api/students',data);
      console.warn("Student registered");
      setIsSubmit(true)
    }
    catch(err){
      console.log("Error while submitting",err.message);
    }
  }
  const inputStyle = "w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 text-zinc-900 placeholder:text-zinc-400 transition-all";

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
