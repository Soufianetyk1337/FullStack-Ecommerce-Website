import React, { useContext, useState } from "react";
import { Store } from "../../context/StoreContext";
import { calculateDiscount, formatter } from "../../helpers";
import { clientSanity, urlFor } from "../../libraries/client";

const ProductDetails = ({ product }) => {
    const { image, name, price, discount, company, description } = product;
    const [imageIndex, setImageIndex] = useState(0);
    const { decrementQuantity, incrementQuantity, quantity, addProduct } =
        useContext(Store);

    return (
        <div className="md:container lg:max-w-screen-xl mx-auto">
            <div className="lg:flex lg:p-16 lg:items-center">
                <div className="lg:w-2/5 flex-shrink-0 lg:mr-16">
                    <div className="w-full relative overflow-hidden">
                        <div className="flex w-full h-full drop-shadow-sm">
                            <img
                                src={urlFor(image && image[imageIndex])}
                                className="product-image"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="justify-between mt-4 hidden lg:grid lg:grid-cols-4 gap-4 mySwiper">
                        {image.map((img, i) => (
                            <img
                                key={img._key}
                                className={
                                    "w-100 swiper-thumb swiper-slide " +
                                    (i === imageIndex ? "swiper-slide-active" : "")
                                }
                                onMouseEnter={() => {
                                    setImageIndex(i);
                                }}
                                src={urlFor(img && img)}
                                alt={`Product image thumbnail ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="px-4 mt-8 lg:ml-8">
                    <h2 className="text-orange-700 uppercase text-xs font-bold tracking-widest">
                        {company}
                    </h2>
                    <h1 className="text-3xl font-bold mt-2 md:text-5xl">{name}</h1>
                    <p className="text-gray-600 mt-2">{description}</p>
                    <div className="flex items-center mt-4 md:block">
                        <span className="text-2xl font-extrabold">
                            {Number.isInteger(discount) && discount > 0
                                ? calculateDiscount(price, discount)
                                : formatter.format(price)}
                        </span>
                        {Number.isInteger(discount) && discount > 0 && (
                            <span className="px-2 bg-orange-100 text-orange-700 rounded-md font-bold ml-2">
                                {discount}%
                            </span>
                        )}
                        {Number.isInteger(discount) && discount > 0 && (
                            <span className="line-through text-gray-400 ml-auto md:block">
                                {formatter.format(price)}
                            </span>
                        )}
                    </div>
                    <div className="md:flex">
                        <div className="flex items-stretch bg-gray-100 rounded-lg mt-6 md:mr-6">
                            <button
                                onClick={decrementQuantity}
                                className=" p-4 text-orange-600 hover:opacity-50 transition"
                            >
                                <i
                                    className="bx bx-minus icon-minus"
                                    style={{ fontWeight: "bold", fontSize: "21px" }}
                                />
                                <span className="sr-only">Minus</span>
                            </button>
                            <label htmlFor="qty" className="sr-only">
                                Quantity
                            </label>
                            <input
                                id="quantity"
                                name="quantity"
                                value={quantity}
                                type="number"
                                min="1"
                                required
                                readOnly
                                className="w-full bg-transparent text-center font-bold text-lg appearance-none ring-orange-400 focus:outline-none focus:ring-2 invalid:ring-2 invalid:ring-red-400"
                            />
                            <button
                                onClick={incrementQuantity}
                                className=" p-4 text-orange-600 hover:opacity-50 transition"
                            >
                                <i
                                    className="bx bx-plus icon-plus"
                                    style={{ fontWeight: "bold", fontSize: "21px" }}
                                />
                                <span className="sr-only">Plus</span>
                            </button>
                        </div>
                        <button
                            onClick={addProduct}
                            className=" flex w-full h-14 mt-6 items-center justify-center bg-orange-500 text-white rounded-lg shadow-md shadow-orange-200 hover:shadow-xl hover:bg-opacity-50 hover:shadow-orange-100 transition"
                            data-name="Fall Limited Edition Sneakers"
                            data-price={
                                Number.isInteger(discount) && discount > 0
                                    ? calculateDiscount(price, discount)
                                    : formatter.format(price)
                            }
                        >
                            <i className="bx bx-cart icon-cart mr-4"></i>
                            <strong>Add to cart</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const query = `*[_type== "product"]{
        slug {
            current
        }
    }
    `;
    const products = await clientSanity.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product?.slug?.current,
        },
    }));
    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    console.log("Slug", slug);
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await clientSanity.fetch(query);
    const products = await clientSanity.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product },
    };
};

export default ProductDetails;
