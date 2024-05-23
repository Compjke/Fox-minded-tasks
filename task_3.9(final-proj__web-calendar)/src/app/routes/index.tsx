import { createFileRoute, redirect } from '@tanstack/react-router';
import { MainPage } from '@/pages/Main';

export const Route = createFileRoute('/')({
	beforeLoad: ({ location, context }) => {
		console.log(location);
		if (!context.authentication) {
			console.log(location);

			throw redirect({
				to: '/login',
				search: {
					// Use the current location to power a redirect after login
					// (Do not use `router.state.resolvedLocation` as it can
					// potentially lag behind the actual current location)
					redirect: location.href,
				},
			});
		}
	},
	loader: () =>
		new Promise((res) =>
			setTimeout(() => {
				res(1);
			}, 1000)
		),
	component: MainPage,
	pendingComponent: () => <div>Load page....</div>,
});
