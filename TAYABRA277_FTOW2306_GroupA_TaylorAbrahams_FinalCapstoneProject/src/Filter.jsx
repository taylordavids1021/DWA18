import About from "./About"
import SearchPanel from "./SearchPanel"

export default function Filter(){
    return (
        <>
            <section className="hero--banner">
                <h1 className="filter--title">Podcast</h1>
                <div>
                    <About />
                    <SearchPanel />
                </div>
            </section>
        </>
    )
}