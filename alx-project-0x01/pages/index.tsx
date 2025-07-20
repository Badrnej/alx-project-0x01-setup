import Link from "next/link";
import Header from "../components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white mb-8">
            Explorez nos posts et découvrez notre communauté d'utilisateurs.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/posts">
              <button className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
                Voir les Posts
              </button>
            </Link>
            <Link href="/users">
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-500 transition">
                Voir les Utilisateurs
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
