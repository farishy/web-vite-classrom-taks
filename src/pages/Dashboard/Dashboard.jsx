import { generateKey } from "@/shared/helpers/helpers";
import moment from "moment";
import { MdCheckCircle, MdRunCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const HEADER_DATA = [
  {
    name: "Task",
    accessor: "task",
  },
  {
    name: "Last Updated At",
    accessor: "updatedAt",
  },
  { name: "Status", accessor: "status" },
];

const TABLE_DATA = [
  {
    task: "On Change",
    categoryTask: "reactJs",
    updatedAt: "23/10/2024",
    status: "Done",
    route: "/on-change",
  },
  {
    task: "Mounting Data",
    categoryTask: "reactJs",
    updatedAt: "27/10/2024",
    status: "Done",
    route: "/mounting-data",
  },
  {
    task: "Form Input",
    categoryTask: "reactJs",
    updatedAt: "27/10/2024",
    status: "Done",
    route: "/form-input",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4">
        <p className="text-4xl font-medium">My Homework Dashboard</p>
        <div className="flex gap-4 items-center border px-4 py-2 rounded bg-gray-50">
          <img
            className="w-[75px] aspect-square rounded-full"
            src="https://gitlab.com/uploads/-/system/user/avatar/9659937/avatar.png?width=800"
          />
          <div className="flex flex-col gap-2">
            <p className="font-medium text-2xl">Muhammad Faris</p>
            <div className="flex gap-2">
              <div className="badge badge-accent">
                Politeknik Negeri Jakarta
              </div>
              <div className="badge badge-neutral">3 Years Experiences</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center hover:bg-gray-300">
                <img
                  src="https://pngimg.com/uploads/github/github_PNG40.png"
                  className="w-5 h-5 aspect-squere"
                />
                <Link to="https://github.com/farishy" className="underline ">
                  farishy
                </Link>
              </div>
              <div className="flex gap-2 items-center hover:bg-gray-300">
                <img
                  src="https://companieslogo.com/img/orig/GTLB-a915f681.png?download=true"
                  className="w-5 h-5 aspect-square"
                />
                <Link to="https://gitlab.com/farishy1" className="underline">
                  farishy1
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table border rounded">
            <thead>
              <tr className="text-base">
                {HEADER_DATA.map((data, index) => (
                  <th key={generateKey("thead", index)}>{data.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((data, index) => (
                <tr key={generateKey("tbody", index)}>
                  <td>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold">{data.task}</div>
                      <div className="badge badge-ghost badge-sm">
                        {data.categoryTask}
                      </div>
                    </div>
                  </td>
                  <td>
                    {moment(data.updatedAt, "DD/MM/YYYY").format(
                      "DD MMMM YYYY"
                    )}
                  </td>
                  <td>
                    {data.status === "Done" ? (
                      <div className="badge badge-success text-white p-4 flex gap-2 items-center">
                        <MdCheckCircle className="w-5 h-5" />
                        <p>{data.status}</p>
                      </div>
                    ) : (
                      <div className="badge badge-neutral p-4 flex gap-2 items-center">
                        <MdRunCircle className="w-5 h-5" />
                        <p>{data.status}</p>
                      </div>
                    )}
                  </td>
                  <th>
                    <button
                      className="btn btn-outline btn-ghost"
                      onClick={() => navigate(data?.route)}>
                      Details
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
