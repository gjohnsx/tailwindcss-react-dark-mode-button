/* eslint-disable jsx-a11y/anchor-is-valid */
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  export default function Nav(props) {
    return (
      <header className="bg-white dark:bg-indigo-600 transition-colors sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src={`https://tailwindui.com/img/logos/workflow-mark.svg${props.darkMode ? '?color=white' : ''}`}
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-indigo-500 dark:text-white hover:text-indigo-800 dark:hover:text-indigo-300">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="ml-10 space-x-4">              
              <button
                className={`${props.clickEffect && 'animate-wiggle'} inline-block bg-indigo-500 dark:bg-white text-white dark:text-indigo-700 py-2 px-4 border border-transparent rounded-full text-base font-medium dark:hover:drop-shadow-2xl transition-all`}
                onClick={() => {
                    props.toggleDarkMode();
                    props.setClickEffect(true);
                  }}
                  onAnimationEnd={() => props.setClickEffect(false)}
                >
                {props.darkMode ? <SunIcon className='h-5 w-5 text-indigo-500' /> : <MoonIcon className='h-5 w-5 text-white'/>}
              </button>
            </div>

          </div>
        </nav>
      </header>
    )
  }
  