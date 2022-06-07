import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { WizardCard } from "../../Components/WizardCard";
import { apiHP } from "../../Services/api";
import { FlexContainer } from "../../styles/global";

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
      <FlexContainer>
        {listWizards?.map((character) => (
          <WizardCard key={character?.id} character={character} />
        ))}
      </FlexContainer>
    </>
  );
};
