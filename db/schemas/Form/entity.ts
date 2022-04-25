import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { People } from '../entities';

@Entity()
export default class Form extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column('varchar')
	type!: string;

	@Column('varchar')
	dutyType!: string;

	@Column({ type: 'date'})
	endDate!: string;

	@Column({ type: 'date'})
	startDate!: string;

	@Column('uuid')
	personId!: string;
	@ManyToOne(() => People)
	@JoinColumn({ name: 'person_id' })
	person!: People
}