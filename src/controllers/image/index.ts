import { Request, Response } from 'express';
import { DeleteImageDTO } from '../../dto';
import { ImageService } from '../../services/image';
import { CustomError } from '../../utils/myError';
export class ImageController {
	constructor(private readonly imageService: ImageService) {}
	upload = async (req: Request, res: Response) => {
		try {
			const files = req.files as Express.Multer.File[];
			const images = await this.imageService.upload(files);
			if (!images) return res.status(400).json(images);
			return res.status(200).json(images);
		} catch (error) {
			CustomError(error, res);
		}
	};
	get = async (req: Request, res: Response) => {
		try {
			const data = await this.imageService.get();
			return res.status(200).json(data);
		} catch (error) {
			CustomError(error, res);
		}
	};
	delete = async (req: Request, res: Response) => {
		try {
			await this.imageService.delete(req.params as unknown as DeleteImageDTO);
			return res.status(200).json();
		} catch (error) {
			CustomError(error, res);
		}
	};
	changeLabel = async (req: Request, res: Response) => {
		try {
			const image = await this.imageService.changeLabel(req.body);
			return res.status(200).json(image);
		} catch (error) {
			CustomError(error, res);
		}
	};
}
