import getQueryClient from '@/lib/getQueryClient';
import Hydrate from '@/lib/hydrate.client';
import { QueryFunction, QueryKey, dehydrate } from '@tanstack/react-query';

const HydrateWrapper = async ({
	query,
	children,
}: {
	query: { queryKey: QueryKey; queryFn: QueryFunction };
	children: React.ReactNode;
}) => {
	const queryClient = getQueryClient();
	const { queryKey, queryFn } = query;

	await queryClient.prefetchQuery({
		queryKey,
		queryFn,
	});

	const dehydratedState = dehydrate(queryClient);

	return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};

export default HydrateWrapper;
