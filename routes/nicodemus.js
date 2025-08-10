
const express = require("express");
const { text } = require('body-parser');
const nicodemus = express.Router();
const { OAuth2Client } = require('google-auth-library');
const { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } = require("../database/database.js"); // Import the database module
require('dotenv').config(); // Load environment variables


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;



nicodemus.get("/addNicodemus", function (req, res) {
    book = {
        id: "gospel-of-nicodemus-en",
        title: "The Gospel of Nicodemus",
        subTitle: "Formerly called the ACTS of PONTIUS PILATE",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/nicodemus-thumbnail.jpg",
        thumbnailTitle: "Gospel of Nicodemus",
        isParent: true,
        hasChildBooks: false,
        order: 1,
        parent: "",
        visible: true
    }
    addBook(book);

    chapter = {
        id: "gon-intro-en",
        title: "Introduction",
        subTitle: "Formerly called the ACTS of PONTIUS PILATE",
        order: 1,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-intro-en",
        title: "Introduction",
        subTitle: "Formerly called the ACTS of PONTIUS PILATE",
        order: 1,
        parent: "gospel-of-nicodemus-en",
        visible: true,
        previousChapter: "",
        followingChapter: "gon-chapter-1-en",
        content: [
            "Although this Gospel is, by some among the learned, supposed to have been really written by Nicodemus, who became a disciple of Jesus Christ, and conversed with him; others conjecture that it was a forgery towards the close of the third century by some zealous believer, who observing that there had been appeals made by the Christians of the former age, to the Acts of Pilate, but that such Acts could not be produced, imagined it would be of service to Christianity to fabricate and publish this Gospel; as it would both confirm the Christians under persecution, and convince the Heathens of the truth of the Christian religion. The Rev. Jeremiah Jones says, that such pious frauds were very common among Christians even in the first three centuries; and that a forgery of this nature, with the view above mentioned, seems natural and probable. The same author, in noticing that Eusebius, in his Ecclesiastical history, charges the Pagans with having forged and published a book, called \"The Acts of Pilate,\" takes occasion to observe, that the internal evidence of this Gospel shows it was not the work of any Heathen; but that if in the latter end of the third century we find it in use among Christians (as it was then certainly in some churches) and about the same time find a forgery of the Heathens under the same title, it seems exceedingly probable that some Christians, at that time, should publish such a piece as this, in order partly to confront the spurious one of the Pagans, and partly to support those appeals which had been made by former Christians to the Acts of Pilate; and Mr. Jones says, he thinks so more particularly as we have innumerable instances of forgeries by the faithful in the primitive ages, grounded on less plausible reasons. Whether it be canonical or not, it is of very great antiquity, and is appealed to by several of the ancient Christians. The present translation is made from the Gospel published by Grynæus in the Orthodoxographa, vol. i. tom. ii. p. 643.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "gon-intro-en",
        title: "Introduction",
        subTitle: "Formerly called the ACTS of PONTIUS PILATE",
        order: 1,
        parent: "gospel-of-nicodemus-en",
        visible: true,
        previousChapter: "",
        followingChapter: "gon-chapter-1-en",
        content: [
            "Although this Gospel is, by some among the learned, supposed to have been really written by Nicodemus, who became a disciple of Jesus Christ, and conversed with him; others conjecture that it was a forgery towards the close of the third century by some zealous believer, who observing that there had been appeals made by the Christians of the former age, to the Acts of Pilate, but that such Acts could not be produced, imagined it would be of service to Christianity to fabricate and publish this Gospel; as it would both confirm the Christians under persecution, and convince the Heathens of the truth of the Christian religion. The Reverend Jeremiah Jones says, that such pious frauds were very common among Christians even in the first three centuries; and that a forgery of this nature, with the view above mentioned, seems natural and probable. The same author, in noticing that Eusebius, in his Ecclesiastical history, charges the Pagans with having forged and published a book, called The Acts of Pilate, takes occasion to observe, that the internal evidence of this Gospel shows it was not the work of any Heathen; but that if in the latter end of the third century we find it in use among Christians as it was then certainly in some churches and about the same time find a forgery of the Heathens under the same title, it seems exceedingly probable that some Christians, at that time, should publish such a piece as this, in order partly to confront the spurious one of the Pagans, and partly to support those appeals which had been made by former Christians to the Acts of Pilate; and Mr. Jones says, he thinks so more particularly as we have innumerable instances of forgeries by the faithful in the primitive ages, grounded on less plausible reasons. Whether it be canonical or not, it is of very great antiquity, and is appealed to by several of the ancient Christians. The present translation is made from the Gospel published by Grynæus in the Orthodoxographa.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-1-en",
        title: "Chapter 1",
        subTitle: "Christ accused to Pilate by the Jews of healing on the sabbath, 9 summoned before Pilate by a messenger who does him honour, 20 worshipped by the standards bowing down to him.",
        order:2,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-1-en",
        title: "Chapter 1",
        subTitle: "Christ accused to Pilate by the Jews of healing on the sabbath, 9 summoned before Pilate by a messenger who does him honour, 20 worshipped by the standards bowing down to him.",
        order: 2,
        parent: "gospel-of-nicodemus-en",
        visible: true,
        previousChapter: "gon-intro-en",
        followingChapter: "gon-chapter-2-en",
        content: [
            "The Gospel of NICODEMUS the disciple, concerning the Sufferings and Resurrection of our Master and Saviour JESUS CHRIST.",
            "ANNAS and Caiaphas, and Summas, and Datam, Gamaliel, Judas, Levi, Nepthalim, Alexander, Cyrus, and other Jews, went to Pilate about Jesus, accusing him with many bad crimes.",
            "2 And said, We are assured that Jesus is the son of Joseph the carpenter, 1 land born of Mary, and that he declares himself the Son of God, and a king; 2 and not only so, but attempts the dissolution of the sabbath, 3 and the laws of our fathers.",
            "3 Pilate replied; What is it which he declares? and what is it which he attempts dissolving?",
            "4 The Jews told him, We have a law which forbids doing cures on the sabbath day; 4 but he cures both the lame and the deaf, those afflicted with the palsy, the blind, and lepers, and demoniacs, on that day by wicked methods.",
            "5 Pilate replied, How can he do this by wicked methods? They answered, He is a conjurer, and casts out devils by the prince of the devils; 5  6 and so all things become subject to him.",
            "6 Then said Pilate, Casting out devils seems not to be the work of an unclean spirit, but to proceed from the power of God.",
            "7 The Jews replied to Pilate, We entreat your highness to summon him to appear before your tribunal, and hear him yourself.",
            "8 Then Pilate called a messenger and said to him, By what means will Christ be brought hither?",
            "9 Then went the messenger forth, and knowing Christ, worshipped him; and having spread the cloak which he had in his hand upon the ground, he said, Lord, walk upon this, and go in, for the governor calls thee.",
            "10 When the Jews perceived what the messenger had done they exclaimed (against him) to Pilate, and said, Why did you not give him his summons by a beadle, and not by a messenger?—For the messenger, when he saw him, worshipped him, and spread the cloak which he had in his hand upon the ground before him, and said to him, Lord, the governor calls thee.",
            "11 Then Pilate called the messenger, and said, Why hast thou done thus?",
            "12 The messenger replied, When thou sentest me from Jerusalem to Alexander, I saw Jesus sitting in a mean figure upon a she-ass, and the children of the Hebrews cried out, Hosannah, holding boughs of trees in their hands.",
            "13 Others spread their garments in the way, and said, Save us, thou who art in heaven; blessed is he who cometh in the name of the Lord. 7",
            "14 Then the Jews cried out, against the messenger, and said, The children of the Hebrews made their acclamations in the Hebrew language; and how couldst thou, who art a Greek, understand the Hebrew?",
            "15 The messenger answered them and said, I asked one of the Jews and said, What is this which the children do cry out in the Hebrew language?",
            "16 And he explained it to me, saying, they cry out Hosannah, which being interpreted, is, O, Lord, save me; or, O Lord, save.",
            "17 Pilate then said to them, Why do you yourselves testify to the words spoken by the children, namely, by your silence? In what has the messenger done amiss? And they were silent.",
            "18 Then the governor said unto the messenger, Go forth and endeavour by any means to bring him in.",
            "19 But the messenger went forth, and did as before; and said, Lord, come in, for the governor calleth thee.",
            "20 And as Jesus was going in by the ensigns, who carried the standards, the tops of them bowed down and worshipped Jesus.",
            "21 Whereupon the Jews exclaimed more vehemently against the ensigns.",
            "22 But Pilate said to the Jews, I know it is not pleasing to you that the tops of the standards did of themselves bow and worship Jesus; but why do ye exclaim against the ensigns, as if they had bowed and worshipped?",
            "23 They replied to Pilate, We saw the ensigns themselves bowing and worshipping Jesus.",
            "24 Then the governor called the ensigns and said unto them, Why did you do thus?",
            "25 The ensigns said to Pilate, We are all Pagans and worship the gods in temples; and how should we think anything about worshipping him? We only held the standards in our hands and they bowed themselves and worshipped him.",
            "26 Then said Pilate to the rulers of the synagogue, Do ye yourselves choose some strong men, and let them hold the standards, and we shall see whether they will then bend of themselves.",
            "27 So the elders of the Jews sought out twelve of the most strong and able old men, and made them hold the standards and they stood in the presence of the governor.",
            "28 Then Pilate said to the messenger, Take Jesus out, and by some means bring him in again. And Jesus and the messenger went out of the hall.",
            "29 And Pilate called the ensigns who before had borne the standards, and swore to them, that if they had not borne the standards in that manner when Jesus before entered in, he would cut off their heads.",
            "30 Then the governor commanded Jesus to come in again.",
            "31 And the messenger did as he had done before, and very much entreated Jesus that he would go upon his cloak, and walk on it, and he did walk upon it, and went in.",
            "32 And when Jesus went in, the standards bowed themselves as before, and worshipped him.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "gon-chapter-1-en",
        title: "Chapter 1",
        subTitle: "Christ accused to Pilate by the Jews of healing on the sabbath, 9 summoned before Pilate by a messenger who does him honour, 20 worshipped by the standards bowing down to him.",
        order: 2,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-intro-en",
        followingChapter: "gon-chapter-2-en",
        content: [
            "The Gospel of NICODEMUS the disciple, concerning the Sufferings and Resurrection of our Master and Saviour JESUS CHRIST.",
            "ANNAS and Caiaphas, and Summas, and Datam, Gamaliel, Judas, Levi, Nepthalim, Alexander, Cyrus, and other Jews, went to Pilate about Jesus, accusing him with many bad crimes.",
            "And said, We are assured that Jesus is the son of Joseph the carpenter, 1 land born of Mary, and that he declares himself the Son of God, and a king; 2 and not only so, but attempts the dissolution of the sabbath, 3 and the laws of our fathers.",
            "Pilate replied; What is it which he declares? and what is it which he attempts dissolving?",
            "The Jews told him, We have a law which forbids doing cures on the sabbath day; 4 but he cures both the lame and the deaf, those afflicted with the palsy, the blind, and lepers, and demoniacs, on that day by wicked methods.",
            "Pilate replied, How can he do this by wicked methods? They answered, He is a conjurer, and casts out devils by the prince of the devils; 5  6 and so all things become subject to him.",
            "Then said Pilate, Casting out devils seems not to be the work of an unclean spirit, but to proceed from the power of God.",
            "The Jews replied to Pilate, We entreat your highness to summon him to appear before your tribunal, and hear him yourself.",
            "Then Pilate called a messenger and said to him, By what means will Christ be brought hither?",
            "Then went the messenger forth, and knowing Christ, worshipped him; and having spread the cloak which he had in his hand upon the ground, he said, Lord, walk upon this, and go in, for the governor calls thee.",
            "When the Jews perceived what the messenger had done they exclaimed (against him) to Pilate, and said, Why did you not give him his summons by a beadle, and not by a messenger?—For the messenger, when he saw him, worshipped him, and spread the cloak which he had in his hand upon the ground before him, and said to him, Lord, the governor calls thee.",
            "Then Pilate called the messenger, and said, Why hast thou done thus?",
            "The messenger replied, When thou sentest me from Jerusalem to Alexander, I saw Jesus sitting in a mean figure upon a she-ass, and the children of the Hebrews cried out, Hosannah, holding boughs of trees in their hands.",
            "Others spread their garments in the way, and said, Save us, thou who art in heaven; blessed is he who cometh in the name of the Lord. 7",
            "Then the Jews cried out, against the messenger, and said, The children of the Hebrews made their acclamations in the Hebrew language; and how couldst thou, who art a Greek, understand the Hebrew?",
            "The messenger answered them and said, I asked one of the Jews and said, What is this which the children do cry out in the Hebrew language?",
            "And he explained it to me, saying, they cry out Hosannah, which being interpreted, is, O, Lord, save me; or, O Lord, save.",
            "Pilate then said to them, Why do you yourselves testify to the words spoken by the children, namely, by your silence? In what has the messenger done amiss? And they were silent.",
            "Then the governor said unto the messenger, Go forth and endeavour by any means to bring him in.",
            "But the messenger went forth, and did as before; and said, Lord, come in, for the governor calleth thee.",
            "And as Jesus was going in by the ensigns, who carried the standards, the tops of them bowed down and worshipped Jesus.",
            "Whereupon the Jews exclaimed more vehemently against the ensigns.",
            "But Pilate said to the Jews, I know it is not pleasing to you that the tops of the standards did of themselves bow and worship Jesus; but why do ye exclaim against the ensigns, as if they had bowed and worshipped?",
            "They replied to Pilate, We saw the ensigns themselves bowing and worshipping Jesus.",
            "Then the governor called the ensigns and said unto them, Why did you do thus?",
            "The ensigns said to Pilate, We are all Pagans and worship the gods in temples; and how should we think anything about worshipping him? We only held the standards in our hands and they bowed themselves and worshipped him.",
            "Then said Pilate to the rulers of the synagogue, Do ye yourselves choose some strong men, and let them hold the standards, and we shall see whether they will then bend of themselves.",
            "So the elders of the Jews sought out twelve of the most strong and able old men, and made them hold the standards and they stood in the presence of the governor.",
            "Then Pilate said to the messenger, Take Jesus out, and by some means bring him in again. And Jesus and the messenger went out of the hall.",
            "And Pilate called the ensigns who before had borne the standards, and swore to them, that if they had not borne the standards in that manner when Jesus before entered in, he would cut off their heads.",
            "Then the governor commanded Jesus to come in again.",
            "And the messenger did as he had done before, and very much entreated Jesus that he would go upon his cloak, and walk on it, and he did walk upon it, and went in.",
            "And when Jesus went in, the standards bowed themselves as before, and worshipped him.",
        ],
    }
    addChapterAudio(chapter);
    res.send("Nicodemus Added");
/*
    chapter = {
        id: "gon-chapter-2-en",
        title: "Chapter 2",
        subTitle: "",
        order: 3,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-2-en",
        title: "Chapter 2",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-1",
        followingChapter: "gon-chapter-3",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-3-en",
        title: "Chapter 3",
        subTitle: "",
        order: 4,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-3-en",
        title: "Chapter 3",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-2",
        followingChapter: "gon-chapter-4",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-4-en",
        title: "Chapter 4",
        subTitle: "",
        order: 5,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-4-en",
        title: "Chapter 4",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-3",
        followingChapter: "gon-chapter-5",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-5-en",
        title: "Chapter 5",
        subTitle: "",
        order: 6,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-5-en",
        title: "Chapter 5",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-4",
        followingChapter: "gon-chapter-6",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-6-en",
        title: "Chapter 6",
        subTitle: "",
        order: 7,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
     chapter = {
        id: "gon-chapter-6-en",
        title: "Chapter 6",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-5",
        followingChapter: "gon-chapter-7",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-7-en",
        title: "Chapter 7",
        subTitle: "",
        order: 8,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-7-en",
        title: "Chapter 7",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-6",
        followingChapter: "gon-chapter-8",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-8-en",
        title: "Chapter 8",
        subTitle: "",
        order: 9,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-8-en",
        title: "Chapter 8",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-7",
        followingChapter: "gon-chapter-9",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-9-en",
        title: "Chapter 9",
        subTitle: "",
        order: 10,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-9-en",
        title: "Chapter 9",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-8",
        followingChapter: "gon-chapter-10",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-10-en",
        title: "Chapter 10",
        subTitle: "",
        order: 11,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-10-en",
        title: "Chapter 10",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-9",
        followingChapter: "gon-chapter-11",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-11-en",
        title: "Chapter 11",
        subTitle: "",
        order: 12,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-11-en",
        title: "Chapter 11",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-10",
        followingChapter: "gon-chapter-12",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-12-en",
        title: "Chapter 12",
        subTitle: "",
        order: 13,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-12-en",
        title: "Chapter 12",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-11",
        followingChapter: "gon-chapter-13",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-13-en",
        title: "Chapter 13",
        subTitle: "",
        order: 14,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-13-en",
        title: "Chapter 13",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-12",
        followingChapter: "gon-chapter-14",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-14-en",
        title: "Chapter 14",
        subTitle: "",
        order: 15,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-14-en",
        title: "Chapter 14",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-13",
        followingChapter: "gon-chapter-15",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-15-en",
        title: "Chapter 15",
        subTitle: "",
        order: 16,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-15-en",
        title: "Chapter 15",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-14",
        followingChapter: "gon-chapter-16",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-16-en",
        title: "Chapter 16",
        subTitle: "",
        order: 17,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-16-en",
        title: "Chapter 16",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-15",
        followingChapter: "gon-chapter-17",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-17-en",
        title: "Chapter 17",
        subTitle: "",
        order: 18,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-17-en",
        title: "Chapter 17",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-16",
        followingChapter: "gon-chapter-18",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-18-en",
        title: "Chapter 18",
        subTitle: "",
        order: 19,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-18-en",
        title: "Chapter 18",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-17",
        followingChapter: "gon-chapter-19",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-19-en",
        title: "Chapter 19",
        subTitle: "",
        order: 20,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-19-en",
        title: "Chapter 19",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-18",
        followingChapter: "gon-chapter-20",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-20-en",
        title: "Chapter 20",
        subTitle: "",
        order: 21,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-20-en",
        title: "Chapter 20",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-19",
        followingChapter: "gon-chapter-21",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-21-en",
        title: "Chapter 21",
        subTitle: "",
        order: 22,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "gon-chapter-21-en",
        title: "Chapter 21",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-20",
        followingChapter: "gon-chapter-22",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-22-en",
        title: "Chapter 22",
        subTitle: "",
        order: 23,
        parent: "gospel-of-nicodemus",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-22-en",
        title: "Chapter 22",
        subTitle: "",
        order: 1,
        parent: "gospel-of-nicodemus",
        visible: true,
        previousChapter: "gon-chapter-21",
        followingChapter: "",
        content: [
            "paragraph 1",
            "paragraph 2",
            "paragraph 3",
            "paragraph 4",
            "paragraph 5",
            "paragraph 6", 
            "paragraph 7", 
            "paragraph 8", 
            "paragraph 9", 
            "paragraph 10"
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);
*/

})

nicodemus.get("/removeNicodemus", function (req, res) {
    book = {
        id: "gospel-of-nicodemus-en",
    }
    removeBook(book);

    chapter = {
        id: "gon-intro-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-intro-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-intro-en",
    }
    removeChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-1-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-1-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-1-en",
    }
    removeChapterAudio(chapter);
    res.send("Nicodemus Removed");
});

module.exports = nicodemus;