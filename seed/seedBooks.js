
require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("../models/book.model");

const books = [
  {
    name: "Clean Code",
    description: "A handbook of agile software craftsmanship.",
    author: "Robert C. Martin",
    publishDate: "2008-08-01",
  },
  {
    name: "Clean Architecture",
    description: "A guide to software structure and design.",
    author: "Robert C. Martin",
    publishDate: "2017-09-20",
  },
  {
    name: "The Pragmatic Programmer",
    description: "Journey to mastery for modern software developers.",
    author: "Andrew Hunt",
    publishDate: "1999-10-20",
  },
  {
    name: "Refactoring",
    description: "Improving the design of existing code.",
    author: "Martin Fowler",
    publishDate: "1999-07-08",
  },
  {
    name: "Design Patterns",
    description: "Elements of reusable object-oriented software.",
    author: "Erich Gamma",
    publishDate: "1994-10-21",
  },
  {
    name: "You Don't Know JS",
    description: "Deep dive into JavaScript core concepts.",
    author: "Kyle Simpson",
    publishDate: "2015-12-27",
  },
  {
    name: "JavaScript: The Good Parts",
    description: "A detailed look at the strengths of JavaScript.",
    author: "Douglas Crockford",
    publishDate: "2008-05-15",
  },
  {
    name: "Eloquent JavaScript",
    description: "A modern introduction to programming.",
    author: "Marijn Haverbeke",
    publishDate: "2018-12-04",
  },
  {
    name: "Node.js Design Patterns",
    description: "Design and architectural patterns for Node.js.",
    author: "Mario Casciaro",
    publishDate: "2020-07-15",
  },
  {
    name: "MongoDB: The Definitive Guide",
    description: "Powerful and scalable data storage.",
    author: "Kristina Chodorow",
    publishDate: "2013-05-23",
  },
  {
    name: "Effective JavaScript",
    description: "68 specific ways to harness the power of JavaScript.",
    author: "David Herman",
    publishDate: "2012-12-27",
  },
  {
    name: "Learning React",
    description: "Functional web development with React and Redux.",
    author: "Alex Banks",
    publishDate: "2020-06-12",
  },
  {
    name: "System Design Interview",
    description: "An insider's guide to system design interviews.",
    author: "Alex Xu",
    publishDate: "2020-08-11",
  },
  {
    name: "Cracking the Coding Interview",
    description: "189 programming questions and solutions.",
    author: "Gayle Laakmann McDowell",
    publishDate: "2015-07-01",
  },
  {
    name: "Introduction to Algorithms",
    description: "Comprehensive guide to modern algorithms.",
    author: "Thomas H. Cormen",
    publishDate: "2009-07-31",
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error(" Seeding failed:", error);
    process.exit(1);
  }
}

seed();
