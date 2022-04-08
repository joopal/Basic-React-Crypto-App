import { useCallback, useState } from "react"
import tw, { styled } from "twin.macro"

//import logo from "../../images/logo.png";

const NavLogo$ = tw.div`bg-black`

//<img className="w-32 cursor-pointer" src={logo} alt="logo" />
const NavLogo = () => (
  <NavLogo$>
    <h1 className="text-white px-4 py-2">BondingCurves</h1>
  </NavLogo$>
)

const NavLink$ = styled.li(({isLogin}) => [
  tw`flex items-center justify-center`,
  isLogin
    && tw`bg-[#2952e3] hover:bg-[#2036ad]`
    || tw`bg-[#392243] hover:bg-[#15121d]`,
])

const LinkText$ = styled.div`
  ${tw`flex rounded-full cursor-pointer w-full`}
  ${tw`flex flex-1 w-full items-center justify-center`}
`

const NavLink = ({isLogin, children}) => {
  return (
    <NavLink$ isLogin={isLogin}>
      <LinkText$>
        {children}
      </LinkText$>
    </NavLink$>
  )
}

const NavLinkList$ = styled.ul`
  ${tw`flex items-center justify-center`}
  ${tw`text-white list-none`}
  ${NavLink$} {
    ${tw`py-2 px-4 mx-2 text-center md:w-24`}
    width: 100%;
  }
`

const HamburgerMenu = ({onClick}) => (
  <div className="flex md:h-full ml-4 md:hidden">
    <button className="flex items-center px-3 py-2 border-2 rounded text-blue-300 border-blue-400 hover:text-black hover:border-black"
      onClick={onClick}
    >
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
      </svg>
    </button>
  </div>
)

const Navbar$ = styled.nav`
  ${tw`w-full flex flex-wrap justify-center md:justify-between items-center p-4`}
  ${NavLogo$} {
    ${tw`flex flex-1 md:flex-[0.5] flex-shrink-0 md:flex-initial justify-center items-center`}
  }
  ${NavLinkList$} {
    ${tw`w-full hidden md:flex flex-col md:flex-row flex-grow md:items-center md:justify-end md:w-auto`}
    ${({menuOpen}) => menuOpen && tw`flex`}
    ${NavLink$} {
      ${tw`flex-1 md:flex-initial mt-4 md:mt-0`}
    }
  }
`

const Navbar = () => {
  const [buttonState, setButtonState] = useState(false)
  const toggleButtonState = useCallback((e) => {
    e.preventDefault()
    setButtonState(bs => !bs)
  }, [setButtonState])

  return (
    <Navbar$ menuOpen={buttonState}>
      <NavLogo />
      <HamburgerMenu onClick={toggleButtonState} />

      <NavLinkList$>
        <NavLink>
          some
        </NavLink>
        <NavLink>
          menu
        </NavLink>
        <NavLink>
          items
        </NavLink>
        <NavLink>
          idk
        </NavLink>
        <NavLink isLogin={true}>
          connect
        </NavLink>
      </NavLinkList$>

    </Navbar$>
  )
}

export default Navbar;
