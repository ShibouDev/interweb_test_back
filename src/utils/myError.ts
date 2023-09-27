import { Response } from 'express';
class ValidateError extends Error {
	readonly statusCode: number;

	constructor(statusCode: number, message: string) {
		super(message);
		this.statusCode = statusCode;
	}
}

export const CustomError = (error: any, res: Response) => {
	if (error instanceof ValidateError) {
		res.status(error.statusCode).json({ msg: error.message });
		return;
	}
	res.status(500).json({ msg: 'Internal Server' });
	return;
};
