import About from "./About"
import Authentication from "./loginForm"

export default function Navigation(){
    return (
        <>
            <section className="hero--banner">
                <h1 className="filter--title">Podcast</h1>
                <div>
                    <About />
                    <Authentication />
                </div>
            </section>
        </>
    )
}