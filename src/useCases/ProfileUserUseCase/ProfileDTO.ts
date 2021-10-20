/* eslint-disable camelcase */
import { IMessageDTO } from '../CreateMessageUseCase/MessageDTO'

export interface IProfileDTO {
    id?: string;
    name?: string;
    github_id?: number;
    avatar_url?: string;
    login?: string;
    messages?: IMessageDTO[]
}
