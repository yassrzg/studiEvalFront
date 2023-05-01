import React from 'react'

export default function index(props) {
  const { tarifs } = props;
  
  return (
    <div className='container px-4 py-5 tarif-page'>
      <h1 className='title-tarif text-center'>Tarif et Prestations</h1>
      {tarifs.data.map((tarif) => (
        <div key={tarif.id}>
          <ul >
            <li className='tarif'>
              <p>{tarif.attributes.tarif}</p>
              <p>{tarif.attributes.description}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:1337/api/tarif-prestations", {
    method: "GET",
  });
  const tarifs = await data.json();

  return {
    props: {
      tarifs,
    },
  };
}
