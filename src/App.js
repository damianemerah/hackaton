import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import bulb from "./img/Creative 1.png";
import star1 from "./img/star.png";
import starSm from "./img/star-wht-sm.png";
import starSm2 from "./img/star_sm.png";
import star2 from "./img/star-1.png";
import vector4 from "./img/Vector_4.png";
import fire from "./img/1f4a5.png";
import bigIdea from "./img/the big idea 1.png";
import chain from "./img/chain-9365116-7621444.png";
import star3 from "./img/sata_gra.png";
import star4 from "./img/star_pu.png";
import star5 from "./img/star_pu_sm.png";
import star6 from "./img/sata_gra_sm.png";
import arrow from "./img/arrow.png";
import ellipse from "./img/Ellipse_2.png";
import ladyImage from "./img/7450159_1.png";
import people from "./img/8046554_1.png";
import thinkMan from "./img/cwok_casual_21.png";
import plus from "./img/+.png";
import trophy from "./img/9486889.png";
import silver from "./img/silver_medal.png";
import gold from "./img/gold_medal.png";
import bronze from "./img/bronze_medal.png";
import liberty1 from "./img/Liberty_company_logo_white_colour.png";
import liberty2 from "./img/Liberty_company_logo_white.png";
import winwise from "./img/Winwise_logo_White_colour.png";
import wisper from "./img/wisper_logo_white.png";
import vuzual from "./img/group.png";
import paybox from "./img/Paybox.png";
import manKey from "./img/08.png";
import vector from "./img/Vector.png";
import fb from "./img/Vector-1.png";
import x from "./img/Vector-2.png";
import linkedIn from "./img/ri_linkedin-fill.png";
import insta from "./img/mdi_instagram.png";
import location from "./img/location.png";
import contact from "./img/contact.png";
import listTerm from "./img/list_terms.png";
import smartMan from "./img/smart_man.png";
import circleStar from "./img/Image _1.png";
import q1 from "./img/_.png";
import q2 from "./img/_-1.png";
import q3 from "./img/_-2.png";
import bg1 from "./img/Purple-Lens-Flare-PNG.png";
import bg2 from "./img/Purple-Lens-Flare-PNG-1.png";
import bg3 from "./img/Purple-Lens-Flare-PNG-2.png";
import bg4 from "./img/Purple-Lens-Flare-PNG-3.png";
import bg5 from "./img/Purple-Lens-Flare-PNG-4.png";
import bg6 from "./img/Purple-Lens-Flare-PNG-5.png";
import bg7 from "./img/Purple-Lens-Flare-PNG-6.png";
import bg8 from "./img/Purple-Lens-Flare-PNG-7.png";
import bg9 from "./img/Purple-Lens-Flare-PNG-8.png";
import bg10 from "./img/Purple-Lens-Flare-PNG-9.png";
import bg11 from "./img/Purple-Lens-Flare-PNG-10.png";
import menuClose from "./img/menu-close.png";

function MenuIcon() {
  return (
    <svg
      className="menu-icon"
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
        fill="white"
      />
    </svg>
  );
}

