import { Filters } from './Filters';
import { getFilters } from '../api/getFilters';

interface SidebarProps {
	className?: string;
}

export const Sidebar = async (props: SidebarProps) => {
	const filters = await getFilters();
	const { className, ...otherProps } = props;
	return (
		<div
			className={className}
			{...otherProps}
		>
			<Filters filters={filters} />
		</div>
	);
};
