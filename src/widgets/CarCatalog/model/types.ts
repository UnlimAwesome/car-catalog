import { ICar } from '@/entities/Car/model/types';

export interface ICatalog {
	page: number;
	pages: number;
	per_page: number;
	list: ICar[];
}
