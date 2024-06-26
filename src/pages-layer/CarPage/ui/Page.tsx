import { CarView } from '@/entities/Car';
import { cn } from '@/shared/lib/utils';
import { getCar } from '../api/getCar';

interface PageProps {
	id: string;
	className?: string;
}

export const Page = async (props: PageProps) => {
	const { className, id, ...otherProps } = props;
	const { car } = await getCar(id);

	return (
		<div
			className={cn('size-full flex flex-col justify-center items-center gap-5', className)}
			{...otherProps}
		>
			<CarView car={car} />
		</div>
	);
};
