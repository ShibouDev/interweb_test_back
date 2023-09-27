import { NextFunction, Request, Response } from 'express';
import { validationPipe } from '../utils/validationPipe';

export const validateQueryParamsDTO = (dto: any) => {
	return async function (req: Request, res: Response, next: NextFunction) {
		const result = await validationPipe(dto, req.params);
		if (Array.isArray(result)) {
			return res.status(400).json({ ...result });
		}
		req.params = result;
		next();
	};
};
