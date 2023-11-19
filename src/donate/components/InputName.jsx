import { useForm, Controller } from "react-hook-form";

export const InputName = ({ control }) => {
  const { setError } = useForm();

  return (
    <div>
      <Controller
        name="first_name"
        control={control}
        defaultValue=""
        rules={{
          required: "Ingrese un nombre y apellido",
        }}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type="text"
              placeholder="Nombre y apellido o Razón social"
              id="first_name"
              className={`bg-white p-2 border border-violet-800 rounded-full w-80 text-gray-700 text-center my-4 text-lg ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              autoFocus
              onInput={(e) => {
                const value = e.target.value;
                const isInvalid = !/^[A-Za-z\s]+$/.test(value);
                setError("first_name", {
                  type: isInvalid ? "manual" : "manual",
                  message: isInvalid
                    ? "Ingrese un nombre y apellido válido"
                    : "",
                });
              }}
            />
            {fieldState.invalid && (
              <p className="text-red-500 font-semibold text-center">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
