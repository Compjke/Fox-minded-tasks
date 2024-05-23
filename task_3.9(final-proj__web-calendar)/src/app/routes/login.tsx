import { LoginPage } from '@/pages/Login';

import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
	beforeLoad: ({ context, location }) => {
		if (context.authentication) {
			console.log(location);
			throw redirect({
				to: '/',
				// replace: true,
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: LoginPage,
});
