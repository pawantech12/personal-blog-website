import author1 from "../images/suravi.webp";
import author2 from "../images/harini.webp";
import author3 from "../images/biswajit.webp";
import author4 from "../images/ishan.webp";
import author5 from "../images/Apurba.webp";

// blog post img
import girlImg from "../images/girl-waring-woolen-sawl.webp";
import girlImg2 from "../images/girl-standing-by-wall.webp";
import travelImg from "../images/window-blue-wall.webp";
import techImg from "../images/yellow-camera.webp";
import foodImg from "../images/foot-platter.webp";

const AuthorData = [
  {
    name: "Surabhi Gupta",
    location: "Kerala",
    posts: 5,
    desc: "Front end developer by profession. Digital painting enthusiast. Shealso involved in various social activity. Fan of winter and snow.",
    img: author1,
  },
  {
    name: "Harini Banerjee",
    location: "Mumbai",
    posts: 4,
    desc: "Harini Banerjee is an award-winning young blogger and content marketer. She also sings sometimes. Frequent traveler, cricket fan, and technology enthusiast.",
    img: author2,
  },
  {
    name: "Biswajit Saha",
    location: "India",
    posts: 4,
    desc: "Biswajit Saha is a very simple person. He likes to ride a bicycle when free. Prefers tea over coffee. He is currently writing code at gbjsolution.com",
    img: author3,
  },
  {
    name: "Ishan Sharma",
    location: "Delhi",
    posts: 3,
    desc: "Ishan is back end developer by profession and writer by passion. He writes science fiction novels and short story mostly for children. He is the always smiling person.",
    img: author4,
  },
  {
    name: "Apurba Talukdar",
    location: "Bangalore",
    posts: 3,
    desc: "Apurba is UI & UX designer by profession, photographer by passion. Solo traveller, blogger, badminton player and movie lover.",
    img: author5,
  },
];

const BlogPosts = [
  {
    img: girlImg,
    tag: "LifeStyle",
    title: "Self-observation is the first step of inner unfolding",
    desc: "Almost instantly the whole truth of the transaction seemed to rush upon her mind, and her wrath was inconceivably violent. She asked me a thousand questions in a",
    date: "March 16, 2022",
    posttype: "feature",
  },
  {
    img: girlImg2,
    tag: "Health",
    title:
      "The mind and body are not separate. what affects one, affects the other",
    desc: "This recital put the Captain into an ecstasy; he went from the lady to the gentleman, and from the gentleman to the lady, to enjoy alternately the sight of their distress",
    date: "February 16, 2022",
    posttype: "feature",
  },
  {
    img: travelImg,
    tag: "Travel",
    title: "Never let your memories be greater than your dreams",
    desc: "Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The",
    date: "March 16, 2022",
    posttype: "latest",
  },
  {
    img: techImg,
    tag: "Technology",
    title: "Bangladesh has developed plastic alternative using jute",
    desc: "Dr. Johnson, as usual, spoke contemptuously of Colley Cibber. 'It is wonderful that a man, who for forty years had lived with the great and the witty, should have acquired",
    date: "March 16, 2022",
    posttype: "latest",
  },
  {
    img: foodImg,
    tag: "Food",
    title: "I do not stick to rules when cooking. I rely on my imagination",
    desc: "I walked down to the station with them, and then wandered through the streets of the little town, finally returning to the hotel, where I lay upon the sofa and tried to",
    date: "March 16, 2022",
    posttype: "latest",
  },
];

export default { AuthorData, BlogPosts };
