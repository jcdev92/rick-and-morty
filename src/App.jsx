import "./App.css";
import React, { useEffect, useState } from "react";
import LocationCard from "./components/LocationCard";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import getUrl from "./helper/urlHelper";
import useFetch from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/location");
  const { data, error, loading } = useFetch(url);
  const [searchInfo, setSearchInfo] = useState("");
  let uri = getUrl(searchInfo, data);

  useEffect(() => {
    setUrl(uri);
  }, [searchInfo]);

  console.log(url);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <Header />
      <div className="container">
        <NavBar setSearchInfo={setSearchInfo} setUrl={setUrl}/>
        {data?.info?.count > 1 && (
          <>
            {data.results?.map((location) => (
              <div key={location.url} className="card__container">
                <LocationCard location={location} setUrl={setUrl} />
              </div>
            ))}
            {data.info?.pages > 1 && (
              <Pagination
                pages={data.info.pages}
                next={data.info.next}
                prev={data.info.prev}
                setUrl={setUrl}
              />
            )}
          </>
        )}
        {(data?.info?.count === 1 && (
          <div className="card__container">
            {data?.results?.map((location) => (
              <div key={location.url} className="card__container">
                <LocationCard location={location} />
              </div>
            ))}
            <CardContainer location={data} />
          </div>
        )) ||
          (data?.id && (
            <div className="card__container">
              <LocationCard location={data} />
              <CardContainer location={data} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
