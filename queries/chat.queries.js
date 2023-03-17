import {ChatModel} from "../models/chat.model.js"
import {Op} from "sequelize"  ;

class ChatQueries {

    async create(user1, user2) {
        try {
            const query = await ChatModel.create({
                user1: user1, user2: user2
            });
            if (query) {
                console.log(query.id)
                return {ok: true, data: query}
            } else {
                return {ok: false, data: null}
            }
        } catch (e) {
            console.log("error en la query", e)

        }
    }

    async find(id1, id2) {
        try {
            const query = await ChatModel.findOne({
                where: {
                    [Op.or]: [{user1: id1, user2: id2}, {user1: id2, user2: id1}]
                }
            });
            if (query) {
                return {ok: true, data: query}
            } else {
                return {ok: false}
            }
        } catch (error) {
            console.log('error en la query', error);
            return {ok: false, data: null};
        }
    }
}

export const chatQueries = new ChatQueries();
