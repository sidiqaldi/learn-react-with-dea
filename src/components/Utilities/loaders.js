import Spinner from 'react-bootstrap/Spinner';

const Loaders = () => {
  return (
    <div className="mt-2 d-flex justify-content-center align-items-center" style={{  minHeight: "100vh"}}>
      <div className="d-flex">
        <Spinner className="m-2" animation="grow" variant="primary" />
        <Spinner className="m-2" animation="grow" variant="warning" />
        <Spinner className="m-2" animation="grow" variant="danger" />
        <Spinner className="m-2" animation="grow" variant="success" />
      </div>
    </div>
  )
}

export default Loaders