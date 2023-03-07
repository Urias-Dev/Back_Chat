import  {Model, DataTypes} from "sequelize";
import {DatabaseConfig } from "../config/database.js";

export class UserModel extends Model  {  }
    UserModel.init (  {
          user_id:    {
            type:  DataTypes.INTEGER   ,
             primaryKey:  true       ,
             autoIncrement: true
           } ,
          nombre : {
             type  :DataTypes.STRING(30),
            allowNull: false
          },
         apellido_p: {
             type:  DataTypes.STRING(30),
            allowNull: false
        } ,
         apellido_m: {
              type:  DataTypes.STRING(30 ),
            allowNull: false

           },


         pass: {
          type: DataTypes.STRING(300)  ,
          allowNull: false
        } ,

        correo:    {
            type: DataTypes.STRING(30),
            allowNull: false,
        },


        foto: {
          type: DataTypes.STRING(100),
          allowNull: false
            }

     }, {
         sequelize:   DatabaseConfig,
        tableName : 'perfil' ,
        timestamps: false  ,
    }
) ;
