import toast from 'react-hot-toast';

export const ACTIONS = {
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
};

export const addToCart = (product, cart) => {
  if (product.inStock === 0) {
    return toast.error('Este produto está fora de estoque.');
  }

  const check = cart.every((item) => {
    return item._id !== product._id;
  });

  if (!check) {
    toast.error('Produto já adicionado ao carrinho.');
    return cart;
  } else {
    toast.success('Produto adicionado ao carrinho!');
    return [...cart, { ...product, quantity: 1 }];
  }
};
