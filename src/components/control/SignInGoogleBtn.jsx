import icon from "../../assets/images/GoogleIcon.jpg";
import Image from "next/image";
export default function SocialMediaBtns({ signInWithGoogle }) {
  return (
    <div
      onClick={signInWithGoogle}
      className=" c-thin-border rounded-md cursor-pointer w-1/2 flex  items-center"
    >
      <div className="icon-wrapper">
        <Image className={` ${"google-icon"}`} src={icon} />
      </div>
      <p className="btn-text ml-15 ">
        <b>{"sign in with google"} </b>
      </p>
    </div>
  );
}
