import { Label } from '@/shared/components/ui/label';
import { ICarWithPics } from '../model/types';
import Image from 'next/image';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/components/ui/carousel';
import { cn } from '@/shared/lib/utils';
import { NavigateBack } from '@/features/NavigateBack';

interface ViewProps {
	className?: string;
	car: ICarWithPics;
}

export const View = (props: ViewProps) => {
	const { className, car, ...otherProps } = props;
	return (
		<div
			className={cn(
				'flex flex-col gap-[min(20px,5%)] max-h-4/5 w-[min(1240px,95%)] items-center px-[min(20px,5%)]',
				className
			)}
			{...otherProps}
		>
			<NavigateBack />
			<Carousel
				className='flex-1 h-3/5 max-h-[600px]'
				opts={{ align: 'start' }}
			>
				<CarouselContent>
					{car.images?.map((image) => (
						<CarouselItem
							className={cn(car.images.length > 1 && 'md:basis-1/2')}
							key={image.id}
						>
							<Image
								className='object-contain brightness-75 size-full'
								src={image.image}
								alt={car.brand + ' ' + car.model}
								width={300}
								height={200}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='flex justify-between'>
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>

			<div className='flex justify-between w-full mt-4'>
				<div className='flex flex-col gap-4'>
					<Label className='text-xl md:text-2xl font-semibold'>{car.brand + ' ' + car.model}</Label>
					<p className='text-lg font-semibold text-nowrap text-start'>
						{car.price.toLocaleString('ru-RU') + ' ₽'}
					</p>
				</div>
				<p>{car.tarif.map((tarif) => tarif.toLowerCase()).join(', ')}</p>
			</div>
		</div>
	);
};
