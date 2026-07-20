
import { NextResponse } from 'next/server'
import ConnectToDb from '@/db/sequelize'
import Student from '@/db/model'
export async function GET() {

    try{
        await ConnectToDb();
        const user=await Student.findAll();
        return NextResponse.json({
            status:true,
            message:"connected to database",
            data:user
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
        console.log(body);

        const [student,created]=await Student.findOrCreate({
            where:{phone_no:Phone},
            defaults:{
                name:Name,
                class:Class,    
                address:Address,
                school:School,
            }
        })
        if(!created){
            console.log("already registered");
            return NextResponse.json({
                message:"Student is already registered",
            });
        }

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