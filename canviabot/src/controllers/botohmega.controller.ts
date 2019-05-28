import {repository} from '@loopback/repository';
import {UserinfoRepository,MessageRepository} from '../repositories';
import {Userinfo, Message} from '../models';
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

export class BotohmegaController {
  constructor(@repository(UserinfoRepository) protected userRepo: UserinfoRepository,@repository(MessageRepository) protected messageRepo: MessageRepository) {}

  @post('/api/addUser')
  async  addUser(@requestBody() userinfo: Userinfo): Promise<String> {    
  
    this.userRepo.create(userinfo);
    
    return "OK";

  }

  @post('/api/sendMessage')
  async  sendMessage(@requestBody() message: Message): Promise<String> {    
  
    this.messageRepo.create(message);
    
    return "OK";

  }
}
