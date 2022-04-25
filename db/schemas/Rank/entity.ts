import {
	Entity,
	Column,
	PrimaryColumn,
	BaseEntity,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Rank extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column('int')
	order!: string;

	@Column('varchar')
	name!: string;
}