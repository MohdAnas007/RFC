
import pool from '@/db/db'
import { NextResponse } from 'next/server'

export async function GET() {

    try{
        const reponse=await pool.query(`SELECT * from "Students"`);
        return NextResponse.json({
            status:true,
            message:"connected to database",
            stuent_data:reponse.rows
        })
    }
    catch(error){
        return NextResponse.json(
            {   status:false,
                message:"error while connecting to database",
                error:[]
            },
            { status: 500 }
        )
    }
}

export async function POST(req) {
    try{

        const body=await req.json();
        const {Name,Class,Phone,School,Address}=body;
        const values=[Name,Class,Phone,Address,School];

        console.log("Recived data from ui",values);
        const query=`
            INSERT INTO "Students" ("Name", "Class", "PhoneNo", "Address", "School")
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `
        const res=await pool.query(query,values);

        return NextResponse.json({

            message:"Student Registered successfully",
            data:res.rows[0],
        });

    }
    catch(err){
        console.error("Error processing req\n",err.message);
        return NextResponse.json({
                message:"Invalid Request",
        })
    }
    
}