import { repository } from '@loopback/repository';
import { UserinfoRepository, MessageRepository } from '../repositories';
import * as io from 'socket.io-client';
import { Userinfo, Message } from '../models';
import {
  HttpErrors,
  post,
  param,
  requestBody,
  get,
  put,
  patch,
  del,
} from '@loopback/rest';

const SERVER_URL = 'http://localhost:7353/Websocketbotohmega/2';

export class BotohmegaController {

  socket: SocketIOClient.Socket;

  constructor(@repository(UserinfoRepository) protected userRepo: UserinfoRepository, @repository(MessageRepository) protected messageRepo: MessageRepository) {
    this.socket = io.connect(SERVER_URL);
  }

  @post('/api/addUser')
  async  addUser(@requestBody() userinfo: Userinfo): Promise<String> {

    var user = await this.userRepo.findOne({ where: { userId: userinfo.userId, sessionState: { $ne: "Inactivo" } } });
    if (user == null) {
      this.userRepo.create(userinfo);
      this.socket.emit('useronline', userinfo);
    }
    return "OK";

  }

  @get('/api/getUsers')
  async  getUsers(): Promise<Userinfo[]> {

    return await this.userRepo.find({ where: { sessionState: 'Activo' } });;

  }

  @post('/api/setUser')
  async  setUser(@requestBody() userInfo: any): Promise<String> {
    var user = await this.userRepo.findOne({ where: { userId: userInfo.userId, sessionState: { $ne: "Inactive" } } });
    if (user != null) {
      user.sessionState = "Bussy";
      this.userRepo.update(user);
    }
    return "OK";
  }

  @post('/api/sendMessage')
  async  sendMessage(@requestBody() message: Message): Promise<String> {
    this.messageRepo.create(message);
    this.socket.emit('message', message.msg);
    return "OK";

  }
}
