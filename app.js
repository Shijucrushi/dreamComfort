window.onload = () => {
    let getOrder = document.getElementById('get-order')
    let order = document.getElementById('order')
    let gratitude = document.getElementById('gratitude')
    let gratitudeClose = document.getElementById('gratitude')
    let menuOpen = document.getElementById('menu-open')
    let menu = document.getElementById('menu')
    let overlay = document.getElementById('overlay')
    let orderClose = document.getElementById('order-close')
    let selectProduct = document.getElementById('select-product')
    let getName = document.getElementById('name')
    let getPhone = document.getElementById('phone')
    let getMail = document.getElementById('Mail')
    let submit = document.getElementById('submit')
    let gratTitle = document.getElementById('gratitude-title')
    let gratDesc = document.getElementById('gratitude-desc')


    // let fields = [{
    //     id: 'name',

    //     idError: 'name-error',
    // },
    // {
    //     id: 'phone',

    //     idError: 'phone-error',
    // }
    // ]
    // fields.forEach(field => {
    //     document.getElementById(field.id).onchange = () => {
    //         validateField(field.id,field.idError);
    //     }
    // })


    menuOpen.onclick = () => {
        menu.classList.add('open');
        overlay.style.display = 'block';

    }
    overlay.onclick = () => {
        menu.classList.remove('open');
        overlay.style.display = 'none';
        gratitude.style.display = 'none';
        order.style.display = 'none';
    }

    let links = document.querySelectorAll('.menu__link')


    for (let link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = link.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            overlay.style.display = 'none'
            menu.classList.remove('open')
        })
    }

    orderClose.onclick = () => {
        order.style.display = 'none'
        overlay.style.display = 'none'
    }


    gratitudeClose.onclick = () => {
        gratitude.style.display = 'none'
        overlay.style.display = 'none'
    }

    getOrder.onclick = () => {
        order.style.display = 'block'
        overlay.style.display = 'block'
        setOptions();
    }





    let productArray = [{
        productId: 1,
        productName: 'Huvudskott',
        productRigidity: 1,
        productPrice: 15000,
        productImg: 'img/item1.png'


    },
    {
        productId: 2,
        productName: 'Savarna',
        productRigidity: 2,
        productPrice: 10000,
        productImg: 'img/item2.png'

    },
    {
        productId: 3,
        productName: 'Lungfall',
        productRigidity: 3,
        productPrice: 12000,
        productImg: 'img/item3.png'

    },
    {
        productId: 4,
        productName: 'Dromsund',
        productRigidity: 2,
        productPrice: 13000,
        productImg: 'img/item4.png'

    },
    {
        productId: 5,
        productName: 'Vilska',
        productRigidity: 3,
        productPrice: 10000,
        productImg: 'img/item5.png'

    },
    {
        productId: 6,
        productName: 'Kvala',
        productRigidity: 1,
        productPrice: 13000,
        productImg: 'img/item6.png'

    }

    ]


    let setOptions = (title) => {
        selectProduct.innerHTML = ``

        productArray.forEach(product => {
            let option = document.createElement('option')
            option.innerText = product.productName
            option.setAttribute('value', product.productName)
            if (product.productName === title){
                option.setAttribute('selected', true)
            }
            selectProduct.appendChild(option);
            
        })

    }
    let nameError = document.getElementById('name-error')
    let phoneError = document.getElementById('phone-error')
    submit.onclick = () => {

        nameError.style.display = 'none'
        phoneError.style.display = 'none'
        let nameValue = getName.value
        let phoneValue = getPhone.value
        let selectValue = selectProduct.value

        if (!getName.value) {
            nameError.style.display = 'block';
        }
        else if (!getPhone.value) {
            phoneError.style.display = 'block';
        }
        else if (getName.value && getPhone.value) {
            gratitude.style.display = 'block'
            overlay.style.display = 'block'
            order.style.display = 'none'

            gratTitle.innerText = `Добрый день, ${nameValue}`
            gratDesc.innerText = `Ваш заказ, на матрас '${selectValue}' скоро будет передан в обработку`
        }

    }

        ;
    let showProduct = function () {
        let productsItems = document.getElementById('products__items')
        productArray.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('product')
            productCard.style.cssText = `
            background-image: url(${product.productImg});
             background-repeat: no-repeat;
             background-position: center;
              background-size: cover;
            
            `

            let cart = document.createElement('div')
            cart.classList.add('product__cart')
            cart.innerHTML = `<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_634_1240)">
<path d="M0 1.25C0 0.557292 0.557292 0 1.25 0H3.61979C4.76562 0 5.78125 0.666667 6.25521 1.66667H27.6615C29.0312 1.66667 30.0312 2.96875 29.6719 4.29167L27.5365 12.224C27.0937 13.8594 25.6094 15 23.9167 15H8.89062L9.17188 16.4844C9.28646 17.0729 9.80208 17.5 10.401 17.5H25.4167C26.1094 17.5 26.6667 18.0573 26.6667 18.75C26.6667 19.4427 26.1094 20 25.4167 20H10.401C8.59896 20 7.05208 18.7187 6.71875 16.9531L4.03125 2.83854C3.99479 2.64062 3.82292 2.5 3.61979 2.5H1.25C0.557292 2.5 0 1.94271 0 1.25ZM6.66667 24.1667C6.66667 23.8384 6.73133 23.5133 6.85697 23.21C6.9826 22.9066 7.16675 22.631 7.3989 22.3989C7.63105 22.1668 7.90664 21.9826 8.20996 21.857C8.51327 21.7313 8.83836 21.6667 9.16667 21.6667C9.49497 21.6667 9.82006 21.7313 10.1234 21.857C10.4267 21.9826 10.7023 22.1668 10.9344 22.3989C11.1666 22.631 11.3507 22.9066 11.4764 23.21C11.602 23.5133 11.6667 23.8384 11.6667 24.1667C11.6667 24.495 11.602 24.8201 11.4764 25.1234C11.3507 25.4267 11.1666 25.7023 10.9344 25.9344C10.7023 26.1666 10.4267 26.3507 10.1234 26.4764C9.82006 26.602 9.49497 26.6667 9.16667 26.6667C8.83836 26.6667 8.51327 26.602 8.20996 26.4764C7.90664 26.3507 7.63105 26.1666 7.3989 25.9344C7.16675 25.7023 6.9826 25.4267 6.85697 25.1234C6.73133 24.8201 6.66667 24.495 6.66667 24.1667ZM24.1667 21.6667C24.8297 21.6667 25.4656 21.9301 25.9344 22.3989C26.4033 22.8677 26.6667 23.5036 26.6667 24.1667C26.6667 24.8297 26.4033 25.4656 25.9344 25.9344C25.4656 26.4033 24.8297 26.6667 24.1667 26.6667C23.5036 26.6667 22.8677 26.4033 22.3989 25.9344C21.9301 25.4656 21.6667 24.8297 21.6667 24.1667C21.6667 23.5036 21.9301 22.8677 22.3989 22.3989C22.8677 21.9301 23.5036 21.6667 24.1667 21.6667Z" fill="url(#paint0_linear_634_1240)"/>
</g>
<defs>
<linearGradient id="paint0_linear_634_1240" x1="14.8728" y1="0" x2="14.8728" y2="26.6667" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D2B2"/>
<stop offset="1" stop-color="#4285B7"/>
</linearGradient>
<clipPath id="clip0_634_1240">
<rect width="30" height="26.6667" fill="white"/>
</clipPath>
</defs>
</svg>
`
           

            let productInfo = document.createElement('div');
            productInfo.classList.add('product__info')

            let productTitle = document.createElement('h3');
            productTitle.classList.add('product__title');
            productTitle.innerText = product.productName;

            let productRigidity = document.createElement('p');
            productRigidity.classList.add('product__rigidity')

            productRigidity.innerHTML = `Жесткость: <svg id="${product.productId}" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.20078 11.9002C6.20078 10.9613 5.43967 10.2002 4.50078 10.2002C3.5619 10.2002 2.80078 10.9613 2.80078 11.9002V15.5002C2.80078 16.4391 3.5619 17.2002 4.50078 17.2002C5.43967 17.2002 6.20078 16.4391 6.20078 15.5002V11.9002Z" />
                                <path
                                    d="M11.5992 8.29961C11.5992 7.36073 10.8381 6.59961 9.89922 6.59961C8.96033 6.59961 8.19922 7.36073 8.19922 8.29961V15.4996C8.19922 16.4385 8.96033 17.1996 9.89922 17.1996C10.8381 17.1996 11.5992 16.4385 11.5992 15.4996V8.29961Z" />
                                <path
                                    d="M17.0016 4.9002C17.0016 3.96131 16.2404 3.2002 15.3016 3.2002C14.3627 3.2002 13.6016 3.96131 13.6016 4.9002V15.5002C13.6016 16.4391 14.3627 17.2002 15.3016 17.2002C16.2404 17.2002 17.0016 16.4391 17.0016 15.5002V4.9002Z" />
                            </svg>`;
            if (product.productRigidity === 1) {
                productRigidity.classList.add('firstRigidity')
            } else if (product.productRigidity === 2) {
                productRigidity.classList.add('secondRigidity')
            } else if (product.productRigidity === 3) {
                productRigidity.classList.add('thirdRigidity')
            }


            let productPrice = document.createElement('p');
            productPrice.classList.add('product__price')

            productPrice.innerHTML = `Цена: <span class="product__span" >${product.productPrice}</span> y.e.`

            // if(product.productRigidity === 1
            // ){product.productId.classList.add(firstRigidity)}
            // else if(product.productRigidity === 2
            // ){product.productId.classList.add(secondRigidity)}
            // else if(product.productRigidity === 3
            // ){product.productId.classList.add(thirdRigidity)}; 
            productInfo.appendChild(productTitle);
            productInfo.appendChild(productRigidity);
            productInfo.appendChild(productPrice);
            productCard.appendChild(productInfo);
            productCard.appendChild(cart)
            productsItems.appendChild(productCard)

            cart.onclick = () => {
                order.style.display = 'block'
                overlay.style.display = 'block'
                setOptions(product.productName);
            }


        })
    }
    showProduct();
}