import Navbar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="internal-background base-text">
      <br />
      <h1 className="base-header">Welcome!</h1>
      <br />
      <p>
        Welcome to Veggie Village! We are dedicated to providing the freshest and most delicious vegetables to our community. Our mission is to promote healthy eating habits and support local farmers.
      </p>
      <br />
      <p className="base-header">
        "Nature's Bounty on Your Plate!"
      </p>
      <br />
      <p className="">
        Here at Veggie Village, we believe that it is incredibly important to source our food well. Currently, we live in a society where more and more food is coated in toxins to protect vegetation. Not only is it less common to find healthy toxin-free vegetation, but it’s even harder to find it at a low, affordable price. Here at Veggie Village, we strive to keep our ingredients free of pesticides and toxins while maintaining the affordable price. Here, we prioritize your experience, health, and a wide range of affordability.
      </p>
      <br />
      <p className="">
        We value the health and safety of our customers. We have ensured each vegetable brought to you has been checked for any health and safety concerns, free of dirt, and fresh from the ground.
      </p>
      <br />
      <p className="">
        We believe that affordability is an incredibly important value in Veggie Village to ensure that everyone has access to clean and delicious vegetables. Many people become susceptible to diseases like diabetes when they lack money, which plays a big role in someone’s access to healthy meals.
      </p>
      <br />
      <p className="">
        The prices of vegetables and other grains continue to grow due to inflation, but fast food meals have always been on the cheap end. Due to a low income, that may be all someone can afford. However, we believe that having healthy vegetables to eat is not a privilege, but a right and we strive to grant that right to each and every person.
        Rest assured, our staff will do their best to serve you in the best way possible. The third virtue we strictly adhere to is how we treat our customers: with respect and kindness. All our food is made with lots of love and care.
      </p>
      <img className="main-image h-8" src="/webmaster-logo.png" alt="Veggie-Village Logo"/>
    </div>
  );
}
