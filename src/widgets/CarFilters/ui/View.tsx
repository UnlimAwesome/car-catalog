'use client';
import { IBrandFilter, IModelFilter, ITarifFilter } from '@/entities/Filter';
import { BrandFilter } from '@/features/BrandFilter';
import { ModelFilter } from '@/features/ModelFilter';
import { TarifFilter } from '@/features/TarifFilter';
import { Button } from '@/shared/components/ui/button';
import { DrawerClose } from '@/shared/components/ui/drawer';
import { SheetTrigger } from '@/shared/components/ui/sheet';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ActionType } from '../model/types';
import { useFilters } from '../model/useFilters';

interface FiltersProps {
	filters: {
		brandFilter: IBrandFilter;
		modelFilter: IModelFilter;
		tarifFilter: ITarifFilter;
	};
	className?: string;
}

export const FiltersView = (props: FiltersProps) => {
	const { className, filters, ...otherProps } = props;
	const router = useRouter();
	const { appliedFilters, dispatchFilterAction } = useFilters(filters);
	return (
		appliedFilters && (
			<div
				className={cn('flex flex-col gap-4', className)}
				{...otherProps}
			>
				<BrandFilter
					filter={filters.brandFilter}
					onChange={(value) => dispatchFilterAction({ type: ActionType.toggleBrand, payload: value })}
					applied={appliedFilters.brands}
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
				<TarifFilter
					filter={filters.tarifFilter}
					onChange={(value) => dispatchFilterAction({ type: ActionType.toggleTarif, payload: value })}
					applied={appliedFilters.tarifs}
				/>
				<DrawerClose asChild>
					<SheetTrigger asChild>
						<Button
							onClick={function applyFilters() {
								let url = '/?';
								appliedFilters.brands.forEach((b) => {
									url += `brand=${b}&`;
								});

								appliedFilters.models.forEach((m) => {
									url += `model=${m.name}&`;
								});

								appliedFilters.tarifs.forEach((t) => {
									url += `tarif=${t}&`;
								});

								router.push(url);
							}}
						>
							Подтвердить
						</Button>
					</SheetTrigger>
				</DrawerClose>
			</div>
		)
	);
};
