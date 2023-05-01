import { fetcher } from "../../lib/api";
import Galerie from "../../components/GalerieComponent";

export default function GalerieList({ galeries }) {
  return (
    <>
      <div className="container px-4 pt-5" key={galeries.id}>
        <h1>GaleriePage</h1>
      </div>
      <Galerie galeries={galeries} />
    </>
  );
}

export async function getStaticProps() {
  const galeries = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/photos?populate=*`);

  return {
    props: { galeries },
  };
}


