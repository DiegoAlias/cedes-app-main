import { useForm, Controller } from "react-hook-form";

export const InputMail = ({ control }) => {
  const { setError } = useForm();

  return (
    <div>
      <Controller
        name="payer_email"
        control={control}
        defaultValue="test_user_404905777@testuser.com"
        rules={{
          required: "Ingrese un correo electrónico válido",
        }}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type="email"
              placeholder="Correo electrónico"
              id="email"
              className={`bg-white p-2 border border-violet-800 rounded-full w-80 text-gray-700 text-center my-2 text-lg ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              onInput={(e) => {
                const value = e.target.value;
                const isInvalid =
                  !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
                    value
                  );
                setError("email", {
                  type: isInvalid ? "manual" : "manual",
                  message: isInvalid
                    ? "Ingrese un correo electrónico válido"
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
