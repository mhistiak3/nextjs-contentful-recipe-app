import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const route = useRouter();
  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 4000);
  }, []);
  return (
    <div>
      <main className="container">
        <h1>404</h1>
        <div className="pizza"></div>
        <div className="cheese">
          <div className="pepperoni pep-1"></div>
          <div className="pepperoni pep-2"></div>
          <div className="pepperoni pep-3"></div>
          <div className="pepperoni pep-4"></div>
          <div className="pepperoni pep-5"></div>
          <div className="pepperoni pep-6"></div>
          <div className="pepperoni pep-7"></div>
          <div className="pepperoni pep-8"></div>
          <div className="pepperoni pep-9"></div>
          <div className="pepperoni pep-10"></div>
          <div className="pepperoni pep-11"></div>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>
        <Link href={"/"}>
          <a>Back to Home</a>
        </Link>
      </main>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
        .container {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          font-family: "Poiret One", sans-serif;
          font-size: 10rem;
          color: #38b000;
        }

        .pizza {
          position: absolute;
          width: 140px;
          height: 140px;
          margin-top: -40px;
          border-radius: 50%;
          background: #f77f00;
        }

        .cheese {
          position: absolute;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: #fcbf49;
          margin-top: -40px;
        }
        a {
          padding: 10px 20px;
          background-color: white;
          text-decoration: none;
          font-size: 18px;
          color: black;
        }
        .pepperoni {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #d62828;
        }

        .pep-1 {
          top: 25px;
          left: 15px;
        }

        .pep-2 {
          top: 22px;
          left: 75px;
        }

        .pep-3 {
          top: 5px;
          left: 47px;
        }

        .pep-4 {
          top: 73px;
          left: 20px;
        }

        .pep-5 {
          top: 72px;
          left: 70px;
        }

        .pep-6 {
          top: 49px;
          left: 82px;
        }

        .pep-7 {
          top: 54px;
          left: 54px;
        }

        .pep-8 {
          top: 85px;
          left: 50px;
        }

        .pep-9 {
          top: 50px;
          left: 3px;
        }

        .pep-10 {
          top: 50px;
          left: 30px;
        }

        .pep-11 {
          top: 29px;
          left: 50px;
        }

        .line {
          position: absolute;
          top: 55px;
          left: -10px;
          width: 130px;
          height: 1px;
          background: #6a040f;
          opacity: 0.25;
        }

        .line-1 {
          transform: rotate(0deg);
        }

        .line-2 {
          transform: rotate(45deg);
        }

        .line-3 {
          transform: rotate(-45deg);
        }

        .line-4 {
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  );
};

export default NotFound;