// Define page components
function HomePage() {
  useEffect(() => {
    document.querySelectorAll(".bg").forEach((bg) => {
      bg.style.display = "block";
    });

    return () => {
      document.querySelectorAll(".bg").forEach((bg) => {
        bg.style.display = "none";
      });
    };
  }, []);

  return (
    <>
      <header className="header">
        <img className="star star1" src={star1} alt="star" />
        <img className="star star2" src={star2} alt="star" />
        <img className="star star2-2" src={star2} alt="star" />

        <div className="header__content">
          <p className="container text__desc">
            <span>Igniting a Revolution in </span>
            <span className="text__desc-sub">
              HR Innovation
              <img src={vector4} alt="Vector_4" />
            </span>
          </p>
          <div className="header__text-box">
            <div className="header__text">
              <div className="header--1">
                <h1>
                  getlinked Te
                  <span>
                    c
                    <img className="bulb" src={bulb} alt="bulb designer" />
                  </span>
                  h
                </h1>
              </div>
              <div className="header--2">
                <h1>
                  Hackathon{" "}
                  <span className="header__text--num">
                    1.0
                    <img className="fire" src={fire} alt="fire design" />
                    <img className="chain" src={chain} alt="chain design" />
                  </span>
                </h1>
              </div>
              <p>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <Link to="/register" className="register">
                Register
              </Link>
              <div className="time-box">
                <p className="time">
                  <span className="time__num">00</span>
                  <span className="time__str">H</span>
                </p>
                <p className="time">
                  <span className="time__num">00</span>
                  <span className="time__str">M</span>
                </p>
                <p className="time">
                  <span className="time__num">00</span>
                  <span className="time__str">S</span>
                </p>
              </div>
            </div>
            <div className="header__img">
              <img src={smartMan} alt="Smart man" />
              <img className="circleStar" src={circleStar} alt="Smart world" />
            </div>
          </div>
        </div>
      </header>
      <AboutPage />
      <RulesPage />
      <FeaturesPage />
      <FAQ />
      <Timeline />
      <Prizes />
      <Partners />
      <Policy />
      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <section className="about">
      <div className="container about__content">
        <div className="about__img">
          <img className="arrow" src={arrow} alt="arrow design" />
          <img className="star star3" src={star3} alt="Star design" />
          <img src={bigIdea} alt="The big Idea" />
        </div>
        <div className="about__text">
          <img className="star star4" src={star4} alt="Star design" />
          <h2>
            <span>Introduction to getlinked</span>
            <span>tech Hackathon 1.0</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </section>
  );
}

function RulesPage() {
  return (
    <section className="rules">
      <div className="container rules__content">
        <div className="rules__text">
          <img className="star star6" src={star2} alt="star" />
          <h2>
            <span>Rules and</span>
            <span>Guidelines</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="rules__img">
          <img className="star star5" src={star1} alt="star" />
          <img src={ladyImage} alt="A lady reading" />
        </div>
      </div>
    </section>
  );
}

function FeaturesPage() {
  return (
    <section className="features">
      <div className="container features__content">
        <div className="features__img">
          <img className="star star8" src={star2} alt="star" />
          <img className="star star9" src={star4} alt="star" />
          <img className="ellipse" src={ellipse} alt="ellipse" />
          <img src={people} alt="People" />
        </div>
        <div className="features__text">
          <img className="star star7" src={star1} alt="star" />

          <h2>
            <span>Judging Criteria</span>
            <span>Key attributes</span>
          </h2>
          <p>
            <span>Innovation and Creativity:</span> Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>
          <p>
            <span>Functionality:</span> Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </p>
          <p>
            <span>Impact and Relevance:</span> Determine the potential impact of
            the solution in the real world. Does it address a significant
            problem, and is it relevant to the target audience? Judges would
            assess the potential social, economic, or environmental benefits.
          </p>
          <p>
            <span>Technical Complexity:</span> Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </p>
          <p>
            <span>Adherence to Hackathon Rules:</span> Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements.
          </p>

          <Link to="#" className="register">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

function Dropdown({ question, answer, isOpen, onClick }) {
  return (
    <>
      <div className="dropdown">
        <p className="dropdown__que" onClick={onClick}>
          <span>{question}</span>
          <span>
            <img className="plus" src={plus} alt="Plus icon" />
          </span>
        </p>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown__ans"
        unmountOnExit
      >
        <p className={`dropdown__ans`}>{answer}</p>
      </CSSTransition>
    </>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const questionsAndAnswers = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sequi molestias dolor ea alias. Laboriosam quasi vel saepe tempore rem.s",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sequi molestias dolor ea alias. Laboriosam quasi vel saepe tempore rem.s",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sequi molestias dolor ea alias. Laboriosam quasi vel saepe tempore rem.s",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sequi molestias dolor ea alias. Laboriosam quasi vel saepe tempore rem.s",
    },
    {
      question: "What happens after the hackathon ends",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sequi molestias dolor ea alias. Laboriosam quasi vel saepe tempore rem.s",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sequi molestias dolor ea alias. Laboriosam quasi vel saepe tempore rem.s",
    },
  ];
  return (
    <section className="faq">
      <div className="container faq__content">
        <div className="faq__text">
          <img className="star star14" src={star4} alt="star design" />

          <h2>
            <span>Frequently Ask</span>
            <span>Questions</span>
          </h2>
          <p className="faq__text-sub">
            <span>We got answers to the questions that you might </span>
            <span>
              want to ask about{" "}
              <span className="faq__text-span">getlinked Hackathon 1.0</span>
            </span>
          </p>

          <div className="faq__questions">
            {questionsAndAnswers.map((questionAndAnswer, index) => (
              <Dropdown
                key={index}
                question={questionAndAnswer.question}
                answer={questionAndAnswer.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
        <div className="faq__img">
          <img src={q1} alt="icon" className="ques q1" />
          <img src={q2} alt="icon" className="ques q2" />
          <img src={q3} alt="icon" className="ques q3" />
          <img className="star star10" src={star1} alt="star design" />
          <img className="star star11" src={star2} alt="star design" />
          <img className="star star12" src={star3} alt="star design" />
          <img className="star star13" src={star3} alt="star design" />
          <img src={thinkMan} alt="A Man thinking" />
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline">
      <div className="container timeline__content">
        <div className="timeline__text">
          <h2>
            <span>Timeline</span>
            <span>Key Dates</span>
          </h2>
          <p className="timeline__text-sub">
            <span>Here is the breakdown of the time we anticipate</span>
            <span>using for the upcoming event.</span>
          </p>
        </div>
        <div className="timeline__dates">
          <img className="star star15" src={star1} alt="" />
          <img className="star star16" src={star2} alt="" />
          <img className="star star17" src={star4} alt="" />
          <div className="timeline__row">
            <div className="timeline__row-content timeline__row--left">
              <h3 className="show--sm">November 18, 2023</h3>
              <h3>Hackathon Announcement</h3>
              <p>
                <span>
                  The getlinked tech hackathon 1.0 is formally announced
                </span>
                <span>
                  to the general public and teams begin to get ready to register
                </span>
              </p>
            </div>
            <div className="timeline__row-num">
              <p className="timeline__first-after">1</p>
            </div>
            <h3 className="timeline__row--right hide-sm">November 18, 2023</h3>
          </div>
          <div className="timeline__row">
            <h3 className="timeline__row--left hide-sm">November 18, 2023</h3>

            <div className="timeline__row-num">
              <p className="">2</p>
            </div>

            <div className="timeline__row-content timeline__row--right">
              <h3 className="show--sm">November 18, 2023</h3>
              <h3>Teams Registration begins</h3>
              <p>
                <span>Interested teams can now show their interest in the</span>
                <span>
                  getlinked tech hackathon 1.0 2023 by proceeding to register
                </span>
              </p>
            </div>
          </div>
          <div className="timeline__row">
            <div className="timeline__row-content timeline__row--left">
              <h3 className="show--sm">November 18, 2023</h3>
              <h3>Teams Registration ends</h3>
              <p>
                <span>Interested Participants are no longer Allowed to</span>
                <span>register</span>
              </p>
            </div>
            <div className="timeline__row-num">
              <p>3</p>
            </div>
            <h3 className="timeline__row--right hide-sm">November 18, 2023</h3>
          </div>
          <div className="timeline__row">
            <h3 className="timeline__row--left hide-sm">November 18, 2023</h3>

            <div className="timeline__row-num">
              <p className="">4</p>
            </div>

            <div className="timeline__row-content timeline__row--right">
              <h3 className="show--sm">November 18, 2023</h3>
              <h3>Announcement of the accepted teams and ideas</h3>
              <p>
                <span>
                  All teams whom idea has been accepted into getlinked tech
                </span>
                <span>hackathon 1.0 2023 are formally announced</span>
              </p>
            </div>
          </div>
          <div className="timeline__row">
            <div className="timeline__row-content timeline__row--left">
              <h3 className="show--sm">November 18, 2023</h3>
              <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
              <p>
                <span>Accepted teams can now proceed to build their</span>
                <span>ground breaking skill driven solutions</span>
              </p>
            </div>
            <div className="timeline__row-num">
              <p>5</p>
            </div>
            <h3 className="timeline__row--right hide-sm">November 18, 2023</h3>
          </div>
          <div className="timeline__row">
            <h3 className="timeline__row--left hide-sm">November 18, 2023</h3>

            <div className="timeline__row-num">
              <p className="">6</p>
            </div>

            <div className="timeline__row-content timeline__row--right">
              <h3 className="show--sm">November 18, 2023</h3>
              <h3>Demo Day</h3>
              <p>
                <span>
                  Teams get the opportunity to pitch their projects to judges.
                </span>
                <span>
                  The winner of the hackathon will also be announced on
                </span>
                <span>this day</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Prizes() {
  return (
    <section className="prize">
      {/* <img className="bg bg7" src={bg7} alt="background" />
      <img className="bg bg8" src={bg8} alt="background" /> */}
      <img className="star star18" src={starSm} alt="background" />
      <img className="star star19" src={star1} alt="background" />
      <img className="star star20" src={star1} alt="background" />
      <img className="star star21" src={star3} alt="background" />
      <img className="star star22" src={star2} alt="background" />
      <img className="star star23" src={star1} alt="background" />

      <div className="container prize__content">
        <div className="prize__text-box">
          <div className="prize__text">
            <h2>
              <span>Prizes and</span>
              <span>Rewards</span>
            </h2>
            <p className="prize__text-sub">
              <span>Here is the breakdown of the time we anticipate</span>
              <span>using for the upcoming event.</span>
            </p>
          </div>
        </div>

        <div className="prize__img-box">
          <div className="prize__cup">
            <img src={trophy} alt="trophy" />
          </div>
          <div className="prize__tags">
            <div className="second__prize">
              <img src={silver} alt="Silver medal" />
              <h2>
                <span>2nd</span>
                <span>Runner</span>
                <span>N300,000</span>
              </h2>
            </div>
            <div className="first__prize">
              <img src={gold} alt="Gold medal" />
              <h2>
                <span>1st</span>
                <span>Runner</span>
                <span>N400,000</span>
              </h2>
            </div>
            <div className="third__prize">
              <img src={bronze} alt="Bronze medal" />
              <h2>
                <span>3rd</span>
                <span>Runner</span>
                <span>N150,000</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="partners">
      <img className="star star24" src={star1} alt="star" />
      <img className="star star25" src={star4} alt="star" />
      <img className="star star26" src={star3} alt="star" />
      <div className="container partners__content">
        <div className="partners__text">
          <h2>Partners and Sponsors</h2>
          <p className="partners__text-sub">
            <span>
              Getlinked Hackathon 1.0 is honored to have the following major
            </span>
            <span>companies as its partners and sponsors</span>
          </p>
        </div>

        <div className="partners__logo-box">
          <div className="partners__logo">
            <div className="border--2">
              <img src={liberty1} alt="Partner Logo" />
            </div>
            <div className="border--2">
              <img src={liberty2} alt="Partner Logo" />
            </div>
            <div className="border--1__vert">
              <img src={winwise} alt="Partner Logo" />
            </div>
            <div className="border--1">
              <img src={wisper} alt="Partner Logo" />
            </div>
            <div className="border--1">
              <img src={paybox} alt="Partner Logo" />
            </div>
            <div>
              <img src={vuzual} alt="Partner Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Policy() {
  return (
    <section className="policy">
      <img className="star star27" src={star2} alt="star" />
      <img className="star star28" src={star2} alt="star" />
      <img className="star star29" src={star4} alt="star" />
      <img className="star star30" src={star5} alt="star" />
      <img className="star star31" src={star6} alt="star" />
      <img className="star star32" src={starSm} alt="star" />
      <img className="star star33" src={starSm} alt="star" />
      <div className="container policy__content">
        <div className="policy__content-main">
          <div className="policy__text">
            <h2>
              <span>Privacy Policy and</span>
              <span>Terms</span>
            </h2>
            <p className="policy__text-sub--1">
              Last updated on September 12, 2023
            </p>
            <p className="policy__text-sub--2">
              <span>
                Below are our privacy & policy, which outline a lot of goodies.
              </span>
              <span>it’s our aim to always take of our participant</span>
            </p>
          </div>
          <div className="policy__details">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="policy__details-list">
              <h2>Licensing Policy</h2>
              <p className="policy__text--bold">
                Here are terms of our Standard License:
              </p>
              <div className="policy__list">
                <img src={listTerm} alt="Check icon" />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="policy__list">
                <img src={listTerm} alt="Check icon" />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
            <div className="policy__btn">
              <Link to="#" className="register">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="policy__img">
          <img className="padlock" src={vector} alt="lock logo" />
          <img className="man-key" src={manKey} alt="A man on a key" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="footer">
      <img className="star star34" src={starSm} alt="star" />
      <img className="star star35" src={starSm} alt="star" />
      <img className="star star36" src={starSm2} alt="star" />
      <img className="star star37" src={star6} alt="star" />
      <div className="container footer__content">
        <div className="footer__about">
          <div>
            <Link to="/" className="logo footer__logo">
              <span className="logo--1">get</span>
              <span className="logo--2">linked</span>
            </Link>
            <p className="footer__about-text">
              <span>
                Getlinked Tech Hackathon is a technology innovation program
              </span>
              <span>
                established by a group of organizations with the aim of
                showcasing
              </span>
              <span>
                young and talented individuals in the field of technology
              </span>
            </p>
          </div>
          <div className="footer__term">
            <p>Terms of Use</p>
            <div>&nbsp;</div>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="footer__links">
          <h3>Useful Links</h3>
          <ul>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>
          <div className="footer__links-icon">
            <p>Follow us</p>
            <img src={insta} alt="Instagram icon" />
            <img src={x} alt="X icon" />
            <img src={fb} alt="facebook icon" />
            <img src={linkedIn} alt="linkedin icon" />
          </div>
        </div>
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <div className="footer__contact-list"></div>
          <div className="footer__contact-item">
            <img src={contact} alt="contact icon" />
            <p>+234 679 81819</p>
          </div>
          <div className="footer__contact-item">
            <img src={location} alt="location icon" />
            <p>
              <span>27,Alara Street</span>
              <span>Yaba 100012</span>
              <span>Lagos State</span>
            </p>
          </div>
        </div>
      </div>
      <p className="footer__right">All rights reserved. © getlinked Ltd.</p>
    </section>
  );
}

function RegisterPage() {
  return <h1>Register Page</h1>;
}

function ContactPage() {
  return <h1>Contact Page</h1>;
}

// Define navigation component
function Navigation() {
  const nodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    console.log("open");
  }
  return (
    <nav>
      <div className="nav container">
        <Link to="/" className="logo">
          <span className="logo--1">get</span>
          <span className="logo--2">linked</span>
        </Link>
        <MenuIcon onClick={() => setIsOpen(!isOpen)} />

        <CSSTransition
          nodeRef={nodeRef}
          in={isOpen}
          timeout={400}
          classNames="open"
          unmountOnExit
        >
          <div className="nav__links nav__links--sm" ref={nodeRef}>
            <img
              onClick={() => setIsOpen(!isOpen)}
              className="menu-close"
              src={menuClose}
              alt="menu close button"
            />
            <ul>
              <li>
                <Link to="#">Timeline</Link>
              </li>
              <li>
                <Link to="#">Overview</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <Link to="/register" className="register">
              Register
            </Link>
          </div>
        </CSSTransition>
        <div className="nav__links nav__links--big">
          <ul>
            <li>
              <Link to="#">Timeline</Link>
            </li>
            <li>
              <Link to="#">Overview</Link>
            </li>
            <li>
              <Link to="#">FAQs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/register" className="register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Define your main App component
function App() {
  return (
    <Router>
      <div className="app">
        <img className="bg bg1" src={bg1} alt="background designer" />
        <img className="bg bg2" src={bg2} alt="background designer" />
        <img className="bg bg3" src={bg3} alt="background designer" />
        <img className="bg bg4" src={bg4} alt="background designer" />
        <img className="bg bg5" src={bg5} alt="background designer" />
        <img className="bg bg6" src={bg6} alt="background designer" />
        <img className="bg bg7" src={bg7} alt="background designer" />
        <img className="bg bg8" src={bg8} alt="background designer" />
        <img className="bg bg9" src={bg9} alt="background" />
        <img className="bg bg10" src={bg10} alt="background" />
        <img className="bg bg11" src={bg11} alt="background" />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
