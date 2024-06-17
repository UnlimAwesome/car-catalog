import { toggleBrand, toggleModel, toggleTarif } from '@/widgets/CarFilters/model/actions';
import { useReducer, useState } from 'react';
import { Action, ActionType, IAppliedFilters } from './types';

const defaultValue: IAppliedFilters = {
	brands: [],
	models: [],
	tarifs: [],
};

const reducer = (state: IAppliedFilters, action: Action) => {
	console.log(action.type);
	switch (action.type) {
		case ActionType.toggleBrand:
			return toggleBrand(state, action.payload);
		case ActionType.toggleModel:
			return toggleModel(state, action.payload);
		case ActionType.toggleTarif:
			return toggleTarif(state, action.payload);
	}
};

export function useFilters(filters?: IAppliedFilters) {
	const [appliedFilters, dispatchFilterAction] = useReducer(reducer, filters, () => filters || defaultValue);

	return { appliedFilters, dispatchFilterAction };
}
