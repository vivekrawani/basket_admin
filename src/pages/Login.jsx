import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gLogin } from "../features/auth/authSlice";
export default function Login() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    for (const [key, val] of data) {
      console.log(key, ":", val);
    }
  };
  return (
    <div className="flex justify-center flex-col">
      <div>
        <h1>Container</h1>
      </div>
      <form ref={formRef} onSubmit={(e) => submitHandler(e)}>
        <div className="flex flex-col gap-4">
          <h2>Login</h2>
          <input type="email" name="email" className="rounded-full" />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="rounded-full h-16 p-5"
          />
          <button type="submit" onSubmit={(e) => submitHandler(e)}>
            Submit
          </button>
          <div className="flex flex-row">
            <hr className="w-3/12" /> <div className="w-2/12">OR</div>{" "}
            <hr className="w-3/12" />
          </div>
          <button
            type="button"
            onClick={() => {
              dispatch(gLogin()).then(() => {
                navigate("/");
              });
            }}
          >
            Continue With Google{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

/*
 */
