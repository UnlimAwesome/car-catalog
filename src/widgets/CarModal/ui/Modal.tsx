'use client';

import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { useRouter } from 'next/navigation';

interface ModalProps {
	children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
	const { children } = props;
	const router = useRouter();
	return (
		<Dialog
			defaultOpen
			onOpenChange={() => router.back()}
		>
			<DialogContent className='w-[min(1400px,95%)]'>{children}</DialogContent>
		</Dialog>
	);
};
