import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { apiHP } from "../../Services/api";

export const Character = () => {
  const { id } = useParams();
  //const history = useHistory();

  const [wizard, setWizard] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    apiHP
      .get(`/characters/${id}`)
      .then((response) => setWizard(response.data))
      .catch((error) => {
        console.log(error);
        setNotFound(true);

        // Poderia utilizar o history para direcionar para outra Page caso houver um erro
        // history.push("/");
      });

    // return () => {
    //   setNotFound(false);
    // };
  }, []);

  if (notFound) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Character</h1>
      {!!wizard && (
        <>
          <img
            src={
              wizard.image ||
              "https://data.whicdn.com/images/32567065/original.gif"
            }
            alt={wizard.name}
          />
          <p>{wizard.name || "?"}</p>
          <p>{wizard.gender || "?"}</p>
          <p>{wizard.ancestry || "?"}</p>
        </>
      )}
    </>
  );
};
