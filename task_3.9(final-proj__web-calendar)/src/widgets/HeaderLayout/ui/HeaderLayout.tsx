import { User } from '@/entities/user';
import { DropDownMenu } from '@/shared/ui-kit/DropDownMenu';
import { Logo } from '@/shared/ui-kit/Logo/Logo';

import styles from './header-layout.module.scss';
import { ToggleThemeSwitcher } from '@/shared/ui-kit/ToogleThemeSwitcher';

import { HeaderDateSwitcher } from '@/features/HeaderDateSwitcher';

export default function HeaderLayout() {
	return (
		<header className={styles.root}>
			<div className={styles.inner}>
				<div className={styles.right}>
					<Logo />
					<HeaderDateSwitcher />
				</div>
				<div className={styles.left}>
					<DropDownMenu isShown={false} items={['Week', 'Days']} />
					<User />
					<ToggleThemeSwitcher />
				</div>
			</div>
		</header>
	);
}
