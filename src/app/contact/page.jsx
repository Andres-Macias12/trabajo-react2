import Link from "next/link";
import Image from "next/image";

export default function Contact() {
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
      <main className="bg-gray-100 min-h-screen pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="absolute inset-0">
            <Image
              src="/background-contact.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-6">Contáctanos</h1>
            <p className="text-xl mb-8">
              Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.
            </p>
          </div>
        </div>

        <section className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Envíanos un Mensaje</h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
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
