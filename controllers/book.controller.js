
const Book = require('../models/book.model');

// Create a new book
const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all books (search, filter, pagination, sorting)
const getBooks = async (req, res) => {
  try {
    let {
      search,
      author,
      from,
      to,
      page = 1,
      limit = 10,
      sortBy = 'publishDate',
      order = 'desc'
    } = req.query;

    page = Number(page);
    limit = Math.min(Number(limit), 50);

    const query = {};

    // Text search on name & description
    if (search) {
      query.$text = { $search: search };
    }

    // Author filter (case-insensitive exact match)
    if (author) {
      query.author = new RegExp(`^${author}$`, 'i');
    }

    // Publish date range filter (inclusive)
    if (from || to) {
      query.publishDate = {};
      if (from) query.publishDate.$gte = new Date(from);
      if (to) query.publishDate.$lte = new Date(to);
    }

    // Sorting validation
    const allowedSort = ['name', 'author', 'publishDate'];
    if (!allowedSort.includes(sortBy)) {
      sortBy = 'publishDate';
    }

    const sortOptions = {
      [sortBy]: order === 'asc' ? 1 : -1
    };

    const books = await Book.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Book.countDocuments(query);

    res.json({
      page,
      limit,
      total,
      data: books
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getBooks
};
