import { generateKey } from "@/shared/helpers/helpers";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useOnChangeViewModel } from "./useOnChangeViewModel";
import { Controller } from "react-hook-form";
import Input from "@/components/Input/Input";

const initialValues = {
  productId: "",
  productName: "",
};

export default function OnChange() {
  const navigate = useNavigate();
  const { form, handleUpdateProduct, products, handleProductSelected } =
    useOnChangeViewModel();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen gap-4">
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
                  console.log("clicked", product.productId);
                  handleProductSelected(product.productId);
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
              <Controller
                name="productId"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Product ID"
                    placeholder="Enter Product ID"
                    errorMessage={fieldState.error?.message}
                    isError={Boolean(fieldState.error)}
                    isRequired
                    disabled
                  />
                )}
              />
              <Controller
                name="productName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Product Name"
                    placeholder="Enter Product Name"
                    errorMessage={fieldState.error?.message}
                    isError={Boolean(fieldState.error)}
                    isRequired
                  />
                )}
              />
            </div>
            <button
              className="btn btn-primary w-full"
              onClick={handleUpdateProduct}>
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
