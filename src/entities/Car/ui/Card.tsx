import { CardContent, CardFooter, CardHeader, Card as CardPrimitive, CardTitle } from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import { ICar } from '../model/types';
import Link from 'next/link';

interface CardProps {
	className?: string;
	car: ICar;
	onClick?: () => void | Promise<any>;
}

export const Card = (props: CardProps) => {
	const { className, car, onClick, ...otherProps } = props;
	return (
		<Link href={`/car?id=${car.id}`}>
			<CardPrimitive
				className={cn('overflow-hidden min-w-64 cursor-pointer', className)}
				onClick={onClick}
				{...otherProps}
			>
				<CardHeader className='flex flex-col min-w-20 overflow-hidden p-0 h-40'>
					{car.image && (
						<Image
							className='h-full w-full object-cover brightness-75'
							src={car.image}
							alt={car.brand + ' ' + car.model}
							width={300}
							height={200}
						/>
					)}
				</CardHeader>
				<CardContent className='flex pr-2 w-auto items-start justify-between gap-5 py-2'>
					<CardTitle className='z-10'>{car.brand + ' ' + car.model}</CardTitle>
					<div className='flex flex-col gap-4'>
						<div className='outline-2 outline rounded flex h-6 items-end flex-1 max-w-28'>
							<p className='text-center flex-1 font-semibold align-bottom h-full px-2'>
								{car.number.slice(0, 6).toLocaleLowerCase('ru-RU')}
							</p>
							<p className='w-1/4 min-w-min border-l-2 border-primary ml-auto font-semibold text-center h-full text-sm px-1'>
								{car.number.slice(6)}
							</p>
						</div>
						<p className='text-lg font-semibold text-nowrap text-end'>
							{car.price.toLocaleString('ru-RU') + ' ₽'}
						</p>
					</div>
				</CardContent>
				<CardFooter>
					<p>{car.tarif.map((tarif) => tarif.toLowerCase()).join(', ')}</p>
				</CardFooter>
			</CardPrimitive>
		</Link>
	);
};
