import { ISearchParams } from '@/shared/lib/ISearchParams';
import { getFilters } from '../api/getFilters';
import { FiltersView } from './View';

interface filtersProps {
	className?: string;
	searchParams?: ISearchParams;
}

export const Filters = async (props: filtersProps) => {
	const filters = await getFilters();
	const { className, searchParams, ...otherProps } = props;
	return (
		<div
			className={className}
			{...otherProps}
		>
			<FiltersView filters={filters} />
		</div>
	);
};
