import {UserQueries} from "../queries/user.queries.js"
import {Payload} from "../helpers/payload.js";
import {encrypt} from "../helpers/handleBcrpt.js"

class UserController {

    static payload = new Payload();

    async create(request, response) {
        const body = request.body;
        console.log(body)
        const pass = await encrypt.encrypt(body.pass)
        const query = await UserQueries.create(body.user_id, body.nombre, body.apellido_p, body.apellido_m, pass, body.correo, body.foto, body.status);
        if (query.ok) {
            return response.status(200).json({ok: true, data: query.data});
        } else {
            return response.status(403).json({ok: false, message: 'error en la consulta'});
        }
    }

    async findAll(request, response) {

        const query = await UserQueries.find();
        if (query) {
            return response.status(200).json({ok: true, data: query.data})
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }

    async login(request, response) {

        const body = request.body;
        console.log("body:", body)
        const query = await UserQueries.findOne({
            correo: body.correo, pass: body.pass,
        })
        if (query) {
            const pass = await encrypt.comparePass(body.pass, query.data.pass)
            if (pass) {
                try {
                    const token = UserController.payload.createToken(query.data);
                    return response.status(200).json({
                        ok: true, data: query.data, token: token,
                    })
                } catch (e) {
                    console.log("Error en :", e)
                    return response.status(403).json({
                        ok: false, data: null
                    });
                }
            } else {
                console.log("contraseña invalida")
                return response.status(403).json({
                    ok: false, data: null,
                })
            }
        } else {
            console.log("usuario invalido")
        }
    }

    async findOneUser(request, response) {
        const user_id = request.params.id;
        const query = await UserQueries.findOne_user({
            user_id: user_id
        })
        if (query) {
            return response.status(200).json({ok: true, data: query.data})
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }

    async updateUser(request, response) {
        const body = request.body
        const user_id = request.params.id;
        const query = await UserQueries.update(body, {
            user_id: user_id
        })
        if (query) {
            return response.status(200).json({ok: true, data: query.data})
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }

}

export const userController = new UserController();


