'use client';

import { signIn } from 'next-auth/react';

const ServiceIntro = () => {
	return (
		<>
			<p className="block mb-6 text-[32px] leading-10 font-light text-center">
				다양한 링크들을
				<br />
				<strong className="inline-block font-bold text-transparent bg-gradient-to-tr from-[#00d2ff] to-[#3a7bd5] bg-clip-text">
					간편하게
				</strong>
				{` 관리해보세요!`}
			</p>
			<button
				type="button"
				className="w-full h-[56px] rounded-full bg-main text-white shadow-xl"
				onClick={() => signIn()}
			>
				linklink 시작하기
			</button>
		</>
	);
};

export default ServiceIntro;
