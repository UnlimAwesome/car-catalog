import { ToggleTheme } from '@/features/ToggleTheme';
import { cn } from '@/shared/lib/utils';
import { CarFilters } from '@/widgets/CarFilters';
import { ResponsiveSidebar } from '@/widgets/ResponsiveSidebar';

interface PageProps {
	className?: string;
}

export const Page = (props: PageProps) => {
	const { className, ...otherProps } = props;
	return (
		<div
			className={cn(className)}
			{...otherProps}
		>
			<ToggleTheme />
			<ResponsiveSidebar>
				<CarFilters />
			</ResponsiveSidebar>
		</div>
	);
};
