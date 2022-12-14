import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiWeKnow = {
    "ðĨš": "Pleading Face",
    "ðĨ°": "Smiling Face with Hearts",
    "ð": "Smiling Face with Smiling Eyes",
    "ð": "Grinning Face",
    "ð": "Grinning Squinting Face",
    "ð": "Winking Face with Tongue",
    "ðĪ": " Smiling Face with Open Hands",
    "ðĪ": " Thinking Face",
    "ðĪŦ": "Shushing Face",
    "ðŊ": "Hushed Face",
    "ðĪŠ": "Zany Face",
    "ð": "Grinning Face with Sweat"
  };
  var emojiArray = Object.keys(emojiWeKnow);
  var [meaning, setmeaning] = useState("");

  function inputEventHandler(e) {
    let emoji = e.target.value;
    emoji = emoji.trim(" "); //remove extra space added in emoji
    var currentMeaning = emojiWeKnow[emoji];
    if (currentMeaning === undefined) {
      currentMeaning = "we do not have thi in our database";
    }
    setmeaning(currentMeaning);
  }

  function emojoClickEventHandler(emoji) {
    setmeaning(emojiWeKnow[emoji]);
  }
  return (
    <div className="App">
      <h1 id="heading">inside outttt</h1>
      <input
        placeholder="put an emoji here to know the meaning of it"
        onChange={(event) => inputEventHandler(event)}
        style={{
          fontSize: "1.5rem",
          padding: "0.5rem",
          cursor: "pointer",
          width: "80%"
        }}
      />
      <p id="meaning">{meaning}</p>
      <div
        style={{
          maxWidth: "50%",
          margin: "auto"
        }}
      >
        {emojiArray.map((item) => {
          return (
            <span
              key={item}
              onClick={() => emojoClickEventHandler(item)}
              style={{
                marginLeft: "0.7rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
