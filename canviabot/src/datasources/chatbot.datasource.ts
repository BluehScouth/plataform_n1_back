import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './chatbot.datasource.json';

export class ChatbotDataSource extends juggler.DataSource {
  static dataSourceName = 'chatbot';

  constructor(
    @inject('datasources.config.chatbot', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
