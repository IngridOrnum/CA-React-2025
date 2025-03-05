import {useForm} from "react-hook-form";
import {useState} from "react";

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
        <div className={"relative"}>
            <h1 className={"font-bold text-2xl flex justify-center mb-10"}>Contact</h1>
            <form className={"flex flex-col max-w-sm mx-auto gap-4"}
                  onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex flex-col"}>
                    <label htmlFor={"name"}>Full Name:</label>
                    <input type="text" id={"name"} className={"border p-1"}
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
                    <label htmlFor={"email"}>Email:</label>
                    <input type="text" id={"email"} className={"border p-1"}
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
                                   message: "Please enter a valid email with @"}
                           })}/>
                    {errors.email && <p className={"text-red-700"}>{errors.email.message || "Unexpected Error"}</p>}
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"subject"}>Subject:</label>
                    <input type="text" id={"subject"} className={"border p-1"}
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
                    <label htmlFor={"message"}>Your message:</label>
                    <textarea id={"message"} cols="30" rows="10" className={"border p-1"}
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
                <button type={"submit"} className={"border p-2"}>
                    Submit
                </button>
                {isVisible &&
                <div
                    className={"absolute flex flex-col items-center gap-4 min-w-screen-md min-h-screen-md bg-yellow-200 p-10"}>
                    <p>Your message was successfully sent!</p>
                    <button className={"border p-2 cursor-pointer"}
                            onClick={hideMessage}>Close</button>
                </div>
                }
            </form>
        </div>
    )
}