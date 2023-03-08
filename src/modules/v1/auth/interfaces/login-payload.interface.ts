import { RolesEnum } from '@decorators/roles.decorator';

export interface LoginPayload {
  readonly id?: string;

  readonly email?: string;

  readonly roles?: RolesEnum[];
}
