export default function SearchPanel(){
    return (
        <>
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
        </>
    )
}