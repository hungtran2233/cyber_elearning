import Swal from "sweetalert2";
import { price } from "./tempPrice";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	cartItems: localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems"))
		: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		// add to cart
		addToCart(state, action) {
			// console.log(action.payload);
			const itemIndex = state.cartItems.findIndex(
				(item) => item.maKhoaHoc === action.payload.maKhoaHoc
			);

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1, price: price };
				state.cartItems.push(tempProduct);
			}
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		// remove cart
		removeFromCart(state, action) {
			const nextCartItems = state.cartItems.filter(
				(cartItem) => cartItem.maKhoaHoc !== action.payload.maKhoaHoc
			);
			let choice = window.confirm("Bạn có muốn xóa khóa học này khỏi giỏ hàng ?");
			if (choice === true) {
				state.cartItems = nextCartItems;
				localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
			} else {
				return;
			}
		},

		// decrease cart
		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.maKhoaHoc === action.payload.maKhoaHoc
			);

			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.cartItems.filter(
					(item) => item.maKhoaHoc !== action.payload.maKhoaHoc
				);
				state.cartItems = nextCartItems;
			}

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		// clean cart
		clearCart(state, action) {
			let choice = window.confirm("Bạn có muốn xóa toàn bộ giỏ hàng ?");
			if (choice === true) {
				state.cartItems = [];
				localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
			} else {
				return;
			}
		},

		// get total
		getTotals(state, action) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { cartQuantity } = cartItem;
					const itemTotal = price * cartQuantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			total = parseFloat(total.toFixed(2));
			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},

		// remove 1 item from cart (no confirm)
		removeItemFromCart(state, action) {
			const nextCartItems = state.cartItems.filter(
				(cartItem) => cartItem.maKhoaHoc !== action.payload.maKhoaHoc
			);

			state.cartItems = nextCartItems;
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	decreaseCart,
	clearCart,
	getTotals,
	removeItemFromCart,
} = cartSlice.actions;

export default cartSlice;
