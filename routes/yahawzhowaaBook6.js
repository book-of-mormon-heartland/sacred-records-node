import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function (req, res) {
    let book = {};
    let chapter = {};

    book = {
        id: "yahawzhowaa-book-6-en",
        title: "BOOK SIX",
        subTitle: "The Mountains of the Turtle",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-six-171x214.jpg",
        thumbnailTitle: "Mountains of the Turtle",
        Description: "",
        priceText: "Subscription",
        price: 9.99,
        isParent: true,
        hasChildBooks: false,
        order: 6,
        parent: "",
        visible: true,
        language: "en",
        category: "quetzal-condor",
        discountCode: "",
        discountPrice: "1000",
        discountPriceText: "Subscription"
    }
    //removeBook(book);
    addBook(book);
    
    chapter = {
        id: "yahawzhowaa-book-6-chapter- -en",
        title: "Chapter ",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter- -en",
        title: "Chapter ",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter- -en",
        followingChapter: "yahawzhowaa-book-5-chapter- -en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

   chapter = {
        id: "yahawzhowaa-book-6-chapter-1-en",
        title: "Chapter 1",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-1-en",
        title: "Chapter 1",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-5-chapter-2-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-2-en",
        title: "Chapter 2",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 2,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-2-en",
        title: "Chapter 2",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-1-en",
        followingChapter: "yahawzhowaa-book-5-chapter-3-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-3-en",
        title: "Chapter3",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 3,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-3-en",
        title: "Chapter 3",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-2-en",
        followingChapter: "yahawzhowaa-book-5-chapter-4-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-4-en",
        title: "Chapter 4",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 4,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-4-en",
        title: "Chapter 4",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-3-en",
        followingChapter: "yahawzhowaa-book-5-chapter-5-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-5-en",
        title: "Chapter5",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 5,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-5-en",
        title: "Chapter 5",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-4-en",
        followingChapter: "yahawzhowaa-book-5-chapter-6-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-6-en",
        title: "Chapter 6",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 6,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-6-en",
        title: "Chapter 6",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-5-en",
        followingChapter: "yahawzhowaa-book-5-chapter-7-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-7-en",
        title: "Chapter 7",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 7,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-7-en",
        title: "Chapter 7",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-6-en",
        followingChapter: "yahawzhowaa-book-5-chapter-8-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-8-en",
        title: "Chapter 8",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 8,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-8-en",
        title: "Chapter 8",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-7-en",
        followingChapter: "yahawzhowaa-book-5-chapter-9-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-9-en",
        title: "Chapter 9",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 9,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-9-en",
        title: "Chapter 9",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-8-en",
        followingChapter: "yahawzhowaa-book-5-chapter-10-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-10-en",
        title: "Chapter10",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 10,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-10-en",
        title: "Chapter 10",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-9-en",
        followingChapter: "yahawzhowaa-book-5-chapter-11-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-11-en",
        title: "Chapter 11",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 11,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-11-en",
        title: "Chapter 11",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-10-en",
        followingChapter: "yahawzhowaa-book-5-chapter-12-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-12-en",
        title: "Chapter 12",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 12,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-12-en",
        title: "Chapter 12",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-11-en",
        followingChapter: "yahawzhowaa-book-5-chapter-13-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-13-en",
        title: "Chapter 13",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 13,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-13-en",
        title: "Chapter 13",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-12-en",
        followingChapter: "yahawzhowaa-book-5-chapter14-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-14-en",
        title: "Chapter 14",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 14,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-14-en",
        title: "Chapter 14",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 1,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-13-en",
        followingChapter: "yahawzhowaa-book-5-chapter-15-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-15-en",
        title: "Chapter 15",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 15,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-15-en",
        title: "Chapter 15",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 15,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-14-en",
        followingChapter: "yahawzhowaa-book-5-chapter-16-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-16-en",
        title: "Chapter 16",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 16,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-16-en",
        title: "Chapter 16",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-15-en",
        followingChapter: "yahawzhowaa-book-5-chapter-17-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-17-en",
        title: "Chapter 17",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 17,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-17-en",
        title: "Chapter 17",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-16-en",
        followingChapter: "yahawzhowaa-book-5-chapter-18-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-18-en",
        title: "Chapter 18",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 18,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-18-en",
        title: "Chapter 18",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 18,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-17-en",
        followingChapter: "yahawzhowaa-book-5-chapter-19-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-19-en",
        title: "Chapter 19",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 19,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-19 -en",
        title: "Chapter 19",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 19,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-18-en",
        followingChapter: "yahawzhowaa-book-5-chapter-20-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

       chapter = {
        id: "yahawzhowaa-book-6-chapter-20-en",
        title: "Chapter 20",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 20,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-20-en",
        title: "Chapter20",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 20,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-19-en",
        followingChapter: "yahawzhowaa-book-5-chapter-21-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-21-en",
        title: "Chapter 21",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 21,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-21-en",
        title: "Chapter 21",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 21,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-20-en",
        followingChapter: "yahawzhowaa-book-5-chapter-22-en",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-6-chapter-22-en",
        title: "Chapter 22",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 22,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-6-chapter-22-en",
        title: "Chapter 22",
        subTitle: "",
        parent: "yahawzhowaa-book-6-en",
        order: 22,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-chapter-21-en",
        followingChapter: "",
        content: [

        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    res.send("Yahawzhowaa Added");
});


//module.exports = copper;