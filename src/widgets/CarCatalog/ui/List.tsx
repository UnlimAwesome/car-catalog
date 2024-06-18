import { cn } from '@/shared/lib/utils';
import { getCatalog } from '../api/getCatalog';
import { CarCard } from '@/entities/Car';
import { ISearchParams } from '@/shared/lib/ISearchParams';

import { searchParamsToQuery } from '@/shared/lib/searchParamsToQuery';
import assert from 'assert';
import { CatalogPagination } from '@/features/CatalogPagination';

interface ListProps {
	className?: string;
	searchParams?: ISearchParams;
}

export const List = async (props: ListProps) => {
	const { className, searchParams, ...otherProps } = props;
	const catalog = await getCatalog(searchParams);

	return (
		<>
			<div
				className={cn(
					'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-8',
					className
				)}
				{...otherProps}
			>
				{catalog.list.map((car) => (
					<CarCard
						className='max-h-72'
						car={car}
						key={car.id}
					/>
				))}
			</div>
			<CatalogPagination
				currentPage={catalog.page}
				pages={catalog.pages}
				searchParams={searchParams}
			/>
		</>
	);
};
