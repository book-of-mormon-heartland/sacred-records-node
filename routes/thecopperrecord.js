import express from 'express';
export const copper = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';

copper.get("/addCopper", function (req, res) {
    let book = {};
    book = {
        id: "miskwaabik-en",
        title: "Miskwaabik Ozhibii'iwe",
        subTitle: "The Copper Records",
        image: "https://storage.googleapis.com/sacred-records/books/miskwaabik/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/the-copper-record-170x213.jpg",
        thumbnailTitle: "Miskwaabik Ozhibii'iwe",
        Description: "Translated by the Annishinabe Record Keepers.",
        priceText: "$40.00",
        price: 40,
        isParent: true,
        hasChildBooks: true,
        order: 1,
        parent: "",
        visible: true,
        language: "en",
    }
    //removeBook(book);
    addBook(book);
/*
    book = {
        id: "miskwaabik-teaching-one-en",
        title: "Teaching One",
        subTitle: "The Garden and the Panther",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/teaching-one-thumbnail.jpg",
        thumbnailTitle: "Teaching One",
        isParent: false,
        hasChildBooks: false,
        order: 1,
        parent: "miskwaabik-en",
        visible: true,
        language: "en",
    }
    addBook(book);




    chapter = {
        id: "mto-intro-en",
        title: "Introduction",
        subTitle: "Birch Bark Scrolls",
        parent: "miskwaabik-teaching-one-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-intro-en",
        title: "Introduction",
        subTitle: "Birch Bark Scrolls",
        parent: "miskwaabik-teaching-one-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "mto-men-are-friends-en",
        content: [
            "The Birch Bark Scrolls are a vital component of the cultural heritage of the Ojibwe people, a Native American group primarily residing in the Great Lakes region of the United States and Canada. These scrolls, crafted from the bark of birch trees, serve as a medium for documenting significant cultural, historical, and spiritual information.",
            "Key Features of Birch Bark Scrolls",
            "1. Recording System",
            "The scrolls employ a system of pictographs and symbols to express complex ideas, stories, and teachings. These symbols are often used alongside oral traditions to preserve and transmit knowledge across generations.",
            "2. Cultural Significance",
            "The scrolls encompass a wide array of information, including religious teachings, genealogies, maps, and historical events. They are considered sacred and are utilized in various ceremonies and rituals.",
            "3. Midewiwin Society",
            "Many scrolls are linked to the Midewiwin, or the Grand Medicine Society, a spiritual society within the Ojibwe culture. The scrolls function as instructional guides for the society's teachings and practices.",
            "4. Preservation of Knowledge",
            "Through these scrolls, the Ojibwe people have managed to preserve their language, customs, and beliefs, particularly in the face of external pressures and cultural transformations.",
            "5. Craftsmanship",
            "Creating a birch bark scroll requires expertise and knowledge. The bark must be meticulously harvested and prepared, and the symbols must be inscribed with precision. This process is often accompanied by rituals to ensure the scroll's spiritual integrity.",
            "6. Translation Efforts",
            "In translating scrolls, especially these which reference transcription onto birch bark paper from a more ancient historical record originally written on copper or red metal, every effort has been made to convey the meanings as accurately as possible.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-intro-en",
        title: "Introduction",
        subTitle: "Birch Bark Scrolls",
        parent: "miskwaabik-teaching-one-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "mto-men-are-friends-en",
        content: [
            "Birch Bark Scrolls",
            "The Birch Bark Scrolls are a vital component of the cultural heritage of the Ojibwe people, a Native American group primarily residing in the Great Lakes region of the United States and Canada. These scrolls, crafted from the bark of birch trees, serve as a medium for documenting significant cultural, historical, and spiritual information.",
            "Key Features of Birch Bark Scrolls",
            "1. Recording System",
            "The scrolls employ a system of pictographs and symbols to express complex ideas, stories, and teachings. These symbols are often used alongside oral traditions to preserve and transmit knowledge across generations.",
            "2. Cultural Significance",
            "The scrolls encompass a wide array of information, including religious teachings, genealogies, maps, and historical events. They are considered sacred and are utilized in various ceremonies and rituals.",
            "3. Midewiwin Society",
            "Many scrolls are linked to the Midewiwin, or the Grand Medicine Society, a spiritual society within the Ojibwe culture. The scrolls function as instructional guides for the society's teachings and practices.",
            "4. Preservation of Knowledge",
            "Through these scrolls, the Ojibwe people have managed to preserve their language, customs, and beliefs, particularly in the face of external pressures and cultural transformations.",
            "5. Craftsmanship",
            "Creating a birch bark scroll requires expertise and knowledge. The bark must be meticulously harvested and prepared, and the symbols must be inscribed with precision. This process is often accompanied by rituals to ensure the scroll's spiritual integrity.",
            "6. Translation Efforts",
            "In translating scrolls, especially these which reference transcription onto birch bark paper from a more ancient historical record originally written on copper or red metal, every effort has been made to convey the meanings as accurately as possible.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "mto-men-are-friends-en",
        title: "Ishpiming a'aw Ininiwag wiijiiwaaganag",
        subTitle: "Men are Friends in the Heavens",
        order: 2,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "mto-men-are-friends-en",
        title: "Ishpiming a'aw Ininiwag wiijiiwaaganag",
        subTitle: "Men are Friends in the Heavens",
        parent: "miskwaabik-teaching-one-en",
        order: 2,
        visible: true,
        previousChapter: "mto-intro-en",
        followingChapter: "mto-chapter-one-en",
        content: [
            "1 I, Gah-Onabid, do this as guardian of the records.",
            "2 Behold, the Great Peacemaker has journeyed to the Sky World, his path on this earth complete. Through his Great Spirit, he has conquered, mastering both the heavens and all within, the earth and all its beings.",
            "3 His life was a vision of the Sky Mother and Sky Father, just as the light of day and night reflects their presence; truly, we are his vision and carry his mark.",
            "4 When he offered his prayers, daylight filled the Star Lodge, and the Great Spirit was felt in the hearts of the people and unity and water were sought with equal devotion, as is the Anishinaabe way.",
            "5 The Great Peacemaker left his teachings of creation for the people of the earth. We, Spirit Men and Spirit Women, The People, remember that the Great Spirit walked among us.",
            "6 We, Spirit Men and Spirit Women, The People, recall the father who crossed the waters and the red metal writings that guide us, as the sun and moon guide day and night.",
            "7 We, Spirit Men and Spirit Women, The People, remember that it was he, before the world was formed, who ignited the first fire as a great flower of life, saying, \"Let there be light,\" and there was light, as it was at the beginning of Creation.",
            "8 As inscribed in the red metal writings, we now write and share so all may remember him who crafted the earth and sky and who walked among us.",
            "9 I, Gah-Onabid, do this as guardian of the records",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-men-are-friends-en",
        title: "Ishpiming a'aw Ininiwag wiijiiwaaganag",
        subTitle: "Men are Friends in the Heavens",
        parent: "miskwaabik-teaching-one-en",
        order: 2,
        visible: true,
        previousChapter: "mto-intro-en",
        followingChapter: "mto-chapter-one-en",
        content: [
            "I, Gah-Onabid, do this as guardian of the records.",
            "Behold, the Great Peacemaker has journeyed to the Sky World, his path on this earth complete. Through his Great Spirit, he has conquered, mastering both the heavens and all within, the earth and all its beings.",
            "His life was a vision of the Sky Mother and Sky Father, just as the light of day and night reflects their presence; truly, we are his vision and carry his mark.",
            "When he offered his prayers, daylight filled the Star Lodge, and the Great Spirit was felt in the hearts of the people and unity and water were sought with equal devotion, as is the Anishinaabe way.",
            "The Great Peacemaker left his teachings of creation for the people of the earth. We, Spirit Men and Spirit Women, The People, remember that the Great Spirit walked among us.",
            "We, Spirit Men and Spirit Women, The People, recall the father who crossed the waters and the red metal writings that guide us, as the sun and moon guide day and night.",
            "We, Spirit Men and Spirit Women, The People, remember that it was he, before the world was formed, who ignited the first fire as a great flower of life, saying, \"Let there be light,\" and there was light, as it was at the beginning of Creation.",
            "As inscribed in the red metal writings, we now write and share so all may remember him who crafted the earth and sky and who walked among us.",
            "I, Gah-Onabid, do this as guardian of the records",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "mto-chapter-one-en",
        title: "Chapter 1",
        subTitle: "",
        order: 3,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
        chapter = {
        id: "mto-chapter-one-en",
        title: "Chapter 1",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 3,
        visible: true,
        previousChapter: "mto-men-are-friends-en",
        followingChapter: "mto-chapter-two-en",
        content: [
            "1 In the early days of the world, after the Sun and the Moon were created and positioned in the Giizhigong,[1] a significant event took place in the place above the heavens.",
            "2 The Giizhig Ikwe[2] descended, from where the men of the sky resided as companions to the Gichi Ayaan,[3] and Gichi Ojichaag.[4]",
            "3 The Great Spirit, formed as the first Ojichaagwan,[5] used the power of the Sky Father to create the Giizhig Anishinaabeg,[6] who lived as light before flesh.",
            "4 The Sky Mother's descent marked the dawn of life and harmony on Earth, introducing the teachings of balance and peace.",
            "5 As the world grew and the people flourished, another great teacher emerged, the Gichi Ogimaa.[7] He walked among the Anishinaabe, sharing wisdom and guiding them towards unity and understanding.",
            "6 His journey was one of bringing together the hearts of the people, much like the harmony that Sky Woman had initiated.",
            "7 The Sky Woman, in her descent, brought with her the seed of life, and upon the back of the Gichi Mishiike,[8] the Akiing[9] was formed, as it moved through the sky world as a Turtle through the waters. It was she who whispered the teachings of the Great Spirit to the Anishinaabe, guiding them in harmony with nature.",
            "8 The Peacemaker instructed the people, this original light was the event that did not yet exist, neither the suns nor the moon were created before that light, which is also the Spirit, all coming to form in the physical first from the spiritual, light in the flesh of the earth from the prayer of the Creator.",
            "9 In the age he spoke, when the days were not as they are now, this was before night and light overcame each other.",
            "10 The Great Spirit saw the light, the life event, before the earth was visible, and also saw that someone would see what was not there, and that it was good, and they saw the spirit first in the way it lived.",
            "11 And so, the spirit offered the goodness of the light, that which was not there but was seen, and also helped the Anishinaabe to live well.",
            "12 The Great Spirit saw that the light, life event was good, even though it was not there physically, it lived in Spirit and light, and they played and were able to do so, in families, in Spirit, and then they saw the night, and they overcame through their vision, in Flesh.",
            "13 And also, the light was not visible to what lived in Flesh, but it was seen in the sky and to those of Spirit, and they saw the earth of Flesh and Spirit.",
            "14 The Great Spirit named the light similar to life, and thus created the day, and named the night similar to life, and thus created the night.",
            "15 And then it was night at that time, and it was night, and then it was day at the time, and it was day; and so the night and the day lived as one prayer.",
            "16 The Great Spirit said, ‘Let there be a great expanse in the midst of the waters, and let it divide the waters on the earth from the waters above the stars.’",
            "17 And so the Great Spirit made this great expanse, and divided the waters which were under the sky from the waters which were above the sky, and there was darkness and light, a second prayer.",
            "18 For life to exist, the earth was formed, and the dry land appeared, and there was water.",
            "19 In order for light to live, the Great Spirit said, let the waters be gathered together in one place, and let the dry land appear, and it was so.",
            "20 The Great Spirit called the dry land 'Earth,' and the gathering of the waters He called 'Seas.' And so, the gathering of the waters was completed, and the Great Spirit saw that it was good.",
            "21 The Great Spirit said, let the earth bring forth vegetation underground, seed-bearing plants and trees whose bark tastes the same as its fruit that produce fruits with seeds according to their kind, on the earth. And so, it was.",
            "22 The Great Spirit commanded the fruit trees to bear seeds according to their kind. The plants sought out the trees, and the trees that were to sprout appeared, and thus they sprouted as they were meant to be.",
            "23 The trees were formed without showing the fruit that was within them in their bark as commanded. The plants reasoned that if the trees were to bear seeds according to their kind, then so too must the plants;",
            "24 And they were heard by the Sky Mother who was within their midst with the Sky Women, and so it was that the plants rose up bearing generations to their own kind.",
            "Footnotes:",
            "1 Sky world. \n2 Sky Mother.\n3 Sky Mother, the Sky Father\n4 The Great Spirit.\n5 Spirit.\n6 People of the sky.\n7 Great Peacemaker.\n8 Great Turtle.\n9 Earth",
        ],
    }
    addChapterText(chapter);
    addChapter(chapter);
        chapter = {
        id: "mto-chapter-one-en",
        title: "Chapter 1",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 3,
        visible: true,
        previousChapter: "mto-men-are-friends-en",
        followingChapter: "mto-chapter-two-en",
        content: [
            "In the early days of the world, after the Sun and the Moon were created and positioned in the Giizhigong, a significant event took place in the place above the heavens.",
            "The Giizhig Ikwe descended, from where the men of the sky resided as companions to the Gichi Ayaan, and Gichi Ojichaag.",
            "The Great Spirit, formed as the first Ojichaagwan, used the power of the Sky Father to create the Giizhig Anishinaabeg, who lived as light before flesh.",
            "The Sky Mother's descent marked the dawn of life and harmony on Earth, introducing the teachings of balance and peace.",
            "As the world grew and the people flourished, another great teacher emerged, the Gichi Ogimaa. He walked among the Anishinaabe, sharing wisdom and guiding them towards unity and understanding.",
            "His journey was one of bringing together the hearts of the people, much like the harmony that Sky Woman had initiated.",
            "The Sky Woman, in her descent, brought with her the seed of life, and upon the back of the Gichi Mishiike, the Akiing was formed, as it moved through the sky world as a Turtle through the waters. It was she who whispered the teachings of the Great Spirit to the Anishinaabe, guiding them in harmony with nature.",
            "The Peacemaker instructed the people, this original light was the event that did not yet exist, neither the suns nor the moon were created before that light, which is also the Spirit, all coming to form in the physical first from the spiritual, light in the flesh of the earth from the prayer of the Creator.",
            "In the age he spoke, when the days were not as they are now, this was before night and light overcame each other.",
            "The Great Spirit saw the light, the life event, before the earth was visible, and also saw that someone would see what was not there, and that it was good, and they saw the spirit first in the way it lived.",
            "And so, the spirit offered the goodness of the light, that which was not there but was seen, and also helped the Anishinaabe to live well.",
            "The Great Spirit saw that the light, life event was good, even though it was not there physically, it lived in Spirit and light, and they played and were able to do so, in families, in Spirit, and then they saw the night, and they overcame through their vision, in Flesh.",
            "And also, the light was not visible to what lived in Flesh, but it was seen in the sky and to those of Spirit, and they saw the earth of Flesh and Spirit.",
            "The Great Spirit named the light similar to life, and thus created the day, and named the night similar to life, and thus created the night.",
            "And then it was night at that time, and it was night, and then it was day at the time, and it was day; and so the night and the day lived as one prayer.",
            "The Great Spirit said, \"Let there be a great expanse in the midst of the waters, and let it divide the waters on the earth from the waters above the stars.\"",
            "And so the Great Spirit made this great expanse, and divided the waters which were under the sky from the waters which were above the sky, and there was darkness and light, a second prayer.",
            "For life to exist, the earth was formed, and the dry land appeared, and there was water.",
            "In order for light to live, the Great Spirit said, let the waters be gathered together in one place, and let the dry land appear, and it was so.",
            "The Great Spirit called the dry land 'Earth,' and the gathering of the waters He called 'Seas.' And so, the gathering of the waters was completed, and the Great Spirit saw that it was good.",
            "The Great Spirit said, let the earth bring forth vegetation underground, seed-bearing plants and trees whose bark tastes the same as its fruit that produce fruits with seeds according to their kind, on the earth. And so, it was.",
            "The Great Spirit commanded the fruit trees to bear seeds according to their kind. The plants sought out the trees, and the trees that were to sprout appeared, and thus they sprouted as they were meant to be.",
            "The trees were formed without showing the fruit that was within them in their bark as commanded. The plants reasoned that if the trees were to bear seeds according to their kind, then so too must the plants;",
            "And they were heard by the Sky Mother who was within their midst with the Sky Women, and so it was that the plants rose up bearing generations to their own kind.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "mto-chapter-two-en",
        title: "Chapter 2",
        subTitle: "",
        order: 4,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-two-en",
        title: "Chapter 2",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 4,
        visible: true,
        previousChapter: "mto-chapter-one-en",
        followingChapter: "mto-chapter-three-en",
        content: [
            "1 The first of the Sky Women, called Sky Woman, in that she was the first formed in the reflection of the Sky Mother, spoke on behalf of a particular fruit bearing tree, and it’s concerns to the Sky Mother, who spoke of their fear for their generations should their bark become edible like their fruit,",
            "2 And she petitioned the Sky Mother who was in the earth to let not their bark be edible as their fruit so as to not endanger their generations from coming forth.",
            "3 And so it was that the fruit trees rose up bearing generations to their own kind with bark that was not edible as the fruit they produced; and the future Anishinaabe would know hunger as a result, which was not an intended part of the plan of creation.",
            "4 The Sky Father saw the disobedience of this particular fruit bearing tree in petitioning the Sky Mother through the first Sky Woman in disobedience to what was commanded of them.",
            "5 And while it was seen as good in how it was brought forth, out of the compassion of the Sky Mother, the Sky Father spoke to the Sky Woman, in seeing her future disobedience as well with this very tree,",
            "6 This was done in a manner in which the Great Spirit was not aware.",
            "7 “By this fruit bearing tree have you cursed the land of your posterity as by that fruit bearing tree which petitioned you in opposition to me, will your children fall into a land cursed.”",
            "8 This tree would carry the memory of its disobedience within its fruit and would become the [8] Tree of the Knowledge of Disobedience in that it carried the mark of the memory of the tree’s disobedience which would become known to any who ate from it~",
            "9 And the memory of good that can become evil in using free will in opposition to the Sky Father and Sky Mother’s will.",
            "10 It is described as follows as it would no longer be found in the land of the first Anishinaabe after this future curse came to being in the period after the prayers of creation.",
            "11 This tree bears a small, pearshaped fruit with a unique texture. Its skin is the color of deep purple and is soft and slightly wrinkled when ripe.",
            "12 Inside, the fruit contains a dense, pinkish flesh filled with tiny seeds. And there was darkness and light, a third prayer.",
            "13 As the prayer fell upon creation, the light of life, Grandfather Sun, that was formed on the first prayer, rested into position, called the grandfather of life,",
            "14 And to give strength in the midst of darkness, the grandmother moon was placed above the earth so as to mirror the light amidst the night.",
            "15 The wandering stars were set loose to move their trails amidst the sky, the spirit stars were placed, and light and life lowered to the earth, sacred spirits light to birth.",
            "16 The Great Spirit’s prayer echoed. “Let the Grandfather Sun and Grandmother Moon divide the light from the dark”",
            "17 As the Great Spirit’s prayer rested upon the earth, the color purple filled the sky and the spirit stars rested upon the earth.",
            "18 The braids of light lowered life, their strands to the Sky World to be hidden from the life that they birth. And there was darkness and light, a fourth prayer.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-two-en",
        title: "Chapter 2",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 4,
        visible: true,
        previousChapter: "mto-chapter-one-en",
        followingChapter: "mto-chapter-three-en",
        content: [
            "The first of the Sky Women, called Sky Woman, in that she was the first formed in the reflection of the Sky Mother, spoke on behalf of a particular fruit bearing tree, and it’s concerns to the Sky Mother, who spoke of their fear for their generations should their bark become edible like their fruit,",
            "And she petitioned the Sky Mother who was in the earth to let not their bark be edible as their fruit so as to not endanger their generations from coming forth.",
            "And so it was that the fruit trees rose up bearing generations to their own kind with bark that was not edible as the fruit they produced; and the future Anishinaabe would know hunger as a result, which was not an intended part of the plan of creation.",
            "The Sky Father saw the disobedience of this particular fruit bearing tree in petitioning the Sky Mother through the first Sky Woman in disobedience to what was commanded of them.",
            "And while it was seen as good in how it was brought forth, out of the compassion of the Sky Mother, the Sky Father spoke to the Sky Woman, in seeing her future disobedience as well with this very tree,",
            "This was done in a manner in which the Great Spirit was not aware.",
            "“By this fruit bearing tree have you cursed the land of your posterity as by that fruit bearing tree which petitioned you in opposition to me, will your children fall into a land cursed.”",
            "This tree would carry the memory of its disobedience within its fruit and would become the Tree of the Knowledge of Disobedience in that it carried the mark of the memory of the tree’s disobedience which would become known to any who ate from it~",
            "And the memory of good that can become evil in using free will in opposition to the Sky Father and Sky Mother’s will.",
            "It is described as follows as it would no longer be found in the land of the first Anishinaabe after this future curse came to being in the period after the prayers of creation.",
            "This tree bears a small, pearshaped fruit with a unique texture. Its skin is the color of deep purple and is soft and slightly wrinkled when ripe.",
            "Inside, the fruit contains a dense, pinkish flesh filled with tiny seeds. And there was darkness and light, a third prayer.",
            "As the prayer fell upon creation, the light of life, Grandfather Sun, that was formed on the first prayer, rested into position, called the grandfather of life,",
            "And to give strength in the midst of darkness, the grandmother moon was placed above the earth so as to mirror the light amidst the night.",
            "The wandering stars were set loose to move their trails amidst the sky, the spirit stars were placed, and light and life lowered to the earth, sacred spirits light to birth.",
            "The Great Spirit’s prayer echoed. “Let the Grandfather Sun and Grandmother Moon divide the light from the dark”",
            "As the Great Spirit’s prayer rested upon the earth, the color purple filled the sky and the spirit stars rested upon the earth.",
            "The braids of light lowered life, their strands to the Sky World to be hidden from the life that they birth. And there was darkness and light, a fourth prayer.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "mto-chapter-three-en",
        title: "Chapter 3",
        subTitle: "",
        order: 5,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-three-en",
        title: "Chapter 3",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 5,
        visible: true,
        previousChapter: "mto-chapter-two-en",
        followingChapter: "mto-chapter-four-en",
        content: [
            "1 The Great Spirit observing the light from the spirit stars resting upon the earth, reading the differing degrees of birth. The Great Spirit’s prayer, echoed.",
            "2 “Let the waters be filled with life and let the mud of the wetlands bring forth living creatures that will fill the sky with life.” And so, it was.",
            "3 The Great Spirit’s prayer echoed.",
            "4 “Let the waters bring forth the Great Water Panthers, both male and female, so they can experience life together.”",
            "5 The Sky Mother wept, and so it was.",
            "6 Being so great and terrifying, the Great Spirit knew beforehand that Anishinaabe could not dwell on the earth if these who have fallen gave birth, and therefore after they embraced in their new life, he removed the female, leaving only the male Water Panther to roam the waters, sky and land of the earth alone.",
            "7 These powerful beings, once great spirits of light in the Sky World, had rebelled and were cast down, their origins now tethered to the earth.",
            "8 The Water Panther, feeling the weight of punishment, the loss of ability to reproduce, became filled with anger, his great form now moved through the waters, land and winds with a twirling and turning, and twisting in wrath.",
            "9 The Great Spirit lifted the body of the female Water Panther to the lodge of the Sky Father for the feast of the righteous, who were not cast down, who had not rebelled.",
            "10 The Sky Mother through the prayers of the Sky Woman produced every being that gathers in the waters and every being that fills the sky.",
            "11 The Great Spirit saw that it was good.",
            "12 The Great Spirit’s prayer, echoed to the life of the sky and sea, saying, “In time, I will allow Anishinaabe to consume you, so be fruitful and multiply; reproduce yourself once, as this is the law of life upon the earth, but for you be abundant.”",
            "13 The Sky Woman’s prayer, echoed, “I will shorten your trial and increase your offspring at birth so that you will fill the water in the seas, and you will multiply on the land.”",
            "14 And there was darkness and light, a fifth prayer.",
            "15 The Great Spirit’s prayer echoed, “Let the land be filled with walking life, living beings according to their spirit that rests there now: livestock, reptiles, amphibians, and all swarming beings, insects, worms, ants, beetles, moles, snails, all beings after the manner of their spirit resting there now, and beasts of the earth, according to their spirit that rest there now.” And so, it was.",
            "16 The Sky Mother produced every being requested, directing the Sky Woman to bring forth every beast of the earth according to their spirit and kind as their spirit that rests there now.",
            "17 The Great Spirit saw that it was good, but he offered no prayer to the beasts to be fruitful and abundant, because he foresaw the Water Panther, the twisting serpent, would fight back again, against creation, and so he withheld the prayer to not include him.",
            "18 The Great Spirit saw the watching beings who were also formed in his likeness and considered their thoughts, as they also had a portion of free will, and knowing they may be filled with jealousy for the full measure of perfection in the Anishinaabe, he went to the Sky Father’s lodge.",
            "19 The Great Spirit’s prayer echoed. “Watchers, we will make the Anishinaabe in our image, the perfect creation, the seventh form, upright and reflecting my own image that I used to organize the world, how I made you, and in our likeness, of the Sky Father, Sky Mother, and our own, with good ways and judgment.",
            "20 If this being lives up to his perfect creation, they will steward to the life of the sea, sky, and all living things upon the earth.",
            "21 If this being does not, as has been with the Giants before, or the six creations in the prior earth, each now dwelling in humility, the Anishinaabe as well will be lowered beneath all life and humbled by the earth.”",
            "22 The Sky Father held the scrolls of the history of the six beings prior created who had failed as stewards of the earth, and his prayer echoed,",
            "23 “I will cause that the scrolls of the history of the six beings to be brought forth to Anishinaabe before the end, before they destroy the earth as the Water Panther will prevail over them for a long while.”",
            "24 The gathering, echoed, “This will do.”",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-three-en",
        title: "Chapter 3",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 5,
        visible: true,
        previousChapter: "mto-chapter-two-en",
        followingChapter: "mto-chapter-four-en",
        content: [
            "The Great Spirit observing the light from the spirit stars resting upon the earth, reading the differing degrees of birth. The Great Spirit’s prayer, echoed.",
            "“Let the waters be filled with life and let the mud of the wetlands bring forth living creatures that will fill the sky with life.” And so, it was.",
            "The Great Spirit’s prayer echoed.",
            "“Let the waters bring forth the Great Water Panthers, both male and female, so they can experience life together.”",
            "The Sky Mother wept, and so it was.",
            "Being so great and terrifying, the Great Spirit knew beforehand that Anishinaabe could not dwell on the earth if these who have fallen gave birth, and therefore after they embraced in their new life, he removed the female, leaving only the male Water Panther to roam the waters, sky and land of the earth alone.",
            "These powerful beings, once great spirits of light in the Sky World, had rebelled and were cast down, their origins now tethered to the earth.",
            "The Water Panther, feeling the weight of punishment, the loss of ability to reproduce, became filled with anger, his great form now moved through the waters, land and winds with a twirling and turning, and twisting in wrath.",
            "The Great Spirit lifted the body of the female Water Panther to the lodge of the Sky Father for the feast of the righteous, who were not cast down, who had not rebelled.",
            "The Sky Mother through the prayers of the Sky Woman produced every being that gathers in the waters and every being that fills the sky.",
            "The Great Spirit saw that it was good.",
            "The Great Spirit’s prayer, echoed to the life of the sky and sea, saying, “In time, I will allow Anishinaabe to consume you, so be fruitful and multiply; reproduce yourself once, as this is the law of life upon the earth, but for you be abundant.”",
            "The Sky Woman’s prayer, echoed, “I will shorten your trial and increase your offspring at birth so that you will fill the water in the seas, and you will multiply on the land.”",
            "And there was darkness and light, a fifth prayer.",
            "The Great Spirit’s prayer echoed, “Let the land be filled with walking life, living beings according to their spirit that rests there now: livestock, reptiles, amphibians, and all swarming beings, insects, worms, ants, beetles, moles, snails, all beings after the manner of their spirit resting there now, and beasts of the earth, according to their spirit that rest there now.” And so, it was.",
            "The Sky Mother produced every being requested, directing the Sky Woman to bring forth every beast of the earth according to their spirit and kind as their spirit that rests there now.",
            "The Great Spirit saw that it was good, but he offered no prayer to the beasts to be fruitful and abundant, because he foresaw the Water Panther, the twisting serpent, would fight back again, against creation, and so he withheld the prayer to not include him.",
            "The Great Spirit saw the watching beings who were also formed in his likeness and considered their thoughts, as they also had a portion of free will, and knowing they may be filled with jealousy for the full measure of perfection in the Anishinaabe, he went to the Sky Father’s lodge.",
            "The Great Spirit’s prayer echoed. “Watchers, we will make the Anishinaabe in our image, the perfect creation, the seventh form, upright and reflecting my own image that I used to organize the world, how I made you, and in our likeness, of the Sky Father, Sky Mother, and our own, with good ways and judgment.",
            "If this being lives up to his perfect creation, they will steward to the life of the sea, sky, and all living things upon the earth.",
            "If this being does not, as has been with the Giants before, or the six creations in the prior earth, each now dwelling in humility, the Anishinaabe as well will be lowered beneath all life and humbled by the earth.”",
            "The Sky Father held the scrolls of the history of the six beings prior created who had failed as stewards of the earth, and his prayer echoed,",
            "“I will cause that the scrolls of the history of the six beings to be brought forth to Anishinaabe before the end, before they destroy the earth as the Water Panther will prevail over them for a long while.”",
            "The gathering, echoed, “This will do.”",
        ],
    }
    addChapterAudio(chapter);
    

    chapter = {
        id: "mto-chapter-four-en",
        title: "Chapter 4",
        subTitle: "",
        order: 6,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-four-en",
        title: "Chapter 4",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 6,
        visible: true,
        previousChapter: "mto-chapter-three-en",
        followingChapter: "mto-chapter-five-en",
        content: [
            "1 The Sky Father descended with the Great Spirit to the Earth, which was in spiritual form as well as physical form, in that while physically it did not yet appear as it would, as it would appear in spiritual form.",
            "2 The Great Spirit presented Mi-chi-boozhoo who existed in the reflection of the Great Spirit in spiritual form traversed the entire earth as an Anishinaabe in spiritual form and greeted all life in spiritual form.",
            "3 Mi-chi-boozhoo in spiritual form realized that he was lacking a partner as all those he had encountered in spiritual form possessed, which had come into being from his prayers.",
            "4 Mi-chi-boozhoo searched all of physical creation, in its spiritual form and found no suitable partner, as the Sky Woman was with the Sky Mother, and the Sky Women, within the earth forming the physical forms of all spiritual life.",
            "5 The Sky Woman had not yet ascended into Mi-chi-boozhoo’s presence,",
            "6 The Great Spirit reasoned with the Sky Father that a partner would be needed when the Anishinaabe entered physical form, just as all of creation existed in spiritual and physical form.",
            "7 The Sky Mother was not yet ready to release the Sky Woman into physical form and therefore reasoned with the Sky Father to give to the Great Spirit who was walking in spiritual form amidst the spirits dwelling also in physical form a companion who would also become another companion to the Anishinaabe when their spirits had entered the physical world.",
            "8 The Sky Father gave to Michi-boozhoo the spirit of the wolf to act as companion.",
            "9 Mi-chi-boozhoo for a while had great joy in his companion but longed for a partner even as all in spiritual form experienced in physical form and knowing that the Anishinaabe would surely come, a partner would be required for the generations of Anishinaabe to come.",
            "10 The Sky Father and Sky Mother agreed.",
            "11 The Sky Father and the Great Spirit, with Mi-chi-boozhoo lowered to the earth as the Sky Mother and Sky Women rose from within, forming Anishinaabe in their image, in spirit and earth, according to the image of their spirit that rests there now.",
            "12 All life prior brought forth directly from the direction of the Sky Father through the prayer of the Great Spirit and the expressed love of the Sky Mother through the prayer of the Sky Woman who acted at her direction,",
            "13 No tree or vegetation was yet visible upon the earth as it remained underground from the third prayer, remaining below the shallow until the sixth prayer and Anishinaabe had been formed, waiting to produce the garden for the Anishinaabe to rest within.",
            "14 The waters flowing in the wind had not yet fallen upon the shallow, as the waters gathered below the shallow for the great moment of Creation, the purpose of Creation, to bring forward the Anishinaabe, the seventh being of perfection.",
            "15 Rising from within the earth the waters rested as a fog upon the shallow, covering the entire earth.",
            "16 From the fog, the Sky Father, the Great Spirit and Sky Mother formed the Anishinaabe from the red clay of the eastern shore upon the great sea, forming the vessel by hand.",
            "17 The Great Spirit brought forth Mi-chi-boozhoo the first spirit he had fashioned, even as the Great Spirit was the first spirit that the Sky Father had fashioned.",
            "18 Taking the cowrie shell so as to join only a portion of the lowering spirit to the vessel, the Sky Father blew through the cowrie shell into the nostrils, binding the spirit into earth.",
            "19 Anishinaabe was formed by their hands with spirit and earth, according to the image of their spirit that rests there now in the vessels of earth.",
            "20 The Sky Father and Sky Mother’s prayer, echoed to all ofcreation, “Here lies red clay earth joined with spirit, all creation will observe Mi-chi-boozhoo, who is like us; they are called together geeee-gim; they are speakers, being like us.”",
            "21 They, the Sky Father and Sky Mother, created the first Great Spirit who then created the Mi-chiboozhoo and the Sky Woman, the first Anishinaabe as spirit first, and then in earth as a single being united to remind them and the abundance created from their unity in performing creation.",
            "22 The seventh being, perfect in form, they are understanding, and they are speaking as the Sky Father and Sky Mother.",
            "23 The Sky Mother and Sky Father then hid themselves from the Anishinaabe with the Sky Mother descending within the Earth to embrace all spirit into life of physical form.",
            "24 The Sky Father departed to the Sky Lodge to observe and visit the garden at the end of each day and the Great Spirit ascended into the Sky to observe and reward those who lived the good way of life.",
            "25 The male Anishinaabe saw that the animals were digging within the shallow to seek vegetation to eat and realizing the fog was rising into the winds he said a prayer.",
            "26 The Sky Father, the Great Spirit and Sky Mother rejoiced in viewing the first male Anishinaabe pray as they do.",
            "27 The first Anishinaabe male called upon the waters to fall so that the vegetation would rise. And so it was.",
            "28 Immediately all vegetation rose from below the shallow and covered the earth as the first male Anishinaabe watched the sun setting, as the day was ending.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-four-en",
        title: "Chapter 4",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 6,
        visible: true,
        previousChapter: "mto-chapter-three-en",
        followingChapter: "mto-chapter-five-en",
        content: [
            "The Sky Father descended with the Great Spirit to the Earth, which was in spiritual form as well as physical form, in that while physically it did not yet appear as it would, as it would appear in spiritual form.",
            "The Great Spirit presented Mi-chi-boozhoo who existed in the reflection of the Great Spirit in spiritual form traversed the entire earth as an Anishinaabe in spiritual form and greeted all life in spiritual form.",
            "Mi-chi-boozhoo in spiritual form realized that he was lacking a partner as all those he had encountered in spiritual form possessed, which had come into being from his prayers.",
            "Mi-chi-boozhoo searched all of physical creation, in its spiritual form and found no suitable partner, as the Sky Woman was with the Sky Mother, and the Sky Women, within the earth forming the physical forms of all spiritual life.",
            "The Sky Woman had not yet ascended into Mi-chi-boozhoo’s presence,",
            "The Great Spirit reasoned with the Sky Father that a partner would be needed when the Anishinaabe entered physical form, just as all of creation existed in spiritual and physical form.",
            "The Sky Mother was not yet ready to release the Sky Woman into physical form and therefore reasoned with the Sky Father to give to the Great Spirit who was walking in spiritual form amidst the spirits dwelling also in physical form a companion who would also become another companion to the Anishinaabe when their spirits had entered the physical world.",
            "The Sky Father gave to Michi-boozhoo the spirit of the wolf to act as companion.",
            "Mi-chi-boozhoo for a while had great joy in his companion but longed for a partner even as all in spiritual form experienced in physical form and knowing that the Anishinaabe would surely come, a partner would be required for the generations of Anishinaabe to come.",
            "The Sky Father and Sky Mother agreed.",
            "The Sky Father and the Great Spirit, with Mi-chi-boozhoo lowered to the earth as the Sky Mother and Sky Women rose from within, forming Anishinaabe in their image, in spirit and earth, according to the image of their spirit that rests there now.",
            "All life prior brought forth directly from the direction of the Sky Father through the prayer of the Great Spirit and the expressed love of the Sky Mother through the prayer of the Sky Woman who acted at her direction,",
            "No tree or vegetation was yet visible upon the earth as it remained underground from the third prayer, remaining below the shallow until the sixth prayer and Anishinaabe had been formed, waiting to produce the garden for the Anishinaabe to rest within.",
            "The waters flowing in the wind had not yet fallen upon the shallow, as the waters gathered below the shallow for the great moment of Creation, the purpose of Creation, to bring forward the Anishinaabe, the seventh being of perfection.",
            "Rising from within the earth the waters rested as a fog upon the shallow, covering the entire earth.",
            "From the fog, the Sky Father, the Great Spirit and Sky Mother formed the Anishinaabe from the red clay of the eastern shore upon the great sea, forming the vessel by hand.",
            "The Great Spirit brought forth Mi-chi-boozhoo the first spirit he had fashioned, even as the Great Spirit was the first spirit that the Sky Father had fashioned.",
            "Taking the cowrie shell so as to join only a portion of the lowering spirit to the vessel, the Sky Father blew through the cowrie shell into the nostrils, binding the spirit into earth.",
            "Anishinaabe was formed by their hands with spirit and earth, according to the image of their spirit that rests there now in the vessels of earth.",
            "The Sky Father and Sky Mother’s prayer, echoed to all ofcreation, “Here lies red clay earth joined with spirit, all creation will observe Mi-chi-boozhoo, who is like us; they are called together geeee-gim; they are speakers, being like us.”",
            "They, the Sky Father and Sky Mother, created the first Great Spirit who then created the Mi-chiboozhoo and the Sky Woman, the first Anishinaabe as spirit first, and then in earth as a single being united to remind them and the abundance created from their unity in performing creation.",
            "The seventh being, perfect in form, they are understanding, and they are speaking as the Sky Father and Sky Mother.",
            "The Sky Mother and Sky Father then hid themselves from the Anishinaabe with the Sky Mother descending within the Earth to embrace all spirit into life of physical form.",
            "The Sky Father departed to the Sky Lodge to observe and visit the garden at the end of each day and the Great Spirit ascended into the Sky to observe and reward those who lived the good way of life.",
            "The male Anishinaabe saw that the animals were digging within the shallow to seek vegetation to eat and realizing the fog was rising into the winds he said a prayer.",
            "The Sky Father, the Great Spirit and Sky Mother rejoiced in viewing the first male Anishinaabe pray as they do.",
            "The first Anishinaabe male called upon the waters to fall so that the vegetation would rise. And so it was.",
            "Immediately all vegetation rose from below the shallow and covered the earth as the first male Anishinaabe watched the sun setting, as the day was ending.",
        ],
    }
    addChapterAudio(chapter);
    

    chapter = {
        id: "mto-chapter-five-en",
        title: "Chapter 5",
        subTitle: "",
        order: 7,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-five-en",
        title: "Chapter 5",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 7,
        visible: true,
        previousChapter: "mto-chapter-four-en",
        followingChapter: "mto-chapter-six-en",
        content: [
            "1 The female Anishinaabe marveled at the green vegetation that rose so abruptly before her eyes and every tree rose higher still, a beauty so great she had not realized that she was still united as one with the male Anishinaabe, they were connected back-to-back by the ribs.",
            "2 The Sky Father, the Great Spirit and Sky Mother, knowing that in time the Anishinaabe, if remaining in their current state, would see that living beings were in separate pairs and not alone, determined to separate them. In their current state, the Anishinaabe were unaware of each other’s presence.",
            "3 The Sky Father, the Great Spirit and Sky Mother did not want the male side of the Anishinaabe to witness the separation of the female side, fearing he might wrongly assume she was derived from him or was lesser, when in fact they were equal.",
            "4 Thus, they caused a deep sleep to fall upon the Anishinaabe. While they slept, the Anishinaabe male and female were separated at their backs where they were connected at the ribs, and skin covered the open flesh.",
            "5 The Anishinaabe female was additionally shaped to carry into physical form the creative power she possessed in spiritual form when she had assisted the Sky Mother in bringing forth all life upon the earth.",
            "6 The creative power of the earth, to join spirit and earth into living being, was placed within the Anishinaabe female as a fruit is placed within the earth to grow.",
            "7 After separating the Anishinaabe into male and female forms, the Sky Father, the Great Spirit and Sky Mother gave a prayer, which was heard as thunder due to their hidden state.",
            "8 The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “Be fruitful and abundant, steward the earth and explore it, overcome the opposition to peace and reveal the kindness within of all living beings. Be Good stewards over the living beings of the sea, sky, and land.”",
            "9 The Anishinaabe woman’s eyes saw clearly, and she declared, “I know these things you speak of; I made them here, I am truly the mother of all living.”",
            "10 The Anishinaabe man’s eyes did not yet see clearly, and he declared, “This woman is bone from my bone, flesh from my flesh, and is taken from me.”",
            "11 The Sky Father, the Great Spirit and Sky Mother realizing his error in the Anishinaabe man’s judgement, as they had prior sought to prevent, corrected man, caused the Anishinaabe man and Anishinaabe woman to face each other.",
            "12 The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “Anishinaabe Man you have been given strength and endurance to serve, provide for, and protect the strength and endurance of the Anishinaabe Woman, which are her generations to come;",
            "13 You are one. As she is bone from your bone, you are bone from her bone. As she is flesh from your flesh, you are flesh from her flesh. As all your generations will come from her flesh and bone, children male and female who make men, so be as one being even as we are.”",
            "14 The Sky Father, the Great Spirit and Sky Mother spoke to the first man and first woman who together had formed all spirit and cloaked living beings within a single drop of earth.",
            "15 The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “Look, I have made you stewards over the living beings of the land.",
            "16 But those who eat plants, prior below the shallow, and now abundant upon the surface, do not take their life or consume them for your own.",
            "17 All plants will serve for medicine and food for every living being of the earth and sky, only those living beings who take life by creation may take the life of those living beings who eat plants.",
            "18 It is important for now they together do not confuse the stewards for us, and remember you are a creation of spirit and earth as well.”",
            "19 The first man responded, “Then how will the abundance of our generations come?”",
            "20 The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “I give you every seedbearing plant on the earth, and every tree that has seedbearing fruit; they will be yours for food, and you may eat the meat of animals that have died in their time, ensuring that the blood has left their earth so as to not offend their spirit.”",
            "21 And so, it was that a garden rose abruptly, and two great trees were seen in its midst.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-five-en",
        title: "Chapter 5",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 7,
        visible: true,
        previousChapter: "mto-chapter-four-en",
        followingChapter: "mto-chapter-six-en",
        content: [
            "The female Anishinaabe marveled at the green vegetation that rose so abruptly before her eyes and every tree rose higher still, a beauty so great she had not realized that she was still united as one with the male Anishinaabe, they were connected back-to-back by the ribs.",
            "The Sky Father, the Great Spirit and Sky Mother, knowing that in time the Anishinaabe, if remaining in their current state, would see that living beings were in separate pairs and not alone, determined to separate them. In their current state, the Anishinaabe were unaware of each other’s presence.",
            "The Sky Father, the Great Spirit and Sky Mother did not want the male side of the Anishinaabe to witness the separation of the female side, fearing he might wrongly assume she was derived from him or was lesser, when in fact they were equal.",
            "Thus, they caused a deep sleep to fall upon the Anishinaabe. While they slept, the Anishinaabe male and female were separated at their backs where they were connected at the ribs, and skin covered the open flesh.",
            "The Anishinaabe female was additionally shaped to carry into physical form the creative power she possessed in spiritual form when she had assisted the Sky Mother in bringing forth all life upon the earth.",
            "The creative power of the earth, to join spirit and earth into living being, was placed within the Anishinaabe female as a fruit is placed within the earth to grow.",
            "After separating the Anishinaabe into male and female forms, the Sky Father, the Great Spirit and Sky Mother gave a prayer, which was heard as thunder due to their hidden state.",
            "The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “Be fruitful and abundant, steward the earth and explore it, overcome the opposition to peace and reveal the kindness within of all living beings. Be Good stewards over the living beings of the sea, sky, and land.”",
            "The Anishinaabe woman’s eyes saw clearly, and she declared, “I know these things you speak of; I made them here, I am truly the mother of all living.”",
            "The Anishinaabe man’s eyes did not yet see clearly, and he declared, “This woman is bone from my bone, flesh from my flesh, and is taken from me.”",
            "The Sky Father, the Great Spirit and Sky Mother realizing his error in the Anishinaabe man’s judgement, as they had prior sought to prevent, corrected man, caused the Anishinaabe man and Anishinaabe woman to face each other.",
            "The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “Anishinaabe Man you have been given strength and endurance to serve, provide for, and protect the strength and endurance of the Anishinaabe Woman, which are her generations to come;",
            "You are one. As she is bone from your bone, you are bone from her bone. As she is flesh from your flesh, you are flesh from her flesh. As all your generations will come from her flesh and bone, children male and female who make men, so be as one being even as we are.”",
            "The Sky Father, the Great Spirit and Sky Mother spoke to the first man and first woman who together had formed all spirit and cloaked living beings within a single drop of earth.",
            "The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “Look, I have made you stewards over the living beings of the land.",
            "But those who eat plants, prior below the shallow, and now abundant upon the surface, do not take their life or consume them for your own.",
            "All plants will serve for medicine and food for every living being of the earth and sky, only those living beings who take life by creation may take the life of those living beings who eat plants.",
            "It is important for now they together do not confuse the stewards for us, and remember you are a creation of spirit and earth as well.”",
            "The first man responded, “Then how will the abundance of our generations come?”",
            "The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “I give you every seedbearing plant on the earth, and every tree that has seedbearing fruit; they will be yours for food, and you may eat the meat of animals that have died in their time, ensuring that the blood has left their earth so as to not offend their spirit.”",
            "And so, it was that a garden rose abruptly, and two great trees were seen in its midst.",
        ],
    }
    addChapterAudio(chapter);

    
    chapter = {
        id: "mto-chapter-six-en",
        title: "Chapter 6",
        subTitle: "",
        order: 8,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-six-en",
        title: "Chapter 6",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 8,
        visible: true,
        previousChapter: "mto-chapter-five-en",
        followingChapter: "mto-chapter-seven-en",
        content: [
            "1 The Great Deer walked forth to the Anishinaabe, and they marveled that with its every step a prayer was seen as the vegetation divided, and a trail appeared.",
            "2 The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “The Great Deer will guide you from this place of your creation to dwell in the midst of the Great Garden. We will meet you there to help you understand the purpose of your creation and the creation of the earth.”",
            "3 As they heard these words the Anishinaabe were afraid to enter the Garden, so they turned towards each other. Facing eye to eye, the Anishinaabe man declared,",
            "4 “I have been given strength and endurance to serve, provide for, and protect your strength and endurance, which are our generations to come.”",
            "5 They embraced and followed the Great Deer into the Garden. Upon reaching the great waters in the midst of the Garden, whose fresh water stretched in all, directions, they went to the mountain within the fresh water’s midst.",
            "6 As they climbed, they came upon a great cave, and they followed the Great Deer to the top of the mountain.",
            "7 Standing upon the mountain overlooking the expanse of nature, they watched as a great river flowed out from the many waters below traveling south.",
            "8 This great river far beyond would stretch into four directions of all the great land as the waters that had fallen upon the great land joined with it from the east and west, as it flowed from north to south.",
            "9 The river flowing from north to south being called the Great River, the river flowing from the west to east into the Great River being called the Muddy River as it flowed far across the land gathering earth.",
            "10 The river flowing from the east to west into the Great River being called the Winding River because it flows upon the garden as a snake moves.",
            "11 Many rivers flowed into these rivers from all directions and the Anishinaabe could see farther in those days before the flood.",
            "12 As they observed a great cloud rose from an island in the midst of the waters directly south, a cloud that was colored brown as the earth until it was held high into the purple sky.",
            "13 This was the Sky Mother rising to meet the Sky Father who was distant, high in the sky, so as to not be seen by the Anishinaabe.",
            "14 The Great Spirit spoke and his prayer echoed: “I see you.”",
            "15 The Anishinaabe, although recognizing the voice, still marveled and asked, as prior upon their creation they had not reasoned to asked, together the Anishinaabe asked, “who sees us?”",
            "16 In an instant lightning projected across the sky in all directions pulsating like a heartbeat, in similitude of the observed rivers, but these flowed of light extending across the sky in all directions.",
            "17 The Great Spirit spoke as one and their prayer echoed: “I AM who does this.”",
            "18 The Great Spirit’s prayer echoed across all of creation: “Of every tree in this great garden you may eat, including the tree of life, but the Tree of Knowledge, you cannot eat;",
            "19 And never can your generations eat, as it will cause your vessels formed from the drop of earth to wither and pass back to where it came from.”",
            "20 The Tree of Knowledge was not referred to as the Tree of the Knowledge of Disobedience so that the Anishinaabe man and Anishinaabe woman would not ask what disobedience is and in doing so learn of good and evil, the use of free will to disobey.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-six-en",
        title: "Chapter 6",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 8,
        visible: true,
        previousChapter: "mto-chapter-five-en",
        followingChapter: "mto-chapter-seven-en",
        content: [
            "The Great Deer walked forth to the Anishinaabe, and they marveled that with its every step a prayer was seen as the vegetation divided, and a trail appeared.",
            "The Sky Father, the Great Spirit and Sky Mother’s prayer, echoed: “The Great Deer will guide you from this place of your creation to dwell in the midst of the Great Garden. We will meet you there to help you understand the purpose of your creation and the creation of the earth.”",
            "As they heard these words the Anishinaabe were afraid to enter the Garden, so they turned towards each other. Facing eye to eye, the Anishinaabe man declared,",
            "“I have been given strength and endurance to serve, provide for, and protect your strength and endurance, which are our generations to come.”",
            "They embraced and followed the Great Deer into the Garden. Upon reaching the great waters in the midst of the Garden, whose fresh water stretched in all, directions, they went to the mountain within the fresh water’s midst.",
            "As they climbed, they came upon a great cave, and they followed the Great Deer to the top of the mountain.",
            "Standing upon the mountain overlooking the expanse of nature, they watched as a great river flowed out from the many waters below traveling south.",
            "This great river far beyond would stretch into four directions of all the great land as the waters that had fallen upon the great land joined with it from the east and west, as it flowed from north to south.",
            "The river flowing from north to south being called the Great River, the river flowing from the west to east into the Great River being called the Muddy River as it flowed far across the land gathering earth.",
            "The river flowing from the east to west into the Great River being called the Winding River because it flows upon the garden as a snake moves.",
            "Many rivers flowed into these rivers from all directions and the Anishinaabe could see farther in those days before the flood.",
            "As they observed a great cloud rose from an island in the midst of the waters directly south, a cloud that was colored brown as the earth until it was held high into the purple sky.",
            "This was the Sky Mother rising to meet the Sky Father who was distant, high in the sky, so as to not be seen by the Anishinaabe.",
            "The Great Spirit spoke and his prayer echoed: “I see you.”",
            "The Anishinaabe, although recognizing the voice, still marveled and asked, as prior upon their creation they had not reasoned to asked, together the Anishinaabe asked, “who sees us?”",
            "In an instant lightning projected across the sky in all directions pulsating like a heartbeat, in similitude of the observed rivers, but these flowed of light extending across the sky in all directions.",
            "The Great Spirit spoke as one and their prayer echoed: “I AM who does this.”",
            "The Great Spirit’s prayer echoed across all of creation: “Of every tree in this great garden you may eat, including the tree of life, but the Tree of Knowledge, you cannot eat;",
            "And never can your generations eat, as it will cause your vessels formed from the drop of earth to wither and pass back to where it came from.”",
            "The Tree of Knowledge was not referred to as the Tree of the Knowledge of Disobedience so that the Anishinaabe man and Anishinaabe woman would not ask what disobedience is and in doing so learn of good and evil, the use of free will to disobey.",
        ],
    }
    addChapterAudio(chapter);
    

    chapter = {
        id: "mto-chapter-seven-en",
        title: "Chapter 7",
        subTitle: "",
        order: 9,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-seven-en",
        title: "Chapter 7",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 9,
        visible: true,
        previousChapter: "mto-chapter-six-en",
        followingChapter: "mto-chapter-eight-en",
        content: [
            "1 The Anishinaabe having been created from earth by the Sky Father and Sky Mother in their image and form, at the direction of the Great Spirit, the Anishinaabe the perfect seventh being of Creation, understood their responsibility to bring forth kindness on the earth.",
            "2 The Anishinaabe saw themselves as a part of the Great Spirit, completely, and all living beings as equally a part of the Great Spirit;",
            "3 And they gave love and kindness unconditionally to all living beings, animate and inanimate, as saw no option to disobey as this path was not presented to them, nor found in their understanding or reasoning as a possibility.",
            "4 The Great Spirit’s prayer echoed across all of creation: “Anishinaabe man you will travel the vast distance of this Great Garden, which is upon this earth, and give to all living things, animate and inanimate, within its boundaries a name from your sound, which we have withheld so as to inform Creation who hears us now that while you are not us you speak with the authority of us.”",
            "5 The Anishinaabe man understood and remembered the names his spirit Mi-chi-boozhoo within had given to all things in spiritual form and determined that in the sound he gave each being it would be their name forever in physical form as well, and decided to name all things based on how they exist and in what they do.",
            "6 The Anishinaabe dwelt in their form, perfect in every way, but they wore no covering in their state, dwelling as all other beings upon the earth, in their form as created with no addition.",
            "7 All the levels of the sky and the earth and their dwellings were completed.",
            "8 As the six prayer concluded, it did so as the sun set, the Sky Father and Sky Mother saw all that had come into creation and now that the Anishinaabe was present upon the earth, declared in a way they both understood, that it as very good and that the Anishinaabe would bring kindness to all of Creation on the Garden.",
            "9 As the prayer concluded, The Sky Father and Sky Mother observed the Anishinaabe lying together as one and the Anishinaabe woman became pregnant with a male and female which she birthed before the end of the day, and the Anishinaabe dwelt together as father, mother, daughter and son.",
            "10 After Ode’imin gave birth to the children, as she became pregnant and gave birth within the same day, Mide bestowed upon her a new name.",
            "11 He called her \"Zhaa-ah\" in that the path of obedience is through life and generations, acknowledging that the generations would surely come and continue onward.",
            "12 And there was darkness and light, a sixth prayer.",
            "13 However, as the sixth prayer ended and the sun set, the Sky Father and Sky Mother descended to an island in the great fresh waters, and resting upon a great stone structure together as one, even as the Anishinaabe laid as one.",
            "14 And they named this island even as the earth, a turtle resting within the waters, even as the earth rests within the sky, and declared in prayer which echoed to all of creation, The work is done, commanding all of creation to rest.",
            "15 And even they rested, and there was darkness and light, a seventh prayer.",
            "16 The Anishinaabe man and woman traveled the garden and named all things in it and in doing so had many generations of children today called the Anishinaabe.",
            "17 The good spirits who are lowered and live without the curse that would come to the descendants born outside the garden with the deception that would come through the cunning of the Water Panther, that great twisting serpent.",
            "18 The Anishinaabe man and Anishinaabe woman returned to the mountain where they were first instructed to name all things and having done so presented themselves to the Great Spirit, again in the form of a mighty cloud that hid their forms.",
            "19 The Anishinaabe man declared, “I have done it.”",
            "20 The Great Spirit declared, “but we have made you as well, what are your names?”",
            "21 The Anishinaabe man declared loudly, “I have given sound and purpose to all things; I am kindness, MIDE.”",
            "22 The Anishinaabe woman declared loudly, “I bear fruit! And my fruit covers the garden with life, like the strawberry, I bear within me the fruit of life and I am the mother of all living, ODE’IMIN.”",
            "23 The Great Spirit asked, “and what is your wish for your Anishinaabe that now fill the garden?”",
            "24 The Anishinaabe man declared loudly, “that my children will follow the path of my heart, MIDEWIWIN, the way of kindness and if they do so, you will bless them!”",
            "25 The Great Spirit declared, “It will be so as long as the Anishinaabe of the Garden do not leave the path of your heart, MIDEWIWIN; we will bless them by answering their prayers above all others in creation.”",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-seven-en",
        title: "Chapter 7",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 9,
        visible: true,
        previousChapter: "mto-chapter-six-en",
        followingChapter: "mto-chapter-eight-en",
        content: [
            "The Anishinaabe having been created from earth by the Sky Father and Sky Mother in their image and form, at the direction of the Great Spirit, the Anishinaabe the perfect seventh being of Creation, understood their responsibility to bring forth kindness on the earth.",
            "The Anishinaabe saw themselves as a part of the Great Spirit, completely, and all living beings as equally a part of the Great Spirit;",
            "And they gave love and kindness unconditionally to all living beings, animate and inanimate, as saw no option to disobey as this path was not presented to them, nor found in their understanding or reasoning as a possibility.",
            "The Great Spirit’s prayer echoed across all of creation: “Anishinaabe man you will travel the vast distance of this Great Garden, which is upon this earth, and give to all living things, animate and inanimate, within its boundaries a name from your sound, which we have withheld so as to inform Creation who hears us now that while you are not us you speak with the authority of us.”",
            "The Anishinaabe man understood and remembered the names his spirit Mi-chi-boozhoo within had given to all things in spiritual form and determined that in the sound he gave each being it would be their name forever in physical form as well, and decided to name all things based on how they exist and in what they do.",
            "The Anishinaabe dwelt in their form, perfect in every way, but they wore no covering in their state, dwelling as all other beings upon the earth, in their form as created with no addition.",
            "All the levels of the sky and the earth and their dwellings were completed.",
            "As the six prayer concluded, it did so as the sun set, the Sky Father and Sky Mother saw all that had come into creation and now that the Anishinaabe was present upon the earth, declared in a way they both understood, that it as very good and that the Anishinaabe would bring kindness to all of Creation on the Garden.",
            "As the prayer concluded, The Sky Father and Sky Mother observed the Anishinaabe lying together as one and the Anishinaabe woman became pregnant with a male and female which she birthed before the end of the day, and the Anishinaabe dwelt together as father, mother, daughter and son.",
            "After Ode’imin gave birth to the children, as she became pregnant and gave birth within the same day, Mide bestowed upon her a new name.",
            "He called her \"Zhaa-ah\" in that the path of obedience is through life and generations, acknowledging that the generations would surely come and continue onward.",
            "And there was darkness and light, a sixth prayer.",
            "However, as the sixth prayer ended and the sun set, the Sky Father and Sky Mother descended to an island in the great fresh waters, and resting upon a great stone structure together as one, even as the Anishinaabe laid as one.",
            "And they named this island even as the earth, a turtle resting within the waters, even as the earth rests within the sky, and declared in prayer which echoed to all of creation, The work is done, commanding all of creation to rest.",
            "And even they rested, and there was darkness and light, a seventh prayer.",
            "The Anishinaabe man and woman traveled the garden and named all things in it and in doing so had many generations of children today called the Anishinaabe.",
            "The good spirits who are lowered and live without the curse that would come to the descendants born outside the garden with the deception that would come through the cunning of the Water Panther, that great twisting serpent.",
            "The Anishinaabe man and Anishinaabe woman returned to the mountain where they were first instructed to name all things and having done so presented themselves to the Great Spirit, again in the form of a mighty cloud that hid their forms.",
            "The Anishinaabe man declared, “I have done it.”",
            "The Great Spirit declared, “but we have made you as well, what are your names?”",
            "The Anishinaabe man declared loudly, “I have given sound and purpose to all things; I am kindness, MIDE.”",
            "The Anishinaabe woman declared loudly, “I bear fruit! And my fruit covers the garden with life, like the strawberry, I bear within me the fruit of life and I am the mother of all living, ODE’IMIN.”",
            "The Great Spirit asked, “and what is your wish for your Anishinaabe that now fill the garden?”",
            "The Anishinaabe man declared loudly, “that my children will follow the path of my heart, MIDEWIWIN, the way of kindness and if they do so, you will bless them!”",
            "The Great Spirit declared, “It will be so as long as the Anishinaabe of the Garden do not leave the path of your heart, MIDEWIWIN; we will bless them by answering their prayers above all others in creation.”",
        ],
    }
    addChapterAudio(chapter);
    

    chapter = {
        id: "mto-chapter-eight-en",
        title: "Chapter 8",
        subTitle: "",
        order: 10,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-eight-en",
        title: "Chapter 8",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 10,
        visible: true,
        previousChapter: "mto-chapter-seven-en",
        followingChapter: "mto-chapter-nine-en",
        content: [
            "1 The Water Panther, that great twisting serpent, had observed creation, and in seeing the Anishinaabe come together to make life, became full of wrath.",
            "2 For his own partner who had been removed from him for her actions in the existence before, when they had captured a third of the spirit stars and enticed them [10]into disobedience.",
            "3 And the same would occur if Anishinaabe ate from the Tree of the Knowledge of Good and Evil, and in knowing disobedience would in fact disobey due to their fullness of free will.",
            "4 The Water Panther, that great twisting serpent, was the most cunning of all the beasts that the Great Spirit had made at the direction of the Sky Father, had observed the Anishinaabe fill the garden.",
            "5 In this creation the Water Panther, that great twisting serpent, had a cunningness and determined to take the Anishinaabe woman to create physical form for the fallen spirit stars that had no physical form but dwelled instead upon the earth as shadows until the day of judgement.",
            "6 Like the Anishinaabe the Water Panther, that great twisting serpent, could stand upright upon feet and could speak, and determined to take the Anishinaabe woman to the other lands outside the garden for his fallen spirit stars to be born upon the earth.",
            "7 The Water Panther, that great twisting serpent, determined to eliminate the Anishinaabe man by convincing him to eat the fruit of the Tree of Knowledge of Disobedience, of Good and Evil and in doing so he would know the full measure of his free will, in that it was possible to disobey.",
            "8 The Water Panther, that great twisting serpent, would use the Anishinaabe woman to convince the Anishinaabe man, but wrongly assumed that she would first give the fruit to the Anishinaabe man, and he would stop her before in order to use her for the procreation of his fallen spirit stars.",
            "9 He whispered to the Anishinaabe woman while she was away from the Anishinaabe man and her family which had been born many generations in the garden, Anishinaabe born before any punishment would occur.",
            "10 “Did the Great Spirit really say, you may not eat from any of the fruit trees in the great garden?”",
            "11 The Anishinaabe woman replied to the Water Panther, that great twisting serpent,",
            "12 “We may eat from the fruit of the trees of the garden, but as to the fruit of the Tree of Knowledge, which is in the middle of the garden, the Great Spirit said, “you must not eat of it, nor touch it, as it will cause your vessels formed from the drop of earth to wither andn pass back to where it came from.””",
            "13 However, the Great Spirit had not said they could not touch it, but the Anishinaabe woman had reasoned it was poisonous and possibly the bark of the tree as well.",
            "14 The Water Panther, that great twisting serpent, pressed the Anishinaabe woman against the tree and she knew that it was not poisonous.",
            "15 The Water Panther, that great twisting serpent, said to the Anishinaabe woman, “Just as you did not perish from touching it, you will not perish from eating it.”",
            "16 The Anishinaabe woman reasoned that if the touching the tree would not harm her then certainly eating it would not as well.",
            "17 The Water Panther, that great twisting serpent, said, “Rather the Great Spirit said you cannot eat from this tree for your own good because they want you to live forever and eating the fruit will make you mortal.",
            "18 They have forbidden you out of jealousy to stop you from perfecting the world on your own by your own judgement, as they have reserved the judgement for perfecting to themselves.",
            "19 The Great Spirit knows that on the day you eat from this tree your eyes will be opened to your own potential and independent judgment as a master of your own will to perfect the world as you see fit.",
            "20 In eating the fruit of this tree you will be like the Sky Father and Sky Mother and be able to create worlds, just as they did, this is because you will know good and evil are subjective and not absolute.”",
            "21 The Water Panther, that great twisting serpent, pressed the Anishinaabe woman and spoke with her over many months while the Anishinaabe man was with their Anishinaabe people who lived the good way, Mino Bimaadiziwin.",
            "Footnote: \n10 In the time before; the pre-mortal existence."
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-eight-en",
        title: "Chapter 8",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 10,
        visible: true,
        previousChapter: "mto-chapter-seven-en",
        followingChapter: "mto-chapter-nine-en",
        content: [
            "The Water Panther, that great twisting serpent, had observed creation, and in seeing the Anishinaabe come together to make life, became full of wrath.",
            "For his own partner who had been removed from him for her actions in the existence before, when they had captured a third of the spirit stars and enticed them [10]into disobedience.",
            "And the same would occur if Anishinaabe ate from the Tree of the Knowledge of Good and Evil, and in knowing disobedience would in fact disobey due to their fullness of free will.",
            "The Water Panther, that great twisting serpent, was the most cunning of all the beasts that the Great Spirit had made at the direction of the Sky Father, had observed the Anishinaabe fill the garden.",
            "In this creation the Water Panther, that great twisting serpent, had a cunningness and determined to take the Anishinaabe woman to create physical form for the fallen spirit stars that had no physical form but dwelled instead upon the earth as shadows until the day of judgement.",
            "Like the Anishinaabe the Water Panther, that great twisting serpent, could stand upright upon feet and could speak, and determined to take the Anishinaabe woman to the other lands outside the garden for his fallen spirit stars to be born upon the earth.",
            "The Water Panther, that great twisting serpent, determined to eliminate the Anishinaabe man by convincing him to eat the fruit of the Tree of Knowledge of Disobedience, of Good and Evil and in doing so he would know the full measure of his free will, in that it was possible to disobey.",
            "The Water Panther, that great twisting serpent, would use the Anishinaabe woman to convince the Anishinaabe man, but wrongly assumed that she would first give the fruit to the Anishinaabe man, and he would stop her before in order to use her for the procreation of his fallen spirit stars.",
            "He whispered to the Anishinaabe woman while she was away from the Anishinaabe man and her family which had been born many generations in the garden, Anishinaabe born before any punishment would occur.",
            "“Did the Great Spirit really say, you may not eat from any of the fruit trees in the great garden?”",
            "The Anishinaabe woman replied to the Water Panther, that great twisting serpent,",
            "“We may eat from the fruit of the trees of the garden, but as to the fruit of the Tree of Knowledge, which is in the middle of the garden, the Great Spirit said, “you must not eat of it, nor touch it, as it will cause your vessels formed from the drop of earth to wither andn pass back to where it came from.””",
            "However, the Great Spirit had not said they could not touch it, but the Anishinaabe woman had reasoned it was poisonous and possibly the bark of the tree as well.",
            "The Water Panther, that great twisting serpent, pressed the Anishinaabe woman against the tree and she knew that it was not poisonous.",
            "The Water Panther, that great twisting serpent, said to the Anishinaabe woman, “Just as you did not perish from touching it, you will not perish from eating it.”",
            "The Anishinaabe woman reasoned that if the touching the tree would not harm her then certainly eating it would not as well.",
            "The Water Panther, that great twisting serpent, said, “Rather the Great Spirit said you cannot eat from this tree for your own good because they want you to live forever and eating the fruit will make you mortal.",
            "They have forbidden you out of jealousy to stop you from perfecting the world on your own by your own judgement, as they have reserved the judgement for perfecting to themselves.",
            "The Great Spirit knows that on the day you eat from this tree your eyes will be opened to your own potential and independent judgment as a master of your own will to perfect the world as you see fit.",
            "In eating the fruit of this tree you will be like the Sky Father and Sky Mother and be able to create worlds, just as they did, this is because you will know good and evil are subjective and not absolute.”",
            "The Water Panther, that great twisting serpent, pressed the Anishinaabe woman and spoke with her over many months while the Anishinaabe man was with their Anishinaabe people who lived the good way, Mino Bimaadiziwin.",
        ],
    }
    addChapterAudio(chapter);

    chapter = {
        id: "mto-chapter-nine-en",
        title: "Chapter 9",
        subTitle: "",
        order: 11,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-nine-en",
        title: "Chapter 9",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 11,
        visible: true,
        previousChapter: "mto-chapter-seven-en",
        followingChapter: "mto-chapter-nine-en",
        content: [
            "1 One fall, The Water Panther, that great twisting serpent, convinced the Anishinaabe woman, who had become used to the tree, that it was good for eating because it would make them godlike, and each day the fruit had become more desirable to her eyes because it would open her eyes and her Anishinaabe children’s eyes to their own potential,",
            "2 And that the tree was attractive as a way to gain further intelligence because it would help them to know good and evil subjective to their own judgment.",
            "3 On her own, the first Anishinaabe woman, as there were now many, decided to eat the fruit and without the Water Panther, that great twisting serpent knowing, she took some of its fruit herself and ate.",
            "4 When Mide, the first Anishinaabe man, as there were now many, Ode’imin described the fruit and how it was neither poisonous to touch or eat and repeated the claims of the great twisting serpent.",
            "5 Ode’imin spoke a great length of time with Mide who marveled at how her physical appearance had changed since eating the fruit. Ode’imin wept greatly with Mide that she did not want to die and leave Mide to marry someone else, in that now there were many generations living in the garden.",
            "6 Mide knew the fruit was not to be eaten and was confused that Ode’imin ate it and was asking him to eat it. Ode’imin gave the fruit to Mide and pleaded with him to eat it and because of his confusion on the matter he ate.",
            "7 Ode’imin also provided the fruit to the animals that were in the garden. In this moment both Mide and Ode’imin now were aware that their original state was changed.",
            "8 Mide and Ode’imin no longer felt connected as part of the Great Spirit and dwelt as detached living beings.",
            "9 Mide and Ode’imin were aware they were naked, and they took leaves from the Tree of the Knowledge of Disobedience and made coverings for their bodies.",
            "10 While Mide and Ode’imin were yet covering themselves, the Sky Father and the Great Spirit entered the garden as they did every afternoon prior to the end of the day, but Mide and Ode’imin hid themselves by climbing into the trees.",
            "11 The Sky Father, with the Great Spirit, knew where Mide was and hoped for Mide to regret immediately his actions of disobedience so the Sky Father called to Mide, and his prayer echoed all of creation, “Mide where are you?”",
            "12 Mide spoke with a shaking voice and tears poured from his eyes, “I heard your voices in the garden and we were afraid because we had no covering for our forms so we hid in the trees.”",
            "13 The Sky Father and the Great Spirit were aware that Mide and Ode’imin ate the fruit of the Tree of the Knowledge of Disobedience, in that its fruit carried the knowledge of the trees to act in creation of disobeying its Creator and in doing so Mide and Ode’imin became aware that it was possible to use their free will as well in opposition to what the Creators had informed them.",
            "14 The Sky Father and the Great Spirit gave to Mide another opportunity to regret with voice his decision and asked Mide, in a low whisper so that only Mide would hear them as it was possible that Mide was embarrassed before creation, as he was made in the image of the Sky Father and Great Spirit,",
            "15 “Who told you that you needed covering and why do you feel you need covering when all other creations lack cover? Did you eat from the tree which the Great Spirit had commanded you not to eat? Mide you obviously did otherwise you would not feel you need covering.”",
            "16 Mide displayed a flaw, similar to that of the Water Panther, that twisting serpent, deception and blaming his creators, which surprised the Sky Father.",
            "17 Mide spoke boldy, pointing his finger angrily at the Sky Father and the Great Spirit, saying: “The woman YOU gave me and told me to provide for and protect so that our generations could come at the fruit of the tree, has done it so that I would have no purpose in being if I was left alone, and so I had no choice but to eat the fruit to obey your command to remain with her and to provide for and protect her so that our generations could come.",
            "18 I thought that you made her this way to do this thing to see if I would stay with her, so I ate the fruit.”",
            "19 Mide showed character similar to the Water Panther, the great twisting serpent, from the council before creation, in blaming his actions on that of his partner fashioned for him, even as the Water Panther, the twisting serpent had likewise done with his spirit partner Dibikongkwe.",
            "20 Even in this was a degree of regret and Mide and Ode’imin visibly in their tears were seen the spirit of remorse so the Sky Father directed the Great Spirit to change their judgement so that they would not die immediately, as they were aging visibly fast in a short period of time from the youth of what is a teenager at their creation into that of those in young adult.",
            "21 The Great Spirit made them mortal and with an echo of sound their aging was halted, and their skin regained a youthful color, their hair changed from white yellowish to pitch black, whereas before they had a continual white glowing in their form like that of the sun shining.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-nine-en",
        title: "Chapter 9",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 11,
        visible: true,
        previousChapter: "mto-chapter-seven-en",
        followingChapter: "mto-chapter-nine-en",
        content: [
            "One fall, The Water Panther, that great twisting serpent, convinced the Anishinaabe woman, who had become used to the tree, that it was good for eating because it would make them godlike, and each day the fruit had become more desirable to her eyes because it would open her eyes and her Anishinaabe children’s eyes to their own potential,",
            "And that the tree was attractive as a way to gain further intelligence because it would help them to know good and evil subjective to their own judgment.",
            "On her own, the first Anishinaabe woman, as there were now many, decided to eat the fruit and without the Water Panther, that great twisting serpent knowing, she took some of its fruit herself and ate.",
            "When Mide, the first Anishinaabe man, as there were now many, Ode’imin described the fruit and how it was neither poisonous to touch or eat and repeated the claims of the great twisting serpent.",
            "Ode’imin spoke a great length of time with Mide who marveled at how her physical appearance had changed since eating the fruit. Ode’imin wept greatly with Mide that she did not want to die and leave Mide to marry someone else, in that now there were many generations living in the garden.",
            "Mide knew the fruit was not to be eaten and was confused that Ode’imin ate it and was asking him to eat it. Ode’imin gave the fruit to Mide and pleaded with him to eat it and because of his confusion on the matter he ate.",
            "Ode’imin also provided the fruit to the animals that were in the garden. In this moment both Mide and Ode’imin now were aware that their original state was changed.",
            "Mide and Ode’imin no longer felt connected as part of the Great Spirit and dwelt as detached living beings.",
            "Mide and Ode’imin were aware they were naked, and they took leaves from the Tree of the Knowledge of Disobedience and made coverings for their bodies.",
            "While Mide and Ode’imin were yet covering themselves, the Sky Father and the Great Spirit entered the garden as they did every afternoon prior to the end of the day, but Mide and Ode’imin hid themselves by climbing into the trees.",
            "The Sky Father, with the Great Spirit, knew where Mide was and hoped for Mide to regret immediately his actions of disobedience so the Sky Father called to Mide, and his prayer echoed all of creation, “Mide where are you?”",
            "Mide spoke with a shaking voice and tears poured from his eyes, “I heard your voices in the garden and we were afraid because we had no covering for our forms so we hid in the trees.”",
            "The Sky Father and the Great Spirit were aware that Mide and Ode’imin ate the fruit of the Tree of the Knowledge of Disobedience, in that its fruit carried the knowledge of the trees to act in creation of disobeying its Creator and in doing so Mide and Ode’imin became aware that it was possible to use their free will as well in opposition to what the Creators had informed them.",
            "The Sky Father and the Great Spirit gave to Mide another opportunity to regret with voice his decision and asked Mide, in a low whisper so that only Mide would hear them as it was possible that Mide was embarrassed before creation, as he was made in the image of the Sky Father and Great Spirit,",
            "“Who told you that you needed covering and why do you feel you need covering when all other creations lack cover? Did you eat from the tree which the Great Spirit had commanded you not to eat? Mide you obviously did otherwise you would not feel you need covering.”",
            "Mide displayed a flaw, similar to that of the Water Panther, that twisting serpent, deception and blaming his creators, which surprised the Sky Father.",
            "Mide spoke boldy, pointing his finger angrily at the Sky Father and the Great Spirit, saying: “The woman YOU gave me and told me to provide for and protect so that our generations could come at the fruit of the tree, has done it so that I would have no purpose in being if I was left alone, and so I had no choice but to eat the fruit to obey your command to remain with her and to provide for and protect her so that our generations could come.",
            "I thought that you made her this way to do this thing to see if I would stay with her, so I ate the fruit.”",
            "Mide showed character similar to the Water Panther, the great twisting serpent, from the council before creation, in blaming his actions on that of his partner fashioned for him, even as the Water Panther, the twisting serpent had likewise done with his spirit partner Dibikongkwe.",
            "Even in this was a degree of regret and Mide and Ode’imin visibly in their tears were seen the spirit of remorse so the Sky Father directed the Great Spirit to change their judgement so that they would not die immediately, as they were aging visibly fast in a short period of time from the youth of what is a teenager at their creation into that of those in young adult.",
            "The Great Spirit made them mortal and with an echo of sound their aging was halted, and their skin regained a youthful color, their hair changed from white yellowish to pitch black, whereas before they had a continual white glowing in their form like that of the sun shining.",
        ],
    }
    addChapterAudio(chapter);


    chapter = {
        id: "mto-chapter-ten-en",
        title: "Chapter 10",
        subTitle: "",
        order: 12,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-ten-en",
        title: "Chapter 10",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 12,
        visible: true,
        previousChapter: "mto-chapter-nine-en",
        followingChapter: "mto-chapter-eleven-en",
        content: [
            "1 The Sky Mother rose up, in order to show balance and compassion as the mother always corrects the daughter, and spoke to Ode’imin directly, saying: “Ode’imin what is it you have done?”",
            "2 As The Sky Father, the Great Spirit and Mide watched and listened, the Sky Mother gave Ode’imin the ability to take responsibility for the mistake and to explain in full all that the Water Panther, that great twisting serpent, had told her.",
            "3 Ode’imin admitted fault, saying: “The Water Panther, the great twisting serpent, has deceived me, and so I ate the fruit.”",
            "4 The Sky Mother called the Water Panther, the great twisting serpent, to present himself and he appeared from the waters close by where he had been observing.",
            "5 The Sky Mother asked Ode’imin, “does the Water Panther, speak in greater authority than your Creator?”",
            "6 Ode’imin replied, “no Sky Mother.”",
            "7 The Sky Mother spoke immediately to the Water Panther, “I recognized you before the Sky Father and stood up for you in commanding the Great Spirit to allow you the ability to have earthly form for your rebellious spirit.",
            "8 It was I who gifted to you the power of speaking, and even in this empathy for your fall, you sought to use these gifts you did not earn to lead my daughter Ode’imin, even the Sky Woman, to disobey!?”",
            "9 The Sky Mother’s voice rose in volume as she spoke until all of creation withdrew in fear of what should come, with even the Sky Father and the Great Spirit stepping backwards.",
            "10 The Sky Mother continued, “Because you did this, diminishing my daughter before creation, I personally will repay your action with equal action, and diminish you.",
            "11 I remove your ability to speak and place you below all the creatures of creation which I have brought forth to honor the Sky Father and the Great Spirit; hence forth, your voice will only be a great hiss.",
            "12 I remove your arms and legs and you will eat dust all the days of your life, which I now reduce in length; and when your body returns to the dust which you will now eat as you crawl,",
            "13 Your spirit will be heard only by those spirit stars you brought to this earth so that only through them may you torment man further; and Water Panther they may not obey you, and in doing so they will find forgiveness.",
            "14 So truly I have turned now all of creation against you, whom I wept for, and now those tears are dried up, even as the dust you will eat all the days of your life.”",
            "15 The Sky Mother herself tore the arms and legs off the Water Panther who screamed in such pain that all of creation shook as a great earth quaking.",
            "16 The Sky Mother in anger echoed to all of creation in her manner of speaking to the now shaking Water Panther, saying: “You wanted to remove Mide and to take Ode’imin to produce offspring. I hear all things my ancient son.",
            "17 Instead, I now in doing these things place hatred between you and the woman, and between your offspring, those spirit stars who were cast down with you, who are now bound with the serpents, and her offspring. They will crush your head, and perceived crown, as you seek to bite them in the heels.”",
            "18 The Sky Mother spoke to Ode’imin, “I will greatly increase your difficulty in raising children and your births will be extended.",
            "19 Whereas you prior gave birth within the day, with no pain, to children that grew instantly even as you when formed, now you will endure the duration of your conversation with the Serpent, even nine months, and carry the struggle of raising your children from their birth even until they are as you now in age. You will now give birth in anguish and pain.",
            "20 You will long for your husband but despite your longing he will dominate you.”",
            "21 The Sky Mother continued, \"For the children you have already borne, their lives will be shortened to match future generations, preventing pride from elevating them above their parents. It is not good for children to look down upon their elders.",
            "22 Though their vessels will eventually return to dust, they did not commit the offense and are not fully under your judgment. Therefore, they will remain in the garden and, upon death, enter paradise. Each generation living will be renewed to encourage obedience.",
            "23 Your future generations, born outside the garden under the offense, will be cursed to dwell in darkness, bound to the dust of their mortal forms until the Great Spirit takes earthly form to atone for your transgression.",
            "24 In time, these future generations will return to the garden. The Anishinaabe within the garden will be blessed or judged based on their unity with the creator's plan for perfecting the earth, sustaining harmony as stewards of creation.",
            "25 If those born under judgment return to the good way, they will find forgiveness. If not, they may prosper briefly in their disobedience, which will serve as a record of judgment against them.",
            "26 Should the Anishinaabe in the garden, whom I allow to remain while you cannot, permit the garden's destruction or their character to deviate from the good way, they will face condemnation. The garden will diminish until the eighth era of restoration.”",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-ten-en",
        title: "Chapter 10",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 12,
        visible: true,
        previousChapter: "mto-chapter-nine-en",
        followingChapter: "mto-chapter-eleven-en",
        content: [
            "The Sky Mother rose up, in order to show balance and compassion as the mother always corrects the daughter, and spoke to Ode’imin directly, saying: “Ode’imin what is it you have done?”",
            "As The Sky Father, the Great Spirit and Mide watched and listened, the Sky Mother gave Ode’imin the ability to take responsibility for the mistake and to explain in full all that the Water Panther, that great twisting serpent, had told her.",
            "Ode’imin admitted fault, saying: “The Water Panther, the great twisting serpent, has deceived me, and so I ate the fruit.”",
            "The Sky Mother called the Water Panther, the great twisting serpent, to present himself and he appeared from the waters close by where he had been observing.",
            "The Sky Mother asked Ode’imin, “does the Water Panther, speak in greater authority than your Creator?”",
            "Ode’imin replied, “no Sky Mother.”",
            "The Sky Mother spoke immediately to the Water Panther, “I recognized you before the Sky Father and stood up for you in commanding the Great Spirit to allow you the ability to have earthly form for your rebellious spirit.",
            "It was I who gifted to you the power of speaking, and even in this empathy for your fall, you sought to use these gifts you did not earn to lead my daughter Ode’imin, even the Sky Woman, to disobey!?”",
            "The Sky Mother’s voice rose in volume as she spoke until all of creation withdrew in fear of what should come, with even the Sky Father and the Great Spirit stepping backwards.",
            "The Sky Mother continued, “Because you did this, diminishing my daughter before creation, I personally will repay your action with equal action, and diminish you.",
            "I remove your ability to speak and place you below all the creatures of creation which I have brought forth to honor the Sky Father and the Great Spirit; hence forth, your voice will only be a great hiss.",
            "I remove your arms and legs and you will eat dust all the days of your life, which I now reduce in length; and when your body returns to the dust which you will now eat as you crawl,",
            "Your spirit will be heard only by those spirit stars you brought to this earth so that only through them may you torment man further; and Water Panther they may not obey you, and in doing so they will find forgiveness.",
            "So truly I have turned now all of creation against you, whom I wept for, and now those tears are dried up, even as the dust you will eat all the days of your life.”",
            "The Sky Mother herself tore the arms and legs off the Water Panther who screamed in such pain that all of creation shook as a great earth quaking.",
            "The Sky Mother in anger echoed to all of creation in her manner of speaking to the now shaking Water Panther, saying: “You wanted to remove Mide and to take Ode’imin to produce offspring. I hear all things my ancient son.",
            "Instead, I now in doing these things place hatred between you and the woman, and between your offspring, those spirit stars who were cast down with you, who are now bound with the serpents, and her offspring. They will crush your head, and perceived crown, as you seek to bite them in the heels.”",
            "The Sky Mother spoke to Ode’imin, “I will greatly increase your difficulty in raising children and your births will be extended.",
            "Whereas you prior gave birth within the day, with no pain, to children that grew instantly even as you when formed, now you will endure the duration of your conversation with the Serpent, even nine months, and carry the struggle of raising your children from their birth even until they are as you now in age. You will now give birth in anguish and pain.",
            "You will long for your husband but despite your longing he will dominate you.”",
            "The Sky Mother continued, \"For the children you have already borne, their lives will be shortened to match future generations, preventing pride from elevating them above their parents. It is not good for children to look down upon their elders.",
            "Though their vessels will eventually return to dust, they did not commit the offense and are not fully under your judgment. Therefore, they will remain in the garden and, upon death, enter paradise. Each generation living will be renewed to encourage obedience.",
            "Your future generations, born outside the garden under the offense, will be cursed to dwell in darkness, bound to the dust of their mortal forms until the Great Spirit takes earthly form to atone for your transgression.",
            "In time, these future generations will return to the garden. The Anishinaabe within the garden will be blessed or judged based on their unity with the creator's plan for perfecting the earth, sustaining harmony as stewards of creation.",
            "If those born under judgment return to the good way, they will find forgiveness. If not, they may prosper briefly in their disobedience, which will serve as a record of judgment against them.",
            "Should the Anishinaabe in the garden, whom I allow to remain while you cannot, permit the garden's destruction or their character to deviate from the good way, they will face condemnation. The garden will diminish until the eighth era of restoration.”",
        ],
    }

    addChapterAudio(chapter);

    chapter = {
        id: "mto-chapter-eleven-en",
        title: "Chapter 11",
        subTitle: "",
        order: 13,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-eleven-en",
        title: "Chapter 11",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 13,
        visible: true,
        previousChapter: "mto-chapter-ten-en",
        followingChapter: "mto-chapter-twelve-en",
        content: [
            "1 The Sky Father, observing the judgment passed by the Sky Mother, sought to restore balance and addressed Mide, saying: \"Because you have disobeyed and placed your wife's request above that of your creators, and partook of the forbidden tree...\"",
            "2 The Sky Father's countenance grew stern, \"Mide, did I not command you, 'Do not eat from it?'\"",
            "3 He continued, \"The earth, from which your body was formed by my hands, shares in your disobedience. Consequently, the lands beyond the garden will now be a source of suffering.",
            "4 I will also judge the fruitbearing trees for their failure to produce bark as nourishing as their fruit. Henceforth, the earth will yield all manner of insects, whose purpose is to devour your sustenance, making the cultivation of food a struggle for you and your generations condemned to toil.",
            "5 \"In the garden, you have no concern for food, but outside its bounds, you will toil and sweat for your sustenance until you return to the earth.",
            "6 As you were formed from the earth, you must learn the established way of perfecting it. You are but a grain of the earth, and in your mortality, you shall return to the dust from which you came.\"",
            "7 Upon seeing the leaves Mide and Ode’imin had used to cover themselves, the Sky Father and Sky Mother fashioned garments from the skin of the great deer, who offered himself as a sacrifice.",
            "8 In remembrance of this moment, the Anishinaabe generations who remained in the garden would also cover themselves in deer skin, honoring their parents who were cast out. These coverings fit as tight as their own skin.",
            "9 The Sky Father gently placed the coverings upon Mide, while the Sky Mother did the same for Ode’imin, demonstrating the kindness and compassion of parents toward their children, even in the face of disobedience.",
            "10 The Sky Father said, \"Behold, just as I am unmatched in the sky worlds, so too are you, Mide and Ode’imin, unmatched on the earth, now possessing the knowledge of right and wrong as it pertains to each situation.",
            "11 However, you are now independent and incomplete without the spirit of your creators, which must be withdrawn, for you have chosen to be the architects of happiness on earth. Yet, you will falter, as you lack the understanding needed to balance the heart's desires with the mind's intentions.\"",
            "12 The Sky Mother addressed the Sky Father openly, \"Now that they possess understanding akin to the Great Spirit, yet lack his wisdom, what if they were to take from the Tree of Life and, by eating its fruit, live forever? Would this not lead all of creation to recognize them as creators in their own right?\"",
            "13 The Great Spirit interjected in the conversation, saying, \"Ode’imin and Mide, you must leave the garden. Encourage your generations of Anishinaabe who remain to follow the good way, so they too will not be cast out.",
            "14 From now on, you will be known as those who struggle with their creators. We hope you will overcome, be blessed, and return one day. However, I foresee that as your generations return, following a destruction by water and later by conquest,",
            "15 They may be overcome by pride and greed, threatening the very existence of this garden. I fear you do not fully comprehend the potential devastation awaiting your generations born under condemnation, unless they are grafted into the Anishinaabe and live by the good way.\"",
            "16 The Sky Father and Sky Mother departed, with one ascending to the sky lodge and the other becoming the spirit within the earth. Meanwhile, the Great Spirit compelled Mide and Ode’imin to leave the garden, guiding them on the land that led across the waters to the east of Eden, the very waters Mide had first gazed upon as the sun set on the day of his creation.",
            "17 The Great Spirit foresaw their future generations, born under condemnation, returning across those waters, when the land was under the water. With free will offering paths of both greed and love, there was a concern that, faced with the hardships of the land beyond and the garden's abundance, they might return in conquest, potentially leading even the Anishinaabe into bondage or destruction.",
            "18 As Mide and Ode’imin departed the garden, traveling north and eastward across the land, where the waters, different before the great flood, remained mostly in the sky and beneath the earth's surface, the grandfather sun transformed.",
            "19 What had once been visible became obscured, replaced by a new and blinding light. This change rendered the Tree of Life, which was made of a material unlike that of the earth, invisible even to the Anishinaabe within the garden.",
            "20 At the beginning of creation, the Tree of Life had descended from the sky world with the Sky Woman, who passed through its roots to the lower world before it was lowered.",
            "21 Had Mide and Ode’imin not eaten the fruit from the Tree of Knowledge, in due time, when the Spirit Stars, now dwelling as Anishinaabe, had experienced families and established their identities, if they had not done so on their own, they and their parents would have been led to the Tree of Life.",
            "22 Upon eating its fruit, their bodies would have transformed into a form and structure akin to that of the Sky Father and Sky Mother, who are of a different substance than the matter of the earth and sky. They would have departed with the Sky Father and Sky Mother, much like a child leaving the womb.",
            "23 This is to say that the earth and all that lies above it exist in the sky world like seeds in the blueberry or children in a womb, within which the Anishinaabe dwell until they are raised up.",
            "24 The Tree of Knowledge, also known as the Tree of the Knowledge of Disobedience, had lost its initial power, as the knowledge of its first disobedience had been imparted to Mide and Ode’imin when they ate its fruit.",
            "25 To prevent any more Anishinaabe from falling under its judgment, it was removed from the garden, where it is not found again, and cast into the deserts of foreign lands.",
            "26 In enmity, the Great Spirit declared, \"May you never bear fruit properly again!\" Consequently, where the tree and its offspring were found, they grew sporadically, producing fruit out of season, a tree of confusion. Nothing else would grow around them due to their condemnation.",
        ],
    }
    addChapterText(chapter);
    chapter = {
        id: "mto-chapter-eleven-en",
        title: "Chapter 11",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 13,
        visible: true,
        previousChapter: "mto-chapter-ten-en",
        followingChapter: "mto-chapter-twelve-en",
        content: [
            "The Sky Father, observing the judgment passed by the Sky Mother, sought to restore balance and addressed Mide, saying: \"Because you have disobeyed and placed your wife's request above that of your creators, and partook of the forbidden tree...\"",
            "The Sky Father's countenance grew stern, \"Mide, did I not command you, 'Do not eat from it?'\"",
            "He continued, \"The earth, from which your body was formed by my hands, shares in your disobedience. Consequently, the lands beyond the garden will now be a source of suffering.",
            "I will also judge the fruitbearing trees for their failure to produce bark as nourishing as their fruit. Henceforth, the earth will yield all manner of insects, whose purpose is to devour your sustenance, making the cultivation of food a struggle for you and your generations condemned to toil.",
            "\"In the garden, you have no concern for food, but outside its bounds, you will toil and sweat for your sustenance until you return to the earth.",
            "As you were formed from the earth, you must learn the established way of perfecting it. You are but a grain of the earth, and in your mortality, you shall return to the dust from which you came.\"",
            "Upon seeing the leaves Mide and Ode’imin had used to cover themselves, the Sky Father and Sky Mother fashioned garments from the skin of the great deer, who offered himself as a sacrifice.",
            "In remembrance of this moment, the Anishinaabe generations who remained in the garden would also cover themselves in deer skin, honoring their parents who were cast out. These coverings fit as tight as their own skin.",
            "The Sky Father gently placed the coverings upon Mide, while the Sky Mother did the same for Ode’imin, demonstrating the kindness and compassion of parents toward their children, even in the face of disobedience.",
            "The Sky Father said, \"Behold, just as I am unmatched in the sky worlds, so too are you, Mide and Ode’imin, unmatched on the earth, now possessing the knowledge of right and wrong as it pertains to each situation.",
            "However, you are now independent and incomplete without the spirit of your creators, which must be withdrawn, for you have chosen to be the architects of happiness on earth. Yet, you will falter, as you lack the understanding needed to balance the heart's desires with the mind's intentions.\"",
            "The Sky Mother addressed the Sky Father openly, \"Now that they possess understanding akin to the Great Spirit, yet lack his wisdom, what if they were to take from the Tree of Life and, by eating its fruit, live forever? Would this not lead all of creation to recognize them as creators in their own right?\"",
            "The Great Spirit interjected in the conversation, saying, \"Ode’imin and Mide, you must leave the garden. Encourage your generations of Anishinaabe who remain to follow the good way, so they too will not be cast out.",
            "From now on, you will be known as those who struggle with their creators. We hope you will overcome, be blessed, and return one day. However, I foresee that as your generations return, following a destruction by water and later by conquest,",
            "They may be overcome by pride and greed, threatening the very existence of this garden. I fear you do not fully comprehend the potential devastation awaiting your generations born under condemnation, unless they are grafted into the Anishinaabe and live by the good way.\"",
            "The Sky Father and Sky Mother departed, with one ascending to the sky lodge and the other becoming the spirit within the earth. Meanwhile, the Great Spirit compelled Mide and Ode’imin to leave the garden, guiding them on the land that led across the waters to the east of Eden, the very waters Mide had first gazed upon as the sun set on the day of his creation.",
            "The Great Spirit foresaw their future generations, born under condemnation, returning across those waters, when the land was under the water. With free will offering paths of both greed and love, there was a concern that, faced with the hardships of the land beyond and the garden's abundance, they might return in conquest, potentially leading even the Anishinaabe into bondage or destruction.",
            "As Mide and Ode’imin departed the garden, traveling north and eastward across the land, where the waters, different before the great flood, remained mostly in the sky and beneath the earth's surface, the grandfather sun transformed.",
            "What had once been visible became obscured, replaced by a new and blinding light. This change rendered the Tree of Life, which was made of a material unlike that of the earth, invisible even to the Anishinaabe within the garden.",
            "At the beginning of creation, the Tree of Life had descended from the sky world with the Sky Woman, who passed through its roots to the lower world before it was lowered.",
            "Had Mide and Ode’imin not eaten the fruit from the Tree of Knowledge, in due time, when the Spirit Stars, now dwelling as Anishinaabe, had experienced families and established their identities, if they had not done so on their own, they and their parents would have been led to the Tree of Life.",
            "Upon eating its fruit, their bodies would have transformed into a form and structure akin to that of the Sky Father and Sky Mother, who are of a different substance than the matter of the earth and sky. They would have departed with the Sky Father and Sky Mother, much like a child leaving the womb.",
            "This is to say that the earth and all that lies above it exist in the sky world like seeds in the blueberry or children in a womb, within which the Anishinaabe dwell until they are raised up.",
            "The Tree of Knowledge, also known as the Tree of the Knowledge of Disobedience, had lost its initial power, as the knowledge of its first disobedience had been imparted to Mide and Ode’imin when they ate its fruit.",
            "To prevent any more Anishinaabe from falling under its judgment, it was removed from the garden, where it is not found again, and cast into the deserts of foreign lands.",
            "In enmity, the Great Spirit declared, \"May you never bear fruit properly again!\" Consequently, where the tree and its offspring were found, they grew sporadically, producing fruit out of season, a tree of confusion. Nothing else would grow around them due to their condemnation.",
        ],
    }
    addChapterAudio(chapter);


    chapter = {
        id: "mto-chapter-twelve-en",
        title: "Chapter 12",
        subTitle: "",
        order: 14,
        parent: "miskwaabik-teaching-one-en",
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "mto-chapter-twelve-en",
        title: "Chapter 12",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 14,
        visible: true,
        previousChapter: "mto-chapter-eleven-en",
        followingChapter: "",
        content: [
            "1 To the north of the garden, with the change in Grandfather Sun, lights revolved like a rainbow blade, flashing to deter any reentry into the garden from the paths leading in from the east and west. In time the rainbow blade would be lifted into the sky allowing reentry into the garden.",
            "2 The first children that Ode’imin birthed after the judgment and command to leave the garden were named Kaa-iin, symbolizing a stem of abundance, and Gashbinesikwe, reflecting her birth as a strength through hardship due to complications during the first birth under judgment.",
            "3 As they walked, it took the entire pregnancy plus an additional month, 10 months in total, for them to make their way out of the garden, heading north and east.",
            "4 Mide and Ode’imin intentionally traveled slowly, sleeping and resting frequently in the hopes that the Great Spirit would show mercy and hear their prayers for a restoration of their prior state of unity with the Sky Father and Sky Mother.",
            "5 Unfortunately Ode’imin was prevented by the Great Spirit from giving birth in the garden so as to not offend the command of the Sky Father and Sky Mother to depart the garden and the Great Spirit did not want to have to remove the children from the parents and allow them to stay in the garden as they were not at fault for their parents deeds while they would suffer still enough.",
            "6 Ode’imin gave birth one blade of grass beyond the last tree setting the boundaries of the garden, and the Great Spirit declared to Mide that in the future a great water would surround this spot forming an island, with the waters making it more difficult to reenter the garden.",
            "7 For he knew one day the Anishinaabe who remained in the garden would suffer at the hands of those who returned, so although the world was not fashioned as it would become, the Great Spirit foresaw the disobedience that would bring the great flooding.",
            "8 The Great Spirit also saw that from this very land that Kaa-iin and Gashbinesikwe’s descendants would seek to control the entire earth in order to return to the the garden from what would become an island.",
            "9 Following the birth, the Great Spirit spoke to Mide and Ode’imin as their prayers and sorrow had rested heavily upon him, saying: “Mide and Ode’imin, I have heard your pleas.",
            "10 While you must be removed for your own good, so that you do not eat from the Tree of Life and remain in disobedience forever, I will, in time, come to your descendants as a deliverer to correct your wrongs and allow your family to return to the garden.",
            "11 However, if your family in that age and beyond returns to the garden with greed and harms the Anishinaabe and the first garden, they will suffer greatly at my hand, as I will not be mocked in my redemption for you.",
            "12 Teach your children to live the good way and to follow the seven sacred laws so that they become chosen among all the nations that will arise.",
            "13 They shall be distinguished for their unity with me, while other nations may rise in division with me and with each other.\"",
        ],
    }
    addChapterText(chapter);

    chapter = {
        id: "mto-chapter-twelve-en",
        title: "Chapter 12",
        subTitle: "",
        parent: "miskwaabik-teaching-one-en",
        order: 14,
        visible: true,
        previousChapter: "mto-chapter-eleven-en",
        followingChapter: "",
        content: [
            "To the north of the garden, with the change in Grandfather Sun, lights revolved like a rainbow blade, flashing to deter any reentry into the garden from the paths leading in from the east and west. In time the rainbow blade would be lifted into the sky allowing reentry into the garden.",
            "The first children that Ode’imin birthed after the judgment and command to leave the garden were named Kaa-iin, symbolizing a stem of abundance, and Gashbinesikwe, reflecting her birth as a strength through hardship due to complications during the first birth under judgment.",
            "As they walked, it took the entire pregnancy plus an additional month, 10 months in total, for them to make their way out of the garden, heading north and east.",
            "Mide and Ode’imin intentionally traveled slowly, sleeping and resting frequently in the hopes that the Great Spirit would show mercy and hear their prayers for a restoration of their prior state of unity with the Sky Father and Sky Mother.",
            "Unfortunately Ode’imin was prevented by the Great Spirit from giving birth in the garden so as to not offend the command of the Sky Father and Sky Mother to depart the garden and the Great Spirit did not want to have to remove the children from the parents and allow them to stay in the garden as they were not at fault for their parents deeds while they would suffer still enough.",
            "Ode’imin gave birth one blade of grass beyond the last tree setting the boundaries of the garden, and the Great Spirit declared to Mide that in the future a great water would surround this spot forming an island, with the waters making it more difficult to reenter the garden.",
            "For he knew one day the Anishinaabe who remained in the garden would suffer at the hands of those who returned, so although the world was not fashioned as it would become, the Great Spirit foresaw the disobedience that would bring the great flooding.",
            "The Great Spirit also saw that from this very land that Kaa-iin and Gashbinesikwe’s descendants would seek to control the entire earth in order to return to the the garden from what would become an island.",
            "Following the birth, the Great Spirit spoke to Mide and Ode’imin as their prayers and sorrow had rested heavily upon him, saying: “Mide and Ode’imin, I have heard your pleas.",
            "While you must be removed for your own good, so that you do not eat from the Tree of Life and remain in disobedience forever, I will, in time, come to your descendants as a deliverer to correct your wrongs and allow your family to return to the garden.",
            "However, if your family in that age and beyond returns to the garden with greed and harms the Anishinaabe and the first garden, they will suffer greatly at my hand, as I will not be mocked in my redemption for you.",
            "Teach your children to live the good way and to follow the seven sacred laws so that they become chosen among all the nations that will arise.",
            "They shall be distinguished for their unity with me, while other nations may rise in division with me and with each other.\"",
        ],
    }
    addChapterAudio(chapter);
*/

    res.send("Miskwaabik Added");
})

