import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function (req, res) {
    let book = {};
    let chapter = {};

    book = {
        id: "yahawzhowaa-path-of-many-waters-en",
        title: "BOOK TWO",
        subTitle: "THE PATH OF MANY WATERS",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-two-171x214.jpg",
        thumbnailTitle: "Path of Many Waters",
        Description: "",
        priceText: "Subscription",
        price: 9.99,
        isParent: true,
        hasChildBooks: false,
        order: 4,
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

    /*
    chapter = {
        id: "yahawzhowaa-book-2-landing-at-puhtowakan-en",
        title: "Chapter 1",
        subTitle: "The Landing at Pūhtōwākan",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-landing-at-puhtowakan-en",
        title: "Chapter 1",
        subTitle: "The Arrival at Mitchimakinak",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-2-parable-two-currents-en",
        content: [
"1 And it came to pass after many days, that Yahawzhowaa crossed the wide face of Mishigami unto Pūhtōwākan, which is, being interpreted, the Bay of the Spirits; and the bay stretched long like a hand outstretched from the great lake.",
"2 And lo, the cry of the wild geese was upon the wind, and the tamarack and the maple were touched with the fire of the season.",
"3 The people of the Omaeq-nomenew, keepers of the rice and the net, came forth to the strand; for tidings of Him had run before upon the paths of water.",
"4 And when they saw Him, they laid cedar boughs before His feet, and greeted Him with words of peace, and the children gathered stones smooth with years.",
"5 Yahawzhowaa lifted up His voice and said, Blessed are ye that have kept the old road of the waters; for the Father laid the channels before there was a paddle to cleave them, or a hand to seek the shore.",
"6 Hear a mystery: as the waters remember their course to the deep, so remembereth the spirit its way unto the Father; yet the vessel, being clay, forgetteth oft the path by reason of wind and wave.",
"7 Then answered an elder, whose name was Wāqōs, and said, Master, how can a man know the Father before he draweth breath?",
"8 Yahawzhowaa saith unto him, The spirit is elder than the dust it inhabiteth. As the sturgeon was old while the banks were yet young, so is the spirit before the shaping of the bone and sinew.",
"9 From the beginning the Father breathed thee; and in the end He draweth thee; and the days between are as paddlestrokes across a single bay.",
"10 And He taught them of the narrow mouth of the inlet, saying, Behold, the waters are broad, yet the passage unto the deep is but one; many wander in the reeds, but the humble find the channel by the sound of the wind that speaketh from the open.",
"11 Even so is life: wide to the eyes, and yet the true way is simple; for the Father’s breath pointeth ever outward unto Himself.",
"12 And He pointed to the trees that leaned all one way upon the bluff, and said, See how they bow after the light though their roots be in shadow; so let thy soul incline toward the Father though thy body abide among men.",
"13 And He spake a parable, saying, Two fish kept the shallows for fear of the dark; and a third trusted the deep. The net came by night and took the first and the second, for they lay near the weirs of men; but the third passed beyond the sight of land, and the deep was unto it for walls and rampart.",
"14 He that feareth the Father’s deep shall be taken by a lesser fear; but he that trusteth the deep shall be kept by it.",
"15 Then came a woman bowed with years, bearing a little clay lamp blackened by many fires; and she said, Master, my strength faileth me; how shall I keep the flame?",
"16 And He breathed softly upon the flame, and it leaped; and He said, The flame is not thine, yet it dwelleth gladly with thee. It is the Father’s light; keep thou the door of thy lodge open, and He shall tend it within thee.",
"17 But if thou shut thyself for fear of wind and theft, thou shalt also shut the Keeper out; and the lamp shall languish though the oil be near.",
"18 Again He taught, saying, There is no canoe so far that the Father’s voice reacheth not; neither is there any night wherein His path faileth: for He stretcheth a line upon the waters, and calleth thee by name from bank to bank.",
"19 Yet woe unto him that setteth his paddle against the current of mercy; his labour multiplieth, and his strength is spent, and he sinketh within sight of land.",
"20 And many marvelled, saying, Whence hath this man words as from the beginning? for He speaketh not as one that learneth, but as one that remembereth.",
"21 Then brought they unto Him a net rotten in its cords. And He took it in His hands; and the rot fled from the fibers, and the mesh was as new.",
"22 And He saith, So do I with the souls of men: that which holdeth not shall be made to hold; and that which hath long failed shall draw again in abundance.",
"23 And He blessed the bay, and named its waters a school unto them, saying, Learn ye of this plain book, for the Father writeth doctrine upon the face of the deep.",
"24 And He laid His hand upon a child whose breath was short; and the child drew long and sure, and ran to the edge and laughed at the little waves.",
"25 And the elders bowed their heads, and the young men set their paddles in the sand in token of peace.",
"26 And as the dusk grew, they kindled a great fire; and the stars were as lamps in the roof of the Father’s lodge.",
"27 And Yahawzhowaa taught them until the first grey of dawn, of things past finding out and yet near at the hand, and His word entered them as warmth entereth the marrow.",
"28 And there slept not one soul for the joy thereof; but they were as men that keep watch for the morning.",
"29 And He said unto them, On the morrow I will shew you the wisdom of the meeting of waters; for where the bay and the river strive, there is doctrine hidden in the whirl.",
"30 And He lay down upon a mat beside the fire; and peace compassed them round about like a garment.",
"31 And it was told in the lodges round about Pūhtōwākan, that a great word had walked upon their shore.",
"32 And many prepared their hearts to hear the matter of the two currents.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-2-parable-two-currents-en",
        title: "Chapter 2",
        subTitle: "The Parable of the Two Currents",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 2,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-parable-two-currents-en",
        title: "Chapter 2",
        subTitle: "The Parable of the Two Currents",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-landing-at-puhtowakan-en",
        followingChapter: "yahawzhowaa-book-2-healing-fisher-en",
        content: [
            "1 And it came to pass on the next day, that Yahawzhowaa walked with the people unto the place where the river’s mouth cometh out into the bay; and lo, the waters contended one with another.",
"2 For the river hastened outward, as if eager to tell the lake its tale; and the lake flowed inward, as a mother to meet the child; and between them was a ring of turning.",
"3 Then said the men, Master, behold the striving; what meaneth this circle that devoureth chips and rushes alike?",
"4 And Yahawzhowaa answered, Each water keepeth the course appointed; yet they meet for cleansing and for witness: cleansing, that what is foul be made sweet; witness, that what is many be made one.",
"5 So dealeth the Father with the houses of man. He suffereth tribe with tribe, doctrine with doctrine, tongue with tongue, to meet in the plain; and where men fear a snare, He prepareth a joining.",
"6 And He lifted His hand over the whirl and said, Mark the law of the turning: what is cast without weight is swallowed; but that which beareth a true weight passeth through and is not lost.",
"7 Even so thy words: light speech without truth is drunk by the whirl; but the word that hath the weight of the Father’s breath cutteth a path and cometh forth on the other side.",
"8 Then spake a youth, Lord, if both currents be of God, why do they smite one another?",
"9 He saith, Because each is straight toward its own end; and the place of meeting is sharp. Think not this a strife of hate, but a labour of birth: for out of this turning goeth a water clearer than either came in.",
"10 It is thus with the soul when My saying meeteth thy saying; there is a pang and a fear; but abide a little, and thou shalt see that both are made cleaner by their obedience unto the One that sendeth them.",
"11 And He spake a parable, saying, Two brothers had valleys severed by a ridge; in the time of rain, both streams swelled, and the plain between was drowned. At the first they raised their banks higher one against another; and their fields perished.",
"But when they made one channel and laid one bridge, both houses were saved, and the children crossed singing.",
"12 He that buildeth banks against his brother shall reap a desert; but he that consenteth to the Father’s bridge shall reap a garden.",
"13 Then a woman said, Master, what if the water that cometh to me be foul and bitter?",
"14 Yahawzhowaa answered, Hast thou not seen the lake receive all rivers and yet remaineth vast and sweet? Make thy heart as the great water: receive, and render pure; for pride stoppeth the spring within thee, but meekness keepeth it running.",
"15 If thou receive only what flattereth, thy vessel shall soon be empty; but if thou receive what is sent and give it back as light, thou shalt never lack.",
"16 And He stooped and drew a line in the wet sand, and said, This is the narrow channel, the way of obedience: few find it, for men love the wideness of their own counsel; yet all the bay is served by this little place.",
"17 Keep thou to the channel in the day of turning, and the whirl shall spin to thy left and thy right, but thy canoe shall pass as an arrow.",
"18 Then were there certain men zealous for the customs of their fathers, who said within themselves, Shall this stranger judge the waters and the words of our elders?",
"19 But Yahawzhowaa, knowing their thought, said, Think not that I am come to break the banks thy fathers built; I am come to open unto thee the sea they sought.",
"Their fences were for a time; but the Father’s deep is for ever.",
"20 If ye love your fathers, love also their hope: that the nations might drink together without hurt. Lo, that hope standeth before you this day.",
"21 And He took up two jars, and filled the one from the river and the other from the bay. And He poured them both into a bowl; and the water therein was clear beyond telling.",
"22 Behold the work of the One: the differences are not erased, but the bitterness is lost, and the clearness is multiplied.",
"23 Then lifted He His voice and said, Let him that contendeth for victory learn to contend for clarity; for truth seeketh not a throne, but a window.",
"24 Say not, I alone am straight; say rather, The Father alone is straight, and I bend toward Him.",
"25 And a man sore troubled of mind cried, Lord, my house is as this eddy: argument within, argument without; and my sleep is broken.",
"26 Yahawzhowaa called him near and laid His hand upon his head, and said, Peace to the turning within thee. Let the great water receive thy little rivers. Let the Father be thy breadth, and thy counsel be to flow toward Him.",
"27 And the man fell upon his knees, and tears were as the river made new after storm; and he said, Truly the deep hath found me.",
"28 Then Yahawzhowaa turned to the children and taught them also, saying, When thou seest the leaf go round and round, fear not; throw not thyself after it: the leaf hath no weight. Keep thy paddle steady, and thou shalt pass by.",
"29 So also when vain words are many: answer not to every wind; keep thou to the stroke thou hast learned of the Father, and thou shalt come into the open.",
"30 And He warned them, saying, There shall arise among men a cold flame that shineth fair and devoureth fast; it will call itself wisdom and charity, and it will make a whirl of every shore. Try the light by warmth: if it giveth life, it is of the Father; if it stealeth life to feed itself, it is false though it glitter.",
"31 And there shall come a day when powers will set sluices upon the peoples, binding the waters for gain; marvel not; for the river of God breaketh such gates in His hour, and carryeth His poor through upon dry ground of courage.",
"32 Blessed is the vessel that learneth now the law of meeting; for when the great rivers gather, he shall not fear, having seen the matter already in a bay.",
"33 Then were many pricked in their hearts; and they cried one to another, Surely the Maker of waters standeth among us.",
"34 And He blessed Pūhtōwākan, and named the place The School of Joining; and He appointed unto them a day to hear further of burdens and of rest at the portage.",
"35 And it was noised throughout the lodges by the strand and the inlands, that the Teacher had weighed the currents, and had not been found light.",
"36 And they brought cedar and rush for mats, that He might teach yet longer among them by the way of Meskwahkīw- Sīpiah.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-healing-fisher-en",
        title: "Chapter 3",
        subTitle: "Healing of the Fisher with the Broken Net",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 3,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-healing-fisher-en",
        title: "Chapter 3",
        subTitle: "Healing of the Fisher with the Broken Net",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-parable-two-currents-en",
        followingChapter: "yahawzhowaa-book-2-dispute-fishing-grounds-en",
        content: [
"1 And it came to pass, as Yahawzhowaa walked upon the sand by the mouth of Meskwahkīw-Sīpiah (the Fox River), He saw there a man whose shoulders were bowed with labour, and whose eyes were dim with watching the water.",
"2 For his net was torn in many places, and his hands were raw from the pulling, and all his strength was given yet his catch was little.",
"3 When Yahawzhowaa came near, the man looked up and said, Master, the river is against me, and my net is against me, and my heart is against me also.",
"4 And Yahawzhowaa said unto him, Dost thou know the cause of thy weariness?",
"5 He answered, The current is strong, the fish are few, and I am but one man.",
"6 Yahawzhowaa said, Nay, it is not the current, nor the fish, nor thy solitude that hath undone thee, but that thou hast mended thy net with cords of fear, which hold not.",
"7 Fear is as a knot tied hastily in wet cord; it slippeth when the strain cometh, and the fish are lost.",
"8 Then Yahawzhowaa sat upon the sand, and called for the net. And He put His hands upon the torn places, and spake softly, and the cords grew whole as from the first day.",
"9 And the man marvelled, saying, Lord, I have seen sinew knit after many moons, but never the twine of flax in a breath.",
"10 Yahawzhowaa answered, He that made the sinew made also the flax, and He rejoiceth to bind again that which is rent.",
"11 But learn this: the mending of the net is the lesser work; the mending of the man is the greater.",
"12 A whole net in the hands of a broken man shall yet yield little; but a whole man with a patched net shall fill many baskets.",
"13 Then Yahawzhowaa laid His hand upon the man’s back, and straightway the weight that had long bent him was loosed, and he stood upright.",
"14 And the man wept, saying, I knew not that the burden in my bones was the burden in my heart.",
"15 Yahawzhowaa said, From this day thou art free to cast thyself upon the deep; for the Father delighteth not in the stooping of the strong, save it be to lift another.",
"16 Go now, and cast first for thy neighbours, that their baskets be filled ere thine own.",
"17 And the man took up his net, and it was light in his hand; and he went straightway to the water, and cast, and drew a catch so great that his canoe trembled.",
"18 Seeing this, the young men of the village ran to help him; and he gave unto them half of all he had taken, even unto the least fish.",
"19 And they said one to another, This man was bowed as a reed, and now he is as a cedar.",
"20 Then Yahawzhowaa spake unto the people that had gathered, Mark this: the Father healeth the man that he may heal the circle wherein he standeth. Ye are not mended for thine own board only, but for the feast of many.",
"21 If thy light is for thy lodge alone, it shall fail; but if it be for the village, the Father Himself shall feed the flame.",
"22 And He told them a parable: There was a man that kept a spring within his lodge, fearing it should be stolen. But the spring swelled, and his floor rotted, and the lodge fell. Another man let the water run into the common channel, and the whole village drank, and they kept his lodge with many hands.",
"23 He that keepeth his gift shall lose it; but he that letteth it flow shall have his lodge kept by the Father’s own arm.",
"24 Then the elders brought gifts of wild rice and smoked fish, but Yahawzhowaa bade them give it to the poor of the bay, saying, My meat is to do the will of Him that sent Me.",
"25 And when He had finished these sayings, He walked further along the shore toward the council lodge of Móogašuc.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-2-dispute-fishing-grounds-en",
        title: "Chapter 4",
        subTitle: "The Dispute over the Fishing Grounds",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 4,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-dispute-fishing-grounds-en",
        title: "Chapter 4",
        subTitle: "The Dispute over the Fishing Grounds",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-healing-fisher-en",
        followingChapter: "yahawzhowaa-book-2-miracle-of-sturgeon-en",
        content: [
            "1 And behold, when Yahawzhowaa came to Móogašuc (Red Banks), the people of two villages were gathered in anger; for the shallows where the sturgeon came to spawn lay between them, and both claimed the right.",
"2 The elders strove with loud voices, and the young men gripped their paddles as weapons.",
"3 And Yahawzhowaa stood in the midst, and there was a hush as wind before storm.",
"4 He said, What seek ye by this contention?",
"5 One elder answered, We seek our right, for our fathers fished here before the trees had shadow.",
"6 Another said, Nay, it is ours; for the river bendeth toward our shore, and the sturgeon are drawn by the scent of our reeds.",
"7 Yahawzhowaa said, If ye seek the truth, ye shall find it not in the shout, nor in the blow, but in the still place where the Father speaketh.",
"8 Hearken unto a parable: Two women each claimed the same child; the one for the labour of birth, the other for the labour of nurture. The judge would have divided the child, but the true mother cried out, Give it whole to her, and let me bear the loss. Thus was the true mother known.",
"9 Even so, the true keeper of the water is he that will yield it to keep it whole.",
"10 Then He spake further, Ye strive for the sturgeon as though the Father cannot send them unto both; but the river is His, and the fish thereof, and whoso layeth hands upon them for gain only is no better than the snare in the dark.",
"11 Shall the Father give His gift to the proud? Nay; but to the humble He giveth abundance without measure.",
"12 And He called for two canoes, and went out upon the shallows, and cast His hand into the water; and the sturgeon came and lay still about Him, great and small together.",
"13 And He said, See how they gather at no man’s call but the Father’s; even so should ye gather when He calleth.",
"14 Then He divided them, sending some toward the one shore and some toward the other, and none were lost.",
"15 The people marvelled, for never had they seen fish obey a man’s hand.",
"16 And He said, The Father’s store is without end, save ye close it with your strife. Open thy hand, and thou shalt never lack.",
"17 But if thy hand be shut in grasping, it is shut also against the gift.",
"18 And the elders were pricked in their hearts, and they covenanted that day to keep the shallows in peace, and to share their watch upon it.",
"19 And they set up a post of cedar between them, and called it The Witness of the Waters.",
"20 And Yahawzhowaa blessed the post, saying, Let this stand when your voices fail, to speak of the day when peace walked between your canoes.",
"21 Then He taught them until the sun fell low, of the greater net the Father is casting among all nations.",
"22 Ye are as knots in that net; if one fail, many are lost; if one hold, many are saved.",
"23 Strive not to be the only knot, but to be the faithful knot.",
"24 And many that day laid down their paddles and embraced one another upon the strand.",
"25 And Yahawzhowaa departed by the moon’s rising, and His face was toward the deep.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-miracle-of-sturgeon-en",
        title: "Chapter 5",
        subTitle: "The Miracle of the Sturgeon",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 5,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-miracle-of-sturgeon-en",
        title: "Chapter 5",
        subTitle: "The Miracle of the Sturgeon",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-dispute-fishing-grounds-en",
        followingChapter: "yahawzhowaa-book-2-calling-midewiwin-jessakkid-en",
        content: [
"1 And it came to pass on the third day from Móogašuc, Yahawzhowaa walked alone upon the beach, and certain of His followers were with Him afar off.",
"2 The people of a small lodge came running, crying, Master, our storehouse is empty, for the nets have been torn by storm, and the river hath yielded nothing.",
"3 Yahawzhowaa said, Bring me to the water.",
"4 And when they came to a cove where the waves were stilled by the curve of the shore, He bade them launch a canoe.",
"5 They said, Lord, the season is past, and the fish have gone to the deep; this place is barren.",
"6 But He entered the canoe and said, Push out a little from the land, and cast thy net upon the right side.",
"7 They obeyed, and straightway the net was heavy; and when they drew it up, there were sturgeon beyond counting, great and small, their backs like silver in the moonlight.",
"8 The people cried aloud for joy, and they fell at His feet.",
"9 Yahawzhowaa said, Marvel not at the sturgeon, for the Father feedeth not thy mouth only, but thy heart also. This net is thy faith: if thou cast it where I command, it shall draw up the plenty of the deep, though thy sight say it is empty.",
"10 But if thou cast it only where thy habit leadeth thee, thou shalt take little, even when the water is thick with fish.",
"11 And He commanded them to take what they needed and to release the rest into the deep.",
"12 For the gift is not thine to hoard, but thine to share.",
"13 He that taketh more than his need taketh also the trust of the Father, and spendeth it for nought.",
"14 The people asked, Lord, shall there ever be an end to this plenty?",
"15 He said, There shall be an end to the world, but not to the Father’s store; for He keepeth the seed of all things in Himself.",
"16 Fear not the empty net when thy heart is full of Him.",
"17 And He spake a parable: A man, fearing winter, filled his lodge with grain beyond his need, and his neighbour had none. That night a fire came, and his store was burned, and his belly was empty. But the man that gave half his store to his neighbour ate from his neighbour’s pot when his own was spent.",
"18 Give, therefore, and it shall be given unto thee.",
"19 And He blessed the waters of the cove, so that they brought forth fish in season and out of season, a sign unto that village forever.",
"20 And they named the place Net of the Master.",
"21 And many came from far villages to see the blessing, and to hear the words that gave it.",
"22 And Yahawzhowaa tarried there two days, teaching of the bread that cometh down from heaven, which is not eaten with the mouth but with the soul.",
"23 For man liveth not by rice and fish only, but by every word that proceedeth from the Father.",
"24 And He healed a child stricken in the breath, and a man whose eyes had been dark for many winters.",
"25 And the fame of Him spread yet further into the inlands.",
"26 And on the morning of the third day He set His face toward the portage of Kahkāmohnakaneh.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-2-calling-midewiwin-jessakkid-en",
        title: "Chapter 6",
        subTitle: "The Calling of the Midē´wiwin & the Jes’sakkid",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 6,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-calling-midewiwin-jessakkid-en",
        title: "Chapter 6",
        subTitle: "The Calling of the Midē´wiwin & the Jes’sakkid",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-miracle-of-sturgeon-en",
        followingChapter: "yahawzhowaa-book-2-true-order-of-prayer-en",
        content: [
"1 And it came to pass, after Yahawzhowaa had journeyed two days from Kahkā-mohnakaneh, He came unto a clearing where the deer paths met beside the waters of Mishi-ziibi.",
"2 And there the chiefs of the Adik Songab, which is the Deer Clan, had gathered to greet Him, for the fame of His works had come unto their ears.",
"3 And Yahawzhowaa sat beneath a great pine, and the people were gathered round, men and women and little ones, and the elders stood in a circle before Him.",
"4 Then Yahawzhowaa lifted up His voice and said, The harvest of the Father is great, but the gatherers are few; therefore will I appoint unto Myself twelve from among you, that the work be not hindered in the day of the wind and the snow.",
"5 And He called first Waabishki-makwa, whose hair was white as snow upon cedar, and whose counsel was sure; and He said, Thou shalt be a pillar in the lodge of My work, and thy strength shall uphold many.",
"6 Then He called Miskwa-giizhig, whose eyes were as the setting sun over still waters, and said, Thy words shall be as a red sky to the weary, a sign that peace followeth the storm.",
"7 And He called Gichi-ode’, whose heart was great toward friend and stranger; and He said, Thou shalt bear the burden of the weak, and thy arms shall be a shield unto the fearful.",
"8 And He called Aazhibaayaan, who was without fear in crossing the wild waters; and He said, As thou hast crossed the rivers of earth, so shalt thou cross the hearts of men, bringing them from death unto life.",
"9 And He called Minwaadiziwin, gentle in the way of teaching; and said, Thou shalt guide the feet of the young in the good way, that they stray not when the path groweth dark.",
"10 And He called Bimose-inini, whose feet knew no weariness; and said, Thy journey shall be long, but thy steps shall never fail, for the Father Himself shall be thy moccasins.",
"11 And He called Makade-waaboo, the healer; and said, Thy hands shall be as warm stones in the cold night, drawing sickness from the body as the sun draweth mist from the lake.",
"12 And He called Zaagi-idiwin, lover of all peoples; and said, Where strife is as flint and steel, thou shalt be as water poured out, quenching the flame thereof.",
"13 And He called Ogimaa-bines, watchful as the hawk; and said, Thy eyes shall see the snare before it is laid, and thou shalt warn My people as the hawk crieth from the heights.",
"14 And He called Waasamoog, whose face shone with joy; and said, In the day of mourning, thou shalt be the light that entereth the lodge unbidden, and lifteth the head of the sorrowful.",
"15 And He called Ozaawaa-bineshiinh, the swift and young; and said, Thou shalt bear My word as the wind beareth the scent of rain, quickly and without tiring.",
"16 And He called Mashkiki-inini, keeper of medicines; and said, Thy pouch shall never be empty, for the Father shall fill it with healings unseen.",
"17 And when He had called these twelve, He laid His hands upon each of them, and a great stillness fell upon the clearing, and the people trembled for the power they felt therein.",
"18 Then Yahawzhowaa lifted His hands toward the sky and prayed, O Father of light, send forth Thy Spirit upon these Thy servants, that they may walk in Thy works without fear; give them the tongue of wisdom, the hands of mercy, and the feet of peace.",
"19 And when He had finished, He called forth Giiwedin-giizhig, the one whom the elders had named for the North Sky.",
"20 Yahawzhowaa spake unto him, Unto thee do I give the mantle of the Jes’sakkid, that thou mayest speak as My voice when I am absent, and thy word shall be as Mine own in the ears of the people.",
"21 I give thee power over all manner of sickness, and over unclean spirits, and over death itself; what thou bindest upon earth shall be bound in the heavens, and what thou loosest upon earth shall be loosed above.",
"22 The people marvelled greatly, saying one to another, Never have our fathers seen such authority given unto a man save by the hand of the Great Spirit Himself.",
"23 And Yahawzhowaa said unto the twelve, Go ye forth two by two before Me into the villages that lie ahead; heal the sick, cleanse the defiled, raise the dead, and declare unto all that the Kingdom of the Father hath come nigh.",
"24 Take neither pouch nor spare moccasins, nor store of food; for the workman is worthy of the gift of the lodge wherein he laboreth.",
"25 And if any lodge receive you not, shake from your feet the dust of that place, and go on, for the Father shall judge between them and you.",
"26 Then Yahawzhowaa blessed them, and they set forth in the four directions, their steps light, their hearts full, and the people followed them with wonder.",
"27 And Yahawzhowaa Himself turned toward the eastward shore, for He had set His heart to walk upon the waters before the eyes of the Michilimackinac.",
"28 And thus began the journey of the Twelve Midē´wiwin and the Jes’sakkid, who from that day went whithersoever He went, bearing His light into every lodge and village.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-true-order-of-prayer-en",
        title: "Chapter 7",
        subTitle: "The True Order of Prayer",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 7,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-true-order-of-prayer-en",
        title: "Chapter 7",
        subTitle: "The True Order of Prayer",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 7,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-calling-midewiwin-jessakkid-en",
        followingChapter: "yahawzhowaa-book-2-crossing-of-channel-en",
        content: [
"1 And it came to pass that Yahawzhowaa journeyed with the Twelve Midē´wiwin and Giiwedin-giizhig the Jes’sakkid unto the shores of Mishimikinaakong, which is the Great Turtle Island.",
"2 And they beheld the high stone which the people called Mishosendaming, rising from the midst of the trees like the back of the turtle, and the waters lapped softly upon the shore.",
"3 And Yahawzhowaa said unto them, This place is hallowed, for the Father placed it here as a stepping-stone between the deep and the sky.",
"4 The people of the island brought forth berries of the early season, even the misâskwatômin, small and red and sweet, saying, These are the firstfruits of the land.",
"5 And Yahawzhowaa took of the berries, and held them in His palm, and said, Even as these are gathered in season, so is the soul gathered in its time by the hand of the Father.",
"6 Then spake Waabishki-makwa, saying, Master, teach us the true manner of prayer, that we may speak to the Father as Thou dost.",
"7 And Yahawzhowaa said, When ye pray, let not thy tongue be as a hollow drum sounding without heart; but let thy words rise as the morning mist, born of the earth and lifted to the sky.",
"8 And He sat upon the stone, and the Twelve with Giiwedin-giizhig sat about Him, and the people drew near.",
"9 And He said, This is the way of prayer: first, face the dawn, and remember the Giver of Light; stretch forth thy arms as the pine boughs, and breathe the breath He hath given thee.",
"10 Say in thy heart and with thy lips: “O Father above the dome of the sky, O Maker of the waters and the land, I thank Thee for the breath within me, for the fire in my blood, for the path beneath my feet.” 11 “I remember the faces of my fathers and mothers, and my brothers and sisters, and all who walk with me in this lodge of the earth. Bind us together in the cord of peace, that none break away into darkness.” 12 “Give unto me wisdom as the eagle seeth afar, give unto me patience as the river floweth, give unto me strength as the oak standeth in storm, and give unto me joy as the berry bursteth with sweetness.” 13 “Keep my feet from the snare, my hands from the spear of anger, and my eyes from the shadow that blinds. Let my sleep be under Thy blanket of stars, and my waking in the song of Thy dawn.” 14 “All honor, all thanks, and all breath return unto Thee, O Father, for the day Thou hast made. So be it.” 15 And when He had spoken, there was a stillness, and the wind ceased upon the water, and the people felt the warmth of the sun though the clouds covered it.",
"16 Then Yahawzhowaa took of the berries, and gave one to each of the Twelve and to Giiwedin-giizhig, saying, When ye pray thus, eat of the firstfruits of the land, that thy prayer be sealed with the sweetness of the earth and the promise of the harvest.",
"17 As the berry passeth into thy flesh, so let the words pass into thy spirit, that they be not forgotten when the mouth is shut.",
"18 And He commanded them, saying, Teach this prayer unto the lodges of the people, and let it be done at the rising of the sun, that the whole land be as one voice before the Father.",
"19 And Zaagi-idiwin said, Truly, this prayer is as the joining of the lake and the sky; it hath no ending and no beginning.",
"20 And Yahawzhowaa smiled, saying, He that prayeth thus shall walk in the light, and the light shall be in him; and in the day when the darkness cometh, he shall not stumble.",
"21 And they remained in that place until the moon rose, and the elders spake long with Yahawzhowaa concerning the way of peace among the tribes.",
"22 Many were healed that night, for Giiwedin-giizhig laid hands on the sick and the lame, and they arose whole.",
"23 The children played in the light of the fires, and the people sang songs of thanks unto the Father, and the sound thereof was as the rustling of leaves in a summer wind.",
"24 And it came to pass that the prayer spread unto the shores and the inlands, and the people remembered it in their own tongues, and the land was filled with blessing.",
"25 Thus began the way of the Morning Prayer among the people of the Great Lakes.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-crossing-of-channel-en",
        title: "Chapter 8",
        subTitle: "The Crossing of Mishibizhiw’s Channel",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 8,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-crossing-of-channel-en",
        title: "Chapter 8",
        subTitle: "The Crossing of Mishibizhiw’s Channel",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 8,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-true-order-of-prayer-en",
        followingChapter: "yahawzhowaa-book-2-parable-of-two-fires-en",
        content: [
"1 And it came to pass that Yahawzhowaa rose early, and the mists lay upon the waters about Mishimikinaakong as a blanket.",
"2 And the people spake of Mishibizhiw, the great water panther, whose channel lay between the island and the far shore.",
"3 And some were afraid to pass, for the currents were strong, and the wind from the east did stir the deep.",
"4 But Yahawzhowaa called unto Waabishki-makwa and Mashkode-bizhiki, saying, Bring hither the great canoe, that we may go unto the northern shore.",
"5 And the Twelve Midē´wiwin gathered with Giiwedin-giizhig, and the people brought food and skins for the journey.",
"6 As they set forth, the waters grew restless, and the prow of the canoe dipped low in the swell.",
"7 Then one cried out, Master, behold, the channel is angry! Shall we turn back?",
"8 But Yahawzhowaa stood in the midst of the canoe, and lifted His hands, saying, Peace, be still.",
"9 And the wind ceased, and the waters became as glass before them, and the people were astonished.",
"10 He said unto them, Fear not Mishibizhiw, for the Father commandeth the depths as He doth the sky; none may harm whom He hath sealed in His hand.",
"11 They passed over, and the people sang the paddle song of the north, their voices carrying far over the quiet waters.",
"12 And Yahawzhowaa spake in parable, saying, The soul that trusteth in the Father is as the canoe borne upon the current; though the river bendeth and the banks are high, it cometh unto the wide lake at last.",
"13 But the soul that feareth every ripple shall never leave the shore, and shall not taste the fish of the deep nor the wind of the open waters.",
"14 When they reached the far shore, they beheld the place called Gichigami-ziibi, where the great river floweth into the lake.",
"15 There the people of the shore came forth, bringing sick and lame upon mats, and blind who were led by the hand.",
"16 And Yahawzhowaa healed many that day, and the Midē´wiwin laid hands upon them, and the lame walked, and the blind beheld the face of the sun.",
"17 One man, whose legs had been bound by weakness from his youth, rose up and danced before the people, singing, The water is calm! 18 And Giiwedin-giizhig prophesied, saying, Even as these waters were calmed, so shall the nations be calmed by the word of the Anointed.",
"19 And they lodged there that night, and the stars were bright over the northern shore.",
"20 The elders of that place gave them fish and berries, and the women sang soft songs until sleep took them.",
"21 And Yahawzhowaa said unto the Twelve, Tomorrow we go westward, for the harvest of the Father is great, and the gatherers are few.",
"22 And they gave thanks, and lay down in peace.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-2-parable-of-two-fires-en",
        title: "Chapter 9",
        subTitle: "The Parable of the Two Fires",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 9,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-parable-of-two-fires-en",
        title: "Chapter 9",
        subTitle: "The Parable of the Two Fires",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-crossing-of-channel-en",
        followingChapter: "yahawzhowaa-book-2-healing-at-baawitigong-en",
        content: [
"1 And it came to pass, as they journeyed westward along the shore, that Yahawzhowaa beheld smoke rising from two lodges afar off.",
"2 One lodge was filled with many people, but the smoke thereof was black and choking.",
"3 The other lodge had few within, yet the smoke thereof was white and sweet, rising straight into the sky.",
"4 And Yahawzhowaa called the Twelve and the Jes’sakkid, and they went unto the lodges.",
"5 In the first lodge, the people had burned wet wood and refuse, and the air was heavy; many coughed and their eyes watered.",
"6 In the second lodge, they had chosen dry cedar and clean pine, and the warmth was gentle and the air clear.",
"7 Then Yahawzhowaa spake unto all, saying, The heart of man is as a fire within a lodge; if he put in the wood of anger and envy, the smoke thereof shall choke him and all that dwell with him.",
"8 But if he put in the wood of kindness and truth, the warmth thereof shall comfort, and the smoke shall rise pure before the Father.",
"9 For the Father looketh upon the fire of each heart, and knoweth whether the smoke thereof be foul or sweet.",
"10 Then He turned to the Twelve, saying, See ye to it that the fire within your own hearts be tended daily, for no man knoweth the hour when the Master of the lodge shall return.",
"11 And the people marvelled, for the parable was plain unto them.",
"12 Many came forth confessing their quarrels and hatreds, and they made peace in that place.",
"13 Waabishki-makwa took a bowl of clean water and washed the hands of those who had striven, as a sign of new beginning.",
"14 And Mashkode-bizhiki laid cedar upon the fire, and the smoke thereof was fragrant.",
"15 Yahawzhowaa blessed the children of that place, saying, Let them grow as saplings by the water, straight and strong.",
"16 And they departed from thence with joy, the people singing behind them until they were lost to sight.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-healing-at-baawitigong-en",
        title: "Chapter 10",
        subTitle: "The Healing at Baawitigong",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 10,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-healing-at-baawitigong-en",
        title: "Chapter 10",
        subTitle: "The Healing at Baawitigong",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-parable-of-two-fires-en",
        followingChapter: "yahawzhowaa-book-2-parable-net-snare-en",
        content: [
"1 And it came to pass that they came unto Baawitigong, where the waters fall mightily into the river below.",
"2 The sound thereof was as the voice of thunder, and the spray arose as a cloud over the pines.",
"3 The people of that place brought unto Yahawzhowaa a man smitten with palsy, who had lain upon his mat for twenty winters.",
"4 And his kin bare him in faith, for they had heard of the works done by Yahawzhowaa upon Mishimikinaakong and in the villages of the north.",
"5 When they could not come near for the press of the people, they went up by the rocks, and let him down with cords before the feet of Yahawzhowaa.",
"6 And Yahawzhowaa, seeing their faith, said unto the man, Son, thy sins be forgiven thee; arise, take up thy mat, and walk.",
"7 Straightway the man rose, strength returning to his limbs as the sap riseth in spring, and he walked before them all.",
"8 And the multitude glorified the Father, saying, We have seen strange things this day.",
"9 But certain elders murmured, saying, Who is this that forgiveth sins also?",
"10 And Yahawzhowaa answered them, That ye may know the Son of Man hath power on earth to forgive sins, I say unto thee, arise and walk.",
"11 And He spake unto the people concerning the power given unto the Twelve and unto Giiwedin-giizhig, that they also might heal in His name.",
"12 Waabishki-makwa laid hands upon a child whose eyes had not opened since birth, and they were opened.",
"13 Mashkode-bizhiki prayed over a woman bowed with pain, and she stood straight.",
"14 The people marveled that such power was in the disciples.",
"15 And Yahawzhowaa taught them, saying, The Father hath placed light in the vessel of man; and when the vessel is clean, the light healeth the whole body.",
"16 But if the vessel be filled with bitterness, the light is dimmed, and sickness cometh.",
"17 Therefore keep thy heart pure, that thy vessel may be full of light.",
"18 And He abode there two days, teaching by the roar of the falls, and the people drank of His words as of cool water.",
"19 On the third day, they departed westward, following the river’s course.",
"20 And the sound of the falls was in their ears until they were far off.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-2-parable-net-snare-en",
        title: "Chapter 11",
        subTitle: "The Parable of the Net and the Snare",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 11,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-parable-net-snare-en",
        title: "Chapter 11",
        subTitle: "The Parable of the Net and the Snare",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-healing-at-baawitigong-en",
        followingChapter: "yahawzhowaa-book-2-storm-upon-kitchi-en",
        content: [
"1 And it came to pass, as they journeyed by the shore of Gichigami, that Yahawzhowaa beheld fishers casting their nets.",
"2 Some drew in nets heavy with fish; others drew in only weeds.",
"3 And He called them, saying, Hear the parable of the net and the snare.",
"4 The kingdom of the Father is like unto a net cast into the lake, gathering of every kind; and when it is full, they draw it to shore, and gather the good into vessels, but cast the bad away.",
"5 So shall it be at the end of the age: the angels shall come forth, and sever the wicked from among the just.",
"6 But the snare is of another kind: it is set with cunning, that the prey may be taken unawares; and many are held fast who thought themselves free.",
"7 Therefore be ye watchful, lest ye be taken in the snare of the adversary, which is baited with pride and bound with fear.",
"8 And Giiwedin-giizhig said, Master, how shall we know the snare when it is hid beneath the leaves?",
"9 Yahawzhowaa answered, By the peace in thy heart shalt thou know; for the peace of the Father cannot dwell where deceit is, and the Spirit shall stir thee to depart.",
"10 The fishers left their nets, and followed Yahawzhowaa for a season, to hear His words.",
"11 And the Twelve rejoiced, for many hearts were turned that day.",
"12 They camped upon the sand, and the firelight was upon their faces.",
"13 And Yahawzhowaa prayed aloud for them, and the stars shone clear.",
"14 The sound of the waves was as a song until they slept.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    chapter = {
        id: "yahawzhowaa-book-2-storm-upon-kitchi-en",
        title: "Chapter 12",
        subTitle: "The Storm upon Kitchi-minising",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 12,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-storm-upon-kitchi-en",
        title: "Chapter 12",
        subTitle: "The Storm upon Kitchi-minising",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-parable-net-snare-en",
        followingChapter: "yahawzhowaa-book-2-council-at-aminikii-en",
        content: [
"1 And it came to pass that they crossed unto Kitchi-minising, a great island in the midst of the lake.",
"2 As they journeyed, a storm rose suddenly from the north, and the waves beat upon the canoes.",
"3 The disciples strove to keep afloat, but the water came in fast.",
"4 Then Yahawzhowaa, who was in the hinder part, rose and rebuked the wind, saying, Peace, be still.",
"5 And there was a great calm, and the clouds fled away.",
"6 The people in the other canoes marveled, saying, What manner of man is this, that even the winds and the water obey Him?",
"7 They came to shore, and the people of the island brought them to a lodge.",
"8 There was a man tormented in mind, crying out night and day.",
"9 Yahawzhowaa laid His hand upon his head, and the man was clothed and in his right mind.",
"10 And he followed Yahawzhowaa thereafter, telling all the island what had been done unto him.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-council-at-aminikii-en",
        title: "Chapter 13",
        subTitle: "The Council at Animikii-wikwedong",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 13,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-council-at-aminikii-en",
        title: "Chapter 13",
        subTitle: "The Council at Animikii-wikwedong",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-storm-upon-kitchi-en",
        followingChapter: "yahawzhowaa-book-2-crossing-at-misizaaga-en",
        content: [
"1 And it came to pass, after many days of journeying along the frozen shores of Gichigami, that Yahawzhowaa came unto Animikii-wikwedong, the Bay of the Thunderbirds, where the cliffs stand as watchmen over the waters.",
"2 The sound of the surf was as the beating of many drums, and the spray rose like white feathers in the wind.",
"3 The people there were in strife, for two ogimaag contended for the same hunting grounds, and the lodges of the village were divided against themselves.",
"4 Messengers came unto Yahawzhowaa, entreating Him to judge between the chiefs, for word had spread that He spake with wisdom not of men.",
"5 Yahawzhowaa gathered unto Him the Twelve Midē´wiwin, and also Giiwedingiizhig the Jes’sakkid, and they entered the great council lodge.",
"6 The people pressed close, for they desired to hear His judgment.",
"7 Yahawzhowaa looked upon the two chiefs and spake, saying, The land is the gift of the Father; ye are but guests for a season, and when thy days are fulfilled, thou returnest to the Giver.",
"8 If ye take by strife, the hand of the Giver will be turned against thee; but if ye share in peace, thy lodge shall be filled with plenty.",
"9 Then He told them a parable: Two hunters went forth into the forest. The first took only what was needful, and the forest gave unto him year by year. The second took all he could bear, and much of it spoiled, and the forest became barren beneath his feet.",
"10 So also is the kingdom of the Father: unto him that honoureth the gift, more shall be given; but unto him that consumeth without gratitude, even that which he hath shall be taken away.",
"11 The words pierced them as an arrow pierceth the hide, and they bowed their heads in silence.",
"12 Then Yahawzhowaa bade them eat from one bowl and drink from one cup as a covenant of peace.",
"13 The Midē´wiwin brought forth the pipe, and the smoke rose like a prayer before the Father.",
"14 Giiwedin-giizhig lifted his voice, saying, Behold, the Spirit of peace hath come upon us; let no man break this bond.",
"15 The ogimaag clasped hands, and the people shouted for joy.",
"16 That evening, Yahawzhowaa taught them beneath the stars of the lodge prepared in heaven.",
"17 There shall be no hunger there, neither thirst, neither the heat of the sun; for the Father Himself shall feed His children.",
"18 And He spake of the great river of life, whose waters heal all nations.",
"19 Many came forth, confessing their wrongs one to another, and they made peace among themselves.",
"20 The elders declared a feast, and the people danced long into the night.",
"21 In the morning, the two chiefs went forth together to hunt, and the people followed their example.",
"22 Many brought gifts unto Yahawzhowaa — furs, beadwork, and the fruit of the season — but He gave all to the poor.",
"23 Thus peace was established in Animikii-wikwedong.",
"24 And the fame of Yahawzhowaa spread to every village along the coast.",
"25 When He departed, the people followed Him to the cliffside, singing the song of farewell.",
"26 The sound of their voices mingled with the roar of the waves, and it was as incense before the Father.",
"27 And the Twelve walked beside Him, marvelling at the works of the Spirit in that place.",
"28 For they had seen the hardness of men’s hearts melt as snow before the spring sun.",
"29 Yahawzhowaa said unto them, Blessed are the peacemakers: for they shall be called the children of the Father.",
"30 And they journeyed westward in gladness of heart.",
"31 The wind was at their backs, and the gulls wheeled overhead as if to bear witness.",
"32 And the Spirit whispered unto Yahawzhowaa of greater works yet to be done among the nations beyond the lakes.",
"33 So they pressed onward, and the land received them in peace.",
"34 And thus ended the matter at Animikii-wikwedong.",
"35 And they gave thanks.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-crossing-at-misizaaga-en",
        title: "Chapter 14",
        subTitle: "The Crossing at Misizaaga’iganong",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 14,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-crossing-at-misizaaga-en",
        title: "Chapter 14",
        subTitle: "The Crossing at Misizaaga’iganong",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-council-at-aminikii-en",
        followingChapter: "yahawzhowaa-book-2-healing-at-mashkode-en",
        content: [
"1 And it came to pass, that Yahawzhowaa and the Twelve Midē´wiwin departed from Animikiiwikwedong, journeying westward by the shore of the great waters.",
"2 They came unto Misizaaga’iganong, the Place of the Great Swamp Lake, where the marshes were broad and the waters lay still as a polished stone.",
"3 The people there feared to cross, for many had been lost in the mists, and the paths were hidden beneath reeds and shadow.",
"4 Yahawzhowaa looked upon the waters and said unto the people, Fear not, for the path is known unto the Father, and He shall reveal it unto whom He will.",
"5 Then He called Giiwedin-giizhig, the Jes’sakkid, and spake, Stand thou in the place where the earth meeteth the water, and lift up thy hand unto the heavens.",
"6 Giiwedin-giizhig obeyed, and the wind ceased, and the mists parted as a garment drawn aside.",
"7 And behold, a path of firm ground appeared before them, winding through the reeds.",
"8 The people marvelled, saying, Surely the Spirit walketh among us.",
"9 Yahawzhowaa answered, Not for a sign alone is this given, but that ye may learn: whosoever trusteth in the Father shall see the way made plain, though it were hidden from the eyes of all men.",
"10 Then He taught them a parable: A child walketh in the night with a lamp; though he seeth but a few paces before him, he walketh without fear, for he knoweth his Father holdeth his hand.",
"11 So it is with you: though the journey be long, the Father guideth thy steps, and no shadow shall prevail against thee.",
"12 They began to cross, the elders first, then the women and children, and lastly the hunters bearing their packs.",
"13 And the Twelve Midē´wiwin walked at the sides, aiding those who stumbled.",
"14 Many who were sick were borne in canoes, and Yahawzhowaa laid His hands upon them as they passed, and they were made whole.",
"15 The people wept for joy, saying, Never have our fathers told us of such things in all their days.",
"16 When they had crossed, they set up camp upon the far shore.",
"17 Yahawzhowaa sat among them by the fire and spake of the light in the vessel: The body is the lodge; the spirit is the fire within. If thou keep the door open unto the wind of the Father, thy fire shall never be quenched.",
"18 But if thou shut the door in pride, the smoke shall fill thy lodge, and thy fire shall die.",
"19 The people listened, and some fell to their knees in prayer.",
"20 The Midē´wiwin brought forth berries from the marsh’s edge, sweet to the taste, and shared them among all.",
"21 Yahawzhowaa blessed the food, saying, As these berries have drawn life from the mire, so shall the Father bring forth sweetness from thy trials.",
"22 That night, the stars shone clear above them, for the mists had fled.",
"23 The elders sang songs of crossing, and the children slept without fear.",
"24 Giiwedin-giizhig kept watch, for he said, The Spirit hath more to speak upon the morrow.",
"25 At dawn, Yahawzhowaa rose and prayed alone among the reeds.",
"26 He gave thanks for the safe passage, and the wind carried His prayer across the waters.",
"27 The people awoke and saw Him, and were still, for they felt the presence of the Father.",
"28 Then He called them to rise and continue their journey.",
"29 For He said, The path of the righteous is as the dawning light, shining more and more unto the perfect day.",
"30 They departed in peace, their hearts strengthened.",
"31 And the story of the crossing spread to the villages beyond.",
"32 Many came to seek the one who had opened the way.",
"33 But Yahawzhowaa said, Seek not the worker of the sign, but the Giver of the sign.",
"34 And they understood, and followed.",
"35 Thus ended the crossing at Misizaaga’iganong.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-healing-at-mashkode-en",
        title: "Chapter 15",
        subTitle: "The Healing at Mashkode-bii’igan",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 15,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-healing-at-mashkode-en",
        title: "Chapter 15",
        subTitle: "The Healing at Mashkode-bii’igan",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 15,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-crossing-at-misizaaga-en",
        followingChapter: "yahawzhowaa-book-2-storm-upon-gasswaasi-en",
        content: [
"1 After many days’ travel, Yahawzhowaa came unto Mashkodebii’igan, the Prairie Opening, where the tall grasses bent like waves before the wind.",
"2 There was a village there whose people were stricken with a wasting sickness.",
"3 Their skin was pale, their eyes dim, and their strength spent.",
"4 The elders told Yahawzhowaa that no medicine had availed, neither the roots of the earth nor the waters of the spring.",
"5 Yahawzhowaa entered the lodge of the sick and sat among them.",
"6 He took the hand of a young girl whose breath was faint, and He said, Daughter, the Father hath not forgotten thee.",
"7 Then He laid His hand upon her brow, and warmth flowed into her body, and her eyes opened.",
"8 She rose and walked to her mother, who wept and embraced her.",
"9 The people cried aloud, saying, The Healer is come among us.",
"10 But Yahawzhowaa rebuked them, saying, Give glory to the Father, for I am but His servant.",
"11 He called the Twelve and gave them power to heal in His name, and they went throughout the village laying hands upon the sick.",
"12 Giiwedin-giizhig spake over them the words of the old tongue, and the sickness departed.",
"13 Yahawzhowaa taught them, saying, The body is as the earth: if the roots be nourished, the tree shall flourish. But if the roots be parched, the tree shall wither.",
"14 So nourish thy spirit with truth, and thy body with the good gifts of the earth, and the light within thee shall burn bright.",
"15 That night they kindled a great fire, and the people brought offerings of grain and dried meat, giving thanks.",
"16 Yahawzhowaa blessed the food, and they ate together as one family.",
"17 The elders asked Him of the kingdom, and He said, It is as a seed hidden in the ground; though unseen, it groweth until it filleth the field.",
"18 And when it is ripe, the Father sendeth forth the reapers.",
"19 Many desired to follow Him, but He bade them remain and tend their people.",
"20 For He said, Not all are called to the road; some are called to keep the hearth.",
"21 He left them with the Midē´wiwin, that they might teach the law of peace and the care of the vessel.",
"22 At dawn they departed, the people singing after them.",
"23 The prairie wind carried the song far into the distance.",
"24 And Yahawzhowaa smiled, saying, The song of the righteous is heard in the courts of the Father.",
"25 They journeyed toward the setting sun, and the grasses gave way to forest.",
"26 Along the path, He taught the Twelve of humility, saying, Whosoever would be greatest, let him be as the one who serves.",
"27 For the Father looketh not upon the height of a man, but upon the depth of his heart.",
"28 They came to a river and camped upon its bank.",
"29 Yahawzhowaa prayed there, giving thanks for the healing.",
"30 The moon rose over the water, casting a silver path.",
"31 The people slept in peace, for the fear of sickness was gone.",
"32 And the name of Mashkode-bii’igan was remembered for joy.",
"33 Thus ended the healing at Mashkodebii’igan.",
"34 And many from there bore witness in other lands.",
"35 And the fame of Yahawzhowaa grew.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-storm-upon-gasswaasi-en",
        title: "Chapter 16",
        subTitle: "The Storm upon Gaa-waasijiwanzh",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 16,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-storm-upon-gasswaasi-en",
        title: "Chapter 16",
        subTitle: "The Storm upon Gaa-waasijiwanzh",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-healing-at-mashkode-en",
        followingChapter: "yahawzhowaa-book-2-parable-of-three-fires-en",
        content: [
"1 And it came to pass, as they journeyed along the northern shore, they came unto Gaa-waasijiwanzh, the Place of the Shattered Pines.",
"2 The waters of Gichigami stretched far, and the wind began to rise out of the east.",
"3 The sky darkened, and the gulls fled inland.",
"4 The people of the shore came running, saying, Go not upon the water, for a great storm is coming, such as breaketh the canoes of the strong.",
"5 But Yahawzhowaa said unto the Twelve, We must cross, for there is one beyond who waiteth for the word of life.",
"6 They launched the canoes, the Midē´wiwin at the paddles, and Giiwedingiizhig in the foremost vessel.",
"7 The waves rose high, and the wind smote the face of the waters.",
"8 Fear came upon the hearts of many, and they cried out.",
"9 Yahawzhowaa, lying in the stern, arose and stretched forth His hand.",
"10 He spake, Peace, be still.",
"11 And the wind ceased, and the waters lay flat as a mirror.",
"12 Great fear fell upon the Twelve, and they said one to another, What manner of man is this, that even the wind and the waters obey Him?",
"13 Yahawzhowaa answered, Why are ye fearful, O ye of little faith? Did I not tell thee the Father keepeth His own?",
"14 They paddled the rest of the way in silence, pondering His words.",
"15 On the far shore was a small village, whose people came forth amazed at their arrival.",
"16 Yahawzhowaa taught them, saying, The storm is as the troubles of thy life; if the light in thy vessel be steadfast, no wind shall overturn thee.",
"17 But if thou lettest fear quench thy fire, the smallest wave shall drown thee.",
"18 The people brought fish and bread, and Yahawzhowaa blessed it and fed all.",
"19 That night they slept in peace, for the wind did not return.",
"20 The elders said, Truly the Maker walketh among us.",
"21 And they begged Him to remain, but He said, I must go unto the other villages also.",
"22 The Midē´wiwin left two among them to teach the way of peace.",
"23 Giiwedin-giizhig prayed with them in the old tongue before departing.",
"24 At dawn they set out again, with calm seas before them.",
"25 The canoes glided as if drawn by unseen hands.",
"26 Yahawzhowaa sang a song of the Father, and the Twelve joined Him.",
"27 The sound carried far across the water.",
"28 The people on the shore heard it and rejoiced.",
"29 Thus ended the storm upon Gaawaasijiwanzh.",
"30 And it was told for many winters.",
"31 And the people held fast to the teaching of the steadfast light.",
"32 And they were not moved in the day of trial.",
"33 Blessed be the name of the Father.",
"34 And His works endure forever. Amen.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-parable-of-three-fires-en",
        title: "Chapter 17",
        subTitle: "The Parable of the Three Fires",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 17,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-parable-of-three-fires-en",
        title: "Chapter 17",
        subTitle: "The Parable of the Three Fires",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-storm-upon-gasswaasi-en",
        followingChapter: "yahawzhowaa-book-2-blind-elder-at-manidoo-en",
        content: [
"1 And they came to Namewa’iwashk, the Place of the Sturgeon Flowers, where the river met the lake.",
"2 The people there were skilled in the taking of fish, but contention had arisen among three families.",
"3 Each claimed the right to the richest fishing ground.",
"4 Yahawzhowaa called them together upon the riverbank.",
"5 He said, Hear the parable of the three fires.",
"6 A man had three sons, and to each he gave a spark to kindle his own fire. The first hid his spark, fearing the wind. The second boasted of his flame, and let it burn too hot, so it consumed his lodge. The third tended his fire with care, and gave coals to his brothers when their flames failed.",
"7 The Father in heaven is as the giver of the sparks; He desireth that ye share the flame, not hoard it.",
"8 The people were cut to the heart by His words.",
"9 Yahawzhowaa bade them join in one canoe and fish together.",
"10 That day the nets were filled to breaking.",
"11 They brought the catch ashore, and divided it equally.",
"12 The children laughed and the elders sang.",
"13 The Midē´wiwin blessed the waters, offering tobacco upon the current.",
"14 Giiwedin-giizhig spake, The Spirit rejoiceth where there is no strife.",
"15 Yahawzhowaa healed a man whose hand had been crippled from a spear wound.",
"16 The man took up the net and worked beside his brothers.",
"17 They feasted that night under the moon.",
"18 Yahawzhowaa said, As the waters receive the river, so the Father receiveth all who come in peace.",
"19 The families made a covenant never again to quarrel over the river.",
"20 The elders recorded the covenant on a painted hide.",
"21 And the children of their children kept it.",
"22 Yahawzhowaa prayed over them before departing.",
"23 The wind was soft upon the water as they left.",
"24 The sturgeon leapt beside the canoes as if in blessing.",
"25 The Twelve marvelled and gave thanks.",
"26 They travelled upriver, the current aiding them.",
"27 The forests closed about them, and the air was filled with birdsong.",
"28 They camped by a spring and drank of its sweetness.",
"29 Yahawzhowaa spoke of the water of life that cometh from the Father.",
"30 Whosoever drinketh of it shall thirst no more.",
"31 The Twelve pondered the saying in their hearts.",
"32 In the morning, they journeyed on.",
"33 And the peace of Namewa’iwashk followed them.",
"34 And many were added to the way of life.",
"35 Thus ended the matter.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-blind-elder-at-manidoo-en",
        title: "Chapter 18",
        subTitle: "The Blind Elder at Manidoo-minisens",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 18,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-blind-elder-at-manidoo-en",
        title: "Chapter 18",
        subTitle: "The Blind Elder at Manidoo-minisens",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 18,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-parable-of-three-fires-en",
        followingChapter: "yahawzhowaa-book-2-hungry-camp-at-omakaki-en",
        content: [
"1 They came unto Manidoo-minisens, the Spirit Little Island, a place of cedar and stone.",
"2 There dwelt an elder who had been blind from his youth.",
"3 His name was Waawaashkeshi-inini, and he was known for his wisdom.",
"4 He sat each day upon the rock by the shore, listening to the wind.",
"5 When Yahawzhowaa came, the people said, Master, heal him, that he may see.",
"6 Yahawzhowaa called the elder and said, Dost thou believe the Father can open thine eyes?",
"7 He answered, I believe, yet my heart seeth already.",
"8 Yahawzhowaa touched his eyes, and said, Receive thy sight, even as thy heart hath believed.",
"9 At once the elder opened his eyes and beheld the lake and the sky.",
"10 He wept, saying, Now mine eyes and my heart are one.",
"11 The people rejoiced greatly.",
"12 Yahawzhowaa taught them, Better is the eye that seeth the truth than the eye that seeth only the form.",
"13 He told a parable: A man found a mirror of clear water; he looked and saw only his own face, and went away unchanged. Another looked and saw beyond his face the heavens, and his soul was lifted.",
"14 So also is the heart that looketh through the eyes of faith.",
"15 The Midē´wiwin sang the cedar song, blessing the island.",
"16 Giiwedin-giizhig offered sweetgrass to the waves.",
"17 The elder walked through the village, marvelling at all he had known only by touch.",
"18 He took Yahawzhowaa’s hand and said, Thy light hath opened more than mine eyes.",
"19 They feasted upon fish and wild rice.",
"20 Yahawzhowaa blessed the meal, giving thanks to the Father.",
"21 He counselled the young to seek wisdom while they were strong.",
"22 For the light in the vessel groweth with the years if it be tended, but dimmeth if it be neglected.",
"23 That night the stars shone bright over the island.",
"24 The elder lay down and slept in peace.",
"25 In the morning, Yahawzhowaa bade farewell.",
"26 The elder said, My eyes shall follow thee though my feet remain.",
"27 The canoes pushed off into the current.",
"28 The water was calm, and the wind at their backs.",
"29 The Twelve marvelled at the joy of the elder.",
"30 Yahawzhowaa said, So is every one born of the Spirit.",
"31 They travelled westward toward the great rivers.",
"32 The forests grew denser, and the calls of loons echoed.",
"33 They rested in a cove that night.",
"34 The firelight danced upon the canoes.",
"35 Thus ended the healing at Manidoominisens.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-hungry-camp-at-omakaki-en",
        title: "Chapter 19",
        subTitle: "The Hungry Camp at Omakaki-ziibi",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 19,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-hungry-camp-at-omakaki-en",
        title: "Chapter 19",
        subTitle: "The Hungry Camp at Omakaki-ziibi",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 19,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-blind-elder-at-manidoo-en",
        followingChapter: "yahawzhowaa-book-2-vision-at-zhaawano-en",
        content: [
"1 They came to Omakaki-ziibi, the River of Frogs, where a band of travellers had made camp.",
"2 Their food was spent, and their children cried for hunger.",
"3 Yahawzhowaa asked, Have ye nothing?",
"4 They answered, Only a handful of wild rice and two dried fish.",
"5 He said, Bring them to Me.",
"6 He sat upon a stone and lifted His eyes to heaven, giving thanks.",
"7 Then He gave the food to the Twelve to set before the people.",
"8 And it multiplied in their hands, so that all did eat and were filled.",
"9 They gathered twelve baskets of what remained.",
"10 The people marvelled and gave glory to the Father.",
"11 Yahawzhowaa taught them, The lodge that shareth shall never be empty.",
"12 He told them of the manna given to other children of the Creator in the wilderness.",
"13 And He said, The Father’s hand is not shortened, that it cannot give.",
"14 Giiwedin-giizhig prayed in the old tongue, blessing the river.",
"15 The Midē´wiwin sang the rice harvest song.",
"16 The children played by the water, their hunger forgotten.",
"17 That night they kindled many small fires, one for each family.",
"18 Yahawzhowaa walked among them, speaking to each in turn.",
"19 He healed the sick and comforted the grieving.",
"20 The elders asked Him to remain, but He said, I must go to others who hunger still.",
"21 He appointed two Midē´wiwin to guide them in the ways of the harvest.",
"22 The people gave Him gifts of reeds and clay pots.",
"23 He received them with thanks, giving them to the poor among them.",
"24 At dawn the camp was filled with song.",
"25 The river glistened in the rising sun.",
"26 The frogs sang from the banks as if in chorus.",
"27 The canoes moved on, the people waving from the shore.",
"28 Yahawzhowaa said, Blessed are they that hunger and thirst after righteousness: for they shall be filled.",
"29 The Twelve pondered His words as they paddled.",
"30 The sky was clear, and the day warm.",
"31 They travelled far that day without weariness.",
"32 At evening they camped upon a high bank.",
"33 They gave thanks for the day’s mercies.",
"34 The stars were many, and the river sang them to sleep.",
"35 Thus ended the matter at Omakakiziibi.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-2-vision-at-zhaawano-en",
        title: "Chapter 20",
        subTitle: "The Vision at Zhaawano-ong",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 20,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-2-vision-at-zhaawano-en",
        title: "Chapter 20",
        subTitle: "The Vision at Zhaawano-ong",
        parent: "yahawzhowaa-path-of-many-waters-en",
        order: 20,
        visible: true,
        previousChapter: "yahawzhowaa-book-2-hungry-camp-at-omakaki-en",
        followingChapter: "",
        content: [
"1 And it came to pass, they came to Zhaawano-ong, the Place of the South Wind, where the land opened into rolling hills.",
"2 Yahawzhowaa led the Twelve to the highest hill and bade them sit.",
"3 He said, This night the Father will speak, and ye shall see His glory.",
"4 As the sun set, the sky was filled with colours as of fire.",
"5 A stillness fell upon the land.",
"6 Yahawzhowaa prayed, and His face shone as the moon upon water.",
"7 The Twelve beheld a light descend upon Him as a dove.",
"8 A voice spake from the heavens, This is My beloved Son; hear ye Him.",
"9 They fell upon their faces in awe.",
"10 Yahawzhowaa touched them, saying, Rise, be not afraid.",
"11 He spake of the work yet before them.",
"12 From this place we shall go to the Turtle Mountains, where the Pembina dwell.",
"13 There shall be trials, but the light in your vessels shall not fail if ye keep the way.",
"14 He gave each of the Twelve a staff, saying, Go two by two, and prepare the way.",
"15 Giiwedin-giizhig wept for joy, saying, The Spirit hath confirmed the path.",
"16 The Midē´wiwin sang the song of the South Wind.",
"17 The breeze was warm and sweet upon their faces.",
"18 They descended the hill in silence, pondering the vision.",
"19 That night they camped among the hills.",
"20 Yahawzhowaa spake long by the fire, teaching of the kingdom.",
"21 It is not here nor there, but within you; the Father’s lodge is built in the heart of the faithful.",
"22 He warned them of false guides who would come in His name.",
"23 Ye shall know them by their fruits.",
"24 The stars wheeled overhead as He spake.",
"25 The people listened as to a river in flood.",
"26 At last He prayed over them and blessed them.",
"27 The fire burned low, and they slept in peace.",
"28 In the morning, the South Wind bore them onward.",
"29 The hills fell away behind them, and the road stretched westward.",
"30 They spoke little, each lost in thought of what was to come.",
"31 The sky was bright, and the day fair.",
"32 They journeyed until evening and camped by a small lake.",
"33 The water was still, reflecting the heavens.",
"34 Yahawzhowaa said, So may your hearts be, reflecting the light without blemish.",
"35 Thus ended the vision at Zhaawanoong, and they set their faces toward the Turtle Mountains.",
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