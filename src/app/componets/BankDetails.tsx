// use client
import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import "./form.css";
// Update with your actual path
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAuthentication } from "../actions/users/checkUser";
import { postBankDetails } from "../actions/bankDetails";

type TFormValues = {
  bankname: string;
  branch: string;
  accountname: string;
  accountnumber: string;
};

export function BankDetails() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const { onHandleNext, onHandleBack } = useFormState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  useEffect(() => {
    checkAuthentication().then((status) => {
      if (status === false) {
        router.push("/auth/signin");
      }
    });
  }, [router]);

  async function onHandleFormSubmit(data: TFormValues) {
    setMessage("Submitting form...");
    try {
      console.log("Account Number:", data.accountnumber);
      const result = await postBankDetails(
        data.accountname,
        data.bankname,
        data.branch,
        data.accountnumber
      );

      if (result.success) {
        setMessage(result.message);
        onHandleNext();
      } else {
        setMessage(result.message);
        if (
          result.message === "User ID not found in session" ||
          result.message === "User email not found in session"
        ) {
          router.push("/auth/signin");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An unexpected error occurred");
    }
  }

  return (
    <form
      className="space-y-6 textdd"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h1 className="text-xl font-semibold text-center">Bank Details</h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="bankname">Bank Name</label>
        <input
          id="bankname"
          type="text"
          placeholder="Bank Name"
          className={`h-11 px-4 border rounded-md ${
            errors.bankname ? "border-red-500" : ""
          }`}
          {...register("bankname", { required: "Bank Name is required" })}
        />
        {errors.bankname && (
          <p className="text-red-500">{errors.bankname.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="branch">Branch</label>
        <input
          id="branch"
          type="text"
          placeholder="Branch"
          className={`h-11 px-4 border rounded-md ${
            errors.branch ? "border-red-500" : ""
          }`}
          {...register("branch", { required: "Branch is required" })}
        />
        {errors.branch && (
          <p className="text-red-500">{errors.branch.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="accountname">Bank Account Name</label>
        <input
          id="accountname"
          type="text"
          placeholder="Bank Account Name"
          className={`h-11 px-4 border rounded-md ${
            errors.accountname ? "border-red-500" : ""
          }`}
          {...register("accountname", {
            required: "Bank Account Name is required",
          })}
        />
        {errors.accountname && (
          <p className="text-red-500">{errors.accountname.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="accountnumber">Account Number</label>
        <input
          id="accountnumber"
          type="number"
          placeholder="Account Number"
          className={`h-11 px-4 border rounded-md ${
            errors.accountnumber ? "border-red-500" : ""
          }`}
          {...register("accountnumber", {
            required: "Account Number is required",
          })}
        />
        {errors.accountnumber && (
          <p className="text-red-500">{errors.accountnumber.message}</p>
        )}
      </div>
      <p>{message}</p>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onHandleBack}
          className="h-11 px-6 bg-amber-600 text-white rounded-md"
        >
          Back
        </button>
        <button
          className="h-11 px-6 bg-amber-600 text-white rounded-md"
          onClick={onHandleNext}
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
}
