import { Layout } from '@/shared/ui-kit/Layout';

export const BaseLayout = () => {
	return (
		<Layout
			headerSlot={<header>HEADER</header>}
			sidebarSlot={<aside>SideBar</aside>}
			mainContentSlot={<main>Main</main>}
		/>
	);
};
