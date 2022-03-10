import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "../../Containers/Carousel";
import { ContainerPrincipal } from "./styles";
import api from '../../Services/api'
import formatCurrency from '../../Utils/FormatCurrency'
import CardProducts from "../../Containers/CardProducts";

export function Home() {

  const [products, setProducts] = useState(0)

  useEffect(() => {

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
  }, [])

  return (

    <ContainerPrincipal>
      <Carousel />
      <Container>
        <Row>
          <Col style={{ border: '1px solid black' }} xs={6}>
            {products && products.map(product => (
              <CardProducts key={product.id} product={product} />
            ))}
          </Col>
        </Row>
      </Container>
    </ContainerPrincipal>

  )
}