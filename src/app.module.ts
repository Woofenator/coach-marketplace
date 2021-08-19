import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
