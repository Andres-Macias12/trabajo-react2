import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Menú de Navegación */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-75 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.avif"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    Inicio
                  </Link>
                  <Link href="/blog" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    Blog
                  </Link>
                  <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    Acerca de
                  </Link>
                  <Link href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="absolute inset-0">
            <Image
              src="/background-about.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-6">Sobre Nosotros</h1>
            <p className="text-xl mb-8">
              Bienvenido a nuestro blog, donde compartimos noticias y artículos
              sobre temas apasionantes de tecnología y ciberseguridad. Nuestro
              equipo está compuesto por expertos dedicados a ofrecerte
              contenido de la más alta calidad para mantenerte informado y al
              día con las últimas tendencias y avances en el campo.
            </p>
            <Link href="/contact">
              <div className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
                Contáctanos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 9.293a1 1 0 010-1.414L9.586 5 6.293 1.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-6 text-red-600 ">Nuestro Equipo</h2>
            <p className="text-lg mb-12 text-blue-600 ">
              Estamos aquí para ayudarte a comprender mejor el mundo de la
              ciberseguridad y cómo proteger tus activos digitales. Nuestro
              equipo está compuesto por profesionales altamente capacitados y
              apasionados por lo que hacen.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/1.jpg"
                  alt="Team Member"
                  width={160}
                  height={160}
                  objectFit="cover"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/2.jpg"
                  alt="Team Member"
                  width={160}
                  height={160}
                  objectFit="cover"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/3.jpg"
                  alt="Team Member"
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Mi Blog</h2>
              <p className="text-gray-400">© {new Date().getFullYear()} Mi Blog. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="mb-8 md:mb-0 md:mr-12">
                <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/">
                      <span className="text-gray-400 hover:text-gray-300">Inicio</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <span className="text-gray-400 hover:text-gray-300">Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span className="text-gray-400 hover:text-gray-300">Acerca de</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span className="text-gray-400 hover:text-gray-300">Contacto</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <Link href="https://facebook.com">
                    <span className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">Facebook</span>
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </Link>
                  <Link href="https://twitter.com">
                    <span className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">Twitter</span>
                      <i className="fab fa-twitter"></i>
                    </span>
                  </Link>
                  <Link href="https://instagram.com">
                    <span className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">Instagram</span>
                      <i className="fab fa-instagram"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
