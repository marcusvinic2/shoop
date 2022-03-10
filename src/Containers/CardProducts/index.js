import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, ProductName, ProductPrice } from './styles'
import Button from '../Button'

function CardProducts({ product }){
	return (
		<Container>
			<Image src={product.image} />

		<div>
			<ProductName>{product.name}</ProductName>
			<ProductPrice>{product.formatedPrice}</ProductPrice>
			<Button>Adicionar</Button>
		</div>
		</Container>
		)
}

export default CardProducts

CardProducts.propTypes = {
	product: PropTypes.object
}