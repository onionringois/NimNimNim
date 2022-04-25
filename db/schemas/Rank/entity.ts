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
	order!: number;

	@Column('varchar')
	name!: string;
}