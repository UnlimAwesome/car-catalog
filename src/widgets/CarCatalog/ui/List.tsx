import { cn } from '@/shared/lib/utils';
import { getCatalog } from '../api/getCatalog';
import { CarCard } from '@/entities/Car';
import { ISearchParams } from '@/shared/lib/ISearchParams';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationLink,
} from '@/shared/components/ui/pagination';
import { searchParamsToQuery } from '@/shared/lib/searchParamsToQuery';
import assert from 'assert';

interface ListProps {
	className?: string;
	searchParams?: ISearchParams;
}

export const List = async (props: ListProps) => {
	const { className, searchParams, ...otherProps } = props;
	const catalog = await getCatalog(searchParams);
	const createLink = (page: number) => {
		assert(typeof page === 'number', 'page must be a number');
		let url = '/';
		if (searchParams) {
			url += '?' + searchParamsToQuery({ ...searchParams, page: page });
		} else {
			url += '?page=' + page;
		}
		return url;
	};
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
						car={car}
						key={car.id}
					/>
				))}
			</div>
			{catalog.pages > 1 && (
				<Pagination>
					<PaginationContent>
						{catalog.page > 1 && (
							<PaginationItem>
								<PaginationPrevious href={createLink(catalog.page - 1)} />
							</PaginationItem>
						)}
						{Array(catalog.pages)
							.fill(0)
							.map((_, index) => (
								<PaginationItem key={index}>
									<PaginationLink
										isActive={catalog.page === index + 1}
										href={createLink(index + 1)}
									>
										{index + 1}
									</PaginationLink>
								</PaginationItem>
							))}
						{catalog.page < catalog.pages && (
							<PaginationItem>
								<PaginationNext href={createLink(catalog.page + 1)} />
							</PaginationItem>
						)}
					</PaginationContent>
				</Pagination>
			)}
		</>
	);
};
