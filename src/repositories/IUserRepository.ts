/* eslint-disable camelcase */
import { User } from '../entities/User'

export interface IUserRepository {
    show(github_id: number): Promise<User>
    store({ name, id, login, avatar_url }: User): Promise<User>
    index({ id }: User): Promise<User>
}
