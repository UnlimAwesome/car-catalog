import { IModelFilter } from '@/entities/Filter';
import { Label } from '@/shared/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/shared/components/ui/toggle-group';

interface FilterProps {
	filter: IModelFilter;
	applied: { brand: string; name: string }[];
	className?: string;
	onChange?: (value: { brand: string; name: string }) => void;
}

export const Filter = (props: FilterProps) => {
	const { className, filter, onChange, applied, ...otherProps } = props;
	const possibleFilters = filter.values;
	return (
		<div className='flex flex-col gap-2'>
			<Label className='text-lg'>{filter.name}</Label>
			<ToggleGroup
				value={applied.map((value) => value.name)}
				onValueChange={(value) => {
					if (applied.length > value.length) {
						onChange?.(applied.filter((item) => !value.includes(item.name))[0]);
						return;
					} else {
						const name = value.filter((item) => !applied.map((item) => item.name).includes(item))[0];
						onChange?.({ name, brand: possibleFilters.find((item) => item.models.includes(name))!.brand });
						return;
					}
				}}
				type='multiple'
				variant='outline'
				className='flex flex-wrap gap-2 justify-start'
			>
				{possibleFilters.map((value, index) =>
					value.models.map((model, i) => (
						<ToggleGroupItem
							className='hover:bg-transparent'
							value={model}
							key={'br-item' + index + '-' + i}
						>
							{model}
						</ToggleGroupItem>
					))
				)}
			</ToggleGroup>
		</div>
	);
};
