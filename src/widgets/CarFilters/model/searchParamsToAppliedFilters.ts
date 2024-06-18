import { IBrandFilter, IModelFilter, ITarifFilter } from '@/entities/Filter';
import { IAppliedFilters } from '@/widgets/CarFilters/model/types';
import { ReadonlyURLSearchParams } from 'next/navigation';

export function searchParamsToAppliedFilters(
	filters: { brandFilter: IBrandFilter; modelFilter: IModelFilter; tarifFilter: ITarifFilter },
	searchParams?: ReadonlyURLSearchParams | null
) {
	let initFilters: IAppliedFilters = {
		brands: [],
		models: [],
		tarifs: [],
	};
	if (searchParams) {
		if (searchParams.getAll('brand').length > 0) {
			initFilters.brands = [...searchParams.getAll('brand')];
		}
		if (searchParams.getAll('model').length > 0) {
			searchParams.getAll('model').forEach((m) =>
				filters.modelFilter.values.forEach((v) => {
					if (v.models.includes(m)) initFilters.models.push({ brand: v.brand, name: m });
				})
			);
		}
		if (searchParams.getAll('tarif').length > 0) {
			initFilters.tarifs = [...searchParams.getAll('tarif')];
		}
	}
	return initFilters;
}
