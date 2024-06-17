import { IBrandFilter, IModelFilter, ITarifFilter } from '@/entities/Filter';
import 'server-only';

export async function getFilters() {
	const response = await fetch('https://test.taxivoshod.ru/api/test/?w=catalog-filter', {
		next: { revalidate: 60 * 60 * 10 },
	});

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	const resBody = await response.json();
	const brandFilter = { ...resBody.brands, type: 'brand' } as IBrandFilter;
	const modelFilter = resBody.models as IModelFilter;
	const tarifFilter = resBody.tarif as ITarifFilter;

	return { brandFilter, modelFilter, tarifFilter };
}
