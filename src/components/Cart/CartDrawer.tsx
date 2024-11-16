import React from "react";
import { Button, Drawer } from "antd";
import CartProductCard from "./ CartProductCard.tsx";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { cartProductAction } from "../../store/slices/cartProductSlice.ts";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentElementProps,
} from "@stripe/react-stripe-js";
import axios from "axios";

interface CartDrawerProps {
  openCart: boolean;
  onOpenCart: any;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ openCart, onOpenCart }) => {
  // const stripe = useStripe();

  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    process.env.STRIPE_PUBLIC_KEY ||
      "pk_test_51QIEatJtf0tiqep1mCNgI7z4C1YUU6cIo290JyawSVULrpJU9zXFBYICfrlADRRmo2laM1WGHGFyKHi6o11vFsHn00PJmrYIC6"
  );

  const checkIFProductAddToCart = useSelector(
    (state: any) => state.cartShow.cartProductDetails
  );

  console.log(checkIFProductAddToCart);

  const checkIFProductIdExist = useSelector(
    (state: any) => state.cartShow.cartProducts
  );

  let cartItemPrice: number = 0;

  for (let i = 0; i < checkIFProductAddToCart.length; i++) {
    cartItemPrice = cartItemPrice + checkIFProductAddToCart[i].price;
  }

  let filterAndRemoveProductId: string[];

  const removeProductFC = (id: string) => {
    dispatch(
      cartProductAction.removeItems({
        removingProductId: id,
      })
    );

    filterAndRemoveProductId = checkIFProductIdExist.filter(
      (productId: any) => productId !== id
    );

    dispatch(
      cartProductAction.addProduct({
        cartProducts: filterAndRemoveProductId,
        productCount: -1,
      })
    );
  };

  const onClickCheckout = async (event: React.FormEvent) => {
    // if (!stripe || !elements) return; // stripe.js hasn't loaded yet
    try {
      // call backend to create a paymentIntent
      const { data } = await axios.post("http://localhost:5000/api/checkout", {
        amount: parseFloat(cartItemPrice.toFixed(2)), // amount in cent like $50.00
      });
      console.log(data);
    } catch (error) {
      console.log("frontEnd error in Checkout", error);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="z-[102]">
        <Drawer
          title="Keep Shopping"
          placement={"right"}
          closable={true}
          onClose={onOpenCart}
          open={openCart}
          key={"right"}
          className="p-0 [&>div]:!p-2"
          closeIcon={<IoIosArrowBack />}
        >
          <div className="!p-0 mb-28 overflow-hidden">
            {checkIFProductAddToCart?.map((productDetails: any) => (
              <CartProductCard
                key={productDetails.id}
                productName={productDetails.productName}
                price={productDetails.price}
                originalSavingPrice={productDetails.originalSavingPrice}
                count={productDetails.addItemsCount}
                image={productDetails.image}
                size={productDetails.size}
                id={productDetails.id}
                removeProductFC={removeProductFC}
              />
            ))}
          </div>
          <div className="!pb-4 absolute bottom-0 right-0 left-0 top-auto bg-white !p-2 shadow-lg rounded-tl-3xl rounded-tr-3xl">
            <div className="flex justify-between mt-3 mb-0">
              <span>
                <h5>Total Price : </h5>
              </span>
              <span>
                <h4>{cartItemPrice.toFixed(2)}</h4>
              </span>
            </div>
            <div className="flex justify-between mt-0 mb-2 text-gray-500">
              <span>
                <h6>Items : </h6>
              </span>
              <span>
                <h6>{checkIFProductAddToCart?.length}</h6>
              </span>
            </div>
            <Button
              type="primary"
              className="bg-[var(--primaryColor)] hover:bg-[var(--primaryColor)] w-full"
              onClick={onClickCheckout}
            >
              Check Out
            </Button>
          </div>
        </Drawer>
      </div>
    </Elements>
  );
};

export default CartDrawer;
