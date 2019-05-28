import {DefaultCrudRepository} from '@loopback/repository';
import {Userinfo} from '../models';
import {ChatbotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserinfoRepository extends DefaultCrudRepository<
  Userinfo,
  typeof Userinfo.prototype.userId
> {
  constructor(
    @inject('datasources.chatbot') dataSource: ChatbotDataSource,
  ) {
    super(Userinfo, dataSource);
  }
}
