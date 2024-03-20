export default function InputTwo({ htmlFor, label, name, id, state, setState }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold leading-6 text-blue-300"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <textarea
          name={name}
          id={id}
          rows={4}
          onChange={(e) => setState(e.target.value)}
          value={state}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-none sm:text-sm sm:leading-6 bg-gray-800 shadow-md shadow-blue-400/40 ring-2 ring-gray-950"
        />
      </div>
    </div>
  );
}
