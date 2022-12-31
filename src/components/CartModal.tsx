import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CartItemsContainer,
  CartItemsDetails,
  CloseButton,
  Content,
  ContentFooter,
  ImageContainer,
  Overlay,
} from "../styles/components/cartModal";
import { X } from "phosphor-react";

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import axios from "axios";

export function CartModal() {
  const {
    removeItem,
    cartDetails,
    cartCount,
    formattedTotalPrice,
    redirectToCheckout,
    clearCart,
  } = useShoppingCart();

  const totalPrice = formattedTotalPrice;
  const totalItemsCart = cartCount;

  async function handleRedirectToCheckout() {
    try {
      const response = await axios.post("/api/checkoutSession", {
        items: cartDetails,
      });

      const { checkoutSessionId } = response.data;

      clearCart();
      const result = await redirectToCheckout(checkoutSessionId);

      if (result?.error) {
        console.error("Result error: ", result);
      }
    } catch (err) {
      alert("Falha ao redirecionar ao checkout");
      console.log({ err });
    }
  }

  return (
    <>
      <Dialog.Portal>
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <Dialog.Title>Sacola de compras</Dialog.Title>

          {totalItemsCart > 0 ? (
            <>
              <div>
                {Object.keys(cartDetails).map((item) => {
                  const cartItem = cartDetails[item];
                  return (
                    <CartItemsContainer key={cartItem.id}>
                      <ImageContainer>
                        <Image
                          src={cartItem.image}
                          alt=""
                          width={100}
                          height={90}
                        />
                      </ImageContainer>

                      <CartItemsDetails>
                        <p>{cartItem.name}</p>
                        <span>{cartItem.formattedValue}</span>
                        <button onClick={() => removeItem(cartItem.id)}>
                          Remover
                        </button>
                      </CartItemsDetails>
                    </CartItemsContainer>
                  );
                })}
              </div>

              <ContentFooter>
                <div>
                  <div>
                    <span>Quantidade</span>
                    <span>{totalItemsCart} itens</span>
                  </div>

                  <div>
                    <strong>Valor total</strong>
                    <strong>{totalPrice}</strong>
                  </div>
                </div>

                <button onClick={handleRedirectToCheckout}>
                  Finalizar Compra
                </button>
              </ContentFooter>
            </>
          ) : (
            <p>Nenhum produto adicionado a sacola de compras</p>
          )}
        </Content>
      </Dialog.Portal>
    </>
  );
}
