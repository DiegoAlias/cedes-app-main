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

  const onSubmit = handleSubmit(async (data) => {
    const { payer_email, dni, transaction_amount, first_name, celnumber } = data;

    const response = await fetch("http://localhost:3000/create-subscripcion", {
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
    });
    const dataResponse = await response.json();
    if (dataResponse) window.location.href = dataResponse.init_point;
  });

  const handleFormChange = () => {
    if (!formTouched) {
      setFormTouched(true);
    }
  };

  return (
    <>
      <Navbar buttonAction="login" />
      <div className="flex flex-col items-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>
          <div className="flex flex-col lg:flex-row items-start justify-between p-4 mb-6 border-2 border-gray-500 rounded-2xl bg-donatePage space-y-4 lg:space-y-0">
            <div className="w-full lg:w-1/2 space-y-4 lg:space-y-0 lg:mr-24">
              <InputName control={control} />
              <InputMail control={control} />
              <InputDni control={control} />
              <InputPhone control={control} />
            </div>
            <div className="w-full mt-4 lg:w-1/2">
              <InputAmount control={control} onChange={(value) => console.log(value)} />
              <ButtonDonatePage />
              {/* <ButtonDonateTranfer /> */}
              {formTouched && formState.isValid && <ButtonDonateTranfer />}
            </div>
          </div>
        </form>
        <h2 className="text-center p-8 mx-32 text-3xl text-white font-bold leading-loose text-DonatePage">
          Ayúdanos a cambiar vidas a través de tu generosa donación. Juntos
          podemos hacer una diferencia
        </h2>
      </div>
    </>
  );
};
