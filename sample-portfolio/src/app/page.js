'use client'

import Head from "next/head";
//import { BsFillMoonStarsFill } from "react-icons/bs";
//import {AiFillTwitterCirle, AiFilledLinkedIn, AiFilledYoutube} from "react-icons/ai"
import Image from "next/image";
import deved from '../../public/girl.jpg'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from  '../../public/web1.png'
import web2 from  '../../public/web2.png'
import web3 from  '../../public/web3.png'
import web4 from  '../../public/web4.png'
import web5 from  '../../public/web5.png'
import web6 from  '../../public/web6.png'
{/*making darkmode*/}
import {useState} from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div>
      <Head>
        <title>Nicole's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-white md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-black font-semibold">nicolenjoroge</h1>
            <ul className="flex items-center">
              <li></li>
              <li>
                <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Nicole Njoroge</h2>
            <h3 className="text-2xl py-2 text-black md:text-3xl">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">I am a passionate and dedicated software developer with expertise in web development and a strong background in programming languages such as JavaScript, Python, and Java. I love creating innovative and user-friendly solutions that solve real-world problems. My goal is to leverage my skills to deliver high-quality software and contribute to impactful projects.

            </p>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>
        {/*end of the first page documentation*/}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800"><span className="text-teal-500">Programming Languages</span>: JavaScript, Python, Java, HTML, CSS, SQL</p>
<p className="text-md py-2 leading-8 text-gray-800"><span className="text-teal-500">Web Development</span>: React, Angular, Node.js, Express.js, Django, Flask</p>
<p className="text-md py-2 leading-8 text-gray-800"><span className="text-teal-500">Databases</span>: MySQL, MongoDB, PostgreSQL</p>
          </div>
          {/*creating cards */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl">
              <Image src={design}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
              <p className="py-2">Create with me all day anyday anytime</p>
              <h4 className="text-teal-500 py-4">Services I offer</h4>
              <p className="py-1 text-gray-800">Adobe XD</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl">
              <Image src={code}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
              <p className="py-2">Create with me all day anyday anytime</p>
              <h4 className="text-teal-500 py-4">Services I offer</h4>
              <p className="py-1 text-gray-800">Adobe XD</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl">
              <Image src={consulting}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
              <p className="py-2">Create with me all day anyday anytime</p>
              <h4 className="text-teal-500 py-4">Services I offer</h4>
              <p className="py-1 text-gray-800">Adobe XD</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>

          </div>
        </section>
        <section>
          {/*making a responsive portfolio section/websection*/}
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800">I am a passionate and dedicated software developer with expertise in web development and a strong background in programming languages such as JavaScript, Python, and Java. I love creating innovative and user-friendly solutions that solve real-world problems. My goal is to leverage my skills to deliver high-quality software and contribute to impactful projects.

            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap" >
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1"> 
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
