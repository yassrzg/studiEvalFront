import { useState, useEffect } from "react";



const GalerieComponent = ({ galeries }) => {
    const [filtre, setFiltre] = useState("Aucun"); // Modifier la valeur par défaut
    const [filtresPossibles, setFiltresPossibles] = useState([]);
  
    useEffect(() => {
      // Récupérer les filtres possibles depuis l'API
      const filtres = galeries.data.reduce((acc, galerie) => {
        if (!acc.includes(galerie.attributes.Filtre)) {
          acc.push(galerie.attributes.Filtre);
        }
        return acc;
      }, []);
      setFiltresPossibles(filtres);
    }, [galeries]);
  
    const filtrerGalerie = (galerie) => {
      // Si la valeur du filtre est "Tout", afficher toutes les galeries
      if (filtre === "Aucun") {
        return true;
      }
      // Sinon, afficher les galeries qui correspondent au filtre sélectionné
      return galerie.attributes.Filtre === filtre;
    };
  
    return (
      <div className="galerie-page">
        <div className="filtre offset-md-8">
            <h4>Filtre</h4>
          {/* Menu déroulant */}
          <select className="btn-filtre" value={filtre} onChange={(e) => setFiltre(e.target.value)}>
            <option value="Aucun">Aucun</option> {/* Modifier la valeur par défaut */}
            {filtresPossibles.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="row galerie-content">
          {galeries &&
            galeries.data.filter(filtrerGalerie).map((galerie) => {
              const { id, attributes } = galerie;
              const { Title, description, ImgPhoto } = attributes;
              const { url, alternativeText, width, height } = ImgPhoto.data.attributes.formats.thumbnail;
  
              return (
                <div className="col-lg-4 col-12 galerie">
                  <div key={id} className="target-galerie">
                    {ImgPhoto && (
                      <img
                        src={`http://localhost:1337${ImgPhoto.data.attributes.formats.small.url}`}
                        alt={alternativeText}
                        className="img"

                      />
                    )}
                    <h3 className="title text-center">{Title}</h3>
                    <p className="description">{description}</p>
                    
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  
  export default GalerieComponent;




  