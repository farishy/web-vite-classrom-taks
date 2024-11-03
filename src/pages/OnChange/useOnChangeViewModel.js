import { productsAtom } from "@/shared/atoms/atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import * as yup from "yup";

const schema = yup.object().shape({
  productId: yup.string().required("Product ID is required"),
  productName: yup.string().required("Product Name is required"),
});

export const useOnChangeViewModel = () => {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      productId: "",
      productName: "",
    },
    resolver: yupResolver(schema),
  });

  const [products, setProducts] = useRecoilState(productsAtom);

  const handleProductSelected = (productId) => {
    const productSelected = products.find(
      (product) => product.productId === productId
    );
    form.setValue("productId", productSelected.productId);
    form.setValue("productName", productSelected.productName);
    document.getElementById("form_edit").showModal();
  };

  const handleUpdateProduct = form.handleSubmit(async (data) => {
    console.log("Loading on...");
    const updatedProducts = products.map((product) =>
      product.productId === data.productId ? { ...product, ...data } : product
    );
    setProducts(updatedProducts);
    toast.success("Data updated successfully");
    document.getElementById("form_edit").close();
    console.log("Data products updated...");
    console.log("Loading off...");
  });

  return { form, handleUpdateProduct, products, handleProductSelected };
};
