import {
	Entity,
	Column,
	BaseEntity,
	PrimaryColumn,
	JoinColumn,
	ManyToOne
} from 'typeorm';
import { Rank } from '../entities';

@Entity()
export default class People extends BaseEntity {
	@PrimaryColumn('varchar')
	id!: string;

	@Column('varchar')
	name!: string;

	@Column('varchar')
	phoneNumber!: string;

	@Column('uuid')
	rankId!: string;
	@ManyToOne(() => Rank)
	@JoinColumn({ name: 'rank_id' })
	rank!: Rank;

	@Column('varchar')
	gender!: string
}