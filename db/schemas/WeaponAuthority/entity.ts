import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { People } from '../entities';
import StageType from '../StageType/entity';

@Entity()
export default class WeaponAuthority extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column('uuid')
	approverId!: string;
	@ManyToOne(() => People)
	@JoinColumn({ name: 'approver_id' })
	approver!: People

	@Column('uuid')
	stageTypeId!: string;
	@ManyToOne(() => StageType)
	@JoinColumn({ name: 'stage_type_id' })
	stageType!: StageType;
}