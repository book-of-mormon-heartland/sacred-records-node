import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function (req, res) {
    let book = {};
    let chapter = {};
/*
    book = {
        id: "yahawzhowaa-en",
        title: "The Red Plates of Copper and Gold",
        subTitle: "The Plates of Yahawzhowaa",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-171x214.jpg",
        thumbnailTitle: "Yahawzhowaa",
        Description: "An abridgment of the records, visions, and testimonies engraven upon the Red Plates of copper and gold, containing the history and covenants of the people of the light from the first garden upon the Southern Land of Endless Day, through their journey into darkness and the days of counting, their deliverance from the hand of the Serpent, and their inheritance upon the Breast of the Turtle. Also containing the words and doings of Yahawzhowaa.",
        priceText: "Subscription",
        price: 9.99,
        isParent: true,
        hasChildBooks: false,
        order: 1,
        parent: "",
        visible: true,
        language: "en",
        category: "quetzal-condor",
        discountCode: "",
        discountPrice: "1000",
        discountPriceText: "Subscription"
    }
    //removeBook(book);
    //addBook(book);

    chapter = {
        id: "yahawzhowaa-the-vision-en",
        title: "THE VISION OF THE RED PLATES",
        subTitle: "A Brief Explanation About The Record Of The Red Plates",
        parent: "yahawzhowaa-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    //addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-the-vision-en",
        title: "THE VISION OF THE RED PLATES",
        subTitle: "A Brief Explanation About The Record Of The Red Plates",
        parent: "yahawzhowaa-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "",
        content: [
            "The Record of the Red Plates is a sacred collection of engraved histories brought to Agonabish by the messengers in the final days of his life. It is compiled from multiple sources:",
            "1. The Garden Records — beginning with fragments from Zhaawanong Gichi-Aki (the Southern Land), these tell of the first garden, the exodus of the people of light, and the giving of the garments of honor and staff of light.",
            "2. The Giiwedinong Journeys — a series of annals recounting the migration north through darkness and hope, leading to the founding of the settlement at the Breast of the Turtle.",
            "3. The Teachings of the Covenant — inspired writings that include parables, spiritual laws such as the Covenant of Peace, the Feast of Keeping, and the Seven Songs, given by the Messengers and elders.",
            "4. The Yahawzhowaa Account — the doings and testimony of Yahawzhowaa “Giiziig” visited among the remnant, wrought in power and peace, to redeem the fallen and seal the light among those who remained faithful.",
            "Agonabish abridged these records — paring away repetition, weaving prophetic commentary, and preserving the names as they were spoken in the Spirit. He arranged them into five major sections:",
            "[[poem:I. Creation, Garden, and the Fall of the Serpent|II. Exile, Darkness, and Northward Passage|III. The Covenant of Peace and Life in the Long Night|IV. The Laws of Faith: Songs, Feasts, and Parables|V. The Testimony and Ministry of Yahawzhowaa, sealing the Light|VI. The Kingdom of Heaven in the Heart is Explained ]]",
            "BOOKS CONTAINED WITHIN THE YAHAWZHOWA PLATES HEREIN:",
            "[[poem:BOOK ONE - The Waters of the Great Turtle|BOOK TWO - The Path of Many Waters|BOOK THREE - The Road to Siipising|BOOK FOUR - The Lakes Between the Hills|BOOK FIVE - The Road of The Buffalo|BOOK SIX - The Mountains of the Turtle|BOOK SEVEN - The City of the Gods|BOOK EIGHT - Sky Woman and the First Garden|BOOK NINE - Book of the Kingdom of the Heart]]",
            "In the presence of the Four Winds and under the sight of the Great Mystery, we, the Keepers of the Drum and the Carriers of the Medicine, set forth this seal.",
            "Let it be known to all who open these pages that the words contained herein are drawn from a small portion of the ancient telling of Agonabish and the Red Tablets, carried by memory from the lodge fires of our ancestors and guarded in the bundles of the Midē´wiwin.",
            "This record has been read in council, its truth weighed against the teachings of the Grandfathers and the visions granted to the Faithful. It bears the mark of the Seven Sacred Directions — East for the rising light, South for the warmth of life, West for the cleansing shadow, North for the enduring wisdom, Above for the Great Spirit, Below for the Earth our Mother, and Within for the fire that lives in the heart of the People.",
            "The words within are to be approached with humility, for they speak of matters both seen and unseen, of wars that shook the Skyworld and of the vessels of light that walk among men. They bind together the memory of the First Beings, the councils of Heaven, and the long path of redemption that unfolds upon the Earth.",
            "By this seal we affirm that the teachings herein are entrusted to the generations yet unborn, that they may remember who they are, guard the light within, and stand unshaken in the day when the Sky is split and the songs of the Mother return.",
            "[[poem:In the name of the Midē´wiwin —|Guardians of the Medicine, Carriers of the Sacred Law,|We close this seal with the sign of the Seven.]]",
            "[[image:https://storage.googleapis.com/sacred-records/books/yahawzhowaa/seal-of-plates-of-yahawzhawaa.jpg]]",
            "",
            "**THE BOOK OF YAHAWZHOWAA**",
            "[[poem:An Account Written by|the Hand of Agonabish|The Red Plates Record of the Midē´wiwin]]",
            "An abridgment of the records, visions, and testimonies engraven upon the Red Plates of copper and gold, containing the history and covenants of the people of the light from the first garden upon the Southern Land of Endless Day, through their journey into darkness and the days of counting, their deliverance from the hand of the Serpent, and their inheritance upon the Breast of the Turtle. Also containing the words and doings of Yahawzhowaa.",
        ],
    }

    addChapterText(chapter);
    addChapterAudio(chapter);

    book = {
        id: "yahawzhowaa-great-turtle-en",
        title: "THE WATERS OF THE GREAT TURTLE",
        subTitle: "The Plates of Yahawzhowaa - Book 1",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-171x214.jpg",
        thumbnailTitle: "The Great Turtle",
        Description: "",
        priceText: "Subscription",
        price: 9.99,
        isParent: true,
        hasChildBooks: false,
        order: 3,
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
    //remove from chapters yahawzhowaa-great-turtle-en

    
    chapter = {
        id: "yahawzhowaa-book-1-mitchimakinak-en",
        title: "Chapter 1",
        subTitle: "The Arrival at Mitchimakinak",
        parent: "yahawzhowaa-great-turtle-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-1-mitchimakinak-en",
        title: "Chapter 1",
        subTitle: "The Arrival at Mitchimakinak",
        parent: "yahawzhowaa-great-turtle-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-1-gichi-asin-en",
        content: [
            "1 And it came to pass in the thirty and fourth year after the birth of Yahawzhowaa, that He journeyed unto the land of the meeting of the great waters, even Mitchimakinak, which is the Great Turtle lying upon the deep.",
            "2 For the Spirit had led Him through the cedar woods and maple groves of the east, until He beheld the shining straits where Gichi-Gami and Mishigami meet.",
            "3 And the island rose before Him as the shell of a turtle, with cliffs of white stone and forests as a crown.",
            "4 The people of that place, being of the Anishinaabeg — Odawa, Ojibwe, and Potawatomi — came forth in their canoes of birch-bark, for they had heard tidings of a man whose words burned as the sun at dawn.",
            "5 They spake one to another, saying, Could this be the Dawn-Bringer of the winter prophecies, who shall open the way of light?",
            "6 And Yahawzhowaa stood in the foremost canoe, and the wind played upon His hair, and His raiment was white as the foam of the straits.",
            "7 When the currents grew strong, and the waves began to trouble the canoes, He lifted His hand, and the waters grew calm beneath Him.",
            "8 The elders marvelled, saying, This is He that commandeth the lakes as the Master of the Four Winds.",
            "9 And they brought Him ashore at the eastern landing, where the cliffs stand watch, and led Him along the forest path toward the great lodge of council.",
            "10 Women brought bowls of fresh caught whitefish, and cakes of wild rice, and berries gathered from the summer woods.",
            "11 Yahawzhowaa blessed them, saying, The hand that feedeth the stranger is the hand that is remembered in the lodge of the Father.",
            "12 In the cool of the day He walked among the cedar groves, and the children followed Him, laughing as they gathered flowers to lay in His path.",
            "13 Then He came unto the great council fire, and the people sat round in silence to hear His voice.",
            "14 And He said unto them, Ye dwell upon the shell of the Great Turtle, whose back hath borne thee from the beginning; yet I tell thee, there is a greater back that beareth all the worlds, and that is the hand of the Father.",
            "15 These waters that surround thee are as the circle of His covenant, without breach, without end; enter into it, and thou shalt be kept.",
            "16 He spake a parable, saying, A canoe full of light needeth not to fear the night; but a canoe without light is lost though the sun be high.",
            "17 Let thy spirit be as a vessel well-made, that it may bear the fire of the Father and not be broken in the waves.",
            "18 An elder named Bineshi spake, saying, How shall a man set the light within his vessel?",
            "19 Yahawzhowaa answered, Open thy heart as thou openest the lodge door to a friend; for the Father standeth without, bearing the flame, and will enter if thou bid Him come.",
            "20 And when His flame is within, guard it as thou guardest the council-fire, lest the wind of deceit quench it.",
            "21 Then He walked with them to the western shore, and spake blessings over the fishermen casting their nets in the shallows.",
            "22 A net that had torn and caught nothing He drew to Himself, and with His hand He gathered it full of fish, so that it strained to be lifted.",
            "23 The men cried out in wonder, and Yahawzhowaa said, I will make you gatherers of souls, if ye follow in My way.",
            "24 That night He lodged in a cedar lodge upon the southern shore, and the sound of the waves was as a song unto His rest.",
            "25 And the people kept watch, speaking in low voices, for they knew the prophecy of the Light-Bearer had come among them.",
            "26 In the morning, before the sun was risen, He went apart to pray, and the mist lay upon the waters as a mantle.",
            "27 The gulls wheeled above the cliffs, and the loons called upon the far side of the island.",
            "28 And the Father spake unto Him, saying, Thy path is set; thou shalt go from the Great Turtle unto the far mountains, and there seal the covenant among the people.",
            "29 Yahawzhowaa bowed His head and answered, Thy will be done, O Father of all waters and all light.",
            "30 And thus began the journey of Yahawzhowaa across the lands and waters of the people, from Mitchimakinak unto the mountains of the Turtle in the far west.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    */

/*
    chapter = {
        id: "yahawzhowaa-book-1-gichi-asin-en",
        title: "Chapter 2",
        subTitle: "The Gathering at Gichi-Asin",
        parent: "yahawzhowaa-great-turtle-en",
        order: 2,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-1-gichi-asin-en",
        title: "Chapter 2",
        subTitle: "The Gathering at Gichi-Asin",
        parent: "yahawzhowaa-great-turtle-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-mitchimakinak-en",
        followingChapter: "yahawzhowaa-book-1-eastern-cliffs-en",
        content: [
"1 And it came to pass that Yahawzhowaa, desiring solitude, went from the eastern landing along the forest path unto the high place called Gichi-Asin, the Standing Stone of the Turtle’s Back.",
"2 This was a great rock rising above the trees, steadfast from the first making of the island, and the people held it as a place of vision.",
"3 There was a hollow in the stone, worn by many winters and rains, wherein a man might rest.",
"4 And Yahawzhowaa lay down in that place as the sun went down, and the breath of cedar filled the night.",
"5 Above Him the northern lights moved like rivers of green fire, and the stars shone as lamps in the Father’s lodge.",
"6 In the stillness He prayed for the people of the island, that their vessels might be filled with the true light.",
"7 At dawn, the people gathered at thebase of the great stone, bringing the sick, the blind, and the lame.",
"8 They called unto Him, Master, come down and help us, for we have heard of Thy works in other lands.",
"9 Yahawzhowaa descended and came to the shore where they stood.",
"10 There was a man whose legs had been lame from birth; Yahawzhowaa took him by the hand and said, Rise, for the Maker of thy bones hath made them whole.",
"11 And the man leaped and walked, and praised the Father before all.",
"12 A woman brought her daughter whose eyes were clouded; Yahawzhowaa touched her brow and spake, See the light that the Father hath made for thee.",
"13 And her eyes were opened, and she beheld the waters shining in the morning sun.",
"14 The people marvelled, and some fell upon their knees.",
"15 But Yahawzhowaa lifted them, saying, Rise, for the Father seeketh thy heart more than thy posture.",
"16 He taught them, saying, Even as this stone standeth unmoved though the winds and rains beat upon it, so shall the vessel full of light endure the storms of the world.",
"17 But the vessel without light is as driftwood, carried whithersoever the current taketh it.",
"18 An elder named Migizi said, Master, how may we stand as this stone?",
"19 Yahawzhowaa answered, By setting thy foundation upon the Father’s word, and by keeping thy vessel clean, that the light may dwell within and not depart.",
"20 He spake a parable, saying, A canoe built upon the shore may be strong, yet if its seams be not sealed, the waters shall enter and it shall sink; so is the man who knoweth the truth yet keepeth not his heart from deceit.",
"21 All that heard were pricked in their hearts, and many vowed to keep the light.",
"22 Yahawzhowaa blessed them and returned unto Gichi-Asin for the night, for He desired the stillness before going forth again.",
"23 The people kept a fire at the base of the stone, and the smoke went up into the night as a pillar.",
"24 Children slept by their mothers, and the elders watched the stars for signs.",
"25 In the morning Yahawzhowaa set His face toward the eastern cliffs, for there was a great gathering appointed.",
"26 As He walked, the wind brought the smell of sweetgrass from the meadows.",
"27 He spake softly to His disciples, The Father’s hand is in all these things; see and remember, for the journey ahead is long.",
"28 They came to the eastern cliffs as the sun was high, and the people awaited His word.",
"29 And thus was the way prepared for the teaching by the sea-cliffs of Mitchimakinak.",
"30 And the fame of His name spread yet further among the villages of the straits.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-eastern-cliffs-en",
        title: "Chapter 3",
        subTitle: "The Fire by the Eastern Cliffs",
        parent: "yahawzhowaa-great-turtle-en",
        order: 3,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-1-eastern-cliffs-en",
        title: "Chapter 3",
        subTitle: "The Fire by the Eastern Cliffs",
        parent: "yahawzhowaa-great-turtle-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-gichi-asin-en",
        followingChapter: "yahawzhowaa-book-1-aganabish-en",
        content: [
"1 And it came to pass that the people gathered by the eastern cliffs of Mitchimakinak, where the white stone falls sheer into the waters of Gichi-Gami.",
"2 They kindled a great fire, and the smoke went upward, mingling with the wind from the lake.",
"3 Yahawzhowaa sat upon a stone, and the people formed a circle round about Him.",
"4 The sound of the waves was as a drumbeat beneath His words.",
"5 He said unto them, The lodge of the Father is without walls, yet it is greater than all the earth; its fire is never quenched, and its door is never shut.",
"6 All who come bearing the vessel of light may enter; but he whose vessel is empty cannot remain, for the darkness findeth no place therein.",
"7 He spake a parable, saying, A man set out across the waters in the night; his canoe was without lamp, and the moon was hid. He heard voices calling, but could not find the shore, and was lost.",
"8 Another set out with a lamp trimmed and bright; though the fog covered the lake, he saw the glow of the shore and came safely home.",
"9 So is the soul in the day of trouble: the one with light shall find the way, but the one without shall wander in peril.",
"10 A fisherman named Shingwauk said, Master, is this light our own, or doth it come from another?",
"11 Yahawzhowaa answered, It is the gift of the Father, yet it is given to be kept and tended by thy hand; if thou neglect it, it shall fade.",
"12 He lifted a burning brand from the fire and set it in the sand.",
"13 See how the flame standeth while it is fed; but if it be left, the wind shall take it, and it shall be no more.",
"14 Feed the light within thee with truth, with mercy, with the remembrance of the Father, and it shall not fail.",
"15 Then a young boy came forward holding a small clay lamp, its flame nearly gone.",
"16 Yahawzhowaa bent down, shielding it with His hands, and breathed upon it; and it burned bright again.",
"17 He said, So doth the Father breathe upon the faint light, if the vessel turn toward Him.",
"18 The people were astonished, for they felt warmth upon their faces as He spake.",
"19 And many brought forth their sick, and He laid His hands upon them, and they were made whole.",
"20 He blessed a woman who had long been barren, saying, Thy vessel shall be filled, and thy house shall know joy.",
"21 And it came to pass that in due season she bore a son, and named him Makade-binesi, “Black Eagle,” for the day was marked by signs in the sky.",
"22 That night the fire burned low, and Yahawzhowaa walked alone along the cliff edge, speaking softly with the Father.",
"23 The moon rose from the waters, and its light was upon His face.",
"24 The people, seeing Him thus, whispered, Truly this is the Light-Bearer.",
"25 And He said unto them before departing, Guard thy light, for there are winds yet to come that will seek to put it out.",
"26 On the morrow He would meet the elder Aganabish, who came bearing the red tablets of the prophecy.",
"27 And the appointed time was fulfilled for the revealing of the ancient witness.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-aganabish-en",
        title: "Chapter 4",
        subTitle: "The Red Tablets of Aganabish",
        parent: "yahawzhowaa-great-turtle-en",
        order: 4,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);


    chapter = {
        id: "yahawzhowaa-book-1-aganabish-en",
        title: "Chapter 4",
        subTitle: "The Red Tablets of Aganabish",
        parent: "yahawzhowaa-great-turtle-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-eastern-cliffs-en",
        followingChapter: "yahawzhowaa-book-1-healing-at-the-spring-en",
        content: [
"1 And it came to pass on the morrow, that an elder came from the northern shore of the straits, whose name was Aganabish, meaning “the old cedar.",
"2 His hair was white as the winter frost upon the pine bough, and his eyes were deep as the still pools in the forest.",
"3 In his hands he bare two tablets of red stone, smooth and polished, yet graven with signs of ancient making.",
"4 The people whispered, These are the witness of our fathers, kept in the cedar chest for the season of the great council.",
"5 Aganabish bowed before Yahawzhowaa, saying, Master, these tell of the light that shall come into the vessels of men, yet their meaning hath been hid from us.",
"6 My fathers taught that the one who can loose the meaning of these stones is he who is sent from the place of the sunrise.",
"7 Yahawzhowaa took the tablets, and the sun fell upon them, so that they glowed as embers from a deep hearth.",
"8 He read the signs aloud, for the Spirit gave Him understanding of every carving and mark.",
"9 And He said, These are the words of the Maker, set down before the rivers took their course, before the stones were laid upon the shore.",
"10 They speak of the breath of the Father, which is light, entering into the clay, which is man; and the clay shineth when the breath abideth therein.",
"11 They tell also of a time when the light shall be shut away by the covering of the heart, and men shall walk as vessels unlit, knowing not the way.",
"12 But in the days appointed, One shall come to open the covering and pour in the flame from the lodge of heaven.",
"13 Aganabish said, Our elders taught that this One would have power over the winds and the waters.",
"14 Yahawzhowaa answered, Ye have seen these things with thine own eyes; yet greater than these is the gift of the Father’s light, which none can take away.",
"15 For I am the Keeper of the Flame, and I pour it freely into the vessel that is ready.",
"16 He pointed to a carving of the sun upon the tablets, saying, This is the vessel full of light: its path is straight, its shadow is none, and its end is life without end.",
"17 And He pointed to a carving of the moon darkened, saying, This is the vessel empty of light: it wandereth, its path is crooked, and its end is the lodge of silence.",
"18 Then Yahawzhowaa lifted the tablets before the people, and said, This witness ye have kept is true; it is fulfilled in your hearing this day.",
"19 Whoso hath ears to hear, let him hear: the Father’s fire is not given to be hidden, but to shine forth that all may be drawn unto it.",
"20 He gave the tablets again to Aganabish, saying, Guard them still, yet know that the greater tablet is within thee, where the Father writeth His word.",
"21 Aganabish wept, saying, All my years I have waited for the tongue that could loose the meaning of these stones; now mine eyes have seen it.",
"22 The people pressed nearer, touching the red tablets, that the blessing might be upon them.",
"23 Yahawzhowaa said, Touch not the stone only, but the word it beareth; for the stone may break, yet the word endureth forever.",
"24 He taught, The light in the vessel is the covenant between the Maker and thy soul; it is thy guidance in darkness, thy warmth in cold, thy sight in the storm.",
"25 Lose it, and thou art as a canoe without paddle; keep it, and thou art brought safe to the eternal shore.",
"26 The wind shifted, and the scent of cedar came upon it, as though sealing the words.",
"27 Aganabish bound the tablets in deerskin, and the people sang a song of the dawn.",
"28 Yahawzhowaa blessed them, and turned His steps toward the spring in the island’s heart.",
"29 And it was told among the villages that the prophecy of the red tablets had been fulfilled.",
"30 And the fame of His name spread even to the far shore of Mishigami."
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-1-healing-at-the-spring-en",
        title: "Chapter 5",
        subTitle: "The Healing at the Spring of the Turtle",
        parent: "yahawzhowaa-great-turtle-en",
        order: 5,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-healing-at-the-spring-en",
        title: "Chapter 5",
        subTitle: "The Healing at the Spring of the Turtle",
        parent: "yahawzhowaa-great-turtle-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-aganabish-en",
        followingChapter: "yahawzhowaa-book-1-walking-in-the-waters-en",
        content: [
"1 And Yahawzhowaa came unto the heart of the island, where a spring of clear water burst forth from among the rocks.",
"2 The people called it Mishomisgabii’igan, the Grandfather’s Spring, for they held it to be older than the trees or the cliffs.",
"3 Many had come there seeking healing, for the water was said to carry the blessing of the First Maker.",
"4 Yahawzhowaa sat upon a stone by the spring, and the people brought to Him their sick and their wounded.",
"5 There was among them an elder blind from his youth; his name was Waabishkimakwa, White Bear.",
"6 Yahawzhowaa took water from the spring in His hands, and washed the man’s eyes, saying, Be opened in the light of the Father.",
"7 And straightway he lifted his face, and beheld the cedar branches moving in the wind.",
"8 The people gave a great shout, and sang the song of the healing lodge.",
"9 Then Yahawzhowaa spake, As this spring floweth without ceasing, so doth the Father’s light flow into the vessel that is open unto Him.",
"10 Yet if thou cover the mouth of the spring, the water is stopped; so if thou harden thy heart, the light cannot enter.",
"11 He spake a parable, saying, A man found a spring in the forest, but he feared it would run dry, so he stopped it with stones to save it; yet the water became foul, and none could drink.",
"12 So also is the man who keepeth the light for himself; it becometh as darkness within, and profiteth him nothing.",
"13 The people were astonished at His words, for they were plain and full of power.",
"14 A young woman with a fever was brought to Him; He touched her hand and the fever left her.",
"15 She arose and served them from the food she had brought.",
"16 Yahawzhowaa said, The vessel that is healed shall pour forth again, and the Father is glorified.",
"17 Then He blessed the spring, saying, Let this water remain clear to the end of the age, a witness of the Father’s life.",
"18 The wind stirred the surface, and a beam of sunlight fell upon the water.",
"19 The people filled their vessels and took the water to their lodges.",
"20 That evening Yahawzhowaa returned to the shore, for the time drew near for Him to depart unto Waganakising.",
"21 The sky was red in the west, and the loons called from the far side of the strait.",
"22 Aganabish came again, and walked with Him along the sand.",
"23 They spoke of the journey ahead, and of the villages that had long waited for His coming.",
"24 Yahawzhowaa said, The Father hath many lodges, and in each there are vessels waiting to be filled with light.",
"25 We go, that they may be filled, and the darkness driven from their shores.",
"26 They reached the eastern landing, where the canoes lay ready.",
"27 The people gathered, bringing gifts of fish and rice for the journey.",
"28 Yahawzhowaa blessed them, and promised to return in the season appointed.",
"29 The night was still, and the stars shone as they had the first day of creation.",
"30 And thus was the blessing of the spring sealed among the people of Mitchimakinak.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-1-walking-in-the-waters-en",
        title: "Chapter 6",
        subTitle: "The Walking in the Waters",
        parent: "yahawzhowaa-great-turtle-en",
        order: 6,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-walking-in-the-waters-en",
        title: "Chapter 6",
        subTitle: "The Walking in the Waters",
        parent: "yahawzhowaa-great-turtle-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-healing-at-the-spring-en",
        followingChapter: "yahawzhowaa-book-1-storm-on-mishigami-en",
        content: [
"1 At the break of day, Yahawzhowaa went down to the southern shore, where the waters of the strait run swift between the island and the mainland.",
"2 The people had gathered, bringing again the sick and the troubled in spirit.",
"3 The elders stood upon the rocks, watching as He stepped into the shallows.",
"4 The water came to His knees, yet it seemed to part before Him, and His feet were upon a path unseen.",
"5 They marvelled, for He walked as one unbound by the pull of the deep.",
"6 A man came carrying a child near unto death; Yahawzhowaa took the child and set him in the water beside Him.",
"7 He said, Even as these waters cleanse the body, so doth the Father cleanse the soul; be made whole.",
"8 And the child’s breath grew strong, and the colour returned to his face.",
"9 A woman whose arm had been withered stretched it toward Him; He touched her hand, and it became as the other, full of strength.",
"10 The people wept for joy, and the gullsmcried above the shore.",
"11 Yahawzhowaa taught them, saying, These waters are as the Spirit: they receive whomsoever entereth in faith; they lift up the lowly, and they cleanse the vessel yielded unto them.",
"12 Yet the water alone healeth not, but the word of the Father which hath moved upon the face of the deep from the beginning.",
"13 He spake a parable, saying, A canoe is strong upon the shore, yet it moveth not until the water be under it; so is the soul that hath truth yet lacketh the Spirit.",
"14 The people pondered these things, for they were as seeds in their hearts. ",
"15 Then He blessed the waters, that they should be a sign of the Father’s life to the island.",
"16 The wind shifted, and the surface shone like molten silver.",
"17 Yahawzhowaa returned to the shore, and the people pressed about Him to touch the hem of His garment.",
"18 He blessed them and bade them prepare, for He would soon cross unto Waganakising.",
"19 That night He lodged in the cedar lodge near the eastern landing, and the fire burned low as He prayed.",
"20 The Father spake, saying, The storm cometh, yet thy light shall guide them through.",
"21 Yahawzhowaa answered, Be it unto me according to Thy will.",
"22 In the morning the canoes were made ready, and the young men took up their paddles.",
"23 The women brought food for the journey, and the elders sang the song of safe passage.",
"24 The sky was clear as they set out, but the winds were gathering beyond the horizon.",
"25 The gulls followed, wheeling above the canoes.",
"26 Yahawzhowaa sat in the foremost canoe, His eyes upon the west.",
"27 The people spoke in low voices, for they felt the change in the air.",
"28 And thus they entered the waters of Mishigami, where the storm was appointed to meet them.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-1-storm-on-mishigami-en",
        title: "Chapter 7",
        subTitle: "The Storm on Mishigami",
        parent: "yahawzhowaa-great-turtle-en",
        order: 7,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-storm-on-mishigami-en",
        title: "Chapter 7",
        subTitle: "The Storm on Mishigami",
        parent: "yahawzhowaa-great-turtle-en",
        order: 7,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-walking-in-the-waters-en",
        followingChapter: "yahawzhowaa-book-1-bay-of-waganakising-en",
        content: [
"1 And it came to pass, when they were yet in the midst of the lake, the wind arose from the south, and the clouds gathered dark upon the waters.",
"2 The waves were lifted up, and the canoes were tossed as leaves before the wind.",
"3 The people cried, Master, behold, the waters rise to swallow us; save us lest we perish!",
"4 But Yahawzhowaa sat in the foremost canoe, His face toward the storm, yet His countenance unmoved.",
"5 He said, Why are ye fearful, O ye of little light? Know ye not that the vessel within must first be stilled before the waters without can be calmed?",
"6 Whoso hath light in his vessel shall not be overcome, though the deep lift up its voice, nor though the shadows compass him round about.",
"7 The waves broke over the sides, and the spray was as rain upon their faces.",
"8 Then Yahawzhowaa stood and lifted His hands toward the sky, and spake in the tongue of the Father.",
"9 Straightway the wind ceased, and the waters lay down as a child in the mother’s arms.",
"10 A great calm was upon the face of Mishigami, and the clouds fled before the dawn.",
"11 The people marvelled exceedingly, saying, Who is this, that both the winds and the waters obey Him?",
"12 Yahawzhowaa answered, He that made the waters hath given them into My hand; yet greater is He that maketh the heart still in the day of trouble.",
"13 For the vessel that is full of light feareth not the storm, but keepeth its course, and cometh to the shore appointed of the Father.",
"14 But the vessel that is dark within is tossed though the waters be calm, and is broken though no wave striketh it.",
"15 He took of the water in His palm, and let it fall back into the lake.",
"16 See how it returneth whence it came; so shall the soul return unto its Maker, if it keep the covenant of light.",
"17 He warned them, saying, There shall be storms greater than these, when the deep of the heavens is shaken, and the nations are as waves driven by the wind.",
"18 In that day, only they whose vessels are filled with the Father’s flame shall stand, and they shall be as islands unmoved in the flood.",
"19 Aganabish bowed his head, saying, My fathers spoke of a path across the lake that no storm could touch; now mine eyes have seen it in Thee.",
"20 They paddled on, and the sun rose over Mitchimakinak, casting its light upon their backs.",
"21 The air was clear, and the scent of pine came from the unseen shores.",
"22 Yahawzhowaa said softly, Let this day be a sign unto thee: the storm without cannot undo the vessel whose light is steadfast.",
"23 Therefore keep thy flame burning in the day of peace, that it fail not in the day of trouble.",
"24 As they drew near to the western shore, the people of that place came forth, for they had seen the storm and wondered at its sudden end.",
"25 They brought mats for rest, and bowls of food for the travellers.",
"26 That night, by the fire on the western shore, the people asked to hear the story of the light.",
"27 And Yahawzhowaa began to speak, and the journey to Waganakising was thus begun.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-1-bay-of-waganakising-en",
        title: "Chapter 8",
        subTitle: "The Bay of Waganakising",
        parent: "yahawzhowaa-great-turtle-en",
        order: 8,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-bay-of-waganakising-en",
        title: "Chapter 8",
        subTitle: "The Bay of Waganakising",
        parent: "yahawzhowaa-great-turtle-en",
        order: 8,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-storm-on-mishigami-en",
        followingChapter: "yahawzhowaa-book-1-parable-of-net-en",
        content: [
"1 And it came to pass that they entered the great curve of the western shore, even Waganakising, the Bay of the Crooked Shore.",
"2 The Odawa came forth in their canoes, for messengers from Mitchimakinak had gone before, telling of the One who calmed the waters.",
"3 They brought mats of woven rushes, and laid before Him gifts of maple sugar, smoked whitefish, and the berries of midsummer.",
"4 And they said, Abide with us, for the days of the summer gathering are upon us, and all the villages will hear Thy words.",
"5 Yahawzhowaa went ashore and walked among their lodges, greeting the elders and blessing the children.",
"6 In the evening they lit a great fire upon the sand, and the sound of the bay was as a low drum in the stillness.",
"7 Yahawzhowaa lifted His hand, and there was a hush among the people.",
"8 He said, Ye behold this bay, how it is filled and emptied by the wind and the waters; even so is the vessel of man filled and emptied by the breath of the Father.",
"9 As the water is moved by the unseen wind, so is the light moved within thee by the Spirit.",
"10 He took a bowl of water from the shore, and held it toward the fire.",
"11 See how the light passeth through when the water is pure; but if the water be made foul, the light is scattered, and the vessel is dimmed.",
"12 This light is not thine own, but the life of the Father in thee; without it, the vessel is as a lodge without fire in the winter night.",
"13 Then He spake a parable, saying, As the bay receiveth the waters from the streams, yet sendeth them forth again to the deep, so is the man who keepeth the Father’s light not for himself alone, but for all who are in need.",
"14 For if the bay keep the waters and let them not flow, they become foul and bring forth death instead of life.",
"15 The elders nodded, for they knew the truth of His words.",
"16 A man lame from a hunting wound was brought to Him; Yahawzhowaa laid His hand upon his leg, and it was made whole.",
"17 The man leaped for joy and walked along the shore, praising the Great Spirit.",
"18 Yahawzhowaa said, So shall the Father make whole the nations, if they turn unto Him and keep His light within.",
"19 The people rejoiced, and sang the song of the returning sun.",
"20 That night He lodged among them, and the sound of the waves was as peace in the lodge of His rest.",
"21 On the morrow, He would speak theparable of the net before the gathered villages.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-1-parable-of-net-en",
        title: "Chapter 9",
        subTitle: "The Parable of the Net of Nations",
        parent: "yahawzhowaa-great-turtle-en",
        order: 9,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-parable-of-net-en",
        title: "Chapter 9",
        subTitle: "The Parable of the Net of Nations",
        parent: "yahawzhowaa-great-turtle-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-bay-of-waganakising-en",
        followingChapter: "yahawzhowaa-book-1-healing-hunters-son-en",
        content: [
"1 On the next day, the people came from the far points of the bay, and from villages beyond the ridge, bringing their canoes to the shore.",
"2 The circle was great upon the sand, and the fire was set in the midst.",
"3 Yahawzhowaa stood before them, holding in His hands a fisherman’s net.",
"4 He said, The Kingdom of Heaven is like unto a net cast into the deep, which gathereth of every kind.",
"5 When it is full, it is drawn to the shore, and the good are kept, but that which is spoiled is cast away.",
"6 So shall it be in the end of the age: the messengers of the Father shall come, and divide the just from the unjust.",
"7 He looked upon them, saying, Ye are as fish in the Father’s net; therefore keep thy vessel clean, that thou mayest be gathered into His lodge.",
"8 Then He cast the net into the bay, and the people watched as the floats danced upon the water.",
"9 He drew it up, and it was heavy with fish, more than they had seen taken in such a short time.",
"10 The fishermen marvelled, for the nets had been empty in the morning.",
"11 Yahawzhowaa said, This is a sign unto you, that the Father’s net is never empty for those who cast at His word.",
"12 A young boy ran to Him, saying, Master, will the net ever tear?",
"13 Yahawzhowaa answered, The Father’s net cannot be torn; but the net of man is weak, and he who trusteth in it alone shall lose his catch.",
"14 He taught them also, saying, Beware the false light, which is as a cold flame; it leadeth the fish into the shallows where they perish.",
"15 The Father’s light is warm and bringeth life; it draweth the nations into safe waters.",
"16 The people listened in silence, for the words pierced their hearts.",
"17 And many that day vowed to keep the Father’s light within their vessels, and to cast their nets in His name.",
"18 The fish were divided among the villages, and there was enough for all.",
"19 Yahawzhowaa blessed them, and bade them keep the parable in their hearts.",
"20 And the fame of His teaching spread along the shore and into the inland trails.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



    chapter = {
        id: "yahawzhowaa-book-1-healing-hunters-son-en",
        title: "Chapter 10",
        subTitle: "Healing of the Hunter’s Son",
        parent: "yahawzhowaa-great-turtle-en",
        order: 10,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-healing-hunters-son-en",
        title: "Chapter 10",
        subTitle: "Healing of the Hunter’s Son",
        parent: "yahawzhowaa-great-turtle-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-parable-of-net-en",
        followingChapter: "yahawzhowaa-book-1-feast-of-wild-rice-en",
        content: [
"1 As Yahawzhowaa walked along the edge of the forest, a man came running, his garments torn, his face full of fear.",
"2 He cried, Master, my son hath fallen from the rocks in the hunt, and lieth without breath; come quickly.",
"3 Yahawzhowaa followed him to a clearing where the youth lay still, and the hunters stood round in sorrow.",
"4 He knelt beside the boy, and laid His hand upon his chest.",
"5 O Father, Giver of breath, return it unto this vessel, that Thy name be glorified among these people.",
"6 And the boy drew a deep breath, and opened his eyes.",
"7 The father wept and fell to his knees, saying, Now I know that Thou art sent of the Great Spirit.",
"8 Yahawzhowaa lifted him, saying, Give thanks to the Father, for it is He who healeth.",
"9 Then He spake unto them the parable of the lost arrow:",
"10 A hunter loosed his arrow in the forest, and it flew far and was lost among the trees. He sought it in vain and turned away in sorrow.",
"11 But the wind moved in the grass, and he saw the shaft glinting in the sun, and he took it again into his hand.",
"12 So is the soul that wandereth from the Father; it is lost to the darkness, yet the Father seeketh it until it is found, and it is restored to His quiver.",
"13 The hunters nodded, for they knew the truth of the words.",
"14 The youth rose to his feet, and took food with them.",
"15 Yahawzhowaa said, Let this be a sign that the Father’s hand is upon thee; walk in His light and be not afraid.",
"16 That night they feasted in joy, and the boy sat beside Yahawzhowaa at the fire.",
"17 In the morning, the hunters set out again, but their hearts were light, for the fear of death had been driven from them.",
"18 And the story of the healing spread even to the villages beyond the hills.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-feast-of-wild-rice-en",
        title: "Chapter 11",
        subTitle: "The Feast of Wild Rice",
        parent: "yahawzhowaa-great-turtle-en",
        order: 11,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-feast-of-wild-rice-en",
        title: "Chapter 11",
        subTitle: "The Feast of Wild Rice",
        parent: "yahawzhowaa-great-turtle-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-healing-hunters-son-en",
        followingChapter: "yahawzhowaa-book-1-sleeping-bear-coast-en",
        content: [
"1 In the season when the wild rice ripeneth upon the inland lakes, the people of Waganakising gathered for the harvest feast.",
"2 They invited Yahawzhowaa to bless the food and speak unto them.",
"3 The canoes returned heavy with rice and fish, yet more people came than had been expected.",
"4 The elders said, Master, there is not enough for all; some will go hungry.",
"5 Yahawzhowaa answered, Bring what ye have, and set it before Me.",
"6 They brought the baskets of rice and the fish from the bay, and He lifted His eyes to heaven.",
"7 O Father, who feedeth the sparrow and filleth the nets, bless this food, that it may be enough for all who are gathered.",
"8 He gave to the elders to distribute, and they gave to the people.",
"9 And behold, the baskets were never empty, and all ate until they were filled.",
"10 The children laughed, and the women sang the song of the rice harvest.",
"11 Yahawzhowaa said, So is the Kingdom of Heaven: there is no hunger in the Father’s lodge, for His table is full and His hand is open.",
"12 Keep thy vessel full of light, and thou shalt lack nothing needful.",
"13 An elder named Zhingwaak said, Master, will there always be such abundance?",
"14 Yahawzhowaa answered, While the vessel is open unto the Father, the river of His provision shall not run dry; but if it be closed, even the storehouse shall be emptied.",
"15 They ate together until the sun went down.",
"16 Yahawzhowaa blessed the harvest and the work of their hands.",
"17 In the night, the fire burned bright, and He spoke of the journey yet to come along the great coast to the south.",
"18 The people listened with joy and sorrow, for they desired Him to remain, yet knew He must go.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



    chapter = {
        id: "yahawzhowaa-book-1-sleeping-bear-coast-en",
        title: "Chapter 12",
        subTitle: "The Sleeping Bear Coast",
        parent: "yahawzhowaa-great-turtle-en",
        order: 12,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-sleeping-bear-coast-en",
        title: "Chapter 12",
        subTitle: "The Sleeping Bear Coast",
        parent: "yahawzhowaa-great-turtle-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-feast-of-wild-rice-en",
        followingChapter: "yahawzhowaa-book-1-healing-broken-hand-en",
        content: [
"1 And it came to pass that Yahawzhowaa and His companions set out southward along the shore, passing the high bluffs and dunes of the great coast.",
"2 The people called it Mishibizhiw-aki, the Land of the Great Water Panther, for the dunes rose as the back of a beast sleeping by the water.",
"3 They came to a place where the sand stretched far into the lake, and the wind sang through the grass.",
"4 Yahawzhowaa gathered the people there, and spake unto them.",
"5 He that buildeth his lodge upon the rock shall stand when the wind bloweth, but he that buildeth upon the shifting sand shall see his lodge fall in the storm.",
"6 He pointed to the dunes, saying, These are moved little by little, and the place that is high today is low tomorrow.",
"7 So is the man whose vessel is not set upon the Father’s word; the change of the world shall carry him away.",
"8 A woman asked, Master, what is the rock upon which we may stand?",
"9 Yahawzhowaa answered, The rock is the Father’s truth, which changeth not; whoso standeth thereon shall not be moved, though all else be shaken.",
"10 They walked together along the shore, and He healed those who were sick in body and spirit.",
"11 A boy brought Him a gull with a broken wing; Yahawzhowaa touched it, and the bird took flight over the waves.",
"12 The people rejoiced, and gave thanks to the Maker of all.",
"13 That night, they camped upon the shore, and the stars shone as bright fires above the dark water.",
"14 Yahawzhowaa said to His disciples, These lights in the sky are as the Father’s eyes upon the earth; He seeth thee whether thou art in the lodge or upon the path.",
"15 Keep thy light as they keep theirs, and thou shalt guide others home.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



    chapter = {
        id: "yahawzhowaa-book-1-healing-broken-hand-en",
        title: "Chapter 13",
        subTitle: "The Healing of the Broken Hand",
        parent: "yahawzhowaa-great-turtle-en",
        order: 13,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-healing-broken-hand-en",
        title: "Chapter 13",
        subTitle: "The Healing of the Broken Hand",
        parent: "yahawzhowaa-great-turtle-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-sleeping-bear-coast-en",
        followingChapter: "yahawzhowaa-book-1-peace-at-ahmnami-en",
        content: [
"1 And it came to pass, as Yahawzhowaa journeyed along the southern shore, He came unto a village where the people were skilled in the making of canoes.",
"2 There was a man there named Waawaashkeshi, a craftsman whose hand had been crushed beneath the weight of a cedar log.",
"3 He could no longer shape the ribs nor bind the seams, and his heart was heavy.",
"4 His family brought him unto Yahawzhowaa, saying, Master, if Thou wilt, Thou canst make him whole.",
"5 Yahawzhowaa took the man’s hand and said, The One who formed thy bones in the womb is able to restore them now.",
"6 He touched it, and the bones were made straight, the sinews strong, and the hand as it had been before.",
"7 The man wept and lifted his tools, saying, Now will I work again for my people, and the canoe shall be finished.",
"8 Yahawzhowaa spake unto the people, As the canoe must be steered toward the shore, so must the vessel of man be steered toward the light.",
"9 If the paddle be idle, the current shall carry thee into the deep; but if thou set thy face to the shore and strive, thou shalt be brought in safely.",
"10 He told them a parable, saying, A man made a canoe of great beauty, but left it upon the bank without use; in time the sun and the rain broke it, and it could carry no one.",
"11 So is the man who hath a vessel but useth it not for the work of the Father; it becometh as driftwood.",
"12 The people understood, for they were builders of canoes from the days of their fathers.",
"13 They brought Him food, and He blessed it, and ate with them.",
"14 That night He rested in their lodge, and in the morning He set out toward the inland waters.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-1-peace-at-ahmnami-en",
        title: "Chapter 14",
        subTitle: "The Peace at Ahnami-zaaga’igan",
        parent: "yahawzhowaa-great-turtle-en",
        order: 14,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-peace-at-ahmnami-en",
        title: "Chapter 14",
        subTitle: "The Peace at Ahnami-zaaga’igan",
        parent: "yahawzhowaa-great-turtle-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-healing-broken-hand-en",
        followingChapter: "yahawzhowaa-book-1-inland-waters-prophecy-en",
        content: [
"1 Yahawzhowaa came unto Ahnamizaaga’igan, the Lake of the Prayer, where the waters are clear and the pines stand close upon the shore.",
"2 There He found two bands of hunters encamped on either side, and there was strife between them over the deer taken in the forest.",
"3 The men were angry, and some had strung their bows.",
"4 Yahawzhowaa went and stood between them, and the quarrel ceased at His presence.",
"5 He said, The light in the vessel turneth away wrath, but the vessel without light kindleth the fire of hatred.",
"6 Two lodges that share one fire shall both be warm; but if each kindle its own against the other, both shall burn.",
"7 He told them a parable, saying, Two canoes met in the narrows; the one sought to pass first, the other to block the way, and both were overturned. But if one yield, both pass in peace.",
"8 The hunters lowered their bows, and the leaders came forward.",
"9 Yahawzhowaa took from His pouch a piece of bread, broke it, and gave to each.",
"10 Eat together, for the Father hath made you brethren; and if ye keep His light, no darkness shall divide you.",
"11 They ate, and the anger was gone from their hearts.",
"12 That night the two camps joined their fires, and the sound of their laughter was heard along the shore.",
"13 Yahawzhowaa said to His disciples, Blessed are the peacemakers, for they shall be called the children of the Father."
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



    chapter = {
        id: "yahawzhowaa-book-1-inland-waters-prophecy-en",
        title: "Chapter 15",
        subTitle: "The Prophecy of the Inland Waters",
        parent: "yahawzhowaa-great-turtle-en",
        order: 15,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-inland-waters-prophecy-en",
        title: "Chapter 15",
        subTitle: "The Prophecy of the Inland Waters",
        parent: "yahawzhowaa-great-turtle-en",
        order: 15,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-peace-at-ahmnami-en",
        followingChapter: "yahawzhowaa-book-1-return-to-mitchimakinak-en",
        content: [
"1 From Ahnami-zaaga’igan Yahawzhowaa went deeper into the land, where the waters flow toward the heart of Mishigami.",
"2 The people of those lakes came to hear Him, for they had heard of His works by the straits and the bay.",
"3 He stood upon a great rock, and the waters shone before Him.",
"4 He said, These waters are a path, given of the Father, to carry His word to many nations.",
"5 As the streams run into the lakes, and the lakes into the rivers, so shall the light in the vessel flow from lodge to lodge, until the far mountains receive it.",
"6 Then His countenance grew solemn, and He spake a warning.",
"7 There shall come a time when the darkness will seek to bind the waters, to make them serve its own desire; in that day, many vessels will be turned aside.",
"8 But the Father will keep a remnant, whose light shall not fail, and they shall pass through the narrows unharmed.",
"9 The people were troubled at His words, but He comforted them.",
"10 Fear not, for the One who made the waters is greater than he who would bind them.",
"11 He blessed the lakes and the rivers, that they should remain a witness until the end of the age.",
"12 That night He lodged by the shore, and the loons called upon the moonlit water."
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



        chapter = {
        id: "yahawzhowaa-book-1-return-to-mitchimakinak-en",
        title: "Chapter 16",
        subTitle: "Return to Mitchimakinak",
        parent: "yahawzhowaa-great-turtle-en",
        order: 16,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-return-to-mitchimakinak-en",
        title: "Chapter 16",
        subTitle: "Return to Mitchimakinak",
        parent: "yahawzhowaa-great-turtle-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-inland-waters-prophecy-en",
        followingChapter: "yahawzhowaa-book-1-council-of-the-elders-en",
        content: [
"1 When the season of the inland journey was ended, Yahawzhowaa returned to the Great Turtle, for He desired to speak once more to the people there before going westward.",
"2 The canoes bore Him swiftly through the straits, and the island rose before Him in the light of the setting sun.",
"3 The people came to meet Him at the eastern landing, singing the song of welcome.",
"4 He went up to the council lodge, and the elders gathered.",
"5 He said, The four winds shall carry the Father’s light: to the north for the steadfast, to the south for the fruitful, to the east for the watchful, and to the west for the seekers.",
"6 Let every vessel here be filled, for the journey of the light hath begun.",
"7 He spake also a parable, saying, A fire on the hill can be seen from many lodges; but if it be hidden, the valley is in darkness. Ye are the fire; hide it not.", 
"8 The people pledged to keep the flame.",
"9 Yahawzhowaa blessed the island, saying, May the Great Turtle bear you safely until the day I return.",
"10 That night He slept in the hollow of Gichi-Asin, and dreamed of the mountains that awaited Him far to the west.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

*/

    chapter = {
        id: "yahawzhowaa-book-1-council-of-the-elders-en",
        title: "Chapter 17",
        subTitle: "The Council of the Elders",
        parent: "yahawzhowaa-great-turtle-en",
        order: 17,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-council-of-the-elders-en",
        title: "Chapter 17",
        subTitle: "The Council of the Elders",
        parent: "yahawzhowaa-great-turtle-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-return-to-mitchimakinak-en",
        followingChapter: "yahawzhowaa-book-1-blessing-of-the-waters-en",
        content: [
"1 And it came to pass that word was sent to the villages round about Mitchimakinak, calling the elders to council.",
"2 From the shores of Gichi-Gami, from the headlands of Mishigami, and from the inland waters they came, bearing staffs of cedar as a sign of their office.",
"3 They entered the great lodge upon the island, where a fire burned in the center and mats were laid for all.",
"4 Yahawzhowaa sat among them, and the light of the fire was upon His face.",
"5 He said, Ye are as the keepers of the lodge in the Father’s house; unto you is given the charge to guard the flame and guide the people.",
"6 Let thy council be as the unbroken circle, without end and without breach, for thus is the Kingdom of Heaven.",
"7 An elder from the western shore said, Master, what is the sign of the true council?",
"8 Yahawzhowaa answered, Where mercy and truth meet together, and righteousness and peace kiss each other, there is the council of the Father.",
"9 He told them a parable, saying, A tree by the water spread its roots wide and gave shade to many; but when its roots were cut by the quarrel of two keepers, the tree withered, and all who sought shelter were left bare.",
"10 So is the council that letteth strife enter: it becometh as a lodge with no roof.",
"11 The elders bowed their heads, for the word pierced their hearts.",
"12 They pledged to walk in unity and to teach the people as one voice.",
"13 Yahawzhowaa blessed them, saying, The Father shall keep thy circle unbroken if thy light remain full.",
"14 They shared food and the cup together, and the council ended in peace.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
/*

    chapter = {
        id: "yahawzhowaa-book-1-blessing-of-the-waters-en",
        title: "Chapter 18",
        subTitle: "The Blessing of the Waters",
        parent: "yahawzhowaa-great-turtle-en",
        order: 18,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-blessing-of-the-waters-en",
        title: "Chapter 18",
        subTitle: "The Blessing of the Waters",
        parent: "yahawzhowaa-great-turtle-en",
        order: 18,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-council-of-the-elders-en",
        followingChapter: "yahawzhowaa-book-1-farewell-at-the-turtles-back-en",
        content: [
"1 And it came to pass that Yahawzhowaa went unto the western point of Mitchimakinak, where the waters of Gichi-Gami and Mishigami meet in a great current.",
"2 The people followed Him, and the sound of the waves was loud upon the rocks.",
"3 He lifted His hands over the waters and prayed, saying, O Father of all rivers and seas, bless these straits, that all who pass may find safe crossing if their vessel be full of Thy light.",
"4 Let the waters bear witness to Thy covenant until the sun and moon are no more.",
"5 He cast a handful of cedar boughs upon the current, and they were carried swiftly into the meeting of the lakes.",
"6 Turning to the people, He said, As these boughs are carried by the flow, so is the soul borne by the will of the Father; trust His course and fear not the deep.",
"7 The wind stilled, and the surface shone as polished stone.",
"8 The people knew that a sign had been given, and they bowed in reverence.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



    chapter = {
        id: "yahawzhowaa-book-1-farewell-at-the-turtles-back-en",
        title: "Chapter 19",
        subTitle: "The Farewell at the Turtle’s Back",
        parent: "yahawzhowaa-great-turtle-en",
        order: 19,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-farewell-at-the-turtles-back-en",
        title: "Chapter 19",
        subTitle: "The Farewell at the Turtle’s Back",
        parent: "yahawzhowaa-great-turtle-en",
        order: 19,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-blessing-of-the-waters-en",
        followingChapter: "yahawzhowaa-book-1-departure-toward-path-en",
        content: [
"1 And Yahawzhowaa returned once more to Gichi-Asin, the Standing Stone, for the time of His departure was at hand.",
"2 The people gathered at its base, bringing those yet sick in body or heavy in spirit.",
"3 He healed them all, and spoke blessings over their children and their work.",
"4 An elder said, Master, wilt Thou come again to us?",
"5 Yahawzhowaa answered, In the time appointed, I shall return; but my light shall remain with you if ye keep it.",
"6 Let not the darkness take thy flame, and the Great Turtle shall bear thee in safety.",
"7 He taught them one last parable, saying, A keeper of the lodge went away for a season, leaving the fire burning; when he returned, he found it brighter than before, for the people had tended it as their own.",
"8 So shall it be with My word if ye guard it.",
"9 They wept, yet their hearts were strengthened.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-departure-toward-path-en",
        title: "Chapter 20",
        subTitle: "Departure Toward the Path of Many Waters",
        parent: "yahawzhowaa-great-turtle-en",
        order: 20,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-1-departure-toward-path-en",
        title: "Chapter 20",
        subTitle: "Departure Toward the Path of Many Waters",
        parent: "yahawzhowaa-great-turtle-en",
        order: 20,
        visible: true,
        previousChapter: "yahawzhowaa-book-1-farewell-at-the-turtles-back-en",
        followingChapter: "",
        content: [
"1 In the morning, the canoes were made ready, their bows pointing westward toward the long way of rivers and lakes.",
"2 The people of Mitchimakinak came to the eastern landing, singing the song of safe travel.",
"3 Yahawzhowaa stepped into the foremost canoe, and Aganabish and His disciples went with Him.",
"4 He turned to the people on the shore and said, From the Great Turtle unto the Mountains of the Turtle in the far west shall the Father’s light be carried; keep the flame until I return.",
"5 The paddles dipped into the water, and the canoes moved out upon the straits.",
"6 The island grew small behind them, yet the blessing of its people followed.",
"7 And thus ended the first part of His journey, as He set His face toward the Path of Many Waters.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


*/
    res.send("Yahawzhowaa Added");
});


//module.exports = copper;