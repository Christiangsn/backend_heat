/* eslint-disable camelcase */
import { Messages } from '../entities/Message'

export interface IMessageRepository {
    index(): Promise<Messages[]>;
    store({ text, user_id }: Messages): Promise<Messages>;
}
