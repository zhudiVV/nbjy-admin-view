<template>
	<div class="container login">
		<div style="width: 40%;">
			<div class="login_title">后台管理</div>
			<div class="login_container">
				<div class="login_titles">管理员登陆系统</div>
				<div class="login_message">
					<div id="login_message">提示信息</div>
				</div>
				<div class="login_user">
					<!-- <img src="@/resource/imgs/login/user.png"> -->
					<!-- <i class="el-icon-user-solid"></i> -->
					<!-- <input id="user" type="text" placeholder="请输入用户名"> -->
					<el-input
					    placeholder="请输入用户名"
					    prefix-icon="el-icon-user-solid"
					    v-model="loginForm.username">
					  </el-input>
				</div>
				<div class="login_pwd login_user">
					<!-- <img src="@/resource/imgs/login/pwd.png">
					<input id="pwd" type="text" placeholder="请输入密码"> -->
					<el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
				</div>
				<div class="login_remenber">
					<!-- <input id="remenber_pwd" type="checkbox" value="1" checked> 记住密码 -->
					<el-checkbox v-model="checked">记住密码</el-checkbox>
				</div>
				<div class="login_submit" @click="login">
					<!-- <div>登陆</div> -->
					<el-button style="width: 100%;" type="primary">登陆</el-button>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					username: '',
					password: '',
				},
				checked: true,
				rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}, ],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
				},
				showLogin: false,
			}
		},
		mounted() {
			this.$api.userLogin({
				username: this.loginForm.username,
				password: this.loginForm.password
			})
		},
		computed: {

		},
		methods: {
			login() {
				console.log('44444444444444')
				console.dir(this.$api)
				this.$api.userLogin({
					username: this.loginForm.username,
					password: this.loginForm.password
				}).then(res => {
					console.log('0000000009999999999')
					console.dir(res)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		background: url("@/resource/imgs/login/loginBackground.jpg");
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.login_title {
		text-align: center;
		margin: 10px 0;
		font-size: 30px;
		color: white;
		font-family: "华文行楷";
	}

	.login_container {
		padding: 20px 30px;
		background: rgba(0, 0, 0, 0.3);
	}

	.login_titles {
		margin-bottom: 10px;
		text-align: center;
		font-size: 16px;
		color: #eee;
	}

	.login_user {
		position: relative;
		margin: 20px 0;
	}

	.login_user img {
		position: absolute;
		height: 20px;
		top: 50%;
		left: 8px;
		transform: translateY(-50%);
	}

	.login_user input {
		outline: none;
		border: none;
		padding: 7px 0px 7px 35px;
		width: 250px;
		font-family: "Microsoft soft";
		font-size: 14px;
		opacity: 0.4;
	}

	.login_remenber {
		font-family: "Microsoft soft";
		font-size: 14px;
		color: #eee;
	}

	.login_remenber input {
		outline: none;
		border: none;
		opacity: 0.7;
		vertical-align: middle;
	}

	.login_submit div {
		cursor: pointer;
		background: #00a1ff;
		opacity: 0.8;
		text-align: center;
		color: white;
		font-size: 16px;
		height: 30px;
		line-height: 30px;
		margin: 10px 0;
	}

	.login_message div {
		background: red;
		opacity: 0.8;
		text-align: center;
		color: white;
		font-size: 16px;
		height: 30px;
		line-height: 30px;
		margin: 10px 0;
		display: none;
		transition: 2s;
	}

	.login_message {
		-webkit-animation: login_message 2s linear;
		-moz-animation: login_message 2s linear;
		animation: login_message 2s linear;
	}

	@-webkit-keyframes login_message {

		/*设置内容由显示变为隐藏*/
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}

	}
</style>