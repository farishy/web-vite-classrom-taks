import { generateKey } from "@/shared/helpers/helpers";
import { MdAdd, MdArrowBack, MdEmail, MdPerson, MdPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormInputViewModel } from "./useFormInputViewModel";
import { Controller } from "react-hook-form";
import Input from "@/components/Input/Input";

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

export default function FormInput() {
  const navigate = useNavigate();
  const { form, handleAddContact, contacts, handleCloseModal } =
    useFormInputViewModel();

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
              {contacts.map((contact, index) => (
                <tr key={generateKey("constact-data", index)}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-circle h-12 w-12">
                          <img src={contact.image} alt="avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{contact.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
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
          <form method="dialog" onClick={handleCloseModal}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg pb-4 border-b">Add Contact</h3>
          <div className="flex flex-col gap-4 py-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Name"
                  startIcon={<MdPerson />}
                  placeholder="Enter a name"
                  isRequired
                  isError={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Email"
                  startIcon={<MdEmail />}
                  placeholder="Enter an email"
                  isRequired
                  isError={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Phone Number"
                  startIcon={<MdPhone />}
                  placeholder="Enter a phone number"
                  isRequired
                  isError={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
          </div>
          <button className="btn btn-primary w-full" onClick={handleAddContact}>
            Save Changes
          </button>
        </div>
        <form
          onClick={handleCloseModal}
          method="dialog"
          className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
