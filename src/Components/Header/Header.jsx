

import { Disclosure } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/Logo/Icon.png"
import SignUpButton from '../Buttons/SignUpButton/SignUpButton';
import styles from './Header.module.css'
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Feature', href: '/services', current: false },
  { name: 'Product', href: '/services', current: false },
  { name: 'Testomonial', href: '/services', current: false },
  { name: 'FAQ', href: '/services', current: false }

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ openModal }) {
  return (
    <Disclosure as="nav" style={{ backgroundColor: '#F5F7FA',padding:'0' }}>
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-4 text-gray-700 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden sm:block'>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className={styles.desktopLogo}
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="flex justify-center flex-1 items-center">
                <div className="flex flex-shrink-0 items-center sm:hidden">
                  <img
              
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} to={item.href}>
                        <span style={{ color: '#000' }}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-2 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button  onClick={openModal} className={styles.loginBtn}>Login</button>  <button className={styles.signupBtn} onClick={openModal}>Sign up</button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden  z-50 absolute" style={{ backgroundColor: '#F5F7FA', color: '#000', width: '100%' }}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : ' hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-1 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link to={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


