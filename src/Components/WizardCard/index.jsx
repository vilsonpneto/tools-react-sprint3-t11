import { useHistory } from "react-router-dom";
import { StyledWizardCard } from "./styles";

export const WizardCard = ({ character }) => {
  const history = useHistory();

  const goToCharacter = () => {
    history.push(`/character/${character.id}`);
  };
  return (
    <StyledWizardCard onClick={goToCharacter}>
      <img
        src={
          character?.image ||
          "https://www.clipartkey.com/mpngs/m/221-2219309_harry-potter-hermione-outline-harry-potter-hermione-harry.png"
        }
        alt={character?.name}
      />
      <div className="name-container">
        <h2>{character?.name}</h2>
      </div>
    </StyledWizardCard>
  );
};
