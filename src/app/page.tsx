'use client';

import { ResponsiveRenderer } from '@/shared/components/ResponsiveRenderer';
import { Button } from '@/shared/components/ui/button';
import { useTheme } from 'next-themes';

export default function Home() {
	const { theme, setTheme } = useTheme();
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 sm:bg-background'>
			<Button
				variant='default'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				toggle theme
			</Button>
			<ResponsiveRenderer
				render={{
					sm: <div className="after:block after:absolute relative after:-right-3 after:content-['sm']"></div>,
					md: <div className="after:block after:absolute relative after:-right-3 after:content-['md']"></div>,
					lg: <div className="after:block after:absolute relative after:-right-3 after:content-['lg']"></div>,
					xl: <div className="after:block after:absolute relative after:-right-3 after:content-['xl']"></div>,
					xxl: (
						<div className="after:block after:absolute relative after:-right-3 after:content-['xxl']"></div>
					),
				}}
			>
				Жопа
			</ResponsiveRenderer>
		</main>
	);
}
