import React, { useState } from "react";
import downArrow from "./../images/downArrow.png";
import homeIcon from "./../images/homeIcon.png";

const defaultUrl = "https://www.pja.edu.pl/";

const WindowBrowser = () => {
  const [url, setUrl] = useState(defaultUrl);
  const [searchBarText, setSearchBarText] = useState(url);
  return (
    <div className="browserContainer">
      <div>
        <div className="actionMenu">
          <button
            onClick={() => {
              // Go back to defaults
              setUrl(defaultUrl);
              setSearchBarText(defaultUrl);
            }}
          >
            <img src={homeIcon} className="icon" />
          </button>

          <button>
            <img src={downArrow} className="icon" />
          </button>

          <button>
            <img src={downArrow} className="icon" />
          </button>

          <button>
            <img src={downArrow} className="icon" />
          </button>

          <button>
            <img src={downArrow} className="icon" />
          </button>

          <button>
            <img src={downArrow} className="icon" />
          </button>
        </div>

        <form
          className="searchBar"
          onSubmit={() => {
            if (
              searchBarText.substring(0, 12) !== "https://www." &&
              searchBarText.substring(0, 4) !== "www."
            ) {
              setUrl("https://www." + searchBarText);
              setSearchBarText("https://www." + searchBarText);
            } else if (searchBarText.substring(0, 7) !== "https://") {
              setUrl("https://" + searchBarText);
              setSearchBarText("https://" + searchBarText);
            } else {
              setUrl(searchBarText);
            }
            event.preventDefault();
          }}
        >
          <label>
            Address:
            <input
              type="text"
              value={searchBarText}
              onChange={event => {
                setSearchBarText(event.target.value);
              }}
            />
          </label>
          <button type="submit">
            <img className="icon" src={downArrow} />
          </button>
        </form>
      </div>
      <iframe src={url} key={url}>
        <base target="_parent" />
      </iframe>
    </div>
  );
};

export default WindowBrowser;
