import { useForm, Controller } from "react-hook-form";

export const InputPhone = ({ control }) => {
  const { setError } = useForm();

  return (
    <div>
      <Controller
        name="celnumber"
        control={control}
        defaultValue=""
        rules={{
          required: "Ingrese un número de teléfono válido",
        }}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type="tel"
              inputMode="numeric"
              placeholder="Número de teléfono"
              id="celnumber"
              className={`bg-white p-1.5 border rounded-xl w-80 font-medium text-center mt-3 text-base ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              onInput={(e) => {
                const value = e.target.value;
                const isInvalid = !/^\d+$/.test(value);
                setError("celnumber", {
                  type: isInvalid ? "manual" : "manual",
                  message: isInvalid
                    ? "Ingrese un número de teléfono válido"
                    : "",
                });
              }}
            />
            {fieldState.invalid && (
              <p className="text-red-100 text-center bg-red-800 mx-4 my-3 rounded-md">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
