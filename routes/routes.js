import express from "express";
import {userController} from '../controllers/user.controller.js';
import {chatController} from "../controllers/chat.controller.js";
import {messagesController} from "../controllers/messages.controller.js" ;

// import {validateToken} from "../middlewares/accessToken.middleware.js"

export class Routes {

    routes(app = express.application) {

        app.route('/user-create').post(userController.create);
        app.route('/find_all').get(userController.findAll);
        app.route('/login').post(userController.login)
        app.route('/registro').post(userController.create)
        app.route('/findone_user/:id').get(userController.findOneUser   )
        app.route('/update_user/:id').put(userController.updateUser)
        app.route('/create_messages/').post(messagesController.createMessages)
        app.route('/findChat/:id1/:id2').get(chatController.findChat)
    }

}