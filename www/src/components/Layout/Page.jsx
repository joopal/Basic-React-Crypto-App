import tw from "twin.macro"

const Page$ = tw.div`w-full flex flex-col justify-center items-center flex-1 bg-[black]`

const Page = (props) => {
  return (
    <Page$>
      {props.children}
    </Page$>
  )
}

export default Page
