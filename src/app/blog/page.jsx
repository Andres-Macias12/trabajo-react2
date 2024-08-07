import Link from "next/link";

export const metadata = {
  title: 'Super blog',
  description: 'Una descripción del sitio',
  keywords: ['p1', 'p2']
};

export default async function Post() {
  const data = await getData();
  return (

    
    <main className="bg-gray-100 min-h-screen p-8">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-5xl font-extrabold text-red-600 text-center mb-12">Blog de pruebas</h1>
    <p className="text-xl text-center mb-8 text-red-600 ">Este es el contenido del blog</p>
    <ul className="space-y-8">
      {data.map(({ id, title, body }) => (
        <li key={id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Link href={`/blog/${id}`}>
            <h3 className="text-2xl font-bold text-blue-600 hover:underline">{id} -- {title}</h3>
          </Link>
          <p className="text-gray-700">{body}</p>
        </li>
      ))}
    </ul>
  </div>
</main>
  );
}

async function getData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Hubo un error en la red.');
    }
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}
