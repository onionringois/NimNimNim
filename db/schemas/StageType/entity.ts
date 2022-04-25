import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { WeaponAuthority } from '../entities';

@Entity()
export default class StageType extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column('int')
	order!: number;

	@Column('uuid')
	approvingAuthorityId!: string;
	@ManyToOne(() => WeaponAuthority)
	@JoinColumn({ name: 'approving_authority_id' })
	approvingAuthority!: WeaponAuthority;
}