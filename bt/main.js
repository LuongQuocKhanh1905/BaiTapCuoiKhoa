
        var productList = []

		function updateTotalPrice() {
			var price = document.getElementById('price').value
			var quantity = document.getElementById('quantity').value

			totalPrice = price * quantity

			document.getElementById('total_price').value = totalPrice
		}

		var count = 0
		function addProduct() {
			var index = document.getElementById('index').value
			var productName = document.getElementById('productName').value
			var manufactureName = document.getElementById('manufactureName').value
			var price = document.getElementById('price').value
			var quantity = document.getElementById('quantity').value
			var totalPrice = document.getElementById('total_price').value

			var product = {
				'productName': productName,
				'manufactureName': manufactureName,
				'price': price,
				'quantity': quantity,
				'totalPrice': totalPrice
			}

			if(index != '') {
				productList[index] = product
				showProduct()
				return;
			}
			productList.push(product)

			document.getElementById('result').innerHTML += `<tr>
						<td>${++count}</td>
						<td>${productName}</td>
						<td>${manufactureName}</td>
						<td>${price}</td>
						<td>${quantity}</td>
						<td>${totalPrice}</td>
						<td><button class="btn btn-warning" onclick="editProduct(${count - 1})">Edit</button></td>
						<td><button class="btn btn-danger" onclick="deleteProduct(${count - 1})">Delete</button></td>
					</tr>`
		}

		function deleteProduct(index) {
			let check = confirm("Bạn muốn xóa sản phẩm  ?")
			if(check){
				console.log(index)
				productList.splice(index, 1);
				showProduct();

			}
			else{
				alert("Thao tác không được thực hiện!");
			}
		}

		function showProduct() {
			document.getElementById('result').innerHTML = ''

			for (var i = 0; i < productList.length; i++) {
				document.getElementById('result').innerHTML += `<tr>
						<td>${i+1}</td>
						<td>${productList[i].productName}</td>
						<td>${productList[i].manufactureName}</td>
						<td>${productList[i].price}</td>
						<td>${productList[i].quantity}</td>
						<td>${productList[i].totalPrice}</td>
						<td><button class="btn btn-warning" onclick="editProduct(${i})">Edit</button></td>
						<td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
					</tr>`
			}
		}

		function editProduct(index) {
			let check = confirm("Bạn muốn sửa sản phẩm ?" + productList[index].productName);
			if(check){
				var product = productList[index]
			console.log(product)
			document.getElementById('index').value = index
			document.getElementById('productName').value = product.productName
			document.getElementById('manufactureName').value = product.manufactureName
			document.getElementById('price').value = product.price
			document.getElementById('quantity').value = product.quantity
			document.getElementById('total_price').value = product.totalPriceproductList.splice(index, 1);
				showProduct();
			}
			else{
				alert("Thao tác không được thực hiện!");
			}
			
		}