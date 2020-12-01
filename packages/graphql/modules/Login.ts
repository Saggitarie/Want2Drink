import { Resolver, Mutation, Arg } from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import { User } from '../src/entity/User';
import { LoginInput } from './user/LoginInput';

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(@Arg('data') loginInput: LoginInput): Promise<User | null> {
    const user = await User.findOne({ where: loginInput.userName });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(loginInput.password, user.password);

    if (!valid) {
      return null;
    }

    return user;
  }
}
