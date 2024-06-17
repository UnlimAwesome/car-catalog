import { FiltersView } from './View';
import { getFilters } from '../api/getFilters';
import { memo } from 'react';

interface filtersProps {
	className?: string;
}

export const Filters = memo(
	async function Filters(props: filtersProps) {
		const filters = await getFilters();
		const { className, ...otherProps } = props;
		return (
			<div
				className={className}
				{...otherProps}
			>
				<FiltersView filters={filters} />
			</div>
		);
	},
	() => true
);
