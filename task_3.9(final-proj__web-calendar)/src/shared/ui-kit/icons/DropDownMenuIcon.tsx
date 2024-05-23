
interface IIcon {
	className?: string;
}

export const DropDownMenuIcon = ({ className }: IIcon) => {
	return (
		<svg
			className={className}
			width='10'
			height='6'
			viewBox='0 0 10 6'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.00005 0C9.56805 0 9.86472 0.657333 9.52205 1.082L9.47138 1.138L5.47138 5.138C5.35659 5.25279 5.20386 5.32174 5.04184 5.33193C4.87982 5.34211 4.71965 5.29283 4.59138 5.19333L4.52872 5.138L0.528717 1.138L0.473384 1.07533L0.437384 1.024L0.401384 0.96L0.39005 0.936L0.37205 0.891333L0.350717 0.819333L0.34405 0.784L0.337384 0.744L0.334717 0.706V0.627333L0.33805 0.588667L0.34405 0.548667L0.350717 0.514L0.37205 0.442L0.39005 0.397333L0.436717 0.309333L0.48005 0.249333L0.528717 0.195333L0.591384 0.14L0.642717 0.104L0.706717 0.0680002L0.730717 0.0566667L0.775384 0.0386664L0.847383 0.0173333L0.882717 0.0106665L0.922717 0.00399971L0.960717 0.00133324L9.00005 0Z'
				fill='currentColor'
			/>
		</svg>
	);
};
