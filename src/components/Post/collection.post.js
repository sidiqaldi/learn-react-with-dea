import axios from "axios"
import React, { useEffect, useState } from "react"
import Loaders from "../Utilities/loaders"
import Item from "./item.post"
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const Collection = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  useEffect(() => {
    let isCancelled = false
    let imageUrl = `${process.env.REACT_APP_API_ENDPOINT}/posts?_limit=${limit}&_page=${page}`
    if (isCancelled === false) {
      setLoading(true)
      axios
        .get(imageUrl)
        .then((result) => setData(result.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
    return () => {isCancelled = true}
  }, [limit, page])

  const handleChangeLimit = (event) => {
    setLimit(parseInt(event.target.value))
    setPage(1)
  }

  const getLastItemId = () => {
    let lastItem = data[data.length-1]
    return lastItem.id
  }

  const handlePage = (option) => {
    if (option === 'next') {
      if (getLastItemId() != 100) setPage((val) => val + 1)
    }
    if (option === 'prev') {
      if (page > 1) setPage((val) => val - 1)
    }
  }

  if (loading) return (<Loaders />)

  return (
    <React.Fragment>
      <Row className="d-flex">
        <Col className="d-flex" xs={12} md={6}>
            <InputGroup className="mb-3 p-2">
              <label for="select-limit" className="p-2">Limit</label>
              <Form.Select id="select-limit" aria-label="select limit" onChange={handleChangeLimit} defaultValue={limit}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
              </Form.Select>
            </InputGroup>
        </Col>
        <Col className="d-flex" xs={12} md={6}>
          <InputGroup className="mb-3 p-2">
            <Button variant="outline-primary" onClick={() => handlePage('prev')} disabled={limit === 1}>Prev</Button>
            <label className="p-2 border border-primary">Page: {page}</label>
            <Button variant="outline-primary" onClick={() => handlePage('next')}>Next</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="d-flex">
        {/* start item management */}
        {data.map((item, index) => {
          return (
            <Col key={index}  className="d-flex" xs={6} md={3}>
              <Item data={item} />
            </Col>
          )
        })}
        {/* end item management */}
      </Row>
    </React.Fragment>
  )
}

export default Collection