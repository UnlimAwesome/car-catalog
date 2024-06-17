import { IAppliedFilters } from './types';

export function toggleBrand(state: IAppliedFilters, brand: string): IAppliedFilters {
	if (state.brands.length === 0) {
		return { ...state, brands: [brand], models: state.models.filter((m) => m.brand === brand) };
	}

	if (state.brands.includes(brand)) {
		return {
			...state,
			brands: state.brands.filter((b) => b !== brand),
			models: state.models.filter((m) => m.brand !== brand),
		};
	}
	return {
		...state,
		brands: [...state.brands, brand],
	};
}

export function toggleModel(state: IAppliedFilters, model: { brand: string; name: string }): IAppliedFilters {
	if (state.models.includes(model)) {
		return {
			...state,
			models: state.models.filter((m) => m.name !== model.name),
		};
	}
	return {
		...state,
		models: [...state.models, model],
	};
}

export function toggleTarif(state: IAppliedFilters, tarif: string): IAppliedFilters {
	if (state.tarifs.includes(tarif)) {
		return {
			...state,
			tarifs: state.tarifs.filter((t) => t !== tarif),
		};
	}
	return {
		...state,
		tarifs: [...state.tarifs, tarif],
	};
}
