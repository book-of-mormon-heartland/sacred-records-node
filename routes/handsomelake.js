import express from 'express';
export const handsomeLake = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';

handsomeLake.get("/addHandsomeLake", function (req, res) {
    let book = {};
    let chapter = {};
/*
    book = {
        id: "handsome-lake-en",
        title: "Handsome Lake",
        subTitle: "The Code of Handsome Lake, The Seneca Prophet",
        image: "https://storage.googleapis.com/sacred-records/books/handsome-lake/the-code-of-handsome-lake-615x771.jpg",
        thumbnail: "https://storage.googleapis.com/sacred-records/books/handsome-lake/the-code-of-handsome-lake-171x214-2.jpg",
        thumbnailTitle: "Handsome Lake",
        Description: "",
        priceText: "$20.00",
        price: 2000,
        isParent: true,
        hasChildBooks: false,
        order: 1,
        parent: "",
        visible: true,
        language: "en",
    }
    addBook(book);

*/
    chapter = {
        id: "handsome-lake-cover-en",
        title: "Cover Images",
        subTitle: "The Code of Handsome Lake, The Seneca Prophet",
        parent: "handsome-lake-en",
        order: 1,
        visible: true
    }
    addChapter(chapter);
    
    chapter = {
        id: "handsome-lake-cover-en",
        title: "Cover Images",
        subTitle: "The Code of Handsome Lake, The Seneca Prophet",
        parent: "handsome-lake-en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "handsome-lake-intro-en",
        content: [
            "[[image:https://storage.googleapis.com/sacred-records/books/handsome-lake/2.jpg]]",
            "[[image:https://storage.googleapis.com/sacred-records/books/handsome-lake/3.jpg]]",
            "[[image:https://storage.googleapis.com/sacred-records/books/handsome-lake/4.jpg]]",
            "[[image:https://storage.googleapis.com/sacred-records/books/handsome-lake/5.jpg]]",
        ],
    }
    addChapterText(chapter)

    chapter = {
        id: "handsome-lake-intro-en",
        title: "Introduction",
        subTitle: "Introduction by Arthur C. Parker",
        parent: "handsome-lake-en",
        order: 2,
        visible: true
    }
    addChapter(chapter);
    
    chapter = {
        id: "handsome-lake-intro-en",
        title: "Introduction",
        subTitle: "Introduction by Arthur C. Parker",
        parent: "handsome-lake-en",
        order: 2,
        visible: true,
        previousChapter: "handsome-lake-cover-en",
        followingChapter: "handsome-lake-1-en",
        content: [
            "The Gai'wiio' is the record of the teachings of Handsome Lake,the Seneca prophet, and purports to be an exact exposition of the precepts that he taught during a term of sixteen years, ending with his death in 1815. It is the basis of the so-called \"new religion of the Six Nations\" and is preached or recited at all the annual midwinter festivals on the various Iroquois reservations in New York and Ontario that have adherents. These reservations are Onondaga, Tonawanda, Cattaraugus and Allegany in New York and Grand River and Muncytown in Ontario.",
            "There are six authorized \"holders\" of the Gai'wiio' among whom are John Gibson (Ganio'dai'io') and Edward Cornplanter (Soson'dowă). Senecas, and Frank Logan (Adodar'ho), Onondaga. Chief Cornplanter is by far the most conservative though Chief Gibson seems to have the greater store of explanatory matter, often interpolating it during his exposition. Chief Logan is a devout adherent of his religion and watches the waning of his prophet's teachings with grave concern. His grief is like that of Hiawatha (Haiyo''wentha) and inclines him to leave Onondaga for a region where the prophet will not be jeered.",
            "The stated times for the proclaiming of the Gai'wiio' are at the Six Nations' meeting in September and at the midwinter thanksgiving in the moon Nisko wükni, between January 15th and February 15th. At such times the Ongwe''oñweka or \"faithful Indians\" send for an expounder paying his traveling expenses and entertaining him during his stay. Usually reservations exchange preachers, Cornplanter going to Grand River or Onondaga and Chief Gibson to Cattaraugus or Allegany.",
            "The time consumed in reciting the Gai'wiio' is always three days. At noon each day the expositor stops, for the sun is in mid-heaven and ready to descend. All sacred things must be done sēdē'tcia, early in the morning. Before sunrise each morning of the preaching the preacher stands at the fireplace in the long house and sings a song known as the Sun Song. This is an obedience to a command of the prophet who promised that it should insure good weather for the day. \"The wind always dies down when I sing that song,\" affirms Chief Cornplanter.",
            "During the recital of the Gai'wiio' the preacher stands at the fireplace which serves as the altar. Sitting beside him is an assistant or some officer of the rites who holds a white wampum strand.[The original Handsome Lake Belt is still displayed at the religious council at Tonawanda - see plate 15.] A select congregation sits on benches placed across the long house but the majority use the double row of seats around the walls. The women wear shawls over their heads and during affecting parts of the story hide their faces to conceal the tears. Some of the men, stirred to emotion, likewise are moved to tears but are unable to hide them. Such emotion once detected by the auditors sometimes becomes contagious and serves as the means of scores repledging their allegiance to the old religion. In 1909. for example, 136 Allegany Senecas promised Chief Cornplanter that they would stop drinking liquor and obey the commands of Handsome Lake. Visiting Canadian Oneida Indians at the Grand River ceremonies, as a result of such a \"revival,\" petitioned for a visit of the Gai'wiio' preachers several years ago, saying that a portion of the Oneida of the Thames wished to return to the \"old way.\" This some of them have done but they complain of the persecution of their Christian tribesmen who threatened to burn their council house. In other places the case seems different and the \"prophet's cause\" is not espoused with much enthusiasm by the younger element to whom the white man's world and thought present a greater appeal. Those who live in communities in which the prophet's word is still strong are drawn to the ceremonies and to the recitals because it is a part of their social system.",
            "Its great appeal to the older people is that it presents in their own language a system of moral precepts and exhortations that they can readily understand. The prophet, who is called \"our great teacher\" (sedwa'gowá'né), was a man of their own blood, and the ground that he traversed was their ancestral domain. Patriotism and religious emotion mingle, and, when the story of the \"great wrongs\" is remembered, spur on a ready acceptance. The fraudulent treaty of Buffalo of 1838, for example, caused many of the Buffalo Senecas to move to the Cattaraugus reservation. Here they settled at Ganun'dase or Newtown, then a desolate wilderness. Their bitter wrongs made them hate white men and to resist all missionary efforts. Today there is no mission chapel at Newtown. All attempts have failed.[See Casswell, Our Life Amoung the Iroquis, Boston 1808] Whether future ones will readily succeed is conjectural. The Indian there clings to his prophet and heeds the word of his teacher. At Cold Spring on the Allegany is another center of the \"old time people.\" On the Tonawanda reservation this element is chiefly centered \"down below\" at the long house. On the Onondaga reservation the long house stands in the middle of the Onondaga village and the Ganuñg'sisné'ha (long) house people) are distributed all over the reservation but perhaps chiefly on Hemlock road. It is an odd sight, provoking strange thoughts, to stand at the tomb of the prophet near the council house and watch each day the hundreds of automobiles that fly by over the State road. The Tuscarora and St Regis Indians are all nominally Christians and they have no long houses.",
            "The present form of the Gai'wiio' was determined by a council of its preachers some fifty years ago. They met at Cold Spring, the old home of Handsome Lake, and compared their versions. Several differences were found and each preacher thought his version the correct one. At length Chief John Jacket, a Cattaraugus Seneca, and a man well versed in the lore of his people, was chosen to settle forever the words and the form of the Gai'wiio'. This he did by writing it out in the Seneca language by the method taught by Rev. Asher Wright, the Presbyterian missionary. The preachers assembled again, this time, according to Cornplanter, at Cattaraugus where they memorized the parts in which they were faulty. The original text was written on letter paper and now is entirely destroyed. Chief Jacket gave it to Henry Stevens and Chief Stevens passed it on to Chief Cornplanter who after he had memorized the teachings became careless and lost the papers sheet by sheet. Fearing that the true form might become lost Chief Cornplanter in 1903 began to rewrite the Gai'wiio' in an old minute book of the Seneca Lacrosse Club. He had finished the historical introduction when the writer discovered what he had done. He was implored to finish it and give it to the State of New York for preservation. He was at first reluctant, fearing criticism, but after a council with the leading men he consented to do so. He became greatly interested in the progress of the translation and is eager for the time to arrive when all white men may have the privilege of reading the \"wonderful message\" of the great prophet.",
            "The translation was made chiefly by William Bluesky, the native lay preacher of the Baptist church. It was a lesson in religious toleration to see the Christian preacher and the \"Instructor of the Gai'wiio\" side by side working over the sections of the code, for beyond a few smiles at certain passages, in which Chief Cornplanter himself shared, Mr Bluesky never showed but that he reverenced every message and revelation of the four messengers.",
        ],
    }
    addChapterText(chapter);


    res.send("Handsome Lake Added");
})

handsomeLake.get("/removeHandsomeLake", function (req, res) {

    res.send("Handsome Lake Removed");
});

//module.exports = copper;