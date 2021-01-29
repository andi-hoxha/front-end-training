import ACTIONS from '../shop/ShopActionTypes'
import {Redirect} from "react-router-dom";

const users = {
    users: []
}
const products = [
    {
        id: 1,
        productName: 'Laptop Asus ZenBook',
        brandName: 'ASUS',
        stock: 5,
        type: 'Asus ZenBook 14 UX433F',
        price: 700,
        img: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Asus_Zenbook_14_UX433FA.jpg',
        qty:0
    },
    {
        id: 2,
        productName: 'Laptop MSI Prestige 14 black',
        brandName: 'MSI',
        stock: 2,
        type: 'MSI Prestige 14 A10SC 14", 16GB RAM & 512GB SSD',
        price: 1099.50,
        img:'https://www.notebookcheck.net/uploads/tx_nbc2/msiGS70_1.png',
        qty:0
    },
    {
        id: 3,
        productName: 'Laptop MSI GE75 Raider',
        brandName: 'MSI',
        stock: 2,
        type: 'MSI GE75 Raider 9SG-642CZ,Core i7,16 GB DDR4 & 512GB SSD, 1TB HDD,black',
        price: 2325.99,
        img:'https://cdn.vox-cdn.com/thumbor/-4fM3c_3Y99CjhsxvZwT4KhXir0=/0x0:6425x4283/1200x800/filters:focal(2699x1628:3727x2656)/cdn.vox-cdn.com/uploads/chorus_image/image/66591601/GE66_Raider__9_.0.jpg',
        qty:0
    },
    {
        id: 4,
        productName: 'Laptop Lenovo Legion',
        brandName: 'Lenovo',
        stock: 6,
        type: 'Lenovo Legion 5-15IMH05H,15.6" Full HD, Intel Core i5,16GB RAM & 512GB SSD,NVIDIA GeForce GTX 1660 Ti,gray',
        price: 1059,
        img:'https://i.ytimg.com/vi/HTezIOtx2Go/maxresdefault.jpg',
        qty:0
    },
    {
        id: 5,
        productName: 'Laptop Lenovo ThinkBook',
        brandName: 'Lenovo',
        stock: 10,
        type: 'Lenovo ThinkBook 13s-IML,13",Intel Core i5,8GB RAM & 512GB SSD,Intel UHD Graphics,gray',
        price: 810.50,
        img:'https://i.ytimg.com/vi/HTezIOtx2Go/maxresdefault.jpg',
        qty:0
    },
    {
        id: 6,
        productName: 'Laptop Lenovo ThinkPad',
        brandName: 'Lenovo',
        stock: 3,
        type: 'Laptop Lenovo ThinkPad T490, 14", Intel Core i5, 16GB RAM & 512GB SSD,Intel UHD Graphics, black + Microsoft Office 2019',
        price: 1200,
        img:'https://i.pcmag.com/imagery/reviews/00PXgBSm60YMUWWpv15nMmZ-1.1605723768.fit_scale.size_1182x667.jpg',
        qty:0
    },
    {
        id: 7,
        productName: 'Laptop DELL Alienware',
        brandName: 'DELL',
        stock: 2,
        type: 'Dell Alienware 17 Area-51m R2, 17.3" FHD, Intel Core i9, 32GB RAM DDR4, 2TB SSD, NVIDIA GeForce RTX 2080 Super,black',
        price: 4075.50,
        img:'https://media.flixfacts.com/inpage/dell/Alienware17R5/img/feature1.jpg',
        qty:0
    },
    {
        id: 8,
        productName: 'Laptop Acer Swift 3',
        brandName: 'ACER',
        stock: 3,
        type: 'Acer Swift 3 (SF314-57G-51XX), 14" , Intel Core i5, 16GB RAM, 512GB SSD, NVIDIA GeForce MX350,blue',
        price: 1066.99,
        img:'https://static-ecapac.acer.com/media/catalog/product/cache/a17a77e026ef2eddd3ecae104c32cc71/a/c/acer-swift-5-sf514-54-wp-blue-02_1_1_2.png',
        qty:0
    },
    {
        id: 9,
        productName: 'Macbook Pro 2019',
        brandName: 'Apple',
        stock: 3,
        type: 'Apple MacBook Pro 16 Touch Bar, 16", 16GB RAM, 1TB SSD, Core i9, AMD Radeon Pro 5500M,Retina Display,Silver',
        price: 2649.99,
        img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',
        qty:0
    },
    {
        id: 10,
        productName: 'Macbook Air 2020',
        brandName: 'Apple',
        stock: 10,
        type: ' Apple MacBook Air 13, 13.3", Apple M1, 16GB RAM, 512GB SSD,Silver',
        price: 1670.99,
        img:'https://thegoodguys.sirv.com/products/50070551/50070551_692922.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90',
        qty:0
    },
    {
        id: 11,
        productName: 'Macbook Pro 2020 M1',
        brandName: 'Apple',
        stock: 4,
        type: 'Apple MacBook Pro 13 (Touch Bar), M1, 8GB, 1TB, Apple 8-core,Retina Display,Gray',
        price: 2044.50,
        img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',
        qty:0
    },
    {
        id: 12,
        productName: 'Macbook Pro 2020 M1',
        brandName: 'Apple',
        stock: 3,
        type: 'Apple MacBook Pro 13 (Touch Bar), 13", Apple M1, 16GB RAM, 512GB SSD,Gold',
        price: 1600,
        img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',
        qty:0,
    },
]

const shop = {
    primeProducts: [...products],
    cart: [],
    users:[]
}



export const primeShop = (state = shop, action) => {
    switch (action.type) {
        case ACTIONS.REGISTER:
            return {
                ...state,
                users: [...state.users, action.user],
                user: action.user
            }
        case ACTIONS.LOGIN:
            const userFound = state.users.find(user => user.username === action.username && user.password === action.password)
            return {...state, user: userFound}
        case ACTIONS.LOGOUT:
            return {...state, user: undefined,cart:[]}
        case ACTIONS.ADD_TO_CART:
            let product = [...state.primeProducts].find(next => next.id === action.id)
            if (state.cart.includes(product)) {
                let cartItems = [...state.cart]
                cartItems = cartItems.map(next => {
                    if(next.id === product.id){
                        next.qty +=1
                        return next
                    }
                    return next
                })
                return {
                    ...state,
                    cart: cartItems
                }
            } else {
                product.qty += 1
                return {
                    ...state,
                    cart: [...state.cart, product]
                }
            }
        case ACTIONS.INCREMENT_QTY:
            return {
                ...state,
                cart: state.cart.filter(next => next.id === action.id).map(item => item.qty + 1)
            }
        case ACTIONS.DECREMENT_QTY:
            return {
                ...state,
                cart: state.cart.filter(next => next.id === action.id).map(item => item.qty - 1)
            }
        case ACTIONS.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(next => next.id !== action.id)
            }
        case ACTIONS.CHECKOUT:
            const cartItems = [...state.cart]
            const primeProducts = [...state.primeProducts]
            cartItems.forEach(next => {
                primeProducts.filter(item => item.id === next.id).map(product => product.stock -= next.qty)
            })
            return {
                ...state,
                primeProducts: [...primeProducts],
                cart: []
            }
        default:
            return state
    }
}

const shopReducer = (state = {}, action) => {
    return {
        shop: primeShop(state.shop, action),
    }
}

export default shopReducer