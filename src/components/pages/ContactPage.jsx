import BlueButton from "../common/BlueButton";

export default function ContactPage() {
  const Aboutme = {
    about:
      "The story of Felix wasn't just a tale of a lighthouse keeper. It was the story of a young boy's courage, his dream, and how he became a beacon of hope for his small coastal town.r",
    email: "Ligthman@gmail.com",
    phoneNumber: "+976 99111199",
  };
  return (
    <maincontact className="w-screen flex justify-center border-t">
      <div className="container max-w-screen-md flex gap-5 flex-col">
        <div className="p-3 flex flex-col gap-5">
          <h1>Contact Us</h1>
          <p>{Aboutme.about}</p>
          <div className="flex gap-3">
            <div className="border rounded-2xl w-1/2 p-3 ">
              <h2>Address</h2>
              <p>{Aboutme.email}</p>
            </div>
            <div className="border rounded-2xl w-1/2 p-3 ">
              <h2>Contact</h2>
              <p>{Aboutme.phoneNumber}</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="flex flex-col bg-[var(--secondary-100)] gap-4 p-4 rounded-lg">
          <h2>Leave a Message</h2>
          <div className="flex justify-between gap-5">
            <input
              className="border rounded-xl px-4 py-2 w-full"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border rounded-xl px-4 py-2 w-full"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <input
            className="border rounded-xl px-4 py-2"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border rounded-xl px-4 py-2 "
            type="textarea"
            rows="5"
            placeholder="Write a message"
          ></textarea>
          <BlueButton link={""} title={"Send Message"} />
        </div>
      </div>
    </maincontact>
  );
}
