import {sequelize } from '@/db/sequelize';
import { DataTypes } from 'sequelize';
const Student=sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.TEXT,
        allowNull:false,

    },
    class:{
        type:DataTypes.TEXT,
        defaultValue:null,
    },
    phone_no:{
        type:DataTypes.TEXT,
        defaultValue:null,
        unique:true,
    },
    address:{
        type:DataTypes.TEXT,
        defaultValue:null,

    }
    ,
    school:{
        type:DataTypes.TEXT,
        defaultValue:null,
    }
},{tableName:'users',timestamps:true});

export default Student;