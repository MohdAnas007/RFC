import {Sequelize} from 'sequelize'
import pg from 'pg';
const dburl=process.env.DATABASE_URL ;
if(!dburl){
    console.log("Cant find db url");
    throw new Error("Cant find db url");
}
const sequelize=new Sequelize(dburl,{
    dialect:'postgres',
    dialectModule:pg,
    logging:false,
});

const ConnectToDb=async()=>{
        try{
            await sequelize.authenticate();
            console.log("Connection has been stablished");
            await sequelize.sync();
            console.log("table created successfully");
        }
        catch(error){
            console.log("Connection rejected",error);

        }
}
export {sequelize}
export default ConnectToDb;

