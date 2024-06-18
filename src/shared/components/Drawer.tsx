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

interface DrawerProps {
	children?: ReactNode;
	trigger: ReactNode;
	title?: string;
	description?: string;
	onSubmit?: () => void;
}
export const Drawer = (props: DrawerProps) => {
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
					{/* <Button>Подтвердить</Button> */}
					<DrawerClose asChild>
						<Button variant='outline'>Отмена</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</DrawerPrimitive>
	);
};
