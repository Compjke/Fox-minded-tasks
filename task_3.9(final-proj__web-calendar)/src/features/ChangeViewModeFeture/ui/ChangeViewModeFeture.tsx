import { useAppDispatch } from '@/app/store';
import { DropDownMenu } from '@/shared/ui-kit/DropDownMenu';
import { changeViewMode } from '../model';

export const ChangeViewModeFeture = () => {
	const dispath = useAppDispatch();
	const handleChange = (mode: 'Day' | 'Week') => {
		dispath(changeViewMode(mode));
	};
	return (
		<DropDownMenu
			onChange={(item: 'Day' | 'Week') => handleChange(item)}
			isShown={false}
			items={['Week', 'Days']}
		/>
	);
};
