import {MessagesQueries} from "../queries/messages.queries.js"  ;

class MessagesController {

    async createMessages(request, response ) {
        const body = request.body;
        const query = await MessagesQueries.create(body)
        if (query) {
            return response.status(200).json({ok: true, data: query.data})
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }
}

export const messagesController = new MessagesController();

