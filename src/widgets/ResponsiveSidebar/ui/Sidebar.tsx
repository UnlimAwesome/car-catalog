'use client';

import { Drawer } from '@/shared/components/Drawer';
import { ResponsiveRenderer } from '@/shared/components/ResponsiveRenderer';
import { Sheet } from '@/shared/components/Sheet';
import { Button } from '@/shared/components/ui/button';

import { Menu } from 'lucide-react';
import { ReactNode } from 'react';

export const Sidebar = (props: { children: ReactNode }) => {
	const { children } = props;
	const button = (
		<Button variant='ghost'>
			<Menu />
		</Button>
	);
	return (
		<ResponsiveRenderer render={{ sm: <Drawer trigger={button} />, lg: <Sheet trigger={button} /> }}>
			{children}
		</ResponsiveRenderer>
	);
};
