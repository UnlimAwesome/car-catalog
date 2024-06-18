import { ITarifFilter } from '@/entities/Filter';
import { Label } from '@/shared/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/shared/components/ui/toggle-group';

interface FilterProps {
	filter: ITarifFilter;
	className?: string;
	onChange?: (value: string) => void;
	applied: string[];
}

export const Filter = (props: FilterProps) => {
	const { className, filter, onChange, applied, ...otherProps } = props;
	return (
		<div className='flex flex-col gap-2'>
			<Label className='text-lg'>{filter.name}</Label>
			<ToggleGroup
				type='multiple'
				variant='outline'
				className='flex flex-wrap gap-2 justify-start'
				value={applied}
			>
				{Object.entries(filter.values).map(([key, value]) => (
					<ToggleGroupItem
						onClick={() => onChange?.(key)}
						className='hover:bg-transparent'
						value={key}
						key={'br-item' + value}
					>
						{value}
					</ToggleGroupItem>
				))}
			</ToggleGroup>
		</div>
	);
};
