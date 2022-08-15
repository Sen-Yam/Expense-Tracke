import "./Style.css"
const  Header = () => {
   
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <button className="btn">Add</button>
           
        </header>
    )

}
Header.defaultProps = {
    title : "" ,
}
export default Header