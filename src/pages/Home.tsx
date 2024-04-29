import { Link } from 'react-router-dom'
import {
  discordLogo,
  feat1,
  feat2,
  feat3,
  headerVideo,
  lifetimePassImg,
  logo,
  monthlyPassImg,
  xLogo,
} from '@/utils/images'

import { LINKS } from '@/utils/links'

export default function Home() {
  const navItems = [
    {
      label: 'Discord',
      href: '#',
      target: '_blank',
    },
    {
      label: 'NFTs',
      href: '#nfts',
      target: '',
    },
    {
      label: 'About',
      href: '#about',
      target: '',
    },
  ]

  const nfts = [
    {
      title: 'Monthly Pass',
      value: '',
      address: '',
      image: monthlyPassImg,
    },
    {
      title: 'Lifetime Pass',
      value: '',
      address: '',
      image: lifetimePassImg,
    },
  ]

  const features = [
    {
      image: feat1,
      title: 'Fully customizable BOT',
    },
    {
      image: feat2,
      title: 'Choose your snipes',
    },
    {
      image: feat3,
      title: 'Auto Pilot transactions',
    },
  ]

  const socialMidias = [
    {
      title: 'X',
      href: LINKS.X,
      image: xLogo,
    },
    {
      title: 'Discord',
      href: LINKS.DISCORD,
      image: discordLogo,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative w-full">
        <header className="fixed z-50 flex h-[80px] w-full items-center justify-center border-b border-white/50 bg-black/50 backdrop-blur-3xl">
          <div className="flex w-full max-w-[1366px] items-center justify-between px-8">
            <img width={56} height={56} src={logo} alt="Sanji logo" />
            <nav>
              <ul className="flex items-center gap-x-24">
                {navItems.map(({ href, label, target }) => {
                  return (
                    <li key={label}>
                      <Link
                        target={target}
                        to={href}
                        className="text-lg transition-colors duration-300 hover:text-gray-300"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <button className="h-[52px] rounded-[10px] bg-yellow600 px-10 font-medium transition duration-300 hover:bg-yellow700">
              Get Access
            </button>
          </div>
        </header>
        <video
          className="h-screen w-screen object-cover"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={headerVideo} type="video/mp4" />
        </video>

        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black/60" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-yellow600 opacity-50 blur-[200px]" />
        <div className="absolute -left-[250px] bottom-0 h-[500px] w-[500px] bg-yellow600 opacity-50 blur-[200px]" />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-center text-[3.5rem] font-black leading-none">
              Lorem ipsum dolor Lorem ipsum
            </h1>
            <p className="max-w-[660px] text-center text-xl">
              Lorem ipsum dolor lorem ipsum dolo lorem ipsum dolor lorem ipsum
              dolor lorem.
            </p>
          </div>
          <button className="h-[52px] rounded-[10px] bg-yellow600 px-10 font-medium transition duration-300 hover:bg-yellow700">
            Get Access
          </button>
        </div>
      </div>

      <div className="mt-32 h-px w-full bg-white/20" />

      <section id="nfts">
        <div className="mx-auto mt-32 flex flex-col items-center gap-20">
          <h1 className="text-center text-[3.5rem] font-black leading-none">
            Mint your access pass
          </h1>
          <div className="flex items-stretch gap-32">
            {nfts.map(({ image, title }) => {
              return (
                <div key={title} className="group relative overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} NFT image`}
                    className="transition-opacity duration-300 group-hover:opacity-75"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex translate-y-16 cursor-pointer flex-col items-center justify-center gap-y-6 rounded-xl border border-white/50 bg-black/70 py-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-[2rem] font-bold leading-none">
                      {title}
                    </h3>
                    <button className="h-[52px] rounded-[10px] bg-yellow600 px-10 font-medium transition duration-300 hover:bg-yellow700">
                      Mint pass
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="mt-32 h-px w-full bg-white/20" />

      <section id="features">
        <div className="relative mt-32 flex flex-col items-center">
          <div className="z-20 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-center text-[3.5rem] font-black leading-none">
                Features
              </h1>
              <p className="max-w-[660px] text-center text-xl">
                In commodo auctor eget congue sit. Ultrices eget pretium sit
                euismod mi id. Risus, aliquam odio posuere ac in in nisl sed
                augue.
              </p>
            </div>
            <button className="h-[52px] rounded-[10px] bg-yellow600 px-10 font-medium transition duration-300 hover:bg-yellow700">
              Get Access
            </button>
          </div>
          <ul className="z-20 mt-14 flex items-center gap-x-8">
            {features.map(({ image, title }) => {
              return (
                <li
                  key={title}
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center rounded-[10px] border border-white/20 bg-white/10 p-1 pb-8">
                    <img src={image} alt={`${title} NFT image`} />
                    <span className="mt-8 text-[1.25rem] font-semibold">
                      {title}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 bg-blue500 opacity-50 blur-[200px]" />
        </div>
      </section>

      <div className="mt-32 h-px w-full bg-white/20" />

      <footer className="flex h-[570px] w-full flex-col items-center bg-footer bg-cover bg-center bg-no-repeat">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex h-full w-full max-w-[1366px] items-center justify-between ">
            <div className="flex max-w-[400px] flex-col items-start gap-y-6">
              <p>
                Ultrices eget pretium sit euismod mi id posuere ac in in nisl
                sed augue. Posuere ac in in nisl sed augue.
              </p>
              <ul className="flex flex-nowrap items-center gap-4">
                {socialMidias.map(({ href, image, title }) => {
                  return (
                    <li key={title}>
                      <Link to={href} target="_blank">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue500/40 bg-blue500/10 transition-colors duration-300 hover:bg-blue500/40">
                          <img
                            width={20}
                            height={20}
                            src={image}
                            alt={`${title} logo`}
                          />
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-[1.375rem] font-bold leading-none">
                Resources
              </h4>
              <ul className="flex flex-col gap-2 text-base">
                <li className=" hover:text-blue500">
                  <Link to="#nfts">Get access</Link>
                </li>
                <li className=" hover:text-blue500">
                  <Link to="#features">Features</Link>
                </li>
                <li className=" hover:text-blue500">
                  <Link to="https://discord.gg/svnfZCgP" target="_blank">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-auto flex w-full flex-col items-center gap-6 pb-12">
            <div className="mt-32 h-px w-full bg-white/20" />

            <p>
              © 2024 Copyright <b>Sanji</b>. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
