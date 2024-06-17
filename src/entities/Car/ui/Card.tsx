import Image from 'next/image';
import { ICar } from '../model/types';
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	Card as CardPrimitive,
	CardTitle,
} from '@/shared/components/ui/card';

interface CardProps {
	className?: string;
	car: ICar;
}

export const Card = (props: CardProps) => {
	const { className, car, ...otherProps } = props;
	return (
		<CardPrimitive className='overflow-hidden min-w-64'>
			<CardHeader className='flex flex-col min-w-20 overflow-hidden p-0 h-40'>
				<Image
					className='h-full w-full object-cover brightness-75'
					src={car.image}
					alt={car.brand + ' ' + car.model}
					width={300}
					height={200}
				/>
			</CardHeader>
			<CardContent className='flex pr-2 w-auto items-start justify-between gap-5 py-2'>
				<div>
					<CardTitle className='z-10'>{car.brand + ' ' + car.model}</CardTitle>
					<p className='text-lg font-semibold'>{car.price.toLocaleString('ru-RU') + ' ₽'}</p>
				</div>
				<div className='outline-2 outline rounded flex h-6 items-end flex-1 max-w-28'>
					<p className='text-center flex-1 font-semibold align-bottom h-full'>
						{car.number.slice(0, 6).toLocaleLowerCase('ru-RU')}
					</p>
					<p className='w-1/4 border-l-2 border-primary ml-auto font-semibold text-center h-full text-sm'>
						{car.number.slice(6)}
					</p>
				</div>
			</CardContent>
			<CardFooter>
				<p>{car.tarif.map((tarif) => tarif.toLowerCase()).join(', ')}</p>
			</CardFooter>
		</CardPrimitive>
	);
};
