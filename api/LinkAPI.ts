import { HTTP } from '@/lib/axios';
import { LinkItemType } from '@/types/api/link';
import { ResponseDataType } from '@/types/common';

const LinkAPI = {
	getLinks: async () => {
		const res = await HTTP.get<ResponseDataType<LinkItemType[]>>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/link`);

		return res.data;
	},
};

export default LinkAPI;
