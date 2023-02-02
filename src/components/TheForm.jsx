import React from "react";
import { useForm } from "react-hook-form";

// どうも css module を react コンポーネントで読み込むようにすると最初はスタイルが反映されない現象が起こってしまう
// join() してるからか？
// scss で extend して一つのクラスにまとめてもだめだ
// なんかデフォルトの css スタイルの優先度に、module のスタイルの優先度が負けていたようだ
// :root で囲って優先度を上げたら問題なくなった・ω・
import Styles from "@styles/the-form.module.scss";

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            name
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && <div>エラー</div>}
          </label>
        </div>
        <div>
          <label>
            email
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && <div>エラー</div>}
        </div>
        <button className={Styles["button-1"]} type="submit">
          送信する
        </button>
        <button
          className={[
            Styles.button,
            Styles["button-semitransparent"],
            Styles["button-glow"],
          ].join(" ")}
          type="submit"
        >
          送信する
        </button>
        <button
          className={[
            Styles.button,
            Styles["button-gradient-border"],
            Styles["button-glow"],
          ].join(" ")}
          type="submit"
        >
          送信する
        </button>
      </form>
    </div>
  );
};
