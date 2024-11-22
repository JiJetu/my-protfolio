"use client";

import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";
import Title from "@/components/shared/Title";
import ContactLeft from "./ContactLeft";

type ContactFormData = {
  user_name: string;
  user_pNumber: string;
  user_email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    if (form.current) {
      console.log(form?.current, { data });
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(() => {
          toast.success(
            `Thank you, ${data.user_name}! Your message has been sent successfully.`
          );
          reset();
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
          toast.error("Failed to send the message. Please try again later.");
        });
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Toaster position="top-right" />
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne">
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4 lg:gap-6 py-2 lg:py-5"
            >
              {/* Name */}
              <div className="w-full flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    {...register("user_name", {
                      required: "Name is required!",
                    })}
                    className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300"
                    type="text"
                  />
                  {errors.user_name && (
                    <span className="text-red-500 text-sm">
                      {errors.user_name.message}
                    </span>
                  )}
                </div>
                {/* Phone Number */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    {...register("user_pNumber", {
                      required: "Phone number is required!",
                    })}
                    className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300"
                    type="text"
                  />
                  {errors.user_pNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.user_pNumber.message}
                    </span>
                  )}
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  {...register("user_email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
                      message: "Invalid email address!",
                    },
                  })}
                  className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300"
                  type="email"
                />
                {errors.user_email && (
                  <span className="text-red-500 text-sm">
                    {errors.user_email.message}
                  </span>
                )}
              </div>
              {/* Subject */}
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  {...register("subject", { required: "Subject is required!" })}
                  className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300"
                  type="text"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">
                    {errors.subject.message}
                  </span>
                )}
              </div>
              {/* Message */}
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required!" })}
                  className="w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none"
                  rows={6}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
