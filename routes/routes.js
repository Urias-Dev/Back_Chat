import express from "express";
import {userController} from '../controllers/user.controller.js';
import {skillController} from "../controllers/skill.controller.js";
import {  messagesController }  from "../controllers/messages.controller.js"  ;
import { validateToken } from "../middlewares/accessToken.middleware.js"
import {workController} from "../controllers/work.controller.js";

export class   Routes   {

    routes  (app  =  express.application) {
        app.get('/', (req , res) => {
            res. send(" hola mundo")
        });

          app.post('/data',  userController.processData);

           app.get    ( '/test' ,  userController.sayHello  )  ;


            app.route ('/user-create'   ). post(userController.create )  ;


            app.route( '/find_user'      ).get( userController.findAll ) ;



                app. post   ('/login' ,    userController.login )


            app.post(   '/registro'   , userController.registro     )

app.route (      '/findone_user/:id'    )  .get( userController.findOneUser )




          ///  HabiKlisvdacdes

           app.route ('/create_skill'    ).post  (  skillController.createSkill );

          app.route('/delete_skill/:id'   ).delete( skillController.deleteSkill);

          app.route('/find_skill').get( skillController.findSkill);

           app.route ('/findone_skill/:id' ).get (skillController.findOneSkill )

           app.route('/update_skill/:id'  ).put(   skillController.updateSkill)

        //  Rutas para Educadcioxn


          app.route( '/find_message'    ).  get( messagesController.findMessages) ;



         // Rutas para Experiencia  Labcoral


        app.route('/create_work').post(workController.createWork)

        app.route('/delete_work/:id' ).  delete(workController.deleteWork)

        app.route('/find_work').get (workController. findWork)

         app.route('/update_work/:id') .put(workController.updateWork);

        app.route('/findone_work/:id' ).get(workController. findOneWork) ;


           app.route ('/sendMessage'  ). post  (userController . sendTelegramMessage ) ;


         app.route('/receivedMessage').get (userController.receivedTelegramMessage );
     }

}