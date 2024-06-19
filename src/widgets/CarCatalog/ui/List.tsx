import { CarCard } from '@/entities/Car';
import { ISearchParams } from '@/shared/lib/ISearchParams';
import { cn } from '@/shared/lib/utils';
import { getCatalog } from '../api/getCatalog';

import { CatalogPagination } from '@/features/CatalogPagination';
import { redirect } from 'next/navigation';

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
					'flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-8',
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
