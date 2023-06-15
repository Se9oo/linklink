import { QueryObserverOptions, useQuery } from '@tanstack/react-query';
import LinkAPI from '@/api/LinkAPI';
import { QUERY_KEY } from '@/constants/queryKey';

export const useGetLinkList = (options?: QueryObserverOptions) => {
	const queryResult = useQuery({
		queryKey: [`${QUERY_KEY.getLinkList}`],
		queryFn: () => LinkAPI.getLinks(),
		...options,
	});

	return queryResult;
};
