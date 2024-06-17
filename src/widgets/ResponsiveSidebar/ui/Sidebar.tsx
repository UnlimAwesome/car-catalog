'use client';

import { ResponsiveRenderer } from '@/shared/components/ResponsiveRenderer';
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
import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	Sheet as SheetPrimitive,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ReactNode } from 'react';

const Sheet = (props: { children?: ReactNode; trigger: ReactNode; title?: string; description?: string }) => {
	const { children, trigger, title, description } = props;
	return (
		<SheetPrimitive>
			<SheetTrigger asChild>{trigger}</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					{title && <SheetTitle>{title}</SheetTitle>}
					{description && <SheetDescription>{description}</SheetDescription>}
					{children}
				</SheetHeader>
			</SheetContent>
		</SheetPrimitive>
	);
};
const Drawer = (props: { children?: ReactNode; trigger: ReactNode; title?: string; description?: string }) => {
	const { children, trigger, title, description } = props;
	return (
		<DrawerPrimitive>
			<DrawerTrigger asChild>{trigger}</DrawerTrigger>
			<DrawerContent>
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

export const Sidebar = (props: { children: ReactNode }) => {
	const { children } = props;
	const button = (
		<Button>
			<Menu />
		</Button>
	);
	return (
		<ResponsiveRenderer render={{ sm: <Drawer trigger={button} />, lg: <Sheet trigger={button} /> }}>
			{children}
		</ResponsiveRenderer>
	);
};
