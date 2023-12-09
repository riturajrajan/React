import { useDispatch } from "react-redux";
import { toggelMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggelMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getAutoSuggestion();
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getAutoSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
  };

  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png"
          className="h-10 w-14 cursor-pointer"
          onClick={() => handleToggle()}
        />
        <Link to="/">
          <img
            className="h-10 w-20"
            src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"
          />
        </Link>
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-400 p-1 rounded-l-full w-6/12"
          />
          <button className="border border-gray-400 p-1 rounded-r-full">
            Search
          </button>
        </div>
        <div className="fixed bg-gray-100 rounded">
          <ul>
            {suggestion.map(s => (<li className="m-2 p-2" key={s}>{s}</li>))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          className="w-8"
        />
      </div>
    </div>
  );
};

export default Head;
