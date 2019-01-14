<template>
	<table v-if="productArr.length>0" class="pure-table pure-table-horizontal">
		<thead>
			<tr>
				<th>#</th>
				<th>商品图片</th>
				<th>商品名称</th>
				<th>商品价格</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(product,index) in productArr">
				<td>{{index+1}}</td>
				<td><img :src="product.pic" class="pure-img" /></td>
				<td>{{product.name}}</td>
				<td>{{product.price}}</td>
				<td>
					<button
					@click="productArr.splice(index,1);removeFromCart(product.id)"
					class="button-del pure-button">删除</button>
				</td>
			</tr>
			<tr class="count-row">
				<td colspan="3">合计：</td>
				<td colspan="2">{{priceTotal}}</td>
			</tr>
		</tbody>
	</table>
	<h3 v-else>{{msg}}</h3>
</template>

<script>
	export default {
		name:"MyCart",
		data() {
			return {
				msg:"您还未选购任何商品...",
				productArr:[]
			}
		},
		computed:{
			priceTotal:function(){
				var total=0;
				for(var i=0;i<this.productArr.length;i++){
					total+=parseFloat(this.productArr[i].price);
				}
				return total;
			}
		},
		methods:{
			removeFromCart:function(productId){
				this.vHandler.$emit("removeFromCart",productId);
			}
		},
		beforeMount:function(){
			this.$http.get("./static/data/products.json").then(function(resp){
				var productIds=this.vHandler.productIds.sort();
				for (var i=0;i<productIds.length;i++) {
					this.productArr.push(resp.data[productIds[i]-1]);
				}
			},function(resp){
				console.log("Fail:",resp.status,resp.statusText);
			});
		}
	}
</script>

<style scoped>
	.pure-table{width:100%;}
	.pure-img{
		width: 60px;
		height: 60px;
	}
	.button-del{
		color:#fff;
		background:rgb(202,60,60)
	}
	.count-row td {
		padding:15px 10px;
		font-size:16px;
		font-weight:bold;
	}
</style>
