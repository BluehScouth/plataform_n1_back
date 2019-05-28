import {DefaultCrudRepository} from '@loopback/repository';
import {Message} from '../models';
import {ChatbotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MessageRepository extends DefaultCrudRepository<
  Message,
  typeof Message.prototype.id
> {
  constructor(
    @inject('datasources.chatbot') dataSource: ChatbotDataSource,
  ) {
    super(Message, dataSource);
  }
}
