import { ISearchParams } from '@/shared/lib/ISearchParams';

export function parseSearchParams(searchParams: any | undefined): ISearchParams | undefined {
	const obj: ISearchParams = {};
	console.log('parseSearchParams', searchParams, !searchParams);
	if (Object.values(searchParams).length === 0 || !searchParams) return undefined;

	if (searchParams.brand) {
		obj.brand = Array.isArray(searchParams.brand) ? searchParams.brand : [searchParams.brand];
	}
	if (searchParams.model) {
		obj.model = Array.isArray(searchParams.model) ? searchParams.model : [searchParams.model];
	}
	if (searchParams.tarif) {
		obj.tarif = Array.isArray(searchParams.tarif) ? searchParams.tarif : [searchParams.tarif];
	}
	if (searchParams.page) {
		obj.page = searchParams.page;
	}
	return obj;
}
