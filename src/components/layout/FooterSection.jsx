import MainButton from "../common/MainButton";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkendnIcon,
  TwitterIcon,
} from "../Icons";

export const FooterSection = () => {
  const Aboutme = {
    about:
      "The story of Felix wasn't just a tale of a lighthouse keeper. It was the story of a young boy's courage, his dream, and how he became a beacon of hope for his small coastal town.r",
    email: "Ligthman@gmail.com",
    phoneNumber: "+976 99111199",
  };
  return (
    <main className="w-screen flex justify-center pt-16 mt-4 border-t bg-[var(--secondary-50 border-[var(--secondary-100)])]">
      <div className="container max-w-screen-lg flex justify-between">
        <div className="">
          <div className="w-1/2">
            <h1>About</h1>
            <p>{Aboutme.about}</p>
            <p>
              Email: <span>{Aboutme.email}</span>
            </p>
            <p>
              Phone: <span>{Aboutme.phoneNumber}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between w-1/2">
          <div className="flex flex-col">
            <MainButton link={"/"} title={"Home"} />
            <MainButton link={"/bloglist"} title={"Blog"} />
            <MainButton link={"/contact"} title={"Contact"} />
          </div>
          <div className="flex gap-4">
            <FaceBookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkendnIcon />
          </div>
        </div>
      </div>
    </main>
  );
};
