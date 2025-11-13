import { useEffect, useState } from "react";
import { Form, Table, Button, Modal, Container } from "react-bootstrap";
import { fetchTodos } from "../data/todos"; 

const Todos = () => {
  const [todosRaw, setTodosRaw] = useState([]); 
  const [todos, setTodos] = useState([]); 
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const data = fetchTodos() || [];
    setTodosRaw(data);
    setTodos(data);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    const filtered = onlyWaiting
      ? todosRaw.filter((t) => !t.completed)
      : todosRaw;
    setTodos(filtered);

    const newTotalPages = Math.ceil(filtered.length / itemsPerPage);
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages || 1);
    }
  }, [onlyWaiting, todosRaw, itemsPerPage]);

  const totalPages = Math.ceil(todos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTodos = todos.slice(startIndex, startIndex + itemsPerPage);

  const toggleCompleted = (id) => {
    const updated = todosRaw.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodosRaw(updated);
  };

  const deleteTodo = (id) => {
    const updated = todosRaw.filter((todo) => todo.id !== id);
    setTodosRaw(updated);
    if (currentPage > Math.ceil(updated.length / itemsPerPage)) {
      setCurrentPage(1);
    }
  };

  const addTodo = () => {
    if (!newTitle.trim()) return;
    const maxId = todosRaw.length ? Math.max(...todosRaw.map((t) => t.id)) : 0;
    const newTodo = {
      userId: 1,
      id: maxId + 1,
      title: newTitle.trim(),
      completed: false,
    };
    const updated = [...todosRaw, newTodo];
    setTodosRaw(updated);
    setNewTitle("");
    setShowModal(false);
    setCurrentPage(Math.ceil(updated.length / itemsPerPage)); 
  };

  useEffect(() => {
    if (showModal) setNewTitle("");
  }, [showModal]);

  return (
    <Container fluid className="py-4" style={{ maxWidth: "100%", width: "100vw" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-2">
          <span style={{ color: "white" }} className="fw-semibold">Show only waiting:</span>
          <Button
            variant={onlyWaiting ? "warning" : "outline-warning"}
            onClick={() => setOnlyWaiting((s) => !s)}
            className="fw-bold"
          >
            {onlyWaiting ? (
              <>
                waiting <i className="bi bi-clock"></i>
              </>
            ) : (
              <>
                all <i className="bi bi-list-task"></i>
              </>
            )}
          </Button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            <i className="bi bi-plus-lg"></i>
          </Button>

          <Form.Select
            className="w-auto"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={50}>50 items per page</option>
            <option value={100}>100 items per page</option>
          </Form.Select>
        </div>
      </div>

      <div className="table-responsive" style={{ width: "100%" }}>
        <Table striped bordered hover className="text-center align-middle shadow-sm">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "5rem" }}>ID</th>
              <th>Title</th>
              <th style={{ width: "15rem" }}>Completed</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTodos.length > 0 ? (
              paginatedTodos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td className="text-start">{todo.title}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      {todo.completed ? (
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => toggleCompleted(todo.id)}
                        >
                          done <i className="bi bi-check-lg"></i>
                        </Button>
                      ) : (
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => toggleCompleted(todo.id)}
                        >
                          waiting <i className="bi bi-clock"></i>
                        </Button>
                      )}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center text-muted py-3">
                  No todos found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-2 mt-3 ">
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          style={{ color: "white" }}
        >
          First
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          style={{ color: "white" }}
        >
          Previous
        </Button>
        <span style={{ color: "white" }}>
          Page {currentPage} / {totalPages || 1}
        </span>
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((p) => p + 1)}
          style={{ color: "white" }}
        >
          Next
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(totalPages)}
          style={{ color: "white" }}
        >
          Last
        </Button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="bi bi-plus-lg text-primary"></i> Add Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              placeholder="Type your todo title here..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addTodo}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Todos;
