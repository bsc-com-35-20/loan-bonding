"use client";
import React, { FormEvent, useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import logoImage from "./images.jpg";
import { signUp } from "../actions/users/SignUp";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [universityId, setUniversityId] = useState("");
  const [regNumber, setRegNumber] = useState("");

  const handleSubmit = async () => {
     if (!email || !password || !universityId || !regNumber) {
    setMessage('Please fill in all required fields.');
    return;
  }
    setMessage("Signing up...");
    const message = await signUp(email, password, universityId, regNumber);
    setMessage(message);
    console.log("Message:", message);

    if (message === "Successfully created new user!") {
      // Redirect to the sign-in page
      router.push("/auth/signin"); // Update the path accordingly
    }
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up" id="sigNUp">
        <form onSubmit={handleSubmit}>
          <Image src={logoImage} width={200} height={150} alt="Logo" />
          <h1>Create an Account</h1>
          <span>Use your email for registration</span>
          <br />
          <input
            type="text"
            placeholder="RegNo"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            id="uni"
            name="university"
            value={universityId}
            onChange={(e) => setUniversityId(e.target.value)}
          >
            <option value="">Select University</option>
            <option value="1">University Of Malawi</option>
            <option value="2">
              Malawi University of Business and Applied Sciences
            </option>
            <option value="3">
              Lilongwe University of Agriculture and Natural Resources
            </option>
            <option value="4">Mzuzu University</option>
            <option value="5">
              Malawi University of Science and Technology
            </option>
            <option value="6">College of Medicine</option>
          </select>
          <p
            className={`message ${message && message.startsWith("Error") ? "text-red-500" : ""
            }`}
          >
            {message}
          </p>
          <b className="hidden" onClick={handleSubmit}>
            create account
          </b>
          <p>
            Already have an account?<a className="hidden"> Login</a>
          </p>{" "}
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
