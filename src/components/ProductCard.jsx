import { Link } from "react-router-dom";
import clsx from "clsx";

const ProductCard = ({
  id,
  name,
  product_image,
  initial_price,
  selling_price,
  desc,
  merchant,
  verified
}) => {
  return (
    <Link to={`/products/${id}`} className="transition duration-300 ease-in hover:scale-105 hover:z-10 h-full">
      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md h-full flex flex-col">
        <div className="aspect-square bg-slate-100 p-4 text-slate-500">
          <img
            className="h-full w-full object-contain"
            src={product_image}
            alt={name}
          />
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] uppercase tracking-[0.32em] text-black-500">
            <span className="">{merchant}</span>
            <span className={clsx("block", verified ? 'text-emerald-600' : 'text-rose-600')}>
              {verified ? 'Verified' : 'Unverified'}
            </span>
          </div>

          <h2 className="text-base font-semibold leading-6 text-slate-900">
            {name}
          </h2>
          <p className="text-sm leading-5 text-slate-600 line-clamp-3">
            {desc}
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 p-2 text-xs text-slate-700">
              <p className="uppercase tracking-[0.25em] text-slate-500">
                List price
              </p>
              <p className="mt-1 text-base font-semibold">
                ₦{initial_price.toLocaleString()}
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-2 text-xs text-emerald-700">
              <p className="uppercase tracking-[0.25em] text-emerald-600">
                Your price
              </p>
              <p className="mt-1 text-base font-semibold">
                ₦{selling_price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
