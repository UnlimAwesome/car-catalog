import { cn } from '@/shared/lib/utils';

interface PageProps {
	className?: string;
}

export const Page = (props: PageProps) => {
	const { className, ...otherProps } = props;
	return (
		<div
			className={cn(className)}
			{...otherProps}
		></div>
	);
};
