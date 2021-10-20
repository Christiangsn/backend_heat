/* eslint-disable camelcase */
import { Messages } from './Message'

class User {
    public id?: string;
    public name?: string;
    public github_id?: number;
    public avatar_url?: string;
    public login?: string;
    public messages?: Messages[]

    constructor (props: User) {
      Object.assign(this, props)
    }
}

export { User }
