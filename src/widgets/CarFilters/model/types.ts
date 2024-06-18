export enum ActionType {
	toggleBrand = 'toggleBrand',
	toggleModel = 'toggleModel',
	toggleTarif = 'toggleTarif',
	applyFilters = 'applyFilters',
}
export interface IAbstractAction {
	type: ActionType;
}

export interface IBrandAction extends IAbstractAction {
	type: ActionType.toggleBrand;
	payload: string;
}

export interface IModelAction extends IAbstractAction {
	type: ActionType.toggleModel;
	payload: { brand: string; name: string };
}

export interface ITarifAction extends IAbstractAction {
	type: ActionType.toggleTarif;
	payload: string;
}

export type Action = IBrandAction | IModelAction | ITarifAction;

export interface IAppliedFilters {
	brands: string[];
	models: { brand: string; name: string }[];
	tarifs: string[];
}
