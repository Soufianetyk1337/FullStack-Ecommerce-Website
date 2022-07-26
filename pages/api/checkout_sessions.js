import Stripe from "stripe";
import { urlFor } from "../../libraries/client";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const paymentParams = {
                submit_type: "pay",
                payment_method_types: ["card"],
                billing_address_collection: "auto",
                mode: "payment",
                line_items: req.body.map((item) => {
                    const newImage = urlFor(item.image && item.image[0])
                        .format("webp")
                        .url();

                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity,
                    };
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`,
            };
            const session = await stripe.checkout.sessions.create(paymentParams);
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
