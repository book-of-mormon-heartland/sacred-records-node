
const express = require("express");
const { text } = require('body-parser');
const nephiteRecord = express.Router();
const { OAuth2Client } = require('google-auth-library');
const { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } = require("../database/database.js"); // Import the database module
require('dotenv').config(); // Load environment variables


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;



nephiteRecord.get("/addNephiteRecord", function (req, res) {


  console.log("GET /GET/addBook called");
/*
  book = {
    id: "nr-introduction-en",
    title: "Introduction",
    subTitle: "",
    image: "https://storage.googleapis.com/sacred-records/books/nephite-record-1840/nephite-record-image.jpg",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/intro-thumbnail.jpg",
    thumbnailTitle: "Intro",
    isParent: false,
    hasChildBooks: false,
    order: 1,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);
*/
/*
  chapter = {
    id: "nr-intro-bomh-en",
    title: "Publisher Notes",
    subTitle: "",
    order: 1,
    parent: "nr-introduction-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
      id: "nr-intro-bomh-en",
      title: "Publisher Notes",
      subTitle: "",
      parent: "nr-introduction-en",
      order: 1,
      visible: true,
      previousChapter: "",
      followingChapter: "nr-intro-advertisement-en",
      content: [
        "In August of 2025, I, Brian Nettles, screenshot the images of this book as they are found at https://archive.org/details/bookofmormon00smit/mode/2up. I did this for the purpose of performing an OCR scan and putting the pages into the Sacred Records application, thus creating \"The Sacred Records Edition\".",
        "On one of the front leaf pages is a note which states, \"BOOK OF MORMON, Smith, This book was borrowed from the Lincoln of Congress from November 18, 1861 to July 29, 1862.\"",
        "The major leaf page states, \"The Book of Mormon, Translated by Joseph Smith, Jr., Reprinted from Third American Edition. Carefully Revised by the Translator.\"",
        "NEW YORK: JAS. O. WRIGHT & COMPANY, 377 BROADWAY, PUBLISHERS",
        "The Advertisement section was part of the publication, not an insert or anything from Sacred Records.",
        "The Sacred Records Edition attempts retain the text and punctuation of this Third American Edition; Also, this edition uses the chapter and verse setup that is used currently in most published versions of the Book of Mormon today.",
        "All the Best,",
        "Brian Nettles",
      ],
  }
  //removeChapterText(chapter);
  //removeChapterText(chapter);
  addChapterText(chapter);
  addChapterAudio(chapter);
*/
/*
  chapter = {
    id: "nr-intro-advertisement-en",
    title: "Advertisement",
    subTitle: "",
    order: 2,
    parent: "nr-introduction-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
      id: "nr-intro-advertisement-en",
      title: "Advertisement",
      subTitle: "",
      parent: "nr-introduction-en",
      order: 2,
      visible: true,
      previousChapter: "nr-intro-bomh-en",
      followingChapter: "nr-intro-intro-en",
      content: [
        "THE present Edition of the \"Book of Mormon,\" is an accurate reprint of the Third American Edition, originally published at Nauvoo, eighteen years ago, under the official sanction of the leaders of the Mormon Church. The interest which attaches to this curious work, not only as a literary production, but as the recognized standard of the religious faith of a People whose history is attracting great attention, has appeared to the Publishers a sufficient reason for re-issuing it. Every thing pertaining to the faith, manners and customs of the Mormons is invested with a singular air. The \"Golden Bible\" is accepted as the corner-stone of their belief, and forms a remarkable feature in their historical record. In this republication, the Publishers have yielded to a general desire for information in regard to the nature of the Book, and have carefully abstained from any alteration or, modification of the original text.",
        "The \"Book of Mormon\" has passed through several editions in the United States and Great Britain since its original publication in 1830, but for some years past it has been entirely out of print. The present Republication is respectfully submitted to the Public."
      ],
  }
  addChapterText(chapter);
  chapter = {
      id: "nr-intro-advertisement-en",
      title: "Advertisement",
      subTitle: "",
      parent: "nr-introduction-en",
      order: 2,
      visible: true,
      previousChapter: "nr-intro-bomh-en",
      followingChapter: "nr-intro-intro-en",
      content: [
        "THE present Edition of the \"Book of Mormon,\" is an accurate reprint of the Third American Edition, originally published at Nauvoo, eighteen years ago, under the official sanction of the leaders of the Mormon Church. The interest which attaches to this curious work, not only as a literary production, but as the recognized standard of the religious faith of a People whose history is attracting great attention, has appeared to the Publishers a sufficient reason for re-issuing it. Every thing pertaining to the faith, manners and customs of the Mormons is invested with a singular air. The \"Golden Bible\" is accepted as the corner-stone of their belief, and forms a remarkable feature in their historical record. In this republication, the Publishers have yielded to a general desire for information in regard to the nature of the Book, and have carefully abstained from any alteration or, modification of the original text.",
        "The \"Book of Mormon\" has passed through several editions in the United States and Great Britain since its original publication in 1830, but for some years past it has been entirely out of print. The present Republication is respectfully submitted to the Public."
      ],
  }
  addChapterAudio(chapter);
/*

  chapter = {
      id: "nr-intro-intro-en",
      title: "Introduction",
      subTitle: "",
      parent: "nr-introduction-en",
      order: 3,
      visible: true
  }
  addChapter(chapter);
  chapter = {
      id: "nr-intro-intro-en",
      title: "Introduction",
      subTitle: "",
      parent: "nr-introduction-en",
      order: 3,
      visible: true,
      previousChapter: "nr-intro-advertisement-en",
      followingChapter: "nr-intro-title-page-en",
      content: [
        "WHAT is the \"Book of Mormon!\"-whence its origin ?-what its purpose?-are questions which have never been satisfactorily answered. A legendary account of the history of the work is accepted by the church of the Latter-Day Saints, as the true statement of its origin, and the Mormon faith receives the utterances of the Nephite MORMON as the very foundation and cornerstone of its belief. The Mormons, a singular sect, possessed of notions which differ totally from the received opinions of every other class of believers, are content to pin their religious doctrine to the skirts of the Prophet Joseph, and the wild romance which was invented by that remarkable personage is to this day invested with a peculiar charm in the imagination of the inhabitants of Utah, and their fellows, who are scattered over the face of the earth. A deep mystery underlies the entire Mormon record. That a single man, in the midst of the enlightenment of this century, should have been able to throw the lines of mysticism so thoroughly over the minds of hundreds of thousands of men and women, is not more wonderful than the earnest and self-denying faith with which his devotees have sustained an unbroken unity, under circumstances of remarkable privation and peril. Nor is it less surprising that the assumption of a power very nearly absolute, by one man, who is regarded as the legitimate successor of the original Prophet, has come to be accepted by this people as a divine ordination, and that to one guiding spirit alone is yielded the homage and obedience which insure the autocratic sway of BRIGHAM YOUNG. Considered in all their relations, -religious, political, moral or social-the Mormons are a curious race. Occupying for their head-quarters a portion of the American continent which is far removed from the influences of civilization, and indeed is for many months in the year totally inaccessible,-cooped up among overhanging mountains,-destitute of the refinements of ordinary social life,-bent beneath the sway of an unscrupulous hierarchy,-holding to practices which, elsewhere than in their own territory, would subject them to the penalties of the law, and, withal, noted for a spirit of zeal, industry, and perseverance, which has enabled them to convert the wildest moods of nature into servants of their will,-the Mormons have earned an enduring reputation for sincerity and energy and capacity. When their history comes to be written, when the secrets of their origin and progress and government shall have been added to the published record of their religious belief, this people will rank among the most extraordinary of all the sects that have sprung into life as the world has run its course.",
        "The Book of Mormon was the entering wedge which began the division of this odd slice of religious enthusiasm from the great body of faith and doctrine which existed before its pretended discovery. A true and a false version of the story of the origin of the book are in circulation, but in a distorted and incorrect fashion. The Mormon faith having its groundwork in the pages of the \"Golden Bible,\" it becomes a matter of no inconsiderable interest to cull the truth from the heterogeneous collection of myths and fables which have purported to give the history of the volume. We shall produce abundant testimony on both sides, giving the official record of the divine authenticity which the Mormons claim for the work, and offsetting that record with the Gentile version; establishing each statement from the certified authority, and weighing the evidence on both sides of the queston, with a careful regard to the elimination of the facts.",
        "I. What are the proofs of the Divine authenticity of the \"Book of Mormon.\" The Mormons claim that a portion of their history runs back to that extremely remote age when the tongues were confounded at the Tower of Babel. They hold that at the time of that event, the tribes of the earth were scattered abroad, and that the migrations of one particular colony were especially directed by the Lord, who led the favored few across the sea to the Western Continent, now called America. The colony inhabited America for some fifteen hundred years, but were destroyed for their wickedness, at a period about six hundred years before Christ. A prophet, ETHER, was their historian, and one of the Books in the Mormon Bible, which bears his name, gives a full account of his genealogy and of the nature of his prophetic office. Ether seems to have been a lineal descendant from JARED, and JARED was one of the favored colony, led out from the polyglot tribulation at the Tower, and conducted subsequently to the land of rest which was provided on the territory now known as America. The prophet lived to see the last vestiges of his nation become extinct, and, having finished his record of its history and destruction, deposited it, under Divine direction, in the locality where it was found by another colony. The second colony, according to the best Mormon authority, was composed of Israelites, and came from Jerusalem about the year 600 B. C.,-occupying the place of the original colony, which was then extinct, and re-peopling America. The new colonists were descendants of the tribe of JOSEPH. They grew and multiplied, became rich and powerful, and in process of time divided into two nations; one of which, the Nephites, so named after its founder NEPHI, became noted for enlightenment and civilization,-while the other branch, the Lamanites, which took its name from its founder LAMAN, lapsed into barbarism, and was destitute of the refinements and advantages which attend a state of civilized existence. The Mormon historians make this latter branch the immediate progenitors of the American Indians, and a curious chapter on the origin of that race is given in the \"Voice of Warning\" of PARLEY PRATT. The theories of Boudinot and other writers are largely drawn upon to establish the completeness of the record on this point; with what degree of probability the history is invested, the ethnological inquirer will judge.",
        "The Mormon history proceeds to record the progress of the opposing nations of the Nephites and the Lamanites. The Nephites appear to have been highly favored of the Lord. They enjoyed visions, received the visitation of angels, and the gift of prophecy was handed down from age to age. Finally, they were blessed with a personal appearance of Jesus Christ after his resurrection from the dead; received from him the doctrine of the Gospel, and were invested with the power of foretelling the events of the future. In this happy condition of grace and wisdom, the race of the Nephites continued until the third or fourth century of the Christian era, when, through temptation, they fell from their high estate, and finally were destroyed by their wicked neighbors, the Lamanites. The most noted Prophet of the golden age of the Nephites was MORMON. By divine commandment, Mormons made an abridgment of the Sacred Records, which contained the history of his forefathers, narrated the prophecies which were made to them, and sketched the events which attended the introduction of the Gospel among them. The history of his own time was appended to this record, and Mormon put the finishing touch to his historical labors by narrating the destruction of his nation,-both he and his predecessor ETHER having been permitted to escape the general destruction in order that the record of the great events which produced the catastrophe might descend safely to future generations. MORMON, having completed his work, laid him down to die, and entrusted to his son MORONI the task of concealing the plates upon which he had recorded the story of his nation. From this point commences the history of the Mormon Bible.",
        "In order to preserve the plates from falling into the impious hands of the Lamanites, MORONI deposited them carefully in the earth, in a locality then called the Hill of Cumorah,-now a part of Ontario county in the State of New York. The record was carefully sealed up, and buried several feet below the surface of the hill, and the date of that occurrence is fixed about A. D. 420. Fourteen hundred years passed away, until, on the 22d day of September, 1827, an angel of the Lord directed JOSEPH SMITH, jr., (the original Mormon prophet,) to exhume the long-buried history. An ingeniously contrived story of the discovery of the golden plates is given by Elder OnSON PRATT, in a tract entitled \"Remarkable Visions.\"* Elder PRATT is considered an excellent authority among the Mormons, and we extract from his statement a sentence or two, descriptive of the method of concealment which was devised by MORONI.",
        "How far below the surface these records were placed by Moroni, I amunable to say; but from the fact that they had been some fourteen hundred years buried, and that, too, on the side of a hill so steep, one is ready to conclude that they were some feet below, as the earth would naturally wear, more or less, in that length of time; but they being placed towards the top of the hill, the ground would not remove as much as at two-thirds, perhaps. Another circumstance would prevent a wearing of the earth; in all probability, as soon as timber had time to grow, the hill was covered after the Nephites were destroyed, and the roots of the same would hold the surface; however, on this point, I shall leave every man to draw his own conclusion, and form his own speculation.' But suffice it to say 'a hole of sufficient depth was dug; at the bottom of this was laid a stone of suitable size, the upper surface being smooth; at each edge was placed a large quantity of cement, and into this cement at the four edges of this stone, were placed erect four others; their bottom edges resting in the cement, at the outer edges of the first stone. The four last named, when placed erect, formed a box; the corners, or where the edges of the four came in contact, were also cemented so firmly, that the moisture from without was prevented from entering. It is to be observed, also, that the inner surface of the four erect or side stones was smooth. This box was sufficiently large to admit a breastplate, such as was used by the ancients to defend the chest, &c., from the arrows and weapons of their enemy. From the bottom of the box, or from the breast-plate, arose three small pillars, composed of the same description of cement used on the edges; and upon these three pillars was placed the record.",
        "This box containing the record was covered with another stone, the bottom surface being flat, and the upper crowning. The style of the plates was peculiar. They had the appearance of gold, were each seven inches in width by eight inches in length, and were not quite the thickness of common tin; were bound together in a volume, of the thickness of nearly six inches, and were connected at one edge by three rings running through the whole. Each plate was filled on both sides with engravings of finely drawn characters, which resembled the Egyptian. A part of the volume was sealed, and with the book were found the Urim and Thummim, two transparent crystals, set in the rims of a bow. These pebbles were the seer's instrument, whereby the mystery of hidden things was to be revealed. The entire apparatus was delivered by a heavenly messenger directly into the hands of the Prophet Josɛru, and then began the tribulations of that unhappy person. The efforts of his enemies to destroy him and to obtain possession of the precious plates, are narrated by the Mormon historians, with moving pictures of the distresses which befell the Prophet, and graphic accounts of the perilous transit of the Bible-plates from New York to Pennsylvania; the prophet in fear of his life, and the plates concealed at the bottom of a barrel of beans. SMITH having fled from his persecutors, settled himself to the task of obeying the divine injunction to translate his Bible into the English tongue. The Urim and the Thummim now came into play, but the prophet was a poor scholar, and found himself under the necessity of employing a scribe. After a time, a few of the original characters written upon the plates were transcribed and translated, and copies were forwarded to New York, to be submitted to Professor CHARLES ANTHON. SMITH continued his translation, and the \"Book of Mormon\" made its appearance, translated into the English language, in the year 1830. It has passed through several editions, in the United States and Great Britain; the latest English edition having been issued from the London and Liverpool publishing-house of the Latter-Day Saints, in the year 1854. The proofs of the divine authenticity of the \"Book of Mormon,\" thus sketched, are soon summed up. First, the theory of the early peopling of America by a colony from the East is accepted as a conclusion. Second, the Mormons believe, or pretend to believe, that Christ personally appeared to the Nephites, a nation which succeeded the original colony, and was subsequently destroyed by the Lamanites, Third, the prophets ETHER and MORMON were divinely ordained to fulfill an office similar to that which the Christian believer claims for ISAIAH and JEREMIAH, and that the historical records of two great epochs were preserved from destruction by miraculous interposition. Fourth, the modern prophet, JOSEPH SMITH, Jr., was divinely appointed to bring together the scattered remnants of the elect, and was the instrument employed for the exhumation of the standard of light and divine knowledge, after its long sleep of fourteen centuries. And, fifth, that the \"Latter-Day Saints\" are the chosen of the Lord, into whose hands shall presently be given all power and dominion. This is the sum and substance of the claims of the Mormons. The Apostles of the sect labor diligently to impress the conviction that the miraculous circumstances attendant upon the discovery of the golden plates, are no more wonderful or inexplicable than the miracles recorded in the accepted version of the common Bible, and argue earnestly the divine origin of their own historical record. These are the main facts on the Mormon side of the story. Let us turn to the Gentile version, and produce the testimony which appears more probable, and which accounts more naturally for the origin of the \"Book of Mormon.\"",
        "II. What are the proofs to establish the human origin of the \"Book of Mormon?\"",
        "About the year 1809, the Reverend SOLOMON SPAULDING, a clergyman who had graduated from Dartmouth College, and settled in the town of Cherry Valley, in the State of New York, removed from that place to New Salem, Ashtabula county, Ohio. MR. SPAULDING was an enthusiastic archaologist. The region to which he removed was rich in American antiquities. The mounds and fortifications, which have puzzled the brains of many patient explorers, attracted his attention, and he accepted the theory that the American continent was peopled by a colony of the ancient Israelites. The ample material by which he was surrounded, full of mythical interest and legendary suggestiveness, led him to the conception of a curious literary project. He set himself the task of writing a fictitious history of the race which had built the mounds. The work was commenced, and progressed slowly for some time. Portions of it were read by MR. SPAULDING's friends, as its different sections were completed, and after three years' labor, the volume was sent to the press, bearing the title of the \"Manuscript Found.\" MR. SPAULDING had removed to Pittsburg, Pa., before his book received the final revision, and it was in the hands of a printer named PATTERSON, in that city, that the manuscript was placed with a view to publication. This was in the year 1812. The printing, however, was delayed, in consequence of a difficulty about the contract, until MR. SPAULDING left Pittsburg and went to Amity, Washington county, New York, where, in 1816, he died. The manuscript seems to have lain unused during this interval. But in the employ of the printer PATTERSON was a versatile genius, one SIDNEY RIGDON, to whom no trade came amiss, and who happened at the time to be a journeyman at work with PATTERSON. Disputations on questions of theology were the peculiar delight of RIGDON, and the probable solution of the mystery of the \"Book of Mormon,\" is found in the fact that, by this man's agency, information of the existence of the fictitious record was first communicated to JOSEPH SMITH. SMITH's family settled in Palmyra, New York, about the year 1815, and removed subsequently to Ontario county, where Joseph became noted for supreme cunning and general shiftlessness. Chance threw him in the company of RIGDON, soon after SPAULDING'S manuscript fell under the eye of the erratic journeyman, and it is probable that the plan of founding a new system of religious imposture was concocted by these two shrewd and unscrupulous parties. The fact that the style of the \"Book of Mormon\" so closely imitates that of the received version of the Bible, a point which seems to have been constantly kept in view by MR. SPAULDING, probably in order to invest the fiction with a stronger character of reality, answered admirably for the purposes of RIGDON and SMITH. Superstition readily embraces any thing which has a show of reality, especially if it be sustained by a sanction apparently divine; and the success of this remarkable literary imposture, is not more wonderful than the devotion of the Mohammedan to the Koran, which, like the \"Book of Mormon,\" is accepted as the standard of a religious faith. The Millerite fanaticism was less marked, but found not less earnest followers.",
        "The facts of the anti-Mormon side of the question, established by evidence which bears upon its face indications of probability, thus offset the Mormon version of the origin of the \"Golden Bible;\" and additional proof is furnished in the letter addressed by PROF. ANTHON of New York to Mr. Howe, in February, 1834. The Professor was appealed to for a verification of the reports concerning his examinaton of the plates purporting to have been found in Cumorah, and he replied as follows:- New Yonк, February 17th, 1834.",
        "DEAR SIR, I received your letter of the 9th, and lose no time in making a reply. The whole story about my pronouncing the Mormon inscription to be reformed Egyptian hieroglyphics' is perfectly false. Some years ago, a plain, apparently simple-hearted farmer called on me with a note from Dr. Mitchell, of our city, now dead, requesting me to decipher, if possible, the paper which the farmer would hand me. Upon examining the paper in question, I soon came to the conclusion that it was all a trick-perhaps a hoax. When I asked the person who brought it how he obtained the writing, he gave me the following account: A gold book,' consisting of a number of plates fastened together by wires of the same material, had been dug up in the northern part of the State of New York, and along with it an enormous pair of spectacles!' These spectacles were so large, that, if any person attempted to look through them, his two eyes would look through one glass only, the spectacles in question being altogether too large for the human face. Whoever,' he said examined the plates through the glasses, was enabled not only to read them, but fully to understand their meaning.\" All this knowledge, however, was confined to a young man, who had the trunk containing the book and spectacles in his sole possession. This young man was placed behind a curtain, in a garret in a farm-house, and being thus concealed from view, he put on the spectacles occasionally, or, rather, looked through one of the glasses, deciphered the characters in the book, and having committed some of them to paper, handed copies from behind the curtain to those who stood outside. Not a word was said about their being deciphered by the gift of God.' Every thing in this way was effected by the large pair of spectacles. The farmer added, that he had been requested to contribute a sum of money toward the publication of the Golden Book, the contents of which would, as he was told, produce an entire change in, the world, and save it from ruin. So urgent had been these solicitations, that he intended selling his farm, and giving the amount to those who wished to publish the plates. As a last precautionary step, he had resolved to come to New York, and obtain the opinion of the learned about the meaning of the paper which he had brought with him, and which had been given him as part of the contents of the book, although no translation had at that time been made by the young man with the spectacles. On hearing this odd story, I changed my opinion about the paper, and instead of viewing it any longer as a hoax, I began to regard it as part of a scheme to cheat the former of his money, and I communicated my suspicions to him, warning him to beware of rogues. He requested an opinion from me in writing, which, of course, I declined to give, and he then took his leave, taking his paper with him.",
        "This paper in question was, in fact, a singular scroll. It consisted of all kinds of singular characters, disposed in columns, and had evidently been prepared by some person who had before him at the time a book containing various alphabets, Greek and Hebrew letters, crosses, and flourishes; Roman letters inverted, or placed sideways, were arranged and placed in perpendicular columns; and the whole ended in a rude delineation of a cirele, divided into various compartments, arched with various strange marks, and evidently copied after the Mexican calendar, given by Humboldt, but copied in such a way as not to betray the source whence it was derived. I am thus particular as to the contents of the paper, inasmuch as I have frequently conversea with my friends on the subject since the Mormon excitement began, and well remember that the paper contained any thing else but Egyptian hieroglyphics.",
        "Some time after, the farmer paid me a second visit. He brought with him the gold book,' in print, and offered it to me for sale. I declined purchasing. He then asked permission to leave the book with me for examination. I declined receiving it, although his manner was strangely urgent. I adverted once more to the roguery which, in my opinion, had been practised upon him, and asked him what had become of the gold plates. He informed me that they were in a trunk with the spectacles. I advised him to go to a magistrate and have the trunk examined. He said 'the curse of God would come upon him if he did.' On my pressing him, however, to go to a magistrate, he told me he would open the trunk if I would take the curse of God' upon myself. I replied I would do so with the greatest willingness, and would incur every risk of that nature, provided I could only extricate him from the grasp of the rogues. He then left me. I have given you a full statement of all that I know respecting the origin of Mormonism, and must beg you, as a personal favor, to publish this letter immediately, should you find my name mentioned again by these wretched fanatics.",
        "Yours respectfully,",
        "CHARLES ANTHON",
        "",
        "In presenting to the public a new Edition of the \"Book of Mormon\", we have thus placed side by side the stories of its origin, pro and con. The reader will decide for himself from the record we have given. Considered simply as a literary curiosity, the work is worthy of preservation; but when regarded as the accepted groundwork of the religious faith of a people whose growth has been most extraordinary, and whose fanaticism is an astonishing phenomenon in psychology, the book has more than a mere ephemeral interest.",
      ],
  }
  removeChapterText(chapter);
  removeChapterAudio(chapter);

  addChapterText(chapter);
  addChapterAudio(chapter);
  */
// 5-12

/*
  chapter = {
      id: "nr-intro-title-page-en",
      title: "Title Page",
      subTitle: "As translated from the record.",
      parent: "nr-introduction-en",
      order: 4,
      visible: true
  }
  addChapter(chapter);
  chapter = {
      id: "nr-intro-title-page-en",
      title: "Title Page",
      subTitle: "As translated from the record.",
      parent: "nr-introduction-en",
      order: 4,
      visible: true,
      previousChapter: "nr-intro-intro-en",
      followingChapter: "nr-intro-witnesses-en",
      content: [
        "THE BOOK OF MORMON",
        "AN ACCOUNT WRITTEN BY THE HAND OF MORMON UPON PLATES TAKEN FROM THE PLATES OF NEPHI.",
        "Wherefore, it is an abridgment of the record of the people of Nephi, and also of the Lamanites; written to the Lamanites, who are a remnant of the house of Israel; and also to Jew and Gentile; written by way of commandment, and also by the spirit of prophecy and of revelation. Written, and sealed up, and hid up unto the Lord, that they might not be destroyed; to come forth by the gift and power of God unto the interpretation thereof; sealed by the hand of Moroni, and hid up unto the Lord, to come forth in due time by the way of Gentile; the interpretation thereof by the gift of GOD.",
        "An abridgment taken from the book of Ether: also, which is a record of the people of Jared; who were scattered at the time the LORD confounded the language of the people, when they were building a tower to get to heaven: which is to shew unto the remnant of the house of Israel what great things the LORD hath done for their fathers; and that they may know the covenants of the LORD, that they are not cast off forever; and also to the convincing of the Jew and Gentile that Jesus is the Christ, the ETERNAL GOD, manifesting himself unto all nations. And now if there are faults, they are the mistakes of men; wherefore, condemn not the things of God, that you may be found spotless at the judgment seat of Christ.",
        "MORONI",
      ],
  }
  //removeChapterText(chapter);
  //removeChapterAudio(chapter);
  addChapterText(chapter);
  addChapterAudio(chapter);
*/
 // 13
/*

  chapter = {
      id: "nr-intro-witnesses-en",
      title: "The Witnesses",
      subTitle: "Statement of the 3 witnesses and of the 8 witnesses.",
      parent: "nr-introduction-en",
      order: 5,
      visible: true
  }
  addChapter(chapter);
*/

  chapter = {
      id: "nr-intro-witnesses-en",
      title: "The Witnesses",
      subTitle: "Statement of the 3 witnesses and of the 8 witnesses.",
      parent: "nr-introduction-en",
      order: 5,
      visible: true,
      previousChapter: "nr-intro-title-page-en",
      followingChapter: "nr-nephi-1-en",
      content: [
        "THE TESTIMONY OF THREE WITNESSES",
        "Be it known unto all nations, kindreds, tongues, and people, unto whom this work shall come, that we, through the grace of God the Father, and our Lord Jesus Christ, have seen the plates which contain this record, which is a record of the people of Nephi, and also of the Lamanites, their brethren, and also of the people of Jared, who came from the tower of which hath been spoken; and we also know that they have been translated by the gift and power of God, for his voice hath declared it unto us; wherefore we know of a surety, that the work is true. And we also testify that we have seen the engravings which are upon the plates; and they have been shewn unto us by the power of God, and not of man. And we declare with words of soberness, that an angel of God came down from heaven, and he brought and laid before our eyes, that we beheld and saw the plates, and the engravings thereon; and we know that it is by the grace of God the Father, and our Lord Jesus Christ, that we beheld and bear record that these things are true; and it is marvelous in our eyes, nevertheless, the voice of the Lord commanded us that we should bear record of it; wherefore, to be obedient unto the commandments of God, we bear testimony of these things. And we know that if we are faithful in Christ, we shall rid our garments of the blood of all men, and be found spotless before the judgment seat of Christ, and shall dwell with him eternally in the heavens. And the honor be to the Father, and to the Son, and to the Holy Ghost, which is one God. Amen.",
        "OLIVER COWDERY,",
        "DAVID WHITMER,",
        "MARTIN HARRIS.",
        "",
        "AND ALSO THE TESTIMONY OF EIGHT WITNESSES",
        "Be it known unto all nations, kindreds, tongues, and people, unto whom this work shall come, that Joseph Smith, Jr., the translator of this work, has shown unto us the plates of which hath been spoken, which have the appearance of gold; and as many of the leaves as the said Smith has translated, we did handle with our hands: and we also saw the engravings thereon, all of which has the appearance of ancient work, and of curious workmanship. And this we bear record with words of soberness, that the said Smith has shown unto us, for we have seen and hefted, and know of a surety, that the said Smith has got the plates of which we have spoken. And we give our names unto the world to witness unto the world that which we have seen; and we lie not, God bearing witness of it.",
        "CHRISTIAN WHITMER,",
        "JACOB WHITMER,",
        "PETER WHITMER, JR.,",
        "JOHN WHITMER,",
        "HIRAM PAGE,",
        "JOSEPH SMITH, SEN,",
        "HYRUM SMITH,",
        "SAMUEL H. SMITH."
      ],
  }
//  removeChapterText(chapter);
//  removeChapterAudio(chapter);
  addChapterText(chapter);
  addChapterAudio(chapter);

/*

  book = {
    id: "the-nephite-record-en",
    title: "The Nephite Record",
    subTitle: "1844 Text",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/the-nephite-record-thumbnail-2.jpg",
    thumbnailTitle: "Nephite Record",
    isParent: true,
    hasChildBooks: true,
    order: 1,
    parent: "",
    visible: true,
    language: "en",

  }
  addBook(book);

  book = {
    id: "nr-introduction-en",
    title: "Introduction",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/intro-thumbnail.jpg",
    thumbnailTitle: "Intro",
    isParent: false,
    hasChildBooks: false,
    order: 1,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-intro-title-page-en",
    title: "Title Page",
    subTitle: "",
    order: 1,
    parent: "nr-introduction-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-intro-three-witnesses-en",
    title: "The Three Witnesses",
    subTitle: "",
    order: 2,
    parent: "nr-introduction-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-intro-eight-witnesses-en",
    title: "The Eight Witnesses",
    subTitle: "",
    order: 3,
    parent: "nr-introduction-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-1-nephi-en",
    title: "The First Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/1-nephi-thumbnail.jpg",
    thumbnailTitle: "1 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 2,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-1-nephi-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-1-nephi-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-1-nephi-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-2-nephi-en",
    title: "The Second Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/2-nephi-thumbnail.jpg",
    thumbnailTitle: "2 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 3,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-2-nephi-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-2-nephi-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-29-en",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-30-en",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-31-en",
    title: "Chapter 31",
    subTitle: "",
    order: 31,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-32-en",
    title: "Chapter 32",
    subTitle: "",
    order: 32,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-33-en",
    title: "Chapter 33",
    subTitle: "",
    order: 33,
    parent: "nr-2-nephi-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-jacob-en",
    title: "The Book of Jacob",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/jacob-thumbnail.jpg",
    thumbnailTitle: "Jacob",
    isParent: false,
    hasChildBooks: false,
    order: 4,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);


  chapter = {
    id: "nr-jacob-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-jacob-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-enos-en",
    title: "The Book of Enos",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/enos-thumbnail.jpg",
    thumbnailTitle: "Enos",
    isParent: false,
    hasChildBooks: false,
    order: 5,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-enos-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-enos-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-jarom-en",
    title: "The Book of Jarom",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/jarom-thumbnail.jpg",
    thumbnailTitle: "Jarom",
    isParent: false,
    hasChildBooks: false,
    order: 6,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-jarom-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-jarom-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-omni-en",
    title: "The Book of Omni",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/omni-thumbnail.jpg",
    thumbnailTitle: "Omni",
    isParent: false,
    hasChildBooks: false,
    order: 7,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",

  }
  addBook(book);

  chapter = {
    id: "nr-omni-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-omni-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-words-of-mormon-en",
    title: "Words of Mormon",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/words-of-mormon-thumbnail.jpg",
    thumbnailTitle: "Words of Mormon",
    isParent: false,
    hasChildBooks: false,
    order: 8,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);


  chapter = {
    id: "nr-words-of-mormon-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-words-of-mormon-en",
    visible: true
  }

  addChapter(chapter);


  book = {
    id: "nr-mosiah-en",
    title: "The Book of Mosiah",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/mosiah-thumbnail.jpg",
    thumbnailTitle: "Mosiah",
    isParent: false,
    hasChildBooks: false,
    order: 9,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-mosiah-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-mosiah-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-29-en",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-mosiah-en",
    visible: true
  }
  addChapter(chapter);
  


  book = {
    id: "nr-alma-en",
    title: "The Book of Alma",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/alma-thumbnail.jpg",
    thumbnailTitle: "Alma",
    isParent: false,
    hasChildBooks: false,
    order: 10,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",

  }
  addBook(book);

  chapter = {
    id: "nr-alma-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-alma-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-29-en",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-30-en",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-31-en",
    title: "Chapter 31",
    subTitle: "",
    order: 31,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-32-en",
    title: "Chapter 32",
    subTitle: "",
    order: 32,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-33-en",
    title: "Chapter 33",
    subTitle: "",
    order: 33,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-34-en",
    title: "Chapter 34",
    subTitle: "",
    order: 34,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-35-en",
    title: "Chapter 35",
    subTitle: "",
    order: 35,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-36-en",
    title: "Chapter 36",
    subTitle: "",
    order: 36,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-37-en",
    title: "Chapter 37",
    subTitle: "",
    order: 37,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-38-en",
    title: "Chapter 38",
    subTitle: "",
    order: 38,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-39-en",
    title: "Chapter 39",
    subTitle: "",
    order: 39,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-40-en",
    title: "Chapter 40",
    subTitle: "",
    order: 40,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-41-en",
    title: "Chapter 41",
    subTitle: "",
    order: 41,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-42-en",
    title: "Chapter 42",
    subTitle: "",
    order: 42,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-43-en",
    title: "Chapter 43",
    subTitle: "",
    order: 43,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-44-en",
    title: "Chapter 44",
    subTitle: "",
    order: 44,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-45-en",
    title: "Chapter 45",
    subTitle: "",
    order: 45,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-46-en",
    title: "Chapter 46",
    subTitle: "",
    order: 46,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-47-en",
    title: "Chapter 47",
    subTitle: "",
    order: 47,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-48-en",
    title: "Chapter 48",
    subTitle: "",
    order: 48,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-49-en",
    title: "Chapter 49",
    subTitle: "",
    order: 49,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-50-en",
    title: "Chapter 50",
    subTitle: "",
    order: 50,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-51-en",
    title: "Chapter 51",
    subTitle: "",
    order: 51,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-52-en",
    title: "Chapter 52",
    subTitle: "",
    order: 52,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-53-en",
    title: "Chapter 53",
    subTitle: "",
    order: 53,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-54-en",
    title: "Chapter 54",
    subTitle: "",
    order: 54,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-55-en",
    title: "Chapter 55",
    subTitle: "",
    order: 55,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-56-en",
    title: "Chapter 56",
    subTitle: "",
    order: 56,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-57-en",
    title: "Chapter 57",
    subTitle: "",
    order: 57,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-58-en",
    title: "Chapter 58",
    subTitle: "",
    order: 58,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-59-en",
    title: "Chapter 59",
    subTitle: "",
    order: 59,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-60-en",
    title: "Chapter 60",
    subTitle: "",
    order: 60,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-61-en",
    title: "Chapter 61",
    subTitle: "",
    order: 61,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-62-en",
    title: "Chapter 62",
    subTitle: "",
    order: 62,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-63-en",
    title: "Chapter 63",
    subTitle: "",
    order: 63,
    parent: "nr-alma-en",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-helaman-en",
    title: "The Book of Helaman",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/helaman-thumbnail.jpg",
    thumbnailTitle: "Helaman",
    isParent: false,
    hasChildBooks: false,
    order: 11,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);
  chapter = {
    id: "nr-helaman-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-helaman-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-helaman-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-helaman-en",
    visible: true
  }
  addChapter(chapter);

  
  book = {
    id: "nr-3-nephi-en",
    title: "The Third Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/3-nephi-thumbnail.jpg",
    thumbnailTitle: "3 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 12,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-3-nephi-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-3-nephi-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-16-en",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-17-en",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-18-en",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-19-en",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-20-en",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-21-en",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-22-en",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-23-en",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-24-en",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-25-en",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-26-en",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-27-en",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-28-en",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-29-en",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-30-en",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-3-nephi-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-4-nephi-en",
    title: "The Fourth Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/4-nephi-thumbnail.jpg",
    thumbnailTitle: "4 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 13,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-4-nephi-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-4-nephi-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-mormon-en",
    title: "The Book of Mormon",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/mormon-thumbnail.jpg",
    thumbnailTitle: "Mormon",
    isParent: false,
    hasChildBooks: false,
    order: 14,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);

  chapter = {
    id: "nr-mormon-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-mormon-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-mormon-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-ether-en",
    title: "The Book of Ether",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/ether-thumbnail.jpg",
    thumbnailTitle: "Ether",
    isParent: false,
    hasChildBooks: false,
    order: 15,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",

  }
  addBook(book);

  chapter = {
    id: "nr-ether-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-ether-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-11-en",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-12-en",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-13-en",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-14-en",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-15-en",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-ether-en",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-moroni-en",
    title: "The Book of Moroni",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/moroni-thumbnail.jpg",
    thumbnailTitle: "Moroni",
    isParent: false,
    hasChildBooks: false,
    order: 16,
    parent: "the-nephite-record-en",
    visible: true,
    language: "en",
  }
  addBook(book);


    chapter = {
    id: "nr-moroni-1-en",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-moroni-2-en",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-3-en",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-4-en",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-5-en",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-6-en",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-7-en",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-8-en",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-9-en",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-10-en",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-moroni-en",
    visible: true
  }
  addChapter(chapter);
*/

/*
  book = {
    id: "the-oral-torah-en",
    title: "The Oral Torah",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/the-oral-torah-2.jpg",
    thumbnailTitle: "Oral Torah",
    isParent: true,
    hasChildBooks: true,
    order: 3,
    parent: "",
    visible: false,
    language: "en",
  }
  addBook(book);
*/

    res.send("Nephite Record Added");
});

module.exports = nephiteRecord;