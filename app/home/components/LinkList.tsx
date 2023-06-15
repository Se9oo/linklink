'use client';

import { useGetLinkList } from '@/hooks/queries/link';

const LinkList = () => {
	const { data } = useGetLinkList({ staleTime: 6 * 10 * 1000 });

	return null;
};

export default LinkList;
