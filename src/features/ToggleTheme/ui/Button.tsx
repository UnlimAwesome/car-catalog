'use client';

import { Button as ButtonPrimitive, buttonVariants } from '@/shared/components/ui/button';
import { VariantProps } from 'class-variance-authority';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Button = (props: VariantProps<typeof buttonVariants>) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<ButtonPrimitive
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			{...props}
		>
			{theme === 'dark' ? <Sun /> : <Moon />}
		</ButtonPrimitive>
	);
};
