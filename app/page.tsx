const Linklink = () => {
	return (
		<section className="relative flex flex-col items-center justify-center h-full p-6 mt-12 translate-y-[-48px]">
			<p className="block mb-6 text-[32px] leading-10 font-light text-center">
				다양한 링크들을
				<br />
				<strong className="inline-block font-bold text-transparent bg-gradient-to-tr from-[#00d2ff] to-[#3a7bd5] bg-clip-text">
					간편하게
				</strong>{' '}
				관리해보세요!
			</p>
			<button
				type="button"
				className="w-full h-[56px] rounded-full bg-main text-white shadow-xl"
			>
				linklink 시작하기
			</button>
		</section>
	);
};

export default Linklink;
