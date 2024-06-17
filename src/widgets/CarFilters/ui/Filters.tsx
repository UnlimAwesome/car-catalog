import { getFilters } from '../api/getFilters';
import { FiltersView } from './View';

interface filtersProps {
	className?: string;
}

export const Filters = async (props: filtersProps) => {
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
};
