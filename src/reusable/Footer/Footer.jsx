import React from "react";
import s from "./style.module.css";

export const Footer = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Copied to clipboard: ${text}`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div className={s.Footer}>
      <div className={s.Footer_links}>
        <a target="_blank" href="https://github.com/HydrochoerusBeb">
          HydrochoerusBeb
        </a>
        <button
          onClick={() => copyToClipboard("@AlexanderMocha")}
          className={s.CopyButton}
        >
          TG Username
        </button>
        <a href="https://github.com/HydrochoerusBeb/npc_irs_test.git">
          Repo Link
        </a>
      </div>
      <div className={s.Footer_text}>
        © {new Date().getFullYear()} Test work. Use it how you wish.
      </div>
    </div>
  );
};
