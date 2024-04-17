import ContactList from "../src/components/ContactList/ContactList";
import SearchBox from "../src/components/SearchBox/SearchBox";
import ContactForm from "../src/components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
