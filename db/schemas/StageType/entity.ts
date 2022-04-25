import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import Rank from '../Rank/entity';

@Entity()
export default class StageType extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column('int')
	order!: number;

	@Column('uuid')
	approvingAuthorityId!: string;
	@ManyToOne(() => Rank)
	@JoinColumn({ name: 'approving_authority_id' })
	approvingAuthority!: Rank;
}