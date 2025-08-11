
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
        thumbnail: "https://storage.googleapis.com/sacred-records/books/jewish-records/nicodemus-thumbnail.jpg",
        thumbnailTitle: "Gospel of Nicodemus",
        isParent: true,
        hasChildBooks: false,
        order: 1,
        parent: "",
        visible: true,
        language: "en",
    }
    addBook(book);

    chapter = {
        id: "gon-intro-en",
        title: "Introduction",
        subTitle: "Formerly called the ACTS of PONTIUS PILATE",
        parent: "gospel-of-nicodemus-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-intro-en",
        title: "Introduction",
        subTitle: "Formerly called the ACTS of PONTIUS PILATE",
        parent: "gospel-of-nicodemus-en",
        order: 1,
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
        parent: "gospel-of-nicodemus-en",
        order: 1,
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
        parent: "gospel-of-nicodemus-en",
        order: 2,
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
        parent: "gospel-of-nicodemus",
        order: 2,
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

    chapter = {
        id: "gon-chapter-2-en",
        title: "Chapter 2",
        subTitle: "Is compassionated by Pilate's wife, 7 charged with being born in fornication. Testimony to the betrothing of his parents. Hatred of the Jews to him.",
        order: 3,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-2-en",
        title: "Chapter 2",
        subTitle: "Is compassionated by Pilate's wife, 7 charged with being born in fornication. Testimony to the betrothing of his parents. Hatred of the Jews to him.",
        parent: "gospel-of-nicodemus-en",
        order: 3,
        visible: true,
        previousChapter: "gon-chapter-1-en",
        followingChapter: "gon-chapter-3-en",
        content: [
            "NOW when Pilate saw this, he was afraid, and was about to rise from his seat.",
            "2 But while he thought to rise, his own wife who stood at a distance, sent to him, saying. \"Have thou nothing to do with that just man; for I have suffered much concerning him in a vision this night.\"",
            "3 When the Jews heard this they said to Pilate, Did we not say unto thee, He is a conjuror? Behold, he hath caused thy wife to dream.",
            "4 Pilate then calling Jesus, said, thou hast heard what they testify against thee, and makest no answer?",
            "5 Jesus replied, If they had not a power of speaking, they could not have spoke; but because every one has the command of his own tongue, to speak both good and bad, let him look to it.",
            "6 But the elders of the Jews answered, and said to Jesus, What shall we look to?", 
            "7 In the first place, we know this concerning thee, that thou wast born through fornication; secondly, that upon the account of thy birth the infants were slain in Bethlehem; thirdly, that thy father and mother Mary fled into Egypt, because they could not trust their own people.", 
            "8 Some of the Jews who stood by spake more favorably, We cannot say that he was born through fornication; but we know that his mother Mary was betrothed to Joseph, and so he was not born through fornication.", 
            "9 Then said Pilate to the Jews who affirmed him to be born through fornication, This your account is not true, seeing there was a betrothment, as they testify who are of your own nation.", 
            "10 Annas and Caiaphas spake to Pilate, All this multitude of people is to be regarded, who cry out, that he was born through fornication, and is a conjuror; but they who deny him to be born through fornication, are his proselytes and disciples.",
            "11 Pilate answered Annas and Caiaphas, Who are the proselytes? They answered, They are those who are the children of Pagans, and are not become Jews, but followers of him.",
            "12 Then replied Eleazer, and Asterius, and Antonius, and James, Caras and Samuel, Isaac and Phinees, Crispus and Agrippa, Annas and Judas, We are not proselytes, but children of Jews, and speak the truth, and were present when Mary was betrothed.",
            "13 Then Pilate addressing himself to the twelve men who spake this, said to them, I conjure you by the life of Caesar, that ye faithfully declare whether he was born through fornication, and those things be true which ye have related.",
            "14 They answered Pilate, We have a law, whereby we are forbid to swear, it being a sin: Let them swear by the life of Caesar that it is not as we have said, and we will be contented to be put to death.",
            "15 Then said Annas and Caiaphas to Pilate, Those twelve men will not believe that we know him to be basely born, and to be a conjuror, although he pretends that he is the son of God, and a king: 2 which we are so far from believing, that we tremble to hear.",
            "16 Then Pilate commanded every one to go out except the twelve men who said he was not born through fornication, and Jesus to withdraw to a distance, and said to them, Why have the Jews a mind to kill Jesus?",
            "17 They answered him, They are angry because he wrought cures on the Sabbath day. Pilate said, Will they kill him for good work? 1 They say unto him, Yes, Sir.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "gon-chapter-2-en",
        title: "Chapter 2",
        subTitle: "Is compassionated by Pilate's wife, 7 charged with being born in fornication. Testimony to the betrothing of his parents. Hatred of the Jews to him.",
        parent: "gospel-of-nicodemus-en",
        order: 3,
        visible: true,
        previousChapter: "gon-chapter-1-en",
        followingChapter: "gon-chapter-3-en",
        content: [
            "NOW when Pilate saw this, he was afraid, and was about to rise from his seat.",
            "But while he thought to rise, his own wife who stood at a distance, sent to him, saying. \"Have thou nothing to do with that just man; for I have suffered much concerning him in a vision this night.\"",
            "When the Jews heard this they said to Pilate, Did we not say unto thee, He is a conjuror? Behold, he hath caused thy wife to dream.",
            "Pilate then calling Jesus, said, thou hast heard what they testify against thee, and makest no answer?",
            "Jesus replied, If they had not a power of speaking, they could not have spoke; but because every one has the command of his own tongue, to speak both good and bad, let him look to it.",
            "But the elders of the Jews answered, and said to Jesus, What shall we look to?", 
            "In the first place, we know this concerning thee, that thou wast born through fornication; secondly, that upon the account of thy birth the infants were slain in Bethlehem; thirdly, that thy father and mother Mary fled into Egypt, because they could not trust their own people.", 
            "Some of the Jews who stood by spake more favorably, We cannot say that he was born through fornication; but we know that his mother Mary was betrothed to Joseph, and so he was not born through fornication.", 
            "Then said Pilate to the Jews who affirmed him to be born through fornication, This your account is not true, seeing there was a betrothment, as they testify who are of your own nation.", 
            "Annas and Caiaphas spake to Pilate, All this multitude of people is to be regarded, who cry out, that he was born through fornication, and is a conjuror; but they who deny him to be born through fornication, are his proselytes and disciples.",
            "Pilate answered Annas and Caiaphas, Who are the proselytes? They answered, They are those who are the children of Pagans, and are not become Jews, but followers of him.",
            "Then replied Eleazer, and Asterius, and Antonius, and James, Caras and Samuel, Isaac and Phinees, Crispus and Agrippa, Annas and Judas, We are not proselytes, but children of Jews, and speak the truth, and were present when Mary was betrothed.",
            "Then Pilate addressing himself to the twelve men who spake this, said to them, I conjure you by the life of Caesar, that ye faithfully declare whether he was born through fornication, and those things be true which ye have related.",
            "They answered Pilate, We have a law, whereby we are forbid to swear, it being a sin: Let them swear by the life of Caesar that it is not as we have said, and we will be contented to be put to death.",
            "Then said Annas and Caiaphas to Pilate, Those twelve men will not believe that we know him to be basely born, and to be a conjuror, although he pretends that he is the son of God, and a king: which we are so far from believing, that we tremble to hear.",
            "Then Pilate commanded every one to go out except the twelve men who said he was not born through fornication, and Jesus to withdraw to a distance, and said to them, Why have the Jews a mind to kill Jesus?",
            "They answered him, They are angry because he wrought cures on the Sabbath day. Pilate said, Will they kill him for good work? They say unto him, Yes, Sir.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-3-en",
        title: "Chapter 3",
        subTitle: "Is exonerated by Pilate. Disputes with Pilate concerning Truth.",
        order: 4,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-3-en",
        title: "Chapter 3",
        subTitle: "Is exonerated by Pilate. Disputes with Pilate concerning Truth.",
        parent: "gospel-of-nicodemus-en",
        order: 4,
        visible: true,
        previousChapter: "gon-chapter-2-en",
        followingChapter: "gon-chapter-4-en",
        content: [
            "THEN Pilate, filled with anger, went out of the hall, and said to the Jews, I call the whole world to witness that I find no fault in that man.",
            "2 The Jews replied to Pilate, If he had not been a wicked person, we had not brought him before thee.",
            "3 Pilate said to them, Do ye take him and try him by your law.",
            "4 Then the Jews said, It is not lawful for us to put any one to death.",
            "5 Pilate said to the Jews, The command, therefore thou shalt not kill, 3 belongs to you, but not to me.",
            "6 And he went again into the hall, and called Jesus by himself, and said to him, Art thou the king of the Jews?", 
            "7 And Jesus answering, said to Pilate, Dost thou speak this of thyself, or did the Jews tell it thee concerning me?", 
            "8 Pilate answering, said to Jesus, Am I a Jew? The whole nation and rulers of the Jews have delivered thee up to me. What hast thou done?", 
            "9 Jesus answering, said, My kingdom is not of this world: if my kingdom were of this world, then would my servants fight, and I should not have been delivered to the Jews; but now my kingdom is not from hence.", 
            "10 Pilate said, Art thou a king then? Jesus answered, Thou sayest that I am a king: to this end was I born, and for this end came I into the world; and for this purpose I came, that I should bear witness to the truth; and every one who is of the truth, heareth my voice.",
            "11 Pilate saith to him, What is truth?",
            "12 Jesus said, Truth is from heaven.",
            "13 Pilate said, Therefore truth is not on earth.",
            "14 Jesus said to Pilate, Believe that truth is on earth among those, who when they have the power of judgment, are governed by truth, and form right judgment.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "gon-chapter-3-en",
        title: "Chapter 3",
        subTitle: "Is exonerated by Pilate. Disputes with Pilate concerning Truth.",
        parent: "gospel-of-nicodemus-en",
        order: 4,
        visible: true,
        previousChapter: "gon-chapter-2-en",
        followingChapter: "gon-chapter-4-en",
        content: [
            "THEN Pilate, filled with anger, went out of the hall, and said to the Jews, I call the whole world to witness that I find no fault in that man.",
            "The Jews replied to Pilate, If he had not been a wicked person, we had not brought him before thee.",
            "Pilate said to them, Do ye take him and try him by your law.",
            "Then the Jews said, It is not lawful for us to put any one to death.",
            "Pilate said to the Jews, The command, therefore thou shalt not kill, 3 belongs to you, but not to me.",
            "And he went again into the hall, and called Jesus by himself, and said to him, Art thou the king of the Jews?", 
            "And Jesus answering, said to Pilate, Dost thou speak this of thyself, or did the Jews tell it thee concerning me?", 
            "Pilate answering, said to Jesus, Am I a Jew? The whole nation and rulers of the Jews have delivered thee up to me. What hast thou done?", 
            "Jesus answering, said, My kingdom is not of this world: if my kingdom were of this world, then would my servants fight, and I should not have been delivered to the Jews; but now my kingdom is not from hence.", 
            "Pilate said, Art thou a king then? Jesus answered, Thou sayest that I am a king: to this end was I born, and for this end came I into the world; and for this purpose I came, that I should bear witness to the truth; and every one who is of the truth, heareth my voice.",
            "Pilate saith to him, What is truth?",
            "Jesus said, Truth is from heaven.",
            "Pilate said, Therefore truth is not on earth.",
            "Jesus said to Pilate, Believe that truth is on earth among those, who when they have the power of judgment, are governed by truth, and form right judgment.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-4-en",
        title: "Chapter 4",
        subTitle: "Pilate finds no fault in Jesus. The Jews demand his crucifixion.",
        order: 5,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-4-en",
        title: "Chapter 4",
        subTitle: "Pilate finds no fault in Jesus. The Jews demand his crucifixion.",
        parent: "gospel-of-nicodemus-en",
        order: 5,
        visible: true,
        previousChapter: "gon-chapter-3-en",
        followingChapter: "gon-chapter-5-en",
        content: [
            "THEN Pilate left Jesus in the hall, and went out to the Jews, and said, I find not any one fault in Jesus.",
            "2 The Jews say unto him, But he said, I can destroy the temple of God, and in three days build it up again.",
            "3 Pilate saith unto them, What sort of temple is that of which he speaketh?",
            "4 The Jews say unto him, That which Solomon was forty-six years in building, he said he would destroy, and in three days build up.",
            "5 Pilate said to them again, I am innocent from the blood of that man; do ye look to it.",
            "6 The Jews say to him, His blood be upon us and our children. Then Pilate calling together the elders and scribes, priests and Levites, saith to them privately, Do not act thus; I have found nothing in your charge (against him) concerning his curing sick persons, and breaking the sabbath, worthy of death.",
            "7 The Priests and Levites replied to Pilate, By the life of Caesar, if any one be a blasphemer, he is worthy of death; but this man hath blasphemed against the Lord.",
            "8 Then the governor again commanded the Jews to depart out of the hall; and calling Jesus, said to him, What shall I do with thee?",
            "9 Jesus answered him, Do according as it is written.",
            "10 Pilate said to him, How is it written?",
            "11 Jesus saith to him, Moses and the prophets have prophesied concerning my suffering and resurrection.",
            "12 The Jews hearing this, were provoked, and said to Pilate, Why wilt thou any longer hear the blasphemy of that man?",
            "13 Pilate saith to them, If these words seem to you blasphemy, do ye take him, bring him to your court, and try him according to your law.",
            "14 The Jews reply to Pilate, Our law saith, he shall be obliged to receive nine and thirty stripes, but if after this manner he shall blaspheme against the Lord, he shall be stoned.",
            "15 Pilate saith unto them, If that speech of his was blasphemy, do ye try him according to your law.",
            "16 The Jews say to Pilate, Our law commands us not to put any one to death:  we desire that he may be crucified, because he deserves the death of the cross.",
            "17 Pilate saith to them, It is not fit he should be crucified: let him be only whipped and sent away.",
            "18 But when the governor looked upon the people that were present and the Jews, he saw many of the Jews in tears, and said to the chief priests of the Jews, All the people do not desire his death.",
            "19 The elders of the Jews answered to Pilate, We and all the people came hither for this very purpose, that he should die.",
            "20 Pilate saith to them, Why should he die?",
            "21 They said to him, Because he declares himself to be the Son of God, and a King.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "gon-chapter-4-en",
        title: "Chapter 4",
        subTitle: "Pilate finds no fault in Jesus. The Jews demand his crucifixion.",
        parent: "gospel-of-nicodemus-en",
        order: 5,
        visible: true,
        previousChapter: "gon-chapter-3-en",
        followingChapter: "gon-chapter-5-en",
        content: [
            "THEN Pilate left Jesus in the hall, and went out to the Jews, and said, I find not any one fault in Jesus.",
            "The Jews say unto him, But he said, I can destroy the temple of God, and in three days build it up again.",
            "Pilate saith unto them, What sort of temple is that of which he speaketh?",
            "The Jews say unto him, That which Solomon was forty-six years in building, he said he would destroy, and in three days build up.",
            "Pilate said to them again, I am innocent from the blood of that man; do ye look to it.",
            "The Jews say to him, His blood be upon us and our children. Then Pilate calling together the elders and scribes, priests and Levites, saith to them privately, Do not act thus; I have found nothing in your charge (against him) concerning his curing sick persons, and breaking the sabbath, worthy of death.",
            "The Priests and Levites replied to Pilate, By the life of Caesar, if any one be a blasphemer, he is worthy of death; but this man hath blasphemed against the Lord.",
            "Then the governor again commanded the Jews to depart out of the hall; and calling Jesus, said to him, What shall I do with thee?",
            "Jesus answered him, Do according as it is written.",
            "Pilate said to him, How is it written?",
            "Jesus saith to him, Moses and the prophets have prophesied concerning my suffering and resurrection.",
            "The Jews hearing this, were provoked, and said to Pilate, Why wilt thou any longer hear the blasphemy of that man?",
            "Pilate saith to them, If these words seem to you blasphemy, do ye take him, bring him to your court, and try him according to your law.",
            "The Jews reply to Pilate, Our law saith, he shall be obliged to receive nine and thirty stripes, but if after this manner he shall blaspheme against the Lord, he shall be stoned.",
            "Pilate saith unto them, If that speech of his was blasphemy, do ye try him according to your law.",
            "The Jews say to Pilate, Our law commands us not to put any one to death:  we desire that he may be crucified, because he deserves the death of the cross.",
            "Pilate saith to them, It is not fit he should be crucified: let him be only whipped and sent away.",
            "But when the governor looked upon the people that were present and the Jews, he saw many of the Jews in tears, and said to the chief priests of the Jews, All the people do not desire his death.",
            "The elders of the Jews answered to Pilate, We and all the people came hither for this very purpose, that he should die.",
            "Pilate saith to them, Why should he die?",
            "They said to him, Because he declares himself to be the Son of God, and a King.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-5-en",
        title: "Chapter 5",
        subTitle: "Nicodemus speaks in defence of Christ, and relates his miracles. Another Jew, with Veronica, Centurio, and others, testify of other miracles.",
        order: 6,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-5-en",
        title: "Chapter 5",
        subTitle: "Nicodemus speaks in defence of Christ, and relates his miracles. Another Jew, with Veronica, Centurio, and others, testify of other miracles.",
        parent: "gospel-of-nicodemus-en",
        order: 6,
        visible: true,
        previousChapter: "gon-chapter-4-en",
        followingChapter: "gon-chapter-6-en",
        content: [
            "BUT Nicodemus, a certain Jew, stood before the governor, and said, I entreat thee, righteous judge, that thou wouldst favour me with the liberty of speaking a few words.",
            "2 Pilate said to him, Speak on.",
            "3 Nicodemus said, I spake to the elders of the Jews, and the scribes, and priests and Levites, and all the multitude of the Jews, in their assembly; What is it ye would do with this man?",
            "4 He is a man who hath wrought many useful and glorious miracles, such as no man on earth ever wrought before, nor will ever work. Let him go, and do him no harm; if he cometh from God, his miracles, (his miraculous cures) will continue; but if from men, they will come to nought.",
            "5 Thus Moses, when he was sent by God into Egypt, wrought the miracles which God commanded him, before Pharaoh king of Egypt; and though the magicians of that country, Jannes and Jambres, wrought by their magic the same miracles which Moses did, yet they could not work all which he did;",
            "6 And the miracles which the magicians wrought, were not of God, as ye know, Scribes and Pharisees; but they who wrought them perished, and all who believed them.", 
            "7 And now let this man go; because the very miracles for which ye accuse him, are from God; and he is not worthy of death.", 
            "8 The Jews then said to Nicodemus, Art thou become his disciple, and making speeches in his favour?", 
            "9 Nicodemus said to them, Is the governor become his disciple also, and does he make speeches for him? Did not Cæsar place him in that high post?", 
            "10 When the Jews heard this they trembled, and gnashed their teeth at Nicodemus, and said to him, Mayest thou receive his doctrine for truth, and have thy lot with Christ!",
            "11 Nicodemus replied, Amen; I will receive his doctrine, and my lot with him, as ye have said.",
            "12 ¶ Then another certain Jew rose up, and desired leave of the governor to hear him a few words.",
            "13 And the governor said, Speak what thou hast a mind.",
            "14 And he said, I lay for thirty-eight years by the sheep-pool at Jerusalem, labouring under a great infirmity, and waiting for a cure which should be wrought by the coming of an angel, who at a certain time troubled the water; and whosoever first after the troubling of the water stepped in, was made whole of whatsoever disease he had.",
            "15 And when Jesus saw me languishing there, he said to me, Wilt thou be made whole? And I answered, Sir, I have no man, when the water is troubled, to put me into the pool.",
            "16 And he said unto me, Rise, take up thy bed and walk. And I was immediately made whole, and took up my bed and walked.", 
            "17 The Jews then said to Pilate, Our Lord Governor, pray ask him what day it was on which he was cured of his infirmity.", 
            "18 The infirm person replied, It was on the sabbath.", 
            "19 The Jews said to Pilate, Did we not say that he wrought his cures on the sabbath, and cast out devils by the prince of devils?", 
            "20 Then another certain Jew came forth, and said, I was blind, could hear sounds, but could not see any one; and as Jesus was going along, I heard the multitude passing by, and I asked what was there?",
            "21 They told me that Jesus was passing by: then I cried out, saying, Jesus, Son of David, have mercy on me. And he stood still, and commanded that I should be brought to him, and said to me, What wilt thou?",
            "22 I said, Lord, that I may receive my sight.",
            "23 He said to me, Receive thy sight: and presently I saw, and followed him, rejoicing and giving thanks.",
            "24 And another Jew came forth, and said, I was crooked, and he made me straight by his word.",
            "26 ¶ And a certain woman named Veronica, said, I was afflicted with an issue of blood twelve years, and I touched the hem of his garments, and presently the issue of my blood stopped.", 
            "27 The Jews then said, We have a law, that a woman shall not be allowed as an evidence.",
            "28 And, after other things, another Jew said,  I saw Jesus invited to a wedding with his disciples, and there was a want of wine in Cana of Galilee;",
            "29 And when the wine was all drank, he commanded the servants that they should fill six pots which were there with water, and they filled them up to the brim, and he blessed them, and turned the water into wine, and all the people drank, being surprised at this miracle.",
            "30 And another Jew stood forth, and said,  I saw Jesus teaching in the synagogue at Capernaum; and there was in the synagogue a certain man who had a devil; and he cried out, saying, let me alone; what have we to do with thee, Jesus of Nazareth? Art thou come to destroy us? I know that thou art the Holy One of God.",
            "31 And Jesus rebuked him, saying, Hold thy peace, unclean spirit, and come out of the man; and presently he came out of him, and did not at all hurt him.",
            "32 The following things were also said by a Pharisee; I saw that a great company came to Jesus from Galilee and Judaea, and the sea-coast, and many countries about Jordan, and many infirm persons came to him, and he healed them all.",
            "33 And I heard the unclean spirits crying out, and saying, Thou art the Son of God. And Jesus strictly charged them, that they should not make him known.",
            "34 ¶ After this another person, whose name was Centurio, said, I saw Jesus in Capernaum, and I entreated him, saying, Lord, my servant lieth at home sick of the palsy.",
            "35 And Jesus said to me, I will come and cure him.",
            "36 But I said, Lord, I am not worthy that thou shouldst come under my roof; but only speak the word, and my servant shall be healed.",
            "37 And Jesus said unto me, Go thy way; and as thou hast believed, so be it done unto thee. And my servant was healed from that same hour.",
            "38 Then a certain nobleman said, I had a son in Capernaum, who lay at the point of death; and when I heard that Jesus was come into Galilee, I went and besought him that he would come down to my house, and heal my son, for he was at the point of death.",
            "39 He said to me, Go thy way, thy son liveth.",
            "40 And my son was cured from that hour.",
            "41 Besides these, also many others of the Jews, both men and women, cried out and said, He is truly the Son of God, who cures all diseases only by his word, and to whom the devils are altogether subject.",
            "42 Some of them farther said, This power can proceed fro none but God.",
            "43 Pilate said to the Jews, \"Why are not the devils subject your doctors?\"",
            "44 Seine of them said, The power of subjecting devils can not proceed but from God.",
            "45 But others said to Pilate That he had raised Lazarus from the dead, after he had been four days in his grave.",
            "46 The governor hearing this, trembling said to the multitude of the Jews, What will it profit you to shed innocent blood?",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "gon-chapter-5-en",
        title: "Chapter 5",
        subTitle: "Nicodemus speaks in defence of Christ, and relates his miracles. Another Jew, with Veronica, Centurio, and others, testify of other miracles.",
        parent: "gospel-of-nicodemus",
        order: 6,
        visible: true,
        previousChapter: "gon-chapter-4-en",
        followingChapter: "gon-chapter-6-en",
        content: [
            "BUT Nicodemus, a certain Jew, stood before the governor, and said, I entreat thee, righteous judge, that thou wouldst favour me with the liberty of speaking a few words.",
            "Pilate said to him, Speak on.",
            "Nicodemus said, I spake to the elders of the Jews, and the scribes, and priests and Levites, and all the multitude of the Jews, in their assembly; What is it ye would do with this man?",
            "He is a man who hath wrought many useful and glorious miracles, such as no man on earth ever wrought before, nor will ever work. Let him go, and do him no harm; if he cometh from God, his miracles, (his miraculous cures) will continue; but if from men, they will come to nought.",
            "Thus Moses, when he was sent by God into Egypt, wrought the miracles which God commanded him, before Pharaoh king of Egypt; and though the magicians of that country, Jannes and Jambres, wrought by their magic the same miracles which Moses did, yet they could not work all which he did;",
            "And the miracles which the magicians wrought, were not of God, as ye know, Scribes and Pharisees; but they who wrought them perished, and all who believed them.", 
            "And now let this man go; because the very miracles for which ye accuse him, are from God; and he is not worthy of death.", 
            "The Jews then said to Nicodemus, Art thou become his disciple, and making speeches in his favour?", 
            "Nicodemus said to them, Is the governor become his disciple also, and does he make speeches for him? Did not Cæsar place him in that high post?", 
            "When the Jews heard this they trembled, and gnashed their teeth at Nicodemus, and said to him, Mayest thou receive his doctrine for truth, and have thy lot with Christ!",
            "Nicodemus replied, Amen; I will receive his doctrine, and my lot with him, as ye have said.",
            "Then another certain Jew rose up, and desired leave of the governor to hear him a few words.",
            "And the governor said, Speak what thou hast a mind.",
            "And he said, I lay for thirty-eight years by the sheep-pool at Jerusalem, labouring under a great infirmity, and waiting for a cure which should be wrought by the coming of an angel, who at a certain time troubled the water; and whosoever first after the troubling of the water stepped in, was made whole of whatsoever disease he had.",
            "And when Jesus saw me languishing there, he said to me, Wilt thou be made whole? And I answered, Sir, I have no man, when the water is troubled, to put me into the pool.",
            "And he said unto me, Rise, take up thy bed and walk. And I was immediately made whole, and took up my bed and walked.", 
            "The Jews then said to Pilate, Our Lord Governor, pray ask him what day it was on which he was cured of his infirmity.", 
            "The infirm person replied, It was on the sabbath.", 
            "The Jews said to Pilate, Did we not say that he wrought his cures on the sabbath, and cast out devils by the prince of devils?", 
            "Then another certain Jew came forth, and said, I was blind, could hear sounds, but could not see any one; and as Jesus was going along, I heard the multitude passing by, and I asked what was there?",
            "They told me that Jesus was passing by: then I cried out, saying, Jesus, Son of David, have mercy on me. And he stood still, and commanded that I should be brought to him, and said to me, What wilt thou?",
            "I said, Lord, that I may receive my sight.",
            "He said to me, Receive thy sight: and presently I saw, and followed him, rejoicing and giving thanks.",
            "And another Jew came forth, and said, I was crooked, and he made me straight by his word.",
            "And a certain woman named Veronica, said, I was afflicted with an issue of blood twelve years, and I touched the hem of his garments, and presently the issue of my blood stopped.", 
            "The Jews then said, We have a law, that a woman shall not be allowed as an evidence.",
            "And, after other things, another Jew said,  I saw Jesus invited to a wedding with his disciples, and there was a want of wine in Cana of Galilee;",
            "And when the wine was all drank, he commanded the servants that they should fill six pots which were there with water, and they filled them up to the brim, and he blessed them, and turned the water into wine, and all the people drank, being surprised at this miracle.",
            "And another Jew stood forth, and said,  I saw Jesus teaching in the synagogue at Capernaum; and there was in the synagogue a certain man who had a devil; and he cried out, saying, let me alone; what have we to do with thee, Jesus of Nazareth? Art thou come to destroy us? I know that thou art the Holy One of God.",
            "And Jesus rebuked him, saying, Hold thy peace, unclean spirit, and come out of the man; and presently he came out of him, and did not at all hurt him.",
            "The following things were also said by a Pharisee; I saw that a great company came to Jesus from Galilee and Judaea, and the sea-coast, and many countries about Jordan, and many infirm persons came to him, and he healed them all.",
            "And I heard the unclean spirits crying out, and saying, Thou art the Son of God. And Jesus strictly charged them, that they should not make him known.",
            "After this another person, whose name was Centurio, said, I saw Jesus in Capernaum, and I entreated him, saying, Lord, my servant lieth at home sick of the palsy.",
            "And Jesus said to me, I will come and cure him.",
            "But I said, Lord, I am not worthy that thou shouldst come under my roof; but only speak the word, and my servant shall be healed.",
            "And Jesus said unto me, Go thy way; and as thou hast believed, so be it done unto thee. And my servant was healed from that same hour.",
            "Then a certain nobleman said, I had a son in Capernaum, who lay at the point of death; and when I heard that Jesus was come into Galilee, I went and besought him that he would come down to my house, and heal my son, for he was at the point of death.",
            "He said to me, Go thy way, thy son liveth.",
            "And my son was cured from that hour.",
            "Besides these, also many others of the Jews, both men and women, cried out and said, He is truly the Son of God, who cures all diseases only by his word, and to whom the devils are altogether subject.",
            "Some of them farther said, This power can proceed fro none but God.",
            "Pilate said to the Jews, \"Why are not the devils subject your doctors?\"",
            "Seine of them said, The power of subjecting devils can not proceed but from God.",
            "But others said to Pilate That he had raised Lazarus from the dead, after he had been four days in his grave.",
            "The governor hearing this, trembling said to the multitude of the Jews, What will it profit you to shed innocent blood?",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-6-en",
        title: "Chapter 6",
        subTitle: "Pilate dismayed by the turbulence of the Jews, who demand Barabbas to be released, and Christ to be crucified, Pilate warmly expostulates with them, washes his hands of Christ's blood, and sentences him to be whipped and crucified.",
        order: 7,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-6-en",
        title: "Chapter 6",
        subTitle: "Pilate dismayed by the turbulence of the Jews, who demand Barabbas to be released, and Christ to be crucified, Pilate warmly expostulates with them, washes his hands of Christ's blood, and sentences him to be whipped and crucified.",
        parent: "gospel-of-nicodemus-en",
        order: 7,
        visible: true,
        previousChapter: "gon-chapter-5-en",
        followingChapter: "gon-chapter-7-en",
        content: [
            "THEN Pilate having called together Nicodemus, and the fifteen men who said that Jesus was not born through fornication, said to them, What shall I do, seeing there is like to be a tumult among the people.",
            "2 They said unto him, We know not; let them look to it who raise the tumult.",
            "3 Pilate then called the multitude again, and said to them, Ye know that ye have a custom, that I should release to you one prisoner at the feast of the passover;",
            "4 I have a noted prisoner, a murderer, who is called Barabbas, and Jesus who is called Christ, in whom I find nothing that deserves death; which of them therefore have you a mind that I should release to you?",
            "5 They all cry out, and say, Release to us Barabbas.",
            "6 Pilate saith to them, What then shall I do with Jesus who, is called Christ?",
            "7 They all answer, Let him be crucified.",
            "8 Again they cry out and say to Pilate, You are not the friend of Caesar, if you release this man? 4 for he hath declared that he is the Son of God, and a king. But are you inclined that he should be king, and not Caesar?",
            "9 Then Pilate filled with anger said to them, Your nation hath always been seditious, and you are always against those who have been serviceable to you?",
            "10 The Jews replied, Who are those who have been serviceable to us?",
            "11 Pilate answered them, Your God who delivered you from the hard bondage of the Egyptians, and brought you over the Red Sea as though it had been dry land, and fed you in the wilderness with manna and the flesh of quails, and brought water out of the rock, and gave you a law from heaven:",
            "12 Ye provoked him all ways, and desired for yourselves a molten calf, and worshipped it, and sacrificed to it, and said, These are Thy Gods, O Israel, which brought thee out of the land of Egypt",
            "13 On account of which your God was inclined to destroy you; but Moses interceded for you, and your God heard him, and forgave your iniquity.",
            "14 Afterwards ye were enraged against, and would have killed your prophets, Moses and Aaron, when they fled to the tabernacle, and ye were always murmuring against God and his prophets.",
            "15 And arising from his judgment seat, he would have gone out; but the Jews all cried out, We acknowledge Caesar to be king, and not Jesus.",
            "16 Whereas this person, as soon as he was born, the wise men came and offered gifts unto him; which when Herod heard, he was exceedingly troubled, and would have killed him.",
            "17 When his father knew this, he fled with him and his mother Mary into Egypt. Herod, when he heard he was born, would have slain him; and accordingly sent and slew all the children which were in Bethlehem, and in all the coasts thereof, from two years old and under.",
            "18 When Pilate heard this account, he was afraid; and commanding silence among the people, who made a noise, he said to Jesus, Art thou therefore a king?",
            "19 All the Jews replied to Pilate, he is the very person whom Herod sought to have slain.",
            "20 Then Pilate taking water, washed his hands before the people and said, I am innocent of the blood of this just person; look ye to it.",
            "21 The Jews answered and said, His blood be upon us and our children.",
            "22 Then Pilate commanded Jesus to be brought before him, and spake to him in the following words:",
            "23 Thy own nation hath charged thee as making thyself a king; wherefore I, Pilate, sentence thee to be whipped according to the laws of former governors; and that thou be first bound, then hanged upon a cross in that place where thou art now a prisoner; and also two criminals with thee, whose names are Dimas and Gestas.",
        ],
    }
    addChapterText(chapter);

    chapter = {
        id: "gon-chapter-6-en",
        title: "Chapter 6",
        subTitle: "Pilate dismayed by the turbulence of the Jews, who demand Barabbas to be released, and Christ to be crucified, Pilate warmly expostulates with them, washes his hands of Christ's blood, and sentences him to be whipped and crucified.",
        parent: "gospel-of-nicodemus-en",
        order: 7,
        visible: true,
        previousChapter: "gon-chapter-5-en",
        followingChapter: "gon-chapter-7-en",
        content: [
            "THEN Pilate having called together Nicodemus, and the fifteen men who said that Jesus was not born through fornication, said to them, What shall I do, seeing there is like to be a tumult among the people.",
            "They said unto him, We know not; let them look to it who raise the tumult.",
            "Pilate then called the multitude again, and said to them, Ye know that ye have a custom, that I should release to you one prisoner at the feast of the passover;",
            "I have a noted prisoner, a murderer, who is called Barabbas, and Jesus who is called Christ, in whom I find nothing that deserves death; which of them therefore have you a mind that I should release to you?",
            "They all cry out, and say, Release to us Barabbas.",
            "Pilate saith to them, What then shall I do with Jesus who, is called Christ?",
            "They all answer, Let him be crucified.",
            "Again they cry out and say to Pilate, You are not the friend of Caesar, if you release this man? 4 for he hath declared that he is the Son of God, and a king. But are you inclined that he should be king, and not Caesar?",
            "Then Pilate filled with anger said to them, Your nation hath always been seditious, and you are always against those who have been serviceable to you?",
            "The Jews replied, Who are those who have been serviceable to us?",
            "Pilate answered them, Your God who delivered you from the hard bondage of the Egyptians, and brought you over the Red Sea as though it had been dry land, and fed you in the wilderness with manna and the flesh of quails, and brought water out of the rock, and gave you a law from heaven:",
            "Ye provoked him all ways, and desired for yourselves a molten calf, and worshipped it, and sacrificed to it, and said, These are Thy Gods, O Israel, which brought thee out of the land of Egypt",
            "On account of which your God was inclined to destroy you; but Moses interceded for you, and your God heard him, and forgave your iniquity.",
            "Afterwards ye were enraged against, and would have killed your prophets, Moses and Aaron, when they fled to the tabernacle, and ye were always murmuring against God and his prophets.",
            "And arising from his judgment seat, he would have gone out; but the Jews all cried out, We acknowledge Caesar to be king, and not Jesus.",
            "Whereas this person, as soon as he was born, the wise men came and offered gifts unto him; which when Herod heard, he was exceedingly troubled, and would have killed him.",
            "When his father knew this, he fled with him and his mother Mary into Egypt. Herod, when he heard he was born, would have slain him; and accordingly sent and slew all the children which were in Bethlehem, and in all the coasts thereof, from two years old and under.",
            "When Pilate heard this account, he was afraid; and commanding silence among the people, who made a noise, he said to Jesus, Art thou therefore a king?",
            "All the Jews replied to Pilate, he is the very person whom Herod sought to have slain.",
            "Then Pilate taking water, washed his hands before the people and said, I am innocent of the blood of this just person; look ye to it.",
            "The Jews answered and said, His blood be upon us and our children.",
            "Then Pilate commanded Jesus to be brought before him, and spake to him in the following words:",
            "Thy own nation hath charged thee as making thyself a king; wherefore I, Pilate, sentence thee to be whipped according to the laws of former governors; and that thou be first bound, then hanged upon a cross in that place where thou art now a prisoner; and also two criminals with thee, whose names are Dimas and Gestas.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-7-en",
        title: "Chapter 7",
        subTitle: "Manner of Christ's crucifixion with the two thieves.",
        order: 8,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-7-en",
        title: "Chapter 7",
        subTitle: "Manner of Christ's crucifixion with the two thieves.",
        parent: "gospel-of-nicodemus-en",
        order: 8,
        visible: true,
        previousChapter: "gon-chapter-6-en",
        followingChapter: "gon-chapter-8-en",
        content: [
            "THEN Jesus went out of the hall, and the two thieves with him.",
            "2 And when they came to the place which is called Golgotha, 3 they stript him of his raiment, and girt him about with a linen cloth, and put a crown of thorns upon his head, and put a reed in his hand.",
            "3 And in like manner did they to the two thieves who were crucified with him, Dimas on his right hand and Gestas on his left.",
            "4 But Jesus said, My Father, forgive them; For they know not what they do.",
            "5 And they divided his garments, and upon his vesture they cast lots.",
            "6 The people in the mean time stood by, and the chief priests and elders of the Jews mocked him, saying, he saved others, let him now save himself if he can; if he be the son of God, let him now come down from the cross.",
            "7 The soldiers also mocked him, and taking vinegar and gall offered it to him to drink, and said to him, If thou art king of the Jews deliver thyself.",
            "8 Then Longinus, a certain soldier, taking a spear, pierced his side, and presently there came forth blood and water.",
            "9 And Pilate wrote the title upon the cross in Hebrew, Latin, and Greek letters, viz. This is the king of the Jews.",
            "10 But one of the two thieves who were crucified with Jesus, whose name was Gestas, said to Jesus, If thou art the Christ, deliver thyself and us.",
            "11 But the thief who was crucified on his right hand, whose name was Dimas, answering, rebuked him, and said, Dost not thou fear God, who art condemned to this punishment? We indeed receive rightly and justly the demerit of our actions; but this Jesus, what evil hath he done?",
            "12 After this groaning, he said to Jesus, Lord, remember me when thou comest into thy kingdom.",
            "13 Jesus answering, said to him, Verily I say unto thee, that this day thou shalt be with me in Paradise.",
        ],
    }
    addChapterText(chapter);
        chapter = {
        id: "gon-chapter-7-en",
        title: "Chapter 7",
        subTitle: "Manner of Christ's crucifixion with the two thieves.",
        parent: "gospel-of-nicodemus-en",
        order: 8,
        visible: true,
        previousChapter: "gon-chapter-6-en",
        followingChapter: "gon-chapter-8-en",
        content: [
            "THEN Jesus went out of the hall, and the two thieves with him.",
            "And when they came to the place which is called Golgotha, 3 they stript him of his raiment, and girt him about with a linen cloth, and put a crown of thorns upon his head, and put a reed in his hand.",
            "And in like manner did they to the two thieves who were crucified with him, Dimas on his right hand and Gestas on his left.",
            "But Jesus said, My Father, forgive them; For they know not what they do.",
            "And they divided his garments, and upon his vesture they cast lots.",
            "The people in the mean time stood by, and the chief priests and elders of the Jews mocked him, saying, he saved others, let him now save himself if he can; if he be the son of God, let him now come down from the cross.",
            "The soldiers also mocked him, and taking vinegar and gall offered it to him to drink, and said to him, If thou art king of the Jews deliver thyself.",
            "Then Longinus, a certain soldier, taking a spear, pierced his side, and presently there came forth blood and water.",
            "And Pilate wrote the title upon the cross in Hebrew, Latin, and Greek letters, viz. This is the king of the Jews.",
            "But one of the two thieves who were crucified with Jesus, whose name was Gestas, said to Jesus, If thou art the Christ, deliver thyself and us.",
            "But the thief who was crucified on his right hand, whose name was Dimas, answering, rebuked him, and said, Dost not thou fear God, who art condemned to this punishment? We indeed receive rightly and justly the demerit of our actions; but this Jesus, what evil hath he done?",
            "After this groaning, he said to Jesus, Lord, remember me when thou comest into thy kingdom.",
            "Jesus answering, said to him, Verily I say unto thee, that this day thou shalt be with me in Paradise.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-8-en",
        title: "Chapter 8",
        subTitle: "Miraculous appearance at his death. The Jews say the eclipse was natural. Joseph of Arimathæa embalms Christ's body and buries it.",
        order: 9,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-8-en",
        title: "Chapter 8",
        subTitle: "Miraculous appearance at his death. The Jews say the eclipse was natural. Joseph of Arimathæa embalms Christ's body and buries it.",
        parent: "gospel-of-nicodemus-en",
        order: 9,
        visible: true,
        previousChapter: "gon-chapter-7-en",
        followingChapter: "gon-chapter-9-en",
        content: [
            "AND it was about the sixth hour, and darkness was upon the face of the whole earth until the ninth hour.",
            "2 And while the sun was eclipsed, behold the vail of the temple was rent from the top to the bottom; and the rocks also were rent, and the graves opened, and many bodies of saints, which slept, arose.",
            "3 And about the ninth hour Jesus cried out with a loud voice, saying, Hely, Hely, lama zabacthani? which being interpreted, is, My God, My God, why hast thou forsaken me?",
            "4 And after these things, Jesus said, Father, into thy hands I commend my spirit; and having said this, he gave up the ghost.",
            "5 But when the centurion saw that Jesus thus crying out gave up the ghost, he glorified God, and said, Of a truth this was a just man.",
            "6 And all the people who stood by, were exceedingly troubled at the sight; and reflecting upon what had passed, smote upon their breasts, and then returned to the city of Jerusalem.",
            "7 The centurion went to the governor, and related to him all that had passed;",
            "8 And when he had heard all these things, he was exceeding sorrowful;",
            "9 And calling the Jews together, said to them, Have ye seen the miracle of the sun's eclipse, and the other things which came to pass, while Jesus was dying?",
            "10 Which when the Jews heard, they answered to the governor, The eclipse of the sun happened according to its usual custom.",
            "11 But all those who were the acquaintance of Christ, stood at a distance, as did the women who had followed Jesus from Galilee, observing all these things.",
            "12 And behold a certain man of Arimathaea, named Joseph, who also was a disciple of Jesus, but not openly so, for fear of the Jews, came to the governor, and entreated the governor that he would give him leave to take away the body of Jesus from the cross.",
            "13 And the governor gave him leave.",
            "14 And Nicodemus came, bringing with him a mixture of myrrh and aloes about a hundred pound weight; and they took down Jesus from the cross with tears, and bound him with linen cloths with spices, according to the custom of burying among the Jews,",
            "15 And placed him in a new tomb, which Joseph had built, and caused to be cut out of a rock, in which never any man had been put; and they rolled a great stone to the door of the sepulchre.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "gon-chapter-8-en",
        title: "Chapter 8",
        subTitle: "",
        parent: "gospel-of-nicodemu-en",
        order: 9,
        visible: true,
        previousChapter: "gon-chapter-7-en",
        followingChapter: "gon-chapter-9-en",
        content: [
            "AND it was about the sixth hour, and darkness was upon the face of the whole earth until the ninth hour.",
            "And while the sun was eclipsed, behold the vail of the temple was rent from the top to the bottom; and the rocks also were rent, and the graves opened, and many bodies of saints, which slept, arose.",
            "And about the ninth hour Jesus cried out with a loud voice, saying, Hely, Hely, lama zabacthani? which being interpreted, is, My God, My God, why hast thou forsaken me?",
            "And after these things, Jesus said, Father, into thy hands I commend my spirit; and having said this, he gave up the ghost.",
            "But when the centurion saw that Jesus thus crying out gave up the ghost, he glorified God, and said, Of a truth this was a just man.",
            "And all the people who stood by, were exceedingly troubled at the sight; and reflecting upon what had passed, smote upon their breasts, and then returned to the city of Jerusalem.",
            "The centurion went to the governor, and related to him all that had passed;",
            "And when he had heard all these things, he was exceeding sorrowful;",
            "And calling the Jews together, said to them, Have ye seen the miracle of the sun's eclipse, and the other things which came to pass, while Jesus was dying?",
            "Which when the Jews heard, they answered to the governor, The eclipse of the sun happened according to its usual custom.",
            "But all those who were the acquaintance of Christ, stood at a distance, as did the women who had followed Jesus from Galilee, observing all these things.",
            "And behold a certain man of Arimathaea, named Joseph, who also was a disciple of Jesus, but not openly so, for fear of the Jews, came to the governor, and entreated the governor that he would give him leave to take away the body of Jesus from the cross.",
            "And the governor gave him leave.",
            "And Nicodemus came, bringing with him a mixture of myrrh and aloes about a hundred pound weight; and they took down Jesus from the cross with tears, and bound him with linen cloths with spices, according to the custom of burying among the Jews,",
            "And placed him in a new tomb, which Joseph had built, and caused to be cut out of a rock, in which never any man had been put; and they rolled a great stone to the door of the sepulchre.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The Jews angry with Nicodemus; and with Joseph of Arimathaea, whom they imprison.",
        order: 10,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The Jews angry with Nicodemus; and with Joseph of Arimathaea, whom they imprison.",
        parent: "gospel-of-nicodemus-en",
        order: 10,
        visible: true,
        previousChapter: "gon-chapter-8-en",
        followingChapter: "gon-chapter-10-en",
        content: [
            "WHEN the unjust Jews heard that Joseph had begged and buried the body of Jesus, they sought after Nicodemus; and those fifteen men who had testified before the Governor, that Jesus was not born through fornication, and other good persons who had shewn any good actions towards him.",
            "2 But when they all concealed themselves through fear of the Jews Nicodemus alone shewed himself to them, and said, How can such persons as these enter into the synagogue?",
            "3 The Jews answered him, But how durst thou enter into the synagogue who wast a confederate with Christ? Let thy lot be along with him in the other world.",
            "4 Nicodemus answered, Amen; so may it be, that I may have my lot with him in his kingdom.",
            "5 In like manner Joseph, when he came to the Jews, said to them Why are ye angry with me for desiring the body of Jesus of Pilate? Behold, I have put him in my tomb, and wrapped him up in clean linen, and put a stone at the door of the sepulchre:",
            "6 I have acted rightly towards him; but ye have acted unjustly aghast that just person, in crucifying him, giving him vinegar to drink, crowning him with thorns, tearing his body with whips, and prayed down the guilt of his blood upon you.",
            "7 The Jews at the hearing of this were disquieted, and troubled; and they seized Joseph, and commanded him to be put in custody before the sabbath, and kept there till the sabbath was over.",
            "8 And they said to him, Make confession; for at this time it is not lawful to do thee any harm, till the first day of the week come. But we know that thou wilt not be thought worthy of a burial; but we will give thy flesh to the birds of the air, and the beasts of the earth.",
            "9 Joseph answered, That speech is like the speech of proud Goliath, who reproached the living God in speaking against David. But ye scribes and doctors know that God saith by the prophet, Vengeance is mine, and I will repay to you 1 evil equal to that which ye have threatened to me.",
            "10 The God whom you have hanged upon the cross, is able to deliver me out of your hands. All your wickedness will return upon you.",
            "11 For the governor, when he washed his hands, said, I am clear from the blood of this just person. But ye answered and cried out, His blood be upon us and our children. According as ye have said, may ye perish for ever.",
            "12 The elders of the Jews hearing these words, were exceedingly enraged; and seizing Joseph, they put him into a chamber where there was no window; they fastened the door, and put a seal upon the lock;",
            "13 And Annas and Caiaphas placed a guard upon it, and took counsel with the priests and Levites, that they should all meet after the sabbath, and they contrived to what death they should put Joseph.",
            "14 When they had done this, the rulers, Annas and Caiaphas, ordered Joseph to be brought forth.",
            "¶ In this place there is a portion of the Gospel lost or omitted, which cannot be supplied.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "gon-chapter-9-en",
        title: "Chapter 9",
        subTitle: "The Jews angry with Nicodemus; and with Joseph of Arimathaea, whom they imprison.",
        parent: "gospel-of-nicodemus-en",
        order: 10,
        visible: true,
        previousChapter: "gon-chapter-8-en",
        followingChapter: "gon-chapter-10-en",
        content: [
            "WHEN the unjust Jews heard that Joseph had begged and buried the body of Jesus, they sought after Nicodemus; and those fifteen men who had testified before the Governor, that Jesus was not born through fornication, and other good persons who had shewn any good actions towards him.",
            "But when they all concealed themselves through fear of the Jews Nicodemus alone shewed himself to them, and said, How can such persons as these enter into the synagogue?",
            "The Jews answered him, But how durst thou enter into the synagogue who wast a confederate with Christ? Let thy lot be along with him in the other world.",
            "Nicodemus answered, Amen; so may it be, that I may have my lot with him in his kingdom.",
            "In like manner Joseph, when he came to the Jews, said to them Why are ye angry with me for desiring the body of Jesus of Pilate? Behold, I have put him in my tomb, and wrapped him up in clean linen, and put a stone at the door of the sepulchre:",
            "I have acted rightly towards him; but ye have acted unjustly aghast that just person, in crucifying him, giving him vinegar to drink, crowning him with thorns, tearing his body with whips, and prayed down the guilt of his blood upon you.",
            "The Jews at the hearing of this were disquieted, and troubled; and they seized Joseph, and commanded him to be put in custody before the sabbath, and kept there till the sabbath was over.",
            "And they said to him, Make confession; for at this time it is not lawful to do thee any harm, till the first day of the week come. But we know that thou wilt not be thought worthy of a burial; but we will give thy flesh to the birds of the air, and the beasts of the earth.",
            "Joseph answered, That speech is like the speech of proud Goliath, who reproached the living God in speaking against David. But ye scribes and doctors know that God saith by the prophet, Vengeance is mine, and I will repay to you 1 evil equal to that which ye have threatened to me.",
            "The God whom you have hanged upon the cross, is able to deliver me out of your hands. All your wickedness will return upon you.",
            "For the governor, when he washed his hands, said, I am clear from the blood of this just person. But ye answered and cried out, His blood be upon us and our children. According as ye have said, may ye perish for ever.",
            "The elders of the Jews hearing these words, were exceedingly enraged; and seizing Joseph, they put him into a chamber where there was no window; they fastened the door, and put a seal upon the lock;",
            "And Annas and Caiaphas placed a guard upon it, and took counsel with the priests and Levites, that they should all meet after the sabbath, and they contrived to what death they should put Joseph.",
            "When they had done this, the rulers, Annas and Caiaphas, ordered Joseph to be brought forth.",
            "In this place there is a portion of the Gospel lost or omitted, which cannot be supplied.",
        ],
    }
    addChapterAudio(chapter);

/*
    chapter = {
        id: "gon-chapter-10-en",
        title: "Chapter 10",
        subTitle: "",
        order: 11,
        parent: "gospel-of-nicodemus-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "gon-chapter-10-en",
        title: "Chapter 10",
        subTitle: "",
        parent: "gospel-of-nicodemus-en",
        visible: true,
        previousChapter: "gon-chapter-9-en",
        followingChapter: "gon-chapter-11-en",
        content: [
            "",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);
/*
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
    res.send("Nicodemus Added");
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

    chapter = {
        id: "gon-chapter-2-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-2-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-2-en",
    }
    removeChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-3-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-3-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-3-en",
    }
    removeChapterAudio(chapter);


    chapter = {
        id: "gon-chapter-4-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-4-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-4-en",
    }
    removeChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-5-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-5-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-5-en",
    }
    removeChapterAudio(chapter);

    chapter = {
        id: "gon-chapter-6-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-6-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-6-en",
    }
    chapter = {
        id: "gon-chapter-7-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-7-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-7-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-8-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-8-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-8-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-9-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-9-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-9-en",
    }
    removeChapterAudio(chapter);

    res.send("Nicodemus Removed");
});

module.exports = nicodemus;