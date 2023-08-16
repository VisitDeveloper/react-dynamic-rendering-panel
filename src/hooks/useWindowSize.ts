'use client'
import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
	const [ size, setSize ] = useState<Array<number>>([ 0 ]);
	useLayoutEffect(() => {
		function updateSize() {
			// eslint-disable-next-line no-undef
			setSize([ window.innerWidth ]);
		}
		// eslint-disable-next-line no-undef
		window.addEventListener('resize', updateSize);
		updateSize();
		// eslint-disable-next-line no-undef
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return size;
}
