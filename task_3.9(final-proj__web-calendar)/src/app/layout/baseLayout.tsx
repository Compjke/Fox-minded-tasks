import { Layout } from '@/shared/ui-kit/Layout';
import { HeaderLayout } from '@/widgets/HeaderLayout';

export const BaseLayout = () => {
	return (
		<Layout
			headerSlot={<HeaderLayout />}
			sidebarSlot={<aside>SideBar</aside>}
			mainContentSlot={<main>Main</main>}
		/>
	);
};
