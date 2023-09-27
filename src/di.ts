import { ImageController } from './controllers';
import { ImageRoutes } from './routes';
import { ImageService } from './services';
import { Logger } from './utils/logger';

export function di() {
	const logger = new Logger('di');
	logger.info('start');

	function get(instName: string) {
		return inst[instName];
	}

	const inst: { [key: string]: any } = {};

	async function init() {
		logger.info('init');
		inst['imageService'] = new ImageService();
		inst['imageController'] = new ImageController(inst['imageService']);
		inst['routes'] = [new ImageRoutes(inst['imageController'])];
		logger.info('init finish');
	}
	return {
		init,
		get,
	};
}
