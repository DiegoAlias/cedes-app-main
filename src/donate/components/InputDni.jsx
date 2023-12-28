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
              className={`bg-white p-1.5 border rounded-xl w-80 font-medium text-center mt-4 text-base ${
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
              <p className="text-red-100 text-center bg-red-800 mx-16 my-3 rounded-md">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
