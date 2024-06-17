import { cn } from '@/shared/lib/utils';
import { CarFilters } from '@/widgets/CarFilters';

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
			<CarFilters />
		</div>
	);
};
