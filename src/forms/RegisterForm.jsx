import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import NumberInput from "../components/NumberInput";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const handleSubmitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FieldSet label="Enter Register Details">
          <Field label="Name" error={errors.fullname}>
            <input
              {...register("fullname", {
                required: "Name is required",
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fullname ? "border-red-500" : "border-gray-200"
              }`}
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Name"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <Controller
              name="age"
              defaultValue={0}
              control={control}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border box-border w-[300px] rounded-md ${
                    errors.age ? "border-red-500" : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                max: {
                  value: 100,
                  message: "Age can be between 0 and 100",
                },
              }}
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </Field>
          <Field label="Image" error={errors.image}>
            <input
              {...register("image", { required: "Image is required" })}
              type="file"
              name="image"
              id="image"
            />
          </Field>
        </FieldSet>
        <FieldSet label="Enter Socials Handles">
          {fields &&
            fields.map((field, index) => {
              return (
                <div
                  className="flex justify-between items-center w-max"
                  key={field.id}
                >
                  <Field label="Social Name">
                    <input
                      className=" p-2 border box-border w-full rounded-md"
                      type="text"
                      {...register(`socials[${index}].name`)}
                      id={`socials[${index}].name`}
                      name={`socials[${index}].name`}
                      placeholder="Social Name"
                    />
                  </Field>
                  <Field label="Social URL">
                    <input
                      className=" p-2 border box-border w-full rounded-md"
                      type="text"
                      {...register(`socials[${index}].url`)}
                      id={`socials[${index}].url`}
                      name={`socials[${index}].url`}
                      placeholder="Social URL"
                    />
                  </Field>
                  <button
                    className="mt-8 text-lg text-white cursor-pointer border rounded bg-red-500 m-auto py-1 px-4"
                    onClick={() => remove(index)}
                  >
                    &#8722;
                  </button>
                </div>
              );
            })}
          <button
            className="mt-8 text-lg text-white cursor-pointer border rounded bg-red-500 m-auto py-1 w-[300px]"
            onClick={() => append({ name: "", url: "" })}
          >
            Add A Social Handle
          </button>
        </FieldSet>
        <div className="text-red-600 text-[16px]">
          {errors?.root?.random?.message}
        </div>
        <Field>
          <div className="m-auto w-[300px]">
            <button
              type="submit"
              className="text-lg w-full py-1 bg-red-500 cursor-pointer rounded mt-5 text-white"
            >
              Register
            </button>
          </div>
        </Field>
      </form>
    </div>
  );
};

export default RegisterForm;
