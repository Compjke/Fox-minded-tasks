import style from './OrderInfoCard.module.scss';

interface IProps {
	icon: JSX.Element;
	heading: string;
	info: string[];
}

export const OrderInfoCard = ({ icon, heading, info }: IProps) => {
	return (
		<div className={style.card}>
			<div className={style.top}>
				{icon}
				{heading}
			</div>
			<ul className={style.info}>
				{info.map((i) => (
					<li className={style.text} key={i}>
						{i}
					</li>
				))}
			</ul>
		</div>
	);
};
