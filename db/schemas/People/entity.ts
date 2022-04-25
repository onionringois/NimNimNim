import {
	Entity,
	Column,
	BaseEntity,
	PrimaryColumn
} from 'typeorm';

@Entity()
export default class People extends BaseEntity {
	@PrimaryColumn('varchar')
	id!: string;

	@Column('varchar')
	name!: string;

	@Column('varchar')
	phoneNumber!: string;

	@Column('int')
	rank!: number;

	@Column('varchar')
	gender!: string
}