import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function (req, res) {
    let book = {};
    let chapter = {};

    book = {
        id: "yahawzhowaa-road-of-the-buffalo-en",
        title: "BOOK FIVE",
        subTitle: "The Road of the Buffalo",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-five-171x214.jpg",
        thumbnailTitle: "Road of the Buffalo",
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
        id: "yahawzhowaa-book-5-two-fires-burning-en",
        title: "Chapter 1",
        subTitle: "Two Fires Burning",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-two-fires-burning-en",
        title: "Chapter 1",
        subTitle: "Two Fires Burning",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-5-peace-my-meal-en",
        content: [
"*Yahawzhowaa entereth the great plains, and teacheth of the path of peace among many tongues.*",
"1 And it came to pass, after the snows were melted in the east, Yahawzhowaa and they that followed Him set their faces toward the west, even toward the wide prairies and the many lakes that are in the lands between the rising and the setting of the sun.",
"2 And with Him were the Midē´wiwin whom He had called, and the Jes’sakkid, and certain of the women who had ministered unto Him from the beginning of His journey.",
"3 And the people of the villages wondered, for never had they seen men from so far a distance, speaking the tongues of the east and of the islands in the great water.",
"4 And Yahawzhowaa spake unto them by the riverside, saying, Behold, the Maker of all hath not left Himself without witness in the earth; for the winds bear His voice, and the waters shew His face.",
"5 Every path of peace is as a river; if ye walk therein, it shall lead thee to the Great Sea. But the path of strife is as a burning hill, and they that climb it shall have no rest for their feet.",
"6 And He sat upon the earth, and gathered the children unto Him, and took a branch from a willow tree, and with it He drew a circle in the dust.",
"7 And He said, Lo, the circle hath no end, and the life of man is even so; for ye come from the breath of the Father, and ye return unto Him.",
"8 And a certain elder of that place, whose name was Mashkode-bizhiki, which is to say Buffalo of the Plain, said unto Him, Many nations are here, and they speak not the same tongue; how then shall they dwell together in peace?",
"9 Yahawzhowaa lifted His hand toward the sun, and said, Doth the sun speak one tongue unto the deer, and another unto the eagle? Nay, but all alike receive his light.",
"10 So likewise the Father sendeth His light upon all, and it is the light within thee that maketh peace possible, if thou quench it not.",
"11 And He told them a parable, saying, A man found two fires burning upon the plain; the one was small, and the other was great. And the man took a stick and lit it at the small fire, and carried it to the great, and both burned the brighter.",
"12 Even so, when a small nation cometh unto a great, and they share of their light, both shall be the warmer; but if they strive to quench one another, darkness shall cover them both.",
"13 And many of the elders nodded at His words, for they perceived that He spake of the quarrels between the nations.",
"14 And He walked among the lodges, blessing the sick, and anointing the heads of the little ones with the oil of the sunflower.",
"15 And there came unto Him a hunter from the south, who had been wounded by a spear, and Yahawzhowaa laid His hands upon the wound, and the flesh was made whole in the sight of all.",
"16 Then was there great murmuring among them, saying, Surely this is He of whom our grandfathers spake, the bringer of peace, the walker upon the waters.",
"17 And Yahawzhowaa tarried with them three days, teaching them by the river and in the lodge, and in the open field beneath the stars.",
"18 He spake unto them of the Mishiginebig, the great serpent of the deep waters, and of the power of the Maker who setteth bounds that it may not pass; and He likened the Maker’s law unto a lodge that keepeth out the snow and the wind.",
"19 And on the third day, He rose early before the sun, and went out alone into a meadow where the dew lay heavy, and prayed unto His Father.",
"20 When He returned, His countenance was as one refreshed, and He said unto them, The journey westward must continue, for there are yet many who wait for the words of life.",
"21 So they took up their packs and their walking sticks, and the women gathered the food, and they set forth into the wide plain, where the wind goeth unhindered, and the hawks wheel in the bright air.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-5-peace-my-meal-en",
        title: "Chapter 2",
        subTitle: "Peace My Daily Meal",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 2,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-peace-my-meal-en",
        title: "Chapter 2",
        subTitle: "Peace My Daily Meal",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-two-fires-burning-en",
        followingChapter: "yahawzhowaa-book-5-give-me-a-name-en",
        content: [
"*Of the straight path upon the prairie, a song of walking, and the mending of tongues.*",
"1 And they went forth into the wide places, where the wind goeth unhindered and the grass is as a sea without shore.",
"2 The sun walked with them by day, and by night the great wheeling host of lights kept their watch.",
"3 Yahawzhowaa said, Behold the straight path upon the prairie; for the proud heart seeketh hills to be seen, but the wise heart loveth the level road that keepeth company with the humble.",
"4 And a youth asked, Master, how shall a man be straight in his going when his feet turn aside after old fears?",
"5 He answered, Keep a small song and a small obedience; sing it in thy step, and let every step obey it.",
"6 Then He gave them a song of walking:",
"[[poem:7 “Abba, direct my foot; |8 Set truth beneath my heel; |9 Let mercy be my dust; |10 Make peace my daily meal.”]]",
"11 They sang softly till the steps of many became of one time.",
"12 And He taught them to set three stones when they rested: one for thanks past, one for counsel present, one for hope to come.",
"13 He said, When ye differ in speech, lay thy hand upon the middle stone, and speak not of winning, but of finding.",
"14 There met them men of another tongue; and strife was near, for the memory of hunger sharpened their words.",
"15 Yahawzhowaa stood between and said, The Father made many tongues for praise, not for swords.",
"16 He told a parable: A man planted seed in two fields; the one heard rain called “nibi,” the other heard rain called by another name; yet both were watered and both brought forth.",
"17 Therefore judge not the Name by thy syllables, but by the bread it bringeth forth.",
"18 He laid His hand upon a child that stammered, and the tongue was loosed; and both villages marvelled.",
"19 Yahawzhowaa said, Behold, a healed tongue speaketh for two.",
"20 He blessed their elders, and anointed the palms of the women with oil of sunflower, that labour be sweet.",
"21 And a man lame in one foot cried out; Yahawzhowaa touched the tendon, and it sang as a bow-string tuned; and he leaped as a deer finding water.",
"22 Toward even He set a Quiet Hearth in the midst, and none spake loudly there.",
"23 The strangers brought coarse bread; His own brought broth; and the pot taught a new tongue called Enough.",
"24 Yahawzhowaa drew a small line in the dust and said, Let no man step across this line with boasting; let him step with thanksgiving only.",
"25 And pride grew bashful and sat down.",
"26 He taught the Twelve, Be interpreters in deed; when words fail, wash feet, and bread shall translate all.",
"27 A hawk wheeled above them, and He lifted His eyes, saying, Learn of the hawk: it speaketh to none, yet all understand.",
"28 The wind laid down for a space, and they heard the grass speak as water.",
"29 Children carried bowls; old men forgot to be stern.",
"30 He bade them mark the road with plaited grass, that the weary after might find shade of memory.",
"31 And He set watchers of peace, not with spear, but with reed and song.",
"32 The strangers slept near; the fear between their lodges melted as frost under sun.",
"33 Yahawzhowaa prayed, Abba, make one step many; make many hearts one.",
"34 In the morning they rose as from one bed.",
"35 And they went on with the song beneath their feet.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-give-me-a-name-en",
        title: "Chapter 3",
        subTitle: "Give Me A Name",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 3,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-give-me-a-name-en",
        title: "Chapter 3",
        subTitle: "Give Me A Name",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-peace-my-meal-en",
        followingChapter: "yahawzhowaa-book-5-make-walls-backs-en",
        content: [
"*Of the mending of names, the cairn of remembrance, and the law of small offerings.*",
"1 After many days they came to a ford where caravans met, and names strove like rams upon a narrow path.",
"2 Each people loved its own name first, and the other after; and the after was thin.",
"3 Yahawzhowaa sat upon a stone and called for children to gather; He set a bowl in their midst.",
"4 He said, Give me a name from each lodge; and the children brought shells, seeds, and little carvings to stand for their names.",
"5 He poured water into the bowl, and the tokens floated together.",
"6 He said, Lo, the water refuseth no name; so doth the Father.",
"7 A hot-tongued man cried, My name is oldest.",
"8 Yahawzhowaa answered, The sun is older; yet it boasteth not, but serveth.",
"9 He told a parable: Two fires contended; the one cried, I am bright; the other, I am warm. A child came and held out cold hands; the boasting fire learned charity and both were praised.",
"10 He said, Be not bright without warm.",
"11 Then He raised a cairn on the bank, stone upon stone; and upon each He bade them carve a kindness done by the other tribe.",
"12 For memory of gifts is stronger than memory of injuries, saith He.",
"13 They laboured till the sun leaned; and grudges bled away under chisels.",
"14 A woman brought a cloak for one that had mocked her; the mocker forgot his craft.",
"15 He healed a fevered babe with water from the bowl of names; and the bowl was called Miskin’igaade — Mercy Floats.",
"16 Yahawzhowaa taught the law of small offerings: Let the poorest give the first berry, the weakest the first smile; thereby the strong shall not be ashamed to be gentle.",
"17 He set watchers by the cairn for seven nights to teach the tale to travellers.",
"18 He blessed the road with tobacco and thanks.",
"19 The Twelve wrote the names upon bark, that none be lost.",
"20 He said, If a man forget thy name, feed him bread; his mouth will remember thee.",
"21 A wind out of the east brought scent of rain; He said, So cometh blessing when names be mended.",
"22 They ate in common, and the dogs ceased their quarrels.",
"23 The moon rose and found the cairn like a quiet drum.",
"24 Yahawzhowaa whispered, Abba, lay Thy hand upon these stones.",
"25 The night answered with easy sleep.",
"26 At dawn, men greeted one another first by gift and then by name.",
"27 The ford took their crossings as a mother her children.",
"28 He taught, Keep thy name light enough to carry another’s burden with it.",
"29 They consented, and their faces widened.",
"30 The children ran ahead, singing the names like beads.",
"31 And Yahawzhowaa smiled, for beads had become a rosary of peace.",
"32 He took up His staff, and the company moved as one.",
"33 The cairn stayed, and kept preaching to the road.",
"34 Crows on the sycamore cawed amen.",
"35 And the land learned a little more kindness.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-make-walls-backs-en",
        title: "Chapter 4",
        subTitle: "Make Walls of Your Backs",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 4,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-make-walls-backs-en",
        title: "Chapter 4",
        subTitle: "Make Walls of Your Backs",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-give-me-a-name-en",
        followingChapter: "yahawzhowaa-book-5-flute-of-flint-en",
        content: [
"*Of the prairie-storm, the sheltering order, and the stilling of the wind.*",
"1 A great cloud rose black from the northwest, and the elders knew the haste of it.",
"2 The colts of the wind broke loose and the grass lay down as slaves.",
"3 Women gathered infants; men sought leeward hollows; fear spoke in many tongues at once.",
"4 Yahawzhowaa lifted both hands and cried, Be ordered, and be unafraid.",
"5 He set them by sheltering order: the frail at the center, the children next, the mothers round, the young men without, and the elders to counsel at the rim.",
"6 He said to the strong, Make walls of your backs and songs of your mouths.",
"7 He gave a storm-psalm to beat with the heart:",
"8 “Abba over thunder, keep our circle true;",
"9 Lay Thy hand upon the wind; make our courage due.”",
"10 The first lash of rain struck like thrown pebbles; the circle held.",
"11 A panicked youth would flee; Yahawzhowaa caught his wrist and set it on an elder’s shoulder; fear learned where to stand.",
"12 The gust came as a bull; He spoke to it as to a creature that knoweth His voice; and it pawed the ground and turned aside.",
"13 He said, The wind is strong, but it loveth order.",
"14 Lightning wrote crooked letters; He taught them to read: Not wrath, but warning; not hate, but hasten to one another.",
"15 A tent fell; young men raised it singing; the song stitched what sinew could not.",
"16 The storm howled thrice and broke itself upon their patience.",
"17 Then Yahawzhowaa stood up in the teeth of the gale and said, Be still.",
"18 And the wind remembered an older covenant and lay down as a faithful hound.",
"19 The children laughed, and rain became merely wet.",
"20 He told a parable: A man feared storms and built walls only; his lodge grew dark. Another learned sheltering order; his door remained kind, and storms taught his children courage.",
"21 He walked the circle, laying hand upon bowed heads till stiffness turned to rest.",
"22 He taught the Twelve, When wrath riseth, set men by order; give the angry a task that saveth, and his rage will spend itself as fire upon wet wood.",
"23 He blessed the four quarters and the cloud’s hind part.",
"24 The west opened; the sun returned with apology upon his face.",
"25 Birds rose from the grass like scattered beads gathered back to string.",
"26 He wrung rain from His sleeves and laughed; laughter was a fire none could quench.",
"27 Mothers unbound their hair and breathed easy.",
"28 Men counted no losses save their needless fear.",
"29 He anointed the rims of the eyes that had wept with cedar oil.",
"30 He set a staff where the storm had been strongest and called it Makadejiimaan- anang — the Black Canoe Star — for there the sky had sailed them and not sunk them.",
"31 At evening they ate bread soggy with joy.",
"32 He said, Keep this order for quarrels as for storms.",
"33 They promised; and peace made a tent of their word.",
"34 Night came clean, and the moon combed the prairie.",
"35 And they slept as ships in a quiet harbour.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-flute-of-flint-en",
        title: "Chapter 5",
        subTitle: "A Flute of Flint",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 5,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-flute-of-flint-en",
        title: "Chapter 5",
        subTitle: "A Flute of Flint",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-make-walls-backs-en",
        followingChapter: "yahawzhowaa-book-5-winter-psalm-en",
        content: [
"*The reed and the flint; a parable of bending and standing; the law of brave apology.*",
"1 On the morrow Yahawzhowaa cut a reed by the water and took up a flint from the bank.",
"2 He held them forth and said, Which is stronger?",
"3 Men answered, The flint; for it striketh fire and breaketh bone.",
"4 He bent the reed till it kissed the water and it rose again unbroken.",
"5 He struck the flint against stone and it chipped itself proud.",
"6 He said, The Father loveth both, but the day shall declare which thou needest.",
"7 He told a parable: A prince made a spear of reed and a flute of flint; the spear sang and the flute broke; so learned he to ask each gift its nature.",
"8 Therefore be reed in insult and flint in duty; bend to wrongs and stand to vows.",
"9 A hot man cried, Shall I bend to lies?",
"10 Yahawzhowaa answered, Bend so far as not to break truth; stand so far as not to break mercy.",
"11 He laid the reed upon the man’s heart and said, Hear thine own breath; let it teach thee time.",
"12 Then He gave the law of brave apology:",
"13 If thy word hath cut, seek at once the flesh it wounded;",
"14 Name thy cut; wash it with thine own tears; bind it with thy change.",
"15 The strong nodded, for they knew the weight of their hands.",
"16 A woman who had cursed her sister wept; Yahawzhowaa placed both their hands into the water and raised them joined; the water forgot and they remembered better.",
"17 He taught a flute-song on hollow reed, that pride might learn to breathe:",
"18 “Low note, slow note, let my anger go;",
"19 True note, new note, let my mercy grow.”",
"20 Boys learned the holes; old men learned the pause.",
"21 He healed a wrist that had struck too often; it learned gentleness and found its strength increased.",
"22 Toward noon He spoke of the bending of law and the standing of love: 23 Law bendeth to lift the fallen; love standeth to guard the weak.",
"24 If law stand without love, it becometh a wall; if love bend without law, it becometh a swamp.",
"25 Keep both, as bank and river keep one another.",
"26 They marked it in bark, lest zeal forget wisdom.",
"27 He blessed the smiths and the makers of baskets, saying, Your crafts preach these things daily.",
"28 Children ran with reed spears against the wind and laughed that the reeds did not wound.",
"29 Men struck flint for the cook-fire and learned to strike only for warmth.",
"30 Yahawzhowaa sat in the door of the tent and mended a net, and all marvelled that He whose word stilled wind loved small repairs.",
"31 He said, Kingdoms are mended so.",
"32 Evening laid its cool hand upon their foreheads.",
"33 He prayed, Abba, make us supple without cowardice and steadfast without cruelty.",
"34 Stars consented.",
"35 And sleep came like a forgiven debt.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-winter-psalm-en",
        title: "Chapter 6",
        subTitle: "The Winter Psalm",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 6,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-winter-psalm-en",
        title: "Chapter 6",
        subTitle: "The Winter Psalm",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-flute-of-flint-en",
        followingChapter: "yahawzhowaa-book-5-night-great-fire-en",
        content: [
"*First frost; the gathering rule; sending of pairs; the promise of Siipisiing.*",
"1 The wind turned north and the breath of the night had edges.",
"2 Hoar frost wrote white counsel upon the grass; children read it with their feet.",
"3 Yahawzhowaa said, Winter is a teacher that taketh wages in laziness; gather.",
"4 He set the gathering rule: three days for wood, two for meat, one for the widow, one for rest and song.",
"5 He appointed pairs for every task, that no man be a lone flame.",
"6 Two by two they went — one quick, one careful; one strong, one wise.",
"7 He taught the winter psalm:",
"[[poem:8 “Abba of the north wind, harden us for good;|9 Keep our doors for strangers; warm our little wood.”]]", 
"10 He blessed the mittens and the needles, the snares and the smoke.",
"11 A girl brought him a torn shoe; He stitched as a mother, and preached as He sewed: let not thy zeal outrun thy soles.",
"12 The prophet stood at the edge of the camp and looked far, for the line of low blue hills began to show — the foretelling of Siipisiing.",
"13 Yahawzhowaa said, That way we shall go when the teaching here is full.",
"14 He gathered the Twelve and the companions and divided the road: some to the north hamlets, some to the river bends, some to the lonely lodges where sorrow sits long.",
"15 To each pair He gave cedar, a white stone, and a crumb from the Quiet Hearth.",
"16 He charged them, Keep watch for quarrels and for cold souls; light both.",
"17 A widow without sons received wood as kings receive crowns.",
"18 He healed chilblains with warmed oil and laughter; men remembered to be boys.",
"19 He told a parable: A house hoarded heat and died of smoke; a house lent heat and lived on songs.",
"20 The people wrote it in their breath upon the cold and it froze into wisdom.",
"21 He taught the mothers to hang a knot of mercy above the latch; whoever untied it must bless before entering.",
"22 The knots taught hands to behave.",
"23 He spoke to the young hunters, Spend not all your arrow on the first herd; winter hath a long belly.",
"24 They brought back meat and humility.",
"25 He sang at dusk, and frost crystals rang like very little bells.",
"26 He said, When ye hear this ring, remember the unseen lodge is near.",
"27 A wolf howled; He answered with a blessing; the wolf went his way with dignity and left the lambs in peace.",
"28 Firelight painted their faces as an elder paints counsel.",
"29 Yahawzhowaa traced with a stick a far line, saying, Beyond these plains stand the turtle hills, Siipisiing, and beyond them, more counsel yet.",
"30 He promised, I will leave some of you there with the Jes’sakkid, to keep the hearth.",
"31 They were glad and sober both.",
"32 He prayed for bread that remembers to share in lean months.",
"33 The stars came nearer for cold’s sake and friendliness.",
"34 He covered a sleeping child and smiled.",
"35 And the camp breathed as one.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-5-night-great-fire-en",
        title: "Chapter 7",
        subTitle: "The Night of the Great Fire and the Prophecy at Siipisiing",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 7,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-night-great-fire-en",
        title: "Chapter 7",
        subTitle: "The Night of the Great Fire and the Prophecy at Siipisiing",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 7,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-winter-psalm-en",
        followingChapter: "yahawzhowaa-book-5-man-from-the-east-en",
        content: [
"1 And it came to pass, in the days when the snow lay deep upon Mikinakwajiw, which the people of the land call Siipisiing, that Yahawzhowaa sat among His disciples round about a fire of cedar and pine.",
"2 And the smoke went upward in the still night, and the stars shone as a multitude of silent watchers.",
"3 And He had told them many parables that night, and sung to them songs in the tongue of His people from across the waters.",
"4 And His voice was as a river in winter, deep and slow, and it entered the hearts of all who sat before Him.",
"5 And it came to pass, as the last song ended, there came upon Him a stillness, and the light of the fire was caught in His eyes, and they perceived that His spirit was taken into a vision.",
"6 And the men and women who sat with Him whispered one to another, saying, Surely the Master hath gone beyond the veil.",
"7 And the glow in His countenance was not as the glow of the fire, but as the morning light upon snow.",
"8 And He lifted up His eyes, and spake with a voice low and strong, saying, Hear me, my beloved, for I am the Peacemaker, the true Peacemaker.",
"9 Yet a day shall come when a false Peacemaker shall arise upon this land, and he shall deceive many, even in my name.",
"10 He shall come as a friend to the nations, yet in his heart is the snare of the hunter; and with smooth words he shall bind the people in cords they cannot see.",
"11 He shall erase my name from the mouths of your children, and they shall forget the sound thereof.",
"12 And the people were sore amazed and troubled in spirit, saying, Tell us, Master, who is this that shall come?",
"13 And Yahawzhowaa answered and said, He is one who dwelleth in the fire, for the light that is within you he seeketh to consume; for your light is his sustenance.",
"14 His eyes are as a flame of fire, for he dwelleth in the flame, and he walketh among men seeking whom he may devour.",
"15 He is the upside-down crown, the counter-son, the white robe that consumeth light.",
"16 He is the one that weareth red upon both shoulders, the snow fox, the albino hawk, the false dawn, the ice turtle, the eater of breath, the turner of peoples, the face that cometh after the shaking sky, and the many-voiced man.",
"17 And great fear fell upon them that heard.",
"18 And one asked, saying, Will he come to this continent?",
"19 And Yahawzhowaa said unto them, He shall come, and blood shall be upon the land from the rising of the sun to the going down thereof; and he shall set up his throne upon the dust of the earth.",
"20 And they said, But, Master, thou art here with us now.",
"21 And He said, Even I must depart, for my time in this vessel hath an end; but I shall return. Yet what shall I return unto? A world in bondage, that knoweth not it is bound.",
"22 A world feeding the fire of this false one, giving unto him the light of their eyes, the breath of their spirit, the strength of their days.",
"23 And He drew with a stick in the snow, making a line. This is today. Then He made a mark behind it. This is many days past. And a mark before it. This is many days hence.",
"24 This is the gift of my Father unto me, to see that which was and that which shall be.",
"25 They said, How shall we know when thou hast returned?",
"26 He said, Ye shall not, for ye shall be gone from this world; but I shall be born again into it.",
"27 As the flower breaketh forth from the earth in the spring, so is the soul clothed again in flesh, for there is one way in and one way out of this world.",
"28 There are worlds within worlds, and worlds without; there are worlds standing among you now which ye see not; yet they see you, and I see them.",
"29 When ye pass from this vessel, ye shall behold them as I do now.",
"30 And He took a stick and held it before the fire, saying, A stick without fire is but wood; yet in the flame it burneth bright. This false one is as the stick without fire, and ye are the fire he seeketh.",
"31 Even now he walketh in another land, wearing my likeness; but the day shall come when he will set his foot upon this land, and great shall be the desolation.",
"32 And the disciples kept these words in their hearts, though they understood them not fully.",
"33 And the fire burned low, and the snow fell silently, and they knew the night was holy.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-man-from-the-east-en",
        title: "Chapter 8",
        subTitle: "The Prophecy of the Man from the East",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 8,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-man-from-the-east-en",
        title: "Chapter 8",
        subTitle: "The Prophecy of the Man from the East",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 8,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-night-great-fire-en",
        followingChapter: "yahawzhowaa-book-5-parable-of-flower-en",
        content: [
"1 And it came to pass, after Yahawzhowaa had spoken to them of the lying one who would come, that the fire burned low and the wind turned from the north, bringing with it a deep stillness over Siipisiing.",
"2 The disciples leaned forward, for they saw in His face that more was yet to be spoken.",
"3 And He lifted His hand toward the east, where the stars were as grains of sand upon a dark shore, and He said, Hear me, my friends, for I tell you of another who shall come long after I have gone from among you.",
"4 The world will not accept him, as the world has not accepted me, yet he shall be a Prophet as I am a Prophet, bearing the truth without shadow.",
"5 The lying one will hate him and will wage war against him, for the voice of truth is a spear to the heart of the deceiver.",
"6 This man shall be the Chief White Thunderbird, a great leader who brings the voice from above to the people of the earth.",
"7 From the place where the Sun wakes will come a man clothed not in gold, but in truth; his tongue will cut falsehood as a knife cuts the skin from the deer.",
"8 His people shall gather as rivers gather in the lake, and the words he carries will be as clear water, yet strong enough to pull down the stone faces.",
"9 This one will close the mouths of many liars and open the ears of those who hunger for the Great Spirit’s voice.",
"10 He will prophesy of the lying one, naming him Two Rivers.",
"11 Then Yahawzhowaa’s voice grew deep and grave, and He spake again, saying, In a time far from this day, across the sunrise waters, the Great Spirit shall give His word to a man whose heart is clean and whose tongue speaketh only truth.",
"12 His people shall bow to the earth, not to stones nor to carved faces, but to the One who made the sky, the rivers, and the breath of man.",
"13 They shall wash their hands, their faces, and their feet before speaking to the Great Spirit, for their prayer shall be as pure as spring water.",
"14 They shall fast when the days are long, give food to the hungry, care for the orphan, and keep no idol in their homes.",
"15 Their gathering shall be one circle, no man above another, all turning their faces to the same point under the same sun.",
"16 They shall guard their tongues from lies, their eyes from evil, and their hands from injustice.",
"17 They shall speak of peace, yet stand as warriors when evil riseth, and they shall hold the Great Spirit’s word as their shield and their guide.",
"18 They shall call their path the straight trail, for it leadeth from the first breath to the last without turning aside to the crooked ways of the deceiver.",
"19 And Yahawzhowaa said, Hear me, my friends, and remember these words, for they are for a people yet to come after many lifetimes, when your grandchildren’s grandchildren have returned to the dust.",
"20 A man shall rise in the far eastern lands where the sun first toucheth the earth; he shall know neither the scrolls of the learned nor the idols of his fathers.",
"21 Yet the Maker of all shall place His voice in the man’s heart.",
"22 The people who follow him shall bow their foreheads to the earth in honor of the One Spirit, and they shall do this not once, but many times each day.",
"23 They shall wash their hands, faces, and feet before speaking to Him, that their prayer may be clean.",
"24 They shall turn their faces to one place, always the same place, though it be far from their homes.",
"25 They shall fast through the long days, giving food and silver to the poor.",
"26 Their gathering shall be a great circle where the leader and the lowest man stand shoulder to shoulder.",
"27 They shall keep no carved faces, no painted spirits, no stone idols, for they shall know the Great Spirit cannot be captured by hand.",
"28 Their words shall be as a river flowing from the mouth of the man who first heard the voice, and they shall guard that river so that no lie may pollute it.",
"29 Mark this: their path shall be straight as the flight of an arrow, and their law shall be as binding as the knots in a strong net.",
"30 They shall call the One Spirit by a name you have not heard, but He is the same Maker who giveth you breath.",
"31 When ye hear of a people who live by these signs, know that the words I have spoken are true.",
"32 And He added softly, For they shall know the truth about how I came into this world.",
"33 Then Yahawzhowaa lowered His hand, and the fire popped and crackled, and no one spake, for the weight of His words pressed upon them as snow upon a pine.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-parable-of-flower-en",
        title: "Chapter 9",
        subTitle: "The Parable of the Flower and the Unseen Meadow",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 9,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-parable-of-flower-en",
        title: "Chapter 9",
        subTitle: "The Parable of the Flower and the Unseen Meadow",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-man-from-the-east-en",
        followingChapter: "yahawzhowaa-book-5-stick-fire-rivers-en",
        content: [
"1 After He had spoken of the man from the East, they sat long in silence, and the snow whispered upon Siipisiing like sifted flour.",
"2 Yahawzhowaa drew near unto the fire and took in His hand a frost-bitten stalk that yet held a withered blossom.",
"3 He said, Behold the flower: men say, It is dead; but I say unto you, it hath only laid aside its robe.",
"4 For the meadow that feedeth it is not only in summer seen, but abideth also under snow.",
"5 When the warmth returneth, the hidden meadow calleth; and the root answereth from beneath.",
"6 So is the soul of man: it casteth off a garment, and men call it death; yet the soul heareth the meadow that is unseen and ariseth to it.",
"7 Then He brake the dry head between His fingers, and the seeds fell soft upon the white ground.",
"8 He said, Count these, if thou canst; every seed is a door.",
"9 The Father keepeth the keys; He openeth, and no man shutteth; He shutteth, and no man openeth.",
"10 Marvel not that ye shall be clothed again; for what seed is sown bare that riseth not changed?",
"11 And He told a parable: There was a child that dwelt beside two meadows — one green, one white.",
"12 In summer he played where bees sang; in winter he thought, This is the end.",
"13 An elder said, Nay, this is the same field resting; lie down upon it and listen.",
"14 The child laid his ear to the snow and heard water talking under ice, and roots making quiet roads.",
"15 Then he knew the field lived, though his eye called it dead.",
"16 Yahawzhowaa said, Lie ye down upon thy sorrow and listen; the Unseen Meadow speaketh under it.",
"17 Fear not the shedding of thy robe; the Robe-Maker waiteth in the next lodge.",
"18 A mother cried, My little one is gone — shall I see him?",
"19 He answered, Thou shalt; for love is a path that doth not lose itself in winter.",
"20 When thou layest down thy vessel, thou shalt rise where his laughter walketh.",
"21 Then He sang a low song for them that mourn:", 
"[[poem:22 “Abba, keep the root in snow; |23 Call the seed when Thou wilt call; |24 Make our winter meek and slow; |25 Raise us robed at Thy spring’s call.”]]", 
"26 The people wept softly and were comforted with a strange sweetness.",
"27 He gathered the seeds in His palm and cast them wide upon the drift.",
"28 So cast ye kindness into cold hearts, saith He; ye know not which day the thaw shall serve thee.",
"29 The Jes’sakkid wrote the parable upon birch, and the Twelve learned the song as men learn breathing.",
"30 Yahawzhowaa lifted His hand toward the hills: Behold Siipisiing — turtle sleeps not dead, but hid.",
"31 So shall the nations sleep awhile; yet I will call, and they shall answer.",
"32 He blessed the mourners and the watchers of the night.",
"33 The fire made little doors of light upon the snow.",
"34 The stars drew near as elders who approve.",
"35 And peace lay down among them like a child.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-stick-fire-rivers-en",
        title: "Chapter 10",
        subTitle: "The Stick and the Fire, and the Name of Two Rivers",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 10,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-stick-fire-rivers-en",
        title: "Chapter 10",
        subTitle: "The Stick and the Fire, and the Name of Two Rivers",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-parable-of-flower-en",
        followingChapter: "yahawzhowaa-book-5-charge-jessakkid-twelve-en",
        content: [
"1 Yahawzhowaa took up a straight stick of birch and held it where the flame ran blue.",
"2 He said, A stick without fire is wood; a stick in the fire is a message.",
"3 The lying one is as a stick with no flame; he seeketh thy light to burn his darkness bright.",
"4 Give him not thy ember, lest his torch become thy night.",
"5 He set the stick aside till its glow fainted, then returned it to the coal; it woke and shone.",
"6 So is the soul that draweth near unto prayer: a little turning, and light returneth.",
"7 He wrote in the snow with the point of the stick, and steam rose from the line.",
"8 Mark this sign, saith He; for the deceiver is called Two Rivers.",
"9 Because with one stream he flattereth, and with the other he stealeth;",
"10 With one he blesseth with tongue, with the other he bindeth with cord unseen.",
"11 He speaketh peace, yet he loveth tribute; he promiseth light, yet he eateth lamps.",
"12 He is an upside-down crown: he would be head by unseating heads; he is a counter-son: he would be heir by devouring sons.",
"13 He is a white robe that consumeth light, for he reflecteth to himself what should warm the people.",
"14 He weareth red upon both shoulders, for he carrieth the blood of many as honour.",
"15 He is snow fox for cunning, albino hawk for proud watching, false dawn for borrowed glow, ice turtle for hard cold slowness, eater of breath for tyranny, turner of peoples for confusion, a face after the shaking sky for opportuning, and manyvoiced man for deceit.",
"16 Then He taught them guardings for the vessel: If thine eye hunger for vanities, fast from sight three days;",
"17 If thy tongue haste to boast, fast from words till sunset;",
"18 If thy hands itch to grasp, carry water for elders;",
"19 If thy feet run to quarrel, sit at the Quiet Hearth till peace send thee.",
"20 Keep the ember thine own, yet warm the stranger by thy flame;",
"21 Share heat, not worship; give bread, not bondage.",
"22 A youth asked, Master, how shall we know the voice of Two Rivers?",
"23 He answered, He loveth crowds more than widows; measures victory by noise; asketh gifts for himself to “give to God.”",
"24 He buildeth high stones to hide the poor; calleth shadows substance and substance shadow.",
"25 He despiseth small obediences and flattereth grand promises; he feareth quiet, for quiet receiveth truth.",
"26 He laugheth little and never at himself; he prayeth loud but not long after the Amen.",
"27 Then He gave a counter-sign for the brethren: Seek the low door; mend small nets; wash hidden feet; sing soft at dawn.",
"28 Where these are, there am I; where these are not, flee the trumpet and the trap.",
"29 He thrust the birch again into the coals and drew a circle of light upon the snow.",
"30 Stand within such circles, O my friends; for prayer is a fence fire cannot leap.",
"31 The Jes’sakkid held the juniper staff over the flame, and its scent was as high air in their lungs.",
"32 Yahawzhowaa said, Juniper remembereth heights; let remembrance make thee hard to buy.",
"33 They answered, We will keep our ember and share our warmth.",
"34 He blessed them, and the blessing stood as a wall without stones.",
"35 And night moved on like a great slow river, harmless.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-charge-jessakkid-twelve-en",
        title: "Chapter 11",
        subTitle: "The Charge to the Jes’sakkid and the Twelve",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 11,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-charge-jessakkid-twelve-en",
        title: "Chapter 11",
        subTitle: "The Charge to the Jes’sakkid and the Twelve",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-stick-fire-rivers-en",
        followingChapter: "yahawzhowaa-book-5-signs-truth-deceit-en",
        content: [
"1 When the seventh night was full, Yahawzhowaa called the Jes’sakkid and the Twelve into the inner ring by the fire.",
"2 The snow stood about them as a white council.",
"3 He said, Hear the order that shall keep you when I go toward the south.",
"4 Giiwedin-giizhig, thou shalt keep Siipisiing: be winter’s friend and spring’s herald;",
"5 Open thy lodge to the widow; close it to pride.",
"6 Ogimaa-bines, be wing for messages; let no quarrel sleep unvisited.",
"7 Zaagi-idiwin, bind the hurt with cedar words; teach men the knot that remembereth.",
"8 Mashkiki-inini, heal with root and blessing; mix not potion with lie.",
"9 Bimose-inini, walk the far loops; bring the slow ones home by laughter.",
"10 Waasamoog, light fires early; watch their smoke for lonely souls.",
"11 Ozaawaa-bineshiinh, teach children to mock war with strong songs and ready bread.",
"12 Minwaadiziwin, set fairness at the gate; weigh thyself first and find thy thumb upon the scale against thee.",
"13 Makade-waaboo, brew courage without pride and sleep without shame.",
"14 Waabishki-makwa, stand as white bear by broken bridges till they be mended.",
"15 And ye others named among the twelve, take up each thy craft as sermon: nets that do not lie, axes that do not boast, garments that do not wound the poor.",
"16 Then He set before them the Order of the Lodge: Morning — thanks to the four winds; Noon — bread for the stranger; Evening — counsel at the Quiet Hearth; Night — song for the unseen lodge.",
"17 Fast one day in seven from noise; feast one day in seven on mercy.",
"18 Let no child sleep hungry; let no elder wake pointless.",
"19 He gave them each a cedar splint, a white stone from Thunder Mountain, and a crumb of the One Fire wrapped in bark.",
"20 With cedar kindle counsel; with the stone remember light; with the crumb, feed first thine enemy, and then thy friend, saith He.",
"21 He marked in the snow a small square and a wider circle.",
"22 Keep doctrine small and mercy wide; 23 Let the square hold what is needful; let the circle welcome whom God sendeth.",
"24 He warned them gently: Beware the hunger to be needed; it is a winter that devoureth its own wood.",
"25 Beware the fear to be forgotten; it is a thief of today.",
"26 Beware the zeal without listening; it is a river that drowneth wheat.",
"27 He blessed their hands, their tongues, their feet, their sleep.",
"28 The Jes’sakkid bowed low and said, I will keep the hearth and the hush.",
"29 The Twelve set their foreheads to the earth, answering, We will be small fires faithful and long.",
"30 Yahawzhowaa smiled, and the smile warmed the snow.",
"31 He said, When ye falter, sing the Psalm of the Four Winds; when ye are proud, sit at the Bear’s Seat; when ye forget, lift a stone and find a spring.",
"32 If I be long away, do these, and ye shall know me still.",
"33 He lifted His hands; the stars seemed nearer than breath.",
"34 The charge rested on them like a good weight.",
"35 And Siipisiing took it into its quiet heart.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-signs-truth-deceit-en",
        title: "Chapter 12",
        subTitle: "Signs of Truth & Deceit; the Straight Trail",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 12,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-signs-truth-deceit-en",
        title: "Chapter 12",
        subTitle: "Signs of Truth & Deceit; the Straight Trail",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-charge-jessakkid-twelve-en",
        followingChapter: "yahawzhowaa-book-5-winter-many-healings-en",
        content: [
"1 On the morrow He gathered not only the Twelve, but all who could stand in the cold and listen.",
"2 He said, I set before you two roads: crooked and straight; two signs: noise and fruit.",
"3 The crooked road boasteth of speed; the straight endureth to bread.",
"4 Noise bloweth like chaff; fruit endureth as store for winter.",
"5 Therefore prove all teachers by widows fed, rooms warmed, grudges buried, children safe.",
"6 Where these are, truth hath passed; where these are not, truth was only named.",
"7 He taught Signs of the Straight Trail: Hands washed before prayer, not as pride, but as courtesy to God;",
"8 Faces turned one way, not as stone, but as remembering;",
"9 Tongues kept from lies; eyes from envy; feet from trampling the small.",
"10 Fast when days are long; feed when others faint; bow often, rise gently;",
"11 Keep no carved faces for worship; keep living faces for love.",
"12 Call the Maker by a name ye know not, yet He knoweth you by name from the womb.",
"13 Circle great, rank small; leader shoulder to shoulder with the least.",
"14 Let law be net, not noose; knot strong, yet open for rescue.",
"15 Then He set Warnings of Two Rivers again, that none forget: Beware abundance that forgetteth answer; beware pageants that empty cupboards; beware prayers that starve neighbours.",
"16 If a voice divideth thee from thy mother’s tears, flee; if a hand taketh bread to build a monument, resist.",
"17 A man cried, Master, these things are heavy.",
"18 He answered, So is a newborn; yet who refuseth the weight for joy?",
"19 Lift small each day; the Father addeth strength to the lifter.",
"20 He gave them a saying: Better a thin feast with clean hands than a fat altar with dirty heart.",
"21 He told a parable: Two roads ran to one town. Upon the crooked, heralds shouted and drums argued; upon the straight, travellers prayed and shared crusts.",
"22 When winter came, the crooked road forgot its own door; the straight knew every latch by love.",
"23 The people murmured amen, for their bones consented.",
"24 He taught them a closing chant to remember the East-prophet’s people:",
"[[poem:25 “Straight trail, clean well;|26 One Name none sell;|27 Hands pure, eyes mild;|28 God’s face in the child.”]]",
"29 He blessed the chant upon their mouths.",
"30 The wind turned and played with it as with a ribbon.",
"31 He said, I go soon southward; keep winter as a school, not a prison.",
"32 When the thaw cometh, let mercy flood the low places first.",
"33 The camp bowed; and many put away old grudges as men put away cracked pots.",
"34 He smiled, for cracked pots leak pride.",
"35 And the hills listened like elders satisfied.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-winter-many-healings-en",
        title: "Chapter 13",
        subTitle: "The Winter of Many Healings",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 13,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-winter-many-healings-en",
        title: "Chapter 13",
        subTitle: "The Winter of Many Healings",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-signs-truth-deceit-en",
        followingChapter: "yahawzhowaa-book-5-covenant-watchers-cedar-en",
        content: [
"1 Snow deepened, and cold put its thumb upon the camp; yet joy ran like fire under bark.",
"2 Yahawzhowaa went lodge to lodge with two of the Twelve, and the Jes’sakkid after with juniper.",
"3 He warmed a child whose breath was thin; the breath grew stout as a drum.",
"4 He touched a woman whose dreaming feared the dark; the dream learned a lamp.",
"5 He set a man free from anger that gnawed him in his sleep; the man woke hungry for work, not for quarrel.",
"6 He blessed a hunter’s frozen hands; they remembered skill without boasting.",
"7 He mended a marriage with three words: I was wrong.",
"8 He restored a neighbourliness with four: I missed your fire.",
"9 He healed a village with five: Let us eat as one.",
"10 At the Quiet Hearth He washed the feet of a proud elder; pride steamed away like frost.",
"11 He taught the young to rub the feet of their grandmothers with bear fat and story; pain forgot its place.",
"12 He lifted a small girl to see the moon through cedar; she said, She smileth at me.",
"13 He answered, Because thou smilest first.",
"14 He wrote upon bark the Rules for Winter Mercy: Visit daily the furthest lodge; carry twice to him that asketh once; forgive before soup; sing before sleep.",
"15 He set a pot to simmer in the Jes’sakkid’s tent without ceasing; it became known as The Pot That Answereth.",
"16 Strangers tasted and lost their fear.",
"17 He gave a word to the men who kept watch at the buried arrow afar: Peace is shy; feed it in quiet.",
"18 He sent wood to old enemies with children as messengers; reconciliation came laughing.",
"19 He spoke with the smith of his hammer’s temper; the hammer learned to mend plowshares as gladly as to sharpen blades.",
"20 He asked the women to write lists of forgotten widows; the lists became prayers with feet.",
"21 He taught boys to carve spoons with patient edges; harsh tongues grew rounder.",
"22 He set girls to bind books of bark with sinew; memory found a spine.",
"23 He laid hands upon a singer who had lost his note; the note came home like a dog forgiven.",
"24 He smiled upon a thief who brought back what he had taken; the thief kept nothing but tears and a new name.",
"25 He blessed the dead with straight words; the living with kindly ones.",
"26 He told the Twelve, Miracles are bread; use them to feed, not to sell.",
"27 He warned them, If wonder maketh thee tall, kneel till thy height be harmless.",
"28 Snow fell again; the camp answered with song.",
"29 He taught them to stamp their feet to make warmth for the shy.",
"30 He closed the day with the Psalm of the Four Winds.",
"31 The night held them like a good story.",
"32 Stars drew close; silence stitched the tents.",
"33 And winter felt shorter by mercy’s measure.",
"34 The people lay down with their quarreling fled.",
"35 And Siipisiing dreamed of green.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-covenant-watchers-cedar-en",
        title: "Chapter 14",
        subTitle: "The Covenant of Watchers & Cedar of Remembrance",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 14,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-covenant-watchers-cedar-en",
        title: "Chapter 14",
        subTitle: "The Covenant of Watchers & Cedar of Remembrance",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-winter-many-healings-en",
        followingChapter: "yahawzhowaa-book-5-vision-yellow-vessel-en",
        content: [
"1 Yahawzhowaa called the camp to a council under a sky of hard blue.",
"2 He set a young cedar between two stones and said, Let there be Watchers of Peace.",
"3 Not men to lift spears, but men to lift eyes; not men to make laws, but men to remember vows.",
"4 He chose twelve from among many, of quiet temper and long ears.",
"5 He gave them staffs marked with notches for listening.",
"6 He said, Stand by quarrels before they grow teeth; stand by grief before it groweth fangs.",
"7 If a stranger’s shadow lingereth, invite it to fire; if a neighbour’s door closeth, knock with bread.",
"8 He taught the Watcher’s Chant:",
"[[poem:9 “I see for peace; I hear for peace;|10 My staff is mercy; my law is ease.”]]", 
"11 He set the cedar as Ahtik-ayaawaa — The Place Where the Heart Stands.",
"12 He bade children bring a stone from each lodge and build a low circle around it.",
"13 He said, These stones remember thy faces when thou forgettest thy promises.",
"14 Each family whispered a vow and laid its stone with open palm.",
"15 He told a parable: A village planted a gate and forgot the path; thieves laughed. Another planted a path and forgot the gate; wolves smiled. A third kept both, and slept well.",
"16 Be ye that third, saith He.",
"17 He appointed days when watchers should sit at the Quiet Hearth without speaking, that silence might do its craft.",
"18 He charged women to tap watchers upon the shoulder when pride began to hum; women nodded, for their ears are old.",
"19 He charged men to carry water to the women’s fires; men nodded, for their backs are young.",
"20 He placed upon the cedar a strip of birch inscribed: Remember mercy first.",
"21 He blessed the watchers with hands upon their eyes and ears.",
"22 He warned them, See not too much; hear not too much; let the people love privacy as they love breath.",
"23 Peace groweth in spaces where no one standeth to trample.",
"24 He set a little bell of bone to ring at dusk; when it sounded, grudges went to the Bear’s Seat by custom.",
"25 Quarrels grew shy of the bell.",
"26 He taught the Twelve, Your strength is to make others strong; your honour is to make others honoured.",
"27 Snow slid from the cedar in a white sigh; the people smiled.",
"28 They circled the tree singing low.",
"29 The wind moved once like a nod.",
"30 He said, When I am gone southward, let this cedar teach in my stead.",
"31 The Jes’sakkid touched the bark and felt it warm.",
"32 Children played quietly within the stones.",
"33 Mothers’ faces softened as loaves.",
"34 Fathers’ shoulders forgot to be shields and remembered to be roofs.",
"35 And the covenant held like green under snow.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-vision-yellow-vessel-en",
        title: "Chapter 15",
        subTitle: "The Medicine Man’s Vision & Yellow Vessel",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 15,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-vision-yellow-vessel-en",
        title: "Chapter 15",
        subTitle: "The Medicine Man’s Vision & Yellow Vessel",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 15,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-covenant-watchers-cedar-en",
        followingChapter: "yahawzhowaa-book-5-silence-binding-heart-en",
        content: [
"1 Among the Twelve was a man of the Midē´wiwin, keeper of herbs and of dreams, whose sight could reach beyond the days yet born.",
"2 He had listened to all the Master had spoken, and his heart was heavy with what his eyes had begun to see.",
"3 For when Yahawzhowaa spoke of the crooked one, of the upside-down crown, of the two rivers that stole, his spirit was stirred like a lake before a storm.",
"4 That night, he walked apart from the fire and knelt where the snow met the dark trunks.",
"5 His eyes opened, and he saw not the cedar above him but skies unrolled like hides painted with strange pictures.",
"6 He saw a day when the earth groaned beneath towers of metal, and the air burned with invisible nets.",
"7 He saw a people whose faces were pale from the glow of false lights, their hearts tethered by cords unseen.",
"8 And in the midst, he saw the sky blaze as if the sun itself tore open.",
"9 From that rift descended one who shone with borrowed fire, and the nations cried, Behold, He comes in glory!",
"10 But the medicine man felt in his bones: This is not my Master — this is the liar who gathers the heat of men’s souls to feed himself.",
"11 His spirit trembled, and he covered his face, for the visions came faster than his breathing.",
"12 He saw another coming — born not from the sky but from the womb, small, frail, wrapped in yellow as a child wrapped against the cold.",
"13 Light itself clung to this vessel, but the world looked past it.",
"14 He saw the same one grown, still clothed in yellow light, yet draped now in red as from the wine press.",
"15 And he saw men harvest this one’s light as they would gather sap, not knowing they drew life from the Son of Light Himself.",
"16 His heart ached, for the people laughed, mocked, and turned away, serving the crooked one.",
"17 He fell to his knees in the snow and called softly, Master, tell me — what is this I have seen?",
"18 Yahawzhowaa came to him quietly, laying a hand on his shoulder.",
"19 The Master said, You have seen true, my medicine man. The liar will return in the way the world expects Me — riding glory from the sky, to deceive and to collect the heat of the nations.",
"20 But I will be born again in a vessel of yellow light, for I am the Light of the World.",
"21 I will be draped in yellow in the beginning, and the prophet I spoke of — who shall come to declare Me — will tell the world that I will come in yellow.",
"22 Yet in the day of My revealing, I will be found in a vessel of blood, draped in red, the wine press of the Almighty’s work.",
"23 The yellow you see is My light; the red is My sacrifice. Both are true.",
"24 But in that time, the world will be the world of the liar. They will not want Me; they will not see Me; they will not respect Me; they will not listen.",
"25 They will harvest My light for their gain, not knowing what is to come, nor the judgment that follows.",
"26 The medicine man wept openly, but Yahawzhowaa drew him close and said, You are My Midē´wiwin, My healer, My holy one. The Great Spirit above looks upon you with great love.",
"27 And Yahawzhowaa Himself began to weep, for He saw the weight the vision had placed upon His friend.",
"28 Snowflakes clung to their hair like small stars, and the fire behind them flickered low, as if bowing to the moment.",
"29 The Master whispered, Hold this in your heart, but speak it only when the Spirit tells you. For some visions are seeds that must sleep until their season.",
"30 And they sat together in the cold, the sound of their weeping mixing with the wind, until the stars closed over them like a great blanket.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-silence-binding-heart-en",
        title: "Chapter 16",
        subTitle: "The Silence in Siipisiing & the Binding of the Heart",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 16,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-silence-binding-heart-en",
        title: "Chapter 16",
        subTitle: "The Silence in Siipisiing & the Binding of the Heart",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-vision-yellow-vessel-en",
        followingChapter: "yahawzhowaa-book-5-vision-rivers-plain-en",
        content: [
"1 And morning rose pale upon Siipisiing, and the smoke of the hearths walked softly among the turtle-hills.",
"2 The medicine man sat apart, as one that hath seen a far fire upon a winter ridge.",
"3 His hands were steady, yet his breath went forth as a man that counteth grief and hope by turns.",
"4 The Twelve looked oft upon him and durst not ask; for some visions are arrows that must cool before the wound be named.",
"5 Yahawzhowaa came nigh and set before him a bowl of warm broth, and said, Eat a little; for vessels that have held lightning must be filled again with bread.",
"6 He obeyed, and strength returned as a small bird returneth to a quiet branch.",
"7 Yahawzhowaa stood in the midst of the camp and lifted up His voice, saying, Behold, there is a silence that woundeth, and a silence that healeth; choose ye the second.",
"8 For when the heart is still in God, the stillness becometh a balm, and thought learneth to lay down its spear.",
"9 He taught them the binding of the heart: In the morning, thank before thou think; at noon, bless before thou judge; at night, sing before thou sleep.",
"10 And if thy mind run forward to days not yet born, bring it back by naming three mercies that already are.",
"11 A youth cried, Master, our brother hath seen hard things; how shall we bear that which he hath borne?",
"12 He answered, Bear it not; stand beside him while I bear it. For I am the Carrier of many winters.",
"13 The medicine man bowed his head, and the snow beneath him was warmed by tears that men were not ashamed to see.",
"14 Yahawzhowaa said unto him, Thou art my Midē´wiwin, my holy one; the Great Spirit beholdeth thee with love large as sky.",
"15 And He laid His hand upon his brow, and the weight within him shifted as a pack rightly set.",
"16 Then spake He to all: When a seer is shaken, let the people become his lodge: roof him with patience, wall him with quiet, door him with prayer.",
"17 He taught a low chant for the shaken:",
"[[poem:18 “Abba, hold the seeing eye;|Lay Thy palm where fears lie;|Make the drum within beat slow;|Teach the heavy heart to know.”]]",
"19 Mothers took up the chant over their babes; elders hummed it as they cut wood; and the hills consented.",
"20 Yahawzhowaa told a parable: A man carried a cinder from a great fire; it burned his hand till he learned to carry it in a clay cup. Then did he warm his neighbours and keep his fingers for work.",
"21 So bear ye visions — in clay of humility; for bare pride is quick to blister.",
"22 He appointed two to walk with the medicine man through the trees at even, to teach sorrow to breathe.",
"23 He appointed two to keep the hearth, that home be ready when tears return.",
"24 He appointed two to visit the far lodge, for grief loveth corners.",
"25 And He said, Let not the lonely be left to name the night by himself.",
"26 The medicine man rose and kissed His hand, saying, My Master, my Brother; Thy yoke is kind.",
"27 Children drew near without fear and set small cones in his lap for gifts; and he smiled as men smile when the thaw beginneth.",
"28 Yahawzhowaa spake softly of the yellow vessel and the wine-press red, that none mistake light for weakness nor sacrifice for defeat.",
"29 Yellow is my shining; red is my pouring; and love is the law of both, saith He.",
"30 He warned them, The liar loveth crowds and noise; I love circles and bread.",
"When the noise calleth, remember the bread.",
"31 He showed them the knot that remembereth with a thong of leather: once for thanks, twice for mercy, thrice for truth.",
"32 He bade them tie it at their belts, that hands be catechized as tongues.",
"33 The day lengthened as a bow drawn slow; their fear shortened as a shadow at noon.",
"34 Evening came without sharp corners; the camp breathed together as a single chest.",
"35 And the silence that healeth lay down with them, and watched till dawn.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-vision-rivers-plain-en",
        title: "Chapter 17",
        subTitle: "The Vision of the Two Rivers Made Plain",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 17,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-vision-rivers-plain-en",
        title: "Chapter 17",
        subTitle: "The Vision of the Two Rivers Made Plain",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-silence-binding-heart-en",
        followingChapter: "yahawzhowaa-book-5-hidden-drum-digging-en",
        content: [
"1 On the morrow Yahawzhowaa led them to a place where two streams crept under ice and found one another with a hidden kiss.",
"2 He brake the ice with His staff, and the waters lifted their voices as brothers long parted.",
"3 He said, Mark ye now the mystery of Two Rivers; for in the latter days the lie will lean upon truth till many call them one.",
"4 The upper river descendeth from the Mountain of Light, straight even in its bendings; the lower issueth from the marsh of self, crooked even in its straightness.",
"5 The upper giveth coolness to the tongue and courage to the heart; the lower flattereth the mouth and emptieth the marrow.",
"6 An elder asked, Master, how shall the simple discern, seeing both be wet and both be cold?",
"7 He answered, Taste and test.",
"8 Taste — if thy drinking maketh thee kinder to the least, thou hast drunk the Mountain; if it maketh thee loud toward the lowly, thou hast drunk the marsh.",
"9 Test — draw water to a widow’s pot; if it feed the fire, it is truth; if it smoke and smother, it is deceit.",
"10 A hunter said, What if the liar mingleth a little truth with much shadow?",
"11 Yahawzhowaa stooped and poured clean water into muddy, and the mud possessed it for a moment; then He poured muddy into clean, and all was lost.",
"12 So is it with souls: let truth correct thy small shadow; let not shadow swallow thy truth.",
"13 He taught them the trial of two cups: one of silence, one of service.",
"14 Drink silence each dawn — say nothing until thou hast blessed two;",
"15 Drink service each noon — do a hidden good and tell no man thereof.",
"16 If thy heart groweth wide by these, thou art in the straight river; if it narroweth and seeketh praise, thou art in the crooked.",
"17 He set a child upon a stone and bade him choose by sight; the child chose the clearer stream and laughed.",
"18 So keep a child in thy chest, saith He, and thou shalt choose well in dark waters.",
"19 He told a parable: A miller sat by two runnels; the first turned his wheel even in drought, the second leaped loud in flood and slept when bread was needed.",
"20 Men loved the leaper for a season and learned hunger; they honoured the steady and learned bread.",
"21 Then He spake of the latter day: The crooked stream shall wear my name and promise my sky; and the nations will wet their lips and call him sweet.",
"22 But his sweetness is a brine that stealeth thirst and leaveth the soul without song.",
"23 The medicine man bowed his head, for his vision remembered the glow of false glory and the cords that bound men’s eyes.",
"24 Yahawzhowaa laid hand upon him and said, Thou sawest truly; let not terror be thy teacher when love is willing.",
"25 He taught a river hymn to be sung at crossings:",
"[[poem:26 “High spring, hold me; low marsh, pass;|27 Make me kind, not keen for brass;|28 Turn my feet where widows eat;|29 Keep my name from market street.”]]",
"30 The elders took it on their lips till even the wind learned the refrain.",
"31 He set a stake between the streams and named it Gichi-nibi-bap — The Great Water Gate — and charged a watcher to stand there in every generation.",
"32 Ask all teachers whence they flow, saith He; let none pass that cannot feed the poor.",
"33 He blessed the place with cedar smoke and thanks.",
"34 The waters went on their way, each after its kind.",
"35 And the people understood more than they had feared, and feared less than they had imagined.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-hidden-drum-digging-en",
        title: "Chapter 18",
        subTitle: "The Parable of the Hidden Drum & the Digging of Truth",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 18,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-hidden-drum-digging-en",
        title: "Chapter 18",
        subTitle: "The Parable of the Hidden Drum & the Digging of Truth",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 18,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-vision-rivers-plain-en",
        followingChapter: "yahawzhowaa-book-5-ascent-canoes-sky-en",
        content: [
"1 When night had spread her robe, Yahawzhowaa sat by the wide fire, and sparks went upward as prayers with small wings.",
"2 He said, Hear the parable of the Hidden Drum.",
"3 There was in a valley a drum great and old; when it sounded, all the lodges beat as one heart.",
"4 But envy whispered, saying, “Let each keep his own beat”; and a stranger, smiling, hid the drum beneath earth and covered it with fair stones.",
"5 Seasons came and went; men made small drums each for himself; the valley grew full of rhythms that never met, and children forgot the dance that needeth many feet.",
"6 An old woman remembered and wept by night. A child heard the weeping, and his tears taught him to search where songs are buried.",
"7 He dug where the ground was most proud, and found the great drum sleeping under honour.",
"8 He struck it once — low and long — and hills answered, and dogs lifted their heads, and mothers put down their tasks for joy.",
"9 The people gathered, and envy fled the valley as smoke that findeth no roof.",
"10 Yahawzhowaa paused, and the fire spoke in His silence.",
"11 The drum is truth; the stranger is the liar; the fair stones are ceremonies without mercy and names without bread.",
"12 The old woman is memory; the child is courage; the digging is repentance; the sound is peace returning.",
"13 A man asked, Master, how shall we dig when the ground is honoured by fathers?",
"14 He answered, Honour thy fathers; yet if their stones have hidden the well, lift them with tears and sing while thou liftest.",
"15 For tears make heavy things gentle, and songs teach pride to walk without thunder.",
"16 He taught the Diggers’ Work: Question thy customs by widows; weigh thy glory by orphans; prove thy feasts by strangers; if any fail these, dig.",
"17 The Jes’sakkid brought forth the juniper staff, and Yahawzhowaa marked a circle in the snow where the great drum should stand in every generation.",
"18 They named it Ode’ Odewe’igan — The Heart’s Drum — and swore that if ever their beats grew many and lonely, they would dig together.",
"19 Yahawzhowaa sang a long verse to bind the vow:",
"[[poem:20 “Drum below, rise slow;|Stones be light where tears flow;|Gather feet from every door;|Teach our pride to beat no more.”]]",
"22 He called the children to strike the ground with small sticks, and the sound knit itself like reeds into a mat of rhythm.",
"23 Old men smiled as boys; old feuds became shy.",
"24 He laid His hand upon the medicine man’s breast and said, Thy drum is tender now; let it beat for the weak first.",
"25 He blessed the hands that would lift stones yet unlabeled, and the backs that would stoop where honour sits heavy.",
"26 He warned them, When the liar would silence thee, he will heap new stones fairer than the first; dig still.",
"27 When he flattereth thy tribe, ask for the stranger; when he magnifieth thy name, ask for the orphan; when he offereth sky, ask for bread.",
"28 A hush fell as snow refalling upon snow; and every man heard within him a place that needed digging.",
"29 The women nodded, for kitchens are schools of truth.",
"30 Yahawzhowaa broke bread and shared it thrice round, that no jealousy outlive the loaf.",
"31 The embers glowed like small gates into morning.",
"32 He said, When ye hear no drum, be the child; when ye see no child, be the old woman; when ye find many stones, be the digger.",
"33 They answered, We will dig, and we will dance when the sound returneth.",
"34 The stars bent low to listen, as elders in the doorway.",
"35 And hope made a warm roof above the camp.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-ascent-canoes-sky-en",
        title: "Chapter 19",
        subTitle: "The Ascent of Animikii-wajiw & the Canoes of the Sky",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 19,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-ascent-canoes-sky-en",
        title: "Chapter 19",
        subTitle: "The Ascent of Animikii-wajiw & the Canoes of the Sky",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 19,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-hidden-drum-digging-en",
        followingChapter: "yahawzhowaa-book-5-valley-nations-pillar-en",
        content: [
"1 After many days Yahawzhowaa said, Let us go again unto Animikii-wajiw, which is Thunder Mountain; for there is counsel prepared upon the height.",
"2 They camped at the base, and the snow there was like white cedar-bark torn fine by angels.",
"3 He took with Him the Jes’sakkid and two of the Twelve, and bade the rest keep prayer beneath.",
"4 The path was narrow and the air keen; their breath wrote psalms no man could read save God.",
"5 As they climbed, the light changed as if the day remembered something brighter.",
"6 At the crown of the mount, Yahawzhowaa knelt, and the wind folded its wings.",
"7 A stillness like deep water lay upon the stones; then the sky opened as a lodgeflap lifted by an unseen hand.",
"8 Canoes of the sky approached, bellies shining like the Megis shell when dawn kisseth Gichigami; their motion was paddling without paddlers, their sound as of bees in a cedar hollow.",
"9 A scent of rain and juniper filled the height, though winter held the land fast below.",
"10 A brightness stood over Him — fire that blessed and did not burn; it crowned His head and clothed His garments as river-light clothes rock.",
"11 Forms moved within the brightness, elders of law and prophecy; their speech was written lightning that a child could read.",
"12 The Jes’sakkid fell upon his face, but Yahawzhowaa touched him, saying, Fear not; thou art invited.",
"13 Voices as many waters spake to the inward ear: This is my beloved Son; hear ye Him.",
"14 He lifted both hands toward the four winds, and the canoes turned as obedient folk turn toward a chief.",
"15 He prayed for the people below, for the watchers to come, for the children unborn who would hear only by story.",
"16 The light widened and lay upon the mount as morning findeth every hollow.",
"17 He was shown mysteries of the unseen lodge — beings of light that keep house around men’s days, and paths between worlds that cross like trails upon the snow.",
"18 He saw the yellow vessel and the red robe again, and tears warmed the cold stone.",
"19 He saw the Two Rivers winding through an age of iron nets, and set His face like flint for love’s sake.",
"20 Then the canoes rose gentle as swans from a quiet bay; the last light lingered as a bead upon a hair, unwilling to depart.",
"21 They descended; and the people below had seen fires upon the summit and heard a humming as of hives hidden in rock.",
"22 When they beheld His face, it was as water that carrieth the sun; they bowed low and were not ashamed to weep.",
"23 He said, All creatures are vessels; all vessels are songs; keep thy song true and thy vessel clean.",
"24 Walk softly; for earth herself is a bearer of light.",
"25 He blessed bread and water, and both tasted of morning.",
"26 He taught them to name the place Ode’ Akiwenzid — Heart of the Elder — for counsel dwelleth there without noise.",
"27 Children received white stones from His hand; men received quiet; women received strength that singeth while it cooketh.",
"28 Night came down like a friend with a thick cloak.",
"29 He said to the Twelve, Speak little of shapes; speak much of mercy; for men will chase the sky and forget the widow.",
"30 The Jes’sakkid kept all these in his bundle with juniper scent, to be light for winters.",
"31 And the mountain kept their footprints as a psalm without words.",
"32 The camp slept under a roof of kind stars.",
"33 He that feared dreamed gently; he that doubted woke grateful.",
"34 In the dawn they saw the ridge blushing as if it remembered joy.",
"35 And they set their faces westward once more.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-5-valley-nations-pillar-en",
        title: "Chapter 20",
        subTitle: "The Valley Between Nations & the Pillar that Stood",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 20,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-5-valley-nations-pillar-en",
        title: "Chapter 20",
        subTitle: "The Valley Between Nations & the Pillar that Stood",
        parent: "yahawzhowaa-road-of-the-buffalo-en",
        order: 20,
        visible: true,
        previousChapter: "yahawzhowaa-book-5-ascent-canoes-sky-en",
        followingChapter: "",
        content: [
"1 As they journeyed, word ran like a wind that the Anishinaabe and the Dakota had set themselves in array within a narrow vale.",
"2 Spears were dressed, bows bent, drums beat like hastened hearts; women stood apart with water and cloth, for sorrow knoweth her task aforetime.",
"3 Yahawzhowaa went down alone between the ridges and stood where first blood would have fallen.",
"4 He raised not sword, for He carried none; He raised not shield, for His shield was light.",
"5 He cried with a voice that held the valley still, Children of one Maker, hold!",
"6 The lines rolled forward yet, for wrath hath a hunger that eateth its own reason.",
"7 Then He lifted His hands and called, Abba! and a pillar of light stood upon Him — neither burning nor blinding, but making true all faces.",
"8 The sound of the world fell away; the drum forgot itself; only His word abode.",
"9 He spake the chiefs’ names one by one — the names of milk and cradle and first laughter — and the men trembled as trees when a true wind passeth.",
"10 He recited griefs hidden under armour, and wounds closed as He uttered them; hot flesh cooled as iron laid in snow.",
"11 He stretched His right hand to the east and His left to the west, and weapons became as stones too honest for murder.",
"12 He called for a child; and a little one came, not afraid, and stood between His knees.",
"13 If ye strike this day, saith He, ye strike him who hath not yet chosen thy anger; if ye make peace, ye make him heir to fields untrampled.",
"14 The pillar widened till it lay soft upon both companies as morning upon grass.",
"15 Women passed with bread and water, and men received them as from God and forgot their boast.",
"16 A hawk circled once and cried as if proclaiming a treaty to the sky.",
"17 The chiefs drew near; He took their hands and wove them one into the other, and set the child’s hand upon both.",
"18 A voice as many waters spake to the inward man, This is my beloved Son; hear ye Him.",
"19 They cast their spears at His feet and broke arrowheads with their own heels.",
"20 He took one arrow, brake the point, and buried it in the midst; every man pressed earth upon it with his palm.",
"21 Swear not by thy wrath but by thy children; not by thy spear but by thy seed; by bread shared and wounds tended together, saith He.",
"22 The pillar ascended as incense; yet its quiet remained as a mantle none could see, all could feel.",
"23 They planted a cedar between their camps and named it Third Stone’s Tree, for a stone of each nation and one from the river lay at its foot.",
"24 He set watchers not with spear but with reed and song; their law was to listen more than to speak.",
"25 The valley took a new name, Miskwiaki- mikwendaam — Red Earth of Remembrance — for blood would sleep and covenant wake there.",
"26 Old men kissed youths not of their lodges; boys carried cedar to the common fire; girls braided grass for mats where strangers sat as kin.",
"27 He healed the lame from both sides, and they learned to walk toward one another first.",
"28 He sang the River of Peace; and they answered, Abba sh’lama b’gaw nibi — Father, peace within the water.",
"29 The sun came forth from a cloud with a meek face, as one that hath seen a marvel and desireth not to boast of it.",
"30 Yahawzhowaa said to the Twelve, Write this day upon thy bones; for when fear would command thee, let thy skeleton remember peace.",
"31 He charged the women, Teach the lullaby of covenant; for babes suck peace from milk that hath heard such songs.",
"32 He charged the men, Unstring thy bow at dusk henceforth; let thy hands forget the quickness of wrath and learn the swiftness of help.",
"33 He blessed both nations with one blessing: Grow gardens where thy camps had stood.",
"34 They answered Amen with tears that were not ashamed.",
"35 And all who saw knew it was of Him; for He spake, and it was so before their eyes.",
"36 At even, a feast rose from one fire; meat forgot its tribe and bread forgot its border.",
"37 Yahawzhowaa sat between the elders of both peoples, and the child slept with his head upon His knee.",
"38 He lifted His eyes toward the west and, in that look, set hope upon roads yet untaken.",
"39 The stars came forth as witnesses; the river bent and smiled.",
"40 Thus ended the wrath of that valley; and the land kept their footprints as a promise.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);


    res.send("Yahawzhowaa Added");
});


//module.exports = copper;