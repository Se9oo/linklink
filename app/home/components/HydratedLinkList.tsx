import LinkAPI from '@/api/LinkAPI';
import HydrateWrapper from '@/components/hydrate/HydrateWrapper';
import { QUERY_KEY } from '@/constants/queryKey';
import LinkList from './LinkList';

const HydratedLinkList = () => {
	const query = {
		queryKey: [QUERY_KEY.getLinkList],
		queryFn: () => LinkAPI.getLinks(),
	};

	return (
		<HydrateWrapper query={query}>
			<LinkList />
		</HydrateWrapper>
	);
};

export default HydratedLinkList;
