import { generateKey } from "@/shared/helpers/helpers";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialValues = {
  productId: "",
  productName: "",
};

export default function OnChange() {
  const navigate = useNavigate();
  const [productForm, setProductForm] = useState(initialValues);
  const [selectedId, setSelectedId] = useState("");
  const [products, setProducts] = useState([
    { productId: "PRODUCT01", productName: "Apple" },
    { productId: "PRODUCT02", productName: "Banana" },
  ]);

  const handleKirimData = () => {
    if (!selectedId) return alert("Pilih salah satu product untuk diedit");
    const updatedProducts = products.map((product) =>
      product.productId === selectedId
        ? { ...product, ...productForm }
        : product
    );
    setProducts(updatedProducts);
    setProductForm(initialValues);
    setSelectedId("");
    toast.success("Product updated successfully");
    document.getElementById("form_edit").close();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
      <div className="flex flex-col gap-4 --border p-4 --rounded">
        <button
          className="btn btn-active btn-sm w-fit"
          onClick={() => navigate("/")}>
          <MdArrowBack className="w-5 h-5" /> Back to Dashboard
        </button>
        <div className="flex flex-col gap-2">
          <p className="text-4xl">Fruit and Vegetable List</p>
          <p className="text-gray-500">Click one of product to update a data</p>
          <img
            src="https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg"
            className="w-[300px]"
          />
        </div>
        <table className="table table-auto border-collapse border">
          <thead>
            <tr className="text-base">
              <th className="border p-4">ID</th>
              <th className="border p-4">Product Name</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={generateKey("thead-products", index)}
                onClick={() => {
                  setProductForm({
                    productId: product.productId,
                    productName: product.productName,
                  });
                  setSelectedId(product.productId);
                  document.getElementById("form_edit").showModal();
                }}
                className="group hover:cursor-pointer">
                <td className="border p-4 group-hover:bg-gray-100">
                  {product.productId}
                </td>
                <td className="border p-4 group-hover:bg-gray-100">
                  {product.productName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog id="form_edit" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg pb-4 border-b">Edit Form</h3>
            <div className="flex flex-col gap-4 py-4">
              <label className="input input-bordered flex items-center gap-2">
                <span className="font-medium">ID</span>
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter ID Product"
                  name="id"
                  value={productForm.productId}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      productId: e.target.value,
                    }))
                  }
                  disabled
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <span className="font-medium">Product Name</span>
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter ID Product"
                  name="productName"
                  value={productForm.productName}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      productName: e.target.value,
                    }))
                  }
                />
              </label>
            </div>
            <button
              className="btn btn-primary w-full"
              onClick={handleKirimData}>
              Save Changes
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
