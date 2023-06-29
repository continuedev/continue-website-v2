import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-36 h-36 fill-current white" viewBox="0 0 736 178" fill="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
                <path d="M137.25 117.625V108.25H127.875V98.875H118.5V70.75H127.875V61.375H137.25V52H174.75V61.375H184.125V70.75H165.375V61.375H146.625V70.75H137.25V98.875H146.625V108.25H165.375V98.875H184.125V108.25H174.75V117.625H137.25ZM202.875 117.625V108.25H193.5V61.375H202.875V52H249.75V61.375H259.125V108.25H249.75V117.625H202.875ZM212.25 108.25H240.375V61.375H212.25V108.25ZM268.5 117.625V52H287.25V61.375H296.625V70.75H306V80.125H315.375V52H334.125V117.625H315.375V98.875H306V89.5H296.625V80.125H287.25V117.625H268.5ZM371.625 117.625V61.375H352.875V52H409.125V61.375H390.375V117.625H371.625ZM427.875 117.625V108.25H446.625V61.375H427.875V52H484.125V61.375H465.375V108.25H484.125V117.625H427.875ZM493.5 117.625V52H512.25V61.375H521.625V70.75H531V80.125H540.375V52H559.125V117.625H540.375V98.875H531V89.5H521.625V80.125H512.25V117.625H493.5ZM577.875 117.625V108.25H568.5V52H587.25V108.25H615.375V52H634.125V108.25H624.75V117.625H577.875ZM643.5 117.625V52H709.125V61.375H662.25V80.125H699.75V89.5H662.25V108.25H709.125V117.625H643.5Z"/>
                <rect y="21" width="34.8" height="123.382"/>
                <rect x="34.7998" y="38.4004" width="17.4" height="88.5818"/>
                <rect x="52.2002" y="57.3809" width="17.4" height="52.2"/>
                <rect x="69.6001" y="74.7812" width="17.4" height="17.4"/>
              </svg>
            </Link>
          </div>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
