
const express = require("express");
const { text } = require('body-parser');
const nephiteRecord = express.Router();
const { OAuth2Client } = require('google-auth-library');
const { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } = require("../database/database.js"); // Import the database module
require('dotenv').config(); // Load environment variables


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;



nephiteRecord.get("/addNephiteRecord", function (req, res) {


  console.log("GET /GET/addBook called");
  /*
  //removeAllBooks();
  let book = {}
  let chapter = {}


  book = {
    id: "the-nephite-record-en",
    title: "The Nephite Record",
    subTitle: "1844 Text",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/the-nephite-record-thumbnail-2.jpg",
    thumbnailTitle: "Nephite Record",
    isParent: true,
    hasChildBooks: true,
    order: 1,
    parent: "",
    visible: true,
    language: "en",

  }
  addBook(book);

  book = {
    id: "nr-introduction-en",
    title: "Introduction",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/intro-thumbnail.jpg",
    thumbnailTitle: "Intro",
    isParent: false,
    hasChildBooks: false,
    order: 1,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-intro-title-page-en",
    title: "Title Page",
    subTitle: "",
    order: 1,
    parent: "nr-introduction-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-intro-three-witnesses-en",
    title: "The Three Witnesses",
    subTitle: "",
    order: 2,
    parent: "nr-introduction-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-intro-eight-witnesses-en",
    title: "The Eight Witnesses",
    subTitle: "",
    order: 3,
    parent: "nr-introduction-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-1-nephi-en",
    title: "The First Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/1-nephi-thumbnail.jpg",
    thumbnailTitle: "1 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 2,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-1-nephi-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-1-nephi-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-2-nephi-en",
    title: "The Second Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/2-nephi-thumbnail.jpg",
    thumbnailTitle: "2 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 3,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-2-nephi-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-2-nephi-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-29-en",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-30-en",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-31-en",
    title: "Chapter 31",
    subTitle: "",
    order: 31,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-32-en",
    title: "Chapter 32",
    subTitle: "",
    order: 32,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-33-en",
    title: "Chapter 33",
    subTitle: "",
    order: 33,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-jacob-en",
    title: "The Book of Jacob",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/jacob-thumbnail.jpg",
    thumbnailTitle: "Jacob",
    isParent: false,
    hasChildBooks: false,
    order: 4,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);


  chapter = {
    id: "nr-jacob-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-enos-en",
    title: "The Book of Enos",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/enos-thumbnail.jpg",
    thumbnailTitle: "Enos",
    isParent: false,
    hasChildBooks: false,
    order: 5,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-enos-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-enos-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-jarom-en",
    title: "The Book of Jarom",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/jarom-thumbnail.jpg",
    thumbnailTitle: "Jarom",
    isParent: false,
    hasChildBooks: false,
    order: 6,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-jarom-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-jarom-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-omni-en",
    title: "The Book of Omni",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/omni-thumbnail.jpg",
    thumbnailTitle: "Omni",
    isParent: false,
    hasChildBooks: false,
    order: 7,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",

  }
  addBook(book);

  chapter = {
    id: "nr-omni-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-omni-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-words-of-mormon-en",
    title: "Words of Mormon",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/words-of-mormon-thumbnail.jpg",
    thumbnailTitle: "Words of Mormon",
    isParent: false,
    hasChildBooks: false,
    order: 8,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);


  chapter = {
    id: "nr-words-of-mormon-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-words-of-mormon-en",
    visible: true
  }

  addChapter(chapter);


  book = {
    id: "nr-mosiah-en",
    title: "The Book of Mosiah",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/mosiah-thumbnail.jpg",
    thumbnailTitle: "Mosiah",
    isParent: false,
    hasChildBooks: false,
    order: 9,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-mosiah-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-mosiah-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-29-en",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  


  book = {
    id: "nr-alma-en",
    title: "The Book of Alma",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/alma-thumbnail.jpg",
    thumbnailTitle: "Alma",
    isParent: false,
    hasChildBooks: false,
    order: 10,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",

  }
  addBook(book);

  chapter = {
    id: "nr-alma-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-alma-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-29-en",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-30-en",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-31-en",
    title: "Chapter 31",
    subTitle: "",
    order: 31,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-32-en",
    title: "Chapter 32",
    subTitle: "",
    order: 32,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-33-en",
    title: "Chapter 33",
    subTitle: "",
    order: 33,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-34-en",
    title: "Chapter 34",
    subTitle: "",
    order: 34,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-35-en",
    title: "Chapter 35",
    subTitle: "",
    order: 35,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-36-en",
    title: "Chapter 36",
    subTitle: "",
    order: 36,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-37-en",
    title: "Chapter 37",
    subTitle: "",
    order: 37,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-38-en",
    title: "Chapter 38",
    subTitle: "",
    order: 38,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-39-en",
    title: "Chapter 39",
    subTitle: "",
    order: 39,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-40-en",
    title: "Chapter 40",
    subTitle: "",
    order: 40,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-41-en",
    title: "Chapter 41",
    subTitle: "",
    order: 41,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-42-en",
    title: "Chapter 42",
    subTitle: "",
    order: 42,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-43-en",
    title: "Chapter 43",
    subTitle: "",
    order: 43,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-44-en",
    title: "Chapter 44",
    subTitle: "",
    order: 44,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-45-en",
    title: "Chapter 45",
    subTitle: "",
    order: 45,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-46-en",
    title: "Chapter 46",
    subTitle: "",
    order: 46,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-47-en",
    title: "Chapter 47",
    subTitle: "",
    order: 47,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-48-en",
    title: "Chapter 48",
    subTitle: "",
    order: 48,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-49-en",
    title: "Chapter 49",
    subTitle: "",
    order: 49,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-50-en",
    title: "Chapter 50",
    subTitle: "",
    order: 50,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-51-en",
    title: "Chapter 51",
    subTitle: "",
    order: 51,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-52-en",
    title: "Chapter 52",
    subTitle: "",
    order: 52,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-53-en",
    title: "Chapter 53",
    subTitle: "",
    order: 53,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-54-en",
    title: "Chapter 54",
    subTitle: "",
    order: 54,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-55-en",
    title: "Chapter 55",
    subTitle: "",
    order: 55,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-56-en",
    title: "Chapter 56",
    subTitle: "",
    order: 56,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-57-en",
    title: "Chapter 57",
    subTitle: "",
    order: 57,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-58-en",
    title: "Chapter 58",
    subTitle: "",
    order: 58,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-59-en",
    title: "Chapter 59",
    subTitle: "",
    order: 59,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-60-en",
    title: "Chapter 60",
    subTitle: "",
    order: 60,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-61-en",
    title: "Chapter 61",
    subTitle: "",
    order: 61,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-62-en",
    title: "Chapter 62",
    subTitle: "",
    order: 62,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-63-en",
    title: "Chapter 63",
    subTitle: "",
    order: 63,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-helaman-en",
    title: "The Book of Helaman",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/helaman-thumbnail.jpg",
    thumbnailTitle: "Helaman",
    isParent: false,
    hasChildBooks: false,
    order: 11,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  chapter = {
    id: "nr-helaman-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-helaman-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-helaman-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);

  
  book = {
    id: "nr-3-nephi-en",
    title: "The Third Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/3-nephi-thumbnail.jpg",
    thumbnailTitle: "3 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 12,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-3-nephi-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-3-nephi-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-29-en",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-30-en",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-4-nephi-en",
    title: "The Fourth Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/4-nephi-thumbnail.jpg",
    thumbnailTitle: "4 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 13,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-4-nephi-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-4-nephi-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-mormon-en",
    title: "The Book of Mormon",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/mormon-thumbnail.jpg",
    thumbnailTitle: "Mormon",
    isParent: false,
    hasChildBooks: false,
    order: 14,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-mormon-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-mormon-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-ether-en",
    title: "The Book of Ether",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/ether-thumbnail.jpg",
    thumbnailTitle: "Ether",
    isParent: false,
    hasChildBooks: false,
    order: 15,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",

  }
  addBook(book);

  chapter = {
    id: "nr-ether-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-ether-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-moroni-en",
    title: "The Book of Moroni",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/moroni-thumbnail.jpg",
    thumbnailTitle: "Moroni",
    isParent: false,
    hasChildBooks: false,
    order: 16,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);


    chapter = {
    id: "nr-moroni-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-moroni-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
*/

/*
  book = {
    id: "the-oral-torah-en",
    title: "The Oral Torah",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/the-oral-torah-2.jpg",
    thumbnailTitle: "Oral Torah",
    isParent: true,
    hasChildBooks: true,
    order: 3,
    parent: "",
    visible: false,
    language: "en",
  }
  addBook(book);
*/

    res.send("Nephite Record Added");
});

module.exports = nephiteRecord;