import { Router } from 'express';
import { ImageController } from '../../controllers/image';
import { ChangeLabelDTO, DeleteImageDTO } from '../../dto';
import { upload, validateBodyDTO, validateQueryParamsDTO } from '../../middlewares';

export class ImageRoutes {
	path = '/api/image';
	router = Router();

	constructor(imageControllers: ImageController) {
		this.router.post('/upload', upload.array('image'), imageControllers.upload);
		this.router.get('/getAll', imageControllers.get);
		this.router.post('/changeLabel', validateBodyDTO(ChangeLabelDTO), imageControllers.changeLabel);
		this.router.delete('/:id', validateQueryParamsDTO(DeleteImageDTO), imageControllers.delete);
	}
}
