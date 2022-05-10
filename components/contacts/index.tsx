import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import cls from "classnames";

import Api from "@api/.";
import { EMAIL_PATTERN } from "@utils/constants";

import styles from "./style.module.scss";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (error || success) {
      setTimeout(() => {
        setError(false);
        setSuccess(false);
      }, 5000);
    }
  }, [error, success]);

  const onSubmit = async (data: {
    name: string;
    email: string;
    text: string;
  }) => {
    setLoading(true);
    const res = await Api.mailer.sendToMailer(data);

    if (res.status === "success") {
      setLoading(false);
      setSuccess(true);
      reset();
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Contact</h1>

          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit as any)}
          >
            <div className={styles.section}>
              <label className={styles.label} htmlFor="form_name">
                Name
              </label>

              <input
                className={cls(styles.input, { [styles.error]: errors?.name })}
                type="text"
                id="form_name"
                {...register("name", { required: true })}
              />
            </div>

            <div className={styles.section}>
              <label className={styles.label} htmlFor="form_email">
                Email
              </label>

              <input
                className={cls(styles.input, { [styles.error]: errors?.email })}
                type="email"
                id="form_email"
                {...register("email", {
                  required: true,
                  pattern: EMAIL_PATTERN,
                })}
              />
            </div>

            <div className={styles.section}>
              <label className={styles.label} htmlFor="form_text">
                Message
              </label>

              <textarea
                className={cls(styles.input, { [styles.error]: errors?.text })}
                rows={10}
                cols={35}
                maxLength={200}
                id="form_text"
                {...register("text", { required: true })}
              />
            </div>

            {loading && <span className={styles.loading}>Loading...</span>}

            {success && (
              <span className={styles.success}>
                Success! Soon we will contact you
              </span>
            )}

            {error && (
              <span className={styles.error}>Error, try again later :(</span>
            )}

            <button className={styles.button} type="submit" disabled={loading}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
