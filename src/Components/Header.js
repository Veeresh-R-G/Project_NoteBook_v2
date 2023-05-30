const Header = () => {
    let active = true

    if (window.location.href.includes("user")) {
        active = false
    }
    else {
        active = true
    }

    return (
        <div className="header" style={{ display: active ? "block" : "none" }}>
            <h1 className="text-center mt-5  text-gray-800 underline text-4xl
             font-extrabold md:text-5xl ">Project Book</h1>
        </div>
    );
}

export default Header;