import CommonQuestions from "./components/CommonQuestions"
import FindUs from "./components/FindUs"
import Hero from "./components/Hero"
import Info from "./components/Info"

const Contact = () => {
  return (
    <div className="pb-32">
        <Hero/>
        <Info/>
        <FindUs/>
        <CommonQuestions/>
    </div>
  )
}

export default Contact