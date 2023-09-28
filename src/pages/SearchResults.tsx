import React, { Provider, useContext, useState } from "react";
import { SearchResultCard } from "../components/SearchResultCard";
import styles from "./SearchResults.module.css";
import { SearchContext } from "../components/SearchContext";
import SimpleMap from "../components/Map";
import ProviderResponse from "../models/provider-response";

// interface IProps {
//   results: Info[];
// }
// this is the api data sent back
//const searchResults = useContext(SearchContext);

// commenting this out bc backend api doesnt work, uncomment when back running
// function* generator() {
//   var i = 1;

//   while (true) {
//     yield i;
//     i++;
//   }
// }

// export function SearchResults(props: any) {
//   const { searchResults } = useContext(SearchContext);

//   const renderList = (): JSX.Element[] => {
//     var gen = generator();
//     return searchResults.map((result) => {
//       const count = gen.next().value;
//       console.log(count);
//       return (
//         <li key={result.id} className="searchResultsList">
//           <SearchResultCard result={result} count={count} />
//         </li>
//       );
//     });
//   };

// this is for static results until backend api is restored

// export interface Info {
//   name: string;
//   avgReview: string;
//   specialty: string;
//   id: number;
// }

function* generator() {
  var i = 1;

  while (true) {
    yield i;
    i++;
  }
}

export function SearchResults(props: any) {
  const { searchResults } = useContext(SearchContext);

  const [results, setResults] = useState<ProviderResponse[]>([
    {
      id: 1,
      fullName: "Drew Fuller",
      otherNames: [],
      pronouns: "she/her",
      titles: ["MD", "MPH"],
      specialties: ["Psychology"],
      languages: ["English"],
      services: ["Medication Management"],
      remoteVisits: true,
      slidingScalePay: true,
      avgRating: "4.9",
      locations: [
        {
          id: 1,
          locationName: "Family Psychiatry",
          locationTypes: [],
          googleMapsUrl: "https://maps.app.goo.gl/auZNvVgVepRuZLm28",
          locationUrl: "753 N 35th St Suite 311, Seattle, WA 98103",
          latitude: "47.649920",
          longitude: "-122.347740",
          phone: "555-555-5555",
          address: "753 N 35th St Suite 311, Seattle, WA 98103",
          googlePlaceId: "string",
          providers: [],
          locationPoint: {
            type: "Point",
            coordinates: [47.64992, -122.34774],
          },
        },
      ],
      reviews: [],
    },
    {
      id: 2,
      fullName: "Ham",
      otherNames: [],
      pronouns: "they/them",
      titles: ["MD", "MPH"],
      specialties: ["Psychology"],
      languages: ["English"],
      services: ["Medication Management"],
      remoteVisits: true,
      slidingScalePay: true,
      avgRating: "4.5",
      locations: [
        {
          id: 1,
          locationName: "Family Psychiatry",
          locationTypes: [],
          googleMapsUrl: "https://maps.app.goo.gl/auZNvVgVepRuZLm28",
          locationUrl: "753 N 35th St Suite 311, Seattle, WA 98103",
          latitude: "47.649920",
          longitude: "-122.347740",
          phone: "555-555-5555",
          address: "753 N 35th St Suite 311, Seattle, WA 98103",
          googlePlaceId: "string",
          providers: [],
          locationPoint: {
            type: "Point",
            coordinates: [47.64992, -122.34774],
          },
        },
      ],
      reviews: [],
    },
    {
      id: 1,
      fullName: "POGIMON",
      otherNames: [],
      pronouns: "HIM",
      titles: ["Cutie", "Pie"],
      specialties: ["Psychology"],
      languages: ["English"],
      services: ["Medication Management"],
      remoteVisits: true,
      slidingScalePay: true,
      avgRating: "5",
      locations: [
        {
          id: 1,
          locationName: "Family Psychiatry",
          locationTypes: [],
          googleMapsUrl: "https://maps.app.goo.gl/auZNvVgVepRuZLm28",
          locationUrl: "753 N 35th St Suite 311, Seattle, WA 98103",
          latitude: "47.649920",
          longitude: "-122.347740",
          phone: "555-555-5555",
          address: "753 N 35th St Suite 311, Seattle, WA 98103",
          googlePlaceId: "string",
          providers: [],
          locationPoint: {
            type: "Point",
            coordinates: [47.64992, -122.34774],
          },
        },
      ],
      reviews: [],
    },
    {
      id: 1,
      fullName: "POGIMON",
      otherNames: [],
      pronouns: "HIM",
      titles: ["Cutie", "Pie"],
      specialties: ["Psychology"],
      languages: ["English"],
      services: ["Medication Management"],
      remoteVisits: true,
      slidingScalePay: true,
      avgRating: "5",
      locations: [
        {
          id: 1,
          locationName: "Family Psychiatry",
          locationTypes: [],
          googleMapsUrl: "https://maps.app.goo.gl/auZNvVgVepRuZLm28",
          locationUrl: "753 N 35th St Suite 311, Seattle, WA 98103",
          latitude: "47.649920",
          longitude: "-122.347740",
          phone: "555-555-5555",
          address: "753 N 35th St Suite 311, Seattle, WA 98103",
          googlePlaceId: "string",
          providers: [],
          locationPoint: {
            type: "Point",
            coordinates: [47.64992, -122.34774],
          },
        },
      ],
      reviews: [],
    },
  ]);

  const renderList = (): JSX.Element[] => {
    var gen = generator();
    return results.map((result) => {
      const count = gen.next().value;
      console.log(count);
      return (
        <li key={result.id} className="searchResultsList">
          <SearchResultCard result={result} count={count} />
        </li>
      );
    });
  };

  return (
    <div className="columns">
      {/* add search summary results component */}
      <div className="column is-two-fifths is-offset-1">
        <article className={styles["search-results-list"]}>
          <ul className={styles["search-results-list"]}>{renderList()}</ul>
        </article>
      </div>
      <div className="column is-flexible">
        <SimpleMap center={props.center} />
      </div>
    </div>
  );
}
