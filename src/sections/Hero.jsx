import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="px-6 lg:px-8 mt-10">
      <h1 className="text-4xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
        AutoClaw
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto min-h-[70vh]">
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=870&auto=format&fit=crop"
            alt="AutoClaw Hero"
            className="w-full h-64 md:h-96 lg:h-full object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Drive Better with <span className="text-indigo-600">AutoClaw</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
            Your one-stop shop for premium automotive parts. Experience
            unmatched quality and competitive pricing for every make and model.
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <HashLink
              smooth
              to="#products"
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
            >
              Shop Now
            </HashLink>
            <Link
              to="/about"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
