import { NextFunction, Request, Response } from 'express';
import { validationPipe } from '../utils/validationPipe';

export const validateBodyDTO = (dto: any) => {
	return async function (req: Request, res: Response, next: NextFunction) {
		const result = await validationPipe(dto, req.body);
		if (Array.isArray(result)) {
			return res.status(400).json({ ...result });
		}
		req.body = result;
		next();
	};
};
