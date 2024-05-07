import React from 'react';

export const UserIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			className={className}
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_1_422)'>
				<path
					d='M8 8.66666C9.59733 8.66666 11.05 9.12933 12.1187 9.78066C12.652 10.1073 13.108 10.4907 13.4373 10.9073C13.7613 11.318 14 11.8087 14 12.3333C14 12.8967 13.726 13.3407 13.3313 13.6573C12.958 13.9573 12.4653 14.156 11.942 14.2947C10.89 14.5727 9.486 14.6667 8 14.6667C6.514 14.6667 5.11 14.5733 4.058 14.2947C3.53467 14.156 3.042 13.9573 2.66867 13.6573C2.27333 13.34 2 12.8967 2 12.3333C2 11.8087 2.23867 11.318 2.56267 10.9073C2.892 10.4907 3.34733 10.1073 3.88133 9.78066C4.95 9.12933 6.40333 8.66666 8 8.66666ZM8 1.33333C8.88406 1.33333 9.7319 1.68452 10.357 2.30964C10.9821 2.93476 11.3333 3.78261 11.3333 4.66666C11.3333 5.55072 10.9821 6.39856 10.357 7.02368C9.7319 7.64881 8.88406 7.99999 8 7.99999C7.11595 7.99999 6.2681 7.64881 5.64298 7.02368C5.01786 6.39856 4.66667 5.55072 4.66667 4.66666C4.66667 3.78261 5.01786 2.93476 5.64298 2.30964C6.2681 1.68452 7.11595 1.33333 8 1.33333Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_422'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};
