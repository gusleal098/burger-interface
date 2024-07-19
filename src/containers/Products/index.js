import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import ProductsLogo from '../../assets/products-logo.png'
import api from '../../services/api'
import {CardProduct} from '../../components'
import formatCurrency from '../../utils/formatCurrency'

import {
    Container,
    ProductsImg,
    CategoryButton,
    CategoriesMenu,
    ProductsContainer

} from './styles'

export function Products({location: {state}}){

    let categoryId = 0
    if(state?.categoryId) { // ? = ELVIS OPERATOR
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategories] = useState(categoryId)

    useEffect(() => {

        async function loadCategories() {
            const {data} = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas'}, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map( product => {
                return {...product, formatedPrice: formatCurrency(product.price)}
            })

            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()

    }, [])

    useEffect(() => {
        if(activeCategory === 0) {
            setFilteredProducts(products)
        }   else {
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="Logo de Produtos" />
            <CategoriesMenu>
                {categories &&
                    categories.map(category => (
                    <CategoryButton type="button"
                    key={category.id}
                    isActiveCategory={activeCategory === category.id}
                    onClick={() => {
                        setActiveCategories(category.id)
                        }}
                        >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
                <ProductsContainer>
                        {filteredProducts &&
                            filteredProducts.map(product => (
                        <CardProduct key={product.id} product={product} />
                        ))} 
                    
                </ProductsContainer>
        </Container>
    )
}

Products.propTypes = {
    location: PropTypes.object
}