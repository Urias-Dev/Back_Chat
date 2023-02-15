import express from "express";
import {userController} from '../controllers/user.controller.js';

import {validateToken} from "../middlewares/accessToken.middleware.js"
import {messagesController} from "../controllers/messages.controller.js";

export class Routes {

    routes(app = express.application) {
        app.get('/', (req, res) => {
            res.send(" hola mundo")
          }  ) ;

        app.post('/data',  userController. processData     );

        app.get('/test',     userController.  sayHello) ;


        app.route('/user-create').post(userController.create);


        app.route('/find_user').get(userController .findAll) ;

        app.post('/login', userController.login)


         app.post('/registro', userController.registro)

        app.route('/findone_user/:id').get(userController.findOneUser)

           app.route( '/update_user/:id'  ).put(userController .updateUser )




           app. route( '/create_messages'          ) .post        (messagesController.createMessages   )

      app. route(  '/find_message'  ).get (messagesController.findMessages )


       }

}