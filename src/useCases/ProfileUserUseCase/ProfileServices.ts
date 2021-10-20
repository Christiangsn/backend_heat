import { IUserRepository } from '../../repositories/IUserRepository'
import { IProfileDTO } from './ProfileDTO'

class ProfileServices {
  constructor (
    private userRepository: IUserRepository
  ) {}

  async index ({ id }: IProfileDTO) {
    const user = await this.userRepository.index({ id })

    return user
  }
}

export { ProfileServices }
