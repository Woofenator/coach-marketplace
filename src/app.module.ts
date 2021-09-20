import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
      dbName: 'marketplace',
      type: 'postgresql',
      metadataProvider: TsMorphMetadataProvider,
      user: 'admin',
      password: 'admin',
      host: 'localhost',
      debug: true,
      loadStrategy: LoadStrategy.JOINED,
    }),
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
