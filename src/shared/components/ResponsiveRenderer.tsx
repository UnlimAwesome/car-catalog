'use client';

import { ScreenSize } from '@/shared/lib/IScreenSize';
import { useScreenSize } from '@/shared/lib/useScreenSize';
import { useState, useEffect, ReactNode, cloneElement, ReactElement } from 'react';

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
	const [component, setComponent] = useState<ReactElement>();
	const { screenSize } = useScreenSize();
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
		setComponent(cloneElement(renderContent(), undefined, children));
	}, [screenSize]);

	return <>{component}</>;
}