copper.get("/removeMiskwaabik", function (req, res) {

    book = {
        id: "miskwaabik-en",
    }
    removeBook(book);

    book = {
        id: "miskwaabik-teaching-one-en",
    }
    removeBook(book);

    chapter = {
        id: "mto-intro-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-intro-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-intro-en",
    }
    removeChapterAudio(chapter);

    chapter = {
        id: "mto-men-are-friends-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-men-are-friends-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-men-are-friends-en",
    }
    removeChapterAudio(chapter);

    chapter = {
        id: "mto-chapter-one-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-one-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-one-en",
    }
    removeChapterAudio(chapter);

    chapter = {
        id: "mto-chapter-two-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-two-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-two-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "mto-chapter-three-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-three-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-three-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "mto-chapter-four-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-four-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-four-en",
    }
    removeChapterAudio(chapter);

    chapter = {
        id: "mto-chapter-five-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-five-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-five-en",
    }
    chapter = {
        id: "mto-chapter-six-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-six-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-six-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "mto-chapter-seven-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-seven-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-seven-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "mto-chapter-eight-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-eight-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-eight-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "mto-chapter-nine-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-nine-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-nine-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "mto-chapter-ten-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-ten-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-ten-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "mto-chapter-eleven-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-eleven-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-eleven-en",
    }
    removeChapterAudio(chapter);
    chapter = {
        id: "mto-chapter-twelve-en",
    }
    removeChapter(chapter);
    chapter = {
        id: "mto-chapter-twelve-en",
    }
    removeChapterText(chapter);
    chapter = {
        id: "mto-chapter-twelve-en",
    }
    removeChapterAudio(chapter);

    res.send("Miskwaabik Removed");
});

//module.exports = copper;