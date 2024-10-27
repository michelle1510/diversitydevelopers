import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { exec } from "child_process";
import {FaInstagram, FaGithub} from 'react-icons/fa';
import groupmeIcon from '../images/groupme.svg';
import 'font-awesome/css/font-awesome.min.css';
import DD_ShachiM from '../images/DD_ShachiM.jpg'
import DD_DishaP from '../images/DD_DishaP.jpg';
import DD_MedhaE from '../images/DD_MedhaE.jpg';
import DD_YashN from '../images/DD_YashN.jpg';
import DD_VarshaV from '../images/DD_VarshaV.jpg';
import DD_MichelleL from '../images/DD_MichelleL.jpg';
import DD_PralayR from '../images/DD_PralayR.jpg';
import DD_SimonX from '../images/DD_SimonX.jpg';

const execProfiles = [
  { label: "President", name: "Shachi Mahajan", image: DD_ShachiM },
  { label: "Vice President", name: "Disha Patel", image: DD_DishaP},
  { label: "Treasurer", name: "Medha Elchuri", image: DD_MedhaE},
  { label: "Marketing", name: "Yash Napa", image: DD_YashN},
  { label: "Mentorship Lead", name: "Varsha Venkateshwaran", image: DD_VarshaV},
  { label: "Web Master", name: "Michelle Li", image: DD_MichelleL},
  { label: "Event Coordinator", name: "Pralay Ray", image: DD_PralayR},
  { label: "Event Coordinator", name: "Simon Xiao", image: DD_SimonX},
];

const projects = [
  {
    title: "Mentorship Social",
    description: "Mentorship Social",
    image: "/assets/ms1.jpeg",
  },
  {
    title: "Mentorship Social",
    description: "",
    image: "/assets/ms3.jpeg",
  },
  {
    title: "Mentorship Social",
    description: "",
    image: "/assets/ms4.jpeg",
  },
  {
    title: "Hackathon 2024",
    description: "Fall Hackathon 2024",
    image: "/assets/hack5.jpeg",
  },
  {
    title: "Hackathon 2024",
    description: "",
    image: "/assets/hack2.jpeg",
  },
  {
    title: "Hackathon 2024",
    description: "",
    image: "/assets/hack3.jpeg",
  },
  {
    title: "Hackathon 2024",
    description: "Congrats to our winners!",
    image: "/assets/hack6.jpeg",
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 400) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Home */}
        <section
          id="home"
          data-scroll-section
          data-scroll-position="top"
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Diversity Developers
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-4xl 2xl:text-8xl">
                  @The Ohio State University.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                Dedicated to promoting general diversity in computing and encouraging those in other fields to gain
                computing knowledge.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Learn more{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0 relative"
          >
          <span data-scroll-section className="absolute inset-0">
            <Spline
              className={styles.spline}
              scene="https://prod.spline.design/cfpOqRUESWV35QMo/scene.splinecode"
            />
            </span>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px] mb-40">
              Diversity Developers was established in 2024. We aim to hold one hacakthon and one conference per year. In our
              general meetings, we host workshops on various technical and career development skills. Our goal is to provide basic coding 
              knowledge to anyone who would like to learn. Diversity Developers is catered toward those who are interested in exploring
              more about the technology sector and learning to code. 
            </h2>
          </div>
         </section> 

         <section id="exec" data-scroll-section className="overflow-hidden mt-32">
            <div className="clash-grotesk text-gradient text-3xl font-semibold tracking-tight xl:text-6xl ml-10 mb-20">
              Exec Board
            </div>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {execProfiles.map((stat) => (
                <div
                  key={`${stat.label}-${stat.name}`}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                <img
                  src={typeof stat.image === 'string' ? stat.image : stat.image.src}
                  alt={`${stat.name}'s profile`}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />

                  <span className="clash-grotesk text-gradient text-2xl font-semibold tracking-tight xl:text-6xl">
                    {stat.name}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
        </section>

        {/* Event Gallery */}
        <section id="gallery" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ 
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Event Gallery
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Check out some photos from our past events:
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                photos
              </div>
            </div>
          </div>
        </section>

        <section id="engage" data-scroll-section className="flex flex-col items-center justify-center">
          <span className="clash-grotesk text-gradient text-4xl 2xl:text-8xl">
            Get involved!
          </span>
          <div className="Socials mt-10 text-4xl mb-40">
            <span className="flex items-center space-x-2">
              <FaInstagram style={{fontSize: '4.5vw', margin: '10'}}/>
              <Button
                variant="outline"
                onClick={() => window.open("https://www.instagram.com/osudevs/", "_blank", "noopener,noreferrer")}
              >
                Follow
              </Button>
            </span>
            <span className="flex items-center space-x-2">
              <FaGithub style = {{fontSize: '4.5vw', margin: '10'}}/>
              <Button
                variant="outline"
                onClick={() => window.open("https://github.com/diversitydevelopersosu", "_blank", "noopener,noreferrer")}
              >
                Clone
              </Button>
            </span>
            <span className="flex items-center space-x-2">
              <img src={groupmeIcon.src} alt="GroupMe" width="33%" height="33%" className="m-2"/>
              <Button
                variant="outline"
                onClick={() => window.open("https://groupme.com/join_group/100306930/vQPkaNoz", "_blank", "noopener,noreferrer")}
              >
                Join
              </Button>
            </span>
          </div>
        </section>
        <section data-scroll-section className="flex flex-col items-center justify-center">
          <div className="Calendar mt-10">
            <iframe src="https://calendar.google.com/calendar/embed?src=diversitydevelopersohiostate%40gmail.com&ctz=America%2FNew_York" 
              style={{ border: 0, width: '800px', height: '600px' }}
            ></iframe>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Get in Contact with Us
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Questions? Inquiries?
            </p>
            <div className="mt-10">
              <h2>Email: diversitydevelopersohiostate@gmail.com</h2>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
