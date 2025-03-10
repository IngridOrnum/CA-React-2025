import {useForm} from "react-hook-form";
import React, {useState} from "react";

export function Contact() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = data => {
        console.log(data);
        reset();
        setIsVisible(true);
    };

    const hideMessage = () => {
        setIsVisible(false);
    }

    return (
        <div className={"my-10 relative min-h-screen"}>
            <h1 className={"font-title-bold font-medium text-2xl flex justify-center mb-10"}>Contact</h1>
            <form className={"flex flex-col px-3 max-w-sm mx-auto gap-4 font-title-bold font-light text-lg"}
                  onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex flex-col"}>
                    <label className={"font-medium"} htmlFor={"name"}>Full Name:</label>
                    <input type="text" id={"name"} className={"border border-custom-gray rounded px-2 py-1 bg-white"}
                           {...register("name", {
                               required: {
                                   value: true,
                                   message: "Please enter your full name"
                               },
                               minLength: {
                                   value: 3,
                                   message: "Name must be at least 3 characters"
                               }
                           })} />
                    {errors.name && <p className={"text-red-700"}>{errors.name.message || "Unexpected Error"}</p>}
                </div>
                <div className={"flex flex-col"}>
                    <label className={"font-medium"} htmlFor={"email"}>Email:</label>
                    <input type="text" id={"email"} className={"border border-custom-gray rounded px-2 py-1 bg-white"}
                           {...register("email", {
                               required: {
                                   value: true,
                                   message: "Please enter your email"
                               },
                               minLength: {
                                   value: 3,
                                   message: "Email must be at least 3 characters"
                               },
                               pattern: {
                                   value: /@/,
                                   message: "Please enter a valid email with @"
                               }
                           })}/>
                    {errors.email && <p className={"text-red-700"}>{errors.email.message || "Unexpected Error"}</p>}
                </div>
                <div className={"flex flex-col"}>
                    <label className={"font-medium"} htmlFor={"subject"}>Subject:</label>
                    <input type="text" id={"subject"} className={"border border-custom-gray rounded px-2 py-1 bg-white"}
                           {...register("subject", {
                               required: {
                                   value: true,
                                   message: "Please enter your subject"
                               },
                               minLength: {
                                   value: 3,
                                   message: "Must be at least 3 characters"
                               }
                           })}
                    />
                    {errors.subject && <p className={"text-red-700"}>{errors.subject.message || "Unexpected Error"}</p>}
                </div>
                <div className={"flex flex-col"}>
                    <label className={"font-medium"} htmlFor={"message"}>Your message:</label>
                    <textarea id={"message"} cols="20" rows="6"
                              className={"border border-custom-gray rounded px-2 py-1 bg-white"}
                              {...register("message", {
                                  required: {
                                      value: true,
                                      message: "Please enter your message"
                                  },
                                  minLength: {
                                      value: 3,
                                      message: "Message must be at least 3 characters"
                                  }
                              })}
                    ></textarea>
                    {errors.message && <p className={"text-red-700"}>{errors.message.message || "Unexpected Error"}</p>}
                </div>
                <button type={"submit"} className={"border border-custom-gray p-2 rounded-full bg-white text-custom-black hover:bg-custom-black hover:text-white cursor-pointer"}>
                    Submit
                </button>
                {isVisible &&
                    <>
                        <div className="fixed inset-0 bg-[#72727280] z-40"></div>
                        <div
                        className={"absolute z-50 flex flex-col items-center gap-4 min-w-screen-md min-h-screen-md bg-white border border-custom-black rounded p-10"}>
                        <p>Your message was successfully sent!</p>
                        <button className={"border p-2 cursor-pointer rounded-full px-4 py-1 bg-white hover:bg-custom-black hover:text-white"}
                                onClick={hideMessage}>Close
                        </button>
                    </div>
                    </>

                }
            </form>
        </div>
    )
}