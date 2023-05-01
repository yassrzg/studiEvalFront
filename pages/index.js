import Layout from "@/components/Layout";

export default function Home({ posts }) {
  return (
    
      <div className="text-center container-home">
        {posts && (
          <div key={posts.data.id} className="home">
            {posts.data.attributes.logoAcceuil && (
              <img src={`http://localhost:1337${posts.data.attributes.logoAcceuil.data.attributes.url}`} alt={posts.data.attributes.logoAcceuil.data.attributes.caption} className="logo-home"/>
            )}
          </div>
        )}
      </div>
    
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/acceuil-page?populate=*')
  const posts = await res.json();

  return {
    props: { posts }
  }
}

