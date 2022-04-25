import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { People } from '../entities';
import Rank from '../Rank/entity';
import StageType from '../StageType/entity';

@Entity()
export default class WeaponAuthority extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column('uuid')
	personId!: string;
	@ManyToOne(() => People)
	@JoinColumn({ name: 'person_id' })
	person!: People

	@Column('uuid')
	stageTypeId!: string;
	@ManyToOne(() => StageType)
	@JoinColumn({ name: 'stage_type_id' })
	stageType!: StageType;
}