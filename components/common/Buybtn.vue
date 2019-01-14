<template>
	<button class="button-small pure-button" :class="{'pure-button-primary': active}"
	@click="clickBtn">
		{{btnText}}
	</button>
</template>

<script>
	export default {
		name:"BuyBtn",
		data() {
			return {
				active:true,
				btnText:"加入购物车"
			};
		},
		methods:{
			clickBtn:function(){
				if(this.active){
					this.active=false;
					this.btnText="取消购买";
					this.$emit("addToCart");
				}else{
					this.active=true;
					this.btnText="加入购物车";
					this.$emit("removeFromCart");
				}
			}
		}
	}
</script>

<style>

</style>
