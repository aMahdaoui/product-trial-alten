import prisma from '../../db';

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json({ data: { products } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Get one product
export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findFirst({
      where: { id: Number(id) }
    });
    res.json({ data: product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: `Error fetching product ${id}` });
  }
};

// Create a product
export const createProduct = async (req, res) => {
  try {
    const product = await prisma.product.create({
      data: req.body
    });
    res.status(201).json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating product' });
  }
};

// update a product
export const patchProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await prisma.product.update({
      where: { id: Number(id) },
      data: req.body
    });
    res.json({ data: updated });
  } catch (error) {
    res.status(500).json({ message: `Error updating product : ${id}` });
  }
};

// Delete product by id
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await prisma.product.delete({
      where: { id: Number(id) }
    });
    res.json({ data: deleted });
  } catch (error) {
    res.status(500).json({ message: `Error updating product : ${id}` });
  }
};
