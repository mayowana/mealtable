import React, { useState } from "react";
import styles from "./RecipeSearch.module.scss";
import axios from "axios";
import SearchResults from "./searchResults/searchResults";
import Loader from "../Loader/Loader";
import PageButton, { HideButton } from "../RecipeSearch/PageButton/PageButton";

const RecipeSearch = () => {
  let [data, setData] = useState({ hits: [] });
  let [query, setQuery] = useState("");
  let [loader, setLoader] = useState(false);
  let [page, setPage] = useState(0);
  let [firstIndex, setFirstIndex] = useState(0);

  const app_id = "8d837658";
  const app_key = "7307218b738d987304316e3c6143c63d";

  console.log(firstIndex);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setData({ hits: [] });
    console.log(firstIndex);
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
      )
      .then(
        (response) => {
          setLoader(false);
          setData(response.data);
          setPage(1);
        },
        (error) => alert(error)
      );
  };

  const nextPage = (event) => {
    event.preventDefault();
    setLoader(true);
    const index = firstIndex + 10;
    setData({ hits: [] });
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=${index}`
      )
      .then(
        (response) => {
          setLoader(false);
          setData(response.data);
          setPage(page + 1);
          setFirstIndex(index);
        },
        (error) => alert(error)
      );
  };

  const prevPage = (event) => {
    event.preventDefault();
    const index = firstIndex - 10;
    setLoader(true);
    setData({ hits: [] });
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=${index}`
      )
      .then(
        (response) => {
          setFirstIndex(index);
          setLoader(false);
          setData(response.data);
          setPage(page - 1);
        },
        (error) => alert(error)
      );
  };

  const results = data.hits.map((hits, index) => (
    <SearchResults
      key={index}
      label={hits.recipe.label}
      image={hits.recipe.image}
      dietLabels={hits.recipe.dietLabels}
    ></SearchResults>
  ));

  return (
    <>
      <div className={styles.search}>
        <h3>Enter a food item to get recipes.</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit">Search</button>{" "}
        </form>
      </div>

      <div className={styles.results}>{results}</div>

      <div>{loader ? <Loader /> : null}</div>

      <div className={styles.pagers}>
        {page > 1 ? (
          <PageButton clicked={prevPage} className={styles.prev}>
            PREV
          </PageButton>
        ) : (
          <HideButton className={styles.prev} />
        )}
        {page > 0 && page < 3 ? (
          <PageButton clicked={nextPage} className={styles.next}>
            NEXT
          </PageButton>
        ) : (
          <HideButton className={styles.next} />
        )}
      </div>
    </>
  );
};

export default RecipeSearch;
