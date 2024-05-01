import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import { store } from './store';
import { MainLayout } from '@/components/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { BasketPage } from '@/pages/BasketPage';
import { BreadCrumps } from './components/BreadCrumps';
import { ContactInfoForm } from '@/pages/ContactInfoFormpPage';
import { ShipmentFormPage } from './pages/ShipmentFormPape';
import { OrderInfoPage } from './pages/OrderInfoPage';
import { ROUTES } from './routes/routes';
// import {action as FormContactAction} from '@/components/FormContact'
// import { getProducts_1 as loadProducts } from '@/components/HomePage';
const router = createBrowserRouter([
	{
		path: ROUTES.Root,
		element: (
			<MainLayout>
				<HomePage />
			</MainLayout>
		),
		errorElement: <ErrorPage />,
		// children: [{ path: 'test', element: <div>Children main</div> }],
		// loader: loadProducts,
	},
	{
		path: ROUTES.Info,
		element: (
			<MainLayout>
				<BreadCrumps />
			</MainLayout>
		),
		children: [
			{
				path: ROUTES.CardInfo,
				index: true,
				element: <BasketPage />,
			},
			{
				path: ROUTES.ContactInfo,
				element: <ContactInfoForm />,
				// action : FormContactAction,
			},
			{
				path: ROUTES.ShipmentInfo,
				element: <ShipmentFormPage />,
			},
		],
	},
	{ path: ROUTES.OrderPage, element: <OrderInfoPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
