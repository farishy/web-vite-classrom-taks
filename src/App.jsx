import { useState } from "react";

const initialValues = {
  productId: "",
  productName: "",
};

function App() {
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
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
      <div className="border p-4 rounded">
        <p className="text-4xl font-medium mb-4">User Info</p>
        <div className="grid grid-cols-2 w-full gap-4 border-b-2 pb-4 mb-4">
          <p className="font-medium">Username : </p>
          <p>farishy99</p>
          <p className="font-medium">Email : </p>
          <p>muhammadfaris@gmail.com</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <table className="table-auto border-collapse border">
            <thead>
              <tr>
                <th className="border p-4">ID</th>
                <th className="border p-4">Product Name</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    setProductForm({
                      productId: product.productId,
                      productName: product.productName,
                    });
                    setSelectedId(product.productId);
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
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">Form Edit</p>
            <div className="flex items-center gap-2">
              <p className="font-medium">ID</p>
              <input
                type="text"
                className="border p-2 w-full rounded"
                name="id"
                value={productForm.productId}
                onChange={(e) =>
                  setProductForm((prev) => ({
                    ...prev,
                    productId: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium whitespace-nowrap">Product Name</p>
              <input
                type="text"
                className="border p-2 w-full rounded"
                name="productName"
                value={productForm.productName}
                onChange={(e) =>
                  setProductForm((prev) => ({
                    ...prev,
                    productName: e.target.value,
                  }))
                }
              />
            </div>
            <button
              className="border rounded-xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 font-medium"
              onClick={handleKirimData}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
