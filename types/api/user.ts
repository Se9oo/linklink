export interface GetUserParamsType {
	socialId: string;
	loginType: string;
}

export interface UserInfoType {
	userId: number;
	userName: string;
	status: number;
	loginType: string;
	createdAt: string;
	deletedAt: string | null;
	socialId: string;
}

export interface SignUpUserParamsType {
	userName: string | null | undefined;
	socialId: string;
	loginType: string;
}
