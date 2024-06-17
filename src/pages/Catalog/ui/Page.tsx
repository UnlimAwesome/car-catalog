import { CarCard } from '@/entities/Car';
import { ToggleTheme } from '@/features/ToggleTheme';
import { cn } from '@/shared/lib/utils';
import { CarFilters } from '@/widgets/CarFilters';
import { ResponsiveSidebar } from '@/widgets/ResponsiveSidebar';

interface PageProps {
	className?: string;
}

export const Page = (props: PageProps) => {
	const { className, ...otherProps } = props;
	const car = {
		id: 1489,
		brand: 'BMW',
		model: 'X2',
		number: 'В999ХА198',
		price: 4420000,
		image: 'https://test.taxivoshod.ru/images/cars/img_5607_275x150c.webp',
		tarif: ['Комфорт'],
	};
	return (
		<div
			className={cn(className)}
			{...otherProps}
		>
			<ToggleTheme variant='ghost' />
			<ResponsiveSidebar>
				<CarFilters />
			</ResponsiveSidebar>
			<CarCard car={car} />
		</div>
	);
};
