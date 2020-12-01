import { Field, InputType } from 'type-graphql';

export class LoginInput {
  @Field()
  userName: string;

  @Field()
  password: string;
}
