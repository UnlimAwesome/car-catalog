import { ToggleTheme } from '@/features/ToggleTheme';
import { ISearchParams } from '@/shared/lib/ISearchParams';
import { cn } from '@/shared/lib/utils';
import { CarCatalog } from '@/widgets/CarCatalog';
import { CarFilters } from '@/widgets/CarFilters';
import { ResponsiveSidebar } from '@/widgets/ResponsiveSidebar';

interface PageProps {
	className?: string;
	searchParams?: ISearchParams;
}

export const Page = (props: PageProps) => {
	const { className, searchParams, ...otherProps } = props;
	return (
		<div
			className={cn('size-full flex flex-col justify-between', className)}
			{...otherProps}
		>
			<div className='flex gap-2'>
				<ResponsiveSidebar>
					<CarFilters />
				</ResponsiveSidebar>
				<ToggleTheme variant='ghost' />
			</div>
			<CarCatalog searchParams={searchParams} />
		</div>
	);
};
