import { IconContext } from "react-icons";

export default function Input(props) {
  const {
    type = "text",
    label,
    isError,
    errorMessage,
    startIcon,
    value,
    placeholder,
    isRequired,
    onChange,
  } = props;
  return (
    <div>
      <label
        className={`input input-bordered flex items-center gap-2  ${
          isError ? `input-error` : ``
        }`}>
        <div className="font-medium flex gap-2 items-center">
          {startIcon ? (
            <IconContext.Provider value={{ className: `w-5 h-5` }}>
              {startIcon}
            </IconContext.Provider>
          ) : null}
          <p>{`${label}${isRequired ? "*" : ""}`}</p>
        </div>
        <input
          {...props}
          className={`grow`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      {isError ? (
        <div className="label">
          <span className="label-text-alt text-red-500">{errorMessage}</span>
        </div>
      ) : (
        ``
      )}
    </div>
  );
}
