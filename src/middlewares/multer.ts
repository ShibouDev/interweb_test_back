import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const fileStorage = multer.diskStorage({
	destination: (req: Request, file: Express.Multer.File, cb: DestinationCallback): void => {
		cb(null, 'public/images/');
	},
	filename: (req: Request, file: Express.Multer.File, cb: FileNameCallback): void => {
		cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
	},
});

const types = ['image/png', 'image/jpg', 'image/jpeg'];

const fileFilter = (request: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
	if (types.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

export const upload = multer({ storage: fileStorage, fileFilter: fileFilter });
