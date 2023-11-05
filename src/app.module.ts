import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { ResourceModule } from './auth/resource/resource.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, DatabaseModule, ResourceModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
