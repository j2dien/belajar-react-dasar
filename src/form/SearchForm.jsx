export default function SearchForm() {
    return (
        <form>
            <input type="text"/>
            <button type="submit" onClick={(e) => {
                e.preventDefault(); // mencegah form submit
                alert("Search button clicked!");
            }}>Search</button>
        </form>
    );
}