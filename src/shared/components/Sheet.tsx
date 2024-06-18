import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	Sheet as SheetPrimitive,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet';
import { ReactNode } from 'react';

interface SheetProps {
	children?: ReactNode;
	trigger: ReactNode;
	title?: string;
	description?: string;
}
export const Sheet = (props: SheetProps) => {
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
