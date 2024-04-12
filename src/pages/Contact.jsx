import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Fox from "../models/Fox";
import Loader from "../Components/Loader";
import useAlert from "../Hooks/useAlert";
import Alert from "../Components/Alert";

export default function Contact() {
  const [isLoading, setIsLoading] = useState();
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [alert, showAlert, hideAlert] = useAlert();

  const handleFocus = (e) => setCurrentAnimation("walk");
  const handleBlur = (e) => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }).then(() =>{
        myForm.reset();
        setIsLoading(false);
        setCurrentAnimation("idle");
        showAlert({ text: "Message sent successfully!", type: "success" });
    }).catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        showAlert({ text: "Something went wrong!", type: "danger" });
        console.error(error);
    });
    setTimeout(() => {
      hideAlert();
    }, 5000);
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Contact Me</h1>
        <form
            name="contact"
          className="w-full flex flex-col gap-5 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="input dark:bg-zinc-700 dark:text-white border-2 dark:border-black-500 outline-none rounded-xl"
            placeholder="Karan"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-black-500 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="input dark:bg-zinc-700 dark:text-white border-2 dark:border-black-500 outline-none rounded-xl"
            placeholder="Karan@gmail.com"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-black-500 font-semibold">Message</label>
          <textarea
            name="message"
            rows={4}
            className="textarea dark:bg-zinc-700 dark:text-white border-2 dark:border-black-500 outline-none rounded-xl"
            placeholder="Let me know how can i help you!"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.8, -0.4, 0]}
              rotation={[12.8, -0.75, 0]}
              scale={0.6}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
