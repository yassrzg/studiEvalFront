import React from 'react'
import { fetcher } from "../../lib/api";

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
  const tarifs = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tarif-prestations`);

  return {
    props: {
      tarifs,
    },
  };
}
