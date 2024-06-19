import { ICarWithPics } from '@/entities/Car/model/types';
import { redirect } from 'next/navigation';
import 'server-only';

export const getCar = async (id: string) => {
	const url = 'https://test.taxivoshod.ru/api/test/?w=catalog-car&id=' + id;
	const response = await fetch(url);
	if (!response.ok) {
		redirect('/404');
	}
	const resBody = await response.json();
	if (!resBody) {
		redirect('/404');
	}
	if (resBody.message) {
		redirect('/404');
	}

	return {
		car: resBody.item as ICarWithPics,
	};
};
