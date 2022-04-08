import tw from "twin.macro"

const Wrapper$ = tw.div`min-h-screen w-full flex flex-col h-screen m-auto`

const Wrapper = (props) => {
  return (
    <Wrapper$>
      {props.children}
    </Wrapper$>
  )
}

export default Wrapper
