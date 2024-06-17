'use client';

import { useState, useEffect, ReactNode, cloneElement, ReactElement } from 'react';

const ScreenSize = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	xxl: 1536,
};

interface ScreenContent {
	sm?: ReactNode;
	md?: ReactNode;
	lg?: ReactNode;
	xl?: ReactNode;
	xxl?: ReactNode;
}

interface ResponsiveRendererProps {
	render: ScreenContent;
	children?: ReactNode;
}

export function ResponsiveRenderer(props: ResponsiveRendererProps) {
	const { render, children } = props;
	const [screenSize, setScreenSize] = useState<number>(ScreenSize.sm);
	const [component, setComponent] = useState<ReactElement>();
	const renderContent = () => {
		switch (screenSize) {
			case ScreenSize.sm:
				if (render.sm) return render.sm;
			case ScreenSize.md:
				if (render.md) return render.md;
			case ScreenSize.lg:
				if (render.lg) return render.lg;
			case ScreenSize.xl:
				if (render.xl) return render.xl;
			case ScreenSize.xxl:
				if (render.xxl) return render.xxl;
			default:
				return Object.values(render)[Object.values(render).length - 1];
		}
	};

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const handleResize = () => {
			Object.values(ScreenSize).forEach((value) => {
				if (window.innerWidth >= value) {
					setScreenSize(value);
				}
			});
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		setComponent(cloneElement(renderContent(), undefined, children));
	}, [screenSize]);

	return <>{component}</>;
}
