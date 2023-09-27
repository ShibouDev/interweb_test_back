import { PrismaClient } from '@prisma/client';
import { ChangeLabelDTO, DeleteImageDTO } from '../../dto';
export class ImageService {
	constructor(private readonly prisma = new PrismaClient()) {}
	monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	upload = async (dto: Express.Multer.File[]) => {
		const date = new Date();
		const prepareDataToCreate = dto.map(img => ({
			label: `${date.getDate()} ${this.monthNames[date.getMonth()]}`,
			filename: img.filename,
		}));
		const images = this.prisma.image.createMany({
			data: prepareDataToCreate,
		});
		return images;
	};
	get = async () => {
		const images = await this.prisma.image.findMany();
		const data = Object.values(
			images.reduce((acc: any, image) => {
				const date = `${this.monthNames[image.createdAt.getMonth()]} ‘${image.createdAt.getDate()}`;
				acc[date] = acc[date] || { createdAt: date, images: [] };
				acc[date].images.push(image);
				return acc;
			}, {})
		);
		return data;
	};
    delete = async(dto: DeleteImageDTO) => {
        const delImage = this.prisma.image.delete({
            where: {
                id: dto.id
            }
        })
        return delImage
    }
	changeLabel = async (dto: ChangeLabelDTO) => {
		const updImage = await this.prisma.image.update({
			where: {
				id: dto.id,
			},
			data: {
				label: dto.label,
			},
		});
		return updImage;
	};
}
