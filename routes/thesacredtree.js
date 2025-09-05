import express from 'express';
export const theSacredTree = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';



theSacredTree.get("/addTheSacredTree", function (req, res) {
   
    let book = {};
    let chapter = {};
/*
    book = {
        id: "the-sacred-tree-en",
        title: "The Sacred Tree",
        subTitle: "Reflections on Native American Spirituality",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/jewish-records/nicodemus-thumbnail.jpg",
        thumbnailTitle: "Sacred Tree",
        authors: ["Phil Lane Jr.",
                    "Lee Brown",
                    "Judie Bopp",
                    "Michael Bopp",
                    "and Elders"],
        isParent: true,
        hasChildBooks: false,
        order: 100,
        parent: "",
        visible: true,
        language: "en",
        price: "0.00",
        inDevelopment: false,
        category: "Indigenous Teachings",
        discountCode: "pure in heart",
        discountPercent: 100,
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "tst-opening-en",
        title: "Opening",
        subTitle: "",
        parent: "the-sacred-tree-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "tst-opening-en",
        title: "Opening",
        subTitle: "",
        parent: "the-sacred-tree-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "tst-preface-en",
        content: [
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-1.png]]",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-2.png]]",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-3.png]]",
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "tst-chapter-1-en",
        title: "The Story of the Sacred Tree",
        subTitle: "",
        parent: "the-sacred-tree-en",
        order: 2,
        visible: true,
        previousChapter: "tst-preface-en",
        followingChapter: "tst-chapter-1-en",
        content: [
            "Founder of the Jane Goodall Institute - UN Messenger of Peace",
            "Four Worlds International is to be congratulated for its wisdom and foresight in publishing this new edition of The Sacred Tree, and I feel very honored to be asked to write the preface. For several years now I have been working with Indigenous peoples in different parts of the world. Their ancient philosophy of respect for Mother Earth, respect for all life forms on the planet, is my philosophy too. I grew up in England, and I used to spend a lot of time up in a very special tree. He was known, simply, as Beech — and I am looking out at his spreading branches as I write. For hours I stayed up there, feeling close to the birds and clouds and wind. I climbed up with my homework, with a book, or simply with my thoughts and dreams. There I learned my respect and love for nature. There I dreamed that one day I would go to Africa.",
            "Years later, when my dream was a reality, the forests of Gombe national park, where I was studying chimpanzees, became my home and I got very close to the heart beat of nature. I became part of the natural world, one with the stars, the winds, the rain, and the tumbling streams. There I learned my kinship with the rustling, fluttering, scampering, flying, running of the forest creatures and learned to recognize the wild and eerie pant hoots with which the chimpanzees greet the dawn and say goodnight at the end of a good day.",
            "Deep in one of the valleys I discovered a very spiritual place — a waterfall drops down from a rocky ledge 80 feet above onto the rocky river bed, and you can hear the roar of its falling from afar. I now know this place was sacred to the Indigenous people who lived there in two or three years to perform their ceremonies before the area became a national park. A few of them are still alive, and I have invited them to come back when the spirit moves them.",
            "It is in this magical place that one can watch the chimpanzees perform their awe-inspiring “waterfall dance”. I met a Shaman in South Africa who explained that the word chimpanzee came from the Aboriginal people of Angola and means “The Ones Who Went Before”. Perhaps they danced there thousands of years before human beings arrived in the forests of Gombe.",
            "Then, for millions of years, as our ancestors began to spread across Mother Earth, as they gradually learned to walk upright, to use tools, to hunt for animals, to use their skins to keep themselves warm, to harness fire and cook food, they lived in harmony with nature. The people of the First Nations learned to respect Mother Earth and the riches she provided so generously. They did not greedily take from the land more than they needed. Alas, the selfish wasteful ways of modern humans is destroying Mother Earth. Careless use of water has lowered the water tables, unlimited burning of fossil fuels is contaminating the air, burning up the ozone layer, contributing to the gradual but relentless warming up of our temperatures around the globe. Thoughtless, mindless use of pesticides, herbicides, fungicides and chemical fertilizers is poisoning Mother Earth, destroying life forms that took millions of years to appear on our planet.",
            "Among the Indigenous people on Earth today there are spiritual leaders, medicine men and women, tribal chiefs and elders who have, despite centuries of bitter persecution and genocide have held true to their heritage and traditions, have kept alive their sacred knowledge of the interconnectedness of life. They understand that, if we do not stop raping Mother Earth for short-term gain, life as we know it today will no longer be possible. Among these people are some whom I am honored to count as my Spiritual Brothers and Sisters, fellow travelers along the path of life. Our hearts beat to the same tune. I hear, as they do, the dying out of the violated forests and prairies and wetlands, the mined, shattered rocks of the sacred mountains, the dying, contaminated streams and rivers, the choking air. I feel the anguish of the animals, the four-footed, winged and finned Brothers and Sisters. Many species are struggling to survive, many have already gone — forever.",
            "The Sacred Tree will help young and old alike to make better choices as they move through life, choices that will help to restore our planet before it is too late. My own Roots & Shoots movement, the environmental and humanitarian program of the Jane Goodall Institute that aims to empower young people to take informed and compassionate action to make our world a better place for all living things, is a natural partner for Four Worlds International in this venture. We have so much, in our modern western world, to learn from the Indigenous wisdom that is embedded in this delightful book.",
            "About Dr. Jane Goodafl’s Roots & Shoots The Roots & Shoots program, founded in 1991 by Dr. Jane and sixteen Tanzanian students, is the Jane Goodall Institutes international environmental and humanitarian program for young people. Its mission is to foster respect and compassion for all living things, to promote understanding of all cultures and beliefs and to inspire each individual to take action to make the world a better place for the environment, animals, and the human community. Youth in more than 70 countries participate in locally based projects, which focus on knowledge acquisition, active learning, global networking, and community services. Four World’s International and the Jane Goodall Institute’s Roots & Shoots program have joined forces to provide holistic, environmentally related, value’s based curriculum for young people. The first two Four Worlds’ - Roots & Shoots’ curriculum projects are the Sacred Tree and Walking With Grandfather. We hope that those who have the opportunity to read the Sacred Tree will join the thousands ofyouth worldwide who are committed to making our world a better place for the environment, animals and the human community.",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-4.png]]",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-5.png]]",
            "The Four Worlds Development Project is the result of many people’s efforts and wisdom. Some were directly involved, others inspired us through their work in education and alcohol and drug abuse prevention.",
            "Direction for this project was set at a conference held in Lethbridge, Alberta in December, 1982. Participants at the conference were Native elders, spiritual leaders and professionals of various Native communities in North America. Their contributions were framed by thçir deep commitment to Native people and their own, often hard won, experience. To each of them we offer our deepest  respect and appreciation.",
            "Harold Belmont",
            "Germaine Kinunwa",
            "Mark Belmont",
            "Phil Lane, Sr.",
            "Andy Black Water",
            "John Many Chiefs",
            "Ed Calf Robe",
            "Sandy Many Chiefs",
            "Steve Courchene",
            "Jon Metric",
            "Ricki Devion",
            "Allan Murray",
            "Tyrone Eagle",
            "Bear Wilson Okeymaw",
            "Perry Fontaine",
            "Lee Piper",
            "Leonard George",
            "Doreen Rabit",
            "Cindy Ginnish",
            "Chuck Ross",
            "George Good Striker",
            "Jerry Saddle Back",
            "Rufus Good Striker",
            "Herman Saulis",
            "Woodrow Good Striker",
            "Frank Sovka",
            "Ed Heavy Shields",
            "Eric Tootoosis",
            "Peter Heffernan",
            "Mike White",
            "Lionel Kinunwa", 
            "Rose Yellow Feet",
            "Editorial Note:",
            "In English it is impossible to refer to a person without using a pronoun that indicates gender or sex (e.g. he or she, him or her, his or hers). Since there is no special word to refer to a person whose gender is not known, most writers have chosen to use the masculine form in these situations.",
            "This custom of using the masculine form when referring to a person who is not known to be a female, has caused a conspicuous absence of reference to women in English writing.",
            "Thus all of the great ideas and discoveries discussed in English literature are expressed in masculine terms and the reader constantly visualizes males, rather than females, as active participators in the world. Our society’s tendency to devalue the role and contributions of women is only augmented by this lack of picturing women in an active, creative role.",
            "The Four Worlds Development Project has chosen to alternate the use of feminine and masculine pronouns whenever the reference is unspecific. This choice of usage is a deliberate one to avoid the awkwardness of the compound form (he/she; him or her) while at the same time acknowledging the harmful consequences of bowing to a convention that persistently forces its audience to visualize the world as dominated by men and operating on ideas expressed in masculine terms.",
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    
    chapter = {
        id: "tst-chapter-1-en",
        title: "Chapter 1",
        subTitle: "The Story of the Sacred Tree",
        order:3,
        parent: "the-sacred-tree-en",
        visible: true
    }
    addChapter(chapter);
    
    
    chapter = {
        id: "tst-chapter-1-en",
        title: "Chapter 1",
        subTitle: "",
        parent: "the-sacred-tree-en",
        order: 3,
        visible: true,
        previousChapter: "tst-forward-en",
        followingChapter: "tst-chapter-2-en",
        content: [
            "\"Then I was standing on the highest mountain of them all, and round about beneath me was the whole hoop of the world. And while / stood there I saw more than I can tell and I understood more than I saw; for I was seeing in a sacred manner the shapes of all things in the spirit, and the shape of all shapes as they must live together like one being. And I saw that the sacred hoop of my people was one of many hoops that made one circle, wide as daylight and as starlight, and in the center grew one mighty flowering tree to shelter all the children of one mother and’one father. And I saw that it was holy.\”",
            "Black Elk - (Black Elk Speaks, as told through John G. Neihardt, University of Nebraska Press, Lincoln, 1961)",
            "I. THE STORY OF THE SACRED TREE",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-6.png]]",
            "For all the people of the earth, the Creator has planted a Sacred Tree under which they may gather, and there find healing, power, wisdom and security. The roots of this tree spread deep into the body of MotherEarth. Its branches reach upward like hands praying to Father Sky. The fruits of this tree are the good things the Creator has given to the people: teachings that show the path to love, compassion, generosity, patience, wisdom, justice, courage, respect, humility and many other wonderful gifts.",
            "The ancient ones taught us that the life of the Tree is the life of the people. If the people wander far away from the protective shadow of the Tree, if they forget to seek the nourishment of its fruit, or if they should turn against the Tree and attempt to destroy it, great sorrow will fall upon the people. Many will become sick at heart. The people will lose their power. They will cease to dream dreams and see visions. They will begin to quarrel among themselves over worthless trifles. They will become unable to tell the truth and to deal with each other honestly. They will forget how to survive in their own land. Their lives will become filled with anger and gloom. Little by little they will poison themselves and all they touch.",
            "It was foretold that these things would come to pass, but that the Tree would never die. And as long as the Tree lives, the people live. It was also foretold that the day would come when the people would awaken, as if from a long, drugged sleep; that they would begin, timidly at first but then with great urgency, to search again for the Sacred Tree.",
            "The knowledge of its whereabouts, and of the fruits that adorn its branches have always been care fully guarded and preserved within the minds and hearts of our wise elders and leaders. These humble, loving and dedicated souls will guide anyone who is honestly and sincerely seeking along the path leading to the protecting shadow of the Sacred Tree.",
        ],
    }
    addChapterText(chapter);

    chapter = {
        id: "tst-chapter-1-en",
        title: "Chapter 1",
        subTitle: "",
        parent: "the-sacred-tree-en",
        order: 3,
        visible: true,
        previousChapter: "tst-forward-en",
        followingChapter: "tst-chapter-2-en",
        content: [
            "\"Then I was standing on the highest mountain of them all, and round about beneath me was the whole hoop of the world. And while / stood there I saw more than I can tell and I understood more than I saw; for I was seeing in a sacred manner the shapes of all things in the spirit, and the shape of all shapes as they must live together like one being. And I saw that the sacred hoop of my people was one of many hoops that made one circle, wide as daylight and as starlight, and in the center grew one mighty flowering tree to shelter all the children of one mother and’one father. And I saw that it was holy.\”",
            "Black Elk",
            "I. THE STORY OF THE SACRED TREE",
            "For all the people of the earth, the Creator has planted a Sacred Tree under which they may gather, and there find healing, power, wisdom and security. The roots of this tree spread deep into the body of MotherEarth. Its branches reach upward like hands praying to Father Sky. The fruits of this tree are the good things the Creator has given to the people: teachings that show the path to love, compassion, generosity, patience, wisdom, justice, courage, respect, humility and many other wonderful gifts.",
            "The ancient ones taught us that the life of the Tree is the life of the people. If the people wander far away from the protective shadow of the Tree, if they forget to seek the nourishment of its fruit, or if they should turn against the Tree and attempt to destroy it, great sorrow will fall upon the people. Many will become sick at heart. The people will lose their power. They will cease to dream dreams and see visions. They will begin to quarrel among themselves over worthless trifles. They will become unable to tell the truth and to deal with each other honestly. They will forget how to survive in their own land. Their lives will become filled with anger and gloom. Little by little they will poison themselves and all they touch.",
            "It was foretold that these things would come to pass, but that the Tree would never die. And as long as the Tree lives, the people live. It was also foretold that the day would come when the people would awaken, as if from a long, drugged sleep; that they would begin, timidly at first but then with great urgency, to search again for the Sacred Tree.",
            "The knowledge of its whereabouts, and of the fruits that adorn its branches have always been care fully guarded and preserved within the minds and hearts of our wise elders and leaders. These humble, loving and dedicated souls will guide anyone who is honestly and sincerely seeking along the path leading to the protecting shadow of the Sacred Tree.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "tst-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The Medicine Wheel and Important Concepts",
        order:4,
        parent: "the-sacred-tree-en",
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "tst-chapter-2-en",
        title: "Chapter 2",
        subTitle: "The Medicine Wheel and Important Concepts",
        parent: "the-sacred-tree-en",
        order: 4,
        visible: true,
        previousChapter: "tst-chapter-1-en",
        followingChapter: "tst-chapter-3-en",
        content: [
            "II. IMPORTANT CONCEPTS",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-7.png]]",
            "**Symbols**",
            "Symbols express and represent meaning. Meaning helps provide purpose and understanding in the lives of human beings. Indeed to live without symbols is to experience existence far short of its full meaning. Ways of expressing and representing meaning include the symbol systems of mathematics, spoken and written language and the arts.",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-8.png]]",
            "**The Medicine Wheel**",
            "This is an ancient symbol used by almost all the Native people of North and South America. There are many different ways that this basic concept is expressed: the four grandfathers, the four winds, the four cardinal directions, and many other relationships that can be expressed in sets of four. Just like a mirror can be used to see things not normally visible (e.g. behind us or around a corner), the medicine wheel can be used to help us see or understand things we can’t quite see or understand because they are ideas and not physical objects",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-9.png]]",
            "**The Medicine Wheel**",
            "The medicine wheel teaches us that the four symbolic races are all part of the same human family. All are brothers and sisters living on the same Mother Earth.",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-10.png]]",
            "**The Medicine Wheel**",
            "The medicine wheel teaches us that the four elements, each so distinctive and powerful, are all part of the physical world. All must be respected equally for their gift of life.",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-11.png]]",
            "**The Medicine Wheel**",
            "The medicine wheel teaches us that we have four aspects to our nature: the physical, the mental, the emotional, and the spiritual. Each of these aspects must be equally developed in a healthy, well-balanced individual through the development and use of volition (i.e. will).",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-12.png]]",
            "**Potential**",
            "Potentially the seed has a mighty tree within it. The four aspects of our nature (the physical, the mental, the emotional and the spiritual) are like seeds. They have the potential to grow into powerful gifts.",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-13.png]]",
            "**Volition**",
            "We can use our volition (i.e. our will) to help us develop the four aspects of our nature. Volition is the force that helps us make decisions and then act to carry out those decisions. We can learn to exercise our volition by carring out each of its five steps:",
            "1. attention (concentration)",
            "2. goal setting",
            "3. initiating the action",
            "4. perseverance",
            "5. completing the action",
            "Since volition is a primary force in developing all of our human potentialities, it is placed at the center of the medicine wheel.",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-14.png]]",
            "**Vision**",
            "We gain a vision of what our potential is from our elders and from the Teachings of the Sacred Tree. By trying to live up to that vision and by trying to live like the people we admire, we grow and develop. Our vision of what we can become is like a strong magnet pulling us toward it.",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-15.png]]",
            "**Growth and Change**",
            "All human beings have the capacity to grow and change. The four aspects of our nature (the physical, the mental, the emotional, and the spiritual) can be developed when we have a vision of what is possible and when we use our volition to change our actions and our attitudes so that they will be closer to our vision of a happy, healthy human being.",,
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-16.png]]",
            "**Identity**",
            "A person’s identity consists of:",
            "Body awareness: how you experience your physical presence",
            "Self-concept: what you think about yourself and your potential",
            "Self-esteem: how you feel about yourself and your ability to grow and change",
            "Self-determination: your ability to use your volition (will) to actualize your physical, mental, emotional and spiritual potentialities",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-17.png]]",
            "**Values**",
            "Values are the way human beings pattern and use their energy. If there is not a balance between our values concerning ourselves and our values concerning others, we cannot continue to develop our true potential as human beings. Indeed, if there is an imbalance, individuals, and whole communities suffer and even die.",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-18.png]]",
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "tst-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Symbolic Teachings of the Sacred Tree",
        order: 5,
        parent: "the-sacred-tree-en",
        visible: true
    }
    addChapter(chapter);
    */

    chapter = {
        id: "tst-chapter-3-en",
        title: "Chapter 3",
        subTitle: "The Symbolic Teachings of the Sacred Tree",
        parent: "the-sacred-tree-en",
        order: 5,
        visible: true,
        previousChapter: "tst-chapter-2-en",
        followingChapter: "tst-chapter-4-en",
        content: [
            "**Introduction**",
            "Symbols such as the Sacred Tree express and represent meaning. Meaning helps to provide purpose and understanding in the lives of human beings. Symbols can be found on the walls of the first caves of human existence and have guided us to the far reaches of space in our attempts to understand life’s meaning. Through the experience of human consciousness, symbols are eternally giving birth to new understandings of the essence of life as it emerges, ever elusive, out of the unknown mist of creation. Symbols thus create an ever increasing awareness of the ongoing flow of life and give meaning to each sunrise and more meaning to each sunset.",
            "Meaning is important for the health, well-being and wholeness of individuals and communities. The presence of symbols in a community, as well as the living out of a belief in these symbols, is a measurement of the health and energies present in the community. Indeed, to live without symbols is to experience existence far short of our unlimited capacity as human beings. Thus every rebirth of the life and purpose of a people is accompanied by the revitalization of that people’s symbols.",
            "**The Symbol of the Sacred Tree**",
            "The Sacred Tree as a symbol of life-giving meaning is of vital importance to the indigenous peoples of the earth. For countless generations it has provided meaning and inspiration for many tribes and nations. The Sacred Tree is a symbol around which lives, religions, beliefs and nations have been organized. It is a symbol of profound depth, capable of providing enough meaning for a lifetime of reflection.",
            "The Sacred Tree represents life, cycles of time, the earth, and the universe. The meanings of the Sacred Tree reflect the teachings of the medicine wheel. The center of this medicine wheel is the symbolic center of creation and of the tribe. This meaning is reflected in a song which is sung on behalf of the Sacred Tree chosen for the sun dance.",
            "[[poem:I am standing|In a sacred way|At the earth’s center|Beheld by the people,|Seeing the tribe|Gathered around me. (Lamedeer)]]",
            "(Seeker of Visions, by John Fire Lamedeer and Richard Eros, Simon and Schuster, New York, 1972, p. 205.)",
            "**The Four Great Meanings of the Sacred Tree**",
            "The meanings of the Sacred Tree may be organized into four major categories. These categories may be easily viewed as movements in the cycle of human development from our birth toward our unity with the wholeness of creation. The four great meanings of the Sacred Tree are:",
            "[[image:https://storage.googleapis.com/sacred-records/books/the-sacred-tree/the-sacred-tree-19.png]]", 
            "We will now begin our journey toward a better understanding of the four great meanings of the medicine wheel of the Sacred Tree.",
        ],
    }
    addChapterText(chapter);
    addChapterAudio(chapter);
/*
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
*/
    res.send("The Sacred Tree Added");
})

theSacredTree.get("/removeTheSacredTree", function (req, res) {
    /*
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
    chapter = {
        id: "gon-chapter-10-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-10-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-10-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-11-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-11-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-11-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-12-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-12-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-12-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-13-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-13-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-13-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-14-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-14-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-14-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-15-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-15-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-15-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-16-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-16-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-16-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-17-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-17-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-17-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-18-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-18-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-18-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-19-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-19-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-19-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-20-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-20-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-20-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-21-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-21-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-21-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "gon-chapter-22-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "gon-chapter-22-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "gon-chapter-22-en",
    }
    removeChapterAudio(chapter);
*/
    res.send("Nicodemus Removed");
});

