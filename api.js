'use strict'

const getPizzas = require('./handlers/get-pizzas')
const createOrders = require('./handlers/create-order')
const updateOrders = require('./handlers/update-order')
const deleteOrder = require('./handlers/delete-order')
const getOrders = require('./handlers/pizza-orders')
const Api = require('claudia-api-builder')
const api = new Api()

api.get('/hello', ()=> "Hello Welcome to my API!")
/*
api.get('/pizzas', () => {
 return getPizzas()
})

api.get('/pizzas/{id}', (request) => {
 return getPizzas(request.pathParams.id)
}, {
 error: 404
})

api.post('/orders', (request) => {
 return createOrders(request.body)
}, {
	success:201
 error: 400
})

api.post('/orders/{id}', (request) => {
 return updateOrders(request.body, request.pathParams.id)
}, {
 error: 400
})

api.get('/orders', () => {
 return getOrders()
})

api.get('/orders/{id}', (request) => {
 return getOrders(request.pathParams.id)
 }, {
 error: 400
})

api.delete('orders/{id}', (request)=>{
	return deleteOrder(request.pathParams.id)
	}, {
 error: 400
})
*/
module.exports = api
//claudia create --region ap-southeast-1 --api-module api
/*aws dynamodb create-table --table-name sinyi-pizza-orders \       
 --attribute-definitions AttributeName=orderId,AttributeType=S \
 --key-schema AttributeName=orderId,KeyType=HASH \
 --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
 --region ap-southeast-1 \
 --query TableDescription.TableArn --output text

aws dynamodb scan --table-name sinyi-pizza-orders --region ap-southeast-1 --output json
*/