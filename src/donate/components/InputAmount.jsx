import { useForm, Controller } from "react-hook-form";
import CurrencyInput from "react-currency-input-field";

export const InputAmount = ({ control }) => {
  const { setError } = useForm();

  return (
    <div>
      <Controller
        name="transaction_amount"
        control={control}
        defaultValue=""
        rules={{
          required: "Ingrese una donación",
        }}
        render={({ field, fieldState }) => (
          <>
            <CurrencyInput
              // {...field}
              placeholder="$00.0"
              allowNegativeValue={false}
              decimalSeparator=","
              groupSeparator="."
              prefix="$"
              className={`bg-white p-6 border border-violet-800 rounded-full w-80 text-gray-700 text-center text-2xl mt-12 ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              onValueChange={(value, name) => {
                if (isNaN(value)) {
                  // Realiza acciones adicionales aquí si es necesario
                  const isInvalid = !/^\d*$/g.test(value);
                  setError(name, {
                    type: isInvalid ? "manual" : "manual",
                    message: isInvalid ? "Solo se permiten números" : "",
                  });
                }
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
