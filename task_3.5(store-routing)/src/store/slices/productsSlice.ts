import { RootStore } from '@/store/types';
import {
	PayloadAction,
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';


export interface ProductsEntity {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage?: number;
	rating?: number;
	stock?: number;
	brand?: string;
	category?: string;
	thumbnail: string;
	images?: string[] | null;
}

export interface ProductCardBasket extends ProductsEntity {
	count: number;
}
interface IProductsState {
	productsArray: ProductsEntity[] | [];
	status: 'idle' | 'loading' | 'error' | 'success';
	errors: unknown | string;
	basket: ProductCardBasket[] | [];
}

const init: IProductsState = {
	productsArray: [],
	status: 'idle',
	errors: null,
	basket: [],
};

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetch('https://dummyjson.com/products');

			if (!res.ok) {
				throw new Error('Server Error!');
			}

			const data = await res.json();

			return data;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState: init,
	reducers: {
		addToBasket: (state, action: PayloadAction<number>) => {
			const selectedProd: ProductCardBasket = state.productsArray.find(
				({ id }: { id: number }) => id === action.payload
			);
			if (!selectedProd) {
				return;
			}

			state.basket.push({ ...selectedProd, count: 1 });
		},
		changeCountProd: (state, action: PayloadAction) => {
			const { id, type } = action.payload;

			const currentProd: ProductCardBasket = state.basket.find(
				(prod) => prod.id === id
			);
			// console.log(currentProd)
			if (!currentProd) {
				return;
			}

			switch (type) {
				case 'increment':
					currentProd.count += 1;
					break;
				case 'decrement':
					currentProd.count -= 1;
					break;
				default:
					return currentProd;
			}
		},
		deleteProduct : (state,action) => {
			state.basket = state.basket.filter(prod => prod.id !== action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.status = 'success';
				state.productsArray = action.payload.products;
				// console.log(state.productsArray);
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.status = 'error';
				state.errors = action.payload;
			});
		// .addDefaultCase((state, action) => {
		// 	return state
		// });
	},
});


export const isProductExistInBasket = createSelector(
	[(state: RootStore) => state.products.basket, (_, id) => id],

	(basket, id) => {
		console.log('memoized selector ran');
		// console.log(basket)
		// console.log(id)
		return basket.some((prod) => prod.id === id);
	}
);

export const { reducer: productsReducer, actions: productsActions } =
	productsSlice;
