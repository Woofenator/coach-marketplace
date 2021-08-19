import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: MikroOrmModuleOptions = {
  entities: ['./dist/**/entities/*.js'],
  entitiesTs: ['./src/**/entities/*.ts'],
  dbName: 'marketplace',
  type: 'postgresql',
  metadataProvider: TsMorphMetadataProvider,
  user: 'admin',
  password: 'admin',
  host: 'localhost',
  migrations: {
    tableName: 'migrations',
    path: './migrations',
    pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: false, // allow to disable table and column dropping
    emit: 'ts', // migration generation mode
  },
  debug: true,
};

export default config;
