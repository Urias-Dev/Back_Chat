import  {Model , DataTypes} from  "sequelize";
import {DatabaseConfig  } from  "../config/database.js";


 export class MessagesModel extends Model  {  }

 MessagesModel. init ({
    mensajes_id : {
          type:  DataTypes.INTEGER ,
        allowNull: false   ,
        primaryKey: true,
        autoIncrement: true
     },
     contenido : {
        type:  DataTypes.STRING( 100  ),
         allowNull: false,
    },
      user_id :  {
         type: DataTypes.INTEGER  ,
          allowNull: false,
    }
}   , {
    sequelize: DatabaseConfig,
    tableName : 'mensajes'  ,
    timestamps: false  ,
} )
