import { useForm } from "react-hook-form";
import { Navbar } from "../../ui";
import { InputName } from "../components/InputName";
import { InputAmount } from "../components/InputAmount";
import { InputMail } from "../components/InputMail";
import { InputPhone } from "../components/InputPhone";
import { ButtonDonatePage } from "../components/ButtonDonatePage";
import { ButtonDonateTranfer } from "../components/ButtonDonateTranfer";
import { InputDni } from "../components/InputDni";
import { useState } from "react";

export const DonatePage = () => {
  const { control, handleSubmit, formState } = useForm();
  const [formTouched, setFormTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    try {
      const { payer_email, dni, transaction_amount, first_name, celnumber } =
        data;

      const response = await fetch(
        "https://cedes-donations-nicoriver9.vercel.app/create-subscripcion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            dni: dni,
            celnumber: celnumber,
            payer_email: payer_email,
            transaction_amount: transaction_amount,
            subscripcion_months: 12,
          }),
        }
      );
      const dataResponse = await response.json();
      if (dataResponse) window.location.href = dataResponse.init_point;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  const handleFormChange = () => {
    if (!formTouched) {
      setFormTouched(true);
    }
  };

  return (
    <>
      <Navbar buttonAction="login" />
      <div className="flex flex-row items-center justify-center mt-4">
        <div className="flex lg:flex-row p-4 mb-6 border-2 border-gray-500 rounded-2xl bg-donatePage space-y-4 lg:space-y-0 lg:mr-10">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              onChange={handleFormChange}
              className=""
            >
              <div>
                <InputName control={control} />
                <InputMail control={control} />
                <InputDni control={control} />
                <InputPhone control={control} />
              </div>
              <div>
                <InputAmount
                  control={control}
                  onChange={(value) => console.log(value)}
                />
                <div className="my-4">
                  <ButtonDonatePage />
                </div>
              </div>
            </form>
            <div>
              {formTouched && formState.isValid && <ButtonDonateTranfer />}
            </div>
          </div>
        </div>
        <div className="text-center p-4 px-6 flex flex-col items-center lg:ml-10 text-DonatePage rounded-xl mx-34 text-white font-bold leading-loose">
          <h2 className="my-2">Ayúdanos a cambiar vidas.</h2>
          <p className="">A través de tu donación</p>
          <p className="mb-4">podemos hacer una diferencia.</p>
        </div>
      </div>
    </>
  );
};
