import { Roboto } from "next/font/google";

import Image from "next/image";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-Primary flex justify-center items-center h-80p">
        <section className="w-4/5 h-90perc flex flex-col">
          <div className=" Mobile:leading-normal md:leading-normal h-2/3 flex flex-col justify-center">
            <p className="text-altWhite Mobile:text-2xl flex flex-col leading-normal">
              Hi, my name is
              <span className="text-aqua Mobile:text-6xl md:text-8xl h-24 flex items-center font-medium">
                Irvin Martinez.
              </span>
            </p>
            <h2 className="text-altWhite mt-2 font-semibold text-6xl">
              I develop software.
            </h2>
          </div>
          <div className="">
            <p className="text-altWhite text-xl">
              I am a software developer specializing in web tecnologies included
              Next Js, React Js, Typescript, Tailwind and PostgreSQL.
            </p>
          </div>
          {/* <div>
            <p className="text-altWhite">
              Currently, I'm building microservices for the backend with node
              and go.
            </p>
          </div> */}
        </section>
      </main>
      <div className="bg-gradient-to-r from-Orange to-Secondary h-1 "></div>

      <div className="Mobile:bg-SecondaryBlue flex flex-col items-center">
        <div className="section-blue text-white">
          <section id="projects" className="p-6">
            <h2 className="text-4xl">Projects I am proud of</h2>

            <article className="flex flex-col mt-10 mb-10 ">
              <div>
                <h4 className="text-lg">Latest Project</h4>
                <h3 className="text-aqua text-2xl">Conexión Huellitas</h3>
                <p className="bg-Primary text-altWhite p-4 rounded-2xl">
                  Find your perfect pet companion with our pet adoption
                  application. Create an account, find the perfect pet from a
                  variety of shelters in Argentina ready for a fast adoption
                  process. This project was an MVP for No Country in a
                  multidisciplinary team consisting of 5 week sprints.
                </p>
                <h4 className="mt-4">Technologies used include:</h4>
                <ul className="ml-8 mb-4 flex justify-evenly w-5/6">
                  <li className="mr-2">React.js</li>
                  <li className="mr-2">Vite</li>
                  <li className="mr-2">Tailwind</li>
                  <li className="mr-2">Node.js</li>
                  <li className="mr-2">MongoDB</li>
                  <li className="mr-2">Git</li>
                </ul>
              </div>
              <Image
                src="/pets.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </article>

            <article className="flex flex-col mt-10 mb-10 ">
              <div>
                <h3 className="text-aqua text-2xl">Videogames Finder</h3>
                <p className="bg-Primary text-altWhite p-4 rounded-2xl">
                  Find your perfect pet companion with our pet adoption
                  application. Create an account, find the perfect pet from a
                  variety of shelters in Argentina ready for a fast adoption
                  process. This project was an MVP for No Country in a
                  multidisciplinary team consisting of 5 week sprints.
                </p>
                <h4 className="mt-4">Technologies used include:</h4>
                <ul className="ml-8 mb-4 flex justify-evenly w-5/6">
                  <li className="mr-2">React.js</li>
                  <li className="mr-2">Vite</li>
                  <li className="mr-2">Tailwind</li>
                  <li className="mr-2">Node.js</li>
                  <li className="mr-2">MongoDB</li>
                  <li className="mr-2">Git</li>
                </ul>
              </div>
              <Image
                src="/devtoclone.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </article>

            <article className="flex flex-col mt-10 mb-10 ">
              <div>
                <h3 className="text-aqua text-2xl">Flappy</h3>
                <p className="bg-Primary text-altWhite p-4 rounded-2xl">
                  Find your perfect pet companion with our pet adoption
                  application. Create an account, find the perfect pet from a
                  variety of shelters in Argentina ready for a fast adoption
                  process. This project was an MVP for No Country in a
                  multidisciplinary team consisting of 5 week sprints.
                </p>
                <h4 className="mt-4">Technologies used include:</h4>
                <ul className="ml-8 mb-4 flex justify-evenly w-5/6">
                  <li className="mr-2">React.js</li>
                  <li className="mr-2">Vite</li>
                  <li className="mr-2">Tailwind</li>
                  <li className="mr-2">Node.js</li>
                  <li className="mr-2">MongoDB</li>
                  <li className="mr-2">Git</li>
                </ul>
              </div>
              <Image
                src="/flappy.png"
                width={500}
                height={200}
                alt="Flappy company logo"
              />
            </article>

            <article className="flex flex-col mt-10 mb-10 ">
              <div>
                <h3 className="text-aqua text-2xl">Jobinder</h3>
                <p className="bg-Primary text-altWhite p-4 rounded-2xl">
                  Find your perfect pet companion with our pet adoption
                  application. Create an account, find the perfect pet from a
                  variety of shelters in Argentina ready for a fast adoption
                  process. This project was an MVP for No Country in a
                  multidisciplinary team consisting of 5 week sprints.
                </p>
                <h4 className="mt-4">Technologies used include:</h4>
                <ul className="ml-8 mb-4 flex justify-evenly w-5/6">
                  <li className="mr-2">React.js</li>
                  <li className="mr-2">Vite</li>
                  <li className="mr-2">Tailwind</li>
                  <li className="mr-2">Node.js</li>
                  <li className="mr-2">MongoDB</li>
                  <li className="mr-2">Git</li>
                </ul>
              </div>
              <Image
                src="/jobinder.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </article>

            <article className="flex flex-col mt-10 mb-10 ">
              <div>
                <h3 className="text-aqua text-2xl">Kidszone</h3>
                <p className="bg-Primary text-altWhite p-4 rounded-2xl">
                  Find your perfect pet companion with our pet adoption
                  application. Create an account, find the perfect pet from a
                  variety of shelters in Argentina ready for a fast adoption
                  process. This project was an MVP for No Country in a
                  multidisciplinary team consisting of 5 week sprints.
                </p>
                <h4 className="mt-4">Technologies used include:</h4>
                <ul className="ml-8 mb-4 flex justify-evenly w-5/6">
                  <li className="mr-2">React.js</li>
                  <li className="mr-2">Vite</li>
                  <li className="mr-2">Tailwind</li>
                  <li className="mr-2">Node.js</li>
                  <li className="mr-2">MongoDB</li>
                  <li className="mr-2">Git</li>
                </ul>
              </div>
              <Image
                src="/kidszone.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </article>
          </section>
        </div>
      </div>
      <div className="bg-gradient-to-r from-Orange to-Secondary h-1 "></div>

      <section
        id="Contact"
        className="bg-Orangeb h-60 flex flex-col items-center justify-center"
      >
        <div className="h-5/6 flex flex-col justify-around items-center w-5/6 leading-relaxed">
          <h2 className="text-altWhite text-2xl">Contact Me</h2>
          <p className="text-altWhite text-justify">
            I am always interested in hearing about new developing opportunities,
            latest and greatest tech news, or developer hustle.
          </p>
          <p className="bg-Orange w-1/4 rounded-lg h-1/4 flex flex-col justify-center items-center">
            <a className="text-altWhite" href="mailto:irvin0329@outlook.com">
              Email
            </a>
          </p>
        </div>
      </section>
      <div className="bg-gradient-to-r from-Orange to-Secondary h-1 "></div>

      <footer className="bg-Primary p-4 flex flex-col lg:flex-row justify-evenly items-center h-40">
        <h3 className="flex justify-center text-altWhite text-xl">
          Irvin Martinez Software Developer
        </h3>
        <div className="w-1/4">
          <ul className="flex justify-around">
            <li>
              <a
                href="http://www.linkedin.com/in/irvin-martinez-im"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#E53D00"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:irvin0329@outlook.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#E53D00"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <p className="flex justify-center text-altWhite text-sm">
          © 2024 Irvin Martinez. All rights reserved.
        </p>
      </footer>
    </>
  );
}
