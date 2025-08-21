const express = require("express");
const { text } = require('body-parser');
const newtestament = express.Router();
const { OAuth2Client } = require('google-auth-library');
const { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } = require("../database/database.js"); // Import the database module
require('dotenv').config(); // Load environment variables


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;



newtestament.get("/addNewTestament", function (req, res) {


  console.log("GET /GET/addBook called");



  book = {
    id: "the-new-testament-en",
    title: "The New Testament",
    subTitle: "KJV",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament-kjv-thumbnail-2.jpg",
    thumbnailTitle: "",
    isParent: true,
    hasChildBooks: true,
    order: 3,
    parent: "",
    visible: true,
    language: "en",
  }
  addBook(book);


  book = {
    id: "nt-matthew-en",
    title: "The Gospel According to St Matthew",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/matthew-thumbnail.jpg",
    thumbnailTitle: "Matthew",
    isParent: false,
    hasChildBooks: false,
    order: 1,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  chapter = {
    id: "nt-matthew-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nt-matthew-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nt-matthew-en",
    visible: true
  }
  addChapter(chapter);






  book = {
    id: "nt-mark-en",
    title: "The Gospel According to St Mark",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/mark-thumbnail.jpg",
    thumbnailTitle: "Mark",
    isParent: false,
    hasChildBooks: false,
    order: 2,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nt-mark-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nt-mark-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nt-mark-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nt-luke-en",
    title: "The Gospel According to St Luke",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/luke-thumbnail.jpg",
    thumbnailTitle: "Luke",
    isParent: false,
    hasChildBooks: false,
    order: 3,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nt-luke-1en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nt-luke-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nt-luke-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nt-john-en",
    title: "The Gospel According to St John",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/john-thumbnail.jpg",
    thumbnailTitle: "John",
    isParent: false,
    hasChildBooks: false,
    order: 4,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",

  }
  addBook(book);

  chapter = {
    id: "nt-john-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nt-john-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nt-john-en",
    visible: true
  }
  addChapter(chapter);




  book = {
    id: "nt-acts-en",
    title: "The Acts of the Apostles",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/acts-thumbnail.jpg",
    thumbnailTitle: "Acts",
    isParent: false,
    hasChildBooks: false,
    order: 5,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-romans-en",
    title: "The Epistle of Paul the Apostle to the Romans",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/romans-thumbnail.jpg",
    thumbnailTitle: "Romans",
    isParent: false,
    hasChildBooks: false,
    order: 6,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-1-corinthians-en",
    title: "The First Epistle of Paul the Apostle to the Corintians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-corinthians-thumbnail.jpg",
    thumbnailTitle: "1 Corinthians",
    isParent: false,
    hasChildBooks: false,
    order: 7,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-2-corinthians-en",
    title: "The Second Epistle of Paul the Apostle to the Corintians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-corinthians-thumbnail.jpg",
    thumbnailTitle: "2 Corinthians",
    isParent: false,
    hasChildBooks: false,
    order: 8,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-galations-en",
    title: "The Epistle of Paul the Apostle to the Galatians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/galatians-thumbnail.jpg",
    thumbnailTitle: "Galatians",
    isParent: false,
    hasChildBooks: false,
    order: 9,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-ephesians-en",
    title: "The Epistle of Paul the Apostle to the Ephesians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/ephesians-thumbnail.jpg",
    thumbnailTitle: "Ephesians",
    isParent: false,
    hasChildBooks: false,
    order: 10,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-philippians-en",
    title: "The Epistle of Paul the Apostle to the Philippians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/philippians-thumbnail.jpg",
    thumbnailTitle: "Philippians",
    isParent: false,
    hasChildBooks: false,
    order: 11,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-colossians-en",
    title: "The Epistle of Paul the Apostle to the Colossians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/colossians-thumbnail.jpg",
    thumbnailTitle: "Colossians",
    isParent: false,
    hasChildBooks: false,
    order: 12,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-1-thessalonians-en",
    title: "The First Epistle of Paul the Apostle to the Thessalonians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-thessalonians-thumbnail.jpg",
    thumbnailTitle: "1 Thessalonians",
    isParent: false,
    hasChildBooks: false,
    order: 13,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-2-thessalonians-en",
    title: "The Second Epistle of Paul the Apostle to the Thessalonians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-thessalonians.jpg",
    thumbnailTitle: "2 Thessalonians",
    isParent: false,
    hasChildBooks: false,
    order: 14,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-1-timothy-en",
    title: "The First Epistle of Paul the Apostle to Timothy",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-timothy-thumbnail.jpg",
    thumbnailTitle: "1 Timothy",
    isParent: false,
    hasChildBooks: false,
    order: 15,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-2-timothy-en",
    title: "The Second Epistle of Paul the Apostle to Timothy",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-timothy-thumbnail.jpg",
    thumbnailTitle: "2 Timothy",
    isParent: false,
    hasChildBooks: false,
    order: 16,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-titus-en",
    title: "The Epistle of Paul to Titus",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/titus-thumbnail.jpg",
    thumbnailTitle: "Titus",
    isParent: false,
    hasChildBooks: false,
    order: 17,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-philemon-en",
    title: "The Epistle of Paul to Philemon",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/philemon-thumbnail.jpg",
    thumbnailTitle: "Philemon",
    isParent: false,
    hasChildBooks: false,
    order: 18,
    parent: "the-new-testament-nt",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-hebrews-en",
    title: "The Epistle of Paul the Apostle to the Hebrews",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/hebrews-thumbnail.jpg",
    thumbnailTitle: "Hebrews",
    isParent: false,
    hasChildBooks: false,
    order: 19,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-james-en",
    title: "The General Epistle of James",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/james-thumbnail.jpg",
    thumbnailTitle: "James",
    isParent: false,
    hasChildBooks: false,
    order: 20,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-1-peter-en",
    title: "The First Epistle General of Peter",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-peter-thumbnail.jpg",
    thumbnailTitle: "1 Peter",
    isParent: false,
    hasChildBooks: false,
    order: 21,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-2-peter-en",
    title: "The Second Epistle General of Peter",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-peter.jpg",
    thumbnailTitle: "2 Peter",
    isParent: false,
    hasChildBooks: false,
    order: 22,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-1-john-en",
    title: "The First Epistle of John",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-john-thumbnail.jpg",
    thumbnailTitle: "1 John",
    isParent: false,
    hasChildBooks: false,
    order: 23,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-2-john-en",
    title: "The Second Epistle of John",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-john-thumbnail.jpg",
    thumbnailTitle: "2 John",
    isParent: false,
    hasChildBooks: false,
    order: 24,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  book = {
    id: "nt-3-john-en",
    title: "The Third Epistle of John",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/third-john-thumbnail.jpg",
    thumbnailTitle: "3 John",
    isParent: false,
    hasChildBooks: false,
    order: 24,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-jude-en",
    title: "The General Epistle of Jude",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/jude-thumbnail.jpg",
    thumbnailTitle: "Jude",
    isParent: false,
    hasChildBooks: false,
    order: 26,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  book = {
    id: "nt-revelation-en",
    title: "The Revelation of St John the Divine",
    subTitle: "",
    thumbnailTitle: "Revelation",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/revelation-thumbnail.jpg",
    isParent: false,
    hasChildBooks: false,
    order: 27,
    parent: "the-new-testament-en",
    visible: true,
    language: "en",
  }
  addBook(book);


    res.send("New Testament Added");
});

module.exports = newtestament;