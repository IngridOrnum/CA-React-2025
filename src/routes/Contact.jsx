export function Contact () {
    return (
        <>
            <h1 className={"font-bold text-2xl flex justify-center mb-10"}>Contact</h1>
            <form className={"flex flex-col max-w-sm mx-auto gap-4"}>
                <div className={"flex flex-col"}>
                    <label id={"name"}>Full Name:</label>
                    <input type="text" id={"name"} className={"border p-1"}/>
                </div>
                <div className={"flex flex-col"}>
                    <label id={"subject"}>Subject:</label>
                    <input type="text" id={"subject"} className={"border p-1"}/>
                </div>
                <div className={"flex flex-col"}>
                    <label id={"email"}>Email:</label>
                    <input type="text" id={"email"} className={"border p-1"}/>
                </div>
                <div className={"flex flex-col"}>
                    <label id={"message"}>Your message:</label>
                    <textarea name="message" id="message" cols="30" rows="10" className={"border p-1"}></textarea>
                </div>
                <button type={"submit"} className={"border p-2"}>Submit</button>
            </form>
        </>
    )
}