export default function Filter(){
    return (
        <>
            <section className="hero--banner">
                <h1 className="filter--title">Podcast</h1>
                <div className="search--pannel--section">
                    <input 
                        type="text"
                        placeholder="Filter"
                        className="form--input"
                    />
                    <button 
                        className="form--button"
                        // onClick={getMemeImage}
                    >
                        Search🖼
                    </button>
                </div>
                <div></div>
            </section>
        </>
    )
}