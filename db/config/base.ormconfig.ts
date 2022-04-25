import { ConnectionOptions } from 'typeorm';
// import { isDev } from '../common/consts';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Form, People, Rank, Stage, StageType, WeaponAuthority } from '../schemas/entities';


const baseOrmConfig: ConnectionOptions = {
	type: 'postgres',
	synchronize: true,
	logging: true,
	database: 'nimnimnim',
	migrationsRun: true,
	entities: [Form, People, Rank, Stage, StageType, WeaponAuthority],
	migrations: ['../migrations/*.{js,ts}'],
	host: 'localhost',
	username: 'postgres',
	password: '1107',
	namingStrategy: new SnakeNamingStrategy(),
};

export default baseOrmConfig;
