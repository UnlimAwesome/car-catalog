import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/global/styles/globals.css';
import { cn } from '@/shared/lib/utils';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html
			lang='ru'
			suppressHydrationWarning
		>
			<body className={cn('min-h-svh font-sans antialiased', inter.variable)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<main className='flex flex-col items-center justify-center box-border p-3 flex-1'>
						{children}
						{modal}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
