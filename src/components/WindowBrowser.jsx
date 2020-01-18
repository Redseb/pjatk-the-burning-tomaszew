import React, { useState } from "react";
import downArrow from "./../images/downArrow.png";

const defaultUrl = "https://www.pja.edu.pl/";

const WindowBrowser = () => {
  const [url, setUrl] = useState(defaultUrl);
  const [searchBarText, setSearchBarText] = useState(url);
  return (
    <div className="browserContainer">
      <div>
        <form
          className="searchBar"
          onSubmit={() => {
            setUrl(searchBarText);
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
            <img className="system-bar-icon" src={downArrow} />
          </button>
        </form>
      </div>
      <iframe src={url} key={url} height={500} width={800}>
        <base target="_parent" />
      </iframe>
    </div>
  );
};

export default WindowBrowser;
