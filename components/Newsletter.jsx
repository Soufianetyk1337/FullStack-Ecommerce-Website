import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [userEmail, setUserEmail] = useState("");

  const sendEmail = async () => {
    const response = await fetch("/api/newsletter_subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userEmail),
    });
    if (response.status === 200) {
      toast.success("You have successfully subscribed to our newsletter");
      setUserEmail("");
    } else {
      toast.error("Something went wrong try again later");
    }
  };

  return (
    <section
      className="newsletter l-container mx-auto mt-8 mb-8 text-mercury flex justify-between items-center py-16 px-8 flex-col min-767:flex-row gap-3"
      id="newsletter"
    >
      <h2 className="newsletter__heading text-[2rem] font-semibold flex-1">
        Sign Up for
        <span className="newsletter__heading__span text-burnt-sienna font-bold">
          {" "}
          Updated{" "}
        </span>
        & Newsletter
      </h2>
      <div className="form-group relative flex w-full min-767:w-4/5 mt-6 min-767:mt-0  min-767:flex-[1.5]">
        <input
          value={userEmail}
          onChange={(event) => setUserEmail(event?.target.value)}
          className="form-field block py-2 px-4 text-base leading-6 font-medium rounded-lg appearance-none border-solid border border-burnt-sienna placeholder:text-silver-chalice placeholder:font-normal max-480:placeholder:text-sm max-320:placeholder:text-xs focus:outline-none focus:border-bornflower-blue
          relative z-10 flex-auto w-[1%] mt-0 mb-0 rounded-tl-[0.25rem] rounded-tr-none rounded-br-none rounded-bl-[0.25rem] bg-burnt-sienna-to-cornflower-blue backdrop-blur-sm text-bornflower-blue
          "
          type="email"
          placeholder="Type your email"
        />
        <span
          onClick={sendEmail}
          type="button"
          role="button"
          className="text-center max-480:text-[.75rem]  max-480:p-2 py-3 px-6 text-sm leading-6 text-mercury rounded-tl-0 rounded-tr-[0.25rem] rounded-br-[0.25rem] rounded-bl-none border border-burnt-sienna border-solid bg-burnt-sienna bg-sienna-to-blue bg-no-repeat bg-cover"
        >
          Subscribe Now
        </span>
      </div>
    </section>
  );
};

export default Newsletter;
