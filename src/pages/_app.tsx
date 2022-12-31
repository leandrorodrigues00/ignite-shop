import type { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";
import { ToastContainer } from "react-toastify";

import { Header } from "../components/Header";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

import "react-toastify/dist/ReactToastify.css";

globalStyles();

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
