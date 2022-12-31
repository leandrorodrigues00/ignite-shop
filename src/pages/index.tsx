import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";
import Skeleton from "react-loading-skeleton";
import { useKeenSlider } from "keen-slider/react";

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import { Handbag } from "phosphor-react";
import { useEffect, useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import "keen-slider/keen-slider.min.css";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const [skeletonRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  useEffect(() => {
    const skeletonLoading = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(skeletonLoading);
  }, []);

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      {isLoading ? (
        <HomeContainer ref={skeletonRef} className="keen-slider">
          {products.map((product) => (
            <div className="keen-slider__slide" key={product.id}>
              <Skeleton width="100%" height="100%" baseColor="#4F4F56" />
            </div>
          ))}
        </HomeContainer>
      ) : (
        <HomeContainer ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            <Product
              href={`/product/${product.id}`}
              key={product.id}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <div>
                  <Handbag size={32} color="white" />
                </div>
              </footer>
            </Product>
          ))}
        </HomeContainer>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
