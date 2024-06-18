import { ScreenSize } from '@/shared/lib/IScreenSize';
import { useState, useEffect } from 'react';

export function useScreenSize() {
	const [screenSize, setScreenSize] = useState<number>(ScreenSize.sm);
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

	return { screenSize };
}
