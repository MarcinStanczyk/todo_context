import './App.css';
import Layout from "./components/Layout/Layout";
import TodoList from './components/Totos/TodoList/TodoList'
import TodoForm from './components/Totos/TodoForm/TodoForm'

function App() {
  return (
    <div className="App">
      <Layout>
          <TodoForm />
          <TodoList />
      </Layout>
    </div>
  );
}

export default App;
