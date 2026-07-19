'use client'
import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
export default  function Students() {
    const [Loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        
        const getStudents=async ()=>{

            try{
                const data=await axios.get(`/api/students`);
                setStudents(data.data.stuent_data);
                setLoading(false);

            }
            catch(error){
                console.error("Error fetching students:",error);
                setError("failed to load data");
                setLoading(false);


            }
        }

        getStudents()

    },[]);

    if (Loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50">
                <div className="text-zinc-500 font-medium animate-pulse">Loading students...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50">
                <div className="text-red-500 font-medium">{error}</div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-zinc-50 font-sans selection:bg-amber-200 selection:text-amber-900">
            {/* Decorative Background Glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden flex justify-center">
                <div className="absolute top-0 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[150px] opacity-40 -translate-y-1/2"></div>
            </div>

            <main className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-12">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-6">
                    <Link 
                        href="/" 
                        className="group flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Home
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
                            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Achievers</span>
                        </h1>
                        <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
                            The bright minds studying at RFC Coaching Classes. Dedicated, curious, and future-ready.
                        </p>
                    </div>
                </div>

                {/* Students Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-8">
                    {/* Safe mapping: Checks if students exists and has a length greater than 0 */}
                    {students?.length > 0 ? (
                        students.map((student) => (
                            <div 
                                key={student.id || Math.random()} 
                                className="group relative bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-200 transition-all duration-500 flex items-start gap-4 overflow-hidden"
                            >
                                {/* Decorative Subtle Background */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-50 to-orange-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                {/* Avatar */}
                                <div className="relative h-16 w-16 shrink-0 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                                    <span className="text-2xl font-black text-zinc-400 group-hover:text-white transition-colors">
                                        {student.Name ? student.Name.charAt(0).toUpperCase() : "?"}
                                    </span>
                                </div>

                                {/* Student Details */}
                                <div className="relative z-10 flex flex-col gap-1">
                                    <h2 className="text-lg font-bold text-zinc-900 group-hover:text-amber-700 transition-colors">
                                        {student.Name || "Unknown Student"}
                                    </h2>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                                            Grade {student.Class || "N/A"}
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-400 mt-2 font-medium italic">
                                        {student.School || "No school provided"}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-zinc-200 border-dashed">
                            <p className="text-zinc-500 font-medium">No students found in the database yet.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}