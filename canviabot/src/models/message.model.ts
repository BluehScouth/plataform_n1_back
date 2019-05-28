import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Message extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  user_first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  user_last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  msg: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Message>) {
    super(data);
  }
}
