import {
	Pagination as PaginationPrimitive,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationLink,
	PaginationEllipsis,
} from '@/shared/components/ui/pagination';
import { ISearchParams } from '@/shared/lib/ISearchParams';
import { searchParamsToQuery } from '@/shared/lib/searchParamsToQuery';
import assert from 'assert';

interface PaginationProps {
	currentPage: number;
	pages: number;
	className?: string;
	searchParams?: ISearchParams;
	itemsToShow?: number;
}

export const Pagination = (props: PaginationProps) => {
	const { className, pages, currentPage, searchParams, itemsToShow = 5, ...otherProps } = props;
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
		pages > 1 && (
			<PaginationPrimitive
				className={className}
				{...otherProps}
			>
				<PaginationContent>
					{currentPage > 1 && (
						<PaginationItem>
							<PaginationPrevious href={createLink(currentPage - 1)} />
						</PaginationItem>
					)}
					{Array(pages)
						.fill(0)
						.map((_, index, arr) => {
							const itemsLeft = arr.length - currentPage;
							if (
								index + 1 ===
									currentPage - (itemsToShow + 1 - Math.min(itemsLeft, Math.ceil(itemsToShow / 2))) ||
								(index + 1 ===
									currentPage + Math.max(itemsToShow + 1 - currentPage, Math.ceil(itemsToShow / 2)) &&
									index < arr.length)
							) {
								console.log('🚀 ~ .map ~ index:', index);

								return (
									<PaginationItem key={index}>
										<PaginationEllipsis />
									</PaginationItem>
								);
							}

							// console.log('🚀 ~ .map ~ itemsLeft:', itemsLeft);

							if (
								index + 1 <
									currentPage + Math.max(itemsToShow - currentPage, Math.ceil(itemsToShow / 2)) &&
								index + 1 > currentPage - Math.max(itemsToShow - itemsLeft, Math.ceil(itemsToShow / 2))
							) {
								return (
									<PaginationItem key={index}>
										<PaginationLink
											isActive={currentPage === index + 1}
											href={createLink(index + 1)}
										>
											{index + 1}
										</PaginationLink>
									</PaginationItem>
								);
							}
						})}
					{currentPage < pages && (
						<PaginationItem>
							<PaginationNext href={createLink(currentPage + 1)} />
						</PaginationItem>
					)}
				</PaginationContent>
			</PaginationPrimitive>
		)
	);
};
