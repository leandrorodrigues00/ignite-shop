import Image from "next/image";
import Link from "next/link";

import * as Dialog from "@radix-ui/react-dialog";
import { Handbag } from "phosphor-react";
import { CartModal } from "./CartModal";

import logoImg from "../assets/logo.svg";
import { Trigger, HeaderContainer } from "../styles/components/header";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/router";

export function Header() {
  const { cartCount } = useShoppingCart();
  const { asPath } = useRouter();
  const isOnSuccessPage = asPath.includes("/success");

  let totalItemsCart = cartCount;

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {!isOnSuccessPage && (
        <Dialog.Root>
          <Trigger>
            <Handbag size={24} />
            <div>{totalItemsCart}</div>
          </Trigger>
          <CartModal />
        </Dialog.Root>
      )}
    </HeaderContainer>
  );
}
