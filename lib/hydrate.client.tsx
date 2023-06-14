'use client';

import { Hydrate as ReactQueryHydrate, HydrateProps } from '@tanstack/react-query';

const Hydrate = (props: HydrateProps) => {
	return <ReactQueryHydrate {...props} />;
};

export default Hydrate;
