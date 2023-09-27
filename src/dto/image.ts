import { Expose, Transform } from 'class-transformer';
import { IsInt, IsString, MaxLength } from 'class-validator';

export class ChangeLabelDTO {
	@Expose()
	@IsInt()
	id!: number;

	@Expose()
	@IsString()
	@MaxLength(100)
	label!: string;
}

export class DeleteImageDTO {
	@Expose()
	@IsInt()
	@Transform(({value})=> Number(value))
	id!: number;
}
