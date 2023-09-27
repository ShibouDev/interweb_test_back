import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
export * from 'class-validator';

export const validationPipe = async (schema: new () => {}, requestObject: object) => {
	const transformedClass = plainToInstance(schema, requestObject, { excludeExtraneousValues: true });
	const errors = await validate(transformedClass);
	if (errors.length > 0) {
		return errors;
	}
	return transformedClass;
};
