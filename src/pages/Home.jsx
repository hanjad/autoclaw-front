import { Link } from "react-router-dom";
import Header from "../components/Header";
import Category from "../sections/Category";
import Products from "./Products";
import Hero from "../sections/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Hero />
        
        <Products quantity={8} />

        
        <Category />
      </main>
    </div>
  );
}

export default Home;
