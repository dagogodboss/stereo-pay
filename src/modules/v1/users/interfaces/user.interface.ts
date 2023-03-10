import RoleEntity from '@v1/roles/schemas/role.entity';

export interface ICreateUser {
  email: string;

  password: string;

  name: string;

  roles: RoleEntity[];
}
