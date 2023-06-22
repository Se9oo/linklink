import { HTTP } from '@/lib/axios';
import { GetUserParamsType, SignUpUserParamsType, UserInfoType } from '@/types/api/user';
import { ResponseDataType } from '@/types/common';

const USER_API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user`;

const UserAPI = {
	getUser: async ({ socialId, loginType }: GetUserParamsType) => {
		const res = await HTTP.get<ResponseDataType<UserInfoType[]>>(
			`${USER_API_ENDPOINT}?loginType=${loginType}&socialId=${socialId}`,
		);

		return res.data;
	},
	postSignUpUser: async (params: SignUpUserParamsType) => {
		const res = await HTTP.post<SignUpUserParamsType, ResponseDataType<null>>(USER_API_ENDPOINT, params);

		return res.data;
	},
};

export default UserAPI;
