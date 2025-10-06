import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";

export default function Home() {
  const isLoggedIn = true;
  const name = "Marc";

  return (
    <main>
      <section className="bg-fuchsia-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="font-bold">CodeFastSaaS</div>
          <div className="space-x-4 md:bg-red-300">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-accent" href="#faq">
              FAQ
            </a>
          </div>
          <div className="bg-green-300">
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="text-center py-32 px-8 mb-4">
        <button className="text-3xl font-bold px-8">Get started</button>
        {/* <div onClick={() => console.log("Clicked!")}></div> */}
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      <section className="bg-base-300" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-lg uppercase text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extralight mb-8 text-center">
            A pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto">
            <div className="flex gap-1 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "Collect customer feedback",
                "Unlimited boards",
                "Admin dashboard",
                "24/7 support",
              ].map((priceItem) => (
                <li className="flex gap-2 items-center" key={priceItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="text-green-600 size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {priceItem}
                </li>
              ))}
            </ul>
            <ButtonLogin isLoggedIn={isLoggedIn} extraStyle="w-full" />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "What do I get exactly?",
                answer: "Loreum Ipseum",
              },
              {
                question: "Can I get a refund?",
                answer:
                  "Loreum IpseumIf you are unsatisfy with our product and service, you may definitely get the refund by writing in.",
              },
              {
                question: "I have another question",
                answer: "Loreum Ipseum",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
