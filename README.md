<!DOCTYPE html>  
<html lang="es">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Navegación</title>  
    <link rel="stylesheet" href="styles.css">  
</head>  
<body>  

    <header class="navbar">  
        <div class="logo">ISA.FASHION</div>  
        <nav>  
            <ul class="nav-links">  
                <li>New In</li>  
                <li>Ropa</li>  
                <li>Tops</li>  
                <li>Bottoms</li>  
                <li>Accesorios</li>  
                <li class="sale">Sale</li>  
                <li>Tiendas</li>  
            </ul>  
        </nav>  
        <div class="icons">  
            <div class="icon">👤</div>  
            <div class="icon">🔍</div>  
            <div class="icon">🛒(0) </div>  
        </div>  
    </header>  

</body>  
</html>
    <!DOCTYPE html>  
    <html lang="es">  
    <head>  
        <meta charset="UTF-8">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <title>Carrusel Simple</title>  
        <link rel="stylesheet" href="styles.css">  
    </head>  
    <body>  
        <div class="carrusel">  
            <div class="carrusel__contenido">  
                <img src="c:\Users\51942\Downloads\clases 1 mayte\3836241dc1e941516d3b6177e44c782f.jpg" alt="Imagen 1">  
                <img src="c:\Users\51942\Downloads\clases 1 mayte\1450d8a51d1e85bd833e5108d883be38.jpg" alt="Imagen 2">  
                <img src="c:\Users\51942\Downloads\clases 1 mayte\e7b359443954f9dfe888cc0fddf1b45a (1).jpg" alt="Imagen 3">  
            </div>  
            <button class="carrusel__boton" id="prevBtn">&#10094;</button>  
            <button class="carrusel__boton" id="nextBtn">&#10095;</button>  
        </div>  
    
        <script src="script.js"></script>  
    </body>  
    </html>
    </body>  
    </html>
</body>  
</html>

</div>  
</body>  
</html>  

<!DOCTYPE html>  
<html lang="es">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <link rel="stylesheet" href="styles.css">  
    <title>Galería de Productos</title>  
</head>  
<body>  
    <div class="gallery">  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\4659b96c1a9c84566d48289c9922c616.jpg" alt="Vestido">  
            <div class="content">  
                <h3>VESTIDOS</h3>  
                <a href="#vestidos" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\782fddebab28b49e02a467e247aa7dd0.jpg" alt="Polera">  
            <div class="content">  
                <h3>POLERAS</h3>  
                <a href="#poleras" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\6916c80dba1807a28047a2ecf717389b.jpg" alt="Polo">  
            <div class="content">  
                <h3>POLOS GRÁFICOS</h3>  
                <a href="#polos" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  
    </div>  
    <!DOCTYPE html>  
<html lang="es">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <link rel="stylesheet" href="styles.css">  
    <title>Galería de Productos</title>  
</head>  
<body>  
    <div class="gallery">  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\00f93ea24f8313e1bc07db8f3d9da642.jpg" alt="Jeans y Pantalones">  
            <div class="content">  
                <h3>JEANS & PANTALONES</h3>  
                <a href="#jeans" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\941b8797aea10735536967701f995f4b (1).jpg" alt="Calzado">  
            <div class="content">  
                <h3>CALZADO</h3>  
                <a href="#calzado" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\b1ff3654d05188bf9cb9a5a34dec69d8.jpg" alt="Faldas & Shorts">  
            <div class="content">  
                <h3>FALDAS & SHORTS</h3>  
                <a href="#faldas" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  

    </div>  
</body>  
</html>
</body>  
</html>
</div>  
        </div>  
    </div>  
    <!DOCTYPE html>  
    <html lang="es">  
    <head>  
        <meta charset="UTF-8">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <title>New In</title>  
        <style>  
            body {  
                font-family: Arial, sans-serif;  
                margin: 0;  
                padding: 10px;  
            }  
            .container {  
                display: flex;  
                flex-wrap: wrap;  
                justify-content: space-between;  
            }  
            .item {  
                width: calc(30.33% - 20px);  
                margin-bottom: 10px;  
                background: #fff;  
                border: 1px solid #ddd;  
                border-radius: 8px;  
                overflow: hidden;  
                text-align: center;  
                position: relative;  
            }  
            .item img {  
                width: 90%;  
                height: auto;  
            }  
            .item h3 {  
                margin: 10px 0;  
            }  
            .item p {  
                color: #555;  
            }  
            @media (max-width: 438px) {  
                .item {  
                    width: calc(30% - 10px);  
                }  
            }  
            @media (max-width: 430px) {  
                .item {  
                    width: 90%;  
                }  
            }  
        </style>  
    </head>  
    <body>  
    
    <h1>NEW IN</h1>  
    <div class="container">  
        <div class="item">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\a6d42fc6cb073c67c92cbd8e84c378fc.jpg" alt="Mini Vestido Hepbum">  
            <h3>Vestidos elegantes</h3>  
            <p>S/ 139.90</p>  
        </div>  
        <div class="item">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\dcbd2ae165c9634eb1ff65dc7399e40b.jpg"alt="Mini Vestido Sabrina">  
            <h3>polo crop top</h3>  
            <p>S/ 69.90</p>  
        </div>  
        <div class="item">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\61e9b561288fe7c0056714a29ee648ef.jpg" alt="Mini Vestido Genesis">  
            <h3>pantalón cargo</h3>  
            <p>S/ 159.90</p>
          
        </div>
        <body>
       <html>
       
      <!DOCTYPE html>  
<html lang="es">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <link rel="stylesheet" href="styles.css">  
    <title>Galería de Productos</title>  
