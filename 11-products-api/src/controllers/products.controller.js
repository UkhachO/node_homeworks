let products = [
  { id: 1, name: 'Product One', price: 29.99 },
  { id: 2, name: 'Product Two', price: 49.99 },
];

export const getAll = (req, res) => {
  res.json(products);
};

export const getById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};

export const createOne = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};
