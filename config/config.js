import  express from 'express';
import cors from  'cors';
import http from 'http';
import dotenv from 'dotenv'   ;
 import {Telegraf} from "telegraf";
import {Database} from "../config/database.js";
import {Routes} from '../routes/routes.js';

 import  { Server as  SocketServer }   from  'socket.io'  ;

dotenv.config ( );

  class   App {

        app = express.application;

        http = null
      routes = new Routes();
      bot = null;
        db = new Database();
        io = null ;


      constructor () {
              this.initializeApp   ()
       }


           async initializeApp() {
           this.app = express ();
           this.config()
          this.http  = http.createServer(this.app )
             await this.initDatabase    ();
             this.io = new SocketServer    (this.http , {
                   cors: {

                       origin:     '*'  ,
                   }
             } )
           this.routes.routes(this.app);
          this.bot = new Telegraf(process.env .BOT)
          await this.initBotListening(this.bot )
            await  this.SocketinitListen (this.io)
      }

       config  () {
          this.app.use(
              express.urlencoded({
                   extended: true
               }))

          this.app.use(express.json());

          this.app.use(cors({origin:  '*'})  ) ;
      }

       async initDatabase() {
          const connection =  await this.db.connection();
          console.log(connection.message);
      }


      async initBotListening(bot) {

             bot.on('text', (ctx) =>  {
              console.log(' incomingo  mesasageplf', ctx.message.text);

              // ctx.telegram.sendMessage( ctx.message.chat.id,  `hello  ${ ctx.state.role }`);


              // ctx.reply(   `hello  ${ctx.state.role}` )
          });

          bot.on(' message,', (ctx) =>  {
              console.log('message,, ', ctx.message)

          }  )  ;



            }

          async   SocketinitListen (io) {

                 io.on  ('connection'   ,   (  socket)=> {

                   console.log( socket.id  )

                    socket.on('message'  , (body )   => {

                       const currentDate = new Date();
                       const currentTime = currentDate.toLocaleTimeString ( 'en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                         socket.broadcast.emit  ('message' ,    {
                              body  ,
                             from :  socket.id.slice(8) ,
                             fecha  : currentTime
                        }  )
                    })


            }   )
        }
  }


  export default new  App( )  ;



