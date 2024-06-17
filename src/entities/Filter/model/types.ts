export interface IAbstractFilter {
	name: string;
	type: string;
}

export interface IBrandFilter extends IAbstractFilter {
	values: string[];
}

export interface IModelFilter extends IAbstractFilter {
	values: { brand: string; models: string[] }[];
}

export interface ITarifFilter extends IAbstractFilter {
	values: Record<string, string>;
}
