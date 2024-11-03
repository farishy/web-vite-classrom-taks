import { formatToRupiah, generateKey } from "@/shared/helpers/helpers";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

async function fetchProductData() {
  try {
    const response = await fetch(
      "http://localhost:5173/my-homework/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    toast.error("Error fetching product data:", error);
  }
}

export default function MountingData() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProductData().then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, []);

  return (
    <div className="flex flex-col relative gap-8 bg-gray-50">
      <button
        className="btn btn-active btn-sm w-fit absolute top-4 left-4 z-[99]"
        onClick={() => navigate("/")}>
        <MdArrowBack className="w-5 h-5" /> Back to Dashboard
      </button>
      <div className="relative bg-[url('https://14489771.fs1.hubspotusercontent-na1.net/hubfs/14489771/tech.png')] bg-cover bg-center h-64 w-full">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1 className="text-4xl font-semibold">Gadget & Electonics</h1>
        </div>
      </div>
      <div className="flex flex-col px-12 pb-8 gap-8">
        {data?.gadgetAndAccessories?.map((item, index) => (
          <div
            key={generateKey("item", index)}
            className="grid grid-cols-5 max-sm:grid-cols-2 gap-4">
            <p className="col-span-5 max-sm:col-span-2 font-medium text-2xl pb-4 border-b-2 border-pink-100">
              {item.categoryName}
            </p>
            {!item?.products.length ? (
              <p className="whitespace-nowrap w-full text-gray-500">{`There not data record of ${item.categoryName}`}</p>
            ) : (
              item.products.map((product, index) => (
                <div
                  key={generateKey("product", index)}
                  className="border rounded-lg shadow max-h-[350px] bg-white">
                  <img
                    src={product.image}
                    className="h-[170px] object-top object-cover rounded-t-lg mx-auto"
                  />
                  <div className="flex flex-col p-2">
                    <p className="line-clamp-2">{product.name}</p>
                    <p className="font-medium mb-4">
                      {formatToRupiah(product.price)}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">Link to Buy</p>
                      <button
                        className="btn btn-active btn-sm"
                        onClick={() =>
                          window.open(product.officialSite, "_blank")
                        }>
                        Official Site
                      </button>
                      <button
                        className="btn btn-success text-white btn-sm"
                        onClick={() =>
                          window.open(product.tokopediaLink, "_blank")
                        }>
                        <div className="badge">
                          <img
                            src="https://th.bing.com/th/id/OIP.VqlfF4MSB9RearjYRT0SngHaGL?rs=1&pid=ImgDetMain"
                            className="w-4 h-4"
                          />{" "}
                        </div>
                        Tokopedia
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
