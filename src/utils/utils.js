import pic1 from "../images/pic__1.png";
import pic2 from "../images/pic__2.png";
import pic3 from "../images/pic__3.png";
import pic4 from "../images/pic__4.png";
import pic5 from "../images/pic__5.png";
import pic6 from "../images/pic__6.png";
import pic7 from "../images/pic__7.png";
import pic8 from "../images/pic__8.png";
import pic9 from "../images/pic__9.png";
import pic10 from "../images/pic__10.png";
import pic11 from "../images/pic__11.png";
import pic12 from "../images/pic__12.png";

const checkPath = useLocation().pathname === "/f";
const testMoviesCards = [
  {
    nameRU: "33 слова о дизайне",
    image: { url: pic1 },
    duration: "1ч 47м",
  },

  {
    nameRU: "Киноальманах «100 лет дизайна»",
    image: { url: pic2 },
    duration: "1ч 3м",
  },

  {
    nameRU: "В погоне за Бенкси",
    image: { url: pic3 },
    duration: "1ч 42м",
  },

  {
    nameRU: "Баския: Взрыв реальности",
    image: { url: pic4 },
    duration: "1ч 21м",
  },

  {
    nameRU: "Бег это свобода",
    image: { url: pic5 },
    duration: "1ч 59м",
  },

  {
    nameRU: "Книготорговцы",
    image: { url: pic6 },
    duration: "1ч 42м",
  },

  {
    nameRU: "Когда я думаю о Германии ночью",
    image: { url: pic7 },
    duration: "1ч 10м",
  },

  {
    nameRU: "Gimme Danger: История Игги и The Stooge...",
    image: { url: pic8 },
    duration: "1ч 4м",
  },

  {
    nameRU: "Дженис: Маленькая девочка грустит",
    image: { url: pic9 },
    duration: "1ч 7м",
  },

  {
    nameRU: "Соберись перед прыжком",
    image: { url: pic10 },
    duration: "1ч 7м",
  },

  {
    nameRU: "Соберись перед прыжком",
    image: { url: pic11 },
    duration: "1ч 7м",
  },

  {
    nameRU: "Соберись перед прыжком",
    image: { url: pic12 },
    duration: "1ч 7м",
  },
];

export default testMoviesCards;