</head>  
<body>  
    <div class="gallery">  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\bed58dca0897444ce3e51a9aeb9c822c.jpg" alt="TOPS">  
            <div class="content">  
                <h3>TOPS</h3>  
                <a href="#TOPS" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\780c43f3e3a4e37aeb188e6f0900cfbe.jpg" alt="JACKETS	 &  BLAZERS">  
            <div class="content">  
                <h3>JACKETS	 &  BLAZERS</h3>  
                <a href="#JACKETS	 &  BLAZERS" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  
        <div class="card">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\919b6c39310664055cab9961ce2a3e53.jpg" alt="CAMISAS & BLUSAS">  
            <div class="content">  
                <h3>CAMISAS & BLUSAS</h3>  
                <a href="#CAMISAS & BLUSAS" class="shop-button">SHOP NOW</a>  
            </div>  
        </div>  

    </div>  
</body>  
</html>
</body>  
</html>
</div>  
        </div>  
    </div>  
    <!DOCTYPE html>  
    <html lang="es">  
    <head>  
        <meta charset="UTF-8">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <link rel="stylesheet" href="styles.css">  
        <title>Galería de Productos</title>  
    </head>  
    <body>  
        <div class="gallery">  
            <div class="card">  
                <img src="c:\Users\51942\Downloads\clases 1 mayte\54d82d6470eea49f4a715c8fe9341766.jpg" alt="TEJIDOS">  
                <div class="content">  
                    <h3>TEJIDOS</h3>  
                    <a href="#TEJIDOS" class="shop-button">SHOP NOW</a>  
                </div>  
            </div>  
            <div class="card">  
                <img src="c:\Users\51942\Downloads\clases 1 mayte\8f340fea0389dbb1dcb3dee6062932cb.jpg" alt="CARTERAS & ACCESORIOS">  
                <div class="content">  
                    <h3>CARTERAS & ACCESORIOS </h3>  
                    <a href="#CARTERAS & ACCESORIOS" class="shop-button">SHOP NOW</a>  
                </div>  
            </div>  
            <div class="card">  
                <img src="c:\Users\51942\Downloads\clases 1 mayte\fa0b30cf52ffe8fd0f3b488e77c7b579.jpg" alt="SANDALIAS">  
                <div class="content">  
                    <h3>SANDALIAS</h3>  
                    <a href="#SANDALIAS" class="shop-button">SHOP NOW</a>  
                </div>  
            </div>  
    
        </div>  
    </body>  
    </html>
    </body>  
    </html>
    </div>  
            </div>  
        </div>  
        
    
    <h1>Best Sellers</h1>  
    <div class="container">  
        <div class="item">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\0bc18c46d0f9e59935ecfbfd9ac5d3f5.jpg" alt="Mini Vestido Hepbum">  
            <h3>Blazer Lowden</h3>  
            <p>S/ 130.90</p>  
        </div>  
        <div class="item">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\9dfcca3d671c619facb2877db8595f62.jpg"alt="Mini Vestido Sabrina">  
            <h3>Botas Witch - Negro</h3>  
           <p>S/ 110.90</p>  
        </div>  
        <div class="item">  
            <img src="c:\Users\51942\Downloads\clases 1 mayte\bd69a887dad09df04d2f6d7a4023fe21.jpg" alt="Mini Vestido Genesis">  
            <h3>Casaca Boston</h3> 
            <div class="precio"> 
            S/. <span class="precio-descontado">94.95</span> 
            <span class="precio-antiguo">S/. 139.90</span> <!-- Precio antiguo tachado --> 
          
        </div>  
    </div>  

</div>  
</body>  
</html>
</body>  
</html>
</div>  
    </div>  
</div> 
    <!DOCTYPE html>  
<html lang="es">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <link rel="stylesheet" href="styles.css">  
    <title>Pied de Página</title>  
</head>  
<body>  
    <footer>  
        <div class="footer-content">  
            <div class="customer-service">  
                <h3>Atención al cliente</h3>  
                <ul>  
                    <li>Formas de pago</li>  
                    <li>Métodos de Envío</li>  
                    <li>Cambios & Devoluciones</li>  
                    <li>Guía de Tallas</li>  
                    <li>Preguntas frecuentes (FAQ)</li>  
                    <li>Contáctanos</li>  
                    <li>Libro de Reclamaciones</li>  
                </ul>  
            </div>  
            <div class="newsletter">  
                <h3>10% dscto en tu primera compra</h3>  
                <p>Suscríbete para recibir promociones y eventos exclusivos.</p>  
                <input type="email" placeholder="Correo electrónico">  
                <button>Suscribirse</button>  
            </div>  
            <div class="about-us">  
                <h3>Nosotros</h3>  
                <ul>  
                    <li>Quienes somos</li>  
                    <li>Reviews de clientes</li>  
                    <li>Nuestras Tiendas</li>  
                    <li>Ventas Mayoristas</li>  
                    <li>Trabaja con nosotros</li>  
                </ul>  
            </div>  
            
        </div>  
        <div class="footer-info">  
            <p>© 2024 Estilo que inspira, pasión que define.</p>
             <div class="social-media">  
                <a href="f">Facebook</a>  
           
             <a href="#">Instagram</a>  
              <a href="#">TikTok</a>  
              
            </div>  
            <div class="payment-methods">  
                <img src="c:\Users\51942\Pictures\Screenshots\Captura de pantalla 2024-12-18 001855.png" alt="Métodos de Pago">  
            </div>  
        </div>  
    </footer>  
</body>  
</html>
