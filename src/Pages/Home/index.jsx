import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { apiHP } from "../../Services/api";

export const Home = () => {
  const [listWizards, setListWizards] = useState([]);

  useEffect(() => {
    apiHP
      .get("/characters")
      .then((response) => setListWizards(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <h1>Home</h1>
      {listWizards?.map((character) => (
        <div key={character?.id}>
          <img src={character?.image} />
          <h2>{character?.name}</h2>
          <p>-------------------------</p>
        </div>
      ))}
    </>
  );
};
