import Link from 'next/link';
import Image from 'next/image'; // Asegúrate de importar Image si estás usando imágenes de Next.js

export default function Layout({ children }) {
  return (
    <>
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
          </div>
        </div>
      </nav>
      
      {/* Contenido principal */}
      <main className="pt-16">
        {children}
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
                    <Link href="/" className="text-gray-400 hover:text-gray-300">Inicio</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-gray-300">Blog</Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-gray-300">Acerca de</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-gray-300">Contacto</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">Facebook</span>
                    {/* Usa un icono en lugar de un enlace si no tienes FontAwesome */}
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">Twitter</span>
                    {/* Usa un icono en lugar de un enlace si no tienes FontAwesome */}
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="https://instagram.com" className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">Instagram</span>
                    {/* Usa un icono en lugar de un enlace si no tienes FontAwesome */}
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
