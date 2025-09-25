import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function (req, res) {
    let book = {};
    let chapter = {};

    book = {
        id: "yahawzhowaa-road-to-siipisiing-en",
        title: "BOOK THREE",
        subTitle: "The Road to Siipisiing",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-three-171x214.jpg",
        thumbnailTitle: "Road to Siipisiing",
        Description: "",
        priceText: "Subscription",
        price: 9.99,
        isParent: true,
        hasChildBooks: false,
        order: 5,
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
        id: "yahawzhowaa-book-3-lights-of-north-en",
        title: "Chapter 1",
        subTitle: "After the Lights of the North",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 1,
        visible: true
    }
    removeBook(book);
    //addBook(book);
    chapter = {
        id: "yahawzhowaa-book-3-lights-of-north-en",
        title: "Chapter 1",
        subTitle: "After the Lights of the North",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-3-suns-food-en",
        content: [
"1 And it came to pass, when the northern lights had danced as banners over the camps of the people, that Yahawzhowaa turned His face toward the setting of the sun, to go by the south shore of Gichigami and onward to the plains.",
"2 With Him went the Twelve Midē´wiwin and Giiwedin-giizhig the Jes’sakkid, and many whose hearts had been healed by His words.",
"3 They left the stony coves where the spruce drinketh the wind, and they walked the sands where the waves write and erase the tracks of men.",
"4 And Yahawzhowaa said, The Father changeth not, though the waters change their face a thousand times in a day.",
"5 As the shore receiveth the wave and is not angered, so receive ye the words of them that strive, and answer with peace.",
"6 They came unto a village whose store was small; for the winter had been bitter, and the fish had gone deep.",
"7 The elders set before them what little they had, and the children watched with wide eyes.",
"8 Yahawzhowaa blessed the food, and it seemed to increase by the sharing; and there was enough for the lodges of the poor.",
"9 The people marvelled, saying, The blessing multiplies as the wind multiplieth the sound of our song.",
"10 Yahawzhowaa spake: The vessel of a man is filled by what it poureth, not by what it keepeth.",
"11 Then He healed a hunter whose hand had been withered by frost; and the man took up his bow again with tears.",
"12 The Twelve went among the lodges two by two, mending quarrels and setting old grievances to rest.",
"13 And Zaagi-idiwin reconciled two brothers who had not spoken since the moon of falling leaves.",
"14 Mashkiki-inini gathered roots under the snow crust and brewed a strength for the weary, and they blessed the Father.",
"15 That night Yahawzhowaa taught of the light in the vessel, saying, The fire within thee is not thy possession but thy participation; thou art warmed because thou consentest to the Giver.",
"16 Quench not the Spirit with envy, neither smother it with fear; open thy lodge to the wind of the Father, and thy coals shall be made living again.",
"17 A woman said, Master, my fire is small; I have failed many times.",
"18 He answered, A small fire that is tended is greater than a great fire forgotten.",
"19 Begin this night with one act of mercy, and the Father shall add tinder unto thy soul.",
"20 Before dawn He went apart to pray, and the Twelve watched as the sky blushed with the coming day.",
"21 Giiwedin-giizhig said, The breath of the South Wind beareth a summons. The plains are calling their own.",
"22 Yahawzhowaa returned, saying, There is a people beyond the rivers whose songs are not yet braided with thine; the Father willeth that they be one cord.",
"23 And He spake a parable: A net of many strands draweth the greater catch; a net of one strand breaketh at the first pull.",
"24 So are the nations; the Father maketh of them a single strength when they bind their cords in peace.",
"25 They set forth again, walking where the ice had retreated and the stones glimmered with meltwater.",
"26 A child ran beside Yahawzhowaa and asked, Whither go we, Master?",
"27 He said, Unto Siipisiing, and unto the hills called Mikinakwajiw, and the waters of Miskwaagamiiwi-zaaga’igan; there shall the word be established among the Pembina.",
"28 The child laughed for joy, and the mothers were comforted.",
"29 At eventide they made camp near a cliff of red stone, and the setting sun made it as a fire upon the face of the land.",
"30 Yahawzhowaa placed His hand upon the rock and blessed it, saying, The earth is a scroll; read ye the faithfulness thereof.",
"31 Ogimaa-bines stood watch on the height, and the loons called upon the dark water.",
"32 The stars kindled like embers cast into a vast sea, and the people slept.",
"33 In the night a fear came upon some for the long way yet before them; but Yahawzhowaa walked among the mats and their fear departed.",
"34 He whispered, The Father is nearer than thy breath; sleep in His nearness.",
"35 Thus began Book the Third upon the Road to Siipisiing, and their feet were strengthened.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-3-suns-food-en",
        title: "Chapter 2",
        subTitle: "Teaching of the Sun’s Food",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 2,
        visible: true
    }
    //removeBook(book);
    addBook(book);
    chapter = {
        id: "yahawzhowaa-book-3-suns-food-en",
        title: "Chapter 2",
        subTitle: "Teaching of the Sun’s Food",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-lights-of-north-en",
        followingChapter: "yahawzhowaa-book-3-two-portages-en",
        content: [
"1 And it came to pass, as they journeyed westward from the cedar grove, that Yahawzhowaa spake unto the Twelve and unto Giiwedin-giizhig concerning the food that is born of the sun.",
"2 And He said, The Father hath set the sun in the heavens to call forth life from the earth; and that which drinketh the light is filled with the light thereof.",
"3 In the land of my youth, beyond the sea, there is a tree in the wilderness called in the tongue of my fathers tamar ( .(תמר 4 It beareth fruit like unto honey, and the heat of the day is gathered into it as into a vessel.",
"5 In the days of my testing, I went into the desert alone, and for ten years I ate of no other food save the tamar.",
"6 By it the Father sustained me; by it my vessel was filled with light; and the oil of life flowed in my flesh as a river hidden beneath the sand.",
"7 The elders in Yerushalayim marvelled when I said, I have meat to eat that ye know not of; yet this was the food of which I spake.",
"8 Then He lifted a small basket of berries they had gathered that day and said, Even as these berries drink of the sun upon these shores, so did the tamar drink in the desert.",
"9 And as it fed me, so will the sun-fed food feed any vessel that keepeth itself in purity.",
"10 One of the Midē´wiwin asked, Master, is all food the same in thy sight?",
"11 And He answered, Nay; for there is food that dieth in darkness, and food that is born in the light.",
"12 The food that hath seen the face of the sun and not been corrupted by man’s hand is like a lamp without blemish in the lodge of the body.",
"13 Then spake He a parable, saying, A man had two gardens; the one he set in the open air, that it might see the rising and the setting of the sun; the other he covered with many roofs and walls.",
"14 The first brought forth fruit sweet and strong, and all that ate thereof were filled with health; the second brought forth fruit pale and weak, and those that ate thereof hungered still.",
"15 Even so is the soul that eateth of the light: it is made strong, and the oil of joy runneth in its bones.",
"16 The people pondered His words, for they had never heard it spoken thus.",
"17 A youth brought forth fish taken from the stream, saying, This hath not seen the sun; is it then unworthy?",
"18 And Yahawzhowaa answered, Every gift of the Father is good; but the strength that is in the sun is for the strengthening of the vessel, and he that would shine as the sun must eat as the sun feedeth.",
"19 Then He laid hands on the youth, and the light in His palms seemed to pass into the boy, and his eyes grew bright.",
"20 The women prepared a meal of roots and berries, and Yahawzhowaa blessed it, saying, May the light of the Creator dwell in this food and in all who eat thereof.",
"21 In that place many were healed of weariness by the eating of the berries, and they glorified the Father.",
"22 Giiwedin-giizhig wrote these words in his bundle, to be told to the people of the north and the plains.",
"23 That night they camped by a great rock whose face looked toward the sunset, and they named it Mishomis-asin, the Grandfather Stone.",
"24 Yahawzhowaa prayed there, and the moonlight crowned Him as with silver.",
"25 The Twelve sat about Him in silence, and the fire burned low.",
"26 Then He said softly, Keep the vessel pure, keep the food pure, and the light shall not depart from thee.",
"27 And they slept in peace, for no enemy drew near that night.",
"28 In the morning, the people brought Him gifts of the land — corn, wild rice, berries, and fish — and He blessed them all.",
"29 Yet He set apart the berries and the grains that had ripened beneath the open sun, and these He gave to the sick.",
"30 And behold, they recovered swiftly, and the fame of this spread through the villages.",
"31 Thus began the teaching of the Sun’s Food among the Anishinaabe, and it was remembered for generations.",
"32 And He said again, Not by bread alone doth man live, but by every ray of light which proceedeth from the Father’s hand.",
"33 The people sang songs of thanksgiving, and the echoes reached far into the forest.",
"34 The wind from the west carried the scent of cedar and the promise of prairies yet unseen.",
"35 And Yahawzhowaa set His face again toward the path that led to Siipisiing.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-two-portages-en",
        title: "Chapter 3",
        subTitle: "The Two Portages",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 3,
        visible: true
    }
    //removeBook(book);
    addBook(book);
    chapter = {
        id: "yahawzhowaa-book-3-two-portages-en",
        title: "Chapter 3",
        subTitle: "The Two Portages",
        parent:"yahawzhowaa-road-to-siipisiing-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-suns-food-en",
        followingChapter: "yahawzhowaa-book-3-reed-and-flint-en",
        content: [
"1 And it came to pass they reached a place of split waters, where two carry-ways began, the one short and steep, the other long and gentle.",
"2 The people were divided, for some loved swiftness and some loved ease.",
"3 Yahawzhowaa bade them sit, and He taught them of the way within.",
"4 There is a short path by which a man conquereth his anger quickly, yet it is steep; and there is a long path whereby a man learneth patience by little burdens, and it is gentle.",
"5 Choose neither for pride, but for obedience; for the Father’s will is the level ground beneath both.",
"6 Then He spake a parable: Two canoes were carried to the height of land. The first rushed and stumbled, and the vessel was bruised; the second kept steady steps, and the vessel came whole to the new river.",
"7 Better a whole vessel at evening than a broken vessel at noon.",
"8 The Twelve apportioned the burdens, and each took what was meet.",
"9 Bimose-inini bore the heaviest, singing as he went; and the young were strengthened by his song.",
"10 Along the way a child fell, and Zaagiidiwin lifted him and bore him laughing, and the mother wept for joy.",
"11 At the crest Yahawzhowaa stood, and from thence the land fell away to an unknown west.",
"12 He stretched forth His hand and blessed the waters, calling them brothers, for they would bear the teaching to far off lodges.",
"13 They set the canoes down upon a new stream, and it ran toward a country they had not seen.",
"14 Yahawzhowaa said, Thus doth the Father turn thy private trials into a current for many.",
"15 He maketh a river of thy repentance, that others may drink.",
"16 At evening they found a hollow of red stone, and the sound of the new river was as breath upon sleep.",
"17 The elders of a nearby village came with gifts and questions.",
"18 Yahawzhowaa healed a man whose knees had failed from years of carrying.",
"19 He said to him, Thy burdens shall now be borne by thy joy.",
"20 And the man went leaping like a stag upon the hillside.",
"21 They shared the meal of corn cakes and berries ripened in open sun.",
"22 Yahawzhowaa taught again, Food is counsel: let it be simple, let it be bright with the light that made it.",
"23 Mashkiki-inini taught the children to bless the earth before gathering.",
"24 Ogimaa-bines marked a safe crossing for the old.",
"25 In the last light Yahawzhowaa traced upon the ground a line from east to west and said, This is thy life: a straight mercy through winding days.",
"26 Look oft to the dawn and oft to the setting; thou shalt remember whence thou comest and whither thou goest.",
"27 The night was soft with the sound of owls.",
"28 In the morning the two portages were one memory, and none boasted of his choice.",
"29 They launched upon the new stream, and laughter went before them like scouts.",
"30 The women sang, and the men kept stroke.",
"31 The children slept in the middles of the canoes like little bundles of peace.",
"32 Yahawzhowaa smiled, and His heart praised the Father.",
"33 A mist rose, and the river wore it as a garment.",
"34 And they were not afraid.",
"35 Thus passed the lesson of the Two Portages into the keeping of the people.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-reed-and-flint-en",
        title: "Chapter 4",
        subTitle: "The Reed and the Flint",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 4,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-reed-and-flint-en",
        title: "Chapter 4",
        subTitle: "The Reed and the Flint",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-two-portages-en",
        followingChapter: "yahawzhowaa-book-3-night-watchfires-en",
        content: [
"1 They came upon a village where words had become sharp as flint, and the reeds of gentleness were cut down for fire.",
"2 Neighbours would not share the landing, and kin would not speak.",
"3 Yahawzhowaa sat in the common place and waited; and the children, being bold, came first.",
"4 He traced in the dust two signs: a reed bending, and a flint sparking.",
"5 He said, The Father made both: the reed to bow and rise, the flint to make fire; yet if thou makest a spear of the one and a wound of the other, thou hast forgotten the Giver.",
"6 Then He spake a parable: A man planted reeds along his shore to hold the bank; his neighbour heaped flint to build a hearth. In a season of flood the reed kept the soil, and in a season of snow the hearth kept the children. But when envy burned, each mocked the other’s gift, and both houses suffered: the shore fell in, and the fire went out.",
"7 See then that ye honour the differing gifts; for the Father is the Weaver of a many-threaded world.",
"8 Giiwedin-giizhig rose and said, Let us set two signs by the river: a bundle of reed and a ring of stone; and let the children rehearse their uses before the elders.",
"9 The people consented, and the little ones spoke in turn; and the elders were ashamed that they had learned last what the children learned first.",
"10 Yahawzhowaa healed an old woman whose ears were shut by years of scorn; and when she heard again, the first sound that entered was the laughter of children, and she blessed the Father.",
"11 He mended also the landing by blessing; for the river laid down new sand in the night.",
"12 The two neighbours brought fish from one net, and bread from one fire.",
"13 They ate with Yahawzhowaa and with one another.",
"14 He said, Make a covenant of reed and flint: that tenderness shall hold thy banks, and truth shall warm thy houses.",
"15 They bound cedar cords around the landing post and marked it with a sign.",
"16 The Twelve rejoiced, for they saw the kingdom in a simple shore.",
"17 At dusk Yahawzhowaa taught, The vessel within thee needeth both softness and flame: bow to the breath of the Spirit, and be kindled by the truth.",
"18 Hardness alone maketh tyranny; softness alone maketh drift.",
"19 But mercy and firmness together are as shore and fire.",
"20 The people slept without fear that night.",
"21 In the morning, reed cutters and stone workers traded tools.",
"22 Waasamoog sang a bright song as the sun rose over the water.",
"23 Ozaawaa-bineshiinh ran from lodge to lodge crying, Peace is better than pride! 24 The women braided grasses for mats, and the men set hearths where the children might gather.",
"25 Yahawzhowaa blessed the work of their hands.",
"26 He said, Where love buildeth, the Father layeth the cornerstone.",
"27 They loaded the canoes with gifts they had refused each other yesterday.",
"28 Laughter sat upon their paddles.",
"29 The river widened, and the banks receded as grudges recede.",
"30 Bimose-inini looked back and said, A straight water followeth a straight heart.",
"31 Yahawzhowaa answered, And a rejoicing water followeth a reconciled heart.",
"32 They rested at mid-day under a leaning pine, and its shape preached the gospel of yielding.",
"33 A heron lifted from the shallows like a grey thought freed from care.",
"34 The people gave thanks without words.",
"35 And the shore of Reed and Flint became a proverb in the mouths of travellers.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-night-watchfires-en",
        title: "Chapter 5",
        subTitle: "The Night of Watchfires",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 5,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-night-watchfires-en",
        title: "Chapter 5",
        subTitle: "The Night of Watchfires",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-reed-and-flint-en",
        followingChapter: "yahawzhowaa-book-3-signs-sandbar-en",
        content: [
"1 A rumour went before them that raiders from afar sought to seize canoes and food along the way.",
"2 Fear began to stir in the lodges as wind stirs the leaves before a storm.",
"3 The elders asked Yahawzhowaa, Shall we flee by night?",
"4 He said, Set watchfires rather; for fear is a thief that prospereth in the dark.",
"5 They ringed the camp with small steady flames, not great blazes to boast, but lamps to reassure the little ones.",
"6 Yahawzhowaa went from fire to fire, speaking quietly to each watcher.",
"7 Let thy flame be tended, not loud; let thy eye be kind, not dull; let thy ear be open to truth, not gossip.",
"8 Ogimaa-bines climbed a bluff and listened to the long land; Minwaadiziwin comforted mothers with songs of dawn.",
"9 Makade-waaboo brewed a draught for courage from cedar and wintergreen.",
"10 Near midnight footsteps came out of the brush; men hungry and hard-pressed.",
"11 The Twelve stood up, not with spears but with bread.",
"12 Yahawzhowaa stepped into the ring of firelight and said, If ye seek plunder, ye will find ashes; if ye seek mercy, there is bread.",
"13 The strangers stared, for they had never been met so.",
"14 Their leader said, We are empty; our hunts have failed; our shame is great.",
"15 Yahawzhowaa answered, Shame is a bear that eateth the strength of a man; come sit and be men again.",
"16 He gave the first loaf into the hands of the leader and bowed to receive it back broken; and the circle widened.",
"17 They ate until the edge of anger was dulled.",
"18 Then Yahawzhowaa taught, A watchfire is not for pride but for welcome; it telleth the lost, There is a place yet for thee.",
"19 Giiwedin-giizhig spoke a blessing in the old tongue over the strangers, and tears ran down rough faces.",
"20 Before dawn, the strangers rose to go, leaving knives and a bundle of furs as repentance.",
"21 Yahawzhowaa said, Keep your knives; bring your hearts.",
"22 He set two of the Midē´wiwin to guide them toward new hunting grounds.",
"23 The camp breathed as one chest, in and out, easy again.",
"24 When the sun rose, mothers showed children the circle of ash, saying, This is what peace leaveth behind.",
"25 Yahawzhowaa smiled and said, And see — no blood upon the sand.",
"26 They gathered the coals, not to waste, and kindled breakfast in quiet joy.",
"27 The river gave up a silver run of fish as if to honour the choice of mercy.",
"28 At the narrowing of the stream, they laid tobacco upon the current.",
"29 The day was bright and long, and their paddles told a contented tale.",
"30 Some sang; some were silent; all were fed.",
"31 Yahawzhowaa, in the stern, watched the wake draw a straight line that slowly faded and said, So pass the deeds of men; but the Father remembereth the heart that chose peace.",
"32 A hawk wrote circles upon the air as if to seal the lesson.",
"33 The bluffs opened to show a valley broad and green even in the cool, and hope rose like steam from hot stones.",
"34 They landed at evening and found the ground warm with welcome.",
"35 And so the Night of Watchfires became a lamp for many villages thereafter.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-3-signs-sandbar-en",
        title: "Chapter 6",
        subTitle: "Signs upon the Sandbar",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 6,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-signs-sandbar-en",
        title: "Chapter 6",
        subTitle: "Signs upon the Sandbar",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-night-watchfires-en",
        followingChapter: "yahawzhowaa-book-3-under-great-tree-en",
        content: [
"1 At the mouth of a broad river the water shoaled, and a long sandbar lay hidden beneath the ripple.",
"2 Canoes from other journeys had broken there, and men cursed the place.",
"3 Yahawzhowaa bade the people wait upon the bank while He walked out upon the water, feeling with His staff the shape of the unseen ground.",
"4 He marked with driftwood a safe line, and called, Follow after me by this path; fear not the shallows.",
"5 They came across without mishap, and wonder filled their faces.",
"6 He said, Thus also in doctrine and counsel: many run aground for want of a patient eye; mark the signs, and the Father’s mercy shall be a channel to thee.",
"7 Then He wrote upon the wet sand three words of the old tongue: Truth, Mercy, Courage.",
"8 These be the cairns of thy crossing, He said; lose not one.",
"9 The elders asked, Why Courage with Truth and Mercy?",
"10 Because Mercy without Courage becometh silence, and Truth without Courage becometh cruelty; but Courage bindeth them in righteousness.",
"11 A great fish turned in the clear water as if to assent.",
"12 Children danced on the firm bar and laughed at the water’s play.",
"13 Yahawzhowaa lifted a little one and set him upon His shoulder; the child clapped and the hearts of the mothers were at rest.",
"14 Mashkiki-inini took sand in his hand and said, This also healeth, when mixed with oil.",
"15 Yahawzhowaa answered, All the works of the Father are medicines when received with thanksgiving.",
"16 He healed a woman whose blood had been heavy and long; and she became strong.",
"17 He set a man free whose mind had been entangled by fear of drowning; and he walked the bar singing.",
"18 The Twelve gathered the driftwood signs into a small pile and called it The Witness of the Bar.",
"19 Toward evening the river people brought a child not breathing, taken sudden by the cold water.",
"20 The mothers cried out, and hope faltered like a blown flame.",
"21 Yahawzhowaa laid the child upon His knees and called softly as one calleth to a sleeper: Little one, the morning is come.",
"22 The child’s chest rose, and colour returned, and the camp shook with relief.",
"23 Yahawzhowaa said, Let this bar be remembered as The Turning, for here despair turned back from the door.",
"24 Giiwedin-giizhig proclaimed a fast of thanks until the setting of the sun.",
"25 At sunset, they broke fast.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-under-great-tree-en",
        title: "Chapter 7",
        subTitle: "Under the Great Tree",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 7,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-under-great-tree-en",
        title: "Chapter 7",
        subTitle: "Under the Great Tree",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 7,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-signs-sandbar-en",
        followingChapter: "yahawzhowaa-book-3-trial-of-light-en",
        content: [
"1 And it came to pass, after they had passed The Turning at the river’s mouth, that Yahawzhowaa espied a mighty tree upon a rise near the water, whose branches were broad as a tent of cedar and whose roots went down as spears into the red earth.",
"2 And He said unto the Twelve and unto Giiwedin-giizhig, Here shall we pitch our camp, and under this bough shall wisdom sit down as an elder among us.",
"3 The people gathered; mothers with little ones, elders leaning on staffs, and youths whose eyes were quick; and the shade received them as a kindly lodge.",
"4 Yahawzhowaa sat upon a root that rose like the back of a sleeping turtle, and the wind passed through the leaves with a sound as of many soft drums.",
"5 And He said, This day will I speak by turns: first in poem, then in parable, and then in song; and so shall I do until your hearts be watered like fields after rain.",
"6 The Midē´wiwin spread woven mats; Waabishki-makwa stood to the east, Ogimaa-bines to the west, and Mashkikiinini made ready a draught of cedar for the weary.",
"7 And Yahawzhowaa lifted His face, and began with poetry: O Tree of the Father, whose fingers count the winds, teach us to hold and to loose; to hold the truth as a nest holdeth the egg, to loose our anger as the leaf looseth its grip in autumn.",
"8 O River of the Giver, keepeth not thy water in pride; thou pourest thyself and art not diminished: even so let our hearts be spent without fear, and we shall be made full in the pouring.",
"9 The people said softly, Amen, and the leaves answered with a trembling light.",
"10 Then He gave unto them a parable, saying, A certain man planted two groves; in the one he pruned each branch with wisdom, and in the other he let all grow for boasting. When the storm came, the proud grove fell with a great crashing; but the humble grove bent and rose again, and birds returned to sing therein.",
"11 He that keepeth his spirit pruned with truth and mercy shall not break in the day of wind; but he that groweth by pride only shall be cast down of his own weight.",
"12 And He began a song, and His voice was low and sweet, and the elders marvelled to hear an old tongue upon a new shore: “Abba, sh’b’shemaya, nithqadash shmokh; shlama nehwe ‘am khon.” 13 And He said, This is to say: Father in the heavens, hallowed be Thy name; let peace be with you.",
"14 The children repeated the words, stumbling and laughing, and Yahawzhowaa smiled as a father smileth when a little one taketh first steps.",
"15 Again He uttered poetry: Not by iron is the soul bound, but by a small cord within; and not by iron is it loosed, but by a breath that saith, Forgive.",
"16 The light in the vessel is quick to mercy; it remembereth not the count of wrongs, but the count of dawns.",
"17 And He followed with a parable: There was a woman who set a bowl in a sunlit place and another in a corner. She said, The corner bowl is safe from dust; yet it turned sour. But the bowl in the light kept sweet. So is the heart: it keepeth well when it standeth where the Father’s face looketh upon it.",
"18 Then He sang again, slower than before: “Talitha, qumi; q’m sh’har, q’m orah” — and He interpreted, Little one, arise; arise, O morning, arise, O light.",
"19 And certain that were heavy in sorrow felt their strength return, and they stood as wheat that findeth the wind.",
"20 Giiwedin-giizhig whispered, The Spirit moveth under this bough as a river under ice when the thaw beginneth.",
"21 Yahawzhowaa raised His hand and spoke poetry: Blessed be the wound that becometh a window; for through it the Father’s day may enter.",
"22 Blessed be the tear that watereth the root of compassion; for it shall bring forth a tree whose fruit feedeth enemies and friends alike.",
"23 And He set forth a parable of the Sun’s Food to bind their remembrance: A traveller kept two stores — one of things sun-kissed, one of things shut away. In the time of weakness he reached for what had seen the day, and was made strong; but when he ate of what had never known the light, his courage failed. So keep thy counsel in the sun of truth; hide it not in the dark of fear.",
"24 Then a song rose from Him like incense: *“Sh’lama, sh’lama ‘aleikhon; orah d’Hayyeh b’gawkon” — *Peace, peace be upon you; the light of Life be within you.",
"25 And the people marvelled, for though the words were not the words of their mothers, yet their hearts knew them as water knoweth the cup.",
"26 He spoke again in poetry: O Leaf that listenest to the wind, teach me obedience; for thou turnest not to thine own will, but to the sun that feedeth thee.",
"27 O Root that drinkest where eyes behold not, teach me faith; for thou hast no praise of men and yet keepest the giant from falling.",
"28 Then a parable of kinship He told: Three lodges stood near a crossing: the first kept only for itself and was rich alone; the second shared when praised; the third shared before speech. When winter howled, the first was besieged with envy and fear; the second grew thin with waiting for “thank thee”; but the third had many fires and one joy. He that giveth before asking hath already eaten of the Father’s banquet.",
"29 And He sang softly: *“Rakhma d’Abba naher b’libbi” — *The compassion of the Father shineth in my heart.",
"30 The girls plaited grasses in time with the song, and the boys beat gently on the rims of baskets, and the elders’ eyes were wet.",
"31 Again He spake poetry to the Twelve: Ye are not torches to burn swiftly and be spent, but lamps to be trimmed morning and even; let the oil be truth, the wick humility, the flame joy.",
"32 And He added a parable for the Midē´wiwin: A healer had two pouches: in the one he kept medicines with names; in the other he kept silence. He healed with both; for sometimes the body needeth a root, and sometimes it needeth that a man be still with it until the fear depart.",
"33 Then a song that sounded like a brook in spring: *“Qol d’mamā d’raqheek — sh’meh d’Abba q’ree” — *In the thin still voice the name of the Father is called.",
"34 And He said, Learn to hear the small sound; for the thunder getteth praise, but the seed is planted in silence.",
"35 He rose a little upon the root and spoke poetry to the travellers who would go farther than their strength: Walk not faster than thy love; for if thou outstrip thy compassion, thou wilt arrive where I am not.",
"36 Then the parable of the Long Shadow: A man set out late and feared the night, for his shadow was great upon the path.",
"He said, My fear is long; but at dawn the shadow was behind him and small. Many fear the length that is but the work of a low sun. Wait for the rising, and thy dread shall shorten.",
"37 And He sang a refrain all could learn, mixing their tongue with His: *“Abba, nigaan; Abba, bimose; Abba, zoongide’” — *Father, lead; Father, walk; Father, make brave.",
"38 The whole camp answered, and the great tree seemed to tremble with gladness, and birds settled nearer as if to listen.",
"39 Then Yahawzhowaa stretched His hands over them all and blessed them in poetry: Be ye as this tree — depth without boasting, breadth without grasping, shade without price.",
"40 And when ye move from this place, carry the leaf of this day in thy memory, that Siipisiing may know the scent of this mercy when ye come.",
"41 The sun turned toward evening, and the light slanted like spears of gold between the boughs; and He bade them rest, saying, On the morrow we shall sit again, and the order shall be poem, parable, and song, until your hearts be a harvest.",
"42 The mothers laid the little ones upon mats, and the men kept a quiet watch; and Giiwedin-giizhig wrote the sayings as a scribe of rivers.",
"43 And the elders whispered, Never have our fathers heard such mingling of tongues and truths under one shade.",
"44 Yahawzhowaa looked out upon the west and was silent, as a man who beholdeth the far home of his friend.",
"45 And the tree kept their secrets as a faithful elder keepeth counsel, and the night drew on gentle and unafraid.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-trial-of-light-en",
        title: "Chapter 8",
        subTitle: "Trial of the Light",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 8,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-trial-of-light-en",
        title: "Chapter 8",
        subTitle: "Trial of the Light",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 8,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-under-great-tree-en",
        followingChapter: "yahawzhowaa-book-3-fire-word-within-en",
        content: [
"1 And it came to pass that Yahawzhowaa sat beneath the widebranched omashkooz (elm tree), and the people gathered, for the shade thereof was cool upon their brows.",
"2 And the winds from the great waters moved softly, bearing the scent of giizhik (cedar) and mashkodewashk (sage).",
"3 And He lifted up His voice, saying, “The heart of man is like the vessel in which light dwelleth; if the vessel be pure, the light is clear, and if the vessel be unclean, the light is dimmed.” 4 Then He spake unto them a parable, saying, “There was a woman who kept a small lamp in her lodge. And though the nights were long, she filled it daily with the oil pressed from the berries of the bush.",
"5 And her children asked her, ‘Why dost thou labour so, when the dawn shall come?’",
"6 And she answered, ‘Because the night is the trial of the light, and whoso keepeth it burning shall greet the dawn with sight and not with stumbling.’",
"7 Even so is the soul of man: to keep the oil of truth within, though the darkness presseth hard.”",
"8 And the people said, “Aaniin dash?” (What then?) How shall we keep this oil within?”",
"9 Yahawzhowaa answered, “Guard thy words, for they are the smoke or the fragrance of thy lamp. Guard thy thoughts, for they are the flame. Guard thy deeds, for they are the oil.”",
"10 And a young man from the Crane clan asked, “If the lamp be broken, can it be made whole?”",
"11 He said, “Verily, the Maker of all vessels mendeth that which is shattered, if the shards be brought to Him without pride.”",
"12 And He taught them a song in the tongue of His mother, saying:",
"13 Nura’ d’nuhra, b’libi yahair (The light of light, in my heart it shines),",
"14 B’rikh at Yah, b’kol nishmati (Blessed art Thou, O Yah, with all my soul),",
"15 Shamra li, shamra li, shamra li (Keep me, keep me, keep me).",
"16 And they sang with Him until the air was filled with the sound of many voices.",
"17 And He said, “This song is oil for thy vessel; sing it in the morning, at the setting of the sun, and in the night watches.”",
"18 And a woman from the Bear clan wept, saying, “My vessel hath long been empty.”",
"19 He placed His hand upon her head, and warmth spread through her body, and she cried aloud for joy.",
"20 And all marveled, saying, “Truly, the Light dwelleth among us.”",
"21 Then He bade them return to their lodges and share the parable and the song, that the whole village might be filled with light.",
"22 And the people departed slowly, for they desired still to sit in His presence.",
"23 But Yahawzhowaa withdrew into the deeper shade of the omashkooz, and prayed in silence.",
"24 And a gentle rain began to fall, like a blessing upon the leaves.",
"25 And it was the beginning of many teachings given beneath that tree.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-fire-word-within-en",
        title: "Chapter 9",
        subTitle: "Fire is the Word Within Thee",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 9,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-fire-word-within-en",
        title: "Chapter 9",
        subTitle: "Fire is the Word Within Thee",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-trial-of-light-en",
        followingChapter: "yahawzhowaa-book-3-one-strand-broken-en",
        content: [
"1 And it came to pass, on the day following, the clouds gathered thick above the camp.",
"2 And the people sat beneath the great omashkooz (elm) with Yahawzhowaa, for they feared the storm that might break.",
"3 And Yahawzhowaa lifted up His eyes, and spake: “The Father setteth His light above the clouds, and it is hidden but not gone.”",
"4 Even as He spake, a wind moved upon the branches, and the clouds parted suddenly.",
"5 And a great beam of light fell upon Him, so that His face shone like the morning over the great waters.",
"6 And the people fell to their knees, for the glory was great to behold.",
"7 Yahawzhowaa said unto them, “Thus is it with the soul: storms may gather, yet the sun of the Father is never quenched.”",
"8 And He began to sing in the tongue of His fathers:",
"9 Shapir nura, al nafshi nura (Beautiful light, upon my soul the light),",
"10 La yid’akh, la yistattar (It shall not fade, it shall not hide),",
"11 B’rikh at Abba, d’natnan nura l’alma (Blessed art Thou, Father, who giveth light to the world).",
"12 And His voice was like the river when it runneth swift and deep.",
"13 The people wept, for the song entered into their hearts like warm fire in the cold moon.",
"14 And when He had ended, He spake a parable:",
"15 “A man had a lodge by the shore. And a storm came, and the wind beat upon the lodge, and the rain came in through the roof.",
"16 But the man did not despair; he set his fire in the center, and its warmth filled the lodge until the storm passed.",
"17 When the morning came, he mended the roof, but the fire he kept burning all the day.",
"18 This fire is the Word within thee; keep it through the storm, and in the morning, strengthen the roof of thy faith.”", 
"19 And He asked them, “Hath not the Creator set the sun in the heavens to remind thee of His constancy?”",
"20 And they answered, “It is so.”",
"21 Then He took water from a nearby stream and poured it upon His hands, saying, “Even so must ye keep clean the vessel of thy body, for light and purity dwell together.”", 
"22 And a child brought forth berries, and He blessed them and gave them to the people.",
"23 He said, “The sweetness of the berry cometh after the rain; even so cometh joy after sorrow.”",
"24 Many who were sick came forth, and He laid His hands upon them, and they rose up whole.",
"25 And the people marveled yet again, and their songs filled the evening air.",
"26 And thus ended that day, with the sun setting clear and golden over the waters.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-one-strand-broken-en",
        title: "Chapter 10",
        subTitle: "If One Strand Be Broken",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 10,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-one-strand-broken-en",
        title: "Chapter 10",
        subTitle: "If One Strand Be Broken",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-fire-word-within-en",
        followingChapter: "yahawzhowaa-book-3-living-waters-en",
        content: [
"1 On the third day beneath the great omashkooz, Yahawzhowaa spake a long parable unto them.",
"2 “Hearken, O ye who dwell by the waters: there was a fisherman who cast his net into the deep.",
"3 And the net was torn in one place, so that many fish escaped.",
"4 The man said in his heart, ‘It is but a small tear; I shall mend it after the morrow.’ 5 But each day more fish escaped, until the man’s household was hungry.",
"6 At last he mended the net, but it was late, and the season of plenty was past.",
"7 So is the man whose heart is torn by small untruths, thinking them of no harm. “Mend them quickly, lest thy season of light be past.”",
"8 And He taught them how the mending is done: “By truth in the inward parts, by mercy toward thy neighbor, and by prayer to the Father.”",
"9 Then He began a song:",
"10 Ana meshare, ana menakker (I will mend, I will make clean),",
"11 B’ahava u’shliama (With love and with peace),",
"12 Nura b’libi, lo yid’akh (The light in my heart shall not fade).",
"13 The elders of the village nodded, for the song was like the old songs of their grandfathers.",
"14 And a man from the Loon clan said, “Master, sing it again.”", 
"15 And Yahawzhowaa sang it thrice, until all knew the words, and their voices rose as one.",
"16 The children danced in the clearing, for the melody was glad and full of hope.",
"17 Yahawzhowaa said, “When ye mend thy nets, sing thus, that thy work be filled with joy.”", 
"18 And He spoke of the nets of the heart, which are woven with deeds, thoughts, and words.",
"19 “If one strand be broken, the others shall bear the strain, but not for long; therefore mend daily.”",
"20 And He looked upon the faces before Him, saying, “I tell thee, a people whose nets are whole shall never lack for the catch.”",
"21 That day He blessed the fishermen, and their nets came up full.",
"22 And they brought part of the catch to feed the widow and the orphan.",
"23 Yahawzhowaa rejoiced, saying, “Now is the kingdom come near to this place.”",
"24 And the people sat late into the night, speaking of His words.",
"25 And the fire in the center of the gathering did not go out till morning.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-living-waters-en",
        title: "Chapter 11",
        subTitle: "Living Waters",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 11,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-living-waters-en",
        title: "Chapter 11",
        subTitle: "Living Waters",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-one-strand-broken-en",
        followingChapter: "yahawzhowaa-book-3-path-will-walk-en",
        content: [
"1 And it came to pass that on the next day, Yahawzhowaa sat cross-legged beneath the omashkooz, and the morning mist rose from the ground.",
"2 The people gathered early, for they had slept little, their hearts stirred by the songs of the night before.",
"3 Yahawzhowaa lifted a small branch, still wet with dew, and held it up for all to see.",
"4 “Behold this branch,” He said, “it drinketh in the water given to it in the night. Yet it neither boasteth nor straineth, for the gift is free.”",
"5 And He spake a parable: “A man went each morning to fetch water from the spring. But on a day when the spring ran low, he cursed it, saying, ‘Thou hast failed me.’",
"6 Yet the next day, the spring was full again, and the man returned as though he had not cursed it.",
"7 Verily, I say unto thee, the spring remembereth not his cursing, and giveth water still.",
"8 So doth the Father give to thee, even when thy tongue hath spoken folly.”",
"9 Then He began a song in another tongue as was common:",
"10 Mayim khayim, mitokh Abba (Living waters, from within the Father),",
"11 Lo yipasek, lo yisgar (It shall not cease, it shall not be shut),",
"12 Sh’ma qol Abba, ha’omer bo’i (Hear the voice of the Father, who saith “Come”).",
"13 The elders wept, for they had known drought, and the song made their hearts tender.",
"14 And He spake again, “Even as the branch holdeth the dew, so keep ye the gifts of the Spirit. Do not let them run off thee as from a stone.”",
"15 A child from the Bear clan brought Him a carved cup.",
"16 Yahawzhowaa filled it from the stream, blessed it, and passed it among them.",
"17 “Drink, and remember this: what cometh from the Father shall refresh the soul as this water refresheth thy body.”",
"18 Then He healed a woman whose sight was dim, touching her eyes with water from the cup.",
"19 And she cried aloud, “I see the leaves! I see the colors of the morning!”",
"20 All rejoiced, and the sound of their praise was like the call of many birds.",
"21 Yahawzhowaa said, “Let thy praise be like unto this cup — full, and given to all.”",
"22 And He told them of the feast in the world to come, where no vessel shall be empty.",
"23 They sat in silence for a while, hearing the water move over stones.",
"24 Then He whispered, “This sound is the sound of the Father’s mercy — it is always flowing.”",
"25 And thus the day passed, with joy in the camp.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-path-will-walk-en",
        title: "Chapter 12",
        subTitle: "The Path I will Walk",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 12,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-path-will-walk-en",
        title: "Chapter 12",
        subTitle: "The Path I will Walk",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-living-waters-en",
        followingChapter: "yahawzhowaa-book-3-tree-grew-place-en",
        content: [
"1 On the fourth morning, Yahawzhowaa told them, “This day I shall give thee a song for thy journeys.”",
"2 The people leaned in close, for they loved the way His words fell like rain on dry ground.",
"3 He began in a low voice:",
"4 B’orcha e’elekh, Abba, b’chol yomai (In Thy path I will walk, Father, all my days),",
"5 Tachat ilan, al yad mayim, b’kol sha’ot (Under trees, by the water, at every hour),",
"6 Atah ori, atah menuchati (Thou art my light, Thou art my rest).",
"7 The women took up the tune, humming it softly, and the men joined, making the air full of harmony.",
"8 And Yahawzhowaa said, “Sing this when ye are weary, for the tune will carry thee farther than thy feet alone can go.”",
"9 He spake a parable: “A hunter went into the forest without a song, and his heart was heavy.",
"10 His feet grew slow, and he sat down in sorrow.",
"11 The next day, he went forth singing, and though the path was long, the song shortened it.",
"12 For joy in the heart is like wind in the sail — it multiplieth the strength of the vessel.”",
"13 And He commanded them to teach the song to their children.",
"14 “For a song is a seed,” He said, “and when planted in the heart, it will grow even in old age.”",
"15 A man asked, “Master, what if the heart be too hard for the seed?”",
"16 Yahawzhowaa answered, “Then sing over it as rain falleth on stone, until the stone itself be softened.”",
"17 The elders nodded, for they knew the truth of His words.",
"18 And that day the people went about their tasks singing, and no one murmured or strove with his neighbor.",
"19 Yahawzhowaa smiled and said, “Now ye see the kingdom among you.”",
"20 He blessed the food they gathered, and it tasted sweeter to them for the song’s sake.",
"21 He told them the Father also singeth over His creation.",
"22 “The wind is His flute, the thunder His drum, the rivers His voice,” He said.",
"23 The children clapped at the thought.",
"24 And thus the song was given, and it did not leave their lips for many days.",
"25 And the tree above them swayed as though keeping time.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-tree-grew-place-en",
        title: "Chapter 13",
        subTitle: "A Tree Grew in a Place",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 13,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-tree-grew-place-en",
        title: "Chapter 13",
        subTitle: "A Tree Grew in a Place",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-path-will-walk-en",
        followingChapter: "yahawzhowaa-book-3-two-brothers-en",
        content: [
"1 On the fifth day, Yahawzhowaa rose early, and the people found Him seated upon a flat stone at the foot of the great omashkooz.",
"2 The clouds had parted, and a shaft of sunlight lay upon His shoulders as a robe of gold.",
"3 And He said, “This day I shall give thee a parable of the roots.”",
"4 And He told them: “A tree grew in a place where the soil was shallow, and though it sprouted quickly, the wind tore it down.",
"5 Another tree grew in deep earth, and its roots spread far and drank from hidden streams.",
"6 When the storm came, the deep-rooted tree bowed and rose again.",
"7 So is every soul — if thou sink thy roots deep into the law of love, thou shalt not be moved.”",
"8 A young man asked, “Master, how shall we deepen our roots?”",
"9 Yahawzhowaa answered, “By holding to what is true when thy belly is empty and thy friends depart.”",
"10 He continued, “The Father planteth thee in this earth, but thy choice is to send thy roots down or to spread thy branches only.",
"11 The branch that seeketh only to be seen will wither; the root that seeketh to hold fast will live.”",
"12 Then He sang:",
"13 Shoreshai b’ahavatcha, Abba (My roots are in Thy love, Father),",
"14 B’chol ruach, lo emot (In every wind, I will not die),",
"15 Mayim setarim mashkim oti (Hidden waters nourish me).",
"16 The people joined the refrain, and their voices were as the wind in the pine.",
"17 Then He blessed the infants brought before Him, saying, “Let these be planted in good soil.”",
"18 A mother asked, “What is the good soil, Master?”",
"19 He answered, “Where forgiveness is given quickly, and pride is not fed.”",
"20 He healed a lame man by touching his feet and saying, “Walk as a tree sways — slow, steady, and sure.”",
"21 The man leapt, and his kin wept.",
"22 Yahawzhowaa said, “Thus hath the Father shown thee His joy.”",
"23 They sat until the sun passed high overhead, and still the people lingered.",
"24 And Yahawzhowaa told them another small saying: “Better to be unseen in the earth with strong roots, than seen in the air and broken.”",
"25 And the people understood.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-3-two-brothers-en",
        title: "Chapter 14",
        subTitle: "Two Brothers",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 14,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-two-brothers-en",
        title: "Chapter 14",
        subTitle: "Two Brothers",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-tree-grew-place-en",
        followingChapter: "yahawzhowaa-book-3-parable-of-seed-en",
        content: [
"1 That evening, the fire was lit, and Yahawzhowaa’s face shone with the glow of its light.",
"2 He said, “I will tell thee a long story of two brothers.”",
"3 And He began: “There were two brothers of the Crane clan, both skilled in the paddle.",
"4 They set forth upon the same lake to fish, each in his own canoe.",
"5 The elder brother paddled hard to the far side, seeking greater catch.",
"6 The younger remained near the shore, content with what the shallows gave.",
"7 A storm rose, and the elder’s canoe was far from safety, but he had no friend near.",
"8 The younger saw him from shore, and though his net was full, he cast it aside and paddled into the storm.",
"9 He reached his brother and brought him back, though he lost all his fish.",
"10 The elder wept, saying, ‘Thy catch is gone because of me.’",
"11 The younger replied, ‘My catch is my brother, and he is not lost.’",
"12 Yahawzhowaa looked around the fire and said, “So is the kingdom: to value the soul above the gain.”",
"13 Then He sang a slow song in Anishinaabemowin, teaching them the words for “brother” and “to return.”",
"14 The people repeated until the night air carried it into the dark.",
"15 A woman asked, “Master, is this why Thou art among us?”",
"16 He said, “I was sent to bring thee back to shore.”",
"17 And they were quiet, for the truth of it was heavy in their hearts.",
"18 He told them, “If thou wouldst be saved, thou must also go into another’s storm.”",
"19 An elder said, “It is hard.”",
"20 Yahawzhowaa answered, “The Father’s love is hard to carry, yet it is the only burden that lighteneth the bearer.”",
"21 Then He touched the fire with a branch, and the sparks rose like stars.",
"22 “So are the prayers of the righteous — they rise upward and light the night.”",
"23 They prayed together until the fire burned low.",
"24 And Yahawzhowaa said, “Rest, for the storm of tomorrow cannot steal the peace of this night.”",
"25 And they slept with the sound of the lake on the shore.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-3-parable-of-seed-en",
        title: "Chapter 15",
        subTitle: "Parable of the Seed",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 15,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-parable-of-seed-en",
        title: "Chapter 15",
        subTitle: "Parable of the Seed",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 15,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-two-brothers-en",
        followingChapter: "yahawzhowaa-book-3-three-fires-en",
        content: [
"1 On the next day, Yahawzhowaa told them a parable of the seed that singeth.",
"2 “A sower cast seed into his field, and one seed began to sing as it grew.",
"3 The other plants mocked it, saying, ‘Thy singing changeth nothing.’",
"4 But the rain heard the song and fell more gladly, and the sun heard and shone more warmly.",
"5 And the seed grew taller than the rest, for the joy it gave to others returned to it.”",
"6 A boy asked, “Master, how can a seed sing?”",
"7 Yahawzhowaa replied, “By being what the Father made it without fear.”",
"8 Then He sang in a melody without words, only sounds like the wind and the water, and the people felt their hearts grow warm.",
"9 He told them, “This is how the earth singeth to the Father.”",
"10 A man said, “I have never heard such a song.”",
"11 Yahawzhowaa answered, “Thou hast heard it every day, but thy ears were closed.”",
"12 He taught them to listen to the pine needles in the wind, the loons on the lake, and the crack of ice in the night.",
"13 “All these,” He said, “are voices in the great prayer.”",
"14 He blessed a child born the night before, saying, “This one shall always hear the song.”",
"15 The mother wept with joy.",
"16 Then He healed a fisherman whose hands were twisted, that he might paddle again.",
"17 The man sang the seed’s song as he left, and all marveled.",
"18 And Yahawzhowaa said, “Thy healing is complete when thou usest it for others’ joy.”",
"19 They feasted on fish that evening, and the song was sung until the moon rose high.",
"20 The light of the moon touched the water, and Yahawzhowaa said, “Even the night shineth with His song.”",
"21 They lay under the stars, and none feared the dark.",
"22 For the song was in their hearts as they slept.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-3-three-fires-en",
        title: "Chapter 16",
        subTitle: "Three Fires",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 16,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-three-fires-en",
        title: "Chapter 16",
        subTitle: "Three Fires",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-parable-of-seed-en",
        followingChapter: "yahawzhowaa-book-3-every-tongue-lifted-en",
        content: [
"1 On the morning of the third day under the great tree, Yahawzhowaa rose before the others and knelt with His hands upon the earth.",
"2 The dew clung to His hair, and when the sun broke through the clouds, it glistened as though He were crowned with drops of light.",
"3 He said to the gathering crowd, “This day I will teach thee the parable of the three fires.”",
"4 And He spoke: “A man had three fires to keep in winter — one for his house, one for his family’s lodge, and one for the strangers who came by night.",
"5 The man tended the first fire well, but let the others die.",
"6 His house was warm, but his family’s lodge grew cold, and the strangers wandered away to perish.",
"7 Then the man found his own fire dying, for the wood he needed had been carried by the strangers and the kin who had left.”",
"8 Yahawzhowaa paused and said, “He that keepeth warmth only for himself shall soon find the cold in his own bones.”",
"9 An elder asked, “And how shall we keep three fires burning, Master?”",
"10 Yahawzhowaa replied, “The Father’s breath is in thy lungs — share it, and it shall not run dry.”",
"11 Then He sang:",
"12 Esh Abba lo yikhbeh (The Father’s fire will not go out),",
"13 Ki noten ani et haboker (For I give the morning),",
"14 U’miten ani et halayla (And I give the night).",
"15 The people swayed as they sang the refrain.",
"16 Yahawzhowaa turned to the sick and began to lay His hands upon them — those with fever cooled, and those with trembling grew steady.",
"17 A young mother whispered, “The warmth is in me now.”",
"18 Yahawzhowaa said, “Keep it alive by giving it away.”",
"19 Then He spoke again: “The fire that is hoarded is soon ash. The fire that is shared becomes eternal.”",
"20 A child brought Him a bundle of dry sticks, and He smiled, saying, “This one hath learned the way.”",
"21 The wind shifted, and the sun’s rays fell directly upon the circle of listeners.",
"22 Yahawzhowaa lifted His hands, and the light seemed to linger longer than it should.",
"23 He told them, “This is the Father’s sign — that the light seeketh out those who share it.”",
"24 A fisherman wept openly, for he knew he had driven his own kin into the cold.",
"25 Yahawzhowaa placed His hand on the man’s shoulder, and his weeping turned to singing.",
"26 And the people joined in, their voices rising like smoke into the brightened sky.",
"27 That day they vowed to keep not one, but many fires.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-3-every-tongue-lifted-en",
        title: "Chapter 17",
        subTitle: "Every Tongue Lifted",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 17,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-every-tongue-lifted-en",
        title: "Chapter 17",
        subTitle: "Every Tongue Lifted",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-three-fires-en",
        followingChapter: "yahawzhowaa-book-3-two-seeds-light-en",
        content: [
"1 In the shade of the same tree, Yahawzhowaa said, “I will sing thee a song of the River that Forgets No One.”",
"2 And He sang in long, winding melody, each verse flowing into the next:",
"3 Nahra d’lo nashiy (The river that forgets not),",
"4 Maa makizin giwii minjimendam (It remembers all who drink),",
"5 Kol lashon yitnaseh (Every tongue shall be lifted),",
"6 B’mayim chayim (In living waters).",
"7 The song told of a river that saw every traveler, carried their reflection, and kept it until they returned.",
"8 “This river is as the Father,” He explained, “who keepeth thy image in His heart.”",
"9 A boy asked, “Even if I wander far?”",
"10 Yahawzhowaa said, “Especially then.”",
"11 He told them of a hunter who strayed for years, yet when he returned to the river, it knew his face.",
"12 The people marveled, for they had seen such waters in their dreams.",
"13 Yahawzhowaa then said, “The Father’s remembrance is not to shame thee, but to restore thee.”",
"14 A woman whispered, “I wish to be remembered.”",
"15 Yahawzhowaa answered, “Thou already art.”",
"16 He healed her of the bleeding that had afflicted her for twelve winters, and her face became as the morning.",
"17 He said, “Thy reflection is restored.”",
"18 The people sang the song again, this time without Him leading, and their voices seemed to make the leaves of the great tree tremble.",
"19 An eagle passed overhead, its shadow crossing them all.",
"20 Yahawzhowaa pointed and said, “The Father also sends messengers who ride the high winds to carry His remembrance.”",
"21 Then He told them, “Drink of the river in thy heart daily, and thou shalt not be lost.”",
"22 And the people said, “We will remember.”",
"23 That night they dreamed of waters that welcomed them home.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-3-two-seeds-light-en",
        title: "Chapter 18",
        subTitle: "Two Seeds of Light",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 18,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-two-seeds-light-en",
        title: "Chapter 18",
        subTitle: "Two Seeds of Light",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 18,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-every-tongue-lifted-en",
        followingChapter: "yahawzhowaa-book-3-parable-circle-dance-en",
        content: [
"1 On the following day, Yahawzhowaa stood and stretched forth His arms, saying, “This day I will give thee the parable of the Two Seeds of Light.”",
"2 “A man planted two seeds — one in the open field, and one beneath the shade of many branches.",
"3 The first grew straight toward the sun, drinking deep of its warmth.",
"4 The second twisted in darkness, reaching sideways for what light it could find.",
"5 When the harvest came, the first bore fruit full and sweet, the second bore none.”",
"6 He said, “So is the soul — what thou plantest in full light shall grow in strength; what thou hidest in shadow shall wither.”",
"7 A young man asked, “Master, is the shadow evil?”",
"8 Yahawzhowaa replied, “The shadow itself is not evil, but if thou choose it over the light, thy fruit shall fail.”",
"9 He picked up a small wild berry from the ground and held it up.",
"10 “This grew because it sought the sun. Taste, and see what the Father gives to those who reach upward.”",
"11 They tasted, and the berry was sweet beyond measure.",
"12 Then Yahawzhowaa sang a song of light:",
"13 Or b’kirbi (Light within me),",
"14 Lo yikhbeh l’olam (It shall not be quenched forever),",
"15 Shemesh Abba, hashken oti (Father’s sun, dwell in me).",
"16 The people joined in, and their voices seemed to draw the clouds apart again.",
"17 The sun’s beam struck Yahawzhowaa, and His face shone so that some shielded their eyes.",
"18 He told them, “This is the proof of what I say — that when the vessel is open, the light will enter.”",
"19 He healed a deaf child, saying, “Thy ears shall hear the songs of light.”",
"20 And the boy laughed, hearing for the first time.",
"21 Then Yahawzhowaa said, “Go now and plant thyself where the light may find thee.”",
"22 And the people went out to the fields that day, singing the song of light.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-3-parable-circle-dance-en",
        title: "Chapter 19",
        subTitle: "Parable of the Circle Dance",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 19,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-parable-circle-dance-en",
        title: "Chapter 19",
        subTitle: "Parable of the Circle Dance",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 19,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-two-seeds-light-en",
        followingChapter: "yahawzhowaa-book-3-thou-art-life-en",
        content: [
"1 As the evening came, Yahawzhowaa said, “Hear now the parable of the Circle Dance.”",
"2 “In a village, there was a dance that began at sunset and ended at dawn.",
"3 All the people held hands, moving as one, each step in time with the drum.",
"4 One man grew weary and stepped out, saying, ‘I will rest now and return.’",
"5 But when he came back, the circle had moved on, and he could not find his place.",
"6 He called out, but none could hear above the drum.",
"7 He wandered in sorrow until an elder took his hand and led him back into the dance.”",
"8 Yahawzhowaa said, “So is the kingdom — keep thy place in the circle, for if thou leavest, it may be hard to return.",
"9 But the Father sendeth elders to guide thee back.”",
"10 Then they danced in a circle there under the tree, Yahawzhowaa at the center.",
"11 He sang in both tongues, His voice keeping the rhythm with the earth itself.",
"12 The people felt the ground hum beneath their feet.",
"13 And He said, “When ye dance thus, ye move with the heartbeat of creation.”",
"14 An old man’s limp vanished as he danced, and all shouted in joy.",
"15 Yahawzhowaa told him, “The circle hath healed thee.” 16 They danced until the moon set, and when they stopped, none felt tired.",
"17 Yahawzhowaa said, “This is the rest that is given when thy spirit moves in harmony.”",
"18 And they remembered it.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-3-thou-art-life-en",
        title: "Chapter 20",
        subTitle: "Thou Art Our Life",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 20,
        visible: true
    }
    //removeBook(book);
    addBook(book);

    chapter = {
        id: "yahawzhowaa-book-3-thou-art-life-en",
        title: "Chapter 20",
        subTitle: "Thou Art Our Life",
        parent: "yahawzhowaa-road-to-siipisiing-en",
        order: 20,
        visible: true,
        previousChapter: "yahawzhowaa-book-3-parable-circle-dance-en",
        followingChapter: "",
        content: [
"1 On the final day beneath the great tree, Yahawzhowaa gathered them all, saying, “I will give thee one last song here.”",
"2 He lifted His face, and the clouds rolled back as if drawn away by unseen hands.",
"3 The sunlight poured down, striking His brow and His hands.",
"4 He began to sing, His voice rising until it seemed to fill the whole sky:",
"5 Abba, orcha gadel banu (Father, let Thy light grow in us),",
"6 Ki ata chayenu (For Thou art our life),",
"7 Kol yom, kol layla (Every day, every night),",
"8 Anachnu shelcha (We are Thine).",
"9 The people wept openly, for the song pierced their hearts.",
"10 Then He spoke: “This light is not mine alone — it is thine if thou wilt open thy vessel.”",
"11 He told them of a woman who hid a lamp under her bed for fear of thieves, and the flame died.",
"12 “Fear is the thief,” He said, “and it stealeth thy light.”",
"13 He lifted His hands, and a beam of sunlight seemed to follow the movement, touching each face in the circle.",
"14 The blind saw, the lame walked, the grieving found peace.",
"15 A child cried out, “The sun is in me now!”",
"16 Yahawzhowaa laughed with joy, saying, “Yes, and it shall remain if thou keepest it unshaded.”",
"17 He taught them to pray in the pure way of the heart, facing the four winds, thanking the Father for sky, water, earth, and fire.",
"18 They prayed together, and the air itself seemed sweet to breathe.",
"19 Yahawzhowaa said, “This is the way — give thanks for what is given, share what is received, walk in the light thou hast.”",
"20 He blessed them all, and the sound of the blessing seemed to linger in the leaves.",
"21 Then He stepped out from under the great tree, and the shadow of it no longer touched Him.",
"22 They knew He would soon journey on, and their hearts were both heavy and full.",
"23 He looked back once and smiled, and they saw the sunlight follow Him as He walked away toward the west.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    res.send("Yahawzhowaa Added");
});


//module.exports = copper;