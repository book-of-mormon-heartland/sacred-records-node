import express from 'express';
export const yahawzhowaa = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


yahawzhowaa.get("/addYahawzhowaa", function (req, res) {
    let book = {};
    let chapter = {};

    book = {
        id: "yahawzhowaa-lakes-between-the-hills-en",
        title: "BOOK FOUR",
        subTitle: "The Lakes Between the Hills",
        image: "https://storage.googleapis.com/sacred-records/books/yahawzhowaa/the-copper-record-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/miskwaabik/yahazhowaa-book-four-171x214.jpg",
        thumbnailTitle: "Lakes Between the Hills",
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
    //addBook(book);
    
    chapter = {
        id: "yahawzhowaa-book-4-thunder-mountain-en",
        title: "Chapter 1",
        subTitle: "Thunder Mountain",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    chapter = {
        id: "yahawzhowaa-book-4-thunder-mountain-en",
        title: "Chapter 1",
        subTitle: "Thunder Mountain",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-4-vessels-of-light-en",
        content: [
"1 And it came to pass, that Yahawzhowaa led the Twelve and the company unto Animikii-wajiw, and they pitched their camp at the foot thereof.",
"2 The air was clear after rain, and the cedar smelt sweet, and the rock shone as if newly washed by the hand of heaven.",
"3 And He said unto them, Abide ye here with prayer; for I go up to the height to commune with my Father.",
"4 With Him He took Giiwedin-giizhig, the Jes’sakkid, the prophet of the North Sky, and said, Thou shalt behold and testify; for a sign is appointed in this place.",
"5 They ascended by a path known to the elders, and the wind spake low like a drum beneath the earth.",
"6 When they were come to the crown of the mount, the day drew nigh unto even, and the west was as embers under ash.",
"7 And Yahawzhowaa prayed, and the prophet watched; and there was silence as of a held breath upon the whole land.",
"8 Behold, lights moved in the high places of the firmament, even as sparks that leap from a great fire, yet these fell not, neither were they extinguished.",
"9 And the prophet said, My bones tremble, for I hear as of ten thousand bees, and as of drums hidden in the deep.",
"10 Then drew near canoes of the sky, whose shapes were as the Megis shell, white and shining; their bellies glowed as the inside of a clam when it catcheth the sun upon water.",
"11 They moved without paddlers, yet as by the stroke of mighty unseen hands; and the air had the scent of rain and cedar smoke.",
"12 One stood above them like the morning star, and two kept watch on either side as guardians of a king.",
"13 And the prophet fell upon his face; but Yahawzhowaa touched him, saying, Fear not; for my Father openeth a door that thou mayest look and remember.",
"14 The canoes of the sky made no shadow upon the mountain, but cast a brightness downward as a path.",
"15 Yahawzhowaa stood in that brightness; and His raiment was white as froth upon a river-stone, and His face shone as the rising over Gichigami.",
"16 A voice as many waters spake not to the ears but to the inward man: This is my beloved Son; hear ye Him.",
"17 And the prophet heard it, and his heart became as a drum in a glad dance.",
"18 Then were seen within the brightness two elders of glory, having the countenance of law and of prophecy, speaking with Yahawzhowaa of a journey yet to be fulfilled.",
"19 Their words were as lightning writ slow, that even a child might read their fire.",
"20 Yahawzhowaa lifted His hands as one that blesseth the four winds; and the canoes of the sky turned as if obeying.",
"21 A fire came down, not to burn, but to crown; and it rested over His head as the northern lights rest upon winter skies.",
"22 The prophet said, Master, my tongue faileth; what shall I name these wonders?",
"23 He answered, Name them as thy mothers would: canoes of the sky, Megis of the heavens, signs that the Giver is near.",
"24 And the prophet wept for joy, for the names were old and the marvel new.",
"25 After this, the canoes rose as swans at dawn, and stood afar off like stars that tarry for a last look.",
"26 Yahawzhowaa bowed His head, and the brightness drew inward as a breath returneth to the breast.",
"27 The wind came again, and the grasses remembered how to sing.",
"28 Then said Yahawzhowaa unto the prophet, Thou hast seen; keep the saying till the telling be ripe. We descend to our brethren who watch beneath.",
"29 They came down by the path, and the people at the base beheld lights as of fire passing through cloud, and heard the humming as of hidden hives; and great fear and great joy fell upon them.",
"30 And when Yahawzhowaa was come to the camp, His face yet shone; and they fell upon their faces, and some stretched forth their hands and dared not touch.",
"31 He said, Be of good cheer; for the Father hath shown thee that the world is larger than thine eyes, and nearer than thy breath.",
"32 He brake bread, and the bread was sweet; He blessed water, and it was as cold song upon their tongues.",
"33 The children slept without fear, for the mountain had become a friend unto them.",
"34 The stars kept watch; and the prophet lay wakeful, guarding in his heart all that he had seen.",
"35 Thus began the signs of Animikiiwajiw in those days.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-vessels-of-light-en",
        title: "Chapter 2",
        subTitle: "Vessels of Light",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 2,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-vessels-of-light-en",
        title: "Chapter 2",
        subTitle: "Vessels of Light",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 2,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-thunder-mountain-en",
        followingChapter: "yahawzhowaa-book-4-megis-of-the-heavens-en",
        content: [
"1 In the morning Yahawzhowaa gathered the Twelve and the people and sat upon a flat stone, and the light of the east was upon His brow.",
"2 He said, Hear now the mystery of light: that ye are vessels of light, and the light is older than the mountains, yet young in every child.",
"3 No two vessels are alike, yet all are wrought by One Hand; the bird is a vessel, and the bee is a vessel; the maple and the cedar, the deer and the man — all bear the flame after their kind.",
"4 Say not, My vessel is small; for the smallest lamp lighteth a lodge. Say rather, My lamp is His, and I will tend it.",
"5 And He taught them a poem in the old manner: Light within the leaf / light within the lung; / light upon the path / light upon the tongue.",
"6 If the heart be drum, / and truth the skin thereof, / love is the hand that striketh, / and joy the sound it maketh.",
"7 Then He opened a parable: A certain potter had many forms: a bowl for water, a cup for oil, a lamp for night. The child said, Make me as the lamp; but the potter said, Be as I choose, that thy purpose be perfect.",
"8 In time the bowl kept life, the cup fed flame, and the lamp held dawn for the fearful. Each rejoiced to be itself, and the house lacked nothing.",
"9 He said, So is it with you: envy not the shape of thy brother; fulfil the shining of thine own making.",
"10 And He spake of death, saying, When this vessel is shed, the light is not quenched; it passeth as a traveller passeth from lodge to lodge, greeting the unseen kin.",
"11 Open thine ear within thee: there is a world about thee thou beholdest not; and in that world stand beings of light, even now among you, as elders who keep a quiet watch.",
"12 The people trembled, and hope blossomed like fireweed after flame.",
"13 Then Yahawzhowaa lifted both hands, and the wind stilled; even the small leaves ceased their whispering.",
"14 Thy heart is a drum, saith He; keep it tuned with mercy. Strike it with gratitude; let its beat be peace.",
"15 If thy drum grow slack with fear, come unto me, and I will draw it tight with truth.",
"16 A mother cried, My child is gone unto the ancestors; is he lost in that unseen land?",
"17 He answered, Nay, but nearer than a whisper. For the Father is God of the living; and they that have passed are as torches borne before thee.",
"18 Call them not back with wailing, but walk the path they light; and ye shall meet in the meadow of the Eternal Morning.",
"19 Then sang He a song long and low, half in the tongue of the people; and it was as a river that remembereth every stone:",
"20 “Nura b’kirbi (Light within me),",
"21 Zoongide’ ninda-ode’ (Make brave my heart),",
"22 Abba, sheken b’gawiin (Father, dwell within),",
"23 B’mikinaak-aki ningi-bimose (In Turtle-land I shall walk).”",
"24 The elders wept softly, and the children swayed as reeds in a kindly wind.",
"25 And He turned to the prophet and said, Bear witness: that which came down as Megis in the night is kin to the light in every breast; fear not the larger lodge of the Maker.",
"26 The prophet arose and told in measure what he saw; and the people marvelled, yet were not confounded, for the names were their own and the glory was the Father’s.",
"27 Yahawzhowaa stretched forth His hands toward the four winds, blessing all creatures: the hawk that hunteth high, the beaver that buildeth low, the berry that ripeneth under kiss of sun.",
"28 He healed that day many that were sick, and some were set free from terrors that had dwelt in their dreams.",
"29 And He charged them, saying, Walk softly upon the earth, for she also beareth light.",
"30 Feed thy flame with truth, thy neighbour with bread, thy enemy with prayer.",
"31 If thou canst not yet love him, keep him in the light till love be born.",
"32 The people answered, We will keep the light, O Teacher.",
"33 Then He smiled, and the mountain seemed to smile with Him.",
"34 They ate together, and the meal was as sweetness after fasting.",
"35 And the camp rested under the mercy of the height.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);
    
    chapter = {
        id: "yahawzhowaa-book-4-megis-of-the-heavens-en",
        title: "Chapter 3",
        subTitle: "Megis of the Heavens",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 3,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-megis-of-the-heavens-en",
        title: "Chapter 3",
        subTitle: "Megis of the Heavens",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 3,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-vessels-of-light-en",
        followingChapter: "yahawzhowaa-book-4-giver-of-rivers-en",
        content: [
"1 After these things Yahawzhowaa tarried three days at the foot of the mountain, teaching by turns poem and parable and song; and the fame thereof went before Him like light upon water.",
"2 Runners came from villages round about, desiring to hear of the Megis of the heavens; and He spake unto them as a father unto children, hiding nothing, yet speaking in the names of their mothers.",
"3 He said, Think not that wonder is to amaze only; it is to awaken. If thou wakest not to mercy, thou hast slept through the miracle.",
"4 Then He taught the Twelve apart, saying, Ye shall be lamps, not lightning; endure; burn steady; be kind.",
"5 Let thy counsel be cedar smoke — sweet, rising, and without sting.",
"6 Let thy deeds be sun-grown food unto the poor.",
"7 And He sent them two by two among the tents, that none be left uncomforted.",
"8 That night a wind came from the west, and the northern lights walked softly as herds upon the sky; and many dreamed good dreams.",
"9 In the dawn He said, The road calleth; we go toward Miskwaagamiiwi-zaaga’igan and, in the latter days, unto Siipisiing.",
"10 The people answered, We will go with thee while strength remaineth, and when our strength faileth we will keep the fire for them that follow.",
"11 He blessed the elders and the little ones that would remain; He kissed a child upon the brow, and the child laughed, as one kissed by the sun.",
"12 They took up their bundles; the drums sounded once, not as for war, but as for journey.",
"13 Yahawzhowaa looked back upon Animikii-wajiw, and the height kept their vow in silence.",
"14 And they went forth.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-giver-of-rivers-en",
        title: "Chapter 4",
        subTitle: "Giver of Rivers",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 4,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-giver-of-rivers-en",
        title: "Chapter 4",
        subTitle: "Giver of Rivers",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 4,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-megis-of-the-heavens-en",
        followingChapter: "yahawzhowaa-book-4-children-of-one-maker-en",
        content: [
"1 As they journeyed westward, they came unto a high valley where two peoples kept watch upon one river, and the river grew troubled between them.",
"2 These were of the Anishinaabe on the one hand, and of the Dakota on the other; and long had there been words between them, sharp as flint, and memories heavy as stones.",
"3 Runners, seeing Yahawzhowaa’s company, spake one to another, saying, Behold, the teacher of the lakes draweth nigh; let the councils meet.",
"4 And they met upon a plain of short grass near a bend in the water, and the elders sat, and the young men stood with spears bound in leather.",
"5 Yahawzhowaa greeted both sides as brethren, laying tobacco upon the earth, and spake of the Father who is the Giver of Rivers.",
"6 Some were softened, and some were hardened; for grief hath many seasons.",
"7 He told a parable: Two brothers shared a canoe; the one said, The leak is on thy side, not on mine; and he folded his arms. The river made no covenant with his folly.",
"8 There was murmuring, and certain hot of spirit cried, Enough of words; the debt of blood standeth!",
"9 Yahawzhowaa said, Debt of blood is a thirst that drinketh its own children.",
"10 But wrath rose like a wind; and the counsel broke; and the companies drew apart to their own hills, purposing battle at the next dawn.",
"11 The women wept; the elders covered their faces; and the children clung to their mothers’ belts.",
"12 Yahawzhowaa withdrew to pray; and the Twelve watched.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-children-of-one-maker-en",
        title: "Chapter 5",
        subTitle: "Children of One Maker",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 5,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-children-of-one-maker-en",
        title: "Chapter 5",
        subTitle: "Children of One Maker",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 5,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-giver-of-rivers-en",
        followingChapter: "yahawzhowaa-book-4-parable-of-two-drums-en",
        content: [
"1 Before the light, the men of the Anishinaabe and the men of the Dakota set themselves in order: shields painted, spears dressed, bows strung; and the drum beat as a heart that knoweth only haste.",
"2 Yahawzhowaa came forth alone between the ridges, and stood in the hollow where the river bended like a bow.",
"3 The mist lay upon the grass as a garment; the birds were silent, and even the water held its tongue.",
"4 He lifted His hands and cried with a great voice, Peace, children of one Maker!",
"5 But the lines advanced, for wrath hath a hunger that heedeth not bread.",
"6 Then did Yahawzhowaa step into the very midst, where the first spears would have met; and the Twelve cried out; and the women lifted their hands to heaven.",
"7 He said, Abba! and a pillar of light descended and stood upon Him, not burning, neither blinding, but making all things plain.",
"8 The sound of the world fell away; the drum was as though it had never been; only His voice remained.",
"9 He spake the names of the chiefs of both sides, one by one, with the names wherewith their mothers had called them; and the spears hung in the air as if the earth herself had taken hold.",
"10 He told the secret grief of each, not to shame but to heal; and wounds in the flesh were knit even as He spake, and old scars cooled as though washed in first snow.",
"11 He stretched forth His hands to the east and to the west; and the weapons became as stones too heavy for wrath to lift.",
"12 The young men trembled, for their arms were as water; and their eyes were fountains.",
"13 Yahawzhowaa cried, Whom seek ye to kill? Thine own future? Thy children’s laughter? Thy father’s prayer?",
"14 He pointed to the river and said, Behold thy mother’s milk, which neither tribe made; will ye redden the breast that fed you both?",
"15 Then He called for the elders of both peoples, and set them on either side of Him, and made a little child stand between His knees.",
"16 If ye strike, said He, ye strike him who hath not yet chosen thy anger. If ye make peace, ye make him heir to fields untrampled.",
"17 The pillar of light grew gentle and wide, and lay upon the companies as morning upon grass.",
"18 Some fell upon their faces; some cast away their spears; some lifted up hands that had long learned only to take, and now learned to bless.",
"19 Yahawzhowaa bade the women come; and they passed among the ranks with water and with bread; and the men received them as from the hand of the Giver.",
"20 Then Yahawzhowaa sang a song of the River of Peace, and the elders of both nations answered the refrain; and the hills remembered their first day.",
"21 The pillar drew upward as incense; but its brightness lingered, as dew lingereth in shadow.",
"22 He said, Ye have seen that this power is of my Father; for I called, and He answered in the sight of all.",
"23 Swear now not by thy anger, but by thy children; not by thy spear, but by thy seed.",
"24 The chiefs rose and laid down their weapons before Him, as men lay down sickness when health hath come.",
"25 He took the hands of the two chiefs and placed them one in the other, and set the child’s hand atop theirs.",
"26 The people shouted as at the first harvest; and the river moved again, for its fear was past.",
"27 He commanded that the wounded of both sides be tended together; and He Himself went among them, binding with His fingers that which hatred had torn.",
"28 Many healings were wrought; and a great stillness came after weeping.",
"29 The men gathered wood not for burning of lodges but for one fire in the midst; and the night knew a feast where a field had been measured for graves.",
"30 And all knew that the miracle was His; for He had spoken and it came to pass before their eyes.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-parable-of-two-drums-en",
        title: "Chapter 6",
        subTitle: "Parable of Two Drums",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 6,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-parable-of-two-drums-en",
        title: "Chapter 6",
        subTitle: "Parable of Two Drums",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 6,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-children-of-one-maker-en",
        followingChapter: "yahawzhowaa-book-4-light-in-vessels-en",
        content: [
"1 When the feast was ended, Yahawzhowaa sat between the elders of the Anishinaabe and the elders of the Dakota; and the child slept with his head upon His knee.",
"2 He said, Hear now a parable of two drums.",
"3 There were two drums in one village: the drum of war and the drum of council. The first was loud and swift; the second was slow and sure. In the years of folly the war-drum spoke first, and men were swift and foolish. In the years of wisdom the council-drum spoke first, and men were slow and safe.",
"4 Choose ye henceforth which drum shall begin thy mornings.",
"5 The elders bowed their heads; and the young men bound their pride as one bindeth a wound to make it heal.",
"6 Then Yahawzhowaa taught the order of light in the vessel, saying, Truth for thy wick, humility for thy oil, mercy for thy flame; thus burn, and thy house shall not be darkened.",
"7 He bade them plant a cedar halfway between the two villages, for a sign that the river had two hands and one heart.",
"8 He appointed watchers of both nations to keep the tree by turns; and the watchers swore by the life of their children.",
"9 He blessed the bread and the meat and the wild rice; and the taste thereof was as the sweetness after long bitterness.",
"10 The women came near and said, We feared to bear sons into a world of spears; now we will bear them into a world of drums of council.",
"11 He answered, Blessed are ye that make tomorrow.",
"12 Toward midnight He went apart to pray; and Giiwedin-giizhig followed afar and beheld, for a little space, that same soft light which had crowned Him upon the mountain.",
"13 In the morning He taught a song of covenant that all might remember: ",
"14 “Abba, sh’lama b’gaw nibi (Father, peace within the water),",
"15 Zoongide’ b’gaw ode’ (Bravery within the heart),",
"16 Ehadi anachnu (We are one),",
"17 Ad olam (Unto the age).”",
"18 The two nations sang as one voice; and children learned the refrain as they learned their own names.",
"19 Messengers were sent to tell other villages what the Father had wrought; and fear departed from the paths as smoke departeth when the wind ariseth.",
"20 Thereafter Yahawzhowaa spake a little to the Twelve of things to come, and of Siipisiing yet far; and He smiled as one that seeth home though many days be between.",
"21 He laid His hand upon the planted cedar, and said, Grow straight, little elder; bind the winds for thy children.",
"22 He blessed the chiefs, and the women, and the boys that had almost become men, and the girls whose songs would be milk for their children’s joy.",
"23 The river glittered as a necklace newwashed; and loons called as heralds of peace.",
"24 The men took up their spears — not for battle, but to carry meat and build lodges; and none was ashamed to learn anew.",
"25 Yahawzhowaa turned His face again toward the west; and many went with Him a day’s journey to lay their thanks upon the road.",
"26 When they could go no farther, they stood long and waved as children at a father; and the Father of spirits looked kindly upon them from the quiet sky.",
"27 The prophet kept the record in his bundle, with a piece of bark from Thunder Mountain and a sprig from the cedar of the covenant.",
"28 The Twelve walked softly; for they had seen wrath laid to rest by a pillar of light and a child’s hand.",
"29 And the land itself seemed to breathe easier, as a man whose band is loosened.",
"30 Thus were the days of war ended in that valley, and the song of peace began to learn the mouths of men.",
"31 And Yahawzhowaa said to the company, We have done the two things appointed unto this book; now keep them in thy heart as two stones of remembrance.",
"32 One: that the canoes of the sky bowed to the Father, and the mountain bore witness.",
"33 Two: that the pillar of light stood between brethren, and the river learned again to be a mother.",
"34 He looked upon each of the Twelve, and upon the women that laboured among them, and upon the children that would become tomorrow; and He loved them.",
"35 And He made ready to speak further mysteries when the time should beckon.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-light-in-vessels-en",
        title: "Chapter 7",
        subTitle: "The Light in the Vessels",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 7,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-light-in-vessels-en",
        title: "Chapter 7",
        subTitle: "The Light in the Vessels",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 7,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-parable-of-two-drums-en",
        followingChapter: "yahawzhowaa-book-4-two-lodges-and-wind-en",
        content: [
"1 And it came to pass that Yahawzhowaa tarried yet in the camp at the foot of Animikii-wajiw, and the people gathered unto Him, men and women and children from many clans.",
"2 And He sat beneath a cedar whose branches were spread abroad like the covering of the sky.",
"3 The wind moved gently through the needles, and the scent thereof was as healing unto the soul.",
"4 And Yahawzhowaa lifted up His voice, saying, Behold the vessel which the Creator hath fashioned for each soul.",
"5 For as no two bowls of clay are alike, so no two bodies are alike; yet each holdeth the light that cometh from above.",
"6 And the light is the life of the soul; it is the power by which ye move, and speak, and love.",
"7 Without light, the vessel is but dust; yet with light, the vessel becometh as the lodge that holdeth the sacred fire.",
"8 Consider the eagle that rideth upon the wind: is not the light in him also?",
"9 Yea, and the fish in the waters, and the deer in the forest, and the bee among the flowers — each is a vessel, and each containeth the same fire from the same sun.",
"10 For the sun is a likeness of the Father in Heaven, sending forth His warmth and His brightness unto all creation.",
"11 And when a man setteth his heart to righteousness, the light within him is made great; it shineth through his words, and through his deeds, and through the very touch of his hands.",
"12 But if a man setteth his heart to wickedness, the vessel becometh as one shut up in darkness, and the light therein groweth dim.",
"13 Therefore I say unto you, guard well the light that is given unto thee, and feed it with all things pure.",
"14 For even as ye keep a small fire alive with dry wood and with care, so must ye keep the light of thy vessel alive with truth, mercy, and thanksgiving.",
"15 The heart is as a small drum within thee, keeping the rhythm of thy days.",
"16 When the drum beateth in joy, thy whole being is in harmony; but when the beat faileth, all within thee stumbleth.",
"17 Therefore, keep thy heart pure, for out of it cometh the song that guideth thy path.",
"18 And know this also: the world ye see is not all that is.",
"19 For there is an unseen world round about you, wherein dwell beings of light, even now among us.",
"20 They stand beside the trees, they walk upon the waters, and they rejoice when the light in thy vessel is bright.",
"21 Some are as brethren who have gone before, and some are as messengers from the Most High.",
"22 And when thy vessel falleth in death, the light within thee shall be loosed, to return unto the place from whence it came.",
"23 But if thy light be bound in darkness, it wandereth without rest.",
"24 Therefore, be children of the light, and let thy vessels shine as the stars above the lakes.",
"25 For the time cometh when the Creator shall gather all lights together, and they shall be one great fire.",
"26 And the people marvelled at His words, for they were as water to the thirsty soul.",
"27 And they spake one to another, saying, Surely this man is sent from the Great Spirit.",
"28 And the Midē´wiwin priests that He had called in former days kept these sayings in their hearts.",
"29 And He taught them yet many other things that day, which are not all written here.",
"30 But the people departed, each to his lodge, with the light of joy in their eyes.",
"31 And Yahawzhowaa prayed over the camp, that every vessel might be kept from smoke and soot.",
"32 He said, If thy neighbour stumbleth, set thy lamp in his window until he find his door.",
"33 If thou findest a stranger in night, give him thy wick for a little space, and ye shall both see the way.",
"34 A youth cried, Master, I am small. And He answered, Small lamps have guided many boats to shore.",
"35 Be as the firefly — little in body, mighty in night.",
"36 Then He blessed the watchers, that their eyes fail not; and the mothers, that their patience be bread unto their houses.",
"37 He laid His hand upon the cedar and said, Grow tall, little elder; be roof to the birds and sermon to the proud.",
"38 The Twelve kept silence, for they perceived that the unseen world stood round about as a council of light.",
"39 The people sung softly, and their song was as dew upon dawn.",
"40 Thus was the doctrine of the vessels established among them.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-two-lodges-and-wind-en",
        title: "Chapter 8",
        subTitle: "The Parable of the Two Lodges and the Long Wind",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 8,
        visible: true
    }
        addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-two-lodges-and-wind-en",
        title: "Chapter 8",
        subTitle: "The Parable of the Two Lodges and the Long Wind",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 8,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-light-in-vessels-en",
        followingChapter: "yahawzhowaa-book-4-psalm-four-winds-en",
        content: [
"1 And it came to pass that Yahawzhowaa sat in the shade toward the heat of the day, and the people drew nigh to hear.",
"2 He lifted His voice and spake a parable: There were two lodges upon one rise: the first was tight-bound, the second was fairseeming but slack of cord.",
"3 A long wind arose from the west and proved every knot; the tight chords sang and held, but the slack chords flattered and failed; and the people that trusted a pretty rope slept in rain.",
"4 Then came a woman wise in the old way, and she taught them the knot that remembereth; and the second lodge was saved in the next storm.",
"5 And He said, This is the meaning: bind thy life with truth; for beauty without binding is a garment in the gale.",
"6 Let counsel be the knot, and humility the cord, and mercy the skin of thy lodge; so shalt thou not fear the long wind when it cometh.",
"7 A man asked, Master, how know we when our chords grow slack?",
"8 He answered, When thy patience frayeth first, thy binding is failing; when thy gratitude slippeth, retie thy soul.",
"9 Then Yahawzhowaa taught them to test the knots: Fast one day for thanks, forgive one enemy before sleep, bless one that cannot repay; if thy lodge be at peace after, thy knot is true.",
"10 The elders marvelled, saying, He maketh a craft of peace as others of war.",
"11 And He sang a work-song for the cords:",
"12 “Kesher emet, chazek — (Knot of truth, be strong),",
"13 Aaniin, nindayaa — (Behold, I am here),",
"14 Sh’lama bo’i — (Peace, enter),",
"15 Zoongide’ ode’ — (Make brave the heart).”",
"16 They beat the rhythm on rim and staff till the little ones learned the tying by the tune.",
"17 After these things came two men striving about a landing, each claiming the old right.",
"18 Yahawzhowaa drew a line with his staff and said, Make ye a third place between, and let it be for guests; for a river is shamed that two sons fight upon her hands.",
"19 The men bowed, and the quarrel was ended.",
"20 He healed then a girl who feared the thunder since her father died on the water; and when the next rumble spoke, she laughed and clapped, saying, Animikii singeth for us.",
"21 Yahawzhowaa smiled and said, Fear turned Singer is a strong ally.",
"22 Toward even He spake a poem: Hold fast where mercy bindeth / Loose quick where pride hath tied; / The Long Wind proveth lodges / The faithful cords abide.",
"23 He blessed the fishers and the berry gatherers, and the hands that grind the corn.",
"24 He taught the Twelve apart, saying, Be ye knot-makers among men; tie no man to your will, but to the will of the Father.",
"25 That night the wind indeed arose; and the camp slept unafraid.",
"26 In the morning they found one cord loosened on a stranger’s tent; and many hands made it sure.",
"27 Yahawzhowaa said, So do with a brother’s fault.",
"28 The prophet wrote the parable upon a strip of birch, to be hung in the council lodge.",
"29 A loon called thrice, and they took it for an amen.",
"30 The day closed with thanksgiving.",
"31 And the story of the Two Lodges became a teaching among the rivers.",
"32 Children tied practice knots upon reeds, and mothers blessed them.",
"33 Travellers, hearing, slept gladly where the long wind wanders.",
"34 The hill kept their promise better than their boasting.",
"35 And peace tarried in that place.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-psalm-four-winds-en",
        title: "Chapter 9",
        subTitle: "The Psalm of the Four Winds",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 9,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-psalm-four-winds-en",
        title: "Chapter 9",
        subTitle: "The Psalm of the Four Winds",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 9,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-two-lodges-and-wind-en",
        followingChapter: "yahawzhowaa-book-4-parable-borrowed-ember-en",
        content: [
"1 On the next day Yahawzhowaa said, I will sing you a psalm; learn it as a road.",
"2 He stood where the path opened to the lake, and the people set themselves in a ring.",
"3 And He sang with long measure, the elders answering, the children repeating the small lines:",
"4 To the East I lift my dawn — Abba ori (Father my light);",
"5 Brush my eyes with morning truth; awaken me to kindness.",
"6 To the South I bare my hands — Abba chayyai (Father my life);",
"7 Warm my courage; make my heart a little drum that keepeth peace.",
"8 To the West I turn my scars — Abba rofei (Father healer);",
"9 Wash my yesterdays; let memory be honey not poison.",
"10 To the North I set my face — Abba moreh (Father teacher);",
"11 Give me wisdom for the snow; keep my word like iron that serveth love.",
"12 Four winds, bear one Name; one Name fold four winds.",
"13 Let the reed not spear; let the flint be hearth.",
"14 Make my steps a soft fire on the earth.",
"15 Let the widow’s lamp borrow from my flame;",
"16 Let the orphan’s bowl find me before night.",
"17 You stars, keep watch; you pines, remember me;",
"18 You waters, carry my reflection to the Father.",
"19 Abba, sh’lama (Father, peace); Abba, or (Father, light);",
"20 Teach my breath to speak Thy silent goodness.",
"21 When I am broken, be my string;",
"22 When I am proud, be my snow.",
"23 When I am weary, be my canoe;",
"24 When I am lost, be my shore.",
"25 Gather our nations like driftwood to one fire;",
"26 Let the drum be council, not war.",
"27 Let the child sleep unafraid;",
"28 Let the elder finish his story.",
"29 Send us to Siipisiing by straight mercy;",
"30 Seal our path with morning songs.",
"31 The people wept and smiled in one breath; for the psalm fitted their need like moccasin to foot.",
"32 Yahawzhowaa taught them the refrain thrice till even the shyest lips were brave.",
"33 He said, Sing it at crossings, and the waters shall be gentle.",
"34 And a wind out of the east rose softly, as if to carry the last line home.",
"35 That night the psalm walked the camp like a watchman.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-parable-borrowed-ember-en",
        title: "Chapter 10",
        subTitle: "Parable of Borrowed Ember",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 10,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-parable-borrowed-ember-en",
        title: "Chapter 10",
        subTitle: "Parable of Borrowed Ember",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 10,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-psalm-four-winds-en",
        followingChapter: "yahawzhowaa-book-4-unseen-lodge-en",
        content: [
"1 After two days’ rest they journeyed and came to a village where the winter had bitten hard the last year, and hearts were spare of hope.",
"2 Yahawzhowaa sat by a low fire whose embers were few, and many gathered round.",
"3 He spake a parable: A poor man kept one ember through a cruel night. At dawn his neighbour came, saying, “Lend me fire.”", 
"4 The poor man feared to lose his one ember; yet he placed it on a shard and blew upon it, and gave half his heat away.",
"5 Both houses kindled; and when the poor man looked again, behold, the ember was greater than before, for the breath of kindness had multiplied it.",
"6 And He said, So is the kingdom: shared light increaseth; hoarded light dieth.",
"7 A widow asked, Master, what if my ember be ash?",
"8 He answered, Bring me thy ash; the Father loveth to remember fire.",
"9 He touched her hearth; the ash leaped with small blue tongues; and she cried for joy.",
"10 Then He taught them a craft: Keep a coal in cedar’s hollow, carry it at thy belt; thus mercy walketh with thee.",
"11 He healed a man whose courage had failed since his brother fell upon ice; and the man stood straight as pine.",
"12 Yahawzhowaa sang a small chant to keep the parable in their mouths:",
"13 “Noten or — (I give light),",
"14 Lo echsar — (I shall not lack),",
"15 N’fshi tizmach — (My soul shall grow).”",
"16 The children carried coals to elder lodges with care, and laughter went before them.",
"17 A proud hunter said, I need no man’s ember.",
"18 Yahawzhowaa answered, Then be a giver; pride cannot outgive love.",
"19 And the hunter brought dry wood for ten homes and was healed of himself.",
"20 Near even a squall blew in from the lake; fear rose like geese from reeds.",
"21 Yahawzhowaa stood and faced the water; He lifted His hand, and the squall laid itself like a dog that knoweth its master.",
"22 All saw it and knew the Father had favoured them.",
"23 He said, Write this upon thy door: “My ember is for two.”",
"24 A girl traced the words with berry juice; her mother kissed the mark.",
"25 The prophet bound the tale in his bundle with cedar thread.",
"26 And they set out on the morrow with many small fires burning in many small hearts.",
"27 Thus the village learned abundance.",
"28 And the road ahead seemed shorter.",
"29 For gratitude is a swift shoe.",
"30 Yahawzhowaa blessed their steps.",
"31 And the sky kept clear.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-unseen-lodge-en",
        title: "Chapter 11",
        subTitle: "Discourse of the Unseen Lodge",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 11,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-unseen-lodge-en",
        title: "Chapter 11",
        subTitle: "Discourse of the Unseen Lodge",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 11,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-parable-borrowed-ember-en",
        followingChapter: "yahawzhowaa-book-4-covenant-of-cedar-en",
        content: [
"1 On the seventh day from Thunder Mountain, Yahawzhowaa bade them sit in a grove of birch beside a bright stream.",
"2 He said, Ye have eyes for bark and river, but there is a lodge ye see not, wherein the Father keepeth counsel.",
"3 In that unseen world stand beings of light, not fashioned of flesh as ye are, yet kin to your breath; some are elders gone before, some are messengers on errands of peace.",
"4 They rejoice when ye forgive; they stand idle when ye hate; they labour when ye hope; they weep when ye curse thine own heart.",
"5 Call them not gods; for there is One; but call them brethren that serve.",
"6 Then He opened their understanding by a parable: A child thought himself alone in the forest, and fear sought him; but his unseen uncle walked a pace behind, breaking nothing, touching nothing, yet turning wolves aside with his eyes. When the child reached home, he learned who kept him; and his fear became thanks.",
"7 So are ye kept oftentimes by hands ye do not see.",
"8 A woman said, Master, why see we them not?",
"9 He answered, Lest ye worship the lamp and forget the Flame.",
"10 Yet sometimes the Father letteth a window open, as upon Animikii-wajiw, that ye may remember the larger lodge.",
"11 Then He taught them how to walk with the unseen: Do secret mercies; sing softly at dawn; forgive before breakfast; bless the soil when thou plantest; leave a little bread where none seeth thee lay it; light a coal for a neighbour at night.",
"12 By these signs the unseen lodge draweth near.",
"13 He healed a boy who cried in sleep of dark rivers; and the boy woke laughing, saying, Grandfather stood by me with a light.",
"14 The people marvelled, and peace was thick as summer air.",
"15 Yahawzhowaa sang a lullaby of the lodge:",
"16 “Sh’khina n’gent, orah sovev — (Indwelling Presence, light around),",
"17 Nibaa b’sh’lama — (Sleep in peace),",
"18 Abba netzor — (Father, keep).”",
"19 The elders bowed their heads, remembering their own elders with sweetness instead of ache.",
"20 He said to the Twelve, Be doorkeepers rather than captains; open, do not own; guide, do not grasp.",
"21 Teach men to see without pride, and to not see without envy.",
"22 If the Father openeth a window for thee, close thy mouth and open thy hands.",
"23 If He keepeth it shut, trust His weather.",
"24 Then He set a sign among them: a small ring of stones wherein no meat should be cooked, but only bread broken and thanks given — calling it The Quiet Hearth.",
"25 Gather there when troubled, said He, and say little; the unseen lodge loveth small words.",
"26 At even they did so; and a still joy sat among them as a friend.",
"27 A heron stepped through the shallows without sound, and all hearts understood.",
"28 Yahawzhowaa blessed the grove and the stream.",
"29 They slept as children after long play.",
"30 And the morrow was bright upon their faces.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-covenant-of-cedar-en",
        title: "Chapter 12",
        subTitle: "The Covenant of the Cedar",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 12,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-covenant-of-cedar-en",
        title: "Chapter 12",
        subTitle: "The Covenant of the Cedar",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 12,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-unseen-lodge-en",
        followingChapter: "yahawzhowaa-book-4-valley-pillar-light-en",
        content: [
"1 Word came that two villages strove about hunting bounds; and fear rose that the peace would fray.",
"2 Yahawzhowaa went with the elders and stood between the lines beneath a lone cedar.",
"3 He said, Bring me a sapling from your shore, and bring me one from yours.",
"4 They brought them; and He set them side by side and braided their roots with wet earth.",
"5 This is your land when ye are wise, said He; so braided that each root helpeth the other drink.",
"6 He told a parable: Two hunters tracked the same stag. The first loosed before seeing the second; the second lowered his bow when he saw the first. They followed the blood and found not the stag but their shame. They fed on bitterness and slept cold.",
"7 In the next season they hunted together and lost no arrow.",
"8 Then He taught a song of bounds so children would mock war before it began:",
"9 “Not mine, not thine, but ours to tend;",
"10 The cedar’s shade to both shall bend;",
"11 If one be hungry, both shall send;",
"12 Thus endeth pride, and thus contend.”",
"13 The children laughed and learned it quick.",
"14 He turned to the men and said, Swear by thy children, not by thy anger.",
"15 They swore; and He cut His palm and let a single drop fall upon the braided roots, saying, Let my life witness thy peace.",
"16 Rain began though no cloud was seen; the cedar drank as an ox at thaw.",
"17 He healed an old spear wound in a chief’s thigh; the man stood light and young.",
"18 The chief said, Thy drop is more than our storm.",
"19 Yahawzhowaa answered, The Father loveth small obediences.",
"20 They set a marker of three stones: one from each village, and one from the riverbed — calling it The Third Stone.",
"21 He charged them, If ever ye strive, sit by the Third Stone till anger be ashamed.",
"22 He blessed the hunters’ hands: Take life clean and spare much; do not make the earth a widow.",
"23 A doe stepped from the brush and bowed her head; and they marvelled, for her fear was little.",
"24 The prophet wrote the covenant and bound it with red thread.",
"25 Toward evening Yahawzhowaa spake a poem: Cedar, witness and shade; / Rivers, arbiters made; / Children, mockers of blade; / Peace, the wiser trade.",
"26 The elders kissed the children’s heads for teachers.",
"27 Women sang the bounds-song while stirring the pot, and the smell of meat was like forgiveness.",
"28 The night kept quiet counsel under the cedar.",
"29 And the land rested from the rumour of quarrel.",
"30 Thus were their steps made ready for the westward road.",
"31 Yahawzhowaa lifted His eyes toward Siipisiing and smiled.",
"32 The Twelve felt the smile warm their bones.",
"33 The heron flew north across a gold sky.",
"34 And hope braided itself with memory.",
"35 So ended the covenant in joy.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-valley-pillar-light-en",
        title: "Chapter 13",
        subTitle: "The Narrow Valley and the Pillar of Light",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 13,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-valley-pillar-light-en",
        title: "Chapter 13",
        subTitle: "The Narrow Valley and the Pillar of Light",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 13,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-covenant-of-cedar-en",
        followingChapter: "yahawzhowaa-book-4-bent-bow-paint-en",
        content: [
"1 And word came unto Yahawzhowaa that two nations, the Anishinaabe and the Dakota, had arrayed themselves in the Narrow Valley, to set battle in order at the rising of the sun.",
"2 The grass of the meadow was bruised with many feet, and the river bent there like a bow drawn to the ear.",
"3 War paint shone upon the faces of young men, and the elders’ hearts were heavy, remembering ancient griefs as stones remembered old floods.",
"4 Women stood apart with water and bandages, for sorrow knoweth her duty before she is called.",
"5 Yahawzhowaa came between the two ridges and sat upon a low stone, and the Twelve were with Him, and Giiwedingiizhig the prophet.",
"6 Then drew near the chiefs, and each demanded, Of what tribe art Thou, that Thou sittest in the path of wrath?",
"7 He answered, I am of the tribe that eateth no man’s fear, and taketh no man’s land by blade; my Father is the Giver of Rivers, and ye are both His sons.",
"8 They murmured, Words have no shield; old blood asketh for new.",
"9 Yahawzhowaa rose and lifted up His hands, and cried with a great voice that stood still upon the air, Abba!",
"10 And lo, the sound of the world fell away; birds were silent, and the drum forgot its beat; only His voice abode.",
"11 A brightness descended, not as lightning that fleeth, but as a pillar of light standing in the midst, and it crowned Him as fire crowneth pine in winter dream.",
"12 The young men felt their spears as stones, and their bows as green branches too gentle to wound.",
"13 Yahawzhowaa called the chiefs by the names wherewith their mothers had called them, names of milk and cradle and first laughter, and their knees trembled.",
"14 He spake the grief of each — how one had buried a brother, and one a son; how winter had taken calves, and famine had taken pride; and none had spoken these things aloud.",
"15 While He yet spake, wounds closed as mouths after truth is told; hot blood cooled as iron set in snow; and scars remembered a smaller pain.",
"16 He stretched His right hand toward the east and His left toward the west; and the pillar widened till it lay like morning upon the companies.",
"17 He said, Behold thy mother — the river — whom neither of you fashioned: will ye redden the breast that fed you both?",
"18 The elders covered their faces, and the young men wept as children when thunder passeth and they find themselves held.",
"19 Then called He for a child from the crowd; and a little one came, not afraid, and stood between His knees.",
"20 If ye strike this day, saith He, ye strike him who hath not yet chosen thy anger; if ye make peace, ye make him heir to fields untrampled.",
"21 He bade the chiefs draw near; and He placed their hands one in the other, and set the child’s hand upon theirs, and the pillar waxed gentle as noon upon water.",
"22 A voice, not to the ear but to the inward man, went forth as many waters: This is my beloved Son; hear ye Him.",
"23 The chiefs cast down their weapons; the young men loosed their bow-strings; the drums remembered council instead of war.",
"24 Yahawzhowaa took a single arrow and brake the head thereof and buried it in the midst; and every man pressed earth upon it with his own hand.",
"25 He cried, Swear not by thy wrath, but by thy children; swear not by thy spear, but by thy seed; swear by bread shared and wounds tended together.",
"26 Then commanded He that water and bread be borne among both hosts by the hands of women; and they ministered first to them that had been their fear.",
"27 He sang a Song of the River of Peace, long and slow, and they learned the refrain, answering, Abba sh’lama b’gaw nibi (Father, peace within the water).",
"28 The pillar drew upward as incense, yet its quiet lingered upon their shoulders as a mantle not seen.",
"29 Old men kissed the foreheads of youths not of their lodge; boys brought cedar to the common fire; girls braided grass for mats where strangers sat.",
"30 The river bent herself and smiled, and loons cried as heralds, and the wind forgot to be cruel.",
"31 Yahawzhowaa said, Let this meadow be called Miskwi-aki-mikwendaam — the Red Earth of Remembrance — for ye have buried an arrow and raised a covenant.",
"32 He appointed watchers from both nations to keep the center-place, not with spears but with bread and water and a staff of cedar.",
"33 The prophet wrote the vow upon birch and sealed it with red thread, and hung it upon a pole where all might read.",
"34 The sun fell kindly; the stars consented; and men slept who had not thought to see another dawn.",
"35 Thus did the Father end a war by the hand of His Son; and all that saw knew assuredly it was of Him.",
"36 In the morning Yahawzhowaa walked the field and blessed the ground where wrath had lain, that grass and mercy might hide the memory of spears.",
"37 And He taught the Twelve to remember names, for peace keepeth better by name than by law.",
"38 Mothers said, Our wombs are eased; we shall not bear to slaughter but to song.",
"39 The arrow hidden in earth was visited each moon, and children set flowers there.",
"40 And the tale of the Narrow Valley ran faster than fear and proved stronger than pride.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-bent-bow-paint-en",
        title: "Chapter 14",
        subTitle: "The Bent Bow and the Washing of Paint",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 14,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-bent-bow-paint-en",
        title: "Chapter 14",
        subTitle: "The Bent Bow and the Washing of Paint",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 14,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-valley-pillar-light-en",
        followingChapter: "yahawzhowaa-book-4-sky-fires-remembered-en",
        content: [
"1 The day after, Yahawzhowaa gathered the young men from both nations in a circle, the elders standing as cedars round about.",
"2 He took a stout bow and laid it across His knees, and spake a parable: A bow that is ever bent shall break; a bow that is sometimes unstrung shall sing long.",
"3 A man that liveth always ready to strike striketh his own heart first; but he that learneth the rest of peace shall not miss the mark when mercy requireth strength.",
"4 He loosed the cord and set it gently aside, and they marvelled that a silence could teach.",
"5 A youth said, Master, what becometh of our skill, if we unstring?",
"6 He answered, Turn thy aim to famine, not to flesh; bend thy back against winter, not against thy brother; let thy arrows be fish and thy trophies be orphans fed.",
"7 Then brought He forth a basin from the river, clear and cold, and called them by twos, one Dakota, one Anishinaabe.",
"8 Wash ye one another’s paint, said He; for the face remembereth what the hand forgetteth.",
"9 They hesitated; pride is a stiff brush.",
"10 But one knelt first, and water fell crimson and blue together, and men saw how alike were the bones beneath their signs.",
"11 When they were washed, He anointed their brows with oil of cedar and wintergreen, and spake, Be marked for council.",
"12 He taught them a work-song:",
"13 “Unstring thy wrath, O brother mine;",
"14 Restring thy bow for bread and pine;",
"15 If storm should come, then bend in time-",
"16 But mercy be thy truest line.”",
"17 The song went round till the ridges answered like drums in a far feast.",
"18 He bade them carry elder men upon litters to the river, and bathed their old scars till laughter woke where groaning had dwelt.",
"19 Then set He a Trial of the Bow: to hunt no thing alone for forty days, but ever in pairs of the two nations, and to divide without counting.",
"20 He that hideth meat from his partner, said He, shall find his own belly a witness against him.",
"21 He gave them reeds to make flutes, that hands once swift to draw might learn to breathe.",
"22 The youths sat long, cutting holes, learning to place their thumbs as if upon wounds to heal them.",
"23 At even they played; and the valley that had learned war learned a tune.",
"24 The women cast off the garments of dread and took up bright cloth; the little ones slept early from joy.",
"25 Yahawzhowaa spoke softly to the chiefs, Pride is a winter with no wood; humility planteth cedar in autumn.",
"26 He set a watch at the buried arrow, not to keep men away, but to welcome any man that came heavy with an old story.",
"27 The watchers listened more than they spoke, and wars ended at that mound without a shout.",
"28 He taught the Twelve apart, saying, When ye see men put by their paint, put by thy cleverness also, and bring water first.",
"29 He blessed the river with tobacco and thanks; and the water answered with a shoal of fish that broke the surface as if to kiss the air.",
"30 The people said, Even the river desireth this peace.",
"31 Yahawzhowaa smiled, Rivers love to run without blood, as throats love to sing without smoke.",
"32 He bound two arrows into a cross and set them above the Quiet Hearth, that counsel should stand where spears had lain.",
"33 Night folded the valley like a mother folding a blanket, and none feared dreams.",
"34 The moon laid a white road upon the water; He called it the Path of Mercy.",
"35 And many walked it in their hearts till dawn.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-sky-fires-remembered-en",
        title: "Chapter 15",
        subTitle: "The Night of the Sky-Fires Remembered",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 15,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-sky-fires-remembered-en",
        title: "Chapter 15",
        subTitle: "The Night of the Sky-Fires Remembered",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 15,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-bent-bow-paint-en",
        followingChapter: "yahawzhowaa-book-4-drum-order-prayer-en",
        content: [
"1 Many from the villages came unto Animikii-wajiw to keep remembrance; for tidings had spread of lights that walked and fire that blessed without burning.",
"2 Yahawzhowaa went up a little way and sat upon a shelf of stone, and the people below made a circle of silence as a lodge without walls.",
"3 He prayed, and the prophet stood apart, watching as one who knoweth the door.",
"4 The wind lay down upon the slope, and the clouds drew aside as a curtain in a careful hand.",
"5 Stars looked near as berries in a child’s palm; and among them moved canoes of the sky, their bellies glowing like the Megis shell when dawn striketh the water.",
"6 They came neither swiftly nor slow, but as by measured paddling of unseen hands, and the air had the scent of rain and cedar smoke.",
"7 The people saw and fell upon their faces; for their bones remembered older songs.",
"8 A brightness stood above the place where Yahawzhowaa prayed, and in it forms were seen, as elders clothed in morning, speaking as fire writ slow.",
"9 The prophet cried, The lodge of light is opened!",
"10 Then fire from above touched the stones about Him, and they shone as though they had learned to keep the day.",
"11 When He descended, His face was as a river when the sun walketh upon it; and men dared not gaze long, lest their own secrets be seen.",
"12 He said, What ye beheld is the larger lodge, of which this earth is but the hearth; fear not that it is far, for it standeth round about you as air standeth round a drum.",
"13 All creatures be vessels; the maple keepeth light as sap, the bee keepeth light as honey, the deer as swiftness, the hawk as sight; and man keepeth light as mercy and truth.",
"14 Thy heart is thy drum; keep it in tune, for the Great Council listeneth.",
"15 He sang a psalm and they answered by turns:",
"16 “Abba, orha (Father, the way), make bright my tread;",
"17 Keep me a lamp where the elders have led;*",
"18 Weave me with rivers that run without dread;*",
"19 Bind me to brothers by bread upon bread.”*",
"20 He told a parable: A man feared the dark and hid his lamp under his bed; the flame died for want of air. He said, “I have kept it safe,” but his lodge was cold. Another set his lamp upon a stone; thieves came in shame and left with warm hands.",
"21 So set thy light where it may be of use, and fear shall be ashamed to enter.",
"22 Mothers brought babes to pass beneath His hands as under a doorway; He blessed them, saying, Grow tall in gentleness.",
"23 He laid palms upon old men, and their eyes remembered far springs without pain.",
"24 He looked upon the mountain and called it Ode’ Akiwenzid — the Heart of the Elder — because it kept counsel and returned it without boasting.",
"25 The canoes of the sky ascended as swans; and the last light waited upon the tip of the peak as a tear waiteth upon its edge.",
"26 He taught the prophet to speak sparingly, for wonder is a drink that should be sipped, lest men choke for greed.",
"27 The people sat late without fire, warmed by what they had seen.",
"28 A heron cried once from the dark, and it was as an amen.",
"29 Yahawzhowaa said to the Twelve, Say little of shapes, much of mercy; for men love to chase stars and forget neighbours.",
"30 They kept that word, and it preserved the camp from proud tales.",
"31 In the morning He hid His brightness in humility, and the children climbed upon His knees.",
"32 He told them the sky hath room for their laughter.",
"33 He gave them white stones from the slope and said, Remember peace when thou see’st this shine.",
"34 They kept the stones as treasures in small pouches.",
"35 And the mountain kept their footprints as a book.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-drum-order-prayer-en",
        title: "Chapter 16",
        subTitle: "The Little Drum and the Order of Prayer",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 16,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-drum-order-prayer-en",
        title: "Chapter 16",
        subTitle: "The Little Drum and the Order of Prayer",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 16,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-sky-fires-remembered-en",
        followingChapter: "yahawzhowaa-book-4-lifting-stones-en",
        content: [
"1 Yahawzhowaa gathered the people under a broad omashkooz (elm), and the shade thereof was as a tent of kindness.",
"2 He taught them the true order of prayer, saying, Begin with thanks, for thanksgiving openeth the door; continue with truth, for truth cleanseth the floor; end with mercy, for mercy spreadeth mats for guests.",
"3 Face the four winds by turns, not as to worship them, but to remember the Father’s gifts from every quarter.",
"4 He bade them lift the left hand for remembrance, and the right for hope; and to touch the breast, saying, My heart is Thy drum.",
"5 Then He sang a long song and they learned it as a path:",
"6 “Abba b’mizrach — (Father in the East), wake me to light;",
"7 Abba b’darom — (Father in the South), warm me to courage;*",
"8 Abba b’ma’arav — (Father in the West), sweeten my memory;*",
"9 Abba b’tzafon — (Father in the North), strengthen my counsel.*",
"10 Let my little drum keep honest time;",
"11 Let my words be bread, not stones;",
"12 Let my anger be a broom and not a spear;",
"13 Let my labour be song and not complaint.”",
"14 He taught them to place sun-grown food upon a small stone, blessing it before eating, saying, Light fed this; let it feed our light.",
"15 A youth said, Master, my drum beat is crooked.",
"16 He answered, Trim the wick of thy thoughts: cease from mockery three days; bless thy enemy each morning in thy heart; and thy beat shall find the Father’s foot.",
"17 He laid hand upon the youth’s breast; and the pulse took up a steadier tale.",
"18 He spake a parable: Two men built lodges; one tuned his drum each moon, and guests knew his door by the joy within; the other left his drum to dust; his children forgot to dance.",
"19 The first grew old with friends; the second grew old with opinions.",
"20 Mothers asked the rule for children; He said, Make their bodies weary with honest work and their minds merry with honest story; then will prayer be sweet as sleep.",
"21 He set a ring of seven stones and called it Makwa-oodaapin — the Bear’s Seat — where any man might sit to confess without shame.",
"22 He promised, Whoso confesseth at the Bear’s Seat I will meet with kindness; for truth seeketh a lap to climb upon like a child.",
"23 Elders spoke of old wrongs; young men of hidden fears; and none despised; and the ring became a well.",
"24 He taught the Twelve to receive confession as water receives a thrown stone — making circles, not wounds.",
"25 He blessed the women’s hands, saying, Ye keep the camp in tune; when ye forgive, drums across valleys strike together.",
"26 Then He gave a closing chant all could carry while walking:",
"27 “Abba, n’sa or — (Father, lift the light);",
"28 Sh’lama b’kirbi — (Peace within me);",
"29 Zoongide’ nindo-de’ — (Make brave my heart);",
"30 Netzev b’emet — (Stand me in truth).”",
"31 They repeated till the trees seemed to move their leaves in time.",
"32 He smiled as rain before sun.",
"33 The day was healed of haste.",
"34 Night came without sharp corners.",
"35 And the camp lay down as a single breath.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-lifting-stones-en",
        title: "Chapter 17",
        subTitle: "The Hidden Spring and the Lifting of Stones",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-lifting-stones-en",
        title: "Chapter 17",
        subTitle: "The Hidden Spring and the Lifting of Stones",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 17,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-drum-order-prayer-en",
        followingChapter: "yahawzhowaa-book-4-feast-one-fire-en",
        content: [
"1 They passed into a thirsty country, and waters were few, and tongues cleaved like broken reeds.",
"2 Murmuring rose as mist from a dank hollow; for men remember thirst sooner than song.",
"3 Yahawzhowaa halted them by a field of flat stones, uncomely to the eye.",
"4 He said, There is a spring under a burden, as often as there is mercy under pride.",
"5 He knelt and lifted one stone as a mother lifteth a sleeping child; and beneath it the earth darkened, and a trickle appeared.",
"6 He bade others lift stones nearby, slowly and with blessing; and lo, the trickles met as cousins and became a stream.",
"7 So doth the Father wait beneath thy heaviness, said He; lift with prayer, and waters will agree to be one.",
"8 He told a parable: A man carried a pack of stones for the memory of wrongs; his back grew crooked and his eyes low. A child asked, “What be these?” He answered, “My reasons.” The child said, “Throw me one; I will skip it upon the river.” And joy began to skip with it.",
"9 The people laughed and wept, and they cast small stones into the new stream for the sake of old reasons.",
"10 He sang a spring chant:",
"11 “Lift slow, bless low;",
"12 Stone off, stream grow;",
"13 Pride down, thanks flow.”",
"14 They drank, and their faces were made soft again.",
"15 He healed a woman whose milk had failed for fear; and her breast remembered its work.",
"16 He blessed the field of stones, naming it Nibi-inaabandam — Water Revealed — so that travellers after might lift burdens with hope.",
"17 He set boys to carry water to elders, and girls to plant willow slips; and the dry place began to draw green like a thought becoming deed.",
"18 He warned the Twelve, Judge not the unlovely place; springs love to hide in such, as wisdom loveth to dwell with the humble.",
"19 Night found them with full skins and light hearts; and stars made little rivers across the sky.",
"20 In the morning, birds argued gladly over the new bank.",
"21 The people went their way singing the lift-slow song.",
"22 And thirst was remembered as teacher, not enemy.",
"23 Yahawzhowaa smiled and said, So be it with all thy sorrows.",
"24 They believed Him, and hope walked at their elbow.",
"25 The stream accompanied them a while and then turned home, as friends rightly do.",
"26 He blessed it at the parting.",
"27 And it answered with a quick bright run over stones, as if clapping.",
"28 The road shortened for many.",
"29 And none grudged the labour of lifting.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-feast-one-fire-en",
        title: "Chapter 18",
        subTitle: "The Feast of One Fire",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 18,
        visible: true
    }
    addChapter(chapter);

    chapter = {
        id: "yahawzhowaa-book-4-feast-one-fire-en",
        title: "Chapter 18",
        subTitle: "The Feast of One Fire",
        parent: "yahawzhowaa-lakes-between-the-hills-en",
        order: 18,
        visible: true,
        previousChapter: "yahawzhowaa-book-4-lifting-stones-en",
        followingChapter: "",
        content: [
"1 They came to a village wary of strangers, lean from a long winter; doors had learned to shut too soon.",
"2 Yahawzhowaa sat in the common place and kindled a small blaze; and the fire looked little among many lodges.",
"3 He said, Bring what ye have: a handful, a corner, a remnant; trouble not for shame, for the Father loveth crumbs when they consent to be bread.",
"4 Some brought bones for broth; some, a last onion; a child, three berries saved against himself.",
"5 He blessed all, not for size but for courage, and cast them into one pot.",
"6 He spake a parable: Three houses kept three fires, and each feared the other’s smoke. Famine entered one by one, proud and thin. A widow opened her door and said, “Let there be one fire.” Famine found the door too crowded to get in.",
"7 The people smiled through tears; and the pot began to speak a sweet steam.",
"8 He appointed The Quiet Hearth — a ring of stones where no barter should be named, only thanks.",
"9 He bade the proud hunter sit first; humility is a broth that mendeth strong men quickest.",
"10 The pot went round; none measured, yet all were measured by joy.",
"11 Yahawzhowaa sang a table-psalm: ",
"12 “Bless, O Abba, what is small and brave;",
"13 Knit our scraps to robes that save;",
"14 Make one fire for many days;",
"15 Turn thin thanks to thickening praise.”",
"16 He told the women, Ye are the governors of feasts; ye can make hunger a guest rather than a thief.",
"17 He blessed a child who gave his berry; the child forgot the taste but remembered the warmth forever.",
"18 He sent bowls to shut doors by children’s hands; bolts lifted, and eyes peered out, and laughter made neighbours.",
"19 He set aside a portion for travellers not yet come; and ere the pot cooled, travellers came.",
"20 The Twelve served last and ate with honest hunger; for shepherds should know the grass by taste, not by report.",
"21 He taught a refrain for future want:",
"22 “One fire, one bread, one thanks.”",
"23 They repeated till prudence and generosity knew each other by sight.",
"24 At even He broke a little loaf and hid it near the gate, for angels love to eat where none seeth them fed.",
"25 The village slept with doors only leaning, not locked.",
"26 Dreaming was fat that night, and fear thin.",
"27 In the morning, kettles remembered how to sing.",
"28 The hunters took less pride and more counsel.",
"29 The old unbent enough to reach the ground and bless it.",
"30 Yahawzhowaa smiled as a baker at a well-risen loaf.",
"31 He named the feast Ishkodebimaadiziwin — Life from One Fire.",
"32 The prophet wrote.",
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    //addChapterText(chapter);
    //addChapterAudio(chapter);



    res.send("Yahawzhowaa Added");
});


//module.exports = copper;