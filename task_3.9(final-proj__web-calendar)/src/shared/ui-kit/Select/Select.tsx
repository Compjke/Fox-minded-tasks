import { Path, UseFormRegister } from 'react-hook-form';
import { Icon, IconName } from '../Icon/Icon';
import { IFormCreateEventValues } from '@/shared/config/types';
import { ICalendar } from '@/entities/calendar';
import style from './select.module.scss';

interface ISelect {
	label: string;
	options: ICalendar[] | [];
	icon?: IconName;
	register: UseFormRegister<IFormCreateEventValues>;
	registerLabel: Path<IFormCreateEventValues>;
}

export const Select = ({
	label,
	options,
	icon,
	register,
	registerLabel,
}: ISelect) => {
	return (
		<div className={style.container}>
			{icon && <Icon name={icon} />}
			<div className={style.selectInner}>
				<label htmlFor='select' className={style.label}>
					{label}
				</label>
				<select
					{...register(registerLabel)}
					name=''
					id='select'
					className={style.select}
				>
					{options.map((item, ind) => (
						<option
							key={ind}
							style={{ color: item.color }}
							className={style.option}
							value={item.color}
						>
							{item.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
