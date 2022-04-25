import { ConnectionOptions } from 'typeorm';
import { isDev } from '../common/consts';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as entities from './schemas/entities';

const baseOrmConfig: ConnectionOptions = {
	type: 'postgres',
	synchronize: isDev,
	logging: isDev,
	migrationsRun: isDev,
	entities: Object.values(entities),
	migrations: ['../migrations/*.{js,ts}'],
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	namingStrategy: new SnakeNamingStrategy(),
};

export default baseOrmConfig;
