import { ISearchParams } from '@/shared/lib/ISearchParams';
import 'server-only';
import { ICatalog } from '../model/types';
import { searchParamsToQuery } from '@/shared/lib/searchParamsToQuery';

export async function getCatalog(searchParams: ISearchParams | undefined) {
	let url = 'https://test.taxivoshod.ru/api/test/?w=catalog-cars';
	if (searchParams) {
		url += '&' + searchParamsToQuery(searchParams);
	}
	const response = await fetch(url, {
		cache: 'force-cache',
	});
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	const resBody = (await response.json()) as ICatalog;
	resBody.page = Number(resBody.page);
	return resBody;
}
