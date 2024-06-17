import { IBrandFilter } from '@/entities/Filter';
import { Label } from '@/shared/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/shared/components/ui/toggle-group';

interface FilterProps {
	filter: IBrandFilter;
	className?: string;
	onChange?: (value: string) => void;
}

export const Filter = (props: FilterProps) => {
	const { className, filter, onChange, ...otherProps } = props;
	return (
		<div className='flex flex-col gap-2'>
			<Label className='text-lg'>{filter.name}</Label>
			<ToggleGroup
				type='multiple'
				variant='outline'
				className='flex flex-wrap gap-2 justify-start'
			>
				{filter.values.map((brand, index) => (
					<ToggleGroupItem
						onClick={() => onChange?.(brand)}
						className='hover:bg-transparent'
						value={brand}
						key={'br-item' + index}
					>
						{brand}
					</ToggleGroupItem>
				))}
			</ToggleGroup>
		</div>
	);
};
