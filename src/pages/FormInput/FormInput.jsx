import { generateKey } from "@/shared/helpers/helpers";
import { useState } from "react";
import { MdAdd, MdArrowBack, MdEmail, MdPerson, MdPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HEADER_DATA = [
  {
    name: "No",
    accessor: "index",
  },
  {
    name: "Name",
    accessor: "name",
  },
  {
    name: "Email",
    accessor: "email",
  },
  { name: "Phone Number", accessor: "phone" },
];

const TABLE_DATA = [
  {
    name: "Abdul Hadi Panggar Bessy",
    image: "https://ntvb.tmsimg.com/assets/assets/517125_v9_bb.jpg",
    email: "abdul.hadi@gmail.com",
    phone: "082181920011",
  },
  {
    name: "Muhammad Maulana",
    image:
      "https://media.licdn.com/dms/image/C5603AQEaEYwV-1sExQ/profile-displayphoto-shrink_800_800/0/1649435511471?e=2147483647&v=beta&t=fK5Dj_W_YrjbB0PaPnEl3_1vZtIH13k6wOAI9YzMNdI",
    email: "muhammadmaulana.1899@gmail.com",
    phone: "085781920099",
  },
  {
    name: "Nadia Syavira",
    image:
      "https://th.bing.com/th/id/OIP.6gXbgIw4YhpfgzfU6aEYSgAAAA?rs=1&pid=ImgDetMain",
    email: "nadiasyavira@icloud.com",
    phone: "087681120021",
  },
];

const initialValues = {
  name: "",
  image:
    "https://th.bing.com/th/id/OIP.ybB2a0HimX1I-ybBY4pOPwHaHa?rs=1&pid=ImgDetMain",
  email: "",
  phone: "",
};

export default function FormInput() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState([]);

  const handleKirimData = () => {
    let errors = [];
    Object.entries(form).map(
      ([key, value]) =>
        !value && errors.push({ key: key, message: `Please fill ${key} field` })
    );
    console.log("errors", errors);
    if (errors.length > 0) return setError(errors);
    TABLE_DATA.push(form);
    setForm(initialValues);
    setError([]);
    toast.success("Contact added successfully");
    document.getElementById("form_input").close();
  };

  const handleClose = () => {
    setError([]);
    document.getElementById("form_input").close();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
      <div className="flex flex-col gap-4 --border p-4 --rounded">
        <button
          className="btn btn-active btn-sm w-fit"
          onClick={() => navigate("/")}>
          <MdArrowBack className="w-5 h-5" /> Back to Dashboard
        </button>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-4xl">Contact Info</p>
            <p className="text-gray-500">Get in Touch with Your Connections</p>
          </div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => document.getElementById("form_input").showModal()}>
            <MdAdd className="w-5 h-5" />
            Add Contact
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                {HEADER_DATA.map((data, index) => (
                  <th key={generateKey("header", index)}>{data.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((data, index) => (
                <tr key={generateKey("data", index)}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-circle h-12 w-12">
                          <img src={data.image} alt="avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                {HEADER_DATA.map((data, index) => (
                  <th key={generateKey("foot", index)}>{data.name}</th>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <dialog id="form_input" className="modal">
        <div className="modal-box">
          <form method="dialog" onClick={handleClose}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg pb-4 border-b">Add Contact</h3>
          <div className="flex flex-col gap-4 py-4">
            <div>
              <label
                className={`input input-bordered flex items-center gap-2  ${
                  error.findIndex((val) => val.key === "name") >= 0
                    ? `input-error`
                    : ``
                }`}>
                <span className="font-medium flex gap-2 items-center">
                  <MdPerson /> Name
                </span>
                <input
                  type="text"
                  className={`grow`}
                  placeholder="Enter name"
                  name="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </label>
              {error.find((val) => val.key === "name") ? (
                <div className="label ">
                  <span className="label-text-alt text-red-500">
                    {error.find((val) => val.key === "name")?.message}
                  </span>
                </div>
              ) : (
                ``
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2  ${
                  error.findIndex((val) => val.key === "email") >= 0
                    ? `input-error`
                    : ``
                }`}>
                <span className="font-medium flex gap-2 items-center">
                  <MdEmail /> Email
                </span>
                <input
                  type="email"
                  className={`grow`}
                  placeholder="Enter email"
                  name="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </label>
              {error.find((val) => val.key === "email") ? (
                <div className="label ">
                  <span className="label-text-alt text-red-500">
                    {error.find((val) => val.key === "email")?.message}
                  </span>
                </div>
              ) : (
                ``
              )}
            </div>

            <div>
              <label
                className={`input input-bordered flex items-center gap-2  ${
                  error.findIndex((val) => val.key === "phone") >= 0
                    ? `input-error`
                    : ``
                }`}>
                <span className="font-medium flex gap-2 items-center">
                  <MdPhone /> Phone
                </span>
                <input
                  type="tel"
                  className={`grow`}
                  placeholder="Enter phone"
                  name="phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              </label>
              {error.find((val) => val.key === "phone") ? (
                <div className="label ">
                  <span className="label-text-alt text-red-500">
                    {error.find((val) => val.key === "phone")?.message}
                  </span>
                </div>
              ) : (
                ``
              )}
            </div>
          </div>
          <button className="btn btn-primary w-full" onClick={handleKirimData}>
            Save Changes
          </button>
        </div>
        <form onClick={handleClose} method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
