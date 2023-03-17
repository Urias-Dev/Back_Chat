import {MessagesModel} from "../models/messages.model.js"
import {Op} from "sequelize";

class messagesQueries {

    async create(data) {
        try {
            const query = await MessagesModel.create(data);
            if (query) {
                return {ok: true, data: query}
            } else {
                return {ok: false, data: null}
            }
        } catch (e) {
            console.log("error en la query", e)
        }
    }

    async findAll(chat_id) {
        try {
            const query = await MessagesModel.findAll({
                where: {
                    [Op.or]: [{
                        id_conversacion: chat_id
                    }]
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

export const MessagesQueries = new messagesQueries();
