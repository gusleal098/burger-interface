import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: ShoppingBagIcon
    },
    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.Products,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: AddShoppingCartIcon
    }
]

export default listLinks