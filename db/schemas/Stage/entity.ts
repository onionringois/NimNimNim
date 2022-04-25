import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { People } from '../../entities';
import Form from '../Form/entity';
import StageType from '../StageType/entity';
import WeaponAuthority from '../WeaponAuthority/entity';

@Entity()
export default class Stage extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column('uuid')
	approvingAuthorityId!: string;
	@ManyToOne(() => WeaponAuthority)
	@JoinColumn({ name: 'approvingAuthorityId' })
	approvingAuthority!: WeaponAuthority;

	@Column('uuid')
	formId!: string;
	@ManyToOne(() => Form)
	@JoinColumn({ name: 'form_id' })
	form!: Form;

	@Column('uuid')
	stageTypeId!: string;
	@ManyToOne(() => StageType)
	@JoinColumn({ name: 'stage_type_id' })
	stageType!: StageType;
}