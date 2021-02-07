import Head from 'next/head'
import bg from '../public/bg.svg';
import logo from '../public/hatchful-export/logo_transparent.png';

const Button = ({ url, children }) =>
  <a href={url}>
    <button className="bg-white w-32 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
      {children}
    </button>
  </a>;

const GithubIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-6 h-6 mr-2" viewBox="0 0 20 20">
    <path
      d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
    />
  </svg>;

const PatreonIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-6 h-6 mr-2" viewBox="0 0 180 180">
    <path className="fill-current text-grey-darker group-hover:text-patreon-orange"
      d="M108.814 26.067c-26.469 0-48.003 21.53-48.003 47.998 0 26.386 21.534 47.854 48.003 47.854 26.386 0 47.853-21.468 47.853-47.854 0-26.467-21.467-47.998-47.853-47.998"
    />
    <path className="fill-current text-grey-darker group-hover:text-patreon-black" d="M23.333 153.933V26.067H46.8v127.866z" />
  </svg>;

const TwitterIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-6 h-6 mr-2" viewBox="0 0 512 512">
    <path
      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    />
  </svg>;

const HashnodeIcon = () =>
  <svg className="fill-current w-6 h-6 mr-2" viewBox="0 0 337 337" fill="none">
    <rect x="113" y="113" width="111" height="111" rx="55.5" fill="white"/>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
      fill="#000000"
    />
  </svg>;

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ville Lindholm, software engineer</title>
        <meta name="keywords" content="quickwords, productivity, application, cross-platform, macos, app, textexpander" />
        <meta name="description" content="Quickwords is a productivity app, to get on with your work quicker" />
        <meta name="robots" content="INDEX,FOLLOW"/>
        <meta name="Author" content="Ville Lindholm" />
        <link rel="icon" href="/favicon.a950e28e.png" />
        <meta name="theme-color" content="#24a1de" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
        <meta property="og:title" content="Quickwords" />
        <meta property="og:site_name" content="Quickwords" />
        <meta property="og:description" content="Quickwords is a productivity app, to get on with your work quicker" />
        <meta property="og:image" content="https://quickwords.co/assets/icon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@quickwordsapp" />
        <meta name="twitter:title" content="Quickwords" />
        <meta name="twitter:description" content="Quickwords is a productivity app, to get on with your work quicker" />
        <meta name="twitter:image" content="https://quickwords.co/assets/icon.png" />
      </Head>
      <div className="flex items-center header border-t-5 border-blue bg-grey h-screen text-black bg-cover" style={{
        backgroundImage: `url(${bg})`,
      }}>
        <div className="container mx-auto px-8 sm:px-0 max-w-sm">
          <div className="flex mx-auto"><img src={logo} alt="lindholm.dev logo" /></div>
          <div className="text-center mt-8 flex flex-col">
            <h1 className="font-serif text-5xl">Ville Lindholm</h1>
            <span>Full-stack software developer</span>
          </div>
          <div className="mt-8 mx-auto flex flex-col sm:flex-row sm:justify-around text-center space-y-2 sm:space-y-0 sm:space-x-1">
            <Button url="https://blog.lindholm.dev"><HashnodeIcon /><span>Blog</span></Button>
            <Button url="https://github.com/vlindhol"><GithubIcon /><span>Github</span></Button>
            <Button url="https://twitter.com/VilleVLindholm"><TwitterIcon /><span>Twitter</span></Button>
            {/*<Button url="https://patreon.com"><PatreonIcon /><span>Patreon</span></Button>*/}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 sm:px-0">
        <section className="mt-32" id="portfolio">
          
        </section>
        {/*
        <section className="mt-32">
          <h1 className="mb-6">Authors</h1>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="flex flex-1">
              <div> <img className="w-16 h-16 rounded-full" src="https://avatars3.githubusercontent.com/u/4501047?s=64&v=4"
                  alt=""/> </div>
              <div className="ml-4 flex flex-col justify-center">
                <div className="text-lg">Dariusz Czajkowski</div>
                <div className="mt-1"><a href="https://twitter.com/CzajkowskiDarek">@CzajkowskiDarek</a></div>
              </div>
            </div>
            <div className="flex flex-1">
              <div> <img className="w-16 h-16 rounded-full" src="https://avatars3.githubusercontent.com/u/9699466?s=64&v=4"
                  alt=""/> </div>
              <div className="ml-4 flex flex-col justify-center">
                <div className="text-lg">Grzegorz Tłuszcz</div>
                <div className="mt-1"><a href="https://github.com/gtluszcz">@gtluszcz</a></div>
              </div>
            </div>
          </div>
        </section>*/}
      </div>
    </div>
  )
}
