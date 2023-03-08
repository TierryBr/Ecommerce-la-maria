import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  city: string
) {
  if (req.method === 'POST') {
    console.log(req.body);

    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          {
            shipping_rate:
              city !== 'Aratuba'
                ? 'shr_1MjSGQImJmYV2mTdKAlZeMbF'
                : 'shr_1MjSFTImJmYV2mTdxx3rq5bF',
          },
        ],
        line_items: req.body.map((item) => {
          const img = item.images.url;
          // const newImage = img.replace('image-', img).replace('-jpg', '.jpg');

          return {
            price_data: {
              currency: 'brl',
              product_data: {
                name: item.title,
                // images: [img],
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
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/cart?canceled=true`,
      };

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
