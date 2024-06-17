'use client';
import { IBrandFilter, IModelFilter, ITarifFilter } from '@/entities/Filter';
import { BrandFilter } from '@/features/BrandFilter';
import { ModelFilter } from '@/features/ModelFilter';
import { ActionType } from '@/widgets/CarFilters/model/types';
import { useFilters } from '@/widgets/CarFilters/model/useFilters';

interface FiltersProps {
	filters: {
		brandFilter: IBrandFilter;
		modelFilter: IModelFilter;
		tarifFilter: ITarifFilter;
	};
	className?: string;
}

export const Filters = (props: FiltersProps) => {
	const { className, filters, ...otherProps } = props;
	const { appliedFilters, dispatchFilterAction } = useFilters();
	return (
		<div
			className={className}
			{...otherProps}
		>
			<BrandFilter
				filter={filters.brandFilter}
				onChange={(value) => dispatchFilterAction({ type: ActionType.toggleBrand, payload: value })}
			/>
			<ModelFilter
				filter={{
					...filters.modelFilter,
					values: filters.modelFilter.values.filter(
						(m) => appliedFilters.brands.includes(m.brand) || appliedFilters.brands.length === 0
					),
				}}
				applied={appliedFilters.models}
				onChange={(value: { brand: string; name: string }) =>
					dispatchFilterAction({ type: ActionType.toggleModel, payload: value })
				}
			/>
		</div>
	);
};
