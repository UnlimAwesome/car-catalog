'use client';

import { Button as ButtonPrimitive } from '@/shared/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const Button = () => {
	const router = useRouter();
	return (
		<ButtonPrimitive
			variant='link'
			className='self-start'
			onClick={router.back}
		>
			<ArrowLeft
				size={20}
				className='animate-bounce-left'
			/>
			<p className='ml-2'>Вернуться назад</p>
		</ButtonPrimitive>
	);
};
