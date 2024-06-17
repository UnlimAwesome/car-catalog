import { Button } from '@/shared/components/ui/button';
import {
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	Drawer as DrawerPrimitive,
	DrawerTitle,
	DrawerTrigger,
} from '@/shared/components/ui/drawer';
import { ReactNode } from 'react';
export const Drawer = (props: { children?: ReactNode; trigger: ReactNode; title?: string; description?: string }) => {
	const { children, trigger, title, description } = props;
	return (
		<DrawerPrimitive>
			<DrawerTrigger asChild>{trigger}</DrawerTrigger>
			<DrawerContent className='p-3'>
				{(title || description) && (
					<DrawerHeader>
						{title && <DrawerTitle>{title}</DrawerTitle>}
						{description && <DrawerDescription>{description}</DrawerDescription>}
					</DrawerHeader>
				)}
				{children}
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose asChild>
						<Button variant='outline'>Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</DrawerPrimitive>
	);
};
