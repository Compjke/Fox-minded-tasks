const ClockIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			className={className}
			width='14'
			height='14'
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 7C1 7.78793 1.15519 8.56815 1.45672 9.2961C1.75825 10.0241 2.20021 10.6855 2.75736 11.2426C3.31451 11.7998 3.97595 12.2417 4.7039 12.5433C5.43185 12.8448 6.21207 13 7 13C7.78793 13 8.56815 12.8448 9.2961 12.5433C10.0241 12.2417 10.6855 11.7998 11.2426 11.2426C11.7998 10.6855 12.2417 10.0241 12.5433 9.2961C12.8448 8.56815 13 7.78793 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z'
				stroke='currentColor'
				strokeWidth='1.33333'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7 3.66669V7.00002L9 9.00002'
				stroke='currentColor'
				strokeWidth='1.33333'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default ClockIcon;
