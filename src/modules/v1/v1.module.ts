import { Module } from '@nestjs/common';
import { Routes, RouterModule } from '@nestjs/core';
import { MediaModule } from './media/media.module';

import AuthModule from './auth/auth.module';
import UsersModule from './users/users.module';

const routes: Routes = [
  {
    path: '/v1',
    children: [
      { path: '/auth', module: AuthModule },
      { path: '/users', module: UsersModule },
      { path: '/media', module: MediaModule },
    ],
  },
];

@Module({
  imports: [
    RouterModule.register(routes),
    AuthModule,
    UsersModule,
    MediaModule,
  ],
})
export default class V1Module {}
