import { toggleBrand, toggleModel, toggleTarif } from './actions';
import { useReducer } from 'react';
import { Action, ActionType, IAppliedFilters } from './types';
import { useSearchParams } from 'next/navigation';
import { IBrandFilter, IModelFilter, ITarifFilter } from '@/entities/Filter';
import { searchParamsToAppliedFilters } from './searchParamsToAppliedFilters';

const defaultValue: IAppliedFilters = {
	brands: [],
	models: [],
	tarifs: [],
};

const reducer = (state: IAppliedFilters, action: Action) => {
	switch (action.type) {
		case ActionType.toggleBrand:
			return toggleBrand(state, action.payload);
		case ActionType.toggleModel:
			return toggleModel(state, action.payload);
		case ActionType.toggleTarif:
			return toggleTarif(state, action.payload);
	}
};

export function useFilters(filters: {
	brandFilter: IBrandFilter;
	modelFilter: IModelFilter;
	tarifFilter: ITarifFilter;
}) {
	const searchParams = useSearchParams();
	const initFilters = searchParamsToAppliedFilters(filters, searchParams);

	const [appliedFilters, dispatchFilterAction] = useReducer(reducer, initFilters);

	return { appliedFilters, dispatchFilterAction };
}
