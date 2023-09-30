import { useState, useContext } from "react";
import styles from "./SearchBar.module.css";
import { SearchContext } from "./SearchContext";
import { Link } from "react-router-dom";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

export function SearchBar(props: any) {
  const { performSearch } = useContext(SearchContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState({ lat: 0, lng: 0 });
  const viewData = (...data: any[]) => {
    geocodeByAddress(data[0].label)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        props.setNewCoords(latLng);
        setLocationQuery(latLng);
      });
  };

  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <p className="control is-expanded">
            <input
              className={`input is-medium is-desktop ${styles["input-control"]}`}
              type="text"
              placeholder="🔍  Doctor, specialty, procedure..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </p>
        </div>
        <div className="field is-grouped">
          <p
            className={`${styles["css-yk16xz-control"]} ${styles["input-control"]} control is-expanded`}
          >
            <GooglePlacesAutocomplete
              apiKey={`${process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE}`}
              autocompletionRequest={{
                types: ["geocode"],
              }}
              selectProps={{
                locationQuery,
                onChange: viewData,
                placeholder: "📍 City, state, or zip code...",
                initialValue: "Atlanta",
              }}
            />
          </p>
          <p className="control">
            <button
              type="submit"
              className={`button is-medium ${styles["search-button"]}`}
            >
              <Link
                to="/search"
                onClick={() => performSearch(searchQuery, locationQuery)}
              >
                <span className="white-text">Find Care</span>
              </Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
