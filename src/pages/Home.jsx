import { Link } from "react-router-dom";
import Header from "../components/Header";
import Category from "./Category";
import productsData from "../../products.json";
import ProductCard from "../components/ProductCard";

function Home() {
  const quantity = 8;
  const products = productsData.products.slice(0, quantity) || [];
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Products
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Explore the latest automotive parts and accessories with
              competitive pricing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-stretch">
            {products.map(
              ({
                id,
                name,
                product_image,
                initial_price,
                selling_price,
                desc,
                merchant,
                verified,
              }) => (
                <ProductCard
                  key={id}
                  name={name}
                  id={id}
                  product_image={product_image}
                  initial_price={initial_price}
                  selling_price={selling_price}
                  desc={desc}
                  merchant={merchant}
                  verified={verified}
                />
              ),
            )}
          </div>
        </section>

        <Link
          to="/products"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        >
          View more 👉
        </Link>
        <Category />
      </main>
    </div>
  );
}

export default Home;
