import Link from "next/link";

const ButtonLogin = ({ session, extraStyle }) => {
  if (session) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {session.user.name || "friend"}
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};

export default ButtonLogin;
