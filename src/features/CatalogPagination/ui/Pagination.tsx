'use client';

import {
	Pagination as PaginationPrimitive,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationLink,
	PaginationEllipsis,
} from '@/shared/components/ui/pagination';
import { ScreenSize } from '@/shared/lib/IScreenSize';
import { ISearchParams } from '@/shared/lib/ISearchParams';
import { searchParamsToQuery } from '@/shared/lib/searchParamsToQuery';
import { useScreenSize } from '@/shared/lib/useScreenSize';
import assert from 'assert';
import { useEffect, useState } from 'react';

interface PaginationProps {
	currentPage: number;
	pages: number;
	className?: string;
	searchParams?: ISearchParams;
	items?: number;
}

export const Pagination = (props: PaginationProps) => {
	const { className, pages, currentPage, searchParams, items, ...otherProps } = props;

	console.log('🚀 ~ Pagination ~ searchParams:', searchParams);

	const [itemsToShow, setItemsToShow] = useState(7);
	const { screenSize } = useScreenSize();

	useEffect(() => {
		switch (screenSize) {
			case ScreenSize.sm:
				setItemsToShow(3);
				break;
			case ScreenSize.md:
				setItemsToShow(5);
				break;
			case ScreenSize.lg:
				setItemsToShow(7);
				break;
			default:
				setItemsToShow(items || 7);
		}
	}, [screenSize]);
	const createLink = (page: number) => {
		assert(typeof page === 'number', 'page must be a number');
		let url = '/';
		if (searchParams) {
			url += (
				'?' +
				searchParams.brand?.map((b) => 'brand=' + b).join('&') +
				'&' +
				searchParams.model?.map((m) => 'model=' + m).join('&') +
				'&' +
				searchParams.tarif?.map((t) => 'tarif=' + t).join('&') +
				'&page=' +
				page
			).replaceAll('undefined&', '');
		} else {
			url += '?page=' + page;
		}

		console.log('🚀 ~ createLink ~ url:', url);
		return url;
	};
	return (
		pages > 1 && (
			<PaginationPrimitive
				className={className}
				{...otherProps}
			>
				<PaginationContent className='gap-0 md:gap-1'>
					{currentPage > 1 && (
						<PaginationItem>
							<PaginationPrevious href={createLink(currentPage - 1)} />
						</PaginationItem>
					)}
					{Array(pages)
						.fill(0)
						.map((_, index, arr) => {
							const itemsLeft = arr.length - currentPage;
							const right =
								currentPage + Math.max(itemsToShow - currentPage, Math.floor(itemsToShow / 2));
							const left =
								currentPage - Math.max(itemsToShow - 1 - itemsLeft, Math.floor(itemsToShow / 2));
							if (index + 1 === right + 1 || (index + 1 === left - 1 && index < arr.length)) {
								return (
									<PaginationItem key={index}>
										<PaginationEllipsis />
									</PaginationItem>
								);
							}

							if (index + 1 <= right && index + 1 >= left) {
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
