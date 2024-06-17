import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	Sheet as SheetPrimitive,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet';
import { ReactNode } from 'react';

export const Sheet = (props: { children?: ReactNode; trigger: ReactNode; title?: string; description?: string }) => {
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
