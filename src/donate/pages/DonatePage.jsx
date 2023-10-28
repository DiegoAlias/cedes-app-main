import { useForm, Controller } from "react-hook-form";
import { Navbar } from "../../ui";
import { AiOutlineHeart } from "react-icons/ai";

export const DonatePage = () => {
  const { control, handleSubmit, setError } = useForm();

  const onSubmit = handleSubmit(async () => {
    const response = await fetch("http://localhost:3000/create-subscripcion", {
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify({
        payer_email: "test_user_404905777@testuser.com",
        transaction_amount: 10,
        subscripcion_months: 12,
      }),
    });
    const data = await response.json();
    if (data) window.location.href = data.init_point;
  });

  return (
    <>
      <Navbar buttonAction="login" />
      <div className="flex flex-col items-center mt-32">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="donation"
            control={control}
            defaultValue=""
            rules={{
              required: "Ingrese una donación",
            }}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="$00.0"
                  className={`bg-white p-5 border border-violet-800 rounded-full w-80 text-gray-700 text-center my-4 text-2xl ${
                    fieldState.invalid ? "border-red-500" : ""
                  }`}
                  autoFocus
                  onInput={(e) => {
                    const value = e.target.value;
                    const isInvalid = !/^[0-9]*$/.test(value);
                    setError("donation", {
                      type: isInvalid ? "manual" : "manual",
                      message: isInvalid ? "Solo se permiten números" : "",
                    });
                  }}
                />
                {fieldState.invalid && (
                  <p className="text-red-500">{fieldState.error.message}</p>
                )}
              </>
            )}
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-violet-700 text-white p-4 rounded-full w-64 hover:bg-violet-900 hover:text-white my-4 font-bold text-lg flex items-center justify-center"
            >
              <AiOutlineHeart className="bg-transparent w-6 h-6 mr-1 mt-1" />
              <span className="ml-1 bg-transparent">DONAR</span>
            </button>
          </div>
        </form>
        <h2 className="text-center p-8 text-xl">
          Ayúdanos a cambiar vidas a través de tu generosa donación. Juntos
          podemos hacer una diferencia
        </h2>
      </div>
    </>
  );
};
