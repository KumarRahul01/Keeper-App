import Header from "./components/Header";
import Notes from "./components/Notes";
import allNotes from "./components/AllNotes";
// import allTasks from "./components/AllNotes";

const createNotesCard = (cardItem) => {
  return <Notes key={cardItem.key} title={cardItem.title} desc={cardItem.description} />;
};

function App() {
  return (
    <>
      <div className="w-full bg-slate-100 h-screen flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-row">{allNotes.map(createNotesCard)}</div>
      </div>
    </>
  );
}

export default App;
