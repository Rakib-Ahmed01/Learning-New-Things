const Product = require('../models/productModel');

exports.getAllProductsStatic = async (req, res) => {
  const products = await Product.find({})
    .sort('name')
    .select('name')
    .limit('10')
    .skip(3);
  res.status(200).json({ products, nbHits: products.length });
};

exports.getProducts = async (req, res) => {
  const { company, featured, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  const limit = Number(req.query?.limit) || 10;
  const page = Number(req.query?.page) || 1;
  const skip = (page - 1) * limit;

  if (company) {
    queryObject.company = { $regex: company, $options: 'i' };
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '<': '$lt',
      '<=': '$lte',
      '>=': '$gte',
      '=': '$eq',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    console.log({ numericFilters, filters });
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [property, operator, value] = item.split('-');
      if (options.includes(property)) {
        queryObject[property] = { [operator]: Number(value) };
      }
      return false;
    });
  }

  console.log(queryObject);

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  result = result.skip(skip).limit(limit);

  const products = await result;
  return res
    .status(200)
    .json({ nbHits: products.length, props: { page, limit, skip }, products });
};

exports.getProduct = async (req, res) => {
  res.status(200).json({ message: 'get a product' });
};

exports.createProduct = async (req, res) => {
  res.status(200).json({ message: 'create a products' });
};

exports.updateProduct = async (req, res) => {
  res.status(200).json({ message: 'update a products' });
};

exports.deleteProduct = async (req, res) => {
  res.status(200).json({ message: 'delete a products' });
};
