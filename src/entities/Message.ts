/* eslint-disable camelcase */

import { User } from './User'

class Messages {
    public id?: string;
    public text: string;
    public created_at?: Date;
    public user_id?: string;
    public user?: User;

    constructor (
      props: Messages
    ) {
      Object.assign(this, props)
    }
}

export { Messages }
