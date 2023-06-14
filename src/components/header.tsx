import * as React from 'react'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'

import Logo from '@/svg/logo/logo.svg'
import HelloTham from '@/svg/logo/hellotham.svg'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Consultants', href: '/consultants', current: false },
  { name: 'Partners', href: '/partners', current: false },
  { name: 'Achievements', href: '/work', current: false },
  { name: 'Blog', href: '/blog', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-pink-100 sticky top-0 z-40">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:text-pink-600 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block md:hidden h-10 w-auto" src={Logo} alt="Logo" />
                  <img className="hidden md:block h-10 w-auto" src={HelloTham} alt="Logo" />
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-pink-200 text-pink-600'
                            : 'text-purple-600 hover:bg-purple-200 hover:text-pink-600',
                          'px-3 py-2 rounded-md text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-pink-200 text-pink-600'
                      : 'text-purple-600 hover:bg-purple-200 hover:text-pink-600',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
