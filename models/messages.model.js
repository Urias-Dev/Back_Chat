import  {Model , DataTypes} from  "sequelize";
import {DatabaseConfig  } from  "../config/database.js";


 export class MessagesModel extends Model  {  }

 MessagesModel. init ({
     mensajes_id  : {
          type:    DataTypes.INTEGER ,
         primaryKey: true,
        autoIncrement: true
     },
     contenido   : {
         type:  DataTypes.STRING(  100   ),
         allowNull: false,
     }  ,
        fecha    :   {
          type: DataTypes.STRING   (50)    ,
          allowNull: false,
    }
}   ,  {
    sequelize:   DatabaseConfig ,
    tableName : 'mensajes'      ,
    timestamps: false  ,
} )
