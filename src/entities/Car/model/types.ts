export interface ICar {
	id: number;
	brand: string;
	model: string;
	number: string;
	price: number;
	image: string;
	tarif: string[];
}

export interface ICarWithPics extends Omit<ICar, 'image' | 'number'> {
	images: {
		id: string;
		image: string;
	}[];
}
