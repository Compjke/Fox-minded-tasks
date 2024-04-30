import { IFormContactValues } from '@/components/FormContact';
import { IFormShipmentValues } from '@/components/ShipmentForm/ShipmentForm';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface OrderInfoState {
	contactInfo: IFormContactValues;
	shipmentInfo: IFormShipmentValues;
	isOrderReady: boolean;
	total: {
		sum: number;
		totalCount: number;
	};
}

const init: OrderInfoState = {
	contactInfo: {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	},
	shipmentInfo: {
		address: '',
		city: '',
		country: '',
		state: '',
		zipCode: '',
		apartment: '',
	},
	total: { sum: 0, totalCount: 0 },
	isOrderReady: false,
};

const orderInfoSlice = createSlice({
	name: 'orderInfo',
	initialState: init,
	reducers: {
		addInfoContacts: (state, action: PayloadAction<IFormContactValues>) => {
			state.contactInfo = action.payload;
		},
		addShipmentInfo: (state, action: PayloadAction<IFormShipmentValues>) => {
			state.shipmentInfo = action.payload;
			state.isOrderReady = true;
		},
		updateTotalPrice: (state, action) => {
			state.total = action.payload;
		},
	},
});

export const { reducer: orderInfoReducer, actions: orderInfoActions } =
	orderInfoSlice;
