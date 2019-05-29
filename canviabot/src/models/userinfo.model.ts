import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Userinfo extends Entity {

  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true

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
  conversation_id: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    default: 'Onhold'
  })
  sessionState: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Userinfo>) {
    super(data);
  }
}
