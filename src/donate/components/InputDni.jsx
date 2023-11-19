import { useForm, Controller } from "react-hook-form";

export const InputDni = ({ control }) => {
  const { setError } = useForm();
  return (
    <div>
      <Controller
        name="dni"
        control={control}
        defaultValue=""
        rules={{
          required: "Ingrese un número válido",
        }}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type="number"
              inputMode="numeric"
              placeholder="DNI o CUIL"
              id="dni"
              className={`bg-white p-2 border border-violet-800 rounded-full w-80 text-gray-700 text-center my-4 text-xl ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              onInput={(e) => {
                const value = e.target.value;
                const isInvalid = !/^\d+$/.test(value);
                setError("dni", {
                  type: isInvalid ? "manual" : "manual",
                  message: isInvalid ? "Ingrese un número válido" : "",
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
