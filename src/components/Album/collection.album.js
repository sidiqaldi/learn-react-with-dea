import React, { useEffect, useState } from "react"
import axios from "axios"
import { Carousel, Button, ButtonGroup } from 'react-bootstrap';
import Loaders from "../Utilities/loaders";

const Collection = () => {

  const [data, setData] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)
  const [indexCarousel, setIndexCarousel] = useState(0)

  useEffect(() => {
    let isCancelled = false
    let imageUrl = `${process.env.REACT_APP_API_ENDPOINT}/photos?_limit=${limit}`
    if (isCancelled === false) {
      setLoading(true)
      axios
        .get(imageUrl)
        .then((result) => setData(result.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
    return () => {isCancelled = true}
  }, [limit])

  const handleLimit = (option) => {
    if (option === 'increase') {
      if (limit < 10) setLimit((prev) => prev + 1)
    }
    if (option === 'decrease') {
      if (limit > 1) {
        setLimit((prev) => prev - 1)
      }
    }
    setIndexCarousel(0)
  }

  const handleSelectCarousel = (selectedIndex, e) => {
    setIndexCarousel(selectedIndex);
  };

  if (loading) return <Loaders />

  return (
    <React.Fragment>
      <h3>Display {limit} Caraousel Images </h3>
      <Carousel activeIndex={indexCarousel} onSelect={handleSelectCarousel} fade>
        {/* start carousel item management */}
        {data.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.url}
                alt={item.title}
                height={400}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.url}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
        {/* endof carousel item management */}
      </Carousel>
      <ButtonGroup className="mt-2 d-flex justify-content-center align-items-center">
        <Button variant="outline-primary" onClick={() => handleLimit('increase')} disabled={limit === 10}>+</Button>
        <Button variant="outline-primary" onClick={() => handleLimit('decrease')} disabled={limit === 1}>-</Button>
      </ButtonGroup>
    </React.Fragment>
  )
}

export default Collection